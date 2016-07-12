var data = 
{
   "tags" : {
      "(2020,0110)[<0>](0028,0034)" : {
         "mod_tables" : [
            "table_C.13-5"
         ],
         "desc" : null,
         "usage" : "Contains Image Box presentation information",
         "req" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3"
               },
               "el" : "xref"
            },
            " for description"
         ],
         "name" : "Pixel Aspect Ratio",
         "module" : "Image Box Presentation",
         "entity" : ""
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Encrypted Content",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Software Versions",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
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
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "Contains SOP Common information",
         "name" : "Coding Scheme Registry",
         "req" : "1C"
      },
      "(2010,0150)" : {
         "desc" : null,
         "usage" : "Contains Image Box presentation information",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "req" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "table_C.13-3"
               },
               "el" : "xref"
            },
            " for description of Configuration Information."
         ],
         "name" : "Configuration Information",
         "module" : "Image Box Presentation",
         "entity" : ""
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the related equipment is being referenced.",
            "Only a single Item shall be included in this Sequence.",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information"
      },
      "(2020,0111)[<0>](0028,0034)" : {
         "req" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3"
               },
               "el" : "xref"
            },
            " for description."
         ],
         "name" : "Pixel Aspect Ratio",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "entity" : "",
         "module" : "Image Box Presentation"
      },
      "(0008,0105)" : {
         "name" : "Mapping Resource",
         "req" : "1",
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
         "usage" : "Contains SOP Common information",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(2020,0111)[<0>](0028,0100)" : {
         "module" : "Image Box Presentation",
         "entity" : "",
         "desc" : null,
         "usage" : "Contains Image Box presentation information",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "name" : "Bits Allocated",
         "req" : [
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3"
                  },
                  "el" : "xref"
               },
               " for description."
            ],
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "8",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Manufacturer",
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer of the equipment that contributed to the composite instance."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(2020,0111)[<0>](7fe0,0010)" : {
         "module" : "Image Box Presentation",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "desc" : null,
         "usage" : "Contains Image Box presentation information",
         "req" : [
            "See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for description"
         ],
         "name" : "Pixel Data"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "Contains SOP Common information",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
                                 "el" : "para"
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(2020,0110)[<0>](0028,0101)" : {
         "module" : "Image Box Presentation",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "name" : "Bits Stored",
         "req" : [
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for description."
            ],
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "8",
                     null
                  ],
                  [
                     "12",
                     null
                  ]
               ]
            }
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common information",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme External ID",
         "req" : "2C"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
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
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "name" : "Digital Signature DateTime",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Identifying Private Elements",
         "req" : "1"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "req" : "1",
         "name" : "Deidentification Action",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
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
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 }
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
            }
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0400,0500)" : {
         "module" : "SOP Common",
         "entity" : "",
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
                     "linkend" : "sect_C.12.1.1.4.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1C",
         "name" : "Encrypted Attributes Sequence"
      },
      "(2020,0111)[<0>](0028,0002)" : {
         "desc" : null,
         "usage" : "Contains Image Box presentation information",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "req" : [
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3"
                  }
               },
               " for description."
            ],
            {
               "list" : [
                  [
                     "3",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Samples Per Pixel",
         "module" : "Image Box Presentation",
         "entity" : ""
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Encrypted Content Transfer Syntax UID"
      },
      "(0018,9004)" : {
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common information",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Content Qualification"
      },
      "(2020,0111)[<0>](0028,0011)" : {
         "entity" : "",
         "module" : "Image Box Presentation",
         "req" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for description."
         ],
         "name" : "Columns",
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-5"
         ]
      },
      "(2020,0111)[<0>](0028,0006)" : {
         "module" : "Image Box Presentation",
         "entity" : "",
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-5"
         ],
         "req" : [
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3"
                  }
               },
               " for description."
            ],
            {
               "list" : [
                  [
                     "1",
                     "frame interleave"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Planar Configuration"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common information",
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
         "req" : "3",
         "name" : "Date of Last Calibration"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(fffa,fffa)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Digital Signatures Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,0053)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1C",
         "name" : "Query/Retrieve View",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(2010,0060)" : {
         "usage" : "Contains Image Box presentation information",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "desc" : null,
         "name" : "Magnification Type",
         "req" : [
            "Description is the same as in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "table_C.13-3"
               },
               "el" : "xref"
            },
            ". Overrides the Magnification Type specified for the Film Box."
         ],
         "module" : "Image Box Presentation",
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0303)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "name" : "Block Identifying Information Status",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP Common information",
         "name" : "Person's Address",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(2020,0110)[<0>](0028,0100)" : {
         "req" : [
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for description."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "8",
                     null
                  ]
               ],
               "title" : "Enumerated Values if Bits Stored = 8:"
            },
            {
               "title" : "Enumerated Values if Bits Stored = 12:",
               "list" : [
                  [
                     "16",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "name" : "Bits Allocated",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "desc" : null,
         "usage" : "Contains Image Box presentation information",
         "entity" : "",
         "module" : "Image Box Presentation"
      },
      "(0008,0201)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Timezone Offset From UTC",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5",
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
                           "el" : "listitem",
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
                           ]
                        },
                        "\n                    ",
                        {
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
               "el" : "note",
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
                     "el" : "para",
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ]
                  },
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     },
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
      "(0008,0106)" : {
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The identifier of the version of the Context Group.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.5"
                  }
               },
               "."
            ]
         ],
         "name" : "Context Group Version",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,0013)" : {
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : "A number that identifies this Composite object instance.",
         "name" : "Instance Number",
         "req" : "3"
      },
      "(0008,0012)" : {
         "name" : "Instance Creation Date",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "req" : "3",
         "name" : "Time of Last Calibration",
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
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0018,a001)" : {
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
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
         "name" : "Contributing Equipment Sequence"
      },
      "(0100,0410)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "SOP Instance Status",
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
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information"
      },
      "(0040,a390)" : {
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "entity" : ""
      },
      "(2020,0111)[<0>](0028,0102)" : {
         "entity" : "",
         "module" : "Image Box Presentation",
         "name" : "High Bit",
         "req" : [
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for description."
            ],
            {
               "list" : [
                  [
                     "7",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.13-5"
         ],
         "usage" : "Contains Image Box presentation information",
         "desc" : null
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Retrieve URI",
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
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "el" : "para",
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ]
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(2020,0040)" : {
         "req" : [
            "Specifies whether image pixels are to be decimated or cropped if the image rows or columns is greater than the available printable pixels in an Image Box.",
            "Decimation means that a magnification factor <1 is applied to the image. The method of decimation shall be that specified by Magnification Type (2010,0060) or the SCP default if not specified",
            "Cropping means that some image rows and/or columns are deleted before printing",
            {
               "list" : [
                  [
                     "DECIMATE",
                     "A magnification factor <1 to be applied to the image."
                  ],
                  [
                     "CROP",
                     "Some image rows and/or columns are to be deleted before printing. The specific algorithm for cropping shall be described in the SCP Conformance Statement."
                  ],
                  [
                     "FAIL",
                     "The SCP shall not crop or decimate"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Requested Decimate/Crop Behavior",
         "desc" : null,
         "usage" : "Contains Image Box presentation information",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "entity" : "",
         "module" : "Image Box Presentation"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "name" : "Private Group Reference",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "2",
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0124)" : {
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "name" : "Mapping Resource Identification Sequence",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(2020,0111)[<0>](0028,0010)" : {
         "module" : "Image Box Presentation",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "desc" : null,
         "usage" : "Contains Image Box presentation information",
         "name" : "Rows",
         "req" : [
            "See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for description."
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "usage" : "Contains SOP Common information",
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
                     "el" : "para",
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(2020,0110)[<0>](0028,0002)" : {
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-5"
         ],
         "name" : "Samples Per Pixel",
         "req" : [
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for description."
            ],
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
         "module" : "Image Box Presentation",
         "entity" : ""
      },
      "(2020,0110)" : {
         "name" : "Basic Grayscale Image Sequence",
         "req" : [
            [
               "A sequence that provides the content of the grayscale image pixel data to be printed. This is a specialization of the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               " defined in ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3",
                     "xrefstyle" : "select: label"
                  }
               },
               ". It is encoded as a sequence of Attributes of the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.3"
                  }
               },
               "."
            ],
            "Zero or one Item shall be included in this Sequence.",
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
               " for further description."
            ]
         ],
         "desc" : null,
         "usage" : "Contains Image Box presentation information",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "entity" : "",
         "module" : "Image Box Presentation"
      },
      "(2020,0111)[<0>](0028,0103)" : {
         "mod_tables" : [
            "table_C.13-5"
         ],
         "desc" : null,
         "usage" : "Contains Image Box presentation information",
         "req" : [
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3"
                  },
                  "el" : "xref"
               },
               " for description."
            ],
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "0000H",
                     "unsigned integer"
                  ]
               ]
            }
         ],
         "name" : "Pixel Representation",
         "module" : "Image Box Presentation",
         "entity" : ""
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "req" : "1",
         "name" : "Modifying System",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Deidentification Action Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "usage" : "Contains SOP Common information"
      },
      "(0008,001a)" : {
         "usage" : "Contains SOP Common information",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number",
         "req" : "3"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "mod_tables" : [
            "table_C.12-1",
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
         "usage" : "Contains SOP Common information",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "usage" : "Contains SOP Common information",
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
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     },
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
         "name" : "Certified Timestamp Type",
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(2020,0110)[<0>](0028,0010)" : {
         "module" : "Image Box Presentation",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "name" : "Rows",
         "req" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3"
               }
            },
            " for description"
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "MAC ID Number",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common information"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "usage" : "Contains SOP Common information"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Attribute Modification DateTime",
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(2020,0110)[<0>](7fe0,0010)" : {
         "module" : "Image Box Presentation",
         "entity" : "",
         "usage" : "Contains Image Box presentation information",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "desc" : null,
         "req" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for description"
         ],
         "name" : "Pixel Data"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : "A UID that can be used to uniquely reference this signature."
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Modified Attributes Sequence",
         "usage" : "Contains SOP Common information",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,0303)" : {
         "req" : "3",
         "name" : "Longitudinal Temporal Information Modified",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0015)" : {
         "name" : "Instance Coercion DateTime",
         "req" : "3",
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
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,010f)" : {
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "1",
         "name" : "Context Identifier"
      },
      "(0100,0420)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "SOP Authorization DateTime",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution DateTime",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Person's Telecom Information",
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
               ],
               "el" : "note"
            }
         ],
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,0110)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Contains SOP Common information",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(2020,0110)[<0>](0028,0103)" : {
         "name" : "Pixel Representation",
         "req" : [
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for description."
            ],
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "0",
                     "unsigned integer"
                  ]
               ]
            }
         ],
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-5"
         ],
         "entity" : "",
         "module" : "Image Box Presentation"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common information",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
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
         "req" : "1",
         "name" : "Private Creator Reference",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "usage" : "Contains SOP Common information",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0400,0561)" : {
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0100,0424)" : {
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "name" : "SOP Authorization Comment",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0008,0118)" : {
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : "The unique identifier of the Mapping Resource",
         "name" : "Mapping Resource UID",
         "req" : "3"
      },
      "(0008,001b)" : {
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
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
         "req" : "3",
         "name" : "Original Specialized SOP Class UID"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "name" : "Institution Name",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0008,0014)" : {
         "req" : "3",
         "name" : "Instance Creator UID",
         "usage" : "Contains SOP Common information",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Time",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "name" : "MAC Parameters Sequence"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "name" : "Digital Signature Purpose Code Sequence",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "usage" : "Contains SOP Common information",
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(2020,0111)[<0>](0028,0004)" : {
         "req" : [
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for description."
            ],
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "RGB",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "name" : "Photometric Interpretation",
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-5"
         ],
         "entity" : "",
         "module" : "Image Box Presentation"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Coding Scheme Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : "The coding scheme full common name"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0122)" : {
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Mapping Resource Name",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Certified Timestamp",
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
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common information",
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
         "req" : "1",
         "name" : "Data Elements Signed"
      },
      "(0008,0016)" : {
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
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "name" : "SOP Class UID",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "name" : "Coding Scheme Responsible Organization",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "usage" : "Contains SOP Common information",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "Contains SOP Common information",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(2020,0020)" : {
         "name" : "Polarity",
         "req" : [
            "Specifies whether minimum pixel values (after VOI LUT transformation) are to printed black or white.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "NORMAL",
                     "pixels shall be printed as specified by Photometric Interpretation (0028,0004)"
                  ],
                  [
                     "REVERSE",
                     "pixels shall be printed with the opposite polarity as specified by Photometric Interpretation (0028,0004)"
                  ]
               ]
            },
            "If Polarity (2020,0020) is not specified by the SCU, the SCP shall print with NORMAL polarity."
         ],
         "mod_tables" : [
            "table_C.13-5"
         ],
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "entity" : "",
         "module" : "Image Box Presentation"
      },
      "(2020,0111)" : {
         "module" : "Image Box Presentation",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "name" : "Basic Color Image Sequence",
         "req" : [
            [
               "A sequence that provides the content of the color image pixel data to be printed. It is a specialization of the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.3"
                  },
                  "el" : "xref"
               },
               " defined in ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3"
                  },
                  "el" : "xref"
               },
               ". It is encoded as a sequence of Attributes of the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Zero or one Item shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.4",
                     "targetptr" : "PS3.4"
                  },
                  "el" : "olink"
               },
               " for further description."
            ]
         ]
      },
      "(0008,0005)" : {
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
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
         "name" : "Specific Character Set",
         "req" : "1C"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "req" : "1",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(2020,0030)" : {
         "module" : "Image Box Presentation",
         "entity" : "",
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-5"
         ],
         "req" : "Width (x-dimension) in mm of the image to be printed. This value overrides the size that corresponds with optimal filling of the Image Box.",
         "name" : "Requested Image Size"
      },
      "(0008,0123)" : {
         "name" : "Context Group Identification Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(2020,0110)[<0>](0028,0004)" : {
         "name" : "Photometric Interpretation",
         "req" : [
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for description."
            ],
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.13-5"
         ],
         "desc" : null,
         "usage" : "Contains Image Box presentation information",
         "entity" : "",
         "module" : "Image Box Presentation"
      },
      "(2010,0080)" : {
         "name" : "Smoothing Type",
         "req" : [
            "Description is the same as in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "table_C.13-3"
               }
            },
            ". Overrides the Smoothing Type specified for the Film Box."
         ],
         "mod_tables" : [
            "table_C.13-5"
         ],
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "entity" : "",
         "module" : "Image Box Presentation"
      },
      "(2020,0110)[<0>](0028,0102)" : {
         "module" : "Image Box Presentation",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-5"
         ],
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "req" : [
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3"
                  },
                  "el" : "xref"
               },
               " for description."
            ],
            {
               "title" : "Enumerated Values if Bits Stored = 8:",
               "list" : [
                  [
                     "7",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            {
               "list" : [
                  [
                     "11",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values if Bits Stored = 12:"
            }
         ],
         "name" : "High Bit"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information"
      },
      "(0020,9172)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Institutional Department Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "Contains SOP Common information"
      },
      "(2020,0110)[<0>](0028,0011)" : {
         "mod_tables" : [
            "table_C.13-5"
         ],
         "usage" : "Contains Image Box presentation information",
         "desc" : null,
         "req" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for description"
         ],
         "name" : "Columns",
         "module" : "Image Box Presentation",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Address",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0008,0300)" : {
         "name" : "Private Data Element Characteristics Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "usage" : "Contains SOP Common information",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
         "entity" : "",
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "name" : "SOP Instance UID"
      },
      "(0008,0117)" : {
         "entity" : "",
         "module" : "SOP Common",
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
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(2020,0111)[<0>](0028,0101)" : {
         "entity" : "",
         "module" : "Image Box Presentation",
         "name" : "Bits Stored",
         "req" : [
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for description."
            ],
            {
               "list" : [
                  [
                     "8",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "desc" : null,
         "mod_tables" : [
            "table_C.13-5"
         ],
         "usage" : "Contains Image Box presentation information"
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "name" : "Signature",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(2020,0010)" : {
         "entity" : "",
         "module" : "Image Box Presentation",
         "req" : [
            "The position of the image on the film, based on Image Display Format (2010,0010). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.13.5.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for specification."
         ],
         "name" : "Image Box Position",
         "desc" : null,
         "usage" : "Contains Image Box presentation information",
         "mod_tables" : [
            "table_C.13-5"
         ]
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "Nonidentifying Private Elements",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0100,0426)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Authorization Equipment Certification Number",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operators' Name",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "usage" : "Contains SOP Common information",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "name" : "Coding Scheme Version"
      }
   },
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
