var data = {
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))",
      "Can't handle table_8.8-1 (in table_C.4.23-1 after (0040,4019))"
   ],
   "tags" : {
      "(0008,0117)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "",
         "name" : "Context UID",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "",
         "name" : "Person's Address",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,0005)" : {
         "entity" : "",
         "name" : "Specific Character Set",
         "req" : "1C",
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
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0008,1115)[<0>](0008,1199)[<1>](0088,0130)" : {
         "mod_tables" : [
            "table_C.4.23-1"
         ],
         "desc" : null,
         "req" : "The user or implementation specific human readable identifier that identifies the offline storage media on which the instance resides.",
         "entity" : "",
         "name" : "Storage Media File-Set ID",
         "module" : "Instance Availability Notification",
         "usage" : "References the related SOPs and IEs."
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "req" : "3",
         "entity" : "",
         "name" : "Coding Scheme Version"
      },
      "(0008,0016)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "SOP Class UID",
         "req" : "1",
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "entity" : "",
         "name" : "Encrypted Content",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0008,0013)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Instance Creation Time",
         "entity" : "",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Source of Previous Values",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "req" : "2"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "name" : "Identifying Private Elements",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0008,0300)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Private Data Element Characteristics Sequence",
         "entity" : "",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Block Identifying Information Status",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "sect_E.3.10"
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
         "req" : "1"
      },
      "(0008,001b)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Original Specialized SOP Class UID",
         "entity" : "",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,1115)[<0>](0008,1199)[<1>](0088,0140)" : {
         "usage" : "References the related SOPs and IEs.",
         "module" : "Instance Availability Notification",
         "entity" : "",
         "name" : "Storage Media File-Set UID",
         "desc" : null,
         "mod_tables" : [
            "table_C.4.23-1"
         ],
         "req" : "Uniquely identifies the offline storage media on which the instance resides."
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : ""
      },
      "(0008,0124)" : {
         "name" : "Mapping Resource Identification Sequence",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0008,1115)[<0>](0008,1199)[<1>](0008,1190)" : {
         "mod_tables" : [
            "table_C.4.23-1"
         ],
         "desc" : null,
         "req" : [
            "URL specifying the location of the referenced instance(s).",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber quotedtitle",
                     "targetptr" : "sect_6.5",
                     "targetdoc" : "PS3.18"
                  }
               },
               "."
            ]
         ],
         "name" : "Retrieve URL",
         "entity" : "",
         "module" : "Instance Availability Notification",
         "usage" : "References the related SOPs and IEs."
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "entity" : "",
         "req" : "1",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "req" : "3",
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
         "entity" : "",
         "name" : "Certified Timestamp",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name",
         "entity" : "",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a390)" : {
         "entity" : "",
         "name" : "HL7 Structured Document Reference Sequence",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "MAC Algorithm",
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
      "(0020,9172)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1C",
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
         "name" : "Conversion Source Attributes Sequence"
      },
      "(0008,010f)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Context Identifier",
         "entity" : "",
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
         ],
         "req" : "1"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
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
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     }
                  },
                  "\n"
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "",
         "name" : "Retrieve URI"
      },
      "(0008,0300)[<0>](0008,0302)" : {
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
         "name" : "Private Creator Reference",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "usage" : "References the related SOPs and IEs.",
         "module" : "Instance Availability Notification",
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.4.23-1",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,1111)" : {
         "usage" : "References the related SOPs and IEs.",
         "module" : "Instance Availability Notification",
         "name" : "Referenced Performed Procedure Step Sequence",
         "entity" : "",
         "desc" : null,
         "req" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which this availability notification instance is related, if any.",
            "Zero or one Item shall be included in this Sequence.",
            {
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_fe3a642f-a746-4898-ae8b-c9fe083be35c"
                                 },
                                 "content" : [
                                    "This may refer to a different PPS than that encoded in the composite instances themselves."
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
                                    "xml:id" : "para_fb3b6f3e-304c-4d4c-8a32-4d0caed0b86f"
                                 },
                                 "content" : [
                                    "It is typically used for notification about instances created as a consequence of some scheduled activity."
                                 ]
                              },
                              "\n                    "
                           ]
                        },
                        "\n                  "
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.4.23-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0008,001a)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Related General SOP Class UID",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0008,1115)" : {
         "entity" : "",
         "name" : "Referenced Series Sequence",
         "req" : [
            "Sequence of Items where each Item includes references to Instances within the same Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.4.23-1"
         ],
         "desc" : null,
         "usage" : "References the related SOPs and IEs.",
         "module" : "Instance Availability Notification"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.4.23-1",
            "table_10-11"
         ],
         "usage" : "References the related SOPs and IEs.",
         "module" : "Instance Availability Notification"
      },
      "(0020,000d)" : {
         "req" : "Unique identifier for the Study of which all the Instances referenced in this notification are part.",
         "desc" : null,
         "mod_tables" : [
            "table_C.4.23-1"
         ],
         "name" : "Study Instance UID",
         "entity" : "",
         "module" : "Instance Availability Notification",
         "usage" : "References the related SOPs and IEs."
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "entity" : "",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "SOP Authorization Comment",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,1115)[<0>](0008,1199)[<1>](0040,e011)" : {
         "usage" : "References the related SOPs and IEs.",
         "module" : "Instance Availability Notification",
         "entity" : "",
         "name" : "Retrieve Location UID",
         "mod_tables" : [
            "table_C.4.23-1"
         ],
         "req" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "desc" : null
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "entity" : "",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0400,0500)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Encrypted Attributes Sequence",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Coding Scheme Identification Sequence",
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Coding Scheme External ID",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2C",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present."
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Designator",
         "entity" : ""
      },
      "(0008,0053)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "Query/Retrieve View",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "name" : "Modified Attributes Sequence",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "entity" : "",
         "req" : "1",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "",
         "name" : "Attribute Modification DateTime",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "entity" : "",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0100,0426)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "entity" : "",
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "",
         "name" : "Modifying System",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,0118)" : {
         "desc" : "The unique identifier of the Mapping Resource",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "",
         "name" : "Mapping Resource UID",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,0105)" : {
         "name" : "Mapping Resource",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
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
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0008,1115)[<0>](0008,1199)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.4.23-1",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "",
         "module" : "Instance Availability Notification",
         "usage" : "References the related SOPs and IEs."
      },
      "(0008,0123)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Context Group Identification Sequence",
         "entity" : ""
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "req" : "1",
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "name" : "Reason for the Attribute Modification",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "entity" : "",
         "name" : "Software Versions",
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
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "entity" : "",
         "name" : "Nonidentifying Private Elements"
      },
      "(0018,9004)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "name" : "Content Qualification"
      },
      "(0028,0303)" : {
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
         "req" : "3",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Station Name",
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "req" : "1",
         "name" : "Private Group Reference",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "Contribution DateTime"
      },
      "(0018,a001)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Contributing Equipment Sequence",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.5"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "3"
      },
      "(0008,0018)" : {
         "name" : "SOP Instance UID",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "req" : "1",
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
         "entity" : "",
         "name" : "Signature",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "entity" : "",
         "name" : "Institution Name"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "May include Sequence Attributes and their Items.",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Coding Scheme Name",
         "desc" : "The coding scheme full common name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Manufacturer",
         "entity" : "",
         "req" : "1",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0040,a170)" : {
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
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3",
         "entity" : "",
         "name" : "Spatial Resolution"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Institution Name",
         "entity" : "",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Institution where the equipment that contributed to the composite instance is located."
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "module" : "Instance Availability Notification",
         "usage" : "References the related SOPs and IEs.",
         "desc" : null,
         "mod_tables" : [
            "table_C.4.23-1"
         ],
         "req" : "Unique identifier of the Series of which all the Instances referenced in this Item are part.",
         "entity" : "",
         "name" : "Series Instance UID"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "1",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
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
         "name" : "Digital Signature DateTime",
         "entity" : ""
      },
      "(0020,0013)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Instance Number",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "A number that identifies this Composite object instance.",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Certificate of Signer",
         "entity" : "",
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "",
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1115)[<0>](0008,1199)[<1>](0040,e010)" : {
         "entity" : "",
         "name" : "Retrieve URI",
         "req" : [
            [
               "Fully specified URI/URL (see ",
               {
                  "attrs" : {
                     "linkend" : "biblio_RFC_3986"
                  },
                  "el" : "xref"
               },
               ") the location of the referenced instance."
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
                        "xml:id" : "para_a2d2cb64-bd24-4609-87f9-4ef5e8f44d52"
                     },
                     "el" : "para"
                  },
                  "\n"
               ]
            }
         ],
         "mod_tables" : [
            "table_C.4.23-1"
         ],
         "desc" : null,
         "usage" : "References the related SOPs and IEs.",
         "module" : "Instance Availability Notification"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "entity" : "",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "entity" : "",
         "name" : "Data Elements Signed",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
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
         "req" : "1C"
      },
      "(0008,1111)[<0>](0040,4019)" : {
         "usage" : "References the related SOPs and IEs.",
         "module" : "Instance Availability Notification",
         "entity" : "",
         "name" : "Performed Workitem Code Sequence",
         "mod_tables" : [
            "table_C.4.23-1"
         ],
         "desc" : null,
         "req" : [
            "A sequence that conveys the (single) type of procedure performed.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "",
         "name" : "Instance Creation Date"
      },
      "(0008,0015)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
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
         "name" : "Instance Coercion DateTime",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "req" : "1",
         "entity" : "",
         "name" : "HL7 Instance Identifier"
      },
      "(0100,0410)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "",
         "name" : "SOP Instance Status",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0400,0561)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Original Attributes Sequence",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "entity" : "",
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The type of certificate used in (0400,0115).",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     },
                     "el" : "para",
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
               ]
            }
         ],
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located."
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Deidentification Action",
         "req" : "1",
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
               "title" : "Enumerated Values:",
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
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
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
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetptr" : "sect_E.3.1",
                                          "targetdoc" : "PS3.15"
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "name" : "Digital Signatures Sequence"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "mod_tables" : [
            "table_C.12-1"
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
         "req" : "3",
         "entity" : "",
         "name" : "Time of Last Calibration",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,1115)[<0>](0008,1199)[<1>](0008,1150)" : {
         "module" : "Instance Availability Notification",
         "usage" : "References the related SOPs and IEs.",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.4.23-1",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "",
         "name" : "Referenced SOP Class UID"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Referenced Frame Number",
         "entity" : "",
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
         "req" : "1C"
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Parameters Sequence",
         "entity" : ""
      },
      "(0008,1115)[<0>](0008,1199)" : {
         "mod_tables" : [
            "table_C.4.23-1"
         ],
         "req" : [
            "Sequence of Items where each Item includes a reference to a single Instance within this Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "desc" : null,
         "entity" : "",
         "name" : "Referenced SOP Sequence",
         "module" : "Instance Availability Notification",
         "usage" : "References the related SOPs and IEs."
      },
      "(0100,0420)" : {
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "name" : "SOP Authorization DateTime",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Digital Signature UID",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "entity" : "",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Institution Code Sequence",
         "entity" : "",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0008,1115)[<0>](0008,1199)[<1>](0008,0056)" : {
         "module" : "Instance Availability Notification",
         "usage" : "References the related SOPs and IEs.",
         "req" : [
            "The availability of the referenced Instance.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.4.23.1.1",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ],
         "mod_tables" : [
            "table_C.4.23-1"
         ],
         "desc" : null,
         "name" : "Instance Availability",
         "entity" : ""
      },
      "(0008,0106)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "name" : "Context Group Version",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "Contains SOP common information",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Date of Last Calibration",
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
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,1115)[<0>](0008,1199)[<1>](0008,0054)" : {
         "usage" : "References the related SOPs and IEs.",
         "module" : "Instance Availability Notification",
         "entity" : "",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.4.23-1"
         ],
         "req" : [
            "Title of the DICOM Application Entity from which the referenced Instance may or may not be retrievable, i.e., the scope for which Instance Availability (0008,0056) applies. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.4.23.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "desc" : null
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "name" : "Deidentification Action Sequence",
         "entity" : "",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "req" : "3",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operator Identification Sequence",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,0201)" : {
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
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
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
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
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
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ]
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
               ]
            },
            "Time earlier than UTC is expressed as a negative offset.",
            {
               "el" : "note",
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
                     "content" : [
                        "Offset = -0200"
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     }
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "entity" : "",
         "name" : "Timezone Offset From UTC",
         "module" : "SOP Common",
         "usage" : "Contains SOP common information"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creator UID",
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "entity" : "",
         "name" : "Certified Timestamp Type",
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1C",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "usage" : "Contains SOP common information",
         "module" : "SOP Common"
      },
      "(0008,0122)" : {
         "module" : "SOP Common",
         "usage" : "Contains SOP common information",
         "req" : "3",
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
         "entity" : ""
      }
   }
}
