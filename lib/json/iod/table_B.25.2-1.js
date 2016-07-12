var data = 
{
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ],
   "tags" : {
      "(0008,1199)[<0>](0088,0200)" : {
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "req" : [
            "This Icon Image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Icon Image Sequence"
      },
      "(0018,a001)[<0>](0018,1200)" : {
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
         "req" : "3",
         "name" : "Date of Last Calibration",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(2000,0010)" : {
         "name" : "Number of Copies",
         "entity" : "",
         "desc" : null,
         "req" : [
            "Number of copies of set of media to be created for storing this file-set.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_a340445f-eafc-438d-9ae9-48db2d94704a"
                     },
                     "content" : [
                        "If the entire request fits on a single piece of media per copy, then this value corresponds to the actual number of pieces of media to be created."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1"
         ]
      },
      "(0008,0105)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
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
         "req" : "1",
         "name" : "Mapping Resource",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "entity" : "",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,001a)" : {
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
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
         "entity" : "",
         "name" : "Related General SOP Class UID"
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,0101)" : {
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "req" : "1",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
         "entity" : "",
         "name" : "Bits Stored"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "entity" : "",
         "name" : "Person's Telecom Information",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(2200,0001)" : {
         "name" : "Label Using Information Extracted From Instances",
         "entity" : "",
         "desc" : null,
         "req" : [
            "Specifies whether or not to extract label information from the instances.",
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
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status."
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,0107)" : {
         "req" : "3",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "entity" : "",
         "name" : "Largest Image Pixel Value",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "module" : "Media Creation Management"
      },
      "(0040,a390)" : {
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
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(2200,000d)[<0>](0088,0130)" : {
         "req" : "User or implementation specific human readable identification of the Storage Media that has been created.",
         "desc" : null,
         "entity" : "",
         "name" : " Storage Media File-Set ID",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "module" : "Media Creation Management"
      },
      "(2200,0007)" : {
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "req" : [
            "A flag indicating if the SCP is allowed to split this request over more than one piece of media.",
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
                                 "attrs" : {
                                    "xml:id" : "para_3d0a7407-c161-472d-9532-02d6a13892ac"
                                 },
                                 "content" : [
                                    "The SCP is not required to support the split of a media creation request across more than one piece of media."
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
                                    "If the size of the set of SOP instances is greater than the media storage capacity, and this flag has been set to NO, the SCP shall refuse to process the request."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_f5c69509-dbb3-48b2-86e0-a88a836468bb"
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
            }
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Allow Media Splitting"
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,1202)" : {
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
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Data",
         "entity" : "",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "module" : "Media Creation Management"
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,0002)" : {
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
         "name" : "Samples per Pixel",
         "entity" : "",
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status."
      },
      "(0008,1199)[<0>](0008,1150)" : {
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_10-11"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "entity" : "",
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
         "req" : "1",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,2000)" : {
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "entity" : "",
         "name" : "ICC Profile",
         "req" : "3",
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
         ]
      },
      "(0088,0140)" : {
         "req" : "Uniquely identifies a Storage Media to be created.",
         "desc" : null,
         "entity" : "",
         "name" : "Storage Media File-Set UID",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status."
      },
      "(2200,000b)" : {
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "module" : "Media Creation Management",
         "name" : "Total Number of Pieces of Media Created",
         "entity" : "",
         "desc" : null,
         "req" : [
            "Number of pieces of media that have been successfully created, in order to store all copies of the requested file-set.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_49e83228-c759-478d-b825-a170c6681706"
                     },
                     "content" : [
                        "If the entire request fits on a single piece of media per copy, then this value corresponds to the number of copies of media created."
                     ]
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "entity" : "",
         "name" : "HL7 Instance Identifier",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0088,0130)" : {
         "desc" : null,
         "req" : "User or implementation specific human readable identification of the Storage Media to be created.",
         "name" : "Storage Media File-Set ID",
         "entity" : "",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status."
      },
      "(2200,000d)" : {
         "req" : [
            "A Sequence describing the identifiers of all pieces of media created to satisfy the request. One or more items are allowed.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "If the SCP splits a media creation request across more than one piece of media (e.g., if it doesn't fit on one), then all the created pieces of media will be included in this Sequence."
                     ],
                     "attrs" : {
                        "xml:id" : "para_50205e28-c3db-498f-a53f-60259e5b13b3"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Referenced Storage Media Sequence",
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status."
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,0034)" : {
         "name" : "Pixel Aspect Ratio",
         "entity" : "",
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
         "req" : "1C",
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status."
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,1101)" : {
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "module" : "Media Creation Management",
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
         "name" : "Red Palette Color Lookup Table Descriptor",
         "entity" : ""
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "",
         "name" : "Contribution Description",
         "req" : "3",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP common information",
         "req" : "3",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "",
         "name" : "Digital Signature Purpose Code Sequence"
      },
      "(0008,1199)[<0>](0008,1155)" : {
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_10-11"
         ],
         "module" : "Media Creation Management"
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,1201)" : {
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "entity" : "",
         "name" : "Red Palette Color Lookup Table Data",
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
         ]
      },
      "(0008,010f)" : {
         "entity" : "",
         "name" : "Context Identifier",
         "req" : "1",
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
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped."
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "entity" : "",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "2",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "",
         "name" : "Source of Previous Values"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "entity" : "",
         "name" : "Contribution DateTime"
      },
      "(2100,0030)" : {
         "req" : [
            "Additional information about Execution Status (2100,0020).",
            {
               "title" : "Defined Terms if Execution Status (2100,0020) is DONE, CREATING or IDLE:",
               "type" : "variablelist",
               "list" : [
                  [
                     "NORMAL",
                     null
                  ]
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.22.1.3"
                  },
                  "el" : "xref"
               },
               " for Defined Terms when the Execution Status is PENDING or FAILURE."
            ]
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Execution Status Info",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "module" : "Media Creation Management"
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,0100)" : {
         "entity" : "",
         "name" : "Bits Allocated",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status."
      },
      "(2200,0009)" : {
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "entity" : "",
         "name" : "Include Display Application",
         "req" : [
            "A flag indicating if the SCP should include on the media a DICOM Instance Display Application.",
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
         "desc" : null
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "name" : "Nonidentifying Private Elements",
         "entity" : "",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Purpose of Reference Code Sequence",
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
         ]
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Block Identifying Information Status",
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
               "type" : "variablelist",
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
               ]
            }
         ]
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "entity" : "",
         "name" : "Private Creator Reference",
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
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,0005)" : {
         "req" : "1C",
         "desc" : [
            "Character Set that expands or replaces the Basic Graphic Set.",
            "Required if an expanded or replacement character set is used.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "",
         "name" : "Specific Character Set",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information"
      },
      "(0008,1198)[<0>](2200,000c)" : {
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "name" : "Requested Media Application Profile",
         "entity" : "",
         "desc" : null,
         "req" : [
            "The Media Application Profile used for this SOP Instance.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "This is the label of the profile as defined in ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetptr" : "PS3.11",
                              "targetdoc" : "PS3.11",
                              "xrefstyle" : "select: labelnumber"
                           }
                        },
                        ", e.g., \"STD-XABC-CD\"."
                     ],
                     "attrs" : {
                        "xml:id" : "para_5f50cf3c-67cf-4bb6-a34e-aa3dbafa3391"
                     }
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "Contains SOP common information",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : ""
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "entity" : "",
         "name" : "Encrypted Content Transfer Syntax UID"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)"
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,2002)" : {
         "name" : "Color Space",
         "entity" : "",
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
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "module" : "Media Creation Management"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : ""
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "name" : "Retrieve URI",
         "entity" : "",
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
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "el" : "para"
                  },
                  "\n"
               ]
            }
         ],
         "req" : "3"
      },
      "(2200,0005)" : {
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "entity" : "",
         "name" : "Barcode Value",
         "req" : [
            "String that describes the bar code value to be printed on the media label.",
            "Note It is SCU responsibility to convey a value for this attribute coherent in length and content with the requested Barcode Symbology (2200,0006)."
         ],
         "desc" : null
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,1203)" : {
         "req" : "1C",
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
         "entity" : "",
         "name" : "Blue Palette Color Lookup Table Data",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "module" : "Media Creation Management"
      },
      "(0400,0500)" : {
         "entity" : "",
         "name" : "Encrypted Attributes Sequence",
         "req" : "1C",
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this Sequence.",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information"
      },
      "(0028,0303)" : {
         "name" : "Longitudinal Temporal Information Modified",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP common information",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3"
      },
      "(0008,0201)" : {
         "entity" : "",
         "name" : "Timezone Offset From UTC",
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
                                       "attrs" : {
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5"
                                       },
                                       "el" : "olink"
                                    },
                                    " for the offset component of the DT Value Representation."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
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
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
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
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
                                 "el" : "para"
                              },
                              "\n                    "
                           ]
                        },
                        "\n                  "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     }
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
                     "content" : [
                        "UTC = 5.00 a.m."
                     ],
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     }
                  },
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     },
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ]
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
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "desc" : "The coding scheme full common name",
         "req" : "3",
         "name" : "Coding Scheme Name",
         "entity" : ""
      },
      "(2200,0008)" : {
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "desc" : null,
         "req" : [
            "A flag indicating if the SCP should include in the media additional Non-DICOM information/objects",
            {
               "list" : [
                  [
                     "NO",
                     null
                  ],
                  [
                     "FOR_PHYSICIAN",
                     null
                  ],
                  [
                     "FOR_PATIENT",
                     null
                  ],
                  [
                     "FOR_TEACHING",
                     null
                  ],
                  [
                     "FOR_RESEARCH",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "name" : "Include Non-DICOM Objects",
         "entity" : ""
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,1102)" : {
         "entity" : "",
         "name" : "Green Palette Color Lookup Table Descriptor",
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
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status."
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "entity" : "",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(2200,0002)" : {
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "entity" : "",
         "name" : "Label Text",
         "req" : "Unformatted free text to include in the label instead of or in addition to information extracted from the instances.",
         "desc" : null
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
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "name" : "Signature",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP common information"
      },
      "(0008,1199)" : {
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "module" : "Media Creation Management",
         "desc" : null,
         "req" : "A sequence of Items where each Item references a single SOP Instance, the Media Application Profile to be used, and, where applicable, the icon representing the referenced image",
         "name" : "Referenced SOP Sequence",
         "entity" : ""
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,0102)" : {
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "req" : "1",
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
         "entity" : "",
         "name" : "High Bit"
      },
      "(0100,0426)" : {
         "name" : "Authorization Equipment Certification Number",
         "entity" : "",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR."
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "name" : "Coding Scheme Version",
         "req" : "3",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,0011)" : {
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "req" : "1",
         "desc" : "Number of columns in the image",
         "entity" : "",
         "name" : "Columns"
      },
      "(2200,0020)" : {
         "entity" : "",
         "name" : "Request Priority",
         "req" : [
            "Specifies the priority of the request.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "HIGH",
                     null
                  ],
                  [
                     "MED",
                     null
                  ],
                  [
                     "LOW",
                     null
                  ]
               ]
            }
         ],
         "desc" : null,
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "module" : "Media Creation Management"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "",
         "name" : "Digital Signature DateTime",
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
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP common information"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "name" : "Modified Attributes Sequence"
      },
      "(0008,0013)" : {
         "entity" : "",
         "name" : "Instance Creation Time",
         "req" : "3",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "",
         "name" : "Institutional Department Name"
      },
      "(2100,0020)" : {
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "name" : "Execution Status",
         "entity" : "",
         "desc" : null,
         "req" : [
            "Execution status of a request.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.22.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Enumerated Values"
            ]
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "name" : "MAC ID Number",
         "entity" : ""
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "",
         "name" : "Referenced Segment Number",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "Contains SOP common information"
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,0006)" : {
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
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
         ],
         "entity" : "",
         "name" : "Planar Configuration"
      },
      "(0008,0118)" : {
         "entity" : "",
         "name" : "Mapping Resource UID",
         "req" : "3",
         "desc" : "The unique identifier of the Mapping Resource",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0008,0106)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Context Group Version",
         "req" : "1",
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
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "",
         "name" : "Certificate of Signer",
         "req" : "1",
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
               "content" : [
                  "\n                      ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                        ",
                        {
                           "el" : "listitem",
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
                           ]
                        },
                        "\n                        ",
                        {
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
                           ],
                           "el" : "listitem"
                        },
                        "\n                      "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     }
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
         "usage" : "Contains SOP common information"
      },
      "(0008,0053)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1C",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "entity" : "",
         "name" : "Query/Retrieve View"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP common information",
         "name" : "MAC Algorithm",
         "entity" : "",
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
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "name" : "Certified Timestamp",
         "entity" : "",
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
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(2200,000a)" : {
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "entity" : "",
         "name" : "Preserve Composite Instances After Media Creation",
         "req" : [
            "A flag to indicate whether or not the SCU intends to issue a subsequent media creation request referencing some or all of the instances contained in Referenced SOP Sequence (0008,1199).",
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
         "desc" : null
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "",
         "desc" : "Person's mailing address",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP common information"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "name" : "Modifying System",
         "entity" : ""
      },
      "(0100,0410)" : {
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
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "",
         "name" : "SOP Instance Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,0004)" : {
         "req" : "1",
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
         "entity" : "",
         "name" : "Photometric Interpretation",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "module" : "Media Creation Management"
      },
      "(0008,0014)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creator UID",
         "entity" : "",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "name" : "Coding Scheme External ID",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "entity" : "",
         "name" : "Station Name"
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "req" : "1",
         "name" : "SOP Instance UID",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "name" : "Coding Scheme Registry",
         "entity" : "",
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "req" : "1C",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information"
      },
      "(2200,0003)" : {
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "entity" : "",
         "name" : "Label Style Selection",
         "req" : "An implementation-dependent code string that may be used as a hint to select a particular layout or format of label.",
         "desc" : null
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "entity" : "",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "req" : "1"
      },
      "(0018,9004)" : {
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Content Qualification",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0400,0561)" : {
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "",
         "name" : "Original Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,1198)[<0>](2200,000e)" : {
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "name" : "Failure Attributes",
         "entity" : "",
         "desc" : null,
         "req" : [
            "Attributes associated with Failure Reason (0008,1197).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.22.1.4"
                  }
               },
               "."
            ]
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "entity" : "",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,0015)" : {
         "entity" : "",
         "name" : "Instance Coercion DateTime",
         "req" : "3",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            ")."
         ],
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,1199)[<0>](2200,000c)" : {
         "desc" : null,
         "req" : [
            "The Media Application Profile to be used for this SOP Instance.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This is the label of the profile as defined in ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetptr" : "PS3.11",
                              "targetdoc" : "PS3.11",
                              "xrefstyle" : "select: labelnumber"
                           }
                        },
                        ", e.g., \"STD-XABC-CD\"."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d01d4186-a114-4613-84cf-29dc4c6691fa"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Requested Media Application Profile",
         "entity" : "",
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP common information",
         "name" : "Certificate Type",
         "entity" : "",
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
               "el" : "note",
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
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "",
         "name" : "Institution Name"
      },
      "(2200,0006)" : {
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "name" : "Barcode Symbology",
         "entity" : "",
         "desc" : null,
         "req" : [
            "Code string that describes the bar code symbology that shall be used for printing Barcode Value (2200,0005).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.22.1.1"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ]
      },
      "(0008,0117)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
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
         ],
         "entity" : "",
         "name" : "Context UID"
      },
      "(0008,0123)" : {
         "entity" : "",
         "name" : "Context Group Identification Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information"
      },
      "(0020,0013)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "req" : "3",
         "desc" : "A number that identifies this Composite object instance.",
         "entity" : "",
         "name" : "Instance Number"
      },
      "(0008,0122)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "name" : "Mapping Resource Name",
         "entity" : "",
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
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "",
         "name" : "Digital Signature UID"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "req" : "1",
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
         "entity" : "",
         "name" : "Encrypted Content"
      },
      "(2200,000d)[<0>](0088,0140)" : {
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "module" : "Media Creation Management",
         "entity" : "",
         "name" : " Storage Media File-Set UID",
         "req" : "Uniquely identifies the Storage Media that has been created.",
         "desc" : null
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "entity" : "",
         "name" : "Identifying Private Elements"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "req" : "3",
         "name" : "Deidentification Action Sequence",
         "entity" : ""
      },
      "(0100,0424)" : {
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "SOP Authorization Comment",
         "entity" : "",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "name" : "Time of Last Calibration",
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
         ]
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Private Group Reference",
         "entity" : "",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "req" : "1"
      },
      "(0008,1198)[<0>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_10-11"
         ]
      },
      "(0008,1198)" : {
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "entity" : "",
         "name" : "Failed SOP Sequence",
         "req" : "A sequence of Items describing SOP Instances for which media creation failed.",
         "desc" : null
      },
      "(0008,0124)" : {
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Mapping Resource Identification Sequence",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "name" : "Deidentification Action",
         "entity" : "",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
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
               ],
               "el" : "note"
            },
            {
               "title" : "Enumerated Values:",
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
               ]
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
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(fffa,fffa)" : {
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Digital Signatures Sequence",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0100,0420)" : {
         "name" : "SOP Authorization DateTime",
         "entity" : "",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(2200,000f)" : {
         "req" : [
            "A flag indicating if the SCP is allowed to perform lossy compression.",
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
         "desc" : null,
         "entity" : "",
         "name" : "Allow Lossy Compression",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "module" : "Media Creation Management"
      },
      "(0018,a001)[<0>](0018,1020)" : {
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
         "name" : "Software Versions",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,0106)" : {
         "name" : "Smallest Image Pixel Value",
         "entity" : "",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "req" : "3",
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Operators' Name",
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment."
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,0010)" : {
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "req" : "1",
         "desc" : "Number of rows in the image.",
         "entity" : "",
         "name" : "Rows"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "name" : "Certified Timestamp Type",
         "req" : "1C",
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
         ]
      },
      "(2200,0004)" : {
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "name" : "Media Disposition",
         "entity" : "",
         "desc" : null,
         "req" : "Unstructured text that describes where and to whom the media is to be sent."
      },
      "(0008,1198)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_10-11"
         ],
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status."
      },
      "(0008,0300)" : {
         "req" : "3",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "entity" : "",
         "name" : "Private Data Element Characteristics Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "name" : "Attribute Modification DateTime",
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "entity" : "",
         "name" : "Instance Creation Date",
         "req" : "3",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,1103)" : {
         "module" : "Media Creation Management",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "entity" : "",
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
         "req" : "1C"
      },
      "(0008,001b)" : {
         "req" : "3",
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
         "entity" : "",
         "name" : "Original Specialized SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,1199)[<0>](0088,0200)[<1>](7fe0,0010)" : {
         "entity" : "",
         "name" : "Pixel Data",
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
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ],
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status."
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "",
         "name" : "Spatial Resolution",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Device Serial Number",
         "entity" : "",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "req" : "1",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "entity" : "",
         "name" : "Manufacturer",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1198)[<0>](0008,1197)" : {
         "mod_tables" : [
            "table_C.22.1-1"
         ],
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "module" : "Media Creation Management",
         "entity" : "",
         "name" : "Failure Reason",
         "req" : [
            "The reason that media creation failed for this SOP Instance.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.22.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "desc" : null
      },
      "(0008,0016)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "req" : "1",
         "name" : "SOP Class UID",
         "entity" : ""
      },
      "(4ffe,0001)" : {
         "entity" : "",
         "name" : "MAC Parameters Sequence",
         "req" : "3",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0020,9172)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ]
      },
      "(0018,a001)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
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
         "entity" : "",
         "name" : "Contributing Equipment Sequence"
      },
      "(0008,1199)[<0>](0088,0200)[<1>](0028,0103)" : {
         "name" : "Pixel Representation",
         "entity" : "",
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
         ],
         "req" : "1",
         "module" : "Media Creation Management",
         "usage" : "Contains references to the SOP instances to be used for this media creation request, and the information about its status.",
         "mod_tables" : [
            "table_C.22.1-1",
            "table_C.7-11b"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Institution Name",
         "entity" : "",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "req" : "3"
      }
   }
}
