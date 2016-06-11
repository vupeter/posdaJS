var data = {
   "tags" : {
      "(0072,000c)" : {
         "entity" : "Hanging Protocol",
         "name" : "Hanging Protocol Definition Sequence",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : [
            "Sequence that defines the type of imaging studies to which this Hanging Protocol applies.",
            "One or more Items shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.23.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "name" : "Modifying System",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "usage" : "M",
         "req" : "1"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "req" : "1",
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
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0054)" : {
         "module" : "Hanging Protocol Definition",
         "desc" : "Identification of the creator of a group of private data elements. Required if the Selector Sequence Pointer (0072,0052) value is the Data Element Tag of a Private Attribute.",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector Sequence Pointer Private Creator",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "User defined name identifying the machine that contributed to the composite instance."
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "usage" : "M",
         "req" : "3",
         "name" : "Coding Scheme Version",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0510)" : {
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Reformatting Operation Type",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Reformatting operation to be applied to the Image Set.",
            {
               "list" : [
                  [
                     "MPR",
                     null
                  ],
                  [
                     "3D_RENDERING",
                     null
                  ],
                  [
                     "SLAB",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0072,0010)" : {
         "entity" : "Hanging Protocol",
         "name" : "Hanging Protocol User Group Name",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "Hanging Protocol Definition",
         "desc" : "Group or site for which this Hanging Protocol was defined."
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0064)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is IS. Some leniency in precision and format (including padding with spaces and leading zeros, e.g., \"001\" = \" 1 \" = \"1\") will be required."
         ],
         "module" : "Hanging Protocol Display",
         "entity" : "Hanging Protocol",
         "name" : "Selector IS Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ]
      },
      "(0400,0500)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
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
         "name" : "Encrypted Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0008,0201)" : {
         "name" : "Timezone Offset From UTC",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
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
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
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
                                 "el" : "para",
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
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
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ],
                     "el" : "para"
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
         ]
      },
      "(0008,001b)" : {
         "name" : "Original Specialized SOP Class UID",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0110)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Identification Sequence",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "req" : "3",
         "usage" : "M",
         "name" : "Instance Creator UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0320)" : {
         "desc" : [
            "If this Image Box overlaps in spatial position with others, this attribute indicates the layer of this Image Box in relation to the others. The value shall be a positive integer in the range 1 to 100, where 1 = top and 100 = bottom.",
            "If this attribute is not present, then the expected behavior is not defined."
         ],
         "module" : "Hanging Protocol Display",
         "req" : "3",
         "usage" : "M",
         "name" : "Image Box Overlap Priority",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "entity" : "Hanging Protocol",
         "name" : "Contribution DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3"
      },
      "(0072,010e)" : {
         "desc" : [
            "Positive integer indicating the desired maximum time in milliseconds required by the application to repaint the full screen once (i.e., recalculate all pixels and paint them to the screen).",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "This is not the screen refresh time."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Hanging Protocol Environment",
         "req" : "3",
         "usage" : "M",
         "name" : "Application Maximum Repaint Time",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.2-2"
         ]
      },
      "(0072,000c)[<0>](0008,0060)" : {
         "entity" : "Hanging Protocol",
         "name" : "Modality",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : [
            [
               "Type of equipment that originally acquired the data used to create images or related objects to which this Hanging Protocol applies. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.1"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if Anatomic Region Sequence (0008,2218) is not present. May be present otherwise."
         ],
         "module" : "Hanging Protocol Definition",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,001a)" : {
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0520)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Describes the intended 3D rendering type. One or more values shall be present. The first value shall not be zero length. Required if the value of Reformatting Operation Type (0072,0510) is 3D_RENDERING:",
            {
               "list" : [
                  [
                     "MIP",
                     null
                  ],
                  [
                     "SURFACE",
                     null
                  ],
                  [
                     "VOLUME",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms for Value 1:"
            },
            "Additional values may be used to identify implementation specific sub-types."
         ],
         "name" : "3D Rendering Type",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "name" : "Attribute Modification DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0076)" : {
         "entity" : "Hanging Protocol",
         "name" : "Selector FL Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FL."
         ],
         "module" : "Hanging Protocol Definition"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "module" : "SOP Common",
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
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate Type",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0300)" : {
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Image Boxes Sequence",
         "entity" : "Hanging Protocol",
         "desc" : [
            "Sequence that defines the image boxes for this Display Set.",
            "Only a single Item shall be included in this sequence unless Image Box Layout Type (0072,0304) is TILED, in which case one or more items shall be included in this sequence."
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1"
      },
      "(0072,0006)" : {
         "name" : "Hanging Protocol Level",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Identifies the level at which this Hanging Protocol is defined, and the intended use.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "MANUFACTURER",
                     null
                  ],
                  [
                     "SITE",
                     null
                  ],
                  [
                     "USER_GROUP",
                     null
                  ],
                  [
                     "SINGLE_USER",
                     null
                  ]
               ]
            }
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0706)" : {
         "name" : "Show Grayscale Inverted",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol",
         "module" : "Hanging Protocol Display",
         "desc" : [
            [
               "Whether or not to invert the rendered luminance of the displayed values. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.3.1.4"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "list" : [
                  [
                     "YES",
                     "The maximum output value after the display pipeline has been applied shall be displayed with the minimum available luminance."
                  ],
                  [
                     "NO",
                     "The maximum output value after the display pipeline has been applied shall be displayed with the maximum available luminance."
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
                                    "The YES and NO values of this Attribute correspond to the Presentation LUT Shape (2050,0020) values of INVERSE and IDENTITY, as described in ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "xrefstyle" : "select: label",
                                          "linkend" : "sect_C.11.6.1.2"
                                       }
                                    },
                                    "."
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
                                    "Only applicable to display of grayscale images."
                                 ],
                                 "el" : "para"
                              },
                              "\n                    "
                           ],
                           "el" : "listitem"
                        },
                        "\n                  "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "req" : "1",
         "usage" : "M",
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
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Hanging Protocol",
         "name" : "Digital Signature DateTime",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0402)" : {
         "entity" : "Hanging Protocol",
         "name" : "Filter-by Category",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            [
               "Category of the filter operation. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.3.1.1"
                  }
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "IMAGE_PLANE",
                     null
                  ]
               ]
            },
            "Required if Selector Attribute (0072,0026) is not present."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0056)" : {
         "module" : "Hanging Protocol Display",
         "desc" : "Identification of the creator of a group of private data elements. Required if the Selector Attribute (0072,0026) value is the Data Element Tag of a Private Attribute.",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "name" : "Selector Attribute Private Creator",
         "entity" : "Hanging Protocol"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0024)" : {
         "name" : "Image Set Selector Usage Flag",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "entity" : "Hanging Protocol",
         "desc" : [
            "Indicates the behavior of matching against an image object when Selector Attribute (0072,0026) is not available in the image object.",
            {
               "list" : [
                  [
                     "MATCH",
                     "If the attribute is not in the image object, consider the image to be a match anyway."
                  ],
                  [
                     "NO_MATCH",
                     "If the attribute is not in the image object, then do not consider the image to be a match."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "1"
      },
      "(0072,0014)" : {
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Number of Priors Referenced",
         "entity" : "Hanging Protocol",
         "module" : "Hanging Protocol Definition",
         "desc" : "Identifies the number of prior image sets used in this Hanging Protocol.",
         "usage" : "M",
         "req" : "1"
      },
      "(0072,0200)[<0>](0072,0600)" : {
         "name" : "Sorting Operations Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "usage" : "M",
         "req" : "2",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Sequence that defines sorting criteria to be applied to the result of filter and reformat operations, to define the order in which to present the images in the Image Boxes.",
            "Zero or more items shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.23.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0072,0012)" : {
         "name" : "Source Hanging Protocol Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Sequence that identifies the Hanging Protocol from which this Hanging Protocol was derived, or on which it is based.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(fffa,fffa)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signatures Sequence",
         "entity" : "Hanging Protocol",
         "module" : "SOP Common",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0072,0210)[<0>](0072,0212)" : {
         "desc" : "Multi-valued list of two or more Display Set Number (0072,0202) values. Indicates that the images within the specified Display Sets are scrolled in parallel, to maintain the established synchronization.",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "name" : "Display Set Scrolling Group",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0072,000c)[<0>](0008,2218)" : {
         "name" : "Anatomic Region Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Sequence that identifies the anatomic region of interest to which this Hanging Protocol applies.",
            "One or more Items shall be included in this sequence.",
            "Required if Modality (0008,0060) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0308)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Positive integer defining the vertical Image Box tile dimension; the number of rows.",
            "Required if the value of Image Box Layout Type (0072,0304) is TILED."
         ],
         "name" : "Image Box Tile Vertical Dimension",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0604)" : {
         "entity" : "Hanging Protocol",
         "name" : "Sorting Direction",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Sorting direction to be applied to the value(s) in the image set of the attribute identified by Selector Attribute (0072,0026) or Sort-by Category (0072,0602).",
            {
               "list" : [
                  [
                     "INCREASING",
                     null
                  ],
                  [
                     "DECREASING",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "module" : "SOP Common",
         "entity" : "Hanging Protocol",
         "name" : "Coding Scheme UID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,003e)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Identifies a prior image set using coded terminology.",
            "Only a single Item shall be included in this sequence.",
            "Required if Image Set Selector Category (0072,0034) is ABSTRACT_PRIOR and Abstract Prior Value (0072,003C) is not present."
         ],
         "module" : "Hanging Protocol Definition",
         "entity" : "Hanging Protocol",
         "name" : "Abstract Prior Code Sequence",
         "mod_tables" : [
            "table_C.23.1-1"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0066)" : {
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector LO Value",
         "entity" : "Hanging Protocol",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LO."
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "1C"
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
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "name" : "Coding Scheme Registry",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "req" : "1C",
         "module" : "SOP Common",
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
         ]
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Spatial Resolution",
         "entity" : "Hanging Protocol",
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "req" : "3"
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,003c)" : {
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Identifies a prior image set in abstract terms.",
            "Exactly two integer values, indicating the range of prior studies to include. Each value shall be greater than zero, where 1 indicates the most recent prior and higher values indicate successively older priors. The special value -1 shall indicate the oldest prior.",
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
                                 "content" : [
                                    "The value pair n\\n indicates the nth prior."
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
                                 "content" : [
                                    "The value pair -1\\-1 indicates the oldest prior."
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
                                 "content" : [
                                    "The value pair m\\n indicates the mth through nth priors, where m is the more recent prior."
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
                                    "The value pair 1\\-1 indicates all priors."
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
                                    "The value pair m\\-1 indicates the mth prior and all priors older than m."
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
               ],
               "el" : "note"
            },
            "Required if Image Set Selector Category (0072,0034) is ABSTRACT_PRIOR and Abstract Prior Code Sequence (0072,003E) is not present."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Abstract Prior Value",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Modified Attributes Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "entity" : "Hanging Protocol",
         "name" : "Certified Timestamp",
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
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,007e)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SS."
         ],
         "module" : "Hanging Protocol Definition",
         "name" : "Selector SS Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0020,9167)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026).",
            "Required if the value of Selector Attribute (0072,0026) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Functional Group Pointer",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0020)[<0>](0072,0030)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Sequence containing time based Image Set selection categories and values that are used to identify one type of image set for the Hanging Protocol per sequence item.",
            "One or more Items shall be included in this sequence.",
            [
               "The Image Set Selector Sequence (0072,0022) shall be applied to each sequence item to define an image set. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.23.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "module" : "Hanging Protocol Definition",
         "name" : "Time Based Image Sets Sequence",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0020,9238)" : {
         "desc" : "Identification of the creator of a group of private data elements. Required if the Functional Group Pointer (0020,9167) value is the Data Element Tag of a Private Attribute.",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1C",
         "name" : "Functional Group Private Creator",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ]
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0054)" : {
         "name" : "Selector Sequence Pointer Private Creator",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "entity" : "Hanging Protocol",
         "desc" : "Identification of the creator of a group of private data elements. Required if the Selector Sequence Pointer (0072,0052) value is the Data Element Tag of a Private Attribute.",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1C"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0406)" : {
         "name" : "Filter-by Operator",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "desc" : [
            [
               "Operation to be applied between the value(s) in the Hanging Protocol Selector Attribute Value Macro (\"selector\"), and the value(s) of the attribute identified by Selector Attribute (0072,0026) (or the value implied by the Filter-by Category (0072,0402)) in each image of the Image Set. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.23.3.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Filter-by Category (0072,0402) is present, or if Selector Attribute (0072,0026) is present and Filter-by Attribute Presence (0072,0404) is not present.",
            {
               "list" : [
                  [
                     "RANGE_INCL",
                     "all values lie within the specified range, or are equal to the endpoints; applies only to numeric Selector Attribute (0072,0026) values; two values shall be present in the selector, the first of which is less than or equal to the second"
                  ],
                  [
                     "RANGE_EXCL",
                     "all values lie outside the specified range, and are not equal to the endpoints; applies only to numeric Selector Attribute (0072,0026) values; two values shall be present in the selector, the first of which is less than or equal to the second"
                  ],
                  [
                     "GREATER_OR_EQUAL",
                     "all values are greater than or equal to the value of the selector; applies only to numeric Selector Attribute (0072,0026)"
                  ],
                  [
                     "LESS_OR_EQUAL",
                     "all values are less than or equal to the value of the selector; applies only to numeric Selector Attribute (0072,0026)"
                  ],
                  [
                     "GREATER_THAN",
                     "all values are greater than the value of the selector; applies only to numeric Selector Attribute (0072,0026)"
                  ],
                  [
                     "LESS_THAN",
                     "all values are less than the value of the selector; applies only to numeric Selector Attribute (0072,0026)"
                  ],
                  [
                     "MEMBER_OF",
                     "one of the values in the image is present in the values of the selector; if one value is present in each, this is an \"equal to\" operator"
                  ],
                  [
                     "NOT_MEMBER_OF",
                     "none of the values in the image is present in the values of the selector; if one value is present in each, this is a \"not equal to\" operator"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,0032)" : {
         "name" : "Image Set Number",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "A monotonically increasing integer, starting from 1, incrementing by one, unique within the Hanging Protocol Instance.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Each item of the Display Sets Sequence (0072,0200) references one Image Set Number (0072,0032)."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Hanging Protocol Definition"
      },
      "(0072,0200)[<0>](0072,0202)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : "A monotonically increasing integer, starting from 1, incrementing by one, unique within the Hanging Protocol Instance. It shall be used to identify linked display sets in the Display Set Scrolling Group (0072,0212).",
         "module" : "Hanging Protocol Display",
         "name" : "Display Set Number",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0330)" : {
         "desc" : [
            "A positive unitless floating point numeric factor equal to playback rate divided by acquisition rate.",
            "Required if the value of Image Box Layout Type (0072,0304) is CINE and if Recommended Display Frame Rate (0008,2144) is not present.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The capture rate may change within the image object, as specified in Frame Time (0018,1063) or Frame Time Vector (0018,1065)."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Hanging Protocol Display",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "name" : "Cine Relative to Real-Time",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0100,0420)" : {
         "name" : "SOP Authorization DateTime",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0316)" : {
         "desc" : [
            "Defines the type of large increment scrolling to be applied to this Image Box.",
            "Required if the value of Image Box Layout Type (0072,0304) is TILED, and the value of Image Box Tile Horizontal Dimension (0072,0306) or Image Box Tile Vertical Dimension (0072,0308) is greater than 1.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PAGE",
                     "In a TILED image box, replace all image slots with the next N x M images in the set."
                  ],
                  [
                     "ROW_COLUMN",
                     "In a TILED image box, move each row or column of images to the next row or column, depending on Image Box Scroll Direction (0072,0310)."
                  ],
                  [
                     "IMAGE",
                     "In a TILED image box, move each image to the next slot, either horizontally or vertically, depending on Image Box Scroll Direction (0072,0310)."
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
                        "If there are multiple image boxes of different Tile Dimensions in a Display Set, then only IMAGE scrolling applies, and the value of the attribute is ignored."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Hanging Protocol",
         "name" : "Image Box Large Scroll Type",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0024)" : {
         "entity" : "Hanging Protocol",
         "name" : "Image Set Selector Usage Flag",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Specifies the behavior of the Filter-by Operator (0072,0406) when Selector Attribute (0072,0026) is not available in the image or does not contain a value specified by Selector Value Number (0072,0028).",
            "If this attribute is not present in this sequence item, MATCH shall be assumed.",
            "Shall be ignored if Filter-by Operator (0072,0406) is not present.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "MATCH",
                     "include the image in the filter output."
                  ],
                  [
                     "NO_MATCH",
                     "do not include the image in the filter output."
                  ]
               ]
            }
         ]
      },
      "(0072,0104)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "Hanging Protocol Environment",
         "desc" : [
            "Positive integer indicating the intended number of rows of the addressable area of the screen in pixels.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The goal is not absolute size matching."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "Number of Vertical Pixels",
         "mod_tables" : [
            "table_C.23.2-2"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Sequence that describes one or more display sets used to present the Image Sets defined in the Image Sets Sequence (0072,0020).",
            "One or more Items shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.3.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Display Sets Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0040,a390)" : {
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this sequence.",
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
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "name" : "HL7 Structured Document Reference Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0078)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UL."
         ],
         "module" : "Hanging Protocol Definition",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector UL Value",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0020,9167)" : {
         "name" : "Functional Group Pointer",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-1"
         ],
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026).",
            "Required if the value of Selector Attribute (0072,0026) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,0004)" : {
         "desc" : "Explanation of the objective or intent of the Hanging Protocol.",
         "module" : "Hanging Protocol Definition",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Hanging Protocol Description",
         "entity" : "Hanging Protocol"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0020,9238)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : "Identification of the creator of a group of private data elements. Required if the Functional Group Pointer (0020,9167) value is the Data Element Tag of a Private Attribute.",
         "module" : "Hanging Protocol Definition",
         "name" : "Functional Group Private Creator",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-1"
         ]
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0072)" : {
         "entity" : "Hanging Protocol",
         "name" : "Selector DS Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DS. Some leniency in precision and format (including padding and scientific notation) will be required."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0200)[<0>](0072,0514)" : {
         "desc" : [
            "The desired spacing of the reformatted images in millimeters. The spacing is measured from the center-to-center of each reconstructed image.",
            "Required if value of Reformatting Operation Type (0072,0510) is SLAB or MPR. May be present otherwise."
         ],
         "module" : "Hanging Protocol Display",
         "req" : "1C",
         "usage" : "M",
         "name" : "Reformatting Interval",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0050)" : {
         "name" : "Selector Attribute VR",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The Value Representation of Selector Attribute (0072,0026).",
            "Required if Selector Attribute (0072,0026) or Filter-by Category (0072,0402), and Filter-by Operator (0072,0406) are present."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0076)" : {
         "usage" : "M",
         "req" : "1C",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FL."
         ],
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector FL Value",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0056)" : {
         "module" : "Hanging Protocol Display",
         "desc" : "Identification of the creator of a group of private data elements. Required if the Selector Attribute (0072,0026) value is the Data Element Tag of a Private Attribute.",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector Attribute Private Creator",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0312)" : {
         "name" : "Image Box Small Scroll Type",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Defines the type of small increment scrolling to be applied to this Image Box.",
            "Required if the value of Image Box Layout Type (0072,0304) is TILED, and the value of Image Box Tile Horizontal Dimension (0072,0306) or Image Box Tile Vertical Dimension (0072,0308) is greater than 1. Scrolling is not specified if zero length.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "PAGE",
                     "In a TILED image box, replace all image slots with the next N x M images in the set."
                  ],
                  [
                     "ROW_COLUMN",
                     "In a TILED image box, move each row or column of images to the next row or column, depending on Image Box Scroll Direction (0072,0310)."
                  ],
                  [
                     "IMAGE",
                     "In a TILED image box, move each image to the next slot, either horizontally or vertically, depending on Image Box Scroll Direction (0072,0310)."
                  ]
               ]
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "If there are multiple image boxes of different Tile Dimensions in a Display Set, then only IMAGE scrolling applies, and the value of this attribute is ignored."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "2C",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0056)" : {
         "desc" : "Identification of the creator of a group of private data elements. Required if the Selector Attribute (0072,0026) value is the Data Element Tag of a Private Attribute.",
         "module" : "Hanging Protocol Definition",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector Attribute Private Creator",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0214)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Describes a geometric relationship between Display Sets for the purpose of static or interactive localization or navigation.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Navigation Indicator Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,006c)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SH."
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector SH Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0602)" : {
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Sort-by Category",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            [
               "Category of the sorting operation. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.23.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "ALONG_AXIS",
                     "for CT, MR, other cross-sectional image sets"
                  ],
                  [
                     "BY_ACQ_TIME",
                     null
                  ]
               ]
            },
            "Required if Selector Attribute (0072,0026) is not present."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0054)" : {
         "module" : "Hanging Protocol Display",
         "desc" : "Identification of the creator of a group of private data elements. Required if the Selector Sequence Pointer (0072,0052) value is the Data Element Tag of a Private Attribute.",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "name" : "Selector Sequence Pointer Private Creator",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ]
      },
      "(0008,0053)" : {
         "entity" : "Hanging Protocol",
         "name" : "Query/Retrieve View",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "module" : "SOP Common"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0028)" : {
         "name" : "Selector Value Number",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "desc" : "Positive integer identifying which value of a multi-valued attribute identified by Selector Attribute (0072,0026) is to be used for Image Set selection. The value 1 identifies the first value. The value zero identifies any value.",
         "module" : "Hanging Protocol Definition"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0052)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Contains the Data Element Tag of the Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute (0072,0026) is nested in a Sequence. Shall not be used to identify code sequence attributes. See Selector Code Sequence Value (0072,0080)."
         ],
         "module" : "Hanging Protocol Display",
         "entity" : "Hanging Protocol",
         "name" : "Selector Sequence Pointer",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ]
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0074)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FD."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector FD Value",
         "entity" : "Hanging Protocol"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol",
         "module" : "SOP Common",
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
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0072,000e)" : {
         "usage" : "M",
         "req" : "2",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Sequence that provides a coded identifier for the person, group, or site for which this Hanging Protocol was defined.",
            "Zero or one item shall be included in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "If a standardized naming schema becomes available, it should be used. Meanwhile, local coding schemes such as employee numbers and department numbers are likely to be used."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Hanging Protocol User Identification Code Sequence",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0302)" : {
         "name" : "Image Box Number",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol",
         "desc" : "A monotonically increasing integer that identifies the order of image boxes for scrolling, starting from 1, incrementing by one, unique within a Display Set Sequence Item.",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1"
      },
      "(0072,0020)" : {
         "entity" : "Hanging Protocol",
         "name" : "Image Sets Sequence",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Sequence describing one or more types of Image Sets to which the Hanging Protocol applies.",
            "One or more Items shall be included in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.1.1.2"
                  }
               },
               "."
            ]
         ],
         "module" : "Hanging Protocol Definition"
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,003a)" : {
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Units of time for Relative Time (0072,0038).",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "SECONDS",
                     null
                  ],
                  [
                     "MINUTES",
                     null
                  ],
                  [
                     "HOURS",
                     null
                  ],
                  [
                     "DAYS",
                     null
                  ],
                  [
                     "WEEKS",
                     null
                  ],
                  [
                     "MONTHS",
                     null
                  ],
                  [
                     "YEARS",
                     null
                  ]
               ]
            },
            "Required if Relative Time (0072,0038) is present."
         ],
         "module" : "Hanging Protocol Definition",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Relative Time Units",
         "entity" : "Hanging Protocol"
      },
      "(0072,0108)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "Hanging Protocol Environment",
         "desc" : [
            "Exactly four dimensionless floating point values indicating the rectangular coordinate position of the screen within the overall bounding box that encompasses all the screens. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.23.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.23.2-2"
         ],
         "name" : "Display Environment Spatial Position",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0705)[<1>](0008,1150)" : {
         "entity" : "Hanging Protocol",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1"
      },
      "(0072,0106)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "Hanging Protocol Environment",
         "desc" : [
            "Positive integer indicating the intended number of columns of the addressable area of the screen in pixels.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The goal is not absolute size matching."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.23.2-2"
         ],
         "name" : "Number of Horizontal Pixels",
         "entity" : "Hanging Protocol"
      },
      "(0072,010c)" : {
         "mod_tables" : [
            "table_C.23.2-2"
         ],
         "name" : "Screen Minimum Color Bit Depth",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "req" : "1C",
         "module" : "Hanging Protocol Environment",
         "desc" : [
            "Positive integer indicating the desired minimum total number of bits per color channel used to present a pixel.",
            "Required if Screen Minimum Grayscale Bit Depth (0072,010A) is not present.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "A 24-bit color system with 8 bits per color channel (red, green, blue) would have a value of 8."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0026)" : {
         "entity" : "Hanging Protocol",
         "name" : "Selector Attribute",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "desc" : [
            [
               "Data Element Tag of an Attribute from an Image IOD to use as a filter. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.23.3.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for potential attributes."
            ],
            "Required if Filter-by Category (0072,0402) is not present."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,007a)" : {
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector US Value",
         "entity" : "Hanging Protocol",
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is US."
         ]
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M",
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
         ]
      },
      "(0072,0020)[<0>](0072,0022)" : {
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Sequence containing Image Set selection attributes and values that are used to identify one type of image or object set for the Hanging Protocol.",
            "One or more Items shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.23.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Hanging Protocol Definition",
         "name" : "Image Set Selector Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0018,1244)" : {
         "entity" : "Hanging Protocol",
         "name" : "Preferred Playback Sequencing",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Describes the preferred playback sequencing for the Image Box. Overrides any Preferred Playback Sequencing (0018,1244) value in the image objects being displayed.",
            "Required if the value of Image Box Layout Type (0072,0304) is CINE.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "0",
                     "Looping (1,2\u2026n,1,2,\u2026n,1,2,\u2026.n,\u2026)"
                  ],
                  [
                     "1",
                     "Sweeping (1,2,\u2026n,n-1,\u20262,1,2,\u2026n,\u2026)"
                  ],
                  [
                     "2",
                     "Stop (1,2\u2026n)"
                  ]
               ]
            }
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common",
         "req" : "2",
         "usage" : "M"
      },
      "(0018,a001)" : {
         "module" : "SOP Common",
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
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contributing Equipment Sequence",
         "entity" : "Hanging Protocol"
      },
      "(4ffe,0001)" : {
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "name" : "MAC Parameters Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0052)" : {
         "entity" : "Hanging Protocol",
         "name" : "Selector Sequence Pointer",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Contains the Data Element Tag of the Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute (0072,0026) is nested in a Sequence. Shall not be used to identify code sequence attributes. See Selector Code Sequence Value (0072,0080)."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0072,0200)[<0>](0072,0718)" : {
         "name" : "Display Set Vertical Justification",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Indicates direction in which to vertically justify the image within a viewport that is not the same shape (aspect ratio) as the image.",
            {
               "list" : [
                  [
                     "TOP",
                     null
                  ],
                  [
                     "CENTER",
                     null
                  ],
                  [
                     "BOTTOM",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,006c)" : {
         "name" : "Selector SH Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SH."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0404)" : {
         "name" : "Filter-by Attribute Presence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "Operation to be applied based on the presence or absence of the attribute represented by Selector Attribute (0072,0026) in each image of the Image Set.",
            "Required if Selector Attribute (0072,0026) is present and Filter-by Operator (0072,0406) is not present.",
            {
               "list" : [
                  [
                     "PRESENT",
                     "Include the image if the attribute is present."
                  ],
                  [
                     "NOT_PRESENT",
                     "Include the image if the attribute is not present."
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "Hanging Protocol Display",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0516)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Initial view of the reformatted images.",
            "Required if the value of Reformatting Operation Type (0072,0510) is MPR or 3D_RENDERING. May be present otherwise.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "SAGITTAL",
                     null
                  ],
                  [
                     "TRANSVERSE",
                     null
                  ],
                  [
                     "CORONAL",
                     null
                  ],
                  [
                     "OBLIQUE",
                     null
                  ]
               ]
            }
         ],
         "name" : "Reformatting Operation Initial View Direction",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,007c)" : {
         "entity" : "Hanging Protocol",
         "name" : "Selector SL Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SL."
         ],
         "module" : "Hanging Protocol Definition",
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,0034)" : {
         "name" : "Image Set Selector Category",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "entity" : "Hanging Protocol",
         "desc" : [
            "Category of the Time Based Image Set selector.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "RELATIVE_TIME",
                     null
                  ],
                  [
                     "ABSTRACT_PRIOR",
                     null
                  ]
               ]
            }
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "1"
      },
      "(0072,0214)[<0>](0072,0218)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            "One or more Display Set Number (0072,0202) values.",
            "If Navigation Display Set is present, shall list those Display Sets that are controlled by or indicated on the Navigation Display Set.",
            "If Navigation Display Set is absent, shall indicate that all of the Reference Display Sets cross-reference each other."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Reference Display Sets",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0500)" : {
         "name" : "Blending Operation Type",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            [
               "Type of blending of superimposed and underlying images from the image set, performed before reformatting. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.23.3.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "COLOR",
                     "apply a pseudo-color to the superimposed image while blending"
                  ]
               ]
            }
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "3"
      },
      "(0072,0200)[<0>](0072,0710)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Indicates whether or not to display images with the physical size of the rendered image pixel the same on the screen as specified in the image attributes, unless overridden by a Presentation State instance.",
            {
               "list" : [
                  [
                     "YES",
                     "Display images at True Size."
                  ],
                  [
                     "NO",
                     "The rendered size is not specified."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Show Image True Size Flag",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0008,0016)" : {
         "name" : "SOP Class UID",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0066)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LO."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "name" : "Selector LO Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ]
      },
      "(0072,0200)[<0>](0072,0204)" : {
         "req" : "1",
         "usage" : "M",
         "desc" : "Positive integer value that designates this Display Set as part of a specific presentation group. All Display Sets with the same Display Set Presentation Group (0072,0204) value shall be displayed at the same time. The value 1 shall indicate that this Display Set is part of the initial presentation group. Subsequent values incrementing by 1 shall imply successive temporal ordering of display.",
         "module" : "Hanging Protocol Display",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Display Set Presentation Group",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0020,9238)" : {
         "desc" : "Identification of the creator of a group of private data elements. Required if the Functional Group Pointer (0020,9167) value is the Data Element Tag of a Private Attribute.",
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1C",
         "name" : "Functional Group Private Creator",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0012)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Hanging Protocol Definition",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_10-11"
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located."
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "entity" : "Hanging Protocol",
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0072,000c)[<0>](0020,0060)" : {
         "entity" : "Hanging Protocol",
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "desc" : [
            "Laterality of the body part to which this Hanging Protocol applies.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "R",
                     "Right"
                  ],
                  [
                     "L",
                     "Left"
                  ],
                  [
                     "B",
                     "Both"
                  ],
                  [
                     "U",
                     "Unpaired"
                  ]
               ]
            },
            "Zero length means not applicable.",
            "Required if Anatomic Region Sequence (0008,2218) is present."
         ],
         "module" : "Hanging Protocol Definition",
         "req" : "2C",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0070)" : {
         "name" : "Selector UT Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UT."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0026)" : {
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "name" : "Selector Attribute",
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "desc" : "Data Element Tag of an Attribute from an Image or other IOD to use for Image Set selection.",
         "module" : "Hanging Protocol Definition"
      },
      "(0020,0013)" : {
         "name" : "Instance Number",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "A number that identifies this Composite object instance.",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0512)" : {
         "entity" : "Hanging Protocol",
         "name" : "Reformatting Thickness",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The desired thickness of the reformatted images in millimeters.",
            "Required if value of Reformatting Operation Type (0072,0510) is SLAB or MPR. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "req" : "1C",
         "usage" : "M",
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
         "module" : "SOP Common",
         "entity" : "Hanging Protocol",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0060)" : {
         "entity" : "Hanging Protocol",
         "name" : "Selector AT Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AT."
         ],
         "module" : "Hanging Protocol Definition"
      },
      "(0072,0200)[<0>](0072,0716)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Indicates whether or not to display image acquisition technique information.",
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
         "module" : "Hanging Protocol Display",
         "name" : "Show Acquisition Techniques Flag",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,000c)[<0>](0040,100a)" : {
         "desc" : [
            "Sequence that identifies a reason for procedure to which this Hanging Protocol applies.",
            "Zero or more Items shall be included in this sequence."
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "2",
         "name" : "Reason for Requested Procedure Code Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution Description",
         "entity" : "Hanging Protocol",
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "usage" : "M",
         "req" : "3"
      },
      "(0072,0214)[<0>](0072,0216)" : {
         "entity" : "Hanging Protocol",
         "name" : "Navigation Display Set",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "Display Set Number (0072,0202) of the Display Set where the geometric relationship to the Reference Display Sets (0072,0218) is graphically depicted.",
            "Required if there is a one-way interaction such that the location of the Reference Display Sets is indicated on or controlled by the Navigation Display Set.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "For example, the graphical representation may indicate either the number of slices displayed or contained in the Reference Display Set(s)."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0062)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is CS."
         ],
         "module" : "Hanging Protocol Definition",
         "entity" : "Hanging Protocol",
         "name" : "Selector CS Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ]
      },
      "(0072,0200)[<0>](0072,0705)[<1>](0008,1155)" : {
         "module" : "Hanging Protocol Display",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Hanging Protocol"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0072)" : {
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector DS Value",
         "entity" : "Hanging Protocol",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DS. Some leniency in precision and format (including padding and scientific notation) will be required."
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "1C"
      },
      "(0072,0200)[<0>](0072,0203)" : {
         "module" : "Hanging Protocol Display",
         "desc" : "Description of the objective of the display set defined by this sequence item.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol",
         "name" : "Display Set Label",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0070)" : {
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector UT Value",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "req" : "1C",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UT."
         ]
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "Hanging Protocol",
         "name" : "Reason for the Attribute Modification",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
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
      "(0400,0500)[<0>](0400,0510)" : {
         "req" : "1",
         "usage" : "M",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common",
         "name" : "Encrypted Content Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "entity" : "Hanging Protocol",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
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
         ]
      },
      "(0072,0008)" : {
         "desc" : "Identifies the creator of the Hanging Protocol.",
         "module" : "Hanging Protocol Definition",
         "req" : "1",
         "usage" : "M",
         "name" : "Hanging Protocol Creator",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0072,0002)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : "Short descriptor that identifies the Hanging Protocol.",
         "name" : "Hanging Protocol Name",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ]
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0310)" : {
         "name" : "Image Box Scroll Direction",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            {
               "list" : [
                  [
                     "VERTICAL",
                     "scroll images by row"
                  ],
                  [
                     "HORIZONTAL",
                     "scroll images by column"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if the value of Image Box Layout Type (0072,0304) is TILED, and the value of Image Box Tile Horizontal Dimension (0072,0306) or Image Box Tile Vertical Dimension (0072,0308) is greater than 1."
         ],
         "module" : "Hanging Protocol Display",
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,007e)" : {
         "entity" : "Hanging Protocol",
         "name" : "Selector SS Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SS."
         ]
      },
      "(0028,0303)" : {
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
         "req" : "3",
         "usage" : "M",
         "name" : "Longitudinal Temporal Information Modified",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "entity" : "Hanging Protocol"
      },
      "(0100,0410)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance Status",
         "entity" : "Hanging Protocol",
         "usage" : "M",
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
                     "el" : "para",
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0306)" : {
         "name" : "Image Box Tile Horizontal Dimension",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol",
         "desc" : [
            "Positive integer defining the horizontal Image Box tile dimension; the number of columns.",
            "Required if the value of Image Box Layout Type (0072,0304) is TILED."
         ],
         "module" : "Hanging Protocol Display",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0005)" : {
         "usage" : "M",
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
         ],
         "module" : "SOP Common",
         "name" : "Specific Character Set",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0032)" : {
         "name" : "Image Set Number",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Image Set Number (0072,0032) value from a Time Based Image Sets Sequence (0072,0030) Item within the Image Sets Sequence (0072,0020) Item that is selected for display by this Display Set.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Multiple Image Boxes Sequence (0072,0300) Items within a Display Sets Sequence (0072,0200) Item may be used to spread one image set over multiple image boxes with the same Display Set characteristics."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "module" : "SOP Common",
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
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0068)" : {
         "entity" : "Hanging Protocol",
         "name" : "Selector LT Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LT."
         ]
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0318)" : {
         "desc" : [
            "Defines the positive integer number of pages, rows, columns, or images per large increment scroll, based on the values of Image Box Large Scroll Type (0072,0316) and Image Box Scroll Direction (0072,0310). The value applies to both forward and backward scrolling.",
            "Required if Image Box Large Scroll Type (0072,0316) is present with a value."
         ],
         "module" : "Hanging Protocol Display",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "name" : "Image Box Large Scroll Amount",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Name",
         "entity" : "Hanging Protocol",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)" : {
         "name" : "Filter Operations Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "desc" : [
            "Sequence that defines filter criteria to be applied to the image set identified by Image Set Number (0072,0032).",
            "Zero or more items shall be included in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.23.3.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "module" : "Hanging Protocol Display",
         "req" : "2",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "name" : "Coding Scheme External ID",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2C",
         "usage" : "M",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common"
      },
      "(0008,0012)" : {
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "Hanging Protocol",
         "name" : "Instance Creation Date",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0072,0200)[<0>](0072,0206)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "Description of the intent of the Display Set Presentation Group (0072,0204). If present, shall have the same value in all sequence Items assigned the same value for Display Set Presentation Group (0072,0204).",
         "module" : "Hanging Protocol Display",
         "name" : "Display Set Presentation Group Description",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0314)" : {
         "name" : "Image Box Small Scroll Amount",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Defines the positive integer number of pages, rows, columns, or images per small increment scroll, based on the values of Image Box Small Scroll Type (0072,0312) and Image Box Scroll Direction (0072,0310). The value applies to both forward and backward scrolling.",
            "Required if Image Box Small Scroll Type (0072,0312) is present with a value."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,000c)[<0>](0008,1032)" : {
         "req" : "2",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Sequence that identifies a procedure to which this Hanging Protocol applies.",
            "Zero or more Items shall be included in this sequence."
         ],
         "name" : "Procedure Code Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ]
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0080)" : {
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector Code Sequence Value",
         "entity" : "Hanging Protocol",
         "module" : "Hanging Protocol Display",
         "desc" : [
            [
               "The value(s) of the attribute identified by Selector Attribute (0072,0026). One or more Items shall be included in this sequence. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.4.2.1.2"
                  }
               },
               "."
            ],
            "Required if Selector Attribute VR (0072,0050) is present and the value is SQ, and Selector Attribute (0072,0026) is a code sequence."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,006e)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is ST."
         ],
         "module" : "Hanging Protocol Definition",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector ST Value",
         "entity" : "Hanging Protocol"
      },
      "(0400,0561)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Attributes Sequence",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0028)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Positive integer identifying which value of the attribute identified by Selector Attribute (0072,0026) is to be used for sorting. The value of 1 identifies the first value. Shall not be zero.",
            "Required if Selector Attribute (0072,0026) is present."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector Value Number",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,0040)" : {
         "module" : "Hanging Protocol Definition",
         "desc" : "Description of the objective of the image set defined by this sequence item.",
         "usage" : "M",
         "req" : "3",
         "name" : "Image Set Label",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,006a)" : {
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is PN."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "name" : "Selector PN Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol",
         "desc" : "May include Sequence Attributes and their Items.",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0702)" : {
         "entity" : "Hanging Protocol",
         "name" : "VOI Type",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Expected value of interest transformation for display (e.g., Window Center and Window Width or VOI LUT).",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "LUNG",
                     null
                  ],
                  [
                     "MEDIASTINUM",
                     null
                  ],
                  [
                     "ABDO_PELVIS",
                     null
                  ],
                  [
                     "LIVER",
                     null
                  ],
                  [
                     "SOFT_TISSUE",
                     null
                  ],
                  [
                     "BONE",
                     null
                  ],
                  [
                     "BRAIN",
                     null
                  ],
                  [
                     "POST_FOSSA",
                     null
                  ]
               ]
            }
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature UID",
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "module" : "SOP Common"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0064)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is IS. Some leniency in precision and format (including padding with spaces and leading zeros, e.g., \"001\" = \" 1 \" = \"1\") will be required."
         ],
         "module" : "Hanging Protocol Definition",
         "entity" : "Hanging Protocol",
         "name" : "Selector IS Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "usage" : "M",
         "req" : "1",
         "entity" : "Hanging Protocol",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "usage" : "M",
         "req" : "1",
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
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0704)" : {
         "name" : "Pseudo-Color Type",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "A category of pseudo-color palette choice to be applied after application of the VOI LUT. If this attribute is not present, a pseudo-color palette shall not be applied.",
            [
               "Defined Terms are the values of Content Label (0070,0080) in the list of standard color palettes defined in ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.6",
                     "targetptr" : "PS3.6"
                  }
               },
               " Well-Known Color Palettes."
            ]
         ]
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,007a)" : {
         "name" : "Selector US Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is US."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(0072,0200)[<0>](0072,0717)" : {
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Display Set Horizontal Justification",
         "entity" : "Hanging Protocol",
         "desc" : [
            "Indicates direction in which to horizontally justify the image within a viewport that is not the same shape (aspect ratio) as the image.",
            {
               "list" : [
                  [
                     "LEFT",
                     null
                  ],
                  [
                     "CENTER",
                     null
                  ],
                  [
                     "RIGHT",
                     null
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "Typically used in mammography display applications in which images from the patient's left and right are displayed \"back to back\", rather than centered."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "Hanging Protocol Display",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance UID",
         "entity" : "Hanging Protocol",
         "req" : "1",
         "usage" : "M",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,006e)" : {
         "name" : "Selector ST Value",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is ST."
         ],
         "module" : "Hanging Protocol Display",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol",
         "name" : "Retrieve URI",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0050)" : {
         "name" : "Selector Attribute VR",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "The Value Representation of Selector Attribute (0072,0026). See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.5",
                  "targetdoc" : "PS3.5",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            " for Enumerated Values of Value Representation."
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0714)" : {
         "entity" : "Hanging Protocol",
         "name" : "Show Patient Demographics Flag",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Indicates whether or not to display patient and study identification information.",
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
         "req" : "3",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0304)" : {
         "name" : "Image Box Layout Type",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Type of layout of the image box.",
            "All types except for TILED are single rectangles containing a single frame of image pixel data. The types are primarily distinguished by their interaction technique.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "TILED",
                     "a scrollable array of rectangles, each containing a single frame of image pixel data."
                  ],
                  [
                     "STACK",
                     "a single rectangle containing a steppable single frame, intended for user-controlled stepping through the image set, usually via continuous device interaction (e.g., mouse scrolling) or by single stepping (mouse or button click)."
                  ],
                  [
                     "CINE",
                     "a single rectangle, intended for video type play back where the user controls are play sequence, rate of play, and direction."
                  ],
                  [
                     "PROCESSED",
                     "intended for interactive 3D visualizations that have custom interfaces."
                  ],
                  [
                     "SINGLE",
                     "a single rectangle, intended for images and objects with no defined methods of interaction."
                  ]
               ]
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "This value may also be used for non-image objects, such as waveforms and SR documents."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0060)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AT."
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector AT Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0705)" : {
         "desc" : [
            "Reference to a Color Palette Storage Instance to be applied after application of the VOI LUT.",
            "Only a single Item shall be included in this sequence.",
            "The Referenced SOP Class UID (0008,1150) shall be \"1.2.840.10008.5.1.4.39.1\".",
            [
               "If the value of Pseudo-Color Type (0072,0704) is a reference to the Content Label (0070,0080) of a standard palette, the Referenced SOP Instance UID (0008,1155) shall be the corresponding Well-known SOP Instance UID defined in ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.6",
                     "targetdoc" : "PS3.6",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               "."
            ],
            "Required if Pseudo-Color Type (0072,0704) is a reference to a standard palette. May be present otherwise if Pseudo-Color Type (0072,0704) is present."
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1C",
         "name" : "Pseudo-Color Palette Instance Reference Sequence",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0072,000a)" : {
         "name" : "Hanging Protocol Creation DateTime",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "entity" : "Hanging Protocol",
         "module" : "Hanging Protocol Definition",
         "desc" : "Date and time on which the Hanging Protocol was created.",
         "req" : "1",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0062)" : {
         "name" : "Selector CS Value",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "entity" : "Hanging Protocol",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is CS."
         ],
         "usage" : "M",
         "req" : "1C"
      },
      "(0072,0200)[<0>](0072,0712)" : {
         "desc" : [
            "Indicates whether or not to display items from the Graphic Annotation Sequence (0070,0001) in an applied Presentation State, and the attributes of the Overlay Plane module in the image objects or applied Presentation State.",
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
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "3",
         "entity" : "Hanging Protocol",
         "name" : "Show Graphic Annotation Flag",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "entity" : "Hanging Protocol"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "SOP Common",
         "name" : "Person's Telephone Numbers",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0072,0012)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.23.1-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Hanging Protocol",
         "module" : "Hanging Protocol Definition",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1"
      },
      "(0020,9172)" : {
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "name" : "Conversion Source Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0600)[<1>](0072,0026)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            [
               "Data Element Tag of an Attribute from an Image IOD to be used for sorting. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.23.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for potential attributes."
            ],
            "Required if Sort-by Category (0072,0602) is not present."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector Attribute",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0020,9167)" : {
         "name" : "Functional Group Pointer",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-1"
         ],
         "entity" : "Hanging Protocol",
         "desc" : [
            "Contains the Data Element Tag of the Functional Group Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026).",
            "Required if the value of Selector Attribute (0072,0026) is the Data Element Tag of an Attribute that is contained within a Functional Group Sequence."
         ],
         "module" : "Hanging Protocol Display",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number",
         "entity" : "Hanging Protocol",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M"
      },
      "(0100,0426)" : {
         "req" : "3",
         "usage" : "M",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Authorization Equipment Certification Number",
         "entity" : "Hanging Protocol"
      },
      "(0072,010a)" : {
         "name" : "Screen Minimum Grayscale Bit Depth",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.2-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Hanging Protocol Environment",
         "desc" : [
            "Positive integer indicating the desired minimum number of grayscale bits per pixel of the screen.",
            "Required if Screen Minimum Color Bit Depth (0072,010C) is not present."
         ]
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0078)" : {
         "name" : "Selector UL Value",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UL."
         ]
      },
      "(0008,0013)" : {
         "entity" : "Hanging Protocol",
         "name" : "Instance Creation Time",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "entity" : "Hanging Protocol"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,0028)" : {
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "name" : "Selector Value Number",
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "req" : "1C",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Positive integer identifying which value of the attribute identified by Selector Attribute (0072,0026) is to be used for filtering. The value 1 identifies the first value. The value zero identifies any value.",
            "Required if Selector Attribute (0072,0026) and Filter-by Operator (0072,0406) are present."
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                          ",
                              {
                                 "content" : [
                                    "As technology advances, additional encryption algorithms may be allowed in future versions. Implementations should take this possibility into account."
                                 ],
                                 "el" : "para"
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
      "(0072,0200)[<0>](0072,0400)[<1>](0072,006a)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is PN."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector PN Value",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ]
      },
      "(0072,0200)[<0>](0072,0700)" : {
         "name" : "Display Set Patient Orientation",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Patient direction of the rows and columns of the images, as intended for display. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.23.3.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "M",
         "req" : "3"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0052)" : {
         "name" : "Selector Sequence Pointer",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-1"
         ],
         "desc" : [
            "Contains the Data Element Tag of the Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute (0072,0026) is nested in a Sequence. Shall not be used to identify code sequence attributes. See Selector Code Sequence Value (0072,0080)."
         ],
         "module" : "Hanging Protocol Definition",
         "req" : "1C",
         "usage" : "M"
      },
      "(0072,0208)" : {
         "name" : "Partial Data Display Handling",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "module" : "Hanging Protocol Display",
         "desc" : [
            "If one or more Image Sets identified by Image Set Number (0072,0032) in the Display Sets Sequence (0072,0200) Items is not available, indicate whether or not to maintain the expected layout in the absence of complete Image Sets.",
            {
               "list" : [
                  [
                     "MAINTAIN_LAYOUT",
                     "If one or more Image Sets is not available, maintain the layout with empty Image Boxes."
                  ],
                  [
                     "ADAPT_LAYOUT",
                     "If one or more Image Sets is not available, rearrange the layout at the discretion of the application."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "If this attribute is zero length, then the expected behavior is not defined."
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0072,0108)" : {
         "module" : "Hanging Protocol Display",
         "desc" : [
            "Exactly four unitless floating point values indicating the rectangular coordinate position of the image box within the overall bounding box that encompasses all the display space (across all screens). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.23.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Hanging Protocol",
         "name" : "Display Environment Spatial Position",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Hanging Protocol",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1"
      },
      "(0072,0200)[<0>](0072,0400)[<1>](0072,007c)" : {
         "name" : "Selector SL Value",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.3-1",
            "table_C.23.4-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Hanging Protocol Display",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SL."
         ]
      },
      "(0072,0210)" : {
         "name" : "Synchronized Scrolling Sequence",
         "mod_tables" : [
            "table_C.23.3-1"
         ],
         "entity" : "Hanging Protocol",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Each sequence item of this attribute identifies a group of Display Sets to which synchronized scrolling is to be applied.",
            "One or more Items are permitted in this sequence.",
            "The dimensions along which the synchronization occurs shall be those specified in the Sorting Operations Sequence (0072,0600)."
         ],
         "module" : "Hanging Protocol Display"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "req" : "1",
         "usage" : "M",
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
         "module" : "SOP Common",
         "entity" : "Hanging Protocol",
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Name(s) of the operator(s) of the contributing equipment."
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "name" : "Coding Scheme Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Hanging Protocol",
         "desc" : "The coding scheme full common name",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M"
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0080)" : {
         "entity" : "Hanging Protocol",
         "name" : "Selector Code Sequence Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "desc" : [
            [
               "The value(s) of the attribute identified by Selector Attribute (0072,0026). One or more Items shall be included in this sequence. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.23.4.2.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Selector Attribute VR (0072,0050) is present and the value is SQ, and Selector Attribute (0072,0026) is a code sequence."
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "1C"
      },
      "(0100,0424)" : {
         "entity" : "Hanging Protocol",
         "name" : "SOP Authorization Comment",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO."
      },
      "(0072,0020)[<0>](0072,0030)[<1>](0072,0038)" : {
         "name" : "Relative Time",
         "entity" : "Hanging Protocol",
         "mod_tables" : [
            "table_C.23.1-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Hanging Protocol Definition",
         "desc" : [
            "Exactly two numeric values, indicating the start and end values of a prior range of instance acquisition times relative to the date and time of a current image set. The units shall be specified in Relative Time Units (0072,003A).",
            "The value pair 0\\0 shall indicate a current image set. The value pair n\\n shall indicate \"prior from the instance acquisition time of a current image set by n units\".",
            "Required if the value of Image Set Selector Category (0072,0034) is RELATIVE_TIME.",
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
                                 "content" : [
                                    "A value pair \"1\\7\" with Relative Time Units (0072,003A) of DAYS would indicate the range \"prior by 1 to 7 days before a current image set\"."
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
                                    "The VR of this attribute is unsigned, hence future time cannot be represented."
                                 ],
                                 "el" : "para"
                              },
                              "\n                    "
                           ]
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
            }
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "Hanging Protocol",
         "name" : "Signature",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "M",
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
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0074)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FD."
         ],
         "module" : "Hanging Protocol Definition",
         "entity" : "Hanging Protocol",
         "name" : "Selector FD Value",
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ]
      },
      "(0072,0020)[<0>](0072,0022)[<1>](0072,0068)" : {
         "mod_tables" : [
            "table_C.23.1-1",
            "table_C.23.4-2"
         ],
         "name" : "Selector LT Value",
         "entity" : "Hanging Protocol",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LT."
         ],
         "module" : "Hanging Protocol Definition",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,0015)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Coercion DateTime",
         "entity" : "Hanging Protocol",
         "req" : "3",
         "usage" : "M",
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
         "module" : "SOP Common"
      },
      "(0072,0200)[<0>](0072,0300)[<1>](0008,2144)" : {
         "desc" : [
            "Recommended rate at which the frames of a multi-frame image shall be displayed, in frames/second. Shall have a value greater than zero. Overrides any Recommended Display Frame Rate (0008,2144) value in the image objects being displayed.",
            "Required if the value of Image Box Layout Type (0072,0304) is CINE and if Cine Relative to Real-Time (0072,0330) is not present."
         ],
         "module" : "Hanging Protocol Display",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Hanging Protocol",
         "name" : "Recommended Display Frame Rate",
         "mod_tables" : [
            "table_C.23.3-1"
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "entity" : "Hanging Protocol",
         "name" : "Software Versions",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
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
         ]
      }
   },
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))",
      "Can't handle table_8.8-1 (in table_C.23.1-1 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.23.1-1 after (0008,1032))",
      "Can't handle table_8.8-1 (in table_C.23.1-1 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.23.1-1:table_C.23.4-2 after (0072,0080))",
      "Can't handle table_8.8-1 (in table_C.23.1-1 after (0072,003E))",
      "Can't handle table_8.8-1 (in table_C.23.1-1 after (0072,000E))",
      "Can't handle table_8.8-1 (in table_C.23.3-1:table_C.23.4-2 after (0072,0080))"
   ]
}