var data = {
   "tags" : {
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "name" : "DateTime",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
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
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Description",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0028,1201)" : {
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
         ],
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Data"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Data Elements Signed",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
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
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence"
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
         "entity" : "Image",
         "req" : "1",
         "usage" : "U",
         "name" : "Referenced Instance Sequence"
      },
      "(0050,0010)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Device Sequence",
         "entity" : "Image",
         "req" : "1",
         "usage" : "U"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "Digital Signature UID"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "el" : "para"
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
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
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
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0018,1083)" : {
         "desc" : [
            "Number of R-R intervals acquired and used to create the image (not including the intervals rejected).",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "name" : "Intervals Acquired",
         "req" : "2C",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
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
         "name" : "Digital Signatures Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside."
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Person Role",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "name" : "Referenced SOP Instance MAC Sequence",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "name" : "Instance Creator UID",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "name" : "Scheduled Procedure Step Description",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed."
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "name" : "Specimen Detailed Description",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions)."
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1043)" : {
         "desc" : "Time of end of administration.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "name" : "Contrast/Bolus Stop Time"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Numeric Value",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context"
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
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Dimension Organization Sequence",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0260)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Performed Protocol Code Sequence",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0038,0014)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Issuer of Admission ID Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
      "(0040,0275)[<0>](0008,0050)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Accession Number",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
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
      "(0028,0109)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "The maximum value of all images in this Series.",
         "name" : "Largest Pixel Value in Series",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : "An identification number or code used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient ID",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "name" : "Container Component Length",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "desc" : "Length in mm of container component.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0018,1042)" : {
         "desc" : "Time of start of injection",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Contrast/Bolus Start Time"
      },
      "(0008,002a)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ],
         "desc" : [
            "The date and time that the acquisition of data started.",
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
                                    "The synchronization of this time with an external clock is specified in the synchronization Module in Acquisition Time synchronized (0018,1800)."
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
                                       "el" : "xref",
                                       "attrs" : {
                                          "linkend" : "sect_C.7.6.16.2.2.1",
                                          "xrefstyle" : "select: label"
                                       }
                                    },
                                    " for an overview of all acquisition related timing attributes."
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
            "Required if Image Type (0008,0008) Value 1 of this frame is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.2.2\" (Legacy Converted), may be present otherwise."
         ],
         "name" : "Acquisition DateTime",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "name" : "Numeric Value",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Storage Media File-Set ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
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
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Frame Numbers",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this sequence item do not apply to all frames."
         ]
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Institution Address",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "name" : "UID",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,9171)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Respiratory Signal Source",
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "module" : "Respiratory Synchronization",
         "desc" : [
            "Signal source from which respiratory motion is derived.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "NONE",
                     null
                  ],
                  [
                     "BELT",
                     "includes various devices that detect or track expansion of the chest"
                  ],
                  [
                     "NASAL_PROBE",
                     null
                  ],
                  [
                     "CO2_SENSOR",
                     null
                  ],
                  [
                     "NAVIGATOR",
                     "MR navigator and organ edge detection"
                  ],
                  [
                     "MR_PHASE",
                     "phase (of center k-space line)"
                  ],
                  [
                     "ECG",
                     "baseline demodulation of the ECG"
                  ]
               ]
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Respiratory Motion Compensation Technique (0018,9170) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Respiratory Motion Compensation Technique (0018,9170equals other than NONE."
         ]
      },
      "(0018,1064)" : {
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "desc" : [
            [
               "Description of type of framing performed. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.18.1.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for description and Defined Terms."
            ],
            "Required if type of framing is not time forward from trigger, may be present otherwise."
         ],
         "name" : "Cardiac Framing Type",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
      "(0020,9222)[<0>](0020,9421)" : {
         "name" : "Dimension Description Label",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "desc" : "Free text description that explains the meaning of the dimension."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
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
      "(0040,0275)[<0>](0008,0051)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0008,0201)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Timezone Offset From UTC",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetdoc" : "PS3.5"
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
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
               "content" : [
                  "\n                  ",
                  {
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
                     "content" : [
                        "Offset = -0200"
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "name" : "Digital Signature UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
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
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0008,1060)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Name of Physician(s) Reading Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "entity" : "Image",
         "req" : "1",
         "usage" : "U",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the related equipment is being reference.",
            "Only a single Item shall be included in this sequence.",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
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
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "The algorithm used in generating the MAC.",
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
                  "\n                    ",
                  {
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Study Instance UID",
         "req" : "1",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "name" : "Photometric Interpretation",
         "usage" : "M",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0018,9169)" : {
         "name" : "Cardiac Beat Rejection Technique",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "desc" : [
            "Cardiac arrhythmia rejection technique.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ]
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
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
      "(0028,0107)" : {
         "desc" : "The maximum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "name" : "Largest Image Pixel Value",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,0054)" : {
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Retrieve AE Title"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "name" : "Text Value",
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
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0018,1050)" : {
         "name" : "Spatial Resolution",
         "entity" : "Equipment",
         "req" : "3",
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0040,e011)" : {
         "name" : "Retrieve Location UID",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
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
         "name" : "Date",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Bits Stored",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.5",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.5"
               }
            },
            " for further explanation."
         ]
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "High Bit"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0088,0140)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside."
      },
      "(0008,1120)" : {
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Referenced Patient Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M"
      },
      "(0020,9256)" : {
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "module" : "Respiratory Synchronization",
         "desc" : [
            [
               "Respiratory trigger threshold in percent of the chest expansion for the frame relative to the last Respiratory-Peak. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.16.2.17.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Respiratory Motion Compensation Technique (0018,9170) equals other than NONE, REALTIME or BREATH_HOLD and if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "name" : "Respiratory Trigger Delay Threshold",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
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
            "usage" : "M",
            "name" : "Samples per Pixel"
         },
         {
            "desc" : "Number of samples (planes) in this image. This value shall be 1.",
            "mod_tables" : [
               "table_C.8-114"
            ],
            "module" : "Enhanced CT Image",
            "name" : "Samples per Pixel",
            "usage" : "M",
            "req" : "1",
            "entity" : "Image"
         }
      ],
      "(0008,9092)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Image Evidence Sequence",
         "desc" : [
            [
               "Full set of Composite SOP Instances referring to image SOP Instances inside the frames of this Enhanced CT Image SOP Instance. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this sequence.",
            "Required if the Referenced Image Sequence (0008,1140) is present."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0018,1020)" : [
         {
            "req" : "3",
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Software Versions",
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
            "name" : "Software Versions",
            "usage" : "U",
            "req" : "1",
            "entity" : "Equipment"
         }
      ],
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Software Versions",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0018,1086)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Skip Beats",
         "desc" : "Number of beats prescribed to be skipped after each detected arrhythmia.",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Institution Name",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0140)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Storage Media File-Set UID"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "name" : "Referenced SOP Instance MAC Sequence",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
      "(0020,000d)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "Unique identifier for the Study.",
         "name" : "Study Instance UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Study"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,0054)" : {
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "HL7 Instance Identifier"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Series Instance UID"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "MAC",
         "desc" : [
            "The MAC generated as described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
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
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Date of Last Calibration",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "name" : "Signature",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "name" : "Scheduled Procedure Step ID",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
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
         ]
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "name" : "Specimen UID",
         "entity" : "Image",
         "req" : "1",
         "usage" : "U",
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
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0018,0015)" : {
         "name" : "Body Part Examined",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "chapter_L",
                     "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.16",
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
         ]
      },
      "(0008,1111)" : [
         {
            "name" : "Referenced Performed Procedure Step Sequence",
            "usage" : "M",
            "req" : "3",
            "entity" : "Series",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this sequence."
            ],
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "module" : "General Series"
         },
         {
            "mod_tables" : [
               "table_C.8-113"
            ],
            "module" : "CT Series",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "name" : "Referenced Performed Procedure Step Sequence",
            "entity" : "Series",
            "req" : "1C",
            "usage" : "M"
         }
      ],
      "(0008,0020)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Date the Study started.",
         "entity" : "Study",
         "req" : "2",
         "usage" : "M",
         "name" : "Study Date"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Digital Signature DateTime"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "name" : "Person Name",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0020,9250)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Respiratory Trigger Type",
         "desc" : [
            "Characteristic of the respiratory signal used to the define the respiratory triggering.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "TIME",
                     null
                  ],
                  [
                     "AMPLITUDE",
                     null
                  ],
                  [
                     "BOTH",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if the value is not TIME, may be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "module" : "Respiratory Synchronization"
      },
      "(0010,0010)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Patient's full name.",
         "name" : "Patient's Name",
         "usage" : "M",
         "req" : "2",
         "entity" : "Patient"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "desc" : [
            "The MAC generated as described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3"
               }
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "MAC"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "General Series"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      "(0028,0120)" : {
         "req" : "1C",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Pixel Padding Value",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "name" : "Protocol Context Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0040,e011)" : {
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "name" : "Retrieve Location UID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Rational Numerator Value",
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
      "(0010,0200)" : {
         "desc" : [
            "Indicates whether or not the subject is a quality control phantom.",
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
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Quality Control Subject"
      },
      "(0008,0096)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0018,1040)" : {
         "desc" : "Administration route of contrast agent",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "name" : "Contrast/Bolus Route"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0556)" : {
         "name" : "Acquisition Context Description",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Free-text description of the image-acquisition context.",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Samples per Pixel",
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
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ]
      },
      "(0040,0555)[<0>](0040,a168)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced Segment Number"
      },
      "(0010,2202)" : {
         "name" : "Patient Species Code Sequence",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ]
      },
      "(0018,0012)[<0>](0018,1049)" : {
         "name" : "Contrast/Bolus Ingredient Concentration",
         "req" : "2",
         "entity" : "Image",
         "usage" : "U",
         "desc" : "Milligrams of active ingredient per milliliter of agent.",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0028,0100)" : [
         {
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.5",
                     "targetptr" : "PS3.5"
                  },
                  "el" : "olink"
               },
               " for further explanation."
            ],
            "name" : "Bits Allocated",
            "req" : "1",
            "entity" : "Image",
            "usage" : "M"
         },
         {
            "mod_tables" : [
               "table_C.8-114"
            ],
            "module" : "Enhanced CT Image",
            "desc" : "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. This value shall be 16.",
            "entity" : "Image",
            "req" : "1",
            "usage" : "M",
            "name" : "Bits Allocated"
         }
      ],
      "(0010,0024)[<0>](0040,0035)" : {
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Identifier Type Code"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "name" : "Numeric Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0008,0016)" : {
         "name" : "SOP Class UID",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,0054)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "name" : "Retrieve AE Title"
      },
      "(0040,0250)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Date",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "name" : "Container Component Thickness",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Thickness in mm of container component"
      },
      "(0018,9170)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Respiratory Motion Compensation Technique",
         "desc" : [
            "Applied technique to reduce respiratory motion artifacts.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "NONE",
                     null
                  ],
                  [
                     "BREATH_HOLD",
                     null
                  ],
                  [
                     "REALTIME",
                     "Image acquisition shorter than respiratory cycle"
                  ],
                  [
                     "GATING",
                     "Prospective gating"
                  ],
                  [
                     "TRACKING",
                     "Prospective through-plane or in-plane motion tracking"
                  ],
                  [
                     "PHASE_ORDERING",
                     "Prospective phase ordering"
                  ],
                  [
                     "PHASE_RESCANNING",
                     "Prospective techniques, such as real-time averaging, diminishing variance and motion adaptive gating"
                  ],
                  [
                     "RETROSPECTIVE",
                     "Retrospective gating"
                  ],
                  [
                     "CORRECTION",
                     "Retrospective image correction"
                  ]
               ],
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.18-2"
         ],
         "module" : "Respiratory Synchronization"
      },
      "(0008,9121)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3"
         ]
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "name" : "Modified Attributes Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Data Elements Signed"
      },
      "(0032,1034)" : {
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "name" : "Requesting Service Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
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
         "name" : "Person Name",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
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
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced Digital Signature Sequence",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,9121)[<0>](0020,000d)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Study Instance UID"
      },
      "(0010,1001)" : {
         "desc" : "Other names used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Other Patient Names",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "name" : "Referenced Digital Signature Sequence",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0020,9221)[<0>](0020,9164)" : {
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
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
         "usage" : "U",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0012,0020)" : {
         "name" : "Clinical Trial Protocol ID",
         "req" : "1",
         "usage" : "U",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Measurement Units Code Sequence",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0010,1030)" : {
         "name" : "Patient's Weight",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "desc" : "Weight of the Patient, in kilograms.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Coding Scheme External ID"
      },
      "(0010,0040)" : {
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M",
         "name" : "Patient's Sex",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Sex of the named patient.",
            {
               "type" : "variablelist",
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
               ]
            }
         ]
      },
      "(0018,0014)[<0>](0018,002a)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "name" : "Additional Drug Sequence",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "desc" : [
            "Sequence that identifies any additional drug that is administered with the contrast agent bolus.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Denominator Value"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Identification number of an animal within the registry.",
         "name" : "Breed Registration Number",
         "req" : "1",
         "entity" : "Patient",
         "usage" : "M"
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
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Other Patient IDs Sequence"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0020,000e)" : {
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Series Instance UID"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Code Sequence"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "module" : "General Series",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "req" : "1",
            "usage" : "M",
            "entity" : "Series"
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "mod_tables" : [
               "table_C.8-113",
               "table_10-11"
            ],
            "module" : "CT Series",
            "name" : "Referenced SOP Instance UID",
            "req" : "1",
            "entity" : "Series",
            "usage" : "M"
         }
      ],
      "(0008,9237)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "desc" : [
            "The algorithm used in generating the MAC.",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
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
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "name" : "MAC Algorithm",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0040,0251)" : {
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Performed Procedure Step End Time",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Time at which the Performed Procedure Step ended."
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0040,0555)" : {
         "name" : "Acquisition Context Sequence",
         "req" : "2",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context"
      },
      "(0018,0014)" : {
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Contrast/Bolus Administration Route Sequence",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0028,0034)" : {
         "name" : "Pixel Aspect Ratio",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
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
      "(0008,9237)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Series Instance UID"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0088,0130)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
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
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced Frame Number"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Coding Scheme Name"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(7fe0,0010)" : {
         "name" : "Pixel Data",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
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
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced Segment Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0012,0050)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
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
         ],
         "req" : "2",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Clinical Trial Time Point ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Rational Numerator Value"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "desc" : [
            "The MAC generated as described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "MAC"
      },
      "(0008,1048)" : {
         "desc" : [
            "Names of the physician(s) who are responsible for overall patient care at time of Study (see ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.1"
               }
            },
            " for Performing Physician)"
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Physician(s) of Record"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0020,000e)" : {
         "name" : "Series Instance UID",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
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
      "(0088,0200)[<0>](0028,0010)" : {
         "desc" : "Number of rows in the image.",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "Rows"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "name" : "Referenced Digital Signature Sequence"
      },
      "(0040,0513)" : {
         "name" : "Issuer of the Container Identifier Sequence",
         "req" : "2",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Coordinating Center Name",
         "req" : "2",
         "usage" : "U",
         "entity" : "Series"
      },
      "(0018,0012)[<0>](0018,9337)" : {
         "name" : "Contrast/Bolus Agent Number",
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "desc" : "Identifying number, unique within this SOP Instance, of the agent administered. Used to reference this particular agent from the Contrast/Bolus Functional Group Macro. The number shall be 1 for the first Item and increase by 1 for each subsequent Item."
      },
      "(0008,9154)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ],
         "desc" : [
            [
               "Full set of Composite SOP Instances used as source image SOP Instances inside the frames of this Enhanced CT Image SOP Instance. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "One or more Items shall be included in this sequence.",
            "Required if the Source Image Sequence (0008,2112) is present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Source Image Evidence Sequence"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "desc" : [
            "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Pixel Representation"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
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
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "name" : "UID",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "name" : "Container Component Type Code Sequence",
         "entity" : "Image",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "name" : "Reason for Requested Procedure Code Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Data Elements Signed",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
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
         "name" : "Content Item Modifier Sequence",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0254)" : {
         "name" : "Performed Procedure Step Description",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed."
      },
      "(0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
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
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "General Series",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Numeric Value",
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
      "(0010,2210)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "The anatomical orientation type used in instances generated by this equipment.",
            {
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
               ],
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
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Anatomical Orientation Type"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "req" : "2",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received."
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Instance UID of Related Series"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0028,1101)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
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
         ]
      },
      "(0010,4000)" : {
         "desc" : "User-defined additional information about the patient.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Comments",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced SOP Class UID"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "name" : "MAC Algorithm",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "The algorithm used in generating the MAC to be encrypted to form the Digital Signature.",
            {
               "type" : "variablelist",
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
                           "el" : "olink",
                           "attrs" : {
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "name" : "Device Description",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "desc" : "Further description in free form text describing the device."
      },
      "(0100,0424)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "SOP Authorization Comment"
      },
      "(0018,1082)" : {
         "name" : "High R-R Value",
         "req" : "2C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "desc" : [
            "R-R interval high limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ]
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0020,9222)" : {
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            "Identifies the sequence containing the indices used to specify the dimension of the multi-frame object.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "U",
         "name" : "Dimension Index Sequence"
      },
      "(0010,0032)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth time of the Patient.",
         "name" : "Patient's Birth Time",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0012,0064)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "De-identification Method Code Sequence"
      },
      "(0040,0560)[<0>](0040,059a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Specimen Type Code Sequence",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image"
      },
      "(0028,2000)" : {
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
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "name" : "ICC Profile",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,9037)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Cardiac Synchronization Technique",
         "module" : "Cardiac Synchronization",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "desc" : [
            "Defines if a cardiac synchronization technique was applied during or after the acquisition.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED. May be present otherwise."
         ]
      },
      "(0018,1049)" : {
         "desc" : "Milligrams of active ingredient per milliliter of (diluted) agent",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Contrast/Bolus Ingredient Concentration"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U"
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
         "entity" : "Image",
         "usage" : "M",
         "name" : "Specific Character Set"
      },
      "(0010,1020)" : {
         "desc" : "Length or size of the Patient, in meters.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Patient's Size"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Signature"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
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
         ]
      },
      "(0018,9004)" : {
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.2.2\" (Legacy Converted), may be present otherwise."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ],
         "name" : "Content Qualification",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0040,1012)" : {
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Reason For Performed Procedure Code Sequence"
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction",
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
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
         "req" : "1C",
         "entity" : "Image",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Calculated Frame List"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located."
      },
      "(0028,0103)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
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
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0018,9073)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Acquisition Duration",
         "desc" : [
            [
               "The time in seconds needed to complete the acquisition of data. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.2.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if Image Type (0008,0008) Value 1 of this frame is ORIGINAL or MIXED and SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.2.2\" (Legacy Converted), may be present otherwise."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Time"
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the container component.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen"
      },
      "(0018,0010)" : {
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "desc" : "Contrast or bolus agent",
         "name" : "Contrast/Bolus Agent",
         "req" : "2",
         "entity" : "Image",
         "usage" : "U"
      },
      "(0010,1010)" : {
         "name" : "Patient's Age",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "desc" : "Age of the Patient.",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0018,1081)" : {
         "name" : "Low R-R Value",
         "req" : "2C",
         "entity" : "Image",
         "usage" : "U",
         "desc" : [
            "R-R interval low limit for beat rejection, in ms.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals PROSPECTIVE or RETROSPECTIVE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            [
               "A departmental information system identifier for the Specimen. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.1",
                     "xrefstyle" : "select: label"
                  }
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
         "name" : "Specimen Identifier",
         "req" : "1",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0040,0520)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Container Component Sequence",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image"
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
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Code Sequence"
      },
      "(0020,0200)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "desc" : [
            "UID of common synchronization environment. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.4.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1",
         "usage" : "U",
         "entity" : "Frame of Reference",
         "name" : "Synchronization Frame of Reference UID"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0020,9222)[<0>](0020,9213)" : {
         "name" : "Dimension Index Private Creator",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Dimension Index Pointer (0020,9165) value is the Data Element Tag of a Private Attribute."
         ],
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Reason for the attribute modification.",
            {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "name" : "Reason for the Attribute Modification",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance."
      },
      "(0008,1164)" : {
         "name" : "Frame Extraction Sequence",
         "req" : "1",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0010,21b0)" : {
         "name" : "Additional Patient History",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Additional information about the Patient's medical history."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced Segment Number"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,9121)" : {
         "name" : "Referenced Raw Data Sequence",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "The Raw data that was used to derive this Image.",
            "One or more Items are permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The items of in this sequence may identify raw data that has not been stored or encoded as a DICOM object. This allows recognition that images in different instances have been reconstructed from the same raw data."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8-114"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0010,2203)" : {
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
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "2C",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Patient's Sex Neutered"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Date",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
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
         "entity" : "Image"
      },
      "(0028,0010)" : {
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "Number of rows in the image.",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Rows"
      },
      "(0018,0012)[<0>](0018,1041)" : {
         "desc" : "Total volume administered in milliliters of diluted contrast agent.",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Volume",
         "req" : "2",
         "entity" : "Image",
         "usage" : "U"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Manufacturer's model name of the container component.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0020,9222)[<0>](0020,9238)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Functional Group Pointer 0020,9167) value is the Data Element Tag of a Private Attribute."
         ],
         "name" : "Functional Group Private Creator",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "name" : "Breed Registry Code Sequence",
         "req" : "1",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Date"
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
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
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
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15",
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
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "el" : "para"
                              },
                              "\n                        "
                           ],
                           "el" : "listitem"
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
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0040,e011)" : {
         "name" : "Retrieve Location UID",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network."
      },
      "(0010,2180)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Occupation of the Patient.",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Occupation"
      },
      "(0028,0102)" : [
         {
            "entity" : "Image",
            "req" : "1",
            "usage" : "M",
            "name" : "High Bit",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.5",
                     "targetptr" : "PS3.5"
                  },
                  "el" : "olink"
               },
               " for further explanation."
            ]
         },
         {
            "desc" : "Most significant bit for pixel sample data. Each sample shall have the same high bit. Shall be one less than the value in Bits Stored (0028,0101).",
            "mod_tables" : [
               "table_C.8-114"
            ],
            "module" : "Enhanced CT Image",
            "name" : "High Bit",
            "entity" : "Image",
            "req" : "1",
            "usage" : "M"
         }
      ],
      "(0018,0012)[<0>](0018,0014)" : {
         "name" : "Contrast/Bolus Administration Route Sequence",
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "desc" : [
            "Sequence that identifies the route of administration of contrast agent.",
            "Only a single Item shall be included in this sequence."
         ],
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen"
      },
      "(0010,0030)" : {
         "name" : "Patient's Birth Date",
         "req" : "2",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Birth date of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0008,0015)" : {
         "name" : "Instance Coercion DateTime",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            ")."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "name" : "Time",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
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
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Data Elements Signed"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
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
      "(0008,0008)" : {
         "name" : "Image Type",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-114"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "Image characteristics. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.16.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " and ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.15.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "req" : "2",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Issuer of the Container Identifier Sequence"
      },
      "(0008,1084)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "name" : "Specimen Localization Content Item Sequence",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
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
            "One or more Items shall be included in this sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ]
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
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
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0020,4000)" : {
         "desc" : "User-defined comments about the image",
         "mod_tables" : [
            "table_C.8-114"
         ],
         "module" : "Enhanced CT Image",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Image Comments"
      },
      "(0008,1115)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Referenced Series Sequence",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,0031)" : {
         "name" : "Series Time",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Time the Series started."
      },
      "(0020,0060)" : {
         "name" : "Laterality",
         "req" : "2C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) are not sent.",
            {
               "type" : "variablelist",
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
               ]
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Person's Address"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0018,0012)" : [
         {
            "desc" : [
               "Sequence that identifies the contrast agent.",
               "One or more Items are permitted in this sequence."
            ],
            "module" : "Contrast/Bolus",
            "mod_tables" : [
               "table_C.7-12"
            ],
            "name" : "Contrast/Bolus Agent Sequence",
            "entity" : "Image",
            "req" : "3",
            "usage" : "U"
         },
         {
            "entity" : "Image",
            "req" : "1",
            "usage" : "U",
            "name" : "Contrast/Bolus Agent Sequence",
            "module" : "Enhanced Contrast/Bolus",
            "mod_tables" : [
               "table_C.7-12b"
            ],
            "desc" : [
               "Sequence that identifies one or more contrast agents administered prior to or during the acquisition.",
               "One or more Items shall be included in this sequence."
            ]
         }
      ],
      "(0020,0013)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "A number that identifies this Composite object instance.",
         "name" : "Instance Number",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0040,0560)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "U",
         "name" : "Specimen Description Sequence"
      },
      "(0008,1250)" : {
         "name" : "Related Series Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
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
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
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
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Time of Last Calibration"
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "req" : "2",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Issuer of the Specimen Identifier Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "name" : "Person Name",
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
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1042)" : {
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "desc" : "Time of start of administration.",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Contrast/Bolus Start Time"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0050,0010)[<0>](0050,0018)" : {
         "desc" : [
            "Volume of device in ml. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            ".."
         ],
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Device Volume"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image"
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
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Referenced Frame Number"
      },
      "(0088,0200)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ],
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Icon Image Sequence"
      },
      "(0012,0010)" : {
         "name" : "Clinical Trial Sponsor Name",
         "usage" : "U",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.1"
               }
            },
            "."
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
         "req" : "1",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence"
      },
      "(0012,0021)" : {
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Name",
         "req" : "2",
         "usage" : "U",
         "entity" : "Patient"
      },
      "(0028,0006)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Planar Configuration",
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
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0020,000e)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0012,0030)" : {
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         ],
         "entity" : "Patient",
         "req" : "2",
         "usage" : "U",
         "name" : "Clinical Trial Site ID"
      },
      "(0018,1044)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "name" : "Contrast/Bolus Total Dose",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "desc" : "Total amount in milliliters of the undiluted contrast agent"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "Specimen"
      },
      "(0008,0060)" : [
         {
            "req" : "1",
            "usage" : "M",
            "entity" : "Series",
            "name" : "Modality",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "module" : "General Series",
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
            ]
         },
         {
            "module" : "CT Series",
            "mod_tables" : [
               "table_C.8-113"
            ],
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series.",
               {
                  "list" : [
                     [
                        "CT",
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
                        "linkend" : "sect_C.7.3.1.1.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "req" : "1",
            "entity" : "Series",
            "usage" : "M",
            "name" : "Modality"
         }
      ],
      "(0400,0500)[<0>](0400,0520)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         ]
      },
      "(0018,1084)" : {
         "desc" : [
            "Number of R-R intervals rejected.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "name" : "Intervals Rejected",
         "req" : "2C",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0038,0010)" : {
         "name" : "Admission ID",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "name" : "Certified Timestamp",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
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
         "name" : "UID",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,001b)" : {
         "name" : "Original Specialized SOP Class UID",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0038,0064)" : {
         "name" : "Issuer of Service Episode ID Sequence",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0040,0275)" : {
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Request Attributes Sequence",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series"
      },
      "(0028,0101)" : [
         {
            "name" : "Bits Stored",
            "req" : "1",
            "entity" : "Image",
            "usage" : "M",
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
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "name" : "Bits Stored",
            "req" : "1",
            "entity" : "Image",
            "usage" : "M",
            "desc" : "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. This value shall be 12 or16.",
            "module" : "Enhanced CT Image",
            "mod_tables" : [
               "table_C.8-114"
            ]
         }
      ],
      "(0010,0024)[<0>](0040,0039)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
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
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
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
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Frame Number"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "name" : "Specimen Preparation Step Content Item Sequence",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0020,1040)" : {
         "req" : "2",
         "usage" : "M",
         "entity" : "Frame of Reference",
         "name" : "Position Reference Indicator",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "module" : "Frame of Reference",
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
         ]
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
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
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0040,0518)" : {
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this sequence."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "2",
         "entity" : "Image",
         "name" : "Container Type Code Sequence"
      },
      "(0020,9222)[<0>](0020,9165)" : {
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "desc" : [
            "Contains the Data Element Tag that is used to identify the Attribute connected with the index. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.17.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "U",
         "name" : "Dimension Index Pointer"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0008,001a)" : {
         "name" : "Related General SOP Class UID",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         ]
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "name" : "Requested Procedure ID",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
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
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
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
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)" : {
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1200)" : {
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference"
      },
      "(0012,0063)" : {
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "De-identification Method",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
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
               ]
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Requested Procedure Code Sequence"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "name" : "MAC Algorithm",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "The algorithm used in generating the MAC.",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                    ",
                  {
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
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "name" : "Time",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0054,0500)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_10-25"
         ],
         "desc" : [
            [
               "Describes the anatomical direction in which a set of slices is progressing (see ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.20.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "). Meaningful only for cardiac images."
            ],
            [
               "Enumerated Values are defined in ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.20.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "name" : "Slice Progression Direction",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0090)" : {
         "desc" : "Name of the patient's referring physician",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referring Physician's Name",
         "entity" : "Study",
         "req" : "2",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0018,5100)" : {
         "name" : "Patient Position",
         "req" : "2C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
         ]
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "req" : "1C",
         "entity" : "Study",
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
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Coding Scheme Designator"
      },
      "(0040,0245)" : {
         "name" : "Performed Procedure Step Start Time",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "desc" : "User-supplied identifier for the device",
         "name" : "Device ID",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Ethnic Group"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ]
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,9092)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0020,000e)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Series Instance UID",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s)."
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0012,0083)[<0>](0012,0085)" : {
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "name" : "Consent for Distribution Flag",
         "entity" : "Study",
         "req" : "1",
         "usage" : "U"
      },
      "(0028,1102)" : {
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
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
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Floating Point Value"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Modifying System",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "name" : "Time",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "entity" : "Image",
         "name" : "Simple Frame List",
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
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
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
         ]
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0008,1052)[<0>](0040,1101)" : {
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
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,0050)" : {
         "req" : "2",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Accession Number",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "A RIS generated number that identifies the order for the Study."
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "entity" : "Image",
         "req" : "2C",
         "usage" : "U",
         "name" : "Device Diameter Units",
         "desc" : [
            "Required if Device Diameter (0050,0016) is present.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Floating Point Value",
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
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "name" : "Digital Signature UID",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
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
         "name" : "Device Diameter",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image"
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Universal Entity ID"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0130)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside."
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "req" : "1",
            "entity" : "Series",
            "usage" : "M",
            "name" : "Referenced SOP Class UID",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "desc" : "Uniquely identifies the referenced SOP Class."
         },
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "module" : "CT Series",
            "mod_tables" : [
               "table_C.8-113",
               "table_10-11"
            ],
            "req" : "1",
            "usage" : "M",
            "entity" : "Series",
            "name" : "Referenced SOP Class UID"
         }
      ],
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
         "entity" : "Image",
         "usage" : "M"
      },
      "(0012,0081)" : {
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "U",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "May include Sequence Attributes and their Items."
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Descriptor"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "list" : [
                  [
                     "X509_1993_SIG",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
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
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced SOP Instance MAC Sequence",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Protocol Context Sequence"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "name" : "Container Component Description",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Container component text description."
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "name" : "Time Range",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "module" : "Frame Extraction",
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
            [
               "See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      "(0040,051a)" : {
         "desc" : "Description of the container.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "name" : "Container Description",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U"
      },
      "(0008,9237)[<0>](0008,1115)" : {
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3"
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced Series Sequence"
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "name" : "SOP Instance UID",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,2292)" : {
         "name" : "Patient Breed Description",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Patient",
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Referenced Segment Number"
      },
      "(0008,103e)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Series Description",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Description of the Series"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
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
         ]
      },
      "(0018,1803)" : {
         "desc" : [
            "IP Address of NTP, SNTP, or PTP time source. IPv4 addresses shall be in dotted decimal (e.g., 192.168.1.1). The IPv6 addresses shall be in colon separated hexadecimal (e.g., 12:34:56:78:9a:bc:de:f0).",
            {
               "content" : [
                  "\n                    ",
                  {
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
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "NTP Source Address",
         "req" : "3",
         "usage" : "U",
         "entity" : "Frame of Reference"
      },
      "(0040,0253)" : {
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Performed Procedure Step ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
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
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Numeric Value"
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "The view requested during the C-MOVE operation that resulted in the transfer of this instance.",
            {
               "type" : "variablelist",
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
               ]
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "req" : "2",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Specimen Preparation Sequence",
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this sequence.",
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
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen"
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
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0018,1041)" : {
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "desc" : "Volume injected in milliliters of diluted contrast agent",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "name" : "Contrast/Bolus Volume"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "name" : "DateTime"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve AE Title",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
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
         "name" : "Planar Configuration",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Institution Name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "name" : "Container Component Width",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Width in mm of container component."
      },
      "(0008,9207)" : {
         "name" : "Volume Based Calculation Technique",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Method used for volume calculations with frames in the SOP Instance. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.16.2.1.3"
               }
            },
            " for a description and Defined Terms."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.8-131"
         ]
      },
      "(0008,1050)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Performing Physician's Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Name of the physician(s) administering the Series."
      },
      "(0018,1801)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Frame of Reference",
         "name" : "Time Source",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "desc" : "ID of equipment or system providing time reference"
      },
      "(0010,1021)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Patient's Size Code Sequence",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0018,1201)" : {
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
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
         ]
      },
      "(0018,a001)" : {
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
         "name" : "Contributing Equipment Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Name",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
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
         "mod_tables" : [
            "table_C.7-12"
         ],
         "module" : "Contrast/Bolus",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Contrast/Bolus Ingredient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
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
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Concept Code Sequence"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Specimen Short Description",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions)."
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
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
      "(0008,9092)[<0>](0008,1115)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Retrieve AE Title"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "name" : "MAC Algorithm",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "The algorithm used in generating the MAC.",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Universal Entity ID"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "2",
         "entity" : "Series",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
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
         "name" : "Device Length",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Time"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "name" : "Numeric Value",
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
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1046)" : {
         "name" : "Contrast Flow Rate",
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Rate of administration in milliliters/sec. Only a single value shall be present.",
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ]
      },
      "(0008,0030)" : {
         "entity" : "Study",
         "req" : "2",
         "usage" : "M",
         "name" : "Study Time",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Time the Study started."
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature."
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "entity" : "Study",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0028,2114)" : {
         "name" : "Lossy Image Compression Method",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "A label for the lossy compression method(s) that have been applied to this image.",
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
            "May be multivalued if successive lossy compression steps have been applied; the value order shall correspond to the values of Lossy Image Compression Ratio (0028,2112).",
            "Required if Lossy Image Compression (0028,2110) is \"01\"."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ]
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0088,0130)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0100,0426)" : {
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Authorization Equipment Certification Number"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Local Namespace Entity ID"
      },
      "(0028,1202)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Green Palette Color Lookup Table Data",
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
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0028,0106)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Smallest Image Pixel Value",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Date",
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
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0088,0130)" : {
         "name" : "Storage Media File-Set ID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,0081)" : {
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "name" : "Value Type",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
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
      "(0020,0010)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "entity" : "Study",
         "req" : "2",
         "usage" : "M",
         "name" : "Study ID"
      },
      "(0088,0200)[<0>](0028,1201)" : {
         "name" : "Red Palette Color Lookup Table Data",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
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
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
                           "el" : "olink",
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15"
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
      "(0040,0512)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
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
         "usage" : "U",
         "req" : "1",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "name" : "Reason for the Requested Procedure",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Reason for requesting this procedure.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Spatial Resolution",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0100,0410)" : {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance Status",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Date",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a date.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The purpose or role of the date value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context"
      },
      "(0018,1046)" : {
         "desc" : "Rate(s) of injection(s) in milliliters/sec",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "name" : "Contrast Flow Rate"
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "module" : "Device",
         "desc" : "Manufacturer's model name of the device"
      },
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
         "name" : "UID",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Type of Patient ID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0008,9154)[<0>](0020,000d)" : {
         "desc" : "Unique identifier for the Study",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3"
         ],
         "name" : "Study Instance UID",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
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
      "(0018,106c)" : {
         "name" : "Synchronization Channel",
         "entity" : "Frame of Reference",
         "req" : "1C",
         "usage" : "U",
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
         ]
      },
      "(0018,106a)" : {
         "name" : "Synchronization Trigger",
         "req" : "1",
         "usage" : "U",
         "entity" : "Frame of Reference",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "name" : "Inter-Marker Distance",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
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
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(2050,0020)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Presentation LUT Shape",
         "desc" : [
            "Specifies an identity transformation for the Presentation LUT, such that the output of all grayscale transformations defined in the IOD containing this Module are defined to be P-Values.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "IDENTITY",
                     "output is in P-Values."
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.8-114"
         ],
         "module" : "Enhanced CT Image"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         ]
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0028,0303)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Longitudinal Temporal Information Modified",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
               "title" : "Enumerated Values:",
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
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
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
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0020,9172)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image"
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               }
            },
            " for further explanation."
         ],
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
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
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "MAC ID Number"
      },
      "(0018,1008)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Identifier of the gantry or positioner.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "name" : "Gantry ID"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0040,e011)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Retrieve Location UID"
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
                     "linkend" : "sect_C.12.1.1.4.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Encrypted Attributes Sequence"
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "name" : "ICC Profile",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "module" : "Enhanced CT Image",
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
                     "el" : "para",
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ]
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0028,0011)" : {
         "desc" : "Number of columns in the image",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Columns"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "name" : "Coding Scheme Registry",
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
         "module" : "SOP Common"
      },
      "(0018,0012)[<0>](0018,9338)" : {
         "desc" : [
            "Active ingredient of agent.",
            "Zero or more Items shall be included in this sequence."
         ],
         "module" : "Enhanced Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "name" : "Contrast/Bolus Ingredient Code Sequence",
         "entity" : "Image",
         "req" : "2",
         "usage" : "U"
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
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Value Type"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "name" : "Pixel Aspect Ratio",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "module" : "Enhanced CT Image",
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
      "(0018,1200)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Date of Last Calibration"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "name" : "UID",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Signature"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Contribution DateTime",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance."
      },
      "(0008,113a)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ],
         "desc" : [
            "References to waveforms acquired in conjunction with this image. These Waveforms may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Referenced Waveform Sequence",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "module" : "Frame Extraction",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "name" : "Multi-frame Source SOP Instance UID",
         "entity" : "Image",
         "req" : "1",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "Bits Allocated"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1047)" : {
         "name" : "Contrast Flow Duration",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U",
         "desc" : "Duration of injection in seconds. Only a single value shall be present.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus"
      },
      "(0400,0561)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Original Attributes Sequence"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "name" : "Container Identifier",
         "req" : "1",
         "entity" : "Image",
         "usage" : "U"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "el" : "para"
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
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
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0054,0220)" : {
         "desc" : [
            "Sequence that describes the projection of the anatomic region of interest.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_10-25"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "View Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Rational Numerator Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
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
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced Frame Number"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
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
         "name" : "Universal Entity ID Type",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0018,1000)" : [
         {
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
                        "el" : "para"
                     },
                     "\n                  "
                  ]
               }
            ],
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M",
            "req" : "3",
            "entity" : "Equipment",
            "name" : "Device Serial Number"
         },
         {
            "module" : "Enhanced General Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "name" : "Device Serial Number",
            "entity" : "Equipment",
            "req" : "1",
            "usage" : "U"
         }
      ],
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced Digital Signature Sequence",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0020,0012)" : {
         "name" : "Acquisition Number",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ],
         "desc" : [
            "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This number is not required to be unique across SOP Instances in a series. See also the description of the Referenced Raw Data Sequence (0008,9121)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Institution Code Sequence"
      },
      "(0020,9311)" : {
         "name" : "Dimension Organization Type",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "module" : "Multi-frame Dimension",
         "desc" : [
            "Dimension organization of the instance.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "3D",
                     "Spatial Multi-frame image of parallel planes (3D volume set)"
                  ],
                  [
                     "3D_TEMPORAL",
                     "Temporal loop of parallel-plane 3D volume sets."
                  ]
               ]
            }
         ]
      },
      "(0008,1040)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(4ffe,0001)" : {
         "name" : "MAC Parameters Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Referenced Segment Number",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
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
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,0012)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Instance Creation Date"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0008,1110)" : {
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced Study Sequence"
      },
      "(0038,0060)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "name" : "Service Episode ID"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,9172)[<0>](0008,1160)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Text Value",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0020,9222)[<0>](0020,9164)" : {
         "module" : "Multi-frame Dimension",
         "mod_tables" : [
            "table_C.7.6.17-1"
         ],
         "desc" : [
            [
               "Uniquely identifies a set of dimensions referenced within the containing SOP Instance. In particular the dimension described by this sequence item is associated with this Dimension Organization UID. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.17.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Required if the value of Dimension Organization Sequence (0020,9221) contains Items"
         ],
         "name" : "Dimension Organization UID",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Data Elements Signed"
      },
      "(0028,2110)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Lossy Image Compression",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.2.2\" (Legacy Converted). May be present otherwise."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ]
      },
      "(0008,1010)" : {
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "desc" : "Manufacturer's serial number of the device",
         "name" : "Device Serial Number",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0515)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this sequence.",
         "name" : "Alternate Container Identifier Sequence",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0028,0301)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Burned In Annotation",
         "desc" : [
            "Indicates whether or not the image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "NO",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            "This means that images that contain this Module shall not contain such burned in annotations.",
            "Required if SOP Class UID is not \"1.2.840.10008.5.1.4.1.1.2.2\" (Legacy Converted), may be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-114"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0008,113a)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "desc" : "Unique identifier for the Study",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3"
         ]
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "module" : "Specimen",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Primary Anatomic Structure Sequence"
      },
      "(0008,1070)" : {
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Operators' Name"
      },
      "(0008,0013)" : {
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Instance Creation Time",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0008,9092)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3"
         ]
      },
      "(0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Primary hospital identification number or code for the patient.",
         "req" : "2",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient ID"
      },
      "(0038,0062)" : {
         "desc" : "Description of the type of service episode.",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode Description",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Value Type",
         "desc" : [
            "The type of the value encoded in this Item.",
            {
               "type" : "variablelist",
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
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0008,103f)" : {
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "name" : "Series Description Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0012,0042)" : {
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Subject Reading ID",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0008,0021)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Series Date",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Date the Series started."
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced SOP Instance MAC Sequence"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "entity" : "Patient",
         "req" : "2C",
         "usage" : "M",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Institution Name"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0008,1062)" : {
         "name" : "Physician(s) Reading Study Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0020,9222)[<0>](0020,9167)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
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
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Digital Signature UID"
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
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "MAC Algorithm",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The algorithm used in generating the MAC.",
            {
               "type" : "variablelist",
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
               ]
            },
            {
               "content" : [
                  "\n                    ",
                  {
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
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "MAC",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3"
               },
               "el" : "xref"
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0028,0302)" : {
         "name" : "Recognizable Visual Features",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
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
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ]
      },
      "(0100,0420)" : {
         "name" : "SOP Authorization DateTime",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO."
      },
      "(0008,1080)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Admitting Diagnoses Description",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0028,2112)" : {
         "req" : "1C",
         "entity" : "Image",
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
                     "linkend" : "sect_C.7.6.1.1.5"
                  }
               },
               " for further explanation."
            ],
            "May be multivalued if successive lossy compression steps have been applied.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "For example, a compression ratio of 30:1 would be described in this Attribute with a single value of 30."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Lossy Images Compression (0028,2110) is \"01\"."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ]
      },
      "(0088,0200)[<0>](0028,1202)" : {
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
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "module" : "Enhanced CT Image",
         "name" : "Green Palette Color Lookup Table Data",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0008,1049)" : {
         "name" : "Physician(s) of Record Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "name" : "Contribution Description"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
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
         ]
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,0012)[<0>](0018,9425)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Contrast/Bolus Ingredient Opaque",
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
         ]
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
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
         "name" : "Clinical Trial Time Point Description",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID"
      },
      "(0088,0200)[<0>](0028,0106)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "name" : "Smallest Image Pixel Value",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,1061)" : {
         "req" : "3",
         "entity" : "Frame of Reference",
         "usage" : "U",
         "name" : "Trigger Source or Type",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ]
      },
      "(0018,0012)[<0>](0018,9340)" : {
         "name" : "Contrast Administration Profile Sequence",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "desc" : [
            "Sequence that describes one or more phases of contrast administered.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0008,1052)" : {
         "name" : "Performing Physician Identification Sequence",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "name" : "Concept Code Sequence",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,9237)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Referenced Presentation State Sequence",
         "desc" : [
            "References to Presentation State instances acquired in conjunction with this instance.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "May only be used to reference Presentation States belonging to the acquired data and not to reference Presentation States generated subsequently such as during interpretation."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "One or more Items shall be included in this sequence.",
            "Required if Presentation State is generated during acquisition, shall not be present otherwise."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114"
         ]
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "Concept Name Code Sequence",
         "module" : "Acquisition Context",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Value Type",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
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
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Concept Code Sequence"
      },
      "(0028,0108)" : {
         "name" : "Smallest Pixel Value in Series",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "The minimum value of all images in this Series."
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Blue Palette Color Lookup Table Descriptor",
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
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced SOP Instance MAC Sequence",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "3",
         "usage" : "M",
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
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
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "entity" : "Image",
         "usage" : "U"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "desc" : [
            "Material of container component.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "name" : "Container Component Material",
         "req" : "3",
         "entity" : "Image",
         "usage" : "U"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Floating Point Value"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U",
         "name" : "Text Value",
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
      "(0018,9085)" : {
         "desc" : [
            "Cardiac Signal Source.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            },
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE."
         ],
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "name" : "Cardiac Signal Source",
         "entity" : "Image",
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Digital Signature UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "name" : "Concept Code Sequence",
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
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0054,0220)[<0>](0054,0222)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_10-25"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "View Modifier.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "View Modifier Code Sequence"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
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
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "name" : "Pixel Data",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0020,0011)" : {
         "desc" : "A number that identifies this Series.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Number",
         "req" : "2",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Image",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "name" : "MAC",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "desc" : [
            "The MAC generated as described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "name" : "Digital Signature Purpose Code Sequence"
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen"
      },
      "(0018,9070)" : {
         "name" : "Cardiac RR Interval Specified",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.18-1"
         ],
         "module" : "Cardiac Synchronization",
         "desc" : [
            "R-R interval in ms measured prior to or during the scan.",
            "Required if Image Type (0008,0008) Value 1 is ORIGINAL or MIXED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            "Otherwise may be present if Image Type (0008,0008) Value 1 is DERIVED and Cardiac Synchronization Technique (0018,9037) equals other than NONE.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "Heart Rate (0018,1088) is not used in this Module, since its value can be derived as 1/ Cardiac RR Interval Specified (0018,9070)."
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Study Instance UID",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "name" : "Time",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "name" : "Attribute Modification DateTime",
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,1072)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ]
      },
      "(0008,9206)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Image",
         "name" : "Volumetric Properties",
         "desc" : [
            "Indication if geometric manipulations are possible with frames in the SOP Instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.16.2.1.2"
               },
               "el" : "xref"
            },
            " for a description and Enumerated Values."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.8-131"
         ]
      },
      "(0010,1000)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Other Patient IDs"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
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
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Universal Entity ID Type"
      },
      "(0012,0062)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient Identity Removed",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "The true identity of the patient has been removed from the Attributes and the Pixel Data",
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
         ]
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "name" : "Series Instance UID",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0012,0083)" : {
         "name" : "Consent for Clinical Trial Use Sequence",
         "entity" : "Study",
         "req" : "3",
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
         ],
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "U",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The role of the person could be specified in Concept Name Code Sequence (0040,A043)."
                     ]
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Person Name"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ]
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
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,0012)[<0>](0018,9340)[<1>](0018,1041)" : {
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "desc" : "Volume administered during this phase in milliliters of diluted contrast agent.",
         "entity" : "Image",
         "req" : "2",
         "usage" : "U",
         "name" : "Contrast/Bolus Volume"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Image"
      },
      "(0010,2293)" : {
         "req" : "2C",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient Breed Code Sequence",
         "module" : "Patient",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(0010,2201)" : {
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Description",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0280)" : {
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Comments on the Performed Procedure Step"
      },
      "(0008,113a)[<0>](0008,1115)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "name" : "Storage Media File-Set UID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image"
      },
      "(0012,0082)" : {
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "usage" : "U",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number"
      },
      "(0010,2297)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Responsible Person"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "name" : "Data Elements Signed",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image"
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
                     "linkend" : "sect_C.12.1.1.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "Image",
         "usage" : "M",
         "name" : "HL7 Structured Document Reference Sequence"
      },
      "(0018,0012)[<0>](0052,0001)" : {
         "desc" : "Percentage by volume of active ingredient in the total volume.",
         "mod_tables" : [
            "table_C.7-12b"
         ],
         "module" : "Enhanced Contrast/Bolus",
         "name" : "Contrast/Bolus Ingredient Percent by Volume",
         "entity" : "Image",
         "req" : "3",
         "usage" : "U"
      },
      "(0008,9154)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside."
      },
      "(0008,9154)[<0>](0008,1115)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3"
         ],
         "module" : "Enhanced CT Image",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Value Type",
         "module" : "General Series",
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
         ]
      },
      "(0008,0070)" : [
         {
            "usage" : "M",
            "req" : "2",
            "entity" : "Equipment",
            "name" : "Manufacturer",
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "desc" : "Manufacturer of the equipment that produced the composite instances."
         },
         {
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "module" : "Enhanced General Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "U",
            "req" : "1",
            "entity" : "Equipment",
            "name" : "Manufacturer"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0080)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment",
         "req" : "3",
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0020,0052)" : {
         "name" : "Frame of Reference UID",
         "entity" : "Frame of Reference",
         "req" : "1",
         "usage" : "M",
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
         "module" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-6"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Image",
         "name" : "Manufacturer"
      },
      "(0010,2299)" : {
         "name" : "Responsible Organization",
         "req" : "2C",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Text Value"
      },
      "(0018,1030)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
         ],
         "name" : "Protocol Name",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,9237)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Signature",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0012,0031)" : {
         "req" : "2",
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Site Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               },
               "el" : "xref"
            }
         ]
      },
      "(0028,0004)" : [
         {
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
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "req" : "1",
            "usage" : "M",
            "entity" : "Image",
            "name" : "Photometric Interpretation"
         },
         {
            "mod_tables" : [
               "table_C.8-114"
            ],
            "module" : "Enhanced CT Image",
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
               },
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.3.1.2",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for definition of this term."
               ]
            ],
            "name" : "Photometric Interpretation",
            "entity" : "Image",
            "req" : "1",
            "usage" : "M"
         }
      ],
      "(0008,1052)[<0>](0040,1103)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,1090)" : [
         {
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "req" : "3",
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Manufacturer's Model Name"
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "name" : "Manufacturer's Model Name",
            "req" : "1",
            "usage" : "U",
            "entity" : "Equipment"
         }
      ],
      "(0008,1049)[<0>](0040,1103)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0012,0071)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Series",
         "name" : "Clinical Trial Series ID",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               }
            },
            "."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "General Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "entity" : "Image",
         "req" : "3",
         "usage" : "M"
      },
      "(0012,0072)" : {
         "name" : "Clinical Trial Series Description",
         "req" : "3",
         "entity" : "Series",
         "usage" : "U",
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
         ],
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "name" : "Requested Procedure Description"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0244)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Performed Procedure Step Start Date",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step started."
      },
      "(0018,1047)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Image",
         "name" : "Contrast Flow Duration",
         "desc" : "Duration(s) of injection(s) in seconds. Each Contrast Flow Duration value shall correspond to a value of Contrast Flow Rate (0018,1046).",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the device",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "entity" : "Image",
         "req" : "3",
         "usage" : "U",
         "name" : "Manufacturer"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "name" : "Text Value",
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
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "name" : "Blue Palette Color Lookup Table Data",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Image",
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
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "module" : "Enhanced CT Image"
      },
      "(0018,1043)" : {
         "desc" : "Time of end of contrast injection",
         "module" : "Contrast/Bolus",
         "mod_tables" : [
            "table_C.7-12"
         ],
         "req" : "3",
         "usage" : "U",
         "entity" : "Image",
         "name" : "Contrast/Bolus Stop Time"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,113a)[<0>](0008,1115)" : {
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3"
         ],
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced Series Sequence"
      },
      "(0008,9205)" : {
         "desc" : [
            "Indication of the presence or absence of color information that may be used during rendering. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.16.2.1.1"
               }
            },
            " for a description and Enumerated Values."
         ],
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.8-131"
         ],
         "name" : "Pixel Presentation",
         "entity" : "Image",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "usage" : "U",
         "req" : "1",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ]
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0040,e011)" : {
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "Enhanced CT Image",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M",
         "name" : "Retrieve Location UID"
      },
      "(0008,9121)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "module" : "Enhanced CT Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0018,1800)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Frame of Reference",
         "name" : "Acquisition Time Synchronized",
         "desc" : [
            "Acquisition DateTime (0008,002A) synchronized with external time reference.",
            {
               "type" : "variablelist",
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
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.4.2.1.4",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ],
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "name" : "Container Component Diameter",
         "req" : "3",
         "usage" : "U",
         "entity" : "Image"
      },
      "(0020,000e)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Unique identifier of the Series.",
         "name" : "Series Instance UID",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "req" : "1",
         "entity" : "Image",
         "usage" : "U",
         "name" : "Referenced Instance Sequence",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
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
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "name" : "Distribution Type"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Instance UID of Study to which the related Series belongs"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "name" : "Largest Image Pixel Value",
         "req" : "3",
         "usage" : "M",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "The maximum actual pixel value encountered in this image."
      },
      "(0012,0040)" : {
         "name" : "Clinical Trial Subject ID",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The assigned identifier for the clinical trial subject. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
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
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,1032)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Procedure Code Sequence",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Scheduled Protocol Code Sequence"
      },
      "(0018,1802)" : {
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Time Distribution Protocol",
         "req" : "3",
         "usage" : "U",
         "entity" : "Frame of Reference"
      },
      "(0008,9092)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-114",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Image",
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "entity" : "Image",
         "req" : "1",
         "usage" : "M",
         "name" : "Columns",
         "mod_tables" : [
            "table_C.8-114",
            "table_C.7-11b"
         ],
         "module" : "Enhanced CT Image",
         "desc" : "Number of columns in the image"
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
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12 after (0018,002A))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0012))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,0014))",
      "Can't handle table_8.8-1 (in table_C.7-12b after (0018,9338))",
      "Can't handle processing of table_C.7.6.16-1 in Image:Multi-frame Functional Groups of table_A.70-1",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
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
      "Can't handle table_8.8-1 (in table_C.8-114:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-114:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-114:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-114:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-114:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.8-114:table_10-25 after (0054,0220))",
      "Can't handle table_8.8-1 (in table_C.8-114:table_10-25 after (0054,0222))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}