var data = {
   "tags" : {
      "(0028,0300)" : {
         "entity" : "Image",
         "desc" : [
            "Indicates whether or not this image is a quality control or phantom image.",
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
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the ",
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
               }
            ]
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Quality Control Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
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
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,0010)" : {
         "entity" : "Patient",
         "name" : "Patient's Name",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Patient's full name.",
         "req" : "2",
         "usage" : "M"
      },
      "(0018,106c)" : {
         "usage" : "C - Required if Modality (0008,0060) = IVUS.May be present otherwise.",
         "req" : "1C",
         "desc" : [
            [
               "Identifier of waveform channel that records the synchronization channel or trigger, see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.3"
                  }
               },
               "."
            ],
            "Required if synchronization channel or trigger is encoded in a waveform in this SOP Instance"
         ],
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Synchronization Channel",
         "entity" : "Frame of Reference"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID",
         "module" : "General Series",
         "desc" : "Instance UID of Related Series",
         "entity" : "Series"
      },
      "(0028,0004)" : [
         {
            "usage" : "M",
            "req" : "1",
            "entity" : "Image",
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
            "name" : "Photometric Interpretation",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "usage" : "M",
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Specifies the intended interpretation of the pixel data.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.5.6.1.2",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for specialization."
               ]
            ],
            "module" : "US Image",
            "mod_tables" : [
               "table_C.8-18"
            ],
            "name" : "Photometric Interpretation"
         }
      ],
      "(0018,6011)[<0>](0018,6052)" : {
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "An array of X values used to create the piece wise linear curve.",
            "Required if Pixel Component Organization equals 0 or 1. Otherwise not used.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.9"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "US Region Calibration",
         "name" : "Table of X Break Points",
         "mod_tables" : [
            "table_C.8-17"
         ]
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "entity" : "Study",
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
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "General Image",
         "desc" : "Number of columns in the image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Columns",
         "entity" : "Image"
      },
      "(0040,000a)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Stage Code Sequence",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "module" : "US Image",
         "desc" : [
            "Sequence of items describing the performed Ultrasound Protocol Stage(s).",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "entity" : "Series",
         "module" : "General Series",
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
         "req" : "1"
      },
      "(0054,0220)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence that describes the projection of the anatomic region of interest.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "US Image",
         "mod_tables" : [
            "table_C.8-18",
            "table_10-25"
         ],
         "name" : "View Code Sequence",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,1062)" : {
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Nominal Interval",
         "desc" : "Average R-R interval used for these data, in msec",
         "module" : "US Image",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0028,1202)" : [
         {
            "entity" : "Image",
            "name" : "Green Palette Color Lookup Table Data",
            "mod_tables" : [
               "table_C.7-11b"
            ],
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
            ],
            "module" : "Image Pixel",
            "req" : "1C",
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "name" : "Green Palette Color Lookup Table Data",
            "mod_tables" : [
               "table_C.7-22a"
            ],
            "module" : "Palette Color Lookup Table",
            "desc" : [
               "Green Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
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
            "usage" : "C - Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR"
         }
      ],
      "(0018,6011)[<0>](0018,6032)" : {
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Pulse Repetition Frequency",
         "module" : "US Region Calibration",
         "desc" : "The ultrasound pulse repetition frequency, as defined by the manufacturer, used to collect data in the region. The units are in hertz.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0010,2299)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Organization",
         "usage" : "M",
         "req" : "2C"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,08ea)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0020,0020)" : {
         "usage" : "M",
         "req" : "2C",
         "module" : "General Image",
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
         "name" : "Patient Orientation",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0010,2298)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Patient"
      },
      "(0010,1000)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "name" : "Other Patient IDs",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,6011)[<0>](0018,603d)" : {
         "entity" : "Image",
         "module" : "US Region Calibration",
         "desc" : [
            "The starting and ending coordinates pairs of the m-line. Where the X0,Y0are the starting point and X1,Y1are the end point of the tm-line.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.10",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "TM-Line Position x0",
         "usage" : "U",
         "req" : "3"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "usage" : "U",
         "req" : "1C",
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study"
      },
      "(0010,0024)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "Specimen"
      },
      "(0028,1102)" : [
         {
            "entity" : "Image",
            "name" : "Green Palette Color Lookup Table Descriptor",
            "mod_tables" : [
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
            "module" : "Image Pixel",
            "req" : "1C",
            "usage" : "M"
         },
         {
            "req" : "1",
            "usage" : "C - Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR",
            "mod_tables" : [
               "table_C.7-22a"
            ],
            "name" : "Green Palette Color Lookup Table Descriptor",
            "module" : "Palette Color Lookup Table",
            "desc" : [
               "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). See ",
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
         }
      ],
      "(0008,1200)[<0>](0008,1115)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Common Instance Reference",
         "req" : "1",
         "usage" : "U"
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Description",
         "desc" : "Further description in free form text describing the device.",
         "module" : "Device",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "usage" : "U",
         "req" : "2",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this Sequence.",
            "This Sequence includes description of the specimen sampling step from an ancestor specimen, potentially back to the original part collection.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.3"
                  }
               },
               "."
            ]
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Preparation Sequence"
      },
      "(4ffe,0001)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "MAC Parameters Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0213)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Nomenclature",
         "desc" : [
            "The nomenclature used for Strain Description (0010,0212). See ",
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
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9213)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
            "Required if Real World Value Last Value Mapped (0040,9211) is absent.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_bd1c2eab-c851-45bf-8577-5108abbb24a6"
                     },
                     "content" : [
                        "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                     ]
                  },
                  "\n                      "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Double Float Real World Value Last Value Mapped"
      },
      "(0040,0253)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "name" : "Performed Procedure Step ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "entity" : "Image",
         "module" : "General Image",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "name" : "Smallest Image Pixel Value",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
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
         ],
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(60xx,0045)" : {
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Overlay Subtype",
         "module" : "US Image",
         "desc" : [
            "Defined Term that identifies the intended purpose of the ROI Overlay Type.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.5.6.1.11",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for specialization."
            ]
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Specimen"
      },
      "(0010,2180)" : {
         "module" : "Patient Study",
         "desc" : "Occupation of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Occupation",
         "entity" : "Study",
         "usage" : "U",
         "req" : "3"
      },
      "(0008,1200)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "module" : "Common Instance Reference",
         "req" : "1C",
         "usage" : "U"
      },
      "(0018,6011)[<0>](0040,9098)" : {
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Pixel Value Mapping Code Sequence",
         "module" : "US Region Calibration",
         "desc" : [
            "Sequence that, in conjunction with the Table of Pixel Values (0018,6058), provides a mapping from a Pixel Value to an associated Coded Concept.",
            "One or more Items shall included in this Sequence. The number of Items shall be equal to the value of Number of Table Entries (0018,6056).",
            "Required if the value of Pixel Component Organization (0018,6044) is 3 (Code Sequence look up).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.18",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image"
      },
      "(0028,0100)" : [
         {
            "usage" : "M",
            "req" : "1",
            "entity" : "Image",
            "module" : "Image Pixel",
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Bits Allocated"
         },
         {
            "req" : "1",
            "usage" : "M",
            "entity" : "Image",
            "name" : "Bits Allocated",
            "mod_tables" : [
               "table_C.8-18"
            ],
            "desc" : [
               "Number of bits allocated for each pixel sample.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.8.5.6.1.13",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for specialization."
               ]
            ],
            "module" : "US Image"
         }
      ],
      "(0020,0052)" : {
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
         "mod_tables" : [
            "table_C.7-6"
         ],
         "name" : "Frame of Reference UID",
         "entity" : "Frame of Reference",
         "usage" : "U",
         "req" : "1"
      },
      "(0018,5050)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Depth of Scan Field",
         "module" : "US Image",
         "desc" : "The depth, in mm, from the transducer face to the deepest point included in the displayed image- the field of view.",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Image",
         "desc" : "Person's telephone number(s)",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "req" : "2C",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present."
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Source",
         "module" : "Patient",
         "desc" : [
            "Identification of the organization that is the source of the animal, issued by the registry identified by Strain Source Registry Code Sequence (0010,0215). See ",
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
      "(0010,1100)[<0>](0008,1199)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "Patient",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Deidentification Action Sequence",
         "module" : "SOP Common",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Text Value",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "usage" : "U",
         "req" : "1",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Specimen Preparation Step Content Item Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image"
      },
      "(0018,5029)" : {
         "entity" : "Image",
         "module" : "US Image",
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.5.6.1.8"
               }
            },
            " for Description."
         ],
         "name" : "Soft Tissue-surface Thermal Index",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "module" : "Patient",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0012)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Date"
      },
      "(0040,0515)" : {
         "entity" : "Image",
         "name" : "Alternate Container Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "usage" : "U"
      },
      "(0012,0040)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject ID",
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
         "module" : "Clinical Trial Subject",
         "req" : "1C",
         "usage" : "U"
      },
      "(0028,0120)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "General Equipment",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
                                 }
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
                                 }
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
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Pixel Padding Value",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "entity" : "Image",
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
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "entity" : "Study",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0020,000d)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "Unique identifier for the Study."
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "SOP Common"
      },
      "(0008,0080)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment"
      },
      "(0018,106a)" : {
         "usage" : "C - Required if Modality (0008,0060) = IVUS.May be present otherwise.",
         "req" : "1",
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
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
         "name" : "Synchronization Trigger"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M"
      },
      "(0100,0426)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Authorization Equipment Certification Number",
         "entity" : "Image"
      },
      "(0010,2297)" : {
         "entity" : "Patient",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "module" : "Patient",
         "name" : "Responsible Person",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2C"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Modified Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0051)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Issuer of Accession Number Sequence"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "UID",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "entity" : "Study"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
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
         "entity" : "Patient"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0028,1199)" : {
         "req" : "3",
         "usage" : "C - Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "name" : "Palette Color Lookup Table UID",
         "module" : "Palette Color Lookup Table",
         "desc" : [
            "Palette Color Lookup Table UID. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.9.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ]
      },
      "(0018,0010)" : {
         "desc" : "Contrast or bolus agent",
         "module" : "Contrast/Bolus",
         "name" : "Contrast/Bolus Agent",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "entity" : "Image",
         "usage" : "C - Required if contrast media was used in this image.",
         "req" : "2"
      },
      "(0028,0107)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Largest Image Pixel Value",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "The maximum actual pixel value encountered in this image.",
         "module" : "Image Pixel",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Number of rows in the image.",
         "module" : "General Image",
         "name" : "Rows",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "usage" : "M",
         "req" : "2",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "entity" : "Series",
         "name" : "Referenced Frame Number",
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
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
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
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series",
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,6011)[<0>](0018,605a)" : {
         "name" : "Table of Parameter Values",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "desc" : [
            "A table of Parameter Values used in conjunction with the Table of Pixel Values (0018,6058) to provide a mapping from Pixel Value to Parameter Value.",
            "Required if the value of Pixel Component Organization (0018,6044) is 2.",
            [
               "Otherwise not used. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.13",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation"
            ]
         ],
         "module" : "US Region Calibration",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content Transfer Syntax UID",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0018,1244)" : {
         "entity" : "Image",
         "module" : "Cine",
         "desc" : [
            "Describes the preferred playback sequencing for a multi-frame image.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Preferred Playback Sequencing",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "Specimen"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "Image",
         "module" : "SOP Common",
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Signature",
         "usage" : "M",
         "req" : "1"
      },
      "(0012,0064)" : {
         "entity" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "name" : "De-identification Method Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate Type"
      },
      "(0020,4000)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Image Comments",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : "User-defined comments about the image",
         "entity" : "Image"
      },
      "(0040,9096)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Real World Value Mapping Sequence",
         "module" : "General Image",
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0008,0008)" : [
         {
            "entity" : "Image",
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
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Image Type",
            "usage" : "M",
            "req" : "3"
         },
         {
            "usage" : "M",
            "req" : "2",
            "entity" : "Image",
            "desc" : [
               "Image identification characteristics.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.5.6.1.1"
                     },
                     "el" : "xref"
                  },
                  " for specialization."
               ]
            ],
            "module" : "US Image",
            "name" : "Image Type",
            "mod_tables" : [
               "table_C.8-18"
            ]
         }
      ],
      "(0088,0200)[<0>](0028,0006)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Planar Configuration",
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "module" : "General Series",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,3010)" : {
         "name" : "Irradiation Event UID",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
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
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Text Value",
         "module" : "Specimen",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,0005)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Specific Character Set",
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
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "module" : "Specimen",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "name" : "Specimen Detailed Description",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "desc" : [
            "Length in mm of device. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Length",
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0018,1020)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Software Versions",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
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
         "entity" : "Equipment"
      },
      "(0018,0015)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Body Part Examined",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.16",
                     "targetptr" : "chapter_L",
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16"
                  },
                  "el" : "olink"
               },
               " for Defined Terms"
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ],
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "entity" : "Image",
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
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID Type",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "el" : "note",
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
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0028,1103)" : [
         {
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Blue Palette Color Lookup Table Descriptor",
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
            "module" : "Image Pixel",
            "entity" : "Image"
         },
         {
            "usage" : "C - Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR",
            "req" : "1",
            "entity" : "Image",
            "module" : "Palette Color Lookup Table",
            "desc" : [
               "Specifies the format of the Blue Palette Color Lookup table Data (0028,1203). See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "name" : "Blue Palette Color Lookup Table Descriptor",
            "mod_tables" : [
               "table_C.7-22a"
            ]
         }
      ],
      "(0008,0123)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Group Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            [
               "Sequence of Content Items identifying the location of the specimen in the container and/or in the image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.4"
                  }
               },
               "."
            ],
            "One or more Items shall be included in this Sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Localization Content Item Sequence",
         "entity" : "Image"
      },
      "(0028,1203)" : [
         {
            "req" : "1C",
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Blue Palette Color Lookup Table Data",
            "module" : "Image Pixel",
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
            ]
         },
         {
            "usage" : "C - Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR",
            "req" : "1C",
            "module" : "Palette Color Lookup Table",
            "desc" : [
               "Blue Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
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
            "mod_tables" : [
               "table_C.7-22a"
            ],
            "entity" : "Image"
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
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
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0012,0051)" : {
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial or research. See ",
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
         "name" : "Clinical Trial Time Point Description",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "usage" : "U",
         "req" : "3"
      },
      "(0028,1223)" : {
         "usage" : "C - Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Segmented Blue Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.9.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Palette Color Lookup Table",
         "name" : "Segmented Blue Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-22a"
         ]
      },
      "(0018,6011)[<0>](0018,6043)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "TM-Line Position y1",
         "desc" : [
            "The starting and ending coordinates pairs of the m-line. Where the X0,Y0are the starting point and X1,Y1are the end point of the tm-line.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.10",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "US Region Calibration",
         "req" : "3",
         "usage" : "U"
      },
      "(0050,0010)[<0>](0050,0018)" : {
         "name" : "Device Volume",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "desc" : [
            "Volume of device in ml. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               }
            },
            "."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(fffa,fffa)" : {
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signatures Sequence",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,6011)[<0>](0018,6054)" : {
         "usage" : "U",
         "req" : "1C",
         "module" : "US Region Calibration",
         "desc" : [
            "An array of Y values used to create the piece wise linear curve.",
            "Required if Pixel Component Organization equals 0 or 1. Otherwise not used.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.9"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Table of Y Break Points",
         "entity" : "Image"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1",
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Multi-frame Source SOP Instance UID",
         "entity" : "Image"
      },
      "(0018,1201)" : {
         "entity" : "Equipment",
         "desc" : [
            "Time when the image acquisition device calibration was last changed in any way. Multiple entries may be used. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.5.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "General Equipment",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0018,6011)[<0>](0018,604e)" : {
         "entity" : "Image",
         "desc" : [
            "The type of data for the pixel component.",
            "Required if Pixel Component Organization exists.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.7",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "US Region Calibration",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Pixel Component Data Type",
         "usage" : "U",
         "req" : "1C"
      },
      "(0008,0013)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Time"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient"
      },
      "(0028,1055)" : {
         "entity" : "Image",
         "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
         "module" : "VOI LUT",
         "name" : "Window Center & Width Explanation",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0028,1050)" : {
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
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
         "module" : "VOI LUT",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "name" : "Window Center"
      },
      "(0028,0302)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
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
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "entity" : "Image",
         "name" : "Device Diameter",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : [
            "Unit diameter of device. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               }
            },
            "."
         ],
         "module" : "Device",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Short Description",
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "module" : "Specimen",
         "req" : "3",
         "usage" : "U"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
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
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "entity" : "Image"
      },
      "(0008,1090)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Manufacturer's Model Name"
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
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "entity" : "Image",
         "desc" : "Manufacturer's model name of the container component.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Manufacturer's Model Name",
         "usage" : "U",
         "req" : "3"
      },
      "(0100,0410)" : {
         "entity" : "Image",
         "module" : "SOP Common",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "SOP Instance Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
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
         "entity" : "Series"
      },
      "(0038,0010)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admission ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date",
         "entity" : "Series"
      },
      "(0012,0021)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
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
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,6011)" : {
         "entity" : "Image",
         "desc" : [
            "Defines a sequence of Ultrasound Regions.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "US Region Calibration",
         "name" : "Sequence of Ultrasound Regions",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "usage" : "U",
         "req" : "1"
      },
      "(0018,0072)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Effective Duration",
         "desc" : "Total time in seconds that data was actually taken for the entire Multi-frame image.",
         "module" : "Cine",
         "req" : "3",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "usage" : "M",
         "req" : "3",
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
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure Description",
         "module" : "General Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "entity" : "Series"
      },
      "(0010,0035)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.5"
                  }
               },
               " for Defined Terms."
            ],
            "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."
         ],
         "module" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "entity" : "Image",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "U",
         "req" : "1"
      },
      "(0018,6011)[<0>](0018,604c)" : {
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "module" : "US Region Calibration",
         "desc" : [
            "The physical units to be applied to the pixel component.",
            "Required if Pixel Component Organization exists.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.6",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Pixel Component Physical Units"
      },
      "(0008,0031)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Time",
         "desc" : "Time the Series started.",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0018,6011)[<0>](0018,6014)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Region Data Type",
         "desc" : [
            "The type of data within the region.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Enumerated Values."
            ]
         ],
         "module" : "US Region Calibration",
         "req" : "1",
         "usage" : "U"
      },
      "(0040,9096)[<0>](0040,9214)" : {
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
            "Required if Real World Value First Value Mapped (0040,9216) is absent.",
            {
               "el" : "note",
               "content" : [
                  "\n                        ",
                  {
                     "attrs" : {
                        "xml:id" : "para_21eff4f3-31a1-4086-873d-2bb31aaf6698"
                     },
                     "el" : "para",
                     "content" : [
                        "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                     ]
                  },
                  "\n                      "
               ]
            }
         ],
         "name" : "Double Float Real World Value First Value Mapped",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,1800)" : {
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Acquisition Time Synchronized",
         "usage" : "C - Required if Modality (0008,0060) = IVUS.May be present otherwise.",
         "req" : "1"
      },
      "(0012,0020)" : {
         "usage" : "U",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Patient"
      },
      "(0018,6011)[<0>](0018,6041)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "TM-Line Position x1",
         "module" : "US Region Calibration",
         "desc" : [
            "The starting and ending coordinates pairs of the m-line. Where the X0,Y0are the starting point and X1,Y1are the end point of the tm-line.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.10",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "entity" : "Study",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
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
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Simple Frame List"
      },
      "(0010,2210)" : {
         "entity" : "Series",
         "module" : "General Series",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.1"
                  }
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
         "name" : "Anatomical Orientation Type",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "Specimen",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,2203)" : {
         "req" : "2C",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Sex Neutered",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     },
                     "el" : "para",
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Protocol Context Sequence",
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "Patient",
         "desc" : [
            "An identifier for the patient.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,1801)" : {
         "entity" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Time Source",
         "module" : "Synchronization",
         "desc" : "ID of equipment or system providing time reference",
         "req" : "3",
         "usage" : "C - Required if Modality (0008,0060) = IVUS.May be present otherwise."
      },
      "(0008,1048)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) of Record",
         "module" : "General Study",
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
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "module" : "Specimen",
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
         "entity" : "Image"
      },
      "(0018,9004)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Content Qualification",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image"
      },
      "(0008,114a)" : {
         "entity" : "Image",
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Referenced Instance Sequence",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,0033)" : {
         "req" : "2C",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Content Time",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ]
      },
      "(0028,0106)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Smallest Image Pixel Value",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "module" : "Image Pixel",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Description",
         "module" : "Specimen",
         "desc" : "Container component text description.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "DICOM Retrieval Sequence",
         "usage" : "M",
         "req" : "1C"
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "entity" : "Image",
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
         "name" : "Inter-Marker Distance",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0008,0090)" : {
         "req" : "2",
         "usage" : "M",
         "name" : "Referring Physician's Name",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Name of the patient's referring physician",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,103f)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Series Description Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1115)" : {
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "req" : "1C"
      },
      "(0018,0040)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Cine Rate",
         "desc" : "Number of frames per second.",
         "module" : "Cine",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "module" : "General Image",
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "entity" : "Image",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Specimen",
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "General Image",
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
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C"
      },
      "(0400,0561)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Attributes Sequence",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,1066)" : {
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Frame Delay",
         "module" : "Cine",
         "desc" : "Time (in msec) from Content Time (0008,0033) to the start of the first frame in a Multi-frame image.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "module" : "Specimen",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Identifier",
         "entity" : "Image",
         "usage" : "U",
         "req" : "1"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "entity" : "Series",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0512)" : {
         "name" : "Container Identifier",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "The identifier for the container that contains the specimen(s) being imaged. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.22.1.1"
               }
            },
            "."
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "U"
      },
      "(0010,0216)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Strain Stock Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Pixel Aspect Ratio",
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
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1140)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Image",
         "desc" : [
            "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Referenced Image Sequence",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0062,000b)" : {
         "entity" : "Image",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Image",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,2112)[<0>](0008,1160)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
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
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0022,0028)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-14"
         ],
         "name" : "Stereo Pairs Present",
         "desc" : [
            [
               "The multi-frame pixel data consists of left and right stereoscopic pairs. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.6.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "for further explanation."
            ],
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
         "module" : "Multi-frame"
      },
      "(0018,6011)[<0>](0018,6018)" : {
         "entity" : "Image",
         "desc" : [
            "The bounds of a rectangle specifying the location of the region, x0,y0,x1,y1.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "US Region Calibration",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Region Location Min x0",
         "usage" : "U",
         "req" : "1"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen",
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
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Image"
      },
      "(0018,5028)" : {
         "module" : "US Image",
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.5.6.1.8",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for Description."
         ],
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Soft Tissue-focus Thermal Index",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,212a)" : {
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Number of Views in Stage",
         "module" : "US Image",
         "desc" : "Number of views in this Stage. Required if image was acquired in a Staged protocol.",
         "entity" : "Image"
      },
      "(0020,000e)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Unique identifier of the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
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
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "el" : "para",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Attribute Modification DateTime",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Specimen",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0254)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Description",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,010f)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : [
            "The identifier of the Context Group.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_8.6",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Identifier",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0053)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Query/Retrieve View",
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
         "entity" : "Image"
      },
      "(0038,0064)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Issuer of Service Episode ID Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Study"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "module" : "SOP Common"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Common Instance Reference",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a040)" : {
         "module" : "General Image",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(7fe0,0010)" : {
         "usage" : "M",
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
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Pixel Data",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9216)" : {
         "name" : "Real World Value First Value Mapped",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value First Value Mapped (0040,9214) is absent.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "attrs" : {
                        "xml:id" : "para_3508a2ea-51f7-4d12-952b-1fec9e9b31a0"
                     },
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                     ]
                  },
                  "\n                      "
               ],
               "el" : "note"
            },
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "entity" : "Image",
         "name" : "Coding Scheme UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Thickness",
         "module" : "Specimen",
         "desc" : "Thickness in mm of container component"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
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
         "name" : "Referenced Frame Number",
         "usage" : "U",
         "req" : "1C"
      },
      "(0010,21b0)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Additional Patient History",
         "module" : "Patient Study",
         "desc" : "Additional information about the Patient's medical history.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0008,0015)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Coercion DateTime",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            ")."
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,1042)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Time of start of injection",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Start Time"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "module" : "Patient",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Storage Media File-Set ID",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "2"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
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
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Type Code Sequence",
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Manufacturer's serial number of the device",
         "module" : "Device",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient"
      },
      "(0018,6011)[<0>](0018,602a)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "module" : "US Region Calibration",
         "desc" : "The Physical Value at the reference pixel y location. The units are specified in the Physical Units field.",
         "name" : "Reference Pixel Physical Value Y",
         "mod_tables" : [
            "table_C.8-17"
         ]
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0028,0009)" : [
         {
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-14"
            ],
            "name" : "Frame Increment Pointer",
            "module" : "Multi-frame",
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
            "req" : "1",
            "usage" : "M"
         },
         {
            "mod_tables" : [
               "table_C.8-18"
            ],
            "name" : "Frame Increment Pointer",
            "desc" : [
               [
                  "Contains the Data Element Tag of the attribute that is used as the frame increment in Multi-frame pixel data (see ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.6",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  "). Required if Number of Frames is sent."
               ],
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.5.6.1.4"
                     }
                  },
                  " for specialization."
               ]
            ],
            "module" : "US Image",
            "entity" : "Image",
            "req" : "1C",
            "usage" : "M"
         }
      ],
      "(0008,1050)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Performing Physician's Name",
         "desc" : "Name of the physician(s) administering the Series.",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0020,9172)" : {
         "entity" : "Image",
         "name" : "Conversion Source Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
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
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,0026)" : {
         "usage" : "M",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Source Patient Group Identification Sequence",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operators' Name",
         "module" : "SOP Common",
         "desc" : "Name(s) of the operator(s) of the contributing equipment."
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Issuer of the Specimen Identifier Sequence",
         "module" : "Specimen",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "usage" : "U"
      },
      "(0008,0020)" : {
         "req" : "2",
         "usage" : "M",
         "name" : "Study Date",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "Date the Study started.",
         "entity" : "Study"
      },
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Description",
         "entity" : "Study",
         "usage" : "M",
         "req" : "3"
      },
      "(0028,0002)" : [
         {
            "entity" : "Image",
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
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Samples per Pixel",
            "usage" : "M",
            "req" : "1"
         },
         {
            "req" : "1",
            "usage" : "M",
            "entity" : "Image",
            "name" : "Samples Per Pixel",
            "mod_tables" : [
               "table_C.8-18"
            ],
            "module" : "US Image",
            "desc" : [
               "Number of samples (planes) in this image.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.5.6.1.12",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for specialization"
               ]
            ]
         }
      ],
      "(0020,0060)" : {
         "usage" : "M",
         "req" : "2C",
         "entity" : "Series",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) or Measurement Laterality (0024,0113) are not sent.",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     },
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "General Series",
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "entity" : "Image",
         "name" : "Bits Allocated",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
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
         "module" : "General Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Home Community ID",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "req" : "1C",
         "usage" : "U",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a163)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Image",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,9096)[<0>](0040,9212)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Real World Value LUT Data",
         "module" : "General Image",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "Specimen",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9225)" : {
         "entity" : "Image",
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
         "module" : "General Image",
         "name" : "Real World Value Slope",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,2218)" : {
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "US Image",
         "mod_tables" : [
            "table_C.8-18",
            "table_10-7"
         ],
         "name" : "Anatomic Region Sequence",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,6011)[<0>](0018,6028)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Reference Pixel Physical Value X",
         "module" : "US Region Calibration",
         "desc" : "The Physical Value at the reference pixel x location. The units are specified in the Physical Units field.",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,051a)" : {
         "usage" : "U",
         "req" : "3",
         "desc" : "Description of the container.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Description",
         "entity" : "Image"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registry Code Sequence"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Series Instance UID"
      },
      "(0010,1001)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient Names"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Retrieve URL"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,4000)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Comments",
         "desc" : "User-defined additional information about the patient.",
         "module" : "Patient"
      },
      "(0028,3010)[<0>](0028,3006)" : {
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "module" : "VOI LUT",
         "desc" : "LUT Data in this Sequence.",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "name" : "LUT Data"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "module" : "Specimen",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C"
      },
      "(0018,5027)" : {
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.5.6.1.8"
               }
            },
            " for Description."
         ],
         "module" : "US Image",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Soft Tissue Thermal Index",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0032)" : {
         "name" : "Acquisition Time",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : "The time the acquisition of data that resulted in this image started",
         "module" : "General Image",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,0014)[<0>](0018,002a)" : {
         "req" : "3",
         "usage" : "C - Required if contrast media was used in this image.",
         "entity" : "Image",
         "name" : "Additional Drug Sequence",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "desc" : [
            "Sequence that identifies any additional drug that is administered with the contrast agent bolus.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0018,6011)[<0>](0018,6046)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Pixel Component Mask",
         "module" : "US Region Calibration",
         "desc" : [
            "This value is ANDed with the composite pixel code for each pixel within the region, then shifted right by the number of contiguous least significant zeros in the mask to obtain what will be referred to as the \"Shifted Masked Composite Pixel Code\" (SMCPC). Required if Pixel Component Organization = Bit aligned.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,2144)" : {
         "name" : "Recommended Display Frame Rate",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "desc" : "Recommended rate at which the frames of a Multi-frame image should be displayed in frames/second.",
         "module" : "Cine",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a043)" : {
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "req" : "1"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
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
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15",
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
         ],
         "module" : "SOP Common",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Value Type",
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
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "entity" : "Series",
         "name" : "Rational Numerator Value",
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
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,08ea)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
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
      "(0008,1111)[<0>](0008,1155)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,2120)" : {
         "entity" : "Image",
         "name" : "Stage Name",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "module" : "US Image",
         "desc" : [
            "A Stage is a particular time slice of a protocol in which a set of images are collected. The names can be free form text.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PRE-EXERCISE",
                     null
                  ],
                  [
                     "POST-EXERCISE",
                     null
                  ],
                  [
                     "PEAK-EXERCISE",
                     null
                  ],
                  [
                     "RECOVERY",
                     null
                  ],
                  [
                     "BASELINE",
                     null
                  ],
                  [
                     "LOW DOSE",
                     null
                  ],
                  [
                     "PEAK DOSE",
                     null
                  ]
               ],
               "title" : "Recommended text for Stress Echo stage names:"
            }
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1084)" : {
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Code Sequence",
         "entity" : "Study"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Retrieve URI",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
               "el" : "note",
               "content" : [
                  "\n",
                  {
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "el" : "para",
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ]
                  },
                  "\n"
               ]
            }
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Specimen"
      },
      "(0018,1803)" : {
         "usage" : "C - Required if Modality (0008,0060) = IVUS.May be present otherwise.",
         "req" : "3",
         "module" : "Synchronization",
         "desc" : [
            "IP Address of NTP, SNTP, or PTP time source. IPv4 addresses shall be in dotted decimal (e.g., 192.168.1.1). The IPv6 addresses shall be in colon separated hexadecimal (e.g., 12:34:56:78:9a:bc:de:f0).",
            {
               "el" : "note",
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
               ]
            }
         ],
         "name" : "NTP Source Address",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "entity" : "Frame of Reference"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "name" : "Coding Scheme Responsible Organization",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "entity" : "Image",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "Specimen",
         "req" : "1C",
         "usage" : "U"
      },
      " (0010,0027) " : {
         "usage" : "M",
         "req" : "\n                  3 ",
         "module" : "Patient",
         "desc" : [
            [
               "A sequence containing the identifiers and locations of the individual subjects whose data was acquired at the same time (as a group) and encoded in this composite instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1"
                  }
               },
               "."
            ],
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Group of Patients Identification Sequence",
         "entity" : "Patient"
      },
      "(0018,6011)[<0>](0018,6044)" : {
         "entity" : "Image",
         "desc" : [
            "Describes how the components of a pixel can be described. Required if pixel component calibration exists for this region.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.4"
                  }
               },
               " for Enumerated Values and further explanation."
            ]
         ],
         "module" : "US Region Calibration",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Pixel Component Organization",
         "usage" : "U",
         "req" : "1C"
      },
      "(0018,1047)" : {
         "desc" : "Duration(s) of injection(s) in seconds. Each Contrast Flow Duration value shall correspond to a value of Contrast Flow Rate (0018,1046).",
         "module" : "Contrast/Bolus",
         "name" : "Contrast Flow Duration",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "entity" : "Image",
         "usage" : "C - Required if contrast media was used in this image.",
         "req" : "3"
      },
      "(0020,1002)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Images in Acquisition",
         "module" : "General Image",
         "desc" : "Number of images that resulted from this acquisition of data",
         "entity" : "Image"
      },
      "(0018,1041)" : {
         "entity" : "Image",
         "module" : "Contrast/Bolus",
         "desc" : "Volume injected in milliliters of diluted contrast agent",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Volume",
         "usage" : "C - Required if contrast media was used in this image.",
         "req" : "3"
      },
      "(0008,0124)" : {
         "name" : "Mapping Resource Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1140)[<0>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0008,0082)" : {
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
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0117)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context UID",
         "desc" : [
            "The unique identifier of the Context Group.",
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
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
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
         "module" : "General Image",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0008,1110)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
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
         ],
         "name" : "Referenced Study Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Media Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Identifier Type Code",
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
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Reason for requesting this procedure.",
         "module" : "General Series",
         "name" : "Reason for the Requested Procedure",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
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
         "module" : "General Series",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0012,0081)" : {
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "usage" : "U",
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0012,0042)" : {
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "desc" : [
            "Identifies the subject for blinded evaluations. Shall be present if Clinical Trial Subject ID (0012,0040) is absent. May be present otherwise. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.7",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "module" : "SOP Common",
         "name" : "Nonidentifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,1010)" : {
         "entity" : "Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Station Name",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,2202)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
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
            "Only a single Item shall be included in this Sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "name" : "Patient Species Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0028,0034)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
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
         "module" : "Image Pixel",
         "name" : "Pixel Aspect Ratio",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "entity" : "Series",
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
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,6011)[<0>](0018,6036)" : {
         "entity" : "Image",
         "name" : "Steering Angle",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "module" : "US Region Calibration",
         "desc" : "The steering angle, as defined by the manufacturer, used for a steered 2D image. The units are degrees.",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "module" : "Specimen",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
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
         "module" : "General Series"
      },
      "(0012,0072)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Series",
         "name" : "Clinical Trial Series Description",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
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
         ]
      },
      "(0018,6011)[<0>](0018,6048)" : {
         "usage" : "U",
         "req" : "1C",
         "module" : "US Region Calibration",
         "desc" : [
            "Defines the start of the numeric range of values within the composite pixel where calibration is to be defined by the \"pixel physical calibration table\". To be used only when ranges are used to describe the portion of the composite pixel.",
            "Required if Pixel Component Organization = Ranges."
         ],
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Pixel Component Range Start",
         "entity" : "Image"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "module" : "Clinical Trial Study",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Distribution Flag",
         "entity" : "Study",
         "usage" : "U",
         "req" : "1"
      },
      "(0018,6011)[<0>](0018,6058)" : {
         "usage" : "U",
         "req" : "1C",
         "module" : "US Region Calibration",
         "desc" : [
            "A table of Pixel Values used in conjunction with the Table of Parameter Values (0018,605A) or Pixel Value Mapping Code Sequence (0040,9098) to provide a mapping from Pixel Value to a real world value.",
            "Required if the Pixel Component Organization equals 2. Otherwise not used.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.12"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Table of Pixel Values",
         "entity" : "Image"
      },
      "(0008,2143)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Stop Trim",
         "module" : "Cine",
         "desc" : "The Frame Number of the last frame of a Multi-frame image to be displayed."
      },
      "(0038,0060)" : {
         "usage" : "U",
         "req" : "3",
         "module" : "Patient Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "name" : "Service Episode ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U",
         "req" : "1"
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Patient Orientation",
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "module" : "General Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0028,3003)" : {
         "entity" : "Image",
         "name" : "LUT Explanation",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
         "module" : "General Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
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
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Reason for Requested Procedure Code Sequence",
         "module" : "General Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
                     "el" : "para",
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "General Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Series"
      },
      "(0008,1072)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Operator Identification Sequence",
         "module" : "General Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "entity" : "Series",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0028,0101)" : [
         {
            "usage" : "M",
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
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Bits Stored",
            "entity" : "Image"
         },
         {
            "entity" : "Image",
            "desc" : [
               "Number of bits stored for each pixel sample.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.8.5.6.1.14"
                     },
                     "el" : "xref"
                  },
                  " for specialization."
               ]
            ],
            "module" : "US Image",
            "mod_tables" : [
               "table_C.8-18"
            ],
            "name" : "Bits Stored",
            "usage" : "M",
            "req" : "1"
         }
      ],
      "(0040,0520)[<0>](0050,001b)" : {
         "entity" : "Image",
         "name" : "Container Component ID",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "req" : "3",
         "usage" : "U"
      },
      "(0008,1070)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series"
      },
      "(0018,1050)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "General Equipment",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,2130)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "US Image",
         "desc" : "An array of values associated with each event timer. Units in milliseconds.",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Event Elapsed Time(s)"
      },
      "(0018,5010)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Transducer Data",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "module" : "US Image",
         "desc" : "Manufacturer defined code or description of ultrasound transducer used.",
         "entity" : "Image"
      },
      "(0008,1111)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced Performed Procedure Step Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,0560)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Specimen Description Sequence",
         "module" : "Specimen",
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this Sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "req" : "1",
         "usage" : "U"
      },
      "(0040,0275)" : {
         "module" : "General Series",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Request Attributes Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,009d)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Consulting Physician Identification Sequence",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "module" : "General Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0028,1201)" : [
         {
            "entity" : "Image",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Red Palette Color Lookup Table Data",
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
            "module" : "Image Pixel",
            "req" : "1C",
            "usage" : "M"
         },
         {
            "req" : "1C",
            "usage" : "C - Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR",
            "entity" : "Image",
            "name" : "Red Palette Color Lookup Table Data",
            "mod_tables" : [
               "table_C.7-22a"
            ],
            "module" : "Palette Color Lookup Table",
            "desc" : [
               "Red Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.6",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         }
      ],
      "(0018,6011)[<0>](0018,6022)" : {
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Reference Pixel y0",
         "module" : "US Region Calibration",
         "desc" : [
            "This coordinate pair, x0,y0, defines the location of a virtual \"reference\" pixel.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.16",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,0106)" : {
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Group Version",
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(003a,0300)" : {
         "entity" : "Image",
         "module" : "Cine",
         "desc" : [
            [
               "Description of any multiplexed audio channels. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.5.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Zero or more Items may be included in this Sequence.",
            [
               "Required if the Transfer Syntax used to encode the multi-frame image contains multiplexed (interleaved) audio channels, such as is possible with MPEG2 Systems (see ",
               {
                  "attrs" : {
                     "linkend" : "biblio_ISOIEC13818-1"
                  },
                  "el" : "xref"
               },
               ")."
            ]
         ],
         "name" : "Multiplexed Audio Channels Description Code Sequence",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "usage" : "M",
         "req" : "2C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0028,2000)" : [
         {
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
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "ICC Profile",
            "entity" : "Image",
            "usage" : "M",
            "req" : "3"
         },
         {
            "entity" : "Image",
            "mod_tables" : [
               "table_C.11.15-1"
            ],
            "name" : "ICC Profile",
            "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            "module" : "ICC Profile",
            "req" : "1",
            "usage" : "U"
         }
      ],
      "(0008,0096)[<0>](0040,1102)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step ID",
         "module" : "General Series",
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
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Series"
      },
      "(0018,5022)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "US Image",
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.5.6.1.8",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for Description."
         ],
         "name" : "Mechanical Index",
         "mod_tables" : [
            "table_C.8-18"
         ]
      },
      "(0010,2201)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Description",
         "module" : "Patient",
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
         "entity" : "Patient"
      },
      "(0008,1164)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Frame Extraction Sequence",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1"
      },
      "(0040,0244)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "module" : "General Series",
         "name" : "Performed Procedure Step Start Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a120)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "module" : "General Image",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Image"
      },
      "(0020,1040)" : {
         "req" : "2",
         "usage" : "U",
         "name" : "Position Reference Indicator",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "module" : "Frame of Reference",
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
         "entity" : "Frame of Reference"
      },
      "(0028,1221)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "name" : "Segmented Red Palette Color Lookup Table Data",
         "desc" : [
            "Segmented Red Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.9.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Palette Color Lookup Table",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "C - Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "desc" : "May include Sequence Attributes and their Items.",
         "module" : "SOP Common"
      },
      "(0040,a390)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "HL7 Structured Document Reference Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this Sequence.",
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
         "entity" : "Image"
      },
      "(0038,0014)" : {
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Admission ID Sequence",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Protocol Code Sequence",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,0219)" : {
         "entity" : "Patient",
         "module" : "Patient",
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
         ],
         "name" : "Strain Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,0033)" : {
         "entity" : "Patient",
         "name" : "Patient's Birth Date in Alternative Calendar",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "entity" : "Patient",
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
         "module" : "Patient",
         "name" : "Retrieve URI",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
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
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,2002)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Color Space",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
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
         "entity" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Date of Last Calibration",
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
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0251)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Time"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
                     },
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
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,0103)" : {
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
         "module" : "General Image",
         "name" : "Pixel Representation",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,3104)" : {
         "module" : "US Image",
         "desc" : [
            "Required if IVUS Acquisition (0018,3100) value is MOTOR_PULLBACK or GATED_PULLBACK.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.6.1.25"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "IVUS Pullback Stop Frame Number",
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(0020,0011)" : {
         "name" : "Series Number",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "A number that identifies this Series.",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "2",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series"
      },
      "(0054,0220)[<0>](0054,0222)" : {
         "entity" : "Image",
         "name" : "View Modifier Code Sequence",
         "mod_tables" : [
            "table_C.8-18",
            "table_10-25"
         ],
         "module" : "US Image",
         "desc" : [
            "View Modifier.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0018,3103)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "IVUS Pullback Start Frame Number",
         "module" : "US Image",
         "desc" : [
            "Required if IVUS Acquisition (0018,3100) value is MOTOR_PULLBACK or GATED_PULLBACK.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.6.1.24"
                  }
               }
            ]
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0032,1034)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Requesting Service Code Sequence",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "module" : "SOP Common"
      },
      "(0008,0300)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Data Element Characteristics Sequence",
         "entity" : "Image"
      },
      "(0018,6011)[<0>](0018,6026)" : {
         "usage" : "U",
         "req" : "1",
         "module" : "US Region Calibration",
         "desc" : [
            "The physical units of the dimensions of the region.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.15"
                  },
                  "el" : "xref"
               },
               " for Enumerated Values."
            ]
         ],
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Physical Units Y Direction",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Device ID",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "User-supplied identifier for the device",
         "module" : "Device"
      },
      "(0018,1200)" : {
         "entity" : "Equipment",
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
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Date of Last Calibration",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,1012)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Reason For Performed Procedure Code Sequence",
         "module" : "General Study",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     },
                     "el" : "para",
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ]
                  },
                  "\n                  "
               ]
            },
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "usage" : "M",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "usage" : "U",
         "req" : "3",
         "module" : "Specimen",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Diameter",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "name" : "Subject Relative Position in Image",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.4.1.1.1"
               }
            },
            "."
         ],
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,0012)" : {
         "req" : "3",
         "usage" : "C - Required if contrast media was used in this image.",
         "entity" : "Image",
         "name" : "Contrast/Bolus Agent Sequence",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "desc" : [
            "Sequence that identifies the contrast agent.",
            "One or more Items are permitted in this Sequence."
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
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0070)" : {
         "entity" : "Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "module" : "General Equipment",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "2"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,009c)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "Consulting physician(s) for this patient visit.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Consulting Physician's Name",
         "entity" : "Study"
      },
      "(0008,2142)" : {
         "entity" : "Image",
         "desc" : "The frame number of the first frame of the Multi-frame image to be displayed.",
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Start Trim",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "entity" : "Series",
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
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
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
      "(0008,1111)[<0>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "entity" : "Series"
      },
      "(0008,1062)[<0>](0040,1104)" : {
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
               ]
            }
         ],
         "module" : "General Study",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "el" : "note",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a30a)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ]
      },
      "(0010,0216)[<0>](0010,0215)" : {
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
         "name" : "Strain Source Registry Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1"
      },
      "(0010,1100)" : {
         "entity" : "Patient",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Referenced Patient Photo Sequence",
         "usage" : "M",
         "req" : "3"
      },
      "(0028,0103)" : [
         {
            "usage" : "M",
            "req" : "1",
            "entity" : "Image",
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
            "name" : "Pixel Representation",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "req" : "1",
            "usage" : "M",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-18"
            ],
            "name" : "Pixel Representation",
            "module" : "US Image",
            "desc" : [
               "Data representation of pixel samples.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.5.6.1.3",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for specialization."
               ]
            ]
         }
      ],
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "U"
      },
      "(0008,0022)" : {
         "entity" : "Image",
         "desc" : "The date the acquisition of data that resulted in this image started",
         "module" : "General Image",
         "name" : "Acquisition Date",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0018,5000)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "US Image",
         "desc" : [
            "Manufacturer defined character string description of ultrasound output level(s) used in generating a given image. Data may be expressed in dB, %, W/cm",
            {
               "content" : [
                  "2"
               ],
               "el" : "superscript"
            },
            ", etc."
         ],
         "name" : "Output Power",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : [
            [
               "Patient position descriptor relative to the equipment.  See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Patient Position",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,1052)[<0>](0040,1104)" : {
         "entity" : "Series",
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
               ],
               "el" : "note"
            }
         ],
         "module" : "General Series",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
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
                     "el" : "para",
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
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
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
         "name" : "Distribution Type"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
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
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C"
      },
      "(0008,0030)" : {
         "entity" : "Study",
         "desc" : "Time the Study started.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Time",
         "usage" : "M",
         "req" : "2"
      },
      "(0040,0250)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Date",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "module" : "General Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0400,0500)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Attributes Sequence",
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this Sequence.",
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
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0018,1061)" : {
         "entity" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Trigger Source or Type",
         "module" : "Synchronization",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "req" : "3",
         "usage" : "C - Required if Modality (0008,0060) = IVUS.May be present otherwise."
      },
      "(0018,6011)[<0>](0018,6030)" : {
         "desc" : "The manufacturer defined description of center frequency of the interrogating ultrasound energy. The units are kilohertz.",
         "module" : "US Region Calibration",
         "name" : "Transducer Frequency",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "3"
      },
      "(0008,1140)[<0>](0062,000b)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
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
         "name" : "Referenced Study Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0028,0303)" : {
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
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "name" : "Longitudinal Temporal Information Modified",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0028,6010)" : {
         "name" : "Representative Frame Number",
         "mod_tables" : [
            "table_C.7-15"
         ],
         "module" : "Frame Pointers",
         "desc" : "The frame number selected for use as a pictorial representation (e.g., icon) of the Multi-frame Image",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0008,0021)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Date",
         "desc" : "Date the Series started.",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,0034)" : {
         "entity" : "Patient",
         "name" : "Patient's Death Date in Alternative Calendar",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Manufacturer of the device",
         "module" : "Device",
         "entity" : "Image"
      },
      "(0038,0062)" : {
         "entity" : "Study",
         "desc" : "Description of the type of service episode.",
         "module" : "Patient Study",
         "name" : "Service Episode Description",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Photometric Interpretation",
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
         ],
         "module" : "General Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Specimen"
      },
      "(0028,0006)" : [
         {
            "usage" : "M",
            "req" : "1C",
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
            "module" : "Image Pixel",
            "name" : "Planar Configuration",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "entity" : "Image"
         },
         {
            "req" : "1C",
            "usage" : "M",
            "name" : "Planar Configuration",
            "mod_tables" : [
               "table_C.8-18"
            ],
            "module" : "US Image",
            "desc" : [
               "Indicates whether the pixel data are sent color-by-plane or color-by-pixel.",
               "Required if Samples per Pixel (0028,0002) has a value greater than 1.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.5.6.1.16",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for specialization."
               ]
            ],
            "entity" : "Image"
         }
      ],
      "(0040,0275)[<0>](0008,0051)" : {
         "entity" : "Series",
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
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
                     "el" : "para",
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
         "name" : "WADO-RS Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0028,2002)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "name" : "Color Space",
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
            "module" : "Image Pixel",
            "entity" : "Image",
            "req" : "3",
            "usage" : "M"
         },
         {
            "req" : "3",
            "usage" : "U",
            "mod_tables" : [
               "table_C.11.15-1"
            ],
            "name" : "Color Space",
            "module" : "ICC Profile",
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
            "entity" : "Image"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "Specimen",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0018,6011)[<0>](0018,601e)" : {
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Region Location Max y1",
         "module" : "US Region Calibration",
         "desc" : [
            "The bounds of a rectangle specifying the location of the region, x0,y0,x1,y1.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
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
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0028,0108)" : {
         "name" : "Smallest Pixel Value in Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "The minimum value of all images in this Series.",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M"
      },
      "(0028,2110)" : [
         {
            "req" : "3",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "name" : "Lossy Image Compression",
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
            "entity" : "Image"
         },
         {
            "entity" : "Image",
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
                  "title" : "Enumerated Values:",
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
                  ]
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
                  }
               ],
               "Required if Lossy Compression has been performed on the Image. May be present otherwise."
            ],
            "module" : "US Image",
            "mod_tables" : [
               "table_C.8-18"
            ],
            "name" : "Lossy Image Compression",
            "usage" : "M",
            "req" : "1C"
         }
      ],
      "(0028,1101)" : [
         {
            "name" : "Red Palette Color Lookup Table Descriptor",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
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
            "entity" : "Image",
            "req" : "1C",
            "usage" : "M"
         },
         {
            "desc" : [
               "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "module" : "Palette Color Lookup Table",
            "name" : "Red Palette Color Lookup Table Descriptor",
            "mod_tables" : [
               "table_C.7-22a"
            ],
            "entity" : "Image",
            "usage" : "C - Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR",
            "req" : "1"
         }
      ],
      "(0018,3100)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "IVUS Acquisition",
         "desc" : [
            {
               "list" : [
                  [
                     "MOTOR_PULLBACK",
                     null
                  ],
                  [
                     "MANUAL_PULLBACK",
                     null
                  ],
                  [
                     "SELECTIVE",
                     null
                  ],
                  [
                     "GATED_PULLBACK",
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
                     "linkend" : "sect_C.8.5.6.1.21"
                  },
                  "el" : "xref"
               }
            ],
            "Required if Modality (0008,0060) = IVUS"
         ],
         "module" : "US Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0054,0500)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : [
            [
               "Describes the anatomical direction in which a set of slices is progressing (see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.20.1.1"
                  }
               },
               "). Meaningful only for cardiac images."
            ],
            [
               "Enumerated Values are defined in ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.20.1.1"
                  }
               },
               "."
            ]
         ],
         "module" : "US Image",
         "name" : "Slice Progression Direction",
         "mod_tables" : [
            "table_C.8-18",
            "table_10-25"
         ],
         "entity" : "Image"
      },
      "(0010,1010)" : {
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Age",
         "module" : "Patient Study",
         "desc" : "Age of the Patient.",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "Specimen",
         "entity" : "Image"
      },
      "(0040,0260)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Performed Protocol Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,0024)[<0>](0040,0032)" : {
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
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
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "entity" : "Image",
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,6031)" : {
         "entity" : "Image",
         "module" : "US Image",
         "desc" : {
            "type" : "variablelist",
            "list" : [
               [
                  "SECTOR_PHASED",
                  null
               ],
               [
                  "SECTOR_MECH",
                  null
               ],
               [
                  "SECTOR_ANNULAR",
                  null
               ],
               [
                  "LINEAR",
                  null
               ],
               [
                  "CURVED LINEAR",
                  null
               ],
               [
                  "SINGLE CRYSTAL",
                  null
               ],
               [
                  "SPLIT XTAL CWD",
                  null
               ],
               [
                  "IV_PHASED",
                  null
               ],
               [
                  "IV_ROT XTAL",
                  null
               ],
               [
                  "IV_ROT MIRROR",
                  null
               ],
               [
                  "ENDOCAV_PA",
                  null
               ],
               [
                  "ENDOCAV_MECH",
                  null
               ],
               [
                  "ENDOCAV_CLA",
                  null
               ],
               [
                  "ENDOCAV_AA",
                  null
               ],
               [
                  "ENDOCAV_LINEAR",
                  null
               ],
               [
                  "VECTOR_PHASED",
                  null
               ]
            ],
            "title" : "Defined Terms:"
         },
         "name" : "Transducer Type",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Type Code Sequence",
         "module" : "Specimen",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "name" : "Coding Scheme Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme full common name",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "U"
      },
      "(0018,1043)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Time of end of contrast injection",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Stop Time"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
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
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "req" : "2",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Issuer of the Container Identifier Sequence",
         "module" : "Specimen",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
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
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,0021)" : {
         "module" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "3",
         "usage" : "M"
      },
      "(0008,2129)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The number of event timers used at the time of acquisition of a Multi-frame image.",
         "module" : "US Image",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Number of Event Timers"
      },
      "(0020,0200)" : {
         "req" : "1",
         "usage" : "C - Required if Modality (0008,0060) = IVUS.May be present otherwise.",
         "entity" : "Frame of Reference",
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
         "module" : "Synchronization"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Blue Palette Color Lookup Table Data",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         ]
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1049)" : {
         "module" : "General Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "name" : "Physician(s) of Record Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,5026)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.5.6.1.8",
                  "xrefstyle" : "select: label"
               }
            },
            " for Description."
         ],
         "module" : "US Image",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Cranial Thermal Index",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "name" : "Text Value",
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
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "Specimen",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "entity" : "Image",
         "name" : "Calculated Frame List",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
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
         "module" : "Frame Extraction"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "module" : "General Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "DateTime"
      },
      "(0008,1032)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Procedure Code Sequence"
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "General Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0012,0063)" : {
         "usage" : "M",
         "req" : "1C",
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
                                       "attrs" : {
                                          "linkend" : "sect_C.12.1",
                                          "xrefstyle" : "select: title"
                                       },
                                       "el" : "xref"
                                    },
                                    ". De-identifying equipment may use a Purpose of Reference of ",
                                    {
                                       "attrs" : {
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       },
                                       "el" : "olink",
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ]
                                    },
                                    "."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 }
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
         "name" : "De-identification Method",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Image"
      },
      "(0008,2112)[<0>](0028,135a)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "General Image",
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
                                 "attrs" : {
                                    "xml:id" : "para_2b403f53-2ffb-4cb8-b283-851c3cce981b"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."
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
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Spatial Locations Preserved"
      },
      "(0028,6020)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Frame number(s) selected as frames of interest. A frame number may appear more than once.",
         "module" : "Frame Pointers",
         "name" : "Frame Numbers Of Interest (FOI)",
         "mod_tables" : [
            "table_C.7-15"
         ]
      },
      "(0008,1250)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_41b72cf3-4134-44f1-84cc-a28f024a1c1c"
                                 },
                                 "content" : [
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
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
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
                                 },
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
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Related Series Sequence"
      },
      "(0040,0560)[<0>](0040,0554)" : {
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
         "name" : "Specimen UID",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1"
      },
      "(0100,0424)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "name" : "SOP Authorization Comment",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,1063)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Cine",
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
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Frame Time",
         "entity" : "Image"
      },
      "(0018,1242)" : {
         "module" : "Cine",
         "desc" : "Elapsed time of data acquisition in msec per each frame.",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Actual Frame Duration",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
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
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0513)" : {
         "name" : "Issuer of the Container Identifier Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "2",
         "usage" : "U"
      },
      "(0008,2228)" : {
         "entity" : "Image",
         "module" : "US Image",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-18",
            "table_10-7",
            "table_10-8"
         ],
         "name" : "Primary Anatomic Structure Sequence",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series"
      },
      "(0012,0060)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Coordinating Center Name",
         "module" : "Clinical Trial Series",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial or research. See ",
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
         "usage" : "U"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Study"
      },
      "(0012,0071)" : {
         "module" : "Clinical Trial Series",
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
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series ID",
         "entity" : "Series",
         "usage" : "U",
         "req" : "3"
      },
      "(0008,0018)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance UID",
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "entity" : "Image",
         "name" : "Source of Previous Values",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common",
         "req" : "2",
         "usage" : "M"
      },
      "(0020,0012)" : {
         "name" : "Acquisition Number",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,2292)" : {
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
         "name" : "Patient Breed Description",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "2C"
      },
      "(0018,1046)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "req" : "3",
         "desc" : "Rate(s) of injection(s) in milliliters/sec",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast Flow Rate",
         "entity" : "Image"
      },
      "(0028,2112)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "General Image",
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
         ],
         "name" : "Lossy Image Compression Ratio",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0018,6011)[<0>](0018,602e)" : {
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "The physical value increments per positive Y pixel increment. The units are as specified in the Physical Units Y Direction (0018,6026).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.17"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "US Region Calibration",
         "name" : "Physical Delta Y",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
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
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,2111)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Derivation Description",
         "desc" : [
            "A text description of how this image was derived. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.1.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "General Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
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
         "module" : "Patient"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
         "name" : "Bits Stored",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
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
         "req" : "1C",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "entity" : "Image",
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
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,a001)" : {
         "entity" : "Image",
         "name" : "Contributing Equipment Sequence",
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
         "usage" : "M"
      },
      "(003a,0300)[<0>](003a,0301)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "Cine",
         "desc" : "A reference to the audio channel as identified within Transfer Syntax encoded bit stream (1 for the main channel, 2 for the second channel and 3 to 9 to the complementary channels).",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Channel Identification Code",
         "entity" : "Image"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,1067)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "Cine",
         "desc" : "Delay time in milliseconds from trigger (e.g., X-Ray on pulse) to the first frame of a Multi-frame image.",
         "name" : "Image Trigger Delay",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "entity" : "Image"
      },
      "(0018,3101)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "IVUS Pullback Rate",
         "module" : "US Image",
         "desc" : [
            "Required if IVUS Acquisition (0018,3100) value is MOTOR_PULLBACK. Specified in units of mm/sec.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.6.1.22"
                  }
               }
            ]
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "module" : "Patient",
         "desc" : "Primary identifier for the group of subjects.",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "U"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Strain Stock Number",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
         ]
      },
      "(0028,3010)[<0>](0028,3002)" : {
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "Specifies the format of the LUT Data in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "VOI LUT",
         "name" : "LUT Descriptor",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "entity" : "Image"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Length",
         "module" : "Specimen",
         "desc" : "Length in mm of container component.",
         "req" : "3",
         "usage" : "U"
      },
      "(0018,5024)" : {
         "entity" : "Image",
         "module" : "US Image",
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.5.6.1.8"
               }
            },
            " for Description."
         ],
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Bone Thermal Index",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a160)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "General Image",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "entity" : "Image"
      },
      "(0040,0520)" : {
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Specimen",
         "name" : "Container Component Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
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
         "module" : "Specimen",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "HL7 Instance Identifier",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "entity" : "Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "req" : "1",
         "usage" : "U"
      },
      "(0008,1140)[<0>](0040,a170)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "General Image",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0008,2112)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Source Image Sequence",
         "module" : "General Image",
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
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
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
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
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
         "entity" : "Series"
      },
      "(0010,1020)" : {
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Size",
         "module" : "Patient Study",
         "desc" : "Length or size of the Patient, in meters.",
         "entity" : "Study"
      },
      "(003a,0300)[<0>](003a,0208)" : {
         "entity" : "Image",
         "name" : "Channel Source Sequence",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "module" : "Cine",
         "desc" : [
            "A coded descriptor of the audio channel source.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0018,1060)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "US Image",
         "desc" : "Time interval measured in msec from the start of the R-wave to the beginning of data taking",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Trigger Time"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetptr" : "sect_E.3.10",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Block Identifying Information Status",
         "entity" : "Image"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(2050,0020)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "When present, specifies an identity transformation for the Presentation LUT such that the output of all grayscale transformations, if any, are defined to be in P-Values.",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
            "When this attribute is used with a color photometric interpretation then the luminance component is in P-Values."
         ],
         "module" : "General Image",
         "name" : "Presentation LUT Shape",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "entity" : "Study",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
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
         "usage" : "U"
      },
      "(0008,1120)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Referenced Patient Sequence",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0028,0301)" : {
         "usage" : "M",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Burned In Annotation"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     },
                     "el" : "para",
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
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "XDS Retrieval Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
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
         "entity" : "Study",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "desc" : "Identification number of an animal within the registry.",
         "module" : "Patient",
         "name" : "Breed Registration Number",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "module" : "Patient",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,1000)" : {
         "entity" : "Equipment",
         "name" : "Device Serial Number",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Equipment",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Image",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Image"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "entity" : "Study"
      },
      "(0012,0062)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
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
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Identity Removed"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Time",
         "module" : "Specimen",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0028,6023)" : {
         "entity" : "Image",
         "name" : "Frame of Interest Type",
         "mod_tables" : [
            "table_C.7-15"
         ],
         "module" : "Frame Pointers",
         "desc" : [
            "A Defined Term for each one of the Frame(s) of Interest (0028,6020) that identifies the significance of the frame. If multiple Frames of Interest are selected and this Attribute is used, it shall contain the same number of values as are in Frame Numbers of Interest (0028,6020).",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
               ]
            }
         ],
         "req" : "3",
         "usage" : "U"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "req" : "2C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Diameter Units",
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
         "entity" : "Image"
      },
      "(0010,0030)" : {
         "name" : "Patient's Birth Date",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Birth date of the patient.",
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M"
      },
      "(0028,0010)" : {
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "name" : "Rows",
         "module" : "Image Pixel",
         "desc" : "Number of rows in the image.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "Image",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature DateTime",
         "usage" : "M",
         "req" : "1"
      },
      "(0020,0013)" : [
         {
            "entity" : "Image",
            "module" : "General Image",
            "desc" : [
               "A number that identifies this image.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_4b6d4b36-a800-41c7-a122-e8e704668af1"
                        },
                        "content" : [
                           "This Attribute was named Image Number in earlier versions of this Standard."
                        ]
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "name" : "Instance Number",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "req" : "2"
         },
         {
            "desc" : "A number that identifies this Composite object instance.",
            "module" : "SOP Common",
            "name" : "Instance Number",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "entity" : "Image",
            "usage" : "M",
            "req" : "3"
         }
      ],
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
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
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a162)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Referenced Instance Sequence"
      },
      "(0018,1081)" : {
         "module" : "US Image",
         "desc" : "R-R interval low limit for beat rejection, in msec",
         "name" : "Low R-R Value",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0028,0102)" : [
         {
            "usage" : "M",
            "req" : "1",
            "entity" : "Image",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
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
            "module" : "Image Pixel",
            "name" : "High Bit",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "usage" : "M",
            "req" : "1",
            "desc" : [
               "Most significant bit for pixel sample data.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.8.5.6.1.15",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for specialization."
               ]
            ],
            "module" : "US Image",
            "mod_tables" : [
               "table_C.8-18"
            ],
            "name" : "High Bit",
            "entity" : "Image"
         }
      ],
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Image",
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
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "General Series",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series"
      },
      "(0008,0050)" : {
         "entity" : "Study",
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "req" : "2",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
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
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0028,0014)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Ultrasound Color Data Present",
         "module" : "US Image",
         "desc" : [
            "This element indicates if any ultrasound color data is present in an image.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "00",
                     "Ultrasound color data not present in image"
                  ],
                  [
                     "01",
                     "Ultrasound color data is present in image."
                  ]
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.6.1.10"
                  },
                  "el" : "xref"
               }
            ]
         ]
      },
      "(0018,1088)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Heart Rate",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "desc" : "Beats per minute.",
         "module" : "US Image",
         "entity" : "Image"
      },
      "(0008,1052)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "name" : "Performing Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,6011)[<0>](0018,6012)" : {
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "The spatial organization of the data within the region.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Enumerated Values."
            ]
         ],
         "module" : "US Region Calibration",
         "name" : "Region Spatial Format",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Type of Instances",
         "module" : "Patient",
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
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
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
         "req" : "3",
         "usage" : "M"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "entity" : "Image",
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
         "module" : "General Image",
         "name" : "Pixel Data",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,5100)" : {
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Patient position descriptor relative to the equipment. Required for images where Patient Orientation Code Sequence (0054,0410) is not present and whose SOP Class is one of the following: CT (\"1.2.840.10008.5.1.4.1.1.2\") or MR (\"1.2.840.10008.5.1.4.1.1.4\") or Enhanced CT (\"1.2.840.10008.5.1.4.1.1.2.1\") or Enhanced MR Image (\"1.2.840.10008.5.1.4.1.1.4.1\") or Enhanced Color MR Image (\"1.2.840.10008.5.1.4.1.1.4.3\") or MR Spectroscopy (\"1.2.840.10008.5.1.4.1.1.4.2\") Storage SOP Classes.",
            "May be present for other SOP Classes if Patient Orientation Code Sequence (0054,0410) is not present.",
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
         "name" : "Patient Position",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "2C"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
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
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,6011)[<0>](0018,601a)" : {
         "entity" : "Image",
         "module" : "US Region Calibration",
         "desc" : [
            "The bounds of a rectangle specifying the location of the region, x0,y0,x1,y1.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.14"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "Region Location Min y0",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "usage" : "U",
         "req" : "1"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
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
         "req" : "1C",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "name" : "High Bit",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
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
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0122)" : {
         "usage" : "M",
         "req" : "3",
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
         "name" : "Mapping Resource Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image"
      },
      "(0018,6060)" : {
         "entity" : "Image",
         "name" : "R Wave Time Vector",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "desc" : "The time offset(s) of the reported R Wave peaks, each relative to the time of the start of the acquisition of the first frame in msec. Multi-valued, with one value per reported R Wave.",
         "module" : "US Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Group Reference",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0028,3010)[<0>](0028,3003)" : {
         "usage" : "U",
         "req" : "3",
         "module" : "VOI LUT",
         "desc" : "Free form text explanation of the meaning of the LUT.",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "name" : "LUT Explanation",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "entity" : "Study",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
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
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "usage" : "U",
         "req" : "1",
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
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ],
         "name" : "Specimen Identifier",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image"
      },
      "(0008,2228)[<0>](0008,2230)" : {
         "mod_tables" : [
            "table_C.8-18",
            "table_10-7",
            "table_10-8"
         ],
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "module" : "US Image",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,6011)[<0>](0018,6016)" : {
         "entity" : "Image",
         "desc" : [
            "Flags used for special handling of the region.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.3"
                  }
               },
               " for Enumerated Values and further explanation."
            ]
         ],
         "module" : "US Region Calibration",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Region Flags",
         "usage" : "U",
         "req" : "1"
      },
      "(0020,0010)" : {
         "entity" : "Study",
         "name" : "Study ID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2",
         "usage" : "M"
      },
      "(0018,3105)" : {
         "desc" : [
            "Identifier(s) of the lesion(s) of interest imaged within the current SOP Instance. Each lesion shall have a unique numeric integer identifier within the study.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.6.1.26"
                  }
               },
               "."
            ]
         ],
         "module" : "US Image",
         "name" : "Lesion Number",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0012,0083)" : {
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
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Text Value",
         "entity" : "Image"
      },
      "(003a,0300)[<0>](003a,0302)" : {
         "desc" : [
            "A coded descriptor qualifying the mode of the channel:",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Cine",
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Channel Mode",
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0012,0010)" : {
         "usage" : "U",
         "req" : "1",
         "module" : "Clinical Trial Subject",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Sponsor Name",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0028,3010)" : {
         "req" : "1C",
         "usage" : "U",
         "name" : "VOI LUT Sequence",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "desc" : [
            "Defines a sequence of VOI LUTs.",
            "One or more Items shall be included in this Sequence.",
            "Required if Window Center (0028,1050) is not present. May be present otherwise."
         ],
         "module" : "VOI LUT",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Samples per Pixel",
         "module" : "General Image",
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
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1021)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Size Code Sequence",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "module" : "Specimen",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Image"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study"
      },
      "(0010,0218)" : {
         "entity" : "Patient",
         "desc" : [
            "Additional information about the strain of the patient that is not encoded in the formal nomenclature used in Strain Description (0010,0212). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Additional Information",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1140)[<0>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image"
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
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
         ],
         "module" : "Frame Extraction",
         "name" : "Time Range",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "entity" : "Image",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0010,2294)" : {
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Sequence",
         "module" : "Patient",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "entity" : "Patient"
      },
      "(0010,0032)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient's Birth Time",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth time of the Patient.",
         "module" : "Patient"
      },
      "(0008,2128)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "View Number",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "module" : "US Image",
         "desc" : "A number that identifies the View. View Number starts at one."
      },
      "(0018,3102)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "IVUS Gated Rate",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "desc" : [
            "Required if IVUS Acquisition (0018,3100) value is GATED_PULLBACK. Specified in units of mm/beat.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.5.6.1.23",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "module" : "US Image",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "usage" : "U",
         "req" : "3",
         "module" : "Specimen",
         "desc" : "Width in mm of container component.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Component Width",
         "entity" : "Image"
      },
      "(0008,2218)[<0>](0008,2220)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items that modifies the anatomic region of interest of this Instance",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "US Image",
         "name" : "Anatomic Region Modifier Sequence",
         "mod_tables" : [
            "table_C.8-18",
            "table_10-7"
         ]
      },
      "(0008,1140)[<0>](0008,1160)" : {
         "entity" : "Image",
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
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,9215)" : {
         "name" : "Derivation Code Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            [
               "A coded description of how this image was derived. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items are permitted in this Sequence. More than one Item indicates that successive derivation steps have been applied."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "entity" : "Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,6011)[<0>](0018,601c)" : {
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "The bounds of a rectangle specifying the location of the region, x0,y0,x1,y1.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.14"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "US Region Calibration",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Region Location Max x1",
         "entity" : "Image"
      },
      "(0018,1048)" : {
         "desc" : [
            "Active ingredient of agent.",
            {
               "title" : "Defined Terms:",
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
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Ingredient",
         "entity" : "Image",
         "usage" : "C - Required if contrast media was used in this image.",
         "req" : "3"
      },
      "(0040,0518)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Type Code Sequence",
         "module" : "Specimen",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "usage" : "U"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "name" : "Red Palette Color Lookup Table Descriptor",
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
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "entity" : "Study",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "usage" : "U",
         "req" : "3",
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
         "module" : "Specimen",
         "name" : "Container Component Material",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Person Name",
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series"
      },
      "(0028,1051)" : {
         "entity" : "Image",
         "name" : "Window Width",
         "mod_tables" : [
            "table_C.11-2b"
         ],
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
         ],
         "module" : "VOI LUT",
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Person Name",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     },
                     "el" : "para",
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
         "module" : "Patient",
         "name" : "WADO Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,0014)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "module" : "SOP Common",
         "name" : "Instance Creator UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0018,6011)[<0>](0018,604a)" : {
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Pixel Component Range Stop",
         "module" : "US Region Calibration",
         "desc" : [
            "Defines the stop of the numeric range of values within the composite pixel where calibration is to be defined by the \"pixel physical calibration table\". To be used only when ranges are used to describe the portion of the composite pixel.",
            "Required if Pixel Component Organization = Ranges."
         ],
         "entity" : "Image"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : "Image"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1"
      },
      "(0008,002a)" : [
         {
            "entity" : "Image",
            "name" : "Acquisition DateTime",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "module" : "General Image",
            "desc" : [
               "The date and time that the acquisition of data that resulted in this image started.",
               {
                  "el" : "note",
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
                                 "linkend" : "sect_C.7.4.2",
                                 "xrefstyle" : "select: title"
                              }
                           },
                           " in Acquisition Time Synchronized (0018,1800)."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "req" : "3",
            "usage" : "M"
         },
         {
            "usage" : "M",
            "req" : "1C",
            "desc" : [
               "The date and time that the acquisition of data that resulted in this image started.",
               "Required if Modality (0008,0060) = IVUS",
               "May be present otherwise.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_4d3f7581-6bba-4b3f-8f74-327f5c04ea8d"
                        },
                        "content" : [
                           "The synchronization of this time with an external clock is specified in the ",
                           {
                              "attrs" : {
                                 "linkend" : "sect_C.7.4.2",
                                 "xrefstyle" : "select: title"
                              },
                              "el" : "xref"
                           },
                           " in Acquisition Time Synchronized (0018,1800)."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "module" : "US Image",
            "name" : "Acquisition DateTime",
            "mod_tables" : [
               "table_C.8-18"
            ],
            "entity" : "Image"
         }
      ],
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a123)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Image"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Repository Unique ID",
         "module" : "Patient",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved."
      },
      "(0018,1082)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "R-R interval high limit for beat rejection, in msec",
         "module" : "US Image",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "High R-R Value",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "entity" : "Patient",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : "Primary identifier for an individual subject.",
         "module" : "Patient",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "entity" : "Image",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0028,6022)" : {
         "usage" : "U",
         "req" : "3",
         "module" : "Frame Pointers",
         "desc" : "Description of each one of the Frame(s) of Interest selected in (0028,6020). If multiple Frames of Interest are selected and this Attribute is used, it shall contain the same number of values as are in Frame Numbers of Interest (0028,6020).",
         "mod_tables" : [
            "table_C.7-15"
         ],
         "name" : "Frame Of Interest Description",
         "entity" : "Image"
      },
      "(0012,0031)" : {
         "name" : "Clinical Trial Site Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
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
         "entity" : "Patient",
         "req" : "2",
         "usage" : "U"
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "entity" : "Image",
         "desc" : "Manufacturer's model name of the device",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Manufacturer's Model Name",
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Manufacturer of the container component.",
         "entity" : "Image"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
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
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "el" : "para",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0018,6011)[<0>](0018,6050)" : {
         "entity" : "Image",
         "module" : "US Region Calibration",
         "desc" : [
            "The number of break point coordinate pairs used to describe a piece wise linear curve.",
            "Required if Pixel Component Organization equals 0 or 1. Otherwise not used.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.5.5.1.8",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Number of Table Break Points",
         "usage" : "U",
         "req" : "1C"
      },
      "(0028,0109)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : "The maximum value of all images in this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Largest Pixel Value in Series"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Image",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0012,0030)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site ID",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial or research data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "usage" : "U"
      },
      "(0018,6011)[<0>](0018,6056)" : {
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Number of Table Entries",
         "desc" : [
            "The number of entries in the Table of Pixel Values.",
            "Required if the value of Pixel Component Organization (0018,6044) is 2 or 3.",
            [
               "Otherwise not used. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.11"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "US Region Calibration",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Series",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a168)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "General Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Describes the purpose for which the related equipment is being referenced.",
            "Only a single Item shall be included in this Sequence.",
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
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Specimen",
         "entity" : "Image",
         "req" : "1",
         "usage" : "U"
      },
      "(0008,2124)" : {
         "entity" : "Image",
         "module" : "US Image",
         "desc" : "Number of Stages in this protocol. Required if image was acquired in a Staged protocol.",
         "name" : "Number of Stages",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "usage" : "M",
         "req" : "2C"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                     "el" : "para",
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
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "module" : "General Series",
         "name" : "Scheduled Procedure Step Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series"
      },
      "(0018,6011)[<0>](0018,603b)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Doppler Sample Volume Y Position",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "desc" : "The y displacement, in pixels, from the Reference pixel to the center of the Doppler sample volume.",
         "module" : "US Region Calibration",
         "entity" : "Image"
      },
      "(0018,6011)[<0>](0018,6034)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Doppler Correction Angle",
         "desc" : "The Doppler correction angle. The units are degrees.",
         "module" : "US Region Calibration"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "entity" : "Image",
         "module" : "Specimen",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C"
      },
      "(0010,1030)" : {
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Weight",
         "module" : "Patient Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "entity" : "Study"
      },
      "(0008,2112)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0023)" : {
         "module" : "General Image",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2b4fa91b-7c4d-401b-9468-fa7b06ccb55a"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Content Date",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "2C"
      },
      "(0028,0008)" : {
         "entity" : "Image",
         "module" : "Multi-frame",
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
         "mod_tables" : [
            "table_C.7-14"
         ],
         "name" : "Number of Frames",
         "usage" : "M",
         "req" : "1"
      },
      "(0010,2293)" : {
         "usage" : "M",
         "req" : "2C",
         "entity" : "Patient",
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
         "name" : "Patient Breed Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0118)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Mapping Resource UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The unique identifier of the Mapping Resource",
         "module" : "SOP Common",
         "entity" : "Image"
      },
      "(0010,0212)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "The strain of the patient. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Patient",
         "name" : "Strain Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "module" : "General Image",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "Specimen"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "usage" : "U",
         "req" : "1",
         "module" : "Specimen",
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
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Value Type",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date"
      },
      "(0028,0011)" : {
         "name" : "Columns",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "Number of columns in the image",
         "module" : "Image Pixel",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0012,0082)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "module" : "Clinical Trial Subject",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081)."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "entity" : "Image",
         "usage" : "U",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Protocol Context Sequence",
         "entity" : "Series"
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referring Physician Identification Sequence",
         "entity" : "Study",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0040)" : {
         "req" : "2",
         "usage" : "M",
         "name" : "Patient's Sex",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Sex of the named patient.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "entity" : "Patient"
      },
      "(0008,0060)" : {
         "entity" : "Series",
         "name" : "Modality",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
         "req" : "1",
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "module" : "Patient Study",
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
      "(0040,9096)[<0>](0040,9211)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Real World Value Last Value Mapped",
         "module" : "General Image",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value Last Value Mapped (0040,9213) is absent.",
            {
               "content" : [
                  "\n                        ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2a014060-59fc-451c-ad0d-b820960b5ad4"
                     },
                     "content" : [
                        "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                     ]
                  },
                  "\n                      "
               ],
               "el" : "note"
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Certificate of Signer",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15"
                  }
               },
               ")."
            ],
            {
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
                           "content" : [
                              "\n                          ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 },
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,0105)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource",
         "entity" : "Image"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference",
         "entity" : "Image",
         "req" : "1",
         "usage" : "U"
      },
      "(0018,1008)" : {
         "module" : "General Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "name" : "Gantry ID",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,2132)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Event Timer Name(s)",
         "module" : "US Image",
         "desc" : "Name that identifies the event timer."
      },
      "(0008,1062)" : {
         "entity" : "Study",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Study Instance UID",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "module" : "General Series"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers"
      },
      "(0018,1030)" : {
         "module" : "General Series",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
                     },
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Protocol Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,001a)" : {
         "name" : "Related General SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1060)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Name of Physician(s) Reading Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "module" : "General Study"
      },
      "(0018,1065)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Cine",
         "desc" : [
            [
               "An array that contains the real time increments (in msec) between frames for a Multi-frame image. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.5.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation. Required if Frame Increment Pointer (0028,0009) points to Frame Time Vector."
            ],
            {
               "el" : "note",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-13"
         ],
         "name" : "Frame Time Vector"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0018,1044)" : {
         "usage" : "C - Required if contrast media was used in this image.",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Total amount in milliliters of the undiluted contrast agent",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Total Dose"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,009d)[<0>](0040,1101)" : {
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
         "entity" : "Study",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0081)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Address",
         "module" : "General Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located."
      },
      "(0018,5012)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Focus Depth",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "module" : "US Image",
         "desc" : "The depth, from the transducer face, of the manufacturer defined beam focus used for the image, in cm."
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0050,0010)" : {
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Device",
         "name" : "Device Sequence",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "entity" : "Image"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Reason for the Attribute Modification",
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
         ],
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "usage" : "M",
         "req" : "1C",
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
         "name" : "Red Palette Color Lookup Table Data",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Image"
      },
      "(0018,1802)" : {
         "req" : "3",
         "usage" : "C - Required if Modality (0008,0060) = IVUS.May be present otherwise.",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Time Distribution Protocol",
         "module" : "Synchronization",
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
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
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Frame of Reference"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
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
         "module" : "General Series"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Image",
         "usage" : "U",
         "req" : "1C"
      },
      "(0100,0420)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization DateTime",
         "module" : "SOP Common",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
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
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Image"
      },
      "(0018,5020)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "US Image",
         "desc" : "Manufacturer defined description of processing of echo information. Data may include code or description of gain (initial, overall, TGC, dynamic range, etc.), preprocessing, postprocessing, Doppler processing parameters, e.g., cutoff filters, etc., as used in generating a given image.",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Processing Function",
         "entity" : "Image"
      },
      "(0028,2114)" : {
         "req" : "3",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.5.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Image"
      },
      "(0018,1049)" : {
         "desc" : "Milligrams of active ingredient per milliliter of (diluted) agent",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Ingredient Concentration",
         "entity" : "Image",
         "usage" : "C - Required if contrast media was used in this image.",
         "req" : "3"
      },
      "(0008,0201)" : {
         "name" : "Timezone Offset From UTC",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "xrefstyle" : "select: labelnumber",
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5"
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
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
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 }
                              },
                              "\n                    "
                           ],
                           "el" : "listitem"
                        },
                        "\n                  "
                     ],
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
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
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
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
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "U",
         "req" : "1C"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,103e)" : {
         "entity" : "Series",
         "name" : "Series Description",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Description of the Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "entity" : "Series",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "module" : "General Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0028,1056)" : {
         "entity" : "Image",
         "desc" : [
            "Describes a VOI LUT function to apply to the values of Window Center (0028,1050) and Window Width (0028,1051).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.3",
                     "xrefstyle" : "select: label"
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.2"
                  }
               },
               "."
            ]
         ],
         "module" : "VOI LUT",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "name" : "VOI LUT Function",
         "usage" : "U",
         "req" : "3"
      },
      "(0018,6011)[<0>](0018,6039)" : {
         "entity" : "Image",
         "desc" : "The x displacement, in pixels, from the Reference pixel to the center of the Doppler sample volume.",
         "module" : "US Region Calibration",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Doppler Sample Volume X Position",
         "usage" : "U",
         "req" : "3"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Quantity Definition Sequence",
         "desc" : [
            "A list of name-value pairs that describe the characteristics of the quantity represented by the Real World Value.",
            "One or more Items are permitted in this Sequence.",
            "One of the items shall have a concept name that specifies the quantified characteristic, though it is not required that (G-C1C6, SRT, \"Quantity\") be used if there is a reason to use a similar concept from a different coding scheme. Other items may be concept modifiers, such as (G-C036, SRT, \"Measurement Method\"). The order of the items is not significant."
         ],
         "module" : "General Image",
         "entity" : "Image"
      },
      "(0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient ID",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M"
      },
      "(0018,1040)" : {
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Route",
         "module" : "Contrast/Bolus",
         "desc" : "Administration route of contrast agent",
         "entity" : "Image",
         "req" : "3",
         "usage" : "C - Required if contrast media was used in this image."
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
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
                                 "el" : "para",
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
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 },
                                 "el" : "para",
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
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetptr" : "sect_E.3.1",
                                          "targetdoc" : "PS3.15"
                                       },
                                       "el" : "olink"
                                    },
                                    "."
                                 ]
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
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common",
         "name" : "Deidentification Action",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,6011)[<0>](0018,602c)" : {
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "Physical Delta X",
         "module" : "US Region Calibration",
         "desc" : [
            "The physical value increments per positive X pixel increment. The units are as specified in the Physical Units X Direction (0018,6024).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.17"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0040,0245)" : {
         "module" : "General Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "name" : "Performed Procedure Step Start Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,2122)" : {
         "module" : "US Image",
         "desc" : "A number that identifies the Stage. Stage Number starts at one.",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "Stage Number",
         "entity" : "Image",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0016)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "Image"
      },
      "(0040,0280)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Comments on the Performed Procedure Step",
         "entity" : "Series"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "usage" : "U",
         "req" : "1C"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Identifying Private Elements",
         "entity" : "Image"
      },
      "(0040,9096)[<0>](0040,9224)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "module" : "General Image",
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
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "name" : "Real World Value Intercept"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,2160)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Ethnic Group",
         "module" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study"
      },
      "(0018,1080)" : {
         "entity" : "Image",
         "desc" : [
            "Beat length sorting has been applied.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "Y",
                     "yes"
                  ],
                  [
                     "N",
                     "no"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "US Image",
         "name" : "Beat Rejection Flag",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "General Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Image"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "General Study",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study"
      },
      "(0008,1080)" : {
         "entity" : "Study",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Description",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "usage" : "U",
         "req" : "3",
         "module" : "Specimen",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Primary Anatomic Structure Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "entity" : "Image"
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9210)" : {
         "name" : "LUT Label",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b"
         ],
         "module" : "General Image",
         "desc" : "Label that is used to identify the transformation of this Item.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0012,0050)" : {
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
         "name" : "Clinical Trial Time Point ID",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "req" : "2"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,0014)" : {
         "req" : "3",
         "usage" : "C - Required if contrast media was used in this image.",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "name" : "Contrast/Bolus Administration Route Sequence",
         "module" : "Contrast/Bolus",
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "General Image",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Largest Image Pixel Value",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution DateTime"
      },
      "(0008,001b)" : {
         "name" : "Original Specialized SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
            {
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0088,0200)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "name" : "Icon Image Sequence",
         "module" : "General Image",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "entity" : "Image",
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
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     },
                     "el" : "para",
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Image",
         "name" : "ICC Profile",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0018,6011)[<0>](0018,6024)" : {
         "entity" : "Image",
         "desc" : [
            "The physical units of the dimensions of the region.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.15"
                  },
                  "el" : "xref"
               },
               " for Enumerated Values."
            ]
         ],
         "module" : "US Region Calibration",
         "name" : "Physical Units X Direction",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "usage" : "U",
         "req" : "1"
      },
      "(0018,6011)[<0>](0018,603f)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "name" : "TM-Line Position y0",
         "desc" : [
            "The starting and ending coordinates pairs of the m-line. Where the X0,Y0are the starting point and X1,Y1are the end point of the tm-line.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.10"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "US Region Calibration"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "module" : "General Series",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Accession Number",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,2127)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "US Image",
         "desc" : "A View is a particular combination of the position and orientation when a set of images are acquired. Images are acquired at the same View in different Stages for the purpose of comparison.",
         "mod_tables" : [
            "table_C.8-18"
         ],
         "name" : "View Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0028,1222)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "name" : "Segmented Green Palette Color Lookup Table Data",
         "desc" : [
            "Segmented Green Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD. or Color Palette IOD See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.9.2"
               }
            },
            " for further explanation."
         ],
         "module" : "Palette Color Lookup Table",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "C - Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR"
      },
      "(0008,1040)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure ID",
         "module" : "General Series",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,0200)" : {
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Quality Control Subject",
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
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,6011)[<0>](0018,6020)" : {
         "req" : "3",
         "usage" : "U",
         "name" : "Reference Pixel x0",
         "mod_tables" : [
            "table_C.8-17"
         ],
         "module" : "US Region Calibration",
         "desc" : [
            "This coordinate pair, x0,y0, defines the location of a virtual \"reference\" pixel.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.5.5.1.16"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1002)" : {
         "entity" : "Patient",
         "name" : "Other Patient IDs Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a161)" : {
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a121)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7.6.16-12b",
            "table_10-2"
         ],
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "General Image"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Study Instance UID",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "module" : "General Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "entity" : "Image",
         "name" : "Private Creator Reference",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     },
                     "el" : "para",
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "1",
         "usage" : "M"
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
      "Can't handle table_8.8-1 (in table_C.8-17 after (0040,9098))",
      "Can't handle table_8.8-1 (in table_C.8-18 after (0040,000A))",
      "Can't handle table_8.8-1 (in table_C.8-18:table_10-7 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8-18:table_10-7 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8-18:table_10-7:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8-18:table_10-7:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8-18:table_10-25 after (0054,0220))",
      "Can't handle table_8.8-1 (in table_C.8-18:table_10-25 after (0054,0222))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
