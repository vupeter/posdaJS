var data = {
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
      "Can't handle table_8.8-1 (in table_C.17-1 after (0008,103F))",
      "Can't handle table_8.8-1 (in table_C.17-2 after (0040,A088))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3b after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3b after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3b after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3b after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.17-2 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.17-2 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.17-2 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.17-2 after (0040,A372))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.17-2 after (0040,A170))",
      "Recursive inclusion of table_C.17-6 (in table_C.17-6 after (0040,A010))",
      "Can't handle table_8.8-1 (in table_C.17-6:table_C.17-5 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.17-6:table_C.17-5:table_C.18.1-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.17-6:table_C.17-5:table_C.18.1-1 after (0040,A301))",
      "Can't handle table_8.8-1 (in table_C.17-6:table_C.17-5:table_C.18.2-1 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ],
   "tags" : {
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0033)" : {
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
            "table_C.17-2",
            "table_10-17"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1062)" : {
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "req" : "1"
      },
      "(0040,a07a)[<0>](0040,a084)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Observer Type",
         "req" : "1",
         "usage" : "M",
         "desc" : {
            "list" : [
               [
                  "PSN",
                  "Person"
               ],
               [
                  "DEV",
                  "Device"
               ]
            ],
            "title" : "Enumerated Values:",
            "type" : "variablelist"
         },
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Breed Registry Code Sequence",
         "req" : "1",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0107)" : {
         "name" : "Largest Image Pixel Value",
         "usage" : "M",
         "req" : "3",
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : "The maximum actual pixel value encountered in this image."
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "name" : "Station Name",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance."
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Query/Retrieve View",
         "usage" : "M",
         "req" : "1C",
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
      "(0040,a073)[<0>](0040,a088)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Verifying Observer Identification Code Sequence",
         "usage" : "M",
         "req" : "2",
         "desc" : [
            "Coded identifier of Verifying Observer.",
            "Zero or one Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence",
         "usage" : "M"
      },
      "(0010,0200)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Indicates whether or not the subject is a quality control phantom.",
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
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "usage" : "M",
         "name" : "Quality Control Subject",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
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
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "1",
         "name" : "Data Elements Signed",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0033)" : {
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
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
         ]
      },
      "(0040,a360)" : {
         "name" : "Predecessor Documents Sequence",
         "req" : "1C",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Shall refer to SR SOP Instances (e.g., prior or preliminary reports) whose content has been wholly or partially included in this document with or without modification.",
            "One or more Items shall be included in this sequence.",
            "Required if this document includes content from other documents.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The amendment process of an existing SR Document may be described using the Purpose of Reference Code Sequence."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0031)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
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
                     "el" : "orderedlist",
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
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a161)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). Only a single value shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Floating Point Value",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0012,0042)" : {
         "name" : "Clinical Trial Subject Reading ID",
         "req" : "1C",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
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
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Certificate of Signer",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0020,000e)" : {
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Series Instance UID",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,a730)[<0>](0040,a043)" : {
         "req" : "1C",
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "desc" : [
            "Code describing the concept represented by this Content Item. Also conveys the value of Document Title and section headings in documents.",
            "Only a single Item shall be included in this sequence.",
            "Required if Value Type (0040,A040) is TEXT, NUM, CODE, DATETIME, DATE, TIME, UIDREF or PNAME.",
            "Required if Value Type (0040,A040) is CONTAINER and a heading is present, or this is the Root Content Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "That is, containers without headings do not require Concept Name Code Sequence"
                     ]
                  },
                  "\n                "
               ]
            },
            "Required if Value Type (0040,A040) is COMPOSITE, IMAGE, WAVEFORM, SCOORD, SCOORD3D or TCOORD, and the Purpose of Reference is conveyed in the Concept Name.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.3.2.2"
                  }
               },
               " for further explanation."
            ]
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "Coding Scheme Registry",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "name" : "Retrieve AE Title",
         "req" : "3",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0012,0040)" : {
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID",
         "usage" : "U",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
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
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,0018)" : {
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "name" : "SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0008,1010)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "req" : "3",
         "name" : "Station Name",
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Digital Signature UID",
         "req" : "1",
         "usage" : "M",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0100,0410)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "SOP Instance Status",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0038,0060)" : {
         "req" : "3",
         "name" : "Service Episode ID",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider"
      },
      "(0040,a370)" : {
         "desc" : [
            "Identifies Requested Procedures that are being fulfilled (completely or partially) by creation of this Document.",
            "One or more Items shall be included in this sequence.",
            "Required if this Document fulfills at least one Requested Procedure. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Referenced Request Sequence",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. Only a single value shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,1200)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Date of Last Calibration",
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
         ],
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0012,0063)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "De-identification Method",
         "usage" : "M",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
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
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
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
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,1012)" : {
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
         "name" : "Reason For Performed Procedure Code Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0010,2180)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Occupation of the Patient.",
         "req" : "3",
         "name" : "Occupation",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1",
            "table_10-11"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "name" : "MAC",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,a370)[<0>](0040,0026)" : {
         "name" : "Order Placer Identifier Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Placer Order Number.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "req" : "2C"
      },
      "(0040,a730)[<0>](3006,0024)" : {
         "desc" : "Uniquely identifies the Frame of Reference within which the coordinates are defined.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1",
         "name" : "Referenced Frame of Reference UID",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a07a)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Institution Name",
         "usage" : "M",
         "req" : "2"
      },
      "(0040,a730)" : {
         "desc" : [
            "A potentially recursively nested Sequence of Items that conveys content that is the Target of Relationships with the enclosing Source Content Item.",
            "One or more Items shall be included in this sequence.",
            "Required if the enclosing Content Item has relationships.",
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
                                    "If this Attribute is not present then the enclosing Item is a leaf."
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
                                 "content" : [
                                    "The order of Items within this Sequence is semantically significant for presentation."
                                 ]
                              },
                              "\n                    "
                           ]
                        },
                        "\n                  "
                     ]
                  },
                  "\n                "
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.17.3.2.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.17-6"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "req" : "1C",
         "name" : "Content Sequence",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0070,0022)" : {
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Graphic Data",
         "req" : "1",
         "desc" : [
            [
               "An ordered set of (x,y,z) triplets (in mm and may be negative) that define a region of interest in the patient-relative Reference Coordinate System defined by Referenced Frame of Reference UID (3006,0024). See ",
               {
                  "attrs" : {
                     "linkend" : "glossentry_RCS"
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
                     "linkend" : "sect_C.18.9.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ]
      },
      "(0040,a07c)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "req" : "2",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "Name of Custodial Institution or Organization."
      },
      "(0040,a07c)" : {
         "desc" : [
            "Custodial organization for this SR Document instance. Represents the organization from which the document originates and that is in charge of maintaining the document, i.e., the steward of the original source document.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "This may or may not be identical to the Institution identified in the Equipment Module."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "3",
         "name" : "Custodial Organization Sequence",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0103)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
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
         "name" : "Pixel Representation",
         "req" : "1",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0040,a07a)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0010,4000)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Comments",
         "req" : "3",
         "usage" : "M",
         "desc" : "User-defined additional information about the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,a370)[<0>](0008,1110)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Uniquely identifies the Study SOP Instance.",
            "Zero or one Item shall be included in this sequence.",
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
         "req" : "2",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "usage" : "U",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "name" : "MAC",
         "req" : "1",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         ]
      },
      "(0012,0064)" : {
         "req" : "1C",
         "name" : "De-identification Method Code Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ]
      },
      "(0040,a07a)[<0>](0008,0070)" : {
         "req" : "1C",
         "name" : "Manufacturer",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Manufacturer of the device observer.",
            "Required if Observer Type value is DEV."
         ]
      },
      "(0018,1008)" : {
         "desc" : "Identifier of the gantry or positioner.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Gantry ID",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1021)" : {
         "name" : "Patient's Size Code Sequence",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0040,a073)" : {
         "name" : "Verifying Observer Sequence",
         "usage" : "M",
         "req" : "1C",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "The person or persons authorized to verify documents of this type and accept responsibility for the content of this document.",
            "One or more Items shall be included in this sequence.",
            "Required if Verification Flag (0040,A493) is VERIFIED.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "In HL7 Structured Documents, the comparable attribute is the \"legalAuthenticator\"."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0008,0020)" : {
         "desc" : "Date the Study started.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "2",
         "name" : "Study Date",
         "usage" : "M"
      },
      "(0010,0010)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Patient's full name.",
         "name" : "Patient's Name",
         "req" : "2",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0088,0140)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "req" : "3",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a032)" : {
         "mod_tables" : [
            "table_C.17-6"
         ],
         "desc" : [
            "The date and time on which this Content Item was completed. For the purpose of recording measurements or logging events, completion time is defined as the time of data acquisition of the measurement, or the time of occurrence of the event.",
            "Required if the date and time are different from Content Date (0008,0023) and Content Time (0008,0033) or Observation DateTime (0040,A032) defined in higher items. May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "When Content Items are copied into successor reports, Content Date (0008,0023) and Content Time (0008,0033) of the new report are likely to be different than the date and time of the original observation. Therefore this attribute may need to be included in any copied Content Items to satisfy the condition."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Observation DateTime",
         "usage" : "M",
         "req" : "1C",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0088,0130)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "name" : "Storage Media File-Set ID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "req" : "2C",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
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
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Referenced Digital Signature Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,08ea)" : {
         "req" : "1",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Encrypted Content",
         "usage" : "M",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Retrieve URI",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,a730)[<0>](0070,031a)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Fiducial UID",
         "req" : "3",
         "desc" : [
            "The globally unique identifier for this fiducial item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The fiducial UID can be used to associate this set of graphics with other Content Items."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,0120)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
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
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
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
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Pixel Padding Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0020,000e)" : {
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "1",
         "name" : "Series Instance UID",
         "usage" : "M"
      },
      "(0008,0080)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "name" : "Institution Name",
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1202)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ]
      },
      "(0040,a730)[<0>](0070,0023)" : {
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.18.9.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for Enumerated Values."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "name" : "Graphic Type",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1201)" : {
         "name" : "Red Palette Color Lookup Table Data",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
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
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "req" : "3",
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
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a300)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "desc" : [
            "This is the value of the Content Item.",
            "Shall consist of a Sequence of Items conveying the measured value(s), which represent integers or real numbers and units of measurement.",
            "Zero or one Item shall be included in this sequence."
         ],
         "name" : "Measured Value Sequence",
         "req" : "2",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0008,1110)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Referenced Study Sequence",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "A sequence that provides reference to a Study SOP Class/Instance pair.",
            "One or more Items are permitted in this Sequence.",
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
            "table_C.7-3"
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "name" : "Series Instance UID",
         "req" : "1",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "name" : "Modifying System",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Certified Timestamp",
         "req" : "3",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "req" : "3",
         "usage" : "M",
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
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0040,a730)[<0>](0040,a121)" : {
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "name" : "Date",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,a078)[<0>](0008,1010)" : {
         "desc" : [
            "Name of the device observer for this document instance.",
            "Required if Observer Type value is DEV."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Station Name",
         "req" : "2C",
         "usage" : "M"
      },
      "(0008,114a)" : {
         "desc" : [
            "Sequence specifying SOP Instances significantly related to the current SOP Instance. Such referenced Instances may include equivalent documents or renderings of this document.",
            "One or more Items shall be included in this sequence.",
            [
               "Required if the identity of a CDA Document equivalent to the current SOP Instance is known at the time of creation of this SOP Instance (see ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.17.2.6",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "). May be present otherwise."
            ]
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Referenced Instance Sequence",
         "usage" : "M",
         "req" : "1C"
      },
      "(0012,0081)" : {
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1101)" : {
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
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "usage" : "M"
      },
      "(0008,1030)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Description",
         "req" : "3",
         "usage" : "M",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,0024)[<0>](0040,0036)" : {
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,001b)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Original Specialized SOP Class UID",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,a078)[<0>](0018,1002)" : {
         "name" : "Device UID",
         "req" : "1C",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Unique identifier of device observer.",
            "Required if Observer Type value is DEV."
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Signature",
         "req" : "1"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "name" : "Signature",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Storage Media File-Set ID",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1111)" : {
         "module" : "SR Document Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced Performed Procedure Step Sequence",
         "req" : "2",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance for which the Series is created.",
            "Zero or one item shall be included in this sequence.",
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
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "The Performed Procedure Step referred to by this Attribute is the Step during which this Document is generated."
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
                                    "If this Document is generated during the same Performed Procedure Step as the evidence in the current interpretation procedure, this attribute may contain reference to that Performed Procedure Step."
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
                                    "This Attribute is not used to convey reference to the evidence in the current interpretation procedure. See Current Requested Procedure Evidence Sequence (0040,A375)."
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
                                 "content" : [
                                    "This Sequence may be sent zero length if the Performed Procedure Step is unknown."
                                 ]
                              },
                              "\n                    "
                           ]
                        },
                        "\n                  "
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-1"
         ]
      },
      "(4ffe,0001)" : {
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "name" : "Digital Signature UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0008,0096)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "name" : "Referring Physician Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Referenced Frame Number",
         "req" : "1C",
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
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0040,a07a)[<0>](0040,a080)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            [
               "Participant's role with respect to the clinical content of this document. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.2.5"
                  }
               },
               "."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "SOURCE",
                     "Equipment that contributed to the content"
                  ],
                  [
                     "ENT",
                     "Data enterer (e.g., transcriptionist)"
                  ],
                  [
                     "ATTEST",
                     "Attestor"
                  ]
               ],
               "title" : "Defined Terms:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "In HL7 Structured Documents, the participation comparable to Attestor is the \"Authenticator\"."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "1",
         "name" : "Participation Type",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0018,1050)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Spatial Resolution",
         "usage" : "M",
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "name" : "Software Versions",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "1C"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "mod_tables" : [
            "table_C.17-2",
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
         ],
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "req" : "3",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0010,21b0)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Additional Patient History",
         "req" : "3",
         "desc" : "Additional information about the Patient's medical history.",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Time of Last Calibration",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a30a)" : {
         "desc" : [
            "Numeric measurement value.",
            "Only a single value shall be present."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "name" : "Numeric Value",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,a730)[<0>](0040,a504)[<1>](0040,db00)" : {
         "name" : "Template Identifier",
         "usage" : "M",
         "req" : "1",
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "desc" : "Template identifier."
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
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
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a301)" : {
         "desc" : [
            "Qualification of Numeric Value in Measured Value Sequence, or reason for absence of Measured Value Sequence Item.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "name" : "Numeric Value Qualifier Code Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0005)" : {
         "name" : "Specific Character Set",
         "usage" : "M",
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Document",
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
                     "linkend" : "sect_C.12.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
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
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0040,a07a)[<0>](0008,1090)" : {
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "req" : "1C",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Model Name of the device observer.",
            "Required if Observer Type value is DEV."
         ]
      },
      "(0008,0030)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Study Time",
         "usage" : "M",
         "req" : "2",
         "desc" : "Time the Study started.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "An identification number or code used to identify the patient.",
         "name" : "Patient ID",
         "usage" : "M",
         "req" : "1",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "usage" : "U"
      },
      "(0040,a730)[<0>](0040,a130)" : {
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.18.7.1.1"
               }
            },
            " for Enumerated Values."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Temporal Range Type",
         "req" : "1"
      },
      "(0012,0072)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         "name" : "Clinical Trial Series Description",
         "usage" : "U",
         "req" : "3",
         "module" : "Clinical Trial Series",
         "entity" : "Series"
      },
      "(0040,a078)[<0>](0040,1101)" : {
         "req" : "2C",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Coded identifier of person observer.",
            "Zero or one Item shall be included in this sequence.",
            "Required if Observer Type value is PSN."
         ]
      },
      "(0010,1030)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Weight of the Patient, in kilograms.",
         "usage" : "U",
         "name" : "Patient's Weight",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Contribution DateTime",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,a496)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Indicates whether this SR Document is intended to be regarded as a preliminary or final report.",
            {
               "list" : [
                  [
                     "PRELIMINARY",
                     "This report precedes the final report and may contain limited information; it may be time sensitive, and it is not expected to contain all the reportable findings."
                  ],
                  [
                     "FINAL",
                     "This report is the definitive means of communicating the results of a procedure."
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
                     "content" : [
                        "The definitions of the Enumerated Values are derived from the ACR Practice Guideline for Communication of Diagnostic Imaging Findings, Revised 2005."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Preliminary Flag",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0010,1000)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Other Patient IDs",
         "req" : "3",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "req" : "3",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0038,0010)" : {
         "name" : "Admission ID",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the visit as assigned by the healthcare provider"
      },
      "(0040,a730)[<0>](0040,a040)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "name" : "Value Type",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "The type of the value encoded in this Content Item.",
            {
               "list" : [
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "NUM",
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
                     "DATETIME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "PNAME",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ],
                  [
                     "WAVEFORM",
                     null
                  ],
                  [
                     "SCOORD",
                     null
                  ],
                  [
                     "SCOORD3D",
                     null
                  ],
                  [
                     "TCOORD",
                     null
                  ],
                  [
                     "CONTAINER",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.17.3.2.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1103)" : {
         "req" : "1C",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
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
         ]
      },
      "(0012,0071)" : {
         "req" : "3",
         "name" : "Clinical Trial Series ID",
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0010,2293)" : {
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Breed Code Sequence",
         "req" : "2C",
         "usage" : "M"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ]
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
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0012,0021)" : {
         "req" : "2",
         "name" : "Clinical Trial Protocol Name",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The name of the clinical trial protocol. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.3"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0010,2202)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Species Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1060)" : {
         "name" : "Name of Physician(s) Reading Study",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Names of the physician(s) reading the Study."
      },
      "(0040,a073)[<0>](0040,a075)" : {
         "desc" : "The person authorized by the Verifying Organization (0040,A027) to verify documents of this type and who accepts responsibility for the content of this document.",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "1",
         "name" : "Verifying Observer Name",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Operators' Name",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,001a)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a730)[<0>](0040,a124)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "name" : "UID",
         "req" : "1C",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0010,0030)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient's Birth Date",
         "usage" : "M",
         "req" : "2",
         "desc" : "Birth date of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Identifier Type Code",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,1090)" : [
         {
            "usage" : "M",
            "name" : "Manufacturer's Model Name",
            "req" : "3",
            "entity" : "Equipment",
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances."
         },
         {
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Manufacturer's Model Name",
            "req" : "1",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8b"
            ]
         }
      ],
      "(0010,0040)" : {
         "desc" : [
            "Sex of the named patient.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient's Sex",
         "req" : "2"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,a370)[<0>](0008,0050)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "A departmental IS generated number that identifies the order for the Study.",
         "name" : "Accession Number",
         "usage" : "M",
         "req" : "2",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "SOP Authorization Comment",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
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
                     "el" : "para"
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
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0038,0064)" : {
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
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Signature",
         "usage" : "M"
      },
      "(0040,a493)" : {
         "name" : "Verification Flag",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Indicates whether this SR Document is Verified.",
            {
               "list" : [
                  [
                     "UNVERIFIED",
                     "Not attested to."
                  ],
                  [
                     "VERIFIED",
                     "Attested to by a Verifying Observer Name (0040,A075) who is accountable for its content."
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "A value of \"VERIFIED\" shall be used only when the value of Completion Flag (0040,A491) is \"COMPLETE\".",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The intent of this specification is that the \"prevailing final version\" of an SR Document is the version having the most recent Verification DateTime (0040,A030), Verification Flag (0040,A493) of VERIFIED and Preliminary Flag (0040,A496) of FINAL."
                     ]
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,1084)" : {
         "name" : "Admitting Diagnoses Code Sequence",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0012,0082)" : {
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "usage" : "U",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "HL7 Instance Identifier",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Digital Signature DateTime",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,a370)[<0>](0008,1110)[<1>](0008,1155)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ]
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "name" : "Data Elements Signed",
         "usage" : "M",
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3"
      },
      "(0008,1032)" : {
         "req" : "3",
         "name" : "Procedure Code Sequence",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,a730)[<0>](0040,db73)" : {
         "mod_tables" : [
            "table_C.17-6"
         ],
         "desc" : [
            "An ordered set of one or more integers that uniquely identifies the Target Content Item of the relationship.",
            "The root Content Item is referenced by a single value of 1.",
            "Each subsequent integer represents an ordinal position of a Content Item in the Content Sequence (0040,A730) in which it belongs. The Referenced Content Item Identifier is the set of these ordinal positions along the by-value relationship path. The number of values in this Multi-Value Attribute is exactly the number of relationships traversed in the SR content tree plus one.",
            {
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
                                 "content" : [
                                    "See ",
                                    {
                                       "attrs" : {
                                          "linkend" : "sect_C.17.3.2.5",
                                          "xrefstyle" : "select: label"
                                       },
                                       "el" : "xref"
                                    },
                                    "."
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
                                    "Content Items are ordered in a Content Sequence starting from 1 as defined in VR of SQ (see ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
                                       }
                                    },
                                    ")."
                                 ],
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
               ],
               "el" : "note"
            },
            "Required if the Target Content Item is denoted by-reference, i.e., the Document Relationship Macro and Document Content Macro are not included."
         ],
         "req" : "1C",
         "name" : "Referenced Content Item Identifier",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0040,a375)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "1C",
         "name" : "Current Requested Procedure Evidence Sequence",
         "usage" : "M",
         "desc" : [
            "Full set of Composite SOP Instances, of which the creator is aware, which were created to satisfy the current Requested Procedure(s) for which this SR Document is generated or that are referenced in the content tree.",
            "One or more Items shall be included in this sequence.",
            "Required if the creator is aware of Composite Objects acquired in order to satisfy the Requested Procedure(s) for which the SR Document is or if instances are referenced in the content tree. May be present otherwise.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.17.2.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0100)" : {
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
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1",
         "name" : "Bits Allocated",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Manufacturer",
         "req" : "1",
         "usage" : "M",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "mod_tables" : [
            "table_C.17-2",
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
         ],
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "module" : "SR Document General"
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
         "entity" : "Study",
         "req" : "3",
         "name" : "Requesting Service Code Sequence",
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
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
         ]
      },
      "(0040,a525)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study"
      },
      "(0012,0050)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "name" : "Clinical Trial Time Point ID",
         "usage" : "U",
         "req" : "2",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0012,0031)" : {
         "req" : "2",
         "name" : "Clinical Trial Site Name",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.5",
                  "xrefstyle" : "select: label"
               }
            }
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0062,000b)" : {
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Document",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "desc" : "Identifies the segments to which the reference applies identified by Segment Number (0062,0004). Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
      },
      "(0008,1062)[<0>](0008,0082)" : {
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
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,a370)[<0>](0032,1064)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Requested Procedure Code Sequence",
         "usage" : "M",
         "req" : "2",
         "desc" : "A sequence that conveys the requested procedure. Zero or one Item shall be included in this sequence.",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0010,2298)" : {
         "usage" : "M",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.2"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Coding Scheme Name",
         "req" : "3"
      },
      "(0008,0201)" : {
         "req" : "3",
         "name" : "Timezone Offset From UTC",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
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
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5"
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
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
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ]
      },
      "(0040,a078)[<0>](0008,1090)" : {
         "desc" : [
            "Model Name of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "1C",
         "name" : "Manufacturer's Model Name",
         "usage" : "M"
      },
      "(0010,1020)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters.",
         "name" : "Patient's Size",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0008,1040)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "req" : "3",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "module" : "SR Document Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.17-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "3",
         "name" : "Storage Media File-Set UID",
         "usage" : "M"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
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
                  "\n                    "
               ],
               "el" : "note"
            }
         ]
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "M",
         "name" : "MAC ID Number",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA)."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Instance Creator UID",
         "usage" : "M",
         "req" : "3",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0030)" : {
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
         "name" : "Clinical Trial Site ID",
         "usage" : "U",
         "req" : "2",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1102)" : {
         "name" : "Green Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
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
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](7fe0,0010)" : {
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
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Pixel Data",
         "req" : "1C"
      },
      "(0010,1001)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other names used to identify the patient.",
         "req" : "3",
         "name" : "Other Patient Names",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,a171)" : {
         "entity" : "Document",
         "module" : "SR Document Content",
         "name" : "Observation UID",
         "usage" : "M",
         "req" : "3",
         "desc" : "Unique identifier for the observation Content Item (and its subsidiary Content Items, if any). The UID represents the semantic content of the observation; an encoding of the same observation with the same context into another representation (e.g., a CDA Entry) may use the same UID.",
         "mod_tables" : [
            "table_C.17-6"
         ]
      },
      "(0010,0021)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID",
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
         ]
      },
      "(0012,0062)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient Identity Removed",
         "req" : "3",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "usage" : "M",
         "name" : "Signature",
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "name" : "Digital Signature UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0010,2292)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "usage" : "M",
         "name" : "Patient Breed Description",
         "req" : "2C",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0020,0013)" : [
         {
            "module" : "SR Document General",
            "entity" : "Document",
            "usage" : "M",
            "name" : "Instance Number",
            "req" : "1",
            "desc" : "A number that identifies the SR Document.",
            "mod_tables" : [
               "table_C.17-2"
            ]
         },
         {
            "module" : "SOP Common",
            "entity" : "Document",
            "name" : "Instance Number",
            "req" : "3",
            "usage" : "M",
            "desc" : "A number that identifies this Composite object instance.",
            "mod_tables" : [
               "table_C.12-1"
            ]
         }
      ],
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a370)[<0>](0008,1110)[<1>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "name" : "Referenced Digital Signature Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0010,0032)" : {
         "req" : "3",
         "name" : "Patient's Birth Time",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth time of the Patient."
      },
      "(0040,a07a)[<0>](0018,1002)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Device UID",
         "req" : "1C",
         "desc" : [
            "Unique identifier of device observer.",
            "Required if Observer Type value is DEV."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)" : {
         "req" : "3",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "desc" : [
            "Reference to a Softcopy Presentation State SOP Class/SOP Instance pair.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0020,9172)" : {
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
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0040,e011)" : {
         "req" : "3",
         "name" : "Retrieve Location UID",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network."
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0040,a370)[<0>](0040,1002)" : {
         "desc" : "Reason for requesting this procedure.",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "3",
         "name" : "Reason for the Requested Procedure",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a160)" : {
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is TEXT.",
            "Text data that is unformatted and whose manner of display is implementation dependent.",
            "The text value may contain spaces, as well as multiple lines separated by CR LF, but otherwise no format control characters (such as horizontal or vertical tab and form feed) shall be present, even if permitted by the Value Representation of UT.",
            "The text shall be interpreted as specified by Specific Character Set (0008,0005) if present in the SOP Common Module.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The text may contain single or multi-byte characters and use code extension techniques as described in ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetdoc" : "PS3.5",
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.5"
                           }
                        },
                        " if permitted by the values of Specific Character Set (0008,0005)."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Text Value",
         "req" : "1C"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "req" : "3",
         "name" : "Storage Media File-Set UID",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a07a)[<0>](0040,a082)" : {
         "name" : "Participation DateTime",
         "req" : "2",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "DateTime of participation with respect to the clinical content of this document."
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)" : {
         "desc" : [
            "This Icon Image is representative of the Image.",
            "Only a single Item is permitted in this Sequence.",
            "The Icon Image may be no greater than 128 rows by 128 columns."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Icon Image Sequence",
         "req" : "3"
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Ethnic Group",
         "req" : "3"
      },
      "(0040,a492)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "Explanation of the value sent in Completion Flag (0040,A491).",
         "name" : "Completion Flag Description",
         "req" : "3",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0088,0140)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "3",
         "name" : "Storage Media File-Set UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0010,0020)" : {
         "req" : "2",
         "name" : "Patient ID",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Primary hospital identification number or code for the patient."
      },
      "(0040,a370)[<0>](0032,1060)" : {
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Requested Procedure Description",
         "req" : "2",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)[<2>](0008,1150)" : {
         "entity" : "Document",
         "module" : "SR Document Content",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ]
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "req" : "3"
      },
      "(0018,1030)" : {
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : [
            "Description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This may represent the type of analysis used in creation of the SR SOP Instances."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "name" : "Protocol Name",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "module" : "SR Document Series"
      },
      "(0040,a078)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Institution Name",
         "usage" : "M",
         "req" : "2"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0040,a372)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "A Sequence that conveys the codes of the performed procedures pertaining to this SOP Instance. Zero or more Items shall be included in this sequence.",
         "usage" : "M",
         "name" : "Performed Procedure Code Sequence",
         "req" : "2",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
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
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. Only a single value shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "req" : "1C"
      },
      "(0040,a073)[<0>](0040,a030)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Verification DateTime",
         "req" : "1",
         "usage" : "M",
         "desc" : "Date and Time of verification by the Verifying Observer Name (0040,A075).",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
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
               "el" : "note",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "MAC Algorithm",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0016)" : {
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "req" : "1",
         "name" : "SOP Class UID",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0048,0301)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.6-1"
         ],
         "desc" : [
            [
               "For a referenced multi-frame image, specifies whether the Graphic Data (0070,0022) values are to be interpreted relative to the individual frame pixel origins, or relative to the Total Pixel Matrix origin (see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.12.4.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               ")."
            ],
            "Required if the value of Referenced SOP Class UID (0008,1150) of the referenced image is 1.2.840.10008.5.1.4.1.1.77.1.6 (VL Whole Slide Microscopy Image). May be present otherwise.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "FRAME",
                     "relative to individual frame"
                  ],
                  [
                     "VOLUME",
                     "relative to Total Image Matrix"
                  ]
               ],
               "type" : "variablelist"
            },
            "If not present, Graphic Data values are defined relative to the frame pixel origin."
         ],
         "usage" : "M",
         "name" : "Pixel Origin Interpretation",
         "req" : "1C",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0034)" : {
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
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "name" : "Pixel Aspect Ratio",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0040,a010)" : {
         "mod_tables" : [
            "table_C.17-6"
         ],
         "desc" : [
            "The type of relationship between the (enclosing) Source Content Item and the Target Content Item.",
            "IODs specify additional constraints on Relationships (including lists of Enumerated Values).",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "CONTAINS",
                     null
                  ],
                  [
                     "HAS PROPERTIES",
                     null
                  ],
                  [
                     "HAS OBS CONTEXT",
                     null
                  ],
                  [
                     "HAS ACQ CONTEXT",
                     null
                  ],
                  [
                     "INFERRED FROM",
                     null
                  ],
                  [
                     "SELECTED FROM",
                     null
                  ],
                  [
                     "HAS CONCEPT MOD",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.3.2.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "name" : "Relationship Type",
         "usage" : "M",
         "req" : "1",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0040,a370)[<0>](0040,2017)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Filler Order Number/Imaging Service Request",
         "req" : "2",
         "desc" : "The order number assigned to the Imaging Service Request by the party filling the order.",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0018,1020)" : [
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
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "entity" : "Equipment",
            "name" : "Software Versions",
            "usage" : "M",
            "req" : "3"
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
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
            "usage" : "M",
            "name" : "Software Versions",
            "req" : "1",
            "entity" : "Equipment",
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0040,a730)[<0>](0040,a120)" : {
         "name" : "DateTime",
         "usage" : "M",
         "req" : "1C",
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Retrieve Location UID",
         "usage" : "M",
         "req" : "3",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a525)[<0>](0008,1115)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Referenced Series Sequence",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ]
      },
      "(0008,1080)" : {
         "req" : "3",
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the admitting diagnosis (diagnoses)"
      },
      "(0040,a385)" : {
         "desc" : [
            "Other Composite SOP Instances that are considered to be pertinent evidence by the creator of this SR Document. This evidence must have been acquired in order to satisfy Requested Procedures other than the one(s) for which this SR Document is generated.",
            "One or more Items shall be included in this sequence.",
            "Required if pertinent evidence from other Requested Procedures needs to be recorded.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.17.2.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Pertinent Other Evidence Sequence",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0040,a123)" : {
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1C",
         "name" : "Person Name",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0032)" : {
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
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,a078)[<0>](0040,a123)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Name of the person observer for this document Instance.",
            "Required if Observer Type value is PSN."
         ],
         "name" : "Person Name",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0088,0130)" : {
         "req" : "3",
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside."
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0040,a078)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Manufacturer of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "name" : "Manufacturer",
         "req" : "1C",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a360)[<0>](0020,000d)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Study Instance UID",
         "req" : "1",
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
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
               "content" : [
                  "\n                      ",
                  {
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
         "entity" : "Document",
         "usage" : "M",
         "name" : "Certified Timestamp Type",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1203)" : {
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
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1C",
         "name" : "Blue Palette Color Lookup Table Data",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
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
                              "xrefstyle" : "select: labelnumber",
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
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "MAC Algorithm",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Spatial Resolution",
         "req" : "3",
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "module" : "General Study",
         "entity" : "Study",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "name" : "Consent for Distribution Flag",
         "req" : "1",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
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
               "title" : "Enumerated Values:",
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
      "(0040,a375)[<0>](0008,1115)[<1>](0008,0054)" : {
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "req" : "3",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network."
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0020)" : {
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "req" : "1",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "Identifier for the noted protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.2"
               }
            },
            "."
         ]
      },
      "(0040,a730)[<0>](0040,a050)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "desc" : [
            "This flag specifies for a CONTAINER whether or not its contained Content Items are logically linked in a continuous textual flow, or are separate items.",
            {
               "list" : [
                  [
                     "SEPARATE",
                     null
                  ],
                  [
                     "CONTINUOUS",
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
                     "linkend" : "sect_C.18.8.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "name" : "Continuity of Content",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0008,0031)" : {
         "name" : "Series Time",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "module" : "SR Document Series",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : "Time the Series started."
      },
      "(0008,0050)" : {
         "entity" : "Study",
         "module" : "General Study",
         "req" : "2",
         "name" : "Accession Number",
         "usage" : "M",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,a078)" : {
         "name" : "Author Observer Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "The person or device that created the clinical content of this document. This attribute sets the default Observer Context for the root of the content tree.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0008,103e)" : {
         "entity" : "Series",
         "module" : "SR Document Series",
         "name" : "Series Description",
         "req" : "3",
         "usage" : "M",
         "desc" : "Description of the Series",
         "mod_tables" : [
            "table_C.17-1"
         ]
      },
      "(0040,a375)[<0>](0008,1115)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ]
      },
      "(0040,a385)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ]
      },
      "(0018,a001)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Contributing Equipment Sequence",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "desc" : [
            "Reference to a Real World Value Mapping SOP Class/SOP Instance pair.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Referenced Real World Value Mapping Instance Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0040,a730)[<0>](0040,a168)" : {
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.2-1"
         ],
         "desc" : [
            "This is the value of the Content Item.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0032)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ]
      },
      "(0008,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "name" : "Instance Creation Time",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0040,a370)[<0>](0040,1001)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Requested Procedure ID",
         "usage" : "M",
         "req" : "2",
         "desc" : "Identifier of the related Requested Procedure",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0008,0060)" : {
         "desc" : [
            "Modality type.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SR",
                     "SR Document"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.17-1"
         ],
         "entity" : "Series",
         "module" : "SR Document Series",
         "req" : "1",
         "name" : "Modality",
         "usage" : "M"
      },
      "(0008,0081)" : {
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,a07a)" : {
         "desc" : [
            "Persons or devices related to the clinical content of this document.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Participant Sequence",
         "req" : "3"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1160)" : {
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute may be multi-valued."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "req" : "1C"
      },
      "(0008,1049)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "name" : "Physician(s) of Record Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0020,0011)" : {
         "name" : "Series Number",
         "req" : "1",
         "usage" : "M",
         "module" : "SR Document Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : [
            "A number that identifies the Series.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "No SR-specific semantics are specified."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0008,0070)" : [
         {
            "name" : "Manufacturer",
            "req" : "2",
            "usage" : "M",
            "entity" : "Equipment",
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "desc" : "Manufacturer of the equipment that produced the composite instances."
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "req" : "1",
            "name" : "Manufacturer",
            "usage" : "M",
            "entity" : "Equipment",
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0040,a730)[<0>](0040,a504)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "desc" : [
            "Template that describes the content of this Content Item and its subsidiary Content Items.",
            "Only a single Item shall be included in this sequence.",
            [
               "Required if a template was used to define the content of this Item, and the template consists of a single CONTAINER with nested content, and it is the outermost invocation of a set of nested templates that start with the same CONTAINER (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.18.8.1.2"
                  },
                  "el" : "xref"
               },
               ")."
            ]
         ],
         "name" : "Content Template Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,0054)" : {
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network."
      },
      "(0010,1010)" : {
         "req" : "3",
         "name" : "Patient's Age",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Age of the Patient."
      },
      "(0040,a07a)[<0>](0040,a123)" : {
         "desc" : [
            "Name of the person observer for this document Instance.",
            "Required if Observer Type value is PSN."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a122)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "name" : "Time",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(fffa,fffa)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "name" : "Digital Signatures Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "module" : "SOP Common"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
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
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "MAC",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Coding Scheme Designator",
         "req" : "1"
      },
      "(0020,0010)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2",
         "name" : "Study ID",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0039)" : {
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
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance."
      },
      "(0008,0021)" : {
         "usage" : "M",
         "name" : "Series Date",
         "req" : "3",
         "entity" : "Series",
         "module" : "SR Document Series",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : "Date the Series started."
      },
      "(0038,0014)[<0>](0040,0033)" : {
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
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "req" : "1C"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0028,0303)" : {
         "usage" : "M",
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         ]
      },
      "(0008,0012)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "name" : "Instance Creation Date",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0400,0500)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "Encrypted Attributes Sequence",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this sequence.",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0102)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
            {
               "attrs" : {
                  "targetptr" : "PS3.5",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.5"
               },
               "el" : "olink"
            },
            " for further explanation."
         ],
         "usage" : "M",
         "name" : "High Bit",
         "req" : "1",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0038,0062)" : {
         "usage" : "U",
         "name" : "Service Episode Description",
         "req" : "3",
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the type of service episode."
      },
      "(0400,0561)" : {
         "usage" : "M",
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "req" : "3",
         "name" : "Identifier Type Code",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0020,000d)" : {
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Study Instance UID",
         "req" : "1"
      },
      "(0040,a730)[<0>](0008,1199)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0008,1048)" : {
         "name" : "Physician(s) of Record",
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
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
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0106)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Smallest Image Pixel Value",
         "req" : "3",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ]
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0033)" : {
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
            "table_C.17-2",
            "table_10-17"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "entity" : "Document",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "3",
         "name" : "Storage Media File-Set ID",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Document",
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,2000)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
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
         "usage" : "M",
         "name" : "ICC Profile",
         "req" : "3",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)[<2>](0008,1155)" : {
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0006)" : {
         "desc" : [
            "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "name" : "Planar Configuration",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,a491)" : {
         "desc" : [
            [
               "The estimated degree of completeness of this SR Document. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.2.7"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PARTIAL",
                     "Partial content."
                  ],
                  [
                     "COMPLETE",
                     "Complete content."
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Completion Flag",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,a07a)[<0>](0040,1101)" : {
         "desc" : [
            "Coded identifier of person observer.",
            "Zero or one Item shall be included in this sequence.",
            "Required if Observer Type value is PSN."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "2C",
         "name" : "Person Identification Code Sequence",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(0040,a07c)[<0>](0008,0082)" : {
         "desc" : [
            "Coded identifier of Custodial Institution or Organization.",
            "Zero or one Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "req" : "2"
      },
      "(0100,0426)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "name" : "Authorization Equipment Certification Number",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "name" : "Clinical Trial Protocol ID",
         "req" : "1C",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ]
      },
      "(0010,2203)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
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
         "name" : "Patient's Sex Neutered",
         "req" : "2C",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0004)" : {
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
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1",
         "name" : "Photometric Interpretation",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0101)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
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
         ],
         "req" : "1",
         "name" : "Bits Stored",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "MAC",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M",
         "req" : "3",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
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
                     "el" : "para",
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "req" : "1",
         "name" : "Data Elements Signed",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
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
         "entity" : "Document",
         "name" : "Modified Attributes Sequence",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0040,2016)" : {
         "req" : "2",
         "name" : "Placer Order Number/Imaging Service Request",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "The order number assigned to the Imaging Service Request by the party placing the order."
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0002)" : {
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
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "name" : "Samples per Pixel",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,a078)[<0>](0040,a084)" : {
         "name" : "Observer Type",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : {
            "title" : "Enumerated Values:",
            "list" : [
               [
                  "PSN",
                  "Person"
               ],
               [
                  "DEV",
                  "Device"
               ]
            ],
            "type" : "variablelist"
         }
      },
      "(0012,0051)" : {
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "req" : "3",
         "name" : "Clinical Trial Time Point Description",
         "usage" : "U",
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "usage" : "M",
         "name" : "Coding Scheme Responsible Organization",
         "req" : "3",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information."
      },
      "(0040,a07a)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "usage" : "M",
         "req" : "2C",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Name of the device observer for this document instance.",
            "Required if Observer Type value is DEV."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "module" : "SR Document Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-1",
            "table_10-11"
         ]
      },
      "(0010,2201)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C",
         "name" : "Patient Species Description",
         "usage" : "M",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0090)" : {
         "req" : "2",
         "name" : "Referring Physician's Name",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Name of the patient's referring physician"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "name" : "MAC Algorithm",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a370)[<0>](0040,0027)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Order Filler Identifier Sequence",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Filler Order Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0100,0420)" : {
         "name" : "SOP Authorization DateTime",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO."
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0011)" : {
         "desc" : "Number of columns in the image",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Columns",
         "req" : "1"
      },
      "(0040,a078)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "req" : "2",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "name" : "Data Elements Signed",
         "usage" : "M",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            {
               "el" : "note",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "MAC Algorithm",
         "req" : "1"
      },
      "(0040,a525)" : {
         "req" : "1C",
         "name" : "Identical Documents Sequence",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Duplicates of this document, stored with different SOP Instance UIDs.",
            "One or more Items shall be included in this sequence.",
            "Required if this document is stored with different SOP Instance UIDs in one or more other Studies.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.17.2.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ]
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Coding Scheme Identification Sequence",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,0023)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Content Date",
         "req" : "1",
         "usage" : "M",
         "desc" : "The date the document content creation started.",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0040,a375)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study",
         "usage" : "M",
         "name" : "Study Instance UID",
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document General"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0040,a385)[<0>](0020,000d)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "1",
         "name" : "Study Instance UID",
         "usage" : "M",
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General"
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "entity" : "Patient",
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
         ]
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,0033)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "The time the document content creation started.",
         "usage" : "M",
         "name" : "Content Time",
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0008,0015)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            ")."
         ],
         "usage" : "M",
         "name" : "Instance Coercion DateTime",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "name" : "Breed Registration Number",
         "req" : "1",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Identification number of an animal within the registry."
      },
      "(0018,1000)" : [
         {
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
            "mod_tables" : [
               "table_C.7-8"
            ],
            "entity" : "Equipment",
            "module" : "General Equipment",
            "name" : "Device Serial Number",
            "usage" : "M",
            "req" : "3"
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "name" : "Device Serial Number",
            "req" : "1",
            "usage" : "M",
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment"
         }
      ],
      "(0040,a730)[<0>](0040,a13a)" : {
         "desc" : [
            "Specifies temporal points for reference by absolute time.",
            "Required if Referenced Sample Positions (0040,A132) and Referenced Time Offsets (0040,A138) are not present."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "name" : "Referenced DateTime",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "name" : "Signature",
         "usage" : "M",
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document"
      },
      "(0012,0060)" : {
         "req" : "2",
         "name" : "Clinical Trial Coordinating Center Name",
         "usage" : "U",
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "name" : "Distribution Type",
         "req" : "1C",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "entity" : "Study"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Digital Signature UID",
         "usage" : "M",
         "req" : "1",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Data Elements Signed",
         "usage" : "M",
         "req" : "1",
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
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
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
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "MAC Algorithm",
         "usage" : "M",
         "req" : "1"
      },
      "(0012,0083)" : {
         "name" : "Consent for Clinical Trial Use Sequence",
         "usage" : "U",
         "req" : "3",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
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
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0040,a360)[<0>](0008,1115)" : {
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "1",
         "name" : "Referenced Series Sequence",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0008,0051)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,0054)" : {
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0010,2297)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Person",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)" : {
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0040,a0b0)" : {
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced Waveform Channels",
         "req" : "1C",
         "desc" : [
            [
               "List of channels in Waveform to which the reference applies. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.18.5.1.1"
                  },
                  "el" : "xref"
               }
            ],
            "Required if the Referenced SOP Instance is a Waveform that contains multiple Channels and not all Channels in the Waveform are referenced."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1"
         ]
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0040,e011)" : {
         "name" : "Retrieve Location UID",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network."
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located."
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "3",
         "name" : "Retrieve Location UID",
         "usage" : "M",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a073)[<0>](0040,a027)" : {
         "usage" : "M",
         "name" : "Verifying Organization",
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "Organization to which the Verifying Observer Name (0040,A075) is accountable in the current interpretation procedure."
      },
      "(0040,a370)[<0>](0040,100a)" : {
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "req" : "3",
         "name" : "Reason for Requested Procedure Code Sequence",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a504)[<1>](0008,0105)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "desc" : [
            [
               "Mapping Resource that defines the template. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.4"
                  }
               },
               "."
            ],
            {
               "list" : [
                  [
                     "DCMR",
                     "DICOM Content Mapping Resource"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "usage" : "M",
         "name" : "Mapping Resource",
         "req" : "1",
         "entity" : "Document",
         "module" : "SR Document Content"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(0040,a730)[<0>](0040,a138)" : {
         "name" : "Referenced Time Offsets",
         "req" : "1C",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "desc" : [
            "Specifies temporal points for reference by number of seconds after start of data.",
            "Required if Referenced Sample Positions (0040,A132) and Referenced DateTime (0040,A13A) are not present."
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "name" : "Device Serial Number",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document"
      },
      "(0038,0014)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Issuer of Admission ID Sequence",
         "req" : "3"
      },
      "(0008,1120)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Referenced Patient Sequence",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3",
         "name" : "Person's Address",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0012,0010)" : {
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Sponsor Name",
         "req" : "1",
         "usage" : "U"
      },
      "(0040,a370)[<0>](0020,000d)" : {
         "entity" : "Document",
         "module" : "SR Document General",
         "name" : "Study Instance UID",
         "usage" : "M",
         "req" : "1",
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "name" : "Contribution Description",
         "req" : "3",
         "usage" : "M",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,000e)" : {
         "desc" : [
            "Unique identifier of the Series.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "No SR-specific semantics are specified."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-1"
         ],
         "module" : "SR Document Series",
         "entity" : "Series",
         "req" : "1",
         "name" : "Series Instance UID",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a132)" : {
         "desc" : [
            "List of samples within a multiplex group specifying temporal points of the referenced data. Position of first sample is 1.",
            "Required if the Referenced SOP Instance is a Waveform and Referenced Time Offsets (0040,A138) and Referenced DateTime (0040,A13A) are not present.",
            "May be used only if Referenced Channels (0040,A0B0) refers to channels within a single multiplex group."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced Sample Positions",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0010)" : {
         "req" : "1",
         "name" : "Rows",
         "usage" : "M",
         "module" : "SR Document Content",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : "Number of rows in the image."
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Attribute Modification DateTime",
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Source of Previous Values",
         "req" : "2",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "name" : "Type of Patient ID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
               "title" : "Defined Terms:",
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
         ]
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "req" : "1C",
         "module" : "SR Document General",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,103f)" : {
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Series Description Code Sequence",
         "req" : "3",
         "usage" : "M",
         "module" : "SR Document Series",
         "entity" : "Series"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0020,000e)" : {
         "name" : "Series Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s)."
      },
      "(0010,2299)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Organization",
         "req" : "2C",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      }
   }
}