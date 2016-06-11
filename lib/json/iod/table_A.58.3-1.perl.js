var data = {
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))",
      "Can't handle table_8.8-1 (in table_C.28.1-1:table_10-12 after (0008,0006))",
      "Can't handle table_8.8-1 (in table_C.28.1-1:table_10-12:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.28.1-1:table_10-12:table_10-1 after (0008,0082))"
   ],
   "tags" : {
      "(0008,0053)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "name" : "Query/Retrieve View",
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
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Color Palette",
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
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15"
                  }
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
                           "content" : [
                              "\n                          ",
                              {
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
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "Certificate of Signer"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "entity" : "Color Palette",
         "name" : "Digital Signature DateTime",
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
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2C",
         "entity" : "Color Palette",
         "name" : "Coding Scheme External ID",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0070,0081)" : {
         "usage" : "M",
         "module" : "Color Palette Definition",
         "name" : "Content Description",
         "desc" : "A description of the content of the SOP Instance.",
         "req" : "2",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "entity" : "Color Palette"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "entity" : "Color Palette",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer's Model Name",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,0012)" : {
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Date",
         "module" : "SOP Common",
         "usage" : "M"
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
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Signature",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Color Palette",
         "name" : "Coding Scheme Designator",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Color Palette",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0028,1103)" : {
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup table Data (0028,1203). See ",
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
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "Palette Color Lookup Table"
      },
      "(0070,0086)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Color Palette Definition"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
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
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15"
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
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Color Palette",
         "name" : "MAC Parameters Sequence",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0028,1201)" : {
         "usage" : "M",
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
         ],
         "name" : "Red Palette Color Lookup Table Data",
         "entity" : "Color Palette",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-22a"
         ]
      },
      "(0028,1222)" : {
         "module" : "Palette Color Lookup Table",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "1C",
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
         "name" : "Segmented Green Palette Color Lookup Table Data"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "M",
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
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Color Palette",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,0018)" : {
         "name" : "SOP Instance UID",
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
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0100,0426)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Color Palette",
         "name" : "Authorization Equipment Certification Number",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO."
      },
      "(0028,1101)" : {
         "usage" : "M",
         "module" : "Palette Color Lookup Table",
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Red Palette Color Lookup Table Descriptor",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Address",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "entity" : "Color Palette",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "entity" : "Color Palette",
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
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Name",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "M",
         "module" : "SOP Common",
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
         "entity" : "Color Palette",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "name" : "Operators' Name"
      },
      "(0400,0500)" : {
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
         "name" : "Encrypted Attributes Sequence",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "Color Palette",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "MAC Algorithm",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,0110)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Color Palette",
         "name" : "Coding Scheme Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(fffa,fffa)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Color Palette",
         "name" : "Digital Signatures Sequence",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "name" : "SOP Authorization Comment",
         "entity" : "Color Palette",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "name" : "Coding Scheme Responsible Organization"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institutional Department Name",
         "entity" : "Color Palette",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Digital Signature UID",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Color Palette"
      },
      "(0100,0410)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "SOP Instance Status",
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
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette"
      },
      "(0070,0086)[<0>](0040,1102)" : {
         "usage" : "M",
         "module" : "Color Palette Definition",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ],
         "entity" : "Color Palette"
      },
      "(0070,0087)" : {
         "usage" : "M",
         "module" : "Color Palette Definition",
         "desc" : [
            "A sequence containing alternate descriptions suitable for presentation to the user, e.g., in different languages. One or more Items are permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "The values of Specific Character Set for the entire Data set need to be sufficient to encode all Items of this sequence correctly, e.g., using a single value with broad support such as UTF-8, or multiple values with escape sequences."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Alternate Content Description Sequence",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "entity" : "Color Palette"
      },
      "(0008,0005)" : {
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "name" : "Specific Character Set",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,0201)" : {
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                                       "attrs" : {
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5"
                                       },
                                       "el" : "olink"
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "el" : "para"
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
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ],
                     "el" : "para"
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
         ],
         "name" : "Timezone Offset From UTC",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Color Palette"
      },
      "(0008,001a)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Related General SOP Class UID",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Color Palette"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "entity" : "Color Palette",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "name" : "Modifying System",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "name" : "Device Serial Number",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "entity" : "Color Palette",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "name" : "Certified Timestamp Type",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0070,0086)[<0>](0008,0080)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ],
         "entity" : "Color Palette",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "Color Palette Definition",
         "usage" : "M"
      },
      "(0028,1102)" : {
         "module" : "Palette Color Lookup Table",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "1",
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Green Palette Color Lookup Table Descriptor"
      },
      "(0020,9172)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "name" : "Conversion Source Attributes Sequence",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence",
         "entity" : "Color Palette",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)" : {
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
         "name" : "Contributing Equipment Sequence",
         "entity" : "Color Palette",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2",
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Color Palette",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,001b)" : {
         "name" : "Original Specialized SOP Class UID",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
            {
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Color Palette",
         "name" : "MAC ID Number",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature."
      },
      "(0070,0086)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ],
         "req" : "1C",
         "entity" : "Color Palette",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Color Palette Definition",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Color Palette",
         "name" : "Reason for the Attribute Modification",
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
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "name" : "Time of Last Calibration",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0400,0561)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Color Palette",
         "name" : "Original Attributes Sequence",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Color Palette",
         "name" : "Encrypted Content Transfer Syntax UID",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used."
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Time"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1",
         "entity" : "Color Palette",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "name" : "Retrieve URI",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396"
      },
      "(0028,1221)" : {
         "usage" : "M",
         "module" : "Palette Color Lookup Table",
         "name" : "Segmented Red Palette Color Lookup Table Data",
         "desc" : [
            "Segmented Red Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.9.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "1C",
         "entity" : "Color Palette"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "name" : "Contribution DateTime",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "entity" : "Color Palette",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,0014)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Instance Creator UID",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Color Palette"
      },
      "(0070,0087)[<0>](0070,0081)" : {
         "name" : "Content Description",
         "desc" : "An alternate description that is used to identify this SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "Color Palette Definition"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "name" : "Coding Scheme Name",
         "desc" : "The coding scheme full common name",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the related equipment is being reference.",
            "Only a single Item shall be included in this sequence.",
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
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "name" : "Attribute Modification DateTime"
      },
      "(0028,1202)" : {
         "module" : "Palette Color Lookup Table",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               }
            },
            " for further explanation."
         ],
         "name" : "Green Palette Color Lookup Table Data"
      },
      "(0070,0084)" : {
         "usage" : "M",
         "module" : "Color Palette Definition",
         "name" : "Content Creator's Name",
         "desc" : "Name of operator (such as a technologist or physician) creating the content of the SOP Instance.",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "req" : "2",
         "entity" : "Color Palette"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
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
         "name" : "Data Elements Signed",
         "entity" : "Color Palette",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,0015)" : {
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
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
         "name" : "Instance Coercion DateTime",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0028,1223)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "1C",
         "entity" : "Color Palette",
         "name" : "Segmented Blue Palette Color Lookup Table Data",
         "desc" : [
            "Segmented Blue Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
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
         "usage" : "M"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Color Palette",
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
         ]
      },
      "(0008,0016)" : {
         "usage" : "M",
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
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "name" : "SOP Class UID",
         "entity" : "Color Palette",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0086)" : {
         "desc" : "Identification of the person who created the content. Only a single item is permitted in this sequence.",
         "name" : "Content Creator's Identification Code Sequence",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Color Palette Definition"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "name" : "Modified Attributes Sequence",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0028,0303)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Color Palette",
         "name" : "Longitudinal Temporal Information Modified",
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
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15"
                  }
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0070,0086)[<0>](0008,0081)" : {
         "module" : "Color Palette Definition",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "entity" : "Color Palette",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "May include Sequence Attributes and their Items.",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Color Palette",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "name" : "Coding Scheme Registry",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "usage" : "M",
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C"
      },
      "(0028,1203)" : {
         "usage" : "M",
         "module" : "Palette Color Lookup Table",
         "desc" : [
            "Blue Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               }
            },
            " for further explanation."
         ],
         "name" : "Blue Palette Color Lookup Table Data",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "1C"
      },
      "(0070,0087)[<0>](0008,0006)" : {
         "desc" : "The language in which Content Description (0070,0081) within this sequence item is written. A single Item shall be present.",
         "name" : "Language Code Sequence",
         "entity" : "Color Palette",
         "req" : "1",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "usage" : "M",
         "module" : "Color Palette Definition"
      },
      "(0018,a001)[<0>](0018,1020)" : {
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
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0070,0080)" : {
         "module" : "Color Palette Definition",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "desc" : "A label that is used to identify this SOP Instance.",
         "name" : "Content Label"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "name" : "HL7 Instance Identifier",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "entity" : "Color Palette",
         "name" : "MAC ID Number",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0028,1199)" : {
         "name" : "Palette Color Lookup Table UID",
         "desc" : [
            "Palette Color Lookup Table UID. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.9.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "Palette Color Lookup Table"
      },
      "(0070,0086)[<0>](0040,1101)" : {
         "usage" : "M",
         "module" : "Color Palette Definition",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ],
         "req" : "1"
      },
      "(0100,0420)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Color Palette",
         "name" : "SOP Authorization DateTime",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO."
      },
      "(0028,2000)" : {
         "usage" : "M",
         "module" : "ICC Profile",
         "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
         "name" : "ICC Profile",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.11.15-1"
         ],
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "name" : "Contribution Description",
         "desc" : "Description of the contribution the equipment made to the composite instance."
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0020,0013)" : [
         {
            "name" : "Instance Number",
            "desc" : "A number that identifies this Composite object instance.",
            "req" : "3",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "entity" : "Color Palette",
            "usage" : "M",
            "module" : "SOP Common"
         },
         {
            "usage" : "M",
            "module" : "Color Palette Definition",
            "name" : "Instance Number",
            "desc" : "A number that identifies this SOP Instance.",
            "mod_tables" : [
               "table_C.28.1-1",
               "table_10-12"
            ],
            "req" : "1",
            "entity" : "Color Palette"
         }
      ],
      "(0040,a390)[<0>](0008,1150)" : {
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "name" : "Coding Scheme Version",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common"
      }
   }
}