var data = {
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ],
   "tags" : {
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "entity" : "",
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
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0400,0500)" : {
         "entity" : "",
         "name" : "Encrypted Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1C",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this Sequence.",
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
         ]
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "entity" : "",
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "module" : "SOP Common"
      },
      "(0008,0122)" : {
         "entity" : "",
         "name" : "Mapping Resource Name",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
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
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Institution Name"
      },
      "(0100,0410)" : {
         "entity" : "",
         "name" : "SOP Instance Status",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
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
               "el" : "note",
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
               ]
            }
         ],
         "module" : "SOP Common"
      },
      "(0008,0012)" : {
         "name" : "Instance Creation Date",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "entity" : "",
         "module" : "SOP Common",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "entity" : "",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Digital Signature UID"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "entity" : "",
         "name" : "Software Versions",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
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
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "module" : "SOP Common",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1"
      },
      "(0100,0426)" : {
         "name" : "Authorization Equipment Certification Number",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP Common information"
      },
      "(0008,001a)" : {
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
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
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Related General SOP Class UID"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "name" : "Private Group Reference",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common information"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "req" : "1",
         "usage" : "Contains SOP Common information",
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
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Data Elements Signed"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ],
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "entity" : "",
         "name" : "Identifying Private Elements",
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "module" : "SOP Common"
      },
      "(2030,0010)" : {
         "mod_tables" : [
            "table_C.13-7"
         ],
         "req" : "The position of the annotation box in the parent film box. Annotation position sequence depends on the selected Annotation Display Format ID (2010,0030)",
         "usage" : "Contains annotation presentation information",
         "desc" : null,
         "module" : "Basic Annotation Presentation",
         "entity" : "",
         "name" : "Annotation Position"
      },
      "(0040,a390)[<0>](0040,e010)" : {
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
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     }
                  },
                  "\n"
               ]
            }
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Retrieve URI",
         "entity" : ""
      },
      "(0008,0014)" : {
         "entity" : "",
         "name" : "Instance Creator UID",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "entity" : "",
         "name" : "Coding Scheme Name"
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "entity" : "",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "entity" : "",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "entity" : "",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "entity" : "",
         "name" : "Person's Address",
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Person's mailing address"
      },
      "(0008,0015)" : {
         "entity" : "",
         "name" : "Instance Coercion DateTime",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common"
      },
      "(0008,0300)" : {
         "entity" : "",
         "name" : "Private Data Element Characteristics Sequence",
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance"
      },
      "(0008,0124)" : {
         "name" : "Mapping Resource Identification Sequence",
         "entity" : "",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)[<0>](0400,0565)" : {
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
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "name" : "Reason for the Attribute Modification",
         "entity" : ""
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
               "el" : "note",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common information",
         "name" : "MAC Algorithm",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "name" : "Deidentification Action Sequence",
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "name" : "Coding Scheme UID",
         "entity" : ""
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : ""
      },
      "(0008,0106)" : {
         "module" : "SOP Common",
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
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "name" : "Context Group Version",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "module" : "SOP Common",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name",
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "",
         "name" : "MAC ID Number",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common information",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "name" : "Date of Last Calibration",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "3"
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
         "module" : "SOP Common",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "name" : "Query/Retrieve View",
         "entity" : ""
      },
      "(0020,9172)" : {
         "module" : "SOP Common",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "name" : "Conversion Source Attributes Sequence",
         "entity" : ""
      },
      "(2030,0020)" : {
         "entity" : "",
         "name" : "Text String",
         "usage" : "Contains annotation presentation information",
         "mod_tables" : [
            "table_C.13-7"
         ],
         "req" : "Text string",
         "module" : "Basic Annotation Presentation",
         "desc" : null
      },
      "(0008,0018)" : {
         "name" : "SOP Instance UID",
         "entity" : "",
         "module" : "SOP Common",
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : ""
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
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Class UID",
         "entity" : ""
      },
      "(fffa,fffa)" : {
         "name" : "Digital Signatures Sequence",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "entity" : "",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information"
      },
      "(0100,0424)" : {
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "SOP Authorization Comment",
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
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
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "",
         "name" : "Private Creator Reference"
      },
      "(0008,0005)" : {
         "module" : "SOP Common",
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
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "Specific Character Set",
         "entity" : ""
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : ""
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modified Attributes Sequence",
         "entity" : ""
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "name" : "Attribute Modification DateTime",
         "entity" : "",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "name" : "Contribution DateTime",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "3"
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
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "entity" : "",
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "entity" : "",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "2"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "entity" : "",
         "name" : "Device Serial Number"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "name" : "Coding Scheme Designator",
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "module" : "SOP Common",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "attrs" : {
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "sect_E.3.10"
                  },
                  "el" : "olink"
               },
               "."
            ],
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Block Identifying Information Status",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "entity" : "",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information",
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
         "module" : "SOP Common"
      },
      "(0020,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "desc" : "A number that identifies this Composite object instance.",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Instance Number"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "name" : "Nonidentifying Private Elements",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "",
         "name" : "Person's Telephone Numbers",
         "usage" : "Contains SOP Common information",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "module" : "SOP Common"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Referenced SOP Class UID"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "entity" : "",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "module" : "SOP Common",
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
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common"
      },
      "(0008,0201)" : {
         "name" : "Timezone Offset From UTC",
         "entity" : "",
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
                     "el" : "orderedlist",
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
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5"
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
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ],
                                 "el" : "para",
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
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "el" : "para"
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     }
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
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "Contains SOP Common information",
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
         "entity" : "",
         "name" : "Coding Scheme Registry"
      },
      "(0008,0118)" : {
         "module" : "SOP Common",
         "desc" : "The unique identifier of the Mapping Resource",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Mapping Resource UID",
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "",
         "name" : "Signature",
         "req" : "1",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "name" : "Time of Last Calibration",
         "entity" : "",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information"
      },
      "(0008,0105)" : {
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "name" : "Mapping Resource",
         "entity" : ""
      },
      "(0008,0123)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Group Identification Sequence",
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common",
         "req" : "2C",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme External ID",
         "entity" : ""
      },
      "(0028,0303)" : {
         "entity" : "",
         "name" : "Longitudinal Temporal Information Modified",
         "usage" : "Contains SOP Common information",
         "req" : "3",
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
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15"
                  }
               },
               "."
            ]
         ]
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     },
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
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
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
         ],
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Deidentification Action"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : ""
      },
      "(0018,9004)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "3",
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.13.2.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "entity" : "",
         "name" : "Content Qualification"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,001b)" : {
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "entity" : "",
         "name" : "Original Specialized SOP Class UID"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "entity" : "",
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "Contains SOP Common information",
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
      "(0020,9172)[<0>](0008,1160)" : {
         "usage" : "Contains SOP Common information",
         "req" : "1C",
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
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Referenced Frame Number"
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)" : {
         "usage" : "Contains SOP Common information",
         "req" : "3",
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
         "module" : "SOP Common",
         "entity" : "",
         "name" : "Contributing Equipment Sequence"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "entity" : "",
         "name" : "Coding Scheme Responsible Organization"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "entity" : "",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0008,0117)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "name" : "Context UID",
         "entity" : ""
      },
      "(0100,0420)" : {
         "entity" : "",
         "name" : "SOP Authorization DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "module" : "SOP Common",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO."
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "entity" : "",
         "name" : "Spatial Resolution",
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center."
      },
      "(0008,010f)" : {
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "name" : "Context Identifier",
         "entity" : ""
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "name" : "Contribution Description",
         "entity" : ""
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "Contains SOP Common information",
         "name" : "Instance Creation Time",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP Common information",
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "May include Sequence Attributes and their Items.",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "module" : "SOP Common",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common information",
         "name" : "Certified Timestamp",
         "entity" : ""
      },
      "(4ffe,0001)" : {
         "entity" : "",
         "name" : "MAC Parameters Sequence",
         "usage" : "Contains SOP Common information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
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
                                 "el" : "para",
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ]
                              },
                              "\n                        "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      "
                     ],
                     "el" : "orderedlist"
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
         "usage" : "Contains SOP Common information",
         "req" : "1",
         "name" : "Certificate of Signer",
         "entity" : ""
      }
   }
}
