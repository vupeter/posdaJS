var data = {
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ],
   "tags" : {
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "entity" : "",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Attribute Modification DateTime",
         "entity" : "",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0100,0424)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "SOP Authorization Comment",
         "entity" : ""
      },
      "(2000,0020)" : {
         "mod_tables" : [
            "table_C.13-1"
         ],
         "desc" : null,
         "name" : "Print Priority",
         "entity" : "",
         "req" : [
            "Specifies the priority of the print job.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
         "usage" : "Contains Film Session presentations information",
         "module" : "Basic Film Session Presentation"
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "name" : "Coding Scheme Registry",
         "entity" : "",
         "req" : "1C",
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(4ffe,0001)" : {
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "entity" : "",
         "name" : "MAC Parameters Sequence",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0020,9172)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "entity" : "",
         "name" : "Conversion Source Attributes Sequence"
      },
      "(0400,0500)" : {
         "usage" : "Contains SOP Common information",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.4.1"
                  }
               },
               "."
            ]
         ],
         "entity" : "",
         "name" : "Encrypted Attributes Sequence",
         "req" : "1C"
      },
      "(0008,001a)" : {
         "req" : "3",
         "entity" : "",
         "name" : "Related General SOP Class UID",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "usage" : "Contains SOP Common information"
      },
      "(fffa,fffa)" : {
         "req" : "3",
         "entity" : "",
         "name" : "Digital Signatures Sequence",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(2000,0060)" : {
         "usage" : "Contains Film Session presentations information",
         "module" : "Basic Film Session Presentation",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-1"
         ],
         "req" : "Amount of memory allocated for the film session. Value is expressed in KB",
         "name" : "Memory Allocation",
         "entity" : ""
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
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
         "entity" : "",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     },
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "",
         "name" : "Private Creator Reference",
         "req" : "1"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "req" : "1C",
         "name" : "Certified Timestamp Type",
         "entity" : "",
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
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     },
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0117)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "name" : "Context UID",
         "entity" : "",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0018,a001)" : {
         "usage" : "Contains SOP Common information",
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
                  "attrs" : {
                     "linkend" : "sect_C.12.1.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "entity" : "",
         "name" : "Contributing Equipment Sequence",
         "req" : "3"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
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
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
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
         "entity" : "",
         "name" : "Content Qualification",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0008,0300)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "entity" : "",
         "name" : "Private Data Element Characteristics Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "entity" : "",
         "name" : "Digital Signature DateTime"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "HL7 Instance Identifier",
         "entity" : ""
      },
      "(2000,0050)" : {
         "usage" : "Contains Film Session presentations information",
         "module" : "Basic Film Session Presentation",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-1"
         ],
         "req" : "Human readable label that identifies the film session",
         "entity" : "",
         "name" : "Film Session Label"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "",
         "name" : "Institutional Department Name",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0008,0053)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "name" : "Query/Retrieve View",
         "req" : "1C"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "May include Sequence Attributes and their Items.",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : "",
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "entity" : "",
         "name" : "Digital Signature UID",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "entity" : "",
         "name" : "Data Elements Signed",
         "req" : "1"
      },
      "(2000,0500)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.13-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "References to related SOP Classes",
         "module" : "Basic Film Session Relationship"
      },
      "(0400,0561)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "entity" : "",
         "name" : "Original Attributes Sequence",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "entity" : "",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0008,0106)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "name" : "Context Group Version",
         "entity" : "",
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
                     "linkend" : "sect_8.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "entity" : "",
         "name" : "Institution Name"
      },
      "(0020,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "A number that identifies this Composite object instance.",
         "name" : "Instance Number",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "entity" : "",
         "name" : "Modifying System",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "name" : "Institution Name",
         "entity" : "",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "name" : "Certificate of Signer",
         "entity" : "",
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
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     },
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
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
                                 "el" : "para"
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(2000,0040)" : {
         "mod_tables" : [
            "table_C.13-1"
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Film Destination",
         "req" : [
            "Film destination.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "MAGAZINE",
                     "the exposed film is stored in film magazine"
                  ],
                  [
                     "PROCESSOR",
                     "the exposed film is developed in film processor"
                  ],
                  [
                     "BIN_i",
                     "the exposed film is deposited in a sorter bin where \"I\" represents the bin number. Film sorter BINs shall be numbered sequentially starting from 1 and no maximum is placed on the number of BINs. The encoding of the BIN number shall not contain leading zeros."
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "usage" : "Contains Film Session presentations information",
         "module" : "Basic Film Session Presentation"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "",
         "name" : "MAC ID Number",
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "name" : "Identifying Private Elements",
         "entity" : "",
         "req" : "1"
      },
      "(0040,a390)" : {
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
                     "linkend" : "sect_C.12.1.1.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : "",
         "req" : "1C",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0008,0105)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The identifier of the Mapping Resource.",
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
         "entity" : "",
         "name" : "Mapping Resource",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "entity" : "",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0008,0201)" : {
         "entity" : "",
         "name" : "Timezone Offset From UTC",
         "req" : "3",
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
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist",
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
                                 "el" : "para",
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5",
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
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
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
                                 "el" : "para",
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
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
                     "content" : [
                        "For example:"
                     ],
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     },
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
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme full common name",
         "entity" : "",
         "name" : "Coding Scheme Name",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0008,0014)" : {
         "req" : "3",
         "name" : "Instance Creator UID",
         "entity" : "",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0100,0410)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "name" : "MAC ID Number",
         "entity" : "",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature."
      },
      "(0008,0123)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Context Group Identification Sequence",
         "entity" : "",
         "req" : "3"
      },
      "(0020,9172)[<0>](0008,1160)" : {
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
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "entity" : "",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "entity" : "",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0100,0426)" : {
         "req" : "3",
         "name" : "Authorization Equipment Certification Number",
         "entity" : "",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
         "entity" : "",
         "name" : "Purpose of Reference Code Sequence",
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0008,001b)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "name" : "Original Specialized SOP Class UID",
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
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
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Block Identifying Information Status",
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "entity" : "",
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "name" : "Signature",
         "entity" : "",
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(2000,0500)" : {
         "mod_tables" : [
            "table_C.13-2"
         ],
         "desc" : null,
         "name" : "Referenced Film Box Sequence",
         "entity" : "",
         "req" : [
            "A set of Film Boxes.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "usage" : "References to related SOP Classes",
         "module" : "Basic Film Session Relationship"
      },
      "(0008,0012)" : {
         "req" : "3",
         "name" : "Instance Creation Date",
         "entity" : "",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "req" : "2",
         "name" : "Source of Previous Values",
         "entity" : "",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "name" : "Nonidentifying Private Elements",
         "entity" : "",
         "req" : "1C",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2C",
         "entity" : "",
         "name" : "Coding Scheme External ID",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "entity" : "",
         "name" : "Deidentification Action Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
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
         "name" : "Person's Telecom Information",
         "entity" : "",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "entity" : "",
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Software Versions",
         "entity" : "",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "name" : "Contribution DateTime",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0008,0122)" : {
         "req" : "3",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "",
         "req" : "3"
      },
      "(0008,0013)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "",
         "name" : "Instance Creation Time",
         "req" : "3"
      },
      "(0008,0110)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Coding Scheme Identification Sequence",
         "entity" : "",
         "req" : "3"
      },
      "(0008,010f)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "",
         "name" : "Context Identifier",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Manufacturer",
         "entity" : ""
      },
      "(2000,0010)" : {
         "usage" : "Contains Film Session presentations information",
         "module" : "Basic Film Session Presentation",
         "mod_tables" : [
            "table_C.13-1"
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Number of Copies",
         "req" : "Number of copies to be printed for each film of the film session."
      },
      "(0008,0015)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "",
         "name" : "Instance Coercion DateTime"
      },
      "(0008,0118)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "name" : "Mapping Resource UID",
         "entity" : "",
         "desc" : "The unique identifier of the Mapping Resource",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "entity" : "",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "req" : "1",
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
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "name" : "Encrypted Content",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "entity" : "",
         "name" : "Institution Code Sequence"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "",
         "name" : "Reason for the Attribute Modification",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Address",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0124)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "name" : "Mapping Resource Identification Sequence",
         "entity" : "",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(2100,0160)" : {
         "module" : "Basic Film Session Presentation",
         "usage" : "Contains Film Session presentations information",
         "req" : "Identification of the owner of the film session",
         "name" : "Owner ID",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-1"
         ]
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "entity" : "",
         "name" : "Coding Scheme UID",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "entity" : "",
         "name" : "Digital Signature Purpose Code Sequence"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "entity" : "",
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(2000,0030)" : {
         "module" : "Basic Film Session Presentation",
         "usage" : "Contains Film Session presentations information",
         "name" : "Medium Type",
         "entity" : "",
         "req" : [
            "Type of medium on which the print job will be printed.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "PAPER",
                     null
                  ],
                  [
                     "CLEAR FILM",
                     null
                  ],
                  [
                     "BLUE FILM",
                     null
                  ],
                  [
                     "MAMMO CLEAR FILM",
                     null
                  ],
                  [
                     "MAMMO BLUE FILM",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.13-1"
         ],
         "desc" : null
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Date of Last Calibration",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Time of Last Calibration",
         "entity" : ""
      },
      "(0008,0016)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
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
         "req" : "1",
         "entity" : "",
         "name" : "SOP Class UID"
      },
      "(0008,0018)" : {
         "req" : "1",
         "name" : "SOP Instance UID",
         "entity" : "",
         "desc" : [
            "Uniquely identifies the SOP Instance. See ",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "entity" : "",
         "name" : "Contribution Description",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
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
         "req" : "3",
         "name" : "Certified Timestamp",
         "entity" : ""
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "",
         "name" : "Spatial Resolution",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "entity" : "",
         "name" : "Coding Scheme Version",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "entity" : "",
         "name" : "Deidentification Action",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
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
                     "el" : "orderedlist",
                     "content" : [
                        "\n                    ",
                        {
                           "el" : "listitem",
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
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.15",
                                          "targetptr" : "sect_E.3.1",
                                          "xrefstyle" : "template:PS3.15 Section %n %t"
                                       }
                                    },
                                    "."
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "entity" : "",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "name" : "Person's Address",
         "entity" : "",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "req" : "1",
         "entity" : "",
         "name" : "MAC Algorithm",
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
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
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
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0100,0420)" : {
         "name" : "SOP Authorization DateTime",
         "entity" : "",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0005)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "1C",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "name" : "Retrieve URI",
         "entity" : "",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
               "el" : "note",
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
               ]
            }
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "entity" : "",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "req" : "1",
         "entity" : "",
         "name" : "Private Group Reference",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information"
      },
      "(2000,0500)[<0>](0008,1150)" : {
         "module" : "Basic Film Session Relationship",
         "usage" : "References to related SOP Classes",
         "req" : "1",
         "entity" : "",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.13-2",
            "table_10-11"
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "",
         "name" : "Modified Attributes Sequence",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common"
      }
   }
}
