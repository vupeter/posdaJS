var data = 
{
   "tags" : {
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "req" : "1",
         "usage" : "Contains SOP Common information"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2",
         "usage" : "Contains SOP Common information"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "3"
      },
      "(2010,0110)" : {
         "mod_tables" : [
            "table_C.13-3"
         ],
         "desc" : null,
         "name" : "Empty Image Density",
         "entity" : "",
         "module" : "Basic Film Box Presentation",
         "req" : [
            "Density of the image box area on the film that contains no image.",
            {
               "list" : [
                  [
                     "BLACK",
                     null
                  ],
                  [
                     "WHITE",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            "i where i represents the desired density in hundredths of OD (e.g., 150 corresponds with 1.5 OD)"
         ],
         "usage" : "Contains Film Box presentation information"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Name",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "req" : "1C",
         "usage" : "Contains SOP Common information",
         "name" : "Coding Scheme UID",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR."
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(2010,0060)" : {
         "req" : [
            "Interpolation type by which the printer magnifies or decimates the image in order to fit the image in the image box on film.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "REPLICATE",
                     null
                  ],
                  [
                     "BILINEAR",
                     null
                  ],
                  [
                     "CUBIC",
                     null
                  ],
                  [
                     "NONE",
                     null
                  ]
               ]
            }
         ],
         "usage" : "Contains Film Box presentation information",
         "name" : "Magnification Type",
         "module" : "Basic Film Box Presentation",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-3"
         ]
      },
      "(0008,0300)" : {
         "name" : "Private Data Element Characteristics Sequence",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(0400,0500)" : {
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
         "name" : "Encrypted Attributes Sequence",
         "module" : "SOP Common",
         "entity" : "",
         "req" : "1C",
         "usage" : "Contains SOP Common information"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "name" : "Contribution Description",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Description of the contribution the equipment made to the composite instance."
      },
      "(0100,0410)" : {
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "SOP Instance Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "A flag that indicates the storage status of the SOP Instance.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Coding Scheme Version",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,9004)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Content Qualification",
         "usage" : "Contains SOP Common information",
         "req" : "3"
      },
      "(0008,0015)" : {
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Instance Coercion DateTime"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
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
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ]
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
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(2010,0520)[<0>](0008,1155)" : {
         "req" : "1",
         "usage" : "References to related SOP Classes",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.13-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "",
         "module" : "Basic Film Box Relationship"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(2010,0010)" : {
         "name" : "Image Display Format",
         "module" : "Basic Film Box Presentation",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-3"
         ],
         "desc" : null,
         "req" : [
            "Type of image display format.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "STANDARD\\C,R",
                     "film contains equal size rectangular image boxes with R rows of image boxes and C columns of image boxes; C and R are integers"
                  ],
                  [
                     "ROW\\R1,R2,R3, etc.",
                     "film contains rows with equal size rectangular image boxes with R1 image boxes in the first row, R2 image boxes in second row, R3 image boxes in third row, etc.; R1, R2, R3, etc. are integers"
                  ],
                  [
                     "COL\\C1,C2,C3, etc.",
                     "film contains columns with equal size rectangular image boxes with C1 image boxes in the first column, C2 image boxes in second column, C3 image boxes in third column, etc.; C1, C2, C3, etc. are integers"
                  ],
                  [
                     "SLIDE",
                     "film contains 35mm slides; the number of slides for a particular film size is configuration dependent"
                  ],
                  [
                     "SUPERSLIDE",
                     "film contains 40mm slides; the number of slides for a particular film size is configuration dependent"
                  ],
                  [
                     "CUSTOM\\i",
                     "film contains a customized ordering of rectangular image boxes; i identifies the image display format; the definition of the image display formats is defined in the Conformance Statement; i is an integer"
                  ]
               ]
            }
         ],
         "usage" : "Contains Film Box presentation information"
      },
      "(2010,0030)" : {
         "usage" : "Contains Film Box presentation information",
         "req" : "Identification of annotation display format. The definition of the annotation display formats and the annotation box position sequence are defined in the Conformance Statement",
         "module" : "Basic Film Box Presentation",
         "entity" : "",
         "name" : "Annotation Display Format ID",
         "mod_tables" : [
            "table_C.13-3"
         ],
         "desc" : null
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "Contains SOP Common information"
      },
      "(2010,015e)" : {
         "req" : [
            "Luminance of lightbox illuminating a piece of transmissive film, or for the case of reflective media, luminance obtainable from diffuse reflection of the illumination present. Expressed as L0, in candelas per square meter (cd/m",
            {
               "content" : [
                  "2"
               ],
               "el" : "superscript"
            },
            ")."
         ],
         "usage" : "Contains Film Box presentation information",
         "mod_tables" : [
            "table_C.13-3"
         ],
         "desc" : null,
         "name" : "Illumination",
         "entity" : "",
         "module" : "Basic Film Box Presentation"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature."
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Referenced SOP Class UID",
         "usage" : "Contains SOP Common information",
         "req" : "1"
      },
      "(0008,0117)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Context UID",
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
         ],
         "usage" : "Contains SOP Common information",
         "req" : "3"
      },
      "(0018,a001)" : {
         "usage" : "Contains SOP Common information",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Contributing Equipment Sequence"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Identifying Private Elements",
         "module" : "SOP Common",
         "entity" : "",
         "req" : "1",
         "usage" : "Contains SOP Common information"
      },
      "(2010,0510)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.13-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "module" : "Basic Film Box Relationship",
         "req" : "1",
         "usage" : "References to related SOP Classes"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Nonidentifying Private Elements",
         "usage" : "Contains SOP Common information",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "name" : "Device Serial Number",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "content" : [
                        "\n                        ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                          ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "As technology advances, additional encryption algorithms may be allowed in future versions. Implementations should take this possibility into account."
                                 ]
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
                     ],
                     "el" : "orderedlist",
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
         "entity" : "",
         "name" : "Certificate of Signer"
      },
      "(0400,0561)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Attributes Sequence",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located."
      },
      "(0008,0053)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Query/Retrieve View",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ]
      },
      "(2020,0050)" : {
         "name" : "Requested Resolution ID",
         "module" : "Basic Film Box Presentation",
         "entity" : "",
         "mod_tables" : [
            "table_C.13-3"
         ],
         "desc" : null,
         "req" : [
            "Specifies the resolution at which images in this Film Box are to be printed.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "STANDARD",
                     "Approximately 4k x 5k printable pixels on a 14 x 17 inch film"
                  ],
                  [
                     "HIGH",
                     "Approximately twice the resolution of STANDARD."
                  ]
               ]
            }
         ],
         "usage" : "Contains Film Box presentation information"
      },
      "(2050,0500)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "module" : "Basic Film Box Relationship",
         "mod_tables" : [
            "table_C.13-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "References to related SOP Classes"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "req" : "2C",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "name" : "Coding Scheme External ID",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Contribution DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "usage" : "Contains SOP Common information",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "name" : "Software Versions",
         "module" : "SOP Common",
         "entity" : "",
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
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(2010,0050)" : {
         "module" : "Basic Film Box Presentation",
         "entity" : "",
         "name" : "Film Size ID",
         "mod_tables" : [
            "table_C.13-3"
         ],
         "desc" : null,
         "usage" : "Contains Film Box presentation information",
         "req" : [
            "Film size identification.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "8INX10IN",
                     null
                  ],
                  [
                     "8_5INX11IN",
                     null
                  ],
                  [
                     "10INX12IN",
                     null
                  ],
                  [
                     "10INX14IN",
                     null
                  ],
                  [
                     "11INX14IN",
                     null
                  ],
                  [
                     "11INX17IN",
                     null
                  ],
                  [
                     "14INX14IN",
                     null
                  ],
                  [
                     "14INX17IN",
                     null
                  ],
                  [
                     "24CMX24CM",
                     null
                  ],
                  [
                     "24CMX30CM",
                     null
                  ],
                  [
                     "A4",
                     null
                  ],
                  [
                     "A3",
                     null
                  ]
               ]
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_9fdfdf8a-9d5d-4e11-a600-e3878f90fd18"
                     },
                     "content" : [
                        "10INX14IN corresponds with 25.7CMX36.4CM, A4 corresponds with 210 x 297 millimeters, A3 corresponds with 297 x 420 millimeters"
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "name" : "SOP Authorization Comment",
         "usage" : "Contains SOP Common information",
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
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
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP Common information"
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
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
                                 "el" : "para",
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 }
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
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "attrs" : {
                                          "targetptr" : "sect_E.3.1",
                                          "targetdoc" : "PS3.15",
                                          "xrefstyle" : "template:PS3.15 Section %n %t"
                                       },
                                       "el" : "olink"
                                    },
                                    "."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 }
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
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Deidentification Action",
         "usage" : "Contains SOP Common information",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Date of Last Calibration",
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
         ]
      },
      "(2010,0500)[<0>](0008,1155)" : {
         "module" : "Basic Film Box Relationship",
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.13-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "References to related SOP Classes",
         "req" : "1"
      },
      "(2010,0510)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "Basic Film Box Relationship",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.13-4",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "References to related SOP Classes"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Coding Scheme Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme full common name",
         "usage" : "Contains SOP Common information",
         "req" : "3"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "req" : "1",
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
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Private Creator Reference",
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
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1"
      },
      "(0008,0118)" : {
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Mapping Resource UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The unique identifier of the Mapping Resource"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1",
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
                           "attrs" : {
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
                           },
                           "el" : "olink"
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
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Certificate Type"
      },
      "(2010,0500)" : {
         "usage" : "References to related SOP Classes",
         "req" : [
            "A Film Session.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "module" : "Basic Film Box Relationship",
         "name" : "Referenced Film Session Sequence",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-4"
         ]
      },
      "(2010,0500)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.13-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "Basic Film Box Relationship",
         "entity" : "",
         "req" : "1",
         "usage" : "References to related SOP Classes"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Manufacturer",
         "usage" : "Contains SOP Common information",
         "req" : "1"
      },
      "(0008,0014)" : {
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Instance Creator UID",
         "usage" : "Contains SOP Common information",
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA)."
      },
      "(0008,0105)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Mapping Resource",
         "usage" : "Contains SOP Common information",
         "req" : "1"
      },
      "(0008,0012)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "name" : "Instance Creation Date",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(fffa,fffa)" : {
         "name" : "Digital Signatures Sequence",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0106)" : {
         "name" : "Context Group Version",
         "module" : "SOP Common",
         "entity" : "",
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
         "req" : "1",
         "usage" : "Contains SOP Common information"
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Longitudinal Temporal Information Modified",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "Contains SOP Common information",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "module" : "SOP Common",
         "entity" : "",
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
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
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
         "req" : "1C",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1C",
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
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry"
      },
      "(0008,0122)" : {
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Mapping Resource Name",
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
         "usage" : "Contains SOP Common information",
         "req" : "3"
      },
      "(4ffe,0001)" : {
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Reason for the Attribute Modification",
         "desc" : [
            "Reason for the attribute modification.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0018)" : {
         "name" : "SOP Instance UID",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "req" : "1",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0013)" : {
         "name" : "Instance Creation Time",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0201)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "name" : "Timezone Offset From UTC",
         "module" : "SOP Common",
         "entity" : "",
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
                                 ],
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
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
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
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 }
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
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 }
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
            },
            "Time earlier than UTC is expressed as a negative offset.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "For example:"
                     ],
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     }
                  },
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     },
                     "content" : [
                        "UTC = 5.00 a.m."
                     ],
                     "el" : "para"
                  },
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     },
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(2010,0520)[<0>](0008,1150)" : {
         "req" : "1",
         "usage" : "References to related SOP Classes",
         "mod_tables" : [
            "table_C.13-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "Basic Film Box Relationship",
         "entity" : ""
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "name" : "Spatial Resolution",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "Contains SOP Common information",
         "req" : "3"
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "name" : "Operators' Name",
         "module" : "SOP Common",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "module" : "SOP Common",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0005)" : {
         "req" : "1C",
         "usage" : "Contains SOP Common information",
         "name" : "Specific Character Set",
         "module" : "SOP Common",
         "entity" : "",
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
         ]
      },
      "(2050,0500)[<0>](0008,1155)" : {
         "usage" : "References to related SOP Classes",
         "req" : "1",
         "module" : "Basic Film Box Relationship",
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.13-4",
            "table_10-11"
         ]
      },
      "(2010,0040)" : {
         "usage" : "Contains Film Box presentation information",
         "req" : [
            "Film orientation.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PORTRAIT",
                     "vertical film position"
                  ],
                  [
                     "LANDSCAPE",
                     "horizontal film position"
                  ]
               ]
            }
         ],
         "entity" : "",
         "module" : "Basic Film Box Presentation",
         "name" : "Film Orientation",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-3"
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "usage" : "Contains SOP Common information",
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "name" : "Deidentification Action Sequence",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Private Group Reference"
      },
      "(0100,0426)" : {
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Authorization Equipment Certification Number",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(2050,0500)" : {
         "name" : "Referenced Presentation LUT Sequence",
         "module" : "Basic Film Box Relationship",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-4"
         ],
         "req" : [
            "A Presentation LUT.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "References to related SOP Classes"
      },
      "(2010,0510)" : {
         "usage" : "References to related SOP Classes",
         "req" : [
            "A set of Image Boxes.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "module" : "Basic Film Box Relationship",
         "name" : "Referenced Image Box Sequence",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-4"
         ]
      },
      "(2010,0150)" : {
         "mod_tables" : [
            "table_C.13-3"
         ],
         "desc" : null,
         "name" : "Configuration Information",
         "entity" : "",
         "module" : "Basic Film Box Presentation",
         "req" : [
            "Character string that contains either the ID of the printer configuration table that contains a set of values for implementation specific print parameters (e.g., perception LUT related parameters) or one or more configuration data values, encoded as characters. If there are multiple configuration data values encoded in the string, they shall be separated by backslashes. The definition of values shall be contained in the SCP's Conformance Statement.",
            {
               "list" : [
                  [
                     "CS000-CS999",
                     "Implementation specific curve type."
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "It is recommended that for SCPs, CS000 represent the lowest contrast and CS999 the highest contrast levels available."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_bc0ee9ab-0a09-4c9d-aa9c-3432ad811210"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "Contains Film Box presentation information"
      },
      "(0008,010f)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Context Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The identifier of the Context Group.",
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
         ]
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     },
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
         "name" : "Digital Signature DateTime",
         "entity" : "",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP Common information"
      },
      "(0020,9172)" : {
         "req" : "1C",
         "usage" : "Contains SOP Common information",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Conversion Source Attributes Sequence",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0028,2000)" : {
         "req" : [
            [
               "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.15"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This is an Input Device Profile that describes the characteristics of the pixel data in the film box, not an Output Device Profile that might describe the characteristics of the Print SCP."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8afa915c-2990-4997-9a76-67b20e31249b"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "Contains Film Box presentation information",
         "name" : "ICC Profile",
         "entity" : "",
         "module" : "Basic Film Box Presentation",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-3"
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1",
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
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Signature"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "name" : "Attribute Modification DateTime",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "req" : "1",
         "usage" : "Contains SOP Common information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,001a)" : {
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Related General SOP Class UID",
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
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1C",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "name" : "Encrypted Content Transfer Syntax UID",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used."
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Operator Identification Sequence"
      },
      "(0040,a390)" : {
         "module" : "SOP Common",
         "entity" : "",
         "name" : "HL7 Structured Document Reference Sequence",
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
         "usage" : "Contains SOP Common information",
         "req" : "1C"
      },
      "(0100,0420)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "name" : "SOP Authorization DateTime",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
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
         "name" : "MAC Algorithm",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Digital Signature UID",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1"
      },
      "(2010,0160)" : {
         "req" : [
            "For transmissive film, luminance contribution due to reflected ambient light. Expressed as La, in candelas per square meter (cd/m",
            {
               "el" : "superscript",
               "content" : [
                  "2"
               ]
            },
            ")."
         ],
         "usage" : "Contains Film Box presentation information",
         "name" : "Reflected Ambient Light",
         "entity" : "",
         "module" : "Basic Film Box Presentation",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-3"
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "name" : "Retrieve URI",
         "entity" : "",
         "module" : "SOP Common",
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
               "content" : [
                  "\n",
                  {
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     }
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(2010,0130)" : {
         "req" : "Maximum density of the images on the film, expressed in hundredths of OD. If Max Density is higher than maximum printer density than Max Density is set to maximum printer density.",
         "usage" : "Contains Film Box presentation information",
         "name" : "Max Density",
         "module" : "Basic Film Box Presentation",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-3"
         ]
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "req" : "1C",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
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
         "name" : "Referenced Frame Number",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(2010,0120)" : {
         "req" : "Minimum density of the images on the film, expressed in hundredths of OD. If Min Density is lower than minimum printer density than Min Density is set to minimum printer density.",
         "usage" : "Contains Film Box presentation information",
         "mod_tables" : [
            "table_C.13-3"
         ],
         "desc" : null,
         "name" : "Min Density",
         "module" : "Basic Film Box Presentation",
         "entity" : ""
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "usage" : "Contains SOP Common information",
         "req" : "1"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "name" : "Block Identifying Information Status",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "1",
         "usage" : "Contains SOP Common information"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence",
         "usage" : "Contains SOP Common information",
         "req" : "1"
      },
      "(2010,0140)" : {
         "req" : [
            "Specifies whether a trim box shall be printed surrounding each image on the film.",
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
         "usage" : "Contains Film Box presentation information",
         "name" : "Trim",
         "entity" : "",
         "module" : "Basic Film Box Presentation",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-3"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0008,0124)" : {
         "name" : "Mapping Resource Identification Sequence",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(2010,0080)" : {
         "req" : "Further specifies the type of the interpolation function. Values are defined in Conformance Statement. Only valid for Magnification Type (2010,0060) = CUBIC",
         "usage" : "Contains Film Box presentation information",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-3"
         ],
         "name" : "Smoothing Type",
         "module" : "Basic Film Box Presentation",
         "entity" : ""
      },
      "(2010,0520)" : {
         "usage" : "References to related SOP Classes",
         "req" : [
            "A set of Basic Annotation Boxes.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "desc" : null,
         "mod_tables" : [
            "table_C.13-4"
         ],
         "entity" : "",
         "module" : "Basic Film Box Relationship",
         "name" : "Referenced Basic Annotation Box Sequence"
      },
      "(0020,0013)" : {
         "name" : "Instance Number",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "A number that identifies this Composite object instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0123)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Context Group Identification Sequence",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "name" : "Modifying System",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "entity" : "",
         "module" : "SOP Common",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1C"
      },
      "(2010,0100)" : {
         "name" : "Border Density",
         "entity" : "",
         "module" : "Basic Film Box Presentation",
         "desc" : null,
         "mod_tables" : [
            "table_C.13-3"
         ],
         "req" : [
            "Density of the film areas surrounding and between images on the film.",
            {
               "list" : [
                  [
                     "BLACK",
                     null
                  ],
                  [
                     "WHITE",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "i where i represents the desired density in hundredths of OD (e.g., 150 corresponds with 1.5 OD)"
         ],
         "usage" : "Contains Film Box presentation information"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "Contains SOP Common information",
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
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Digital Signature Purpose Code Sequence",
         "usage" : "Contains SOP Common information",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "usage" : "Contains SOP Common information",
         "req" : "1"
      },
      "(0008,0016)" : {
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
         "name" : "SOP Class UID",
         "module" : "SOP Common",
         "entity" : "",
         "req" : "1",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Identification Sequence",
         "module" : "SOP Common",
         "entity" : "",
         "req" : "3",
         "usage" : "Contains SOP Common information"
      }
   },
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
