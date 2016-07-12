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
      "(0008,001a)" : {
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
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "module" : "SOP Common"
      },
      "(0008,001b)" : {
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
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
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common"
      },
      "(0070,0086)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "module" : "Color Palette Definition",
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ]
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "name" : "Modifying System",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "module" : "SOP Common",
         "name" : "Institutional Department Name",
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M",
         "name" : "Private Group Reference",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common",
         "name" : "Coding Scheme Responsible Organization"
      },
      "(0008,0300)" : {
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "name" : "Private Data Element Characteristics Sequence",
         "module" : "SOP Common"
      },
      "(0070,0084)" : {
         "module" : "Color Palette Definition",
         "name" : "Content Creator's Name",
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "desc" : "Name of operator (such as a technologist or physician) creating the content of the SOP Instance."
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
         "usage" : "M",
         "entity" : "Color Palette",
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "SOP Common",
         "name" : "Institution Name"
      },
      "(0008,0016)" : {
         "module" : "SOP Common",
         "name" : "SOP Class UID",
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Uniquely identifies the SOP Class. See ",
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ]
      },
      "(0100,0426)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Authorization Equipment Certification Number"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Institution Address"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Color Palette",
         "name" : "Identifying Private Elements",
         "module" : "SOP Common"
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "name" : "SOP Authorization Comment",
         "module" : "SOP Common"
      },
      "(0008,010f)" : {
         "name" : "Context Identifier",
         "module" : "SOP Common",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.6"
                  }
               },
               "."
            ]
         ],
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3",
         "name" : "Contribution Description",
         "module" : "SOP Common"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "name" : "Private Creator Reference",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "entity" : "Color Palette",
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
                     "el" : "para",
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
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
      "(0020,9172)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "module" : "SOP Common",
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
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Color Palette"
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
         "req" : "1C",
         "usage" : "M",
         "entity" : "Color Palette",
         "name" : "Nonidentifying Private Elements",
         "module" : "SOP Common"
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
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "module" : "SOP Common",
         "name" : "MAC Algorithm"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "module" : "SOP Common",
         "name" : "Manufacturer",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer of the equipment that contributed to the composite instance."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "module" : "SOP Common",
         "name" : "Person's Telecom Information",
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
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 }
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
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
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
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common"
      },
      "(0008,0012)" : {
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Instance Creation Date"
      },
      "(fffa,fffa)" : {
         "module" : "SOP Common",
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette"
      },
      "(0008,0201)" : {
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
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     },
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
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "3",
         "name" : "Timezone Offset From UTC",
         "module" : "SOP Common"
      },
      "(0070,0080)" : {
         "desc" : "A label that is used to identify this SOP Instance.",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "1",
         "module" : "Color Palette Definition",
         "name" : "Content Label"
      },
      "(0008,0053)" : {
         "req" : "1C",
         "entity" : "Color Palette",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The view requested during the C-MOVE operation that resulted in the transfer of this instance.",
            {
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
               ],
               "title" : "Enumerated Values:"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "module" : "SOP Common",
         "name" : "Query/Retrieve View"
      },
      "(0070,0086)[<0>](0040,1104)" : {
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ],
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
                           "content" : [
                              "\n                    ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "el" : "para"
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
                                 "el" : "para",
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 }
                              },
                              "\n                  "
                           ],
                           "el" : "listitem"
                        },
                        "\n                "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Color Palette Definition",
         "name" : "Person's Telecom Information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "name" : "Encrypted Content",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M"
      },
      "(0028,1199)" : {
         "name" : "Palette Color Lookup Table UID",
         "module" : "Palette Color Lookup Table",
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.7-22a"
         ],
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
         ]
      },
      "(0008,0013)" : {
         "name" : "Instance Creation Time",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "module" : "SOP Common",
         "name" : "Deidentification Action Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance."
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M",
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
         "name" : "Time of Last Calibration",
         "module" : "SOP Common"
      },
      "(0028,1221)" : {
         "module" : "Palette Color Lookup Table",
         "name" : "Segmented Red Palette Color Lookup Table Data",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1C",
         "desc" : [
            "Segmented Red Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.9.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-22a"
         ]
      },
      "(0028,1203)" : {
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
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "req" : "1C",
         "entity" : "Color Palette",
         "usage" : "M",
         "name" : "Blue Palette Color Lookup Table Data",
         "module" : "Palette Color Lookup Table"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1"
      },
      "(0028,1201)" : {
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Red Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "1C",
         "name" : "Red Palette Color Lookup Table Data",
         "module" : "Palette Color Lookup Table"
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Uniquely identifies the SOP Instance. See ",
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "SOP Instance UID"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "module" : "SOP Common",
         "name" : "Signature",
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0100,0410)" : {
         "module" : "SOP Common",
         "name" : "SOP Instance Status",
         "entity" : "Color Palette",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,2002)" : {
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.15.1.2"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.11.15-1"
         ],
         "name" : "Color Space",
         "module" : "ICC Profile"
      },
      "(0400,0500)" : {
         "module" : "SOP Common",
         "name" : "Encrypted Attributes Sequence",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1C",
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
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M"
      },
      "(0070,0086)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "entity" : "Color Palette",
         "usage" : "M",
         "name" : "Institution Name",
         "module" : "Color Palette Definition"
      },
      "(0028,1222)" : {
         "usage" : "M",
         "entity" : "Color Palette",
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
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "module" : "Palette Color Lookup Table",
         "name" : "Segmented Green Palette Color Lookup Table Data"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Device Serial Number"
      },
      "(0028,1102)" : {
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "module" : "Palette Color Lookup Table",
         "name" : "Green Palette Color Lookup Table Descriptor"
      },
      "(0008,0110)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Coding Scheme Identification Sequence"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M",
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1",
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
         "name" : "Data Elements Signed",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "module" : "SOP Common",
         "name" : "Digital Signature UID"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "req" : "1",
         "usage" : "M",
         "entity" : "Color Palette"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "name" : "Coding Scheme Name",
         "module" : "SOP Common"
      },
      "(0018,a001)" : {
         "usage" : "M",
         "entity" : "Color Palette",
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
         ],
         "module" : "SOP Common",
         "name" : "Contributing Equipment Sequence"
      },
      "(0008,0110)[<0>](0008,0112)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1C",
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Color Palette",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     },
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
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "Certificate Type",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "2C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present."
      },
      "(0070,0081)" : {
         "desc" : "A description of the content of the SOP Instance.",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "2",
         "module" : "Color Palette Definition",
         "name" : "Content Description"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "module" : "SOP Common",
         "name" : "Contribution DateTime"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(0040,a390)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Color Palette",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this Sequence.",
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
         "name" : "HL7 Structured Document Reference Sequence",
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0008,1160)" : {
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
         "req" : "1C",
         "usage" : "M",
         "entity" : "Color Palette",
         "module" : "SOP Common",
         "name" : "Referenced Frame Number"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "name" : "Digital Signature DateTime",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "entity" : "Color Palette",
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
                     "el" : "para",
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ],
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ]
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "name" : "Attribute Modification DateTime",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M"
      },
      "(0008,0122)" : {
         "module" : "SOP Common",
         "name" : "Mapping Resource Name",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3",
         "desc" : [
            "The name of the Mapping Resource.",
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
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common"
      },
      "(0008,0123)" : {
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "name" : "Context Group Identification Sequence",
         "module" : "SOP Common"
      },
      "(0070,0086)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "module" : "Color Palette Definition",
         "name" : "Person's Telephone Numbers"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M",
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
                                 "el" : "para",
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 }
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
         ]
      },
      "(0100,0420)" : {
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "SOP Authorization DateTime"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "desc" : [
            "Manufacturer's designation of the software version of the equipment that contributed to the composite instance. See ",
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
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Software Versions"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1",
         "name" : "Encrypted Content Transfer Syntax UID",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "SOP Common",
         "name" : "Spatial Resolution"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "module" : "SOP Common",
         "name" : "Deidentification Action",
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ],
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
                     "el" : "orderedlist",
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
                                 },
                                 "el" : "para",
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
                                 "el" : "para",
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
         ]
      },
      "(0070,0086)" : {
         "module" : "Color Palette Definition",
         "name" : "Content Creator's Identification Code Sequence",
         "desc" : "Identification of the person who created the content. Only a single item is permitted in this Sequence.",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "3"
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
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
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1C"
      },
      "(0070,0087)[<0>](0008,0006)" : {
         "desc" : "The language in which Content Description (0070,0081) within this Sequence item is written. A single Item shall be present.",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1",
         "module" : "Color Palette Definition",
         "name" : "Language Code Sequence"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "module" : "SOP Common",
         "name" : "Institution Name",
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Institution where the equipment that contributed to the composite instance is located."
      },
      "(0400,0561)" : {
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Original Attributes Sequence"
      },
      "(0028,1202)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if segmented data is NOT used in an Image IOD, or if the IOD is a Presentation State IOD or Color Palette IOD. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "Palette Color Lookup Table",
         "name" : "Green Palette Color Lookup Table Data"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "name" : "Instance Creator UID",
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Coding Scheme Designator"
      },
      "(0070,0086)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "module" : "Color Palette Definition",
         "name" : "Person's Address"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "req" : "1",
         "entity" : "Color Palette",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common"
      },
      "(0070,0086)[<0>](0008,0081)" : {
         "module" : "Color Palette Definition",
         "name" : "Institution Address",
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "1",
         "name" : "Reason for the Attribute Modification",
         "module" : "SOP Common"
      },
      "(0008,0015)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            ")."
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "module" : "SOP Common",
         "entity" : "Color Palette",
         "usage" : "M",
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
         ]
      },
      "(0008,0124)" : {
         "module" : "SOP Common",
         "name" : "Mapping Resource Identification Sequence",
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0070,0087)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "desc" : [
            "A sequence containing alternate descriptions suitable for presentation to the user, e.g., in different languages. One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "The values of Specific Character Set for the entire Data set need to be sufficient to encode all Items of this sequence correctly, e.g., using a single value with broad support such as UTF-8, or multiple values with escape sequences."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3d164798-44f3-4257-89fd-277d3c965c3d"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "module" : "Color Palette Definition",
         "name" : "Alternate Content Description Sequence"
      },
      "(0008,0118)" : {
         "desc" : "The unique identifier of the Mapping Resource",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Mapping Resource UID"
      },
      "(0028,1223)" : {
         "module" : "Palette Color Lookup Table",
         "name" : "Segmented Blue Palette Color Lookup Table Data",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1C",
         "desc" : [
            "Segmented Blue Palette Color Lookup Table Data. Required if segmented data is used in an Image IOD; shall not be present in a Presentation State IOD or Color Palette IOD. See ",
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
         ]
      },
      "(0028,1101)" : {
         "module" : "Palette Color Lookup Table",
         "name" : "Red Palette Color Lookup Table Descriptor",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Color Palette"
      },
      "(0028,0303)" : {
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "name" : "Longitudinal Temporal Information Modified"
      },
      "(0008,0106)" : {
         "name" : "Context Group Version",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "entity" : "Color Palette",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
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
                     "linkend" : "sect_8.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Mapping Resource"
      },
      "(0020,0013)" : [
         {
            "desc" : "A number that identifies this Composite object instance.",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "req" : "3",
            "entity" : "Color Palette",
            "usage" : "M",
            "module" : "SOP Common",
            "name" : "Instance Number"
         },
         {
            "desc" : "A number that identifies this SOP Instance.",
            "mod_tables" : [
               "table_C.28.1-1",
               "table_10-12"
            ],
            "req" : "1",
            "usage" : "M",
            "entity" : "Color Palette",
            "name" : "Instance Number",
            "module" : "Color Palette Definition"
         }
      ],
      "(0028,2000)" : {
         "module" : "ICC Profile",
         "name" : "ICC Profile",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1",
         "mod_tables" : [
            "table_C.11.15-1"
         ],
         "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values."
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "SOP Common",
         "name" : "Referenced Segment Number"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0070,0086)[<0>](0008,0082)" : {
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12",
            "table_10-1"
         ],
         "module" : "Color Palette Definition",
         "name" : "Institution Code Sequence"
      },
      "(0028,1103)" : {
         "module" : "Palette Color Lookup Table",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "req" : "1",
         "usage" : "M",
         "entity" : "Color Palette",
         "mod_tables" : [
            "table_C.7-22a"
         ],
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup table Data (0028,1203). See ",
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
      "(0008,0117)" : {
         "usage" : "M",
         "entity" : "Color Palette",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Context UID"
      },
      "(0018,9004)" : {
         "name" : "Content Qualification",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
            ]
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Color Palette",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme Version",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Color Palette",
         "usage" : "M"
      },
      "(0070,0087)[<0>](0070,0081)" : {
         "name" : "Content Description",
         "module" : "Color Palette Definition",
         "mod_tables" : [
            "table_C.28.1-1",
            "table_10-12"
         ],
         "desc" : "An alternate description that is used to identify this SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Color Palette"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme UID",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "1C",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ]
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
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3",
         "name" : "Date of Last Calibration",
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2",
         "entity" : "Color Palette",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Source of Previous Values"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Color Palette",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name(s) of the operator(s) of the contributing equipment."
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "module" : "SOP Common"
      },
      "(0008,0005)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "entity" : "Color Palette",
         "usage" : "M",
         "name" : "Specific Character Set",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Color Palette",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "sect_E.3.10",
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "template:PS3.15 Section %n %t"
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Color Palette",
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Block Identifying Information Status"
      }
   }
}
