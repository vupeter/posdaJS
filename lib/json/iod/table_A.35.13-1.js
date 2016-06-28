var data = {
   "tags" : {
      "(0010,0024)[<0>](0040,003a)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0020,0011)" : {
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : [
            "A number that identifies the Series.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "No SR-specific semantics are specified."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "1",
         "module" : "SR Document Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Series Number"
      },
      "(0040,a073)[<0>](0040,a027)" : {
         "module" : "SR Document General",
         "req" : "1",
         "desc" : "Organization to which the Verifying Observer Name (0040,A075) is accountable in the current interpretation procedure.",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "name" : "Verifying Organization",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "usage" : "M",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "General Study"
      },
      "(0100,0420)" : {
         "name" : "SOP Authorization DateTime",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0040,a370)[<0>](0040,100a)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Reason for Requested Procedure Code Sequence",
         "module" : "SR Document General",
         "req" : "3",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : "Document",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "req" : "1C",
         "desc" : [
            "The view requested during the C-MOVE operation that resulted in the transfer of this instance.",
            {
               "type" : "variablelist",
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
               ]
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "orderedlist",
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
                                 "content" : [
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "el" : "para"
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    "
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
         "req" : "1",
         "module" : "SR Document General"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0031)" : {
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "module" : "SR Document General",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0018,1000)" : {
         "usage" : "M",
         "entity" : "Equipment",
         "name" : "Device Serial Number",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "module" : "General Equipment"
      },
      "(0038,0062)" : {
         "name" : "Service Episode Description",
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Description of the type of service episode.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0018,1201)" : {
         "name" : "Time of Last Calibration",
         "entity" : "Equipment",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0040,a385)" : {
         "module" : "SR Document General",
         "req" : "1C",
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
         "usage" : "M",
         "entity" : "Document",
         "name" : "Pertinent Other Evidence Sequence"
      },
      "(0040,a07c)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "Document",
         "usage" : "M",
         "req" : "2",
         "desc" : [
            "Coded identifier of Custodial Institution or Organization.",
            "Zero or one Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General"
      },
      "(0018,1008)" : {
         "module" : "General Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "entity" : "Equipment",
         "name" : "Gantry ID"
      },
      "(0032,1034)" : {
         "module" : "General Study",
         "req" : "3",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Requesting Service Code Sequence",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "SR Document General",
         "req" : "3",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "usage" : "M",
         "name" : "Retrieve Location UID"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Institution Code Sequence"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. Only a single value shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ]
      },
      "(0040,a073)[<0>](0040,a075)" : {
         "desc" : "The person authorized by the Verifying Organization (0040,A027) to verify documents of this type and who accepts responsibility for the content of this document.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Verifying Observer Name"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,0054)" : {
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Retrieve AE Title"
      },
      "(0012,0081)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "req" : "1C",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "entity" : "Patient",
         "usage" : "U"
      },
      "(0018,1200)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         "req" : "3",
         "name" : "Date of Last Calibration",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0018,1800)" : {
         "entity" : "Frame of Reference",
         "usage" : "U",
         "name" : "Acquisition Time Synchronized",
         "desc" : [
            "Acquisition DateTime (0008,002A) synchronized with external time reference.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "Y",
                     null
                  ],
                  [
                     "N",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.4.2.1.4",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "SR Document General",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0088,0130)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Storage Media File-Set ID",
         "module" : "SR Document General",
         "req" : "3",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0400,0500)" : {
         "name" : "Encrypted Attributes Sequence",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID"
      },
      "(0008,0201)" : {
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
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
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
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
                                    "The \"+\" sign may not be omitted."
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
               ],
               "el" : "note"
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
                     "el" : "para"
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
                     "content" : [
                        "Offset = -0200"
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Timezone Offset From UTC"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Device Serial Number",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0038,0014)" : {
         "module" : "Patient Study",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "name" : "Issuer of Admission ID Sequence"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "module" : "SR Document General",
         "req" : "3",
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
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Referenced Digital Signature Sequence"
      },
      "(0040,a360)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Predecessor Documents Sequence",
         "desc" : [
            "Shall refer to SR SOP Instances (e.g., prior or preliminary reports) whose content has been wholly or partially included in this document with or without modification.",
            "One or more Items shall be included in this sequence.",
            "Required if this document includes content from other documents.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The amendment process of an existing SR Document may be described using the Purpose of Reference Code Sequence."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Referenced Digital Signature Sequence"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)[<2>](0008,1150)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Referenced SOP Class UID"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(0040,a07a)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Participant Sequence",
         "module" : "SR Document General",
         "desc" : [
            "Persons or devices related to the clinical content of this document.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "name" : "MAC",
         "entity" : "Document",
         "usage" : "M",
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
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "req" : "1C",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0040,a07c)[<0>](0008,0080)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Institution Name",
         "module" : "SR Document General",
         "desc" : "Name of Custodial Institution or Organization.",
         "req" : "2",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "module" : "General Study",
         "name" : "Study Description",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,a07a)[<0>](0040,a084)" : {
         "name" : "Observer Type",
         "usage" : "M",
         "entity" : "Document",
         "desc" : {
            "type" : "variablelist",
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
            ]
         },
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "1",
         "module" : "SR Document General"
      },
      "(0010,0200)" : {
         "module" : "Patient",
         "desc" : [
            "Indicates whether or not the subject is a quality control phantom.",
            {
               "type" : "variablelist",
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
               ]
            },
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Quality Control Subject"
      },
      "(0040,a730)[<0>](0040,a120)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "module" : "SR Document Content"
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0040,e011)" : {
         "name" : "Retrieve Location UID",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "req" : "3"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](7fe0,0010)" : {
         "name" : "Pixel Data",
         "usage" : "M",
         "entity" : "Document",
         "desc" : [
            [
               "A data stream of the pixel samples that comprise the Image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.4"
                  }
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
         "req" : "1C",
         "module" : "SR Document Content"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
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
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,a078)[<0>](0008,1010)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Name of the device observer for this document instance.",
            "Required if Observer Type value is DEV."
         ],
         "req" : "2C",
         "module" : "SR Document General",
         "name" : "Station Name",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "SR Document Content",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "usage" : "M",
         "entity" : "Document",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "module" : "SR Document General"
      },
      "(0040,a730)[<0>](0040,a040)" : {
         "module" : "SR Document Content",
         "req" : "1",
         "desc" : [
            "The type of the value encoded in this Content Item.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.3.2.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Value Type"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "module" : "SR Document General",
         "req" : "3",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0010,1001)" : {
         "name" : "Other Patient Names",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Other names used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0040,a730)[<0>](0040,a123)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Person Name",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "module" : "SR Document Content"
      },
      "(0018,1803)" : {
         "usage" : "U",
         "entity" : "Frame of Reference",
         "name" : "NTP Source Address",
         "module" : "Synchronization",
         "desc" : [
            "IP Address of NTP, SNTP, or PTP time source. IPv4 addresses shall be in dotted decimal (e.g., 192.168.1.1). The IPv6 addresses shall be in colon separated hexadecimal (e.g., 12:34:56:78:9a:bc:de:f0).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Identity of this value in two instances acquired contemporaneously implies a common time base. The NTP Source Address might not persist over time."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "3"
      },
      "(0012,0031)" : {
         "name" : "Clinical Trial Site Name",
         "usage" : "U",
         "entity" : "Patient",
         "req" : "2",
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               },
               "el" : "xref"
            }
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0018,106c)" : {
         "name" : "Synchronization Channel",
         "usage" : "U",
         "entity" : "Frame of Reference",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "desc" : [
            [
               "Identifier of waveform channel that records the synchronization channel or trigger, see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.4.2.1.3"
                  }
               },
               "."
            ],
            "Required if synchronization channel or trigger is encoded in a waveform in this SOP Instance"
         ],
         "req" : "1C"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0004)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Photometric Interpretation",
         "module" : "SR Document Content",
         "desc" : [
            "Specifies the intended interpretation of the pixel data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.2"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ]
      },
      "(0010,0030)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient's Birth Date",
         "req" : "2",
         "desc" : "Birth date of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
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
         ],
         "module" : "General Study"
      },
      "(0040,a370)[<0>](0008,0051)" : {
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "entity" : "Study",
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,a492)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Completion Flag Description",
         "module" : "SR Document General",
         "desc" : "Explanation of the value sent in Completion Flag (0040,A491).",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "3"
      },
      "(0008,0050)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "req" : "2",
         "module" : "General Study",
         "name" : "Accession Number",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0034)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Pixel Aspect Ratio",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.7",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1C"
      },
      "(0020,0052)" : {
         "module" : "Frame of Reference",
         "req" : "1",
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.4.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.7-6"
         ],
         "usage" : "U",
         "entity" : "Frame of Reference",
         "name" : "Frame of Reference UID"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Patient",
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Universal Entity ID"
      },
      "(0040,a078)[<0>](0008,1090)" : {
         "module" : "SR Document General",
         "desc" : [
            "Model Name of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Manufacturer's Model Name"
      },
      "(0040,1012)" : {
         "entity" : "Study",
         "usage" : "M",
         "name" : "Reason For Performed Procedure Code Sequence",
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
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "General Study"
      },
      "(0040,a385)[<0>](0008,1115)" : {
         "req" : "1",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced Series Sequence"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Manufacturer's Model Name"
      },
      "(0040,a375)[<0>](0008,1115)" : {
         "module" : "SR Document General",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Referenced Series Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0010)" : {
         "module" : "SR Document Content",
         "desc" : "Number of rows in the image.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1",
         "name" : "Rows",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Referenced SOP Class UID"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0040,a010)" : {
         "module" : "SR Document Content",
         "desc" : [
            "The type of relationship between the (enclosing) Source Content Item and the Target Content Item.",
            "IODs specify additional constraints on Relationships (including lists of Enumerated Values).",
            {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.17.3.2.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Relationship Type"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "desc" : [
            "Manufacturer's designation of the software version of the equipment that contributed to the composite instance. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.5.1.1.3"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Software Versions",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0040,a07a)[<0>](0008,0070)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Manufacturer of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Manufacturer"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "module" : "Patient",
         "req" : "1",
         "desc" : "Identification number of an animal within the registry.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Number",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,a525)" : {
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.2.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1C"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,0054)" : {
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "req" : "3"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document General",
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
      "(0008,1062)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0040,a370)[<0>](0008,1110)[<1>](0008,1155)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "SR Document General",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,1040)" : {
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "module" : "General Equipment",
         "name" : "Institutional Department Name",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0018,1030)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Protocol Name",
         "module" : "SR Document Series",
         "desc" : [
            "Description of the conditions under which the Series was performed.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "This may represent the type of analysis used in creation of the SR SOP Instances."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-1"
         ],
         "req" : "3"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1201)" : {
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
         ],
         "req" : "1C",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Data"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "req" : "3",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Contribution DateTime"
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0008,1090)" : {
         "module" : "General Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0040,a078)[<0>](0040,a123)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Name of the person observer for this document Instance.",
            "Required if Observer Type value is PSN."
         ],
         "req" : "1C",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Person Name"
      },
      "(0040,a073)[<0>](0040,a088)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Coded identifier of Verifying Observer.",
            "Zero or one Item shall be included in this sequence."
         ],
         "req" : "2",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Verifying Observer Identification Code Sequence"
      },
      "(0018,a001)[<0>](0018,1200)" : {
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
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Date of Last Calibration"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0107)" : {
         "name" : "Largest Image Pixel Value",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : "The maximum actual pixel value encountered in this image.",
         "req" : "3",
         "module" : "SR Document Content"
      },
      "(0008,0015)" : {
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            ")."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Instance Coercion DateTime"
      },
      "(0010,1021)" : {
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Patient's Size Code Sequence",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-1",
            "table_10-11"
         ],
         "module" : "SR Document Series"
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Instance Creation Date"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "orderedlist",
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
         "module" : "SR Document General"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0033)" : {
         "module" : "SR Document General",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "entity" : "Document",
         "usage" : "M",
         "name" : "Universal Entity ID Type"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "entity" : "Document",
         "desc" : "Identifies the segments to which the reference applies identified by Segment Number (0062,0004). Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "req" : "1C",
         "module" : "SR Document Content"
      },
      "(0040,a525)[<0>](0008,1115)" : {
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
         ],
         "module" : "SR Document General"
      },
      "(0012,0082)" : {
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "usage" : "U",
         "entity" : "Patient"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0101)" : {
         "name" : "Bits Stored",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document Content",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.5",
                  "targetdoc" : "PS3.5"
               }
            },
            " for further explanation."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ]
      },
      "(0040,a730)[<0>](0048,0301)" : {
         "name" : "Pixel Origin Interpretation",
         "usage" : "M",
         "entity" : "Document",
         "desc" : [
            [
               "For a referenced multi-frame image, specifies whether the Graphic Data (0070,0022) values are to be interpreted relative to the individual frame pixel origins, or relative to the Total Pixel Matrix origin (see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.12.4.1.4"
                  }
               },
               ")."
            ],
            "Required if the value of Referenced SOP Class UID (0008,1150) of the referenced image is 1.2.840.10008.5.1.4.1.1.77.1.6 (VL Whole Slide Microscopy Image). May be present otherwise.",
            {
               "type" : "variablelist",
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
               ]
            },
            "If not present, Graphic Data values are defined relative to the frame pixel origin."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.6-1"
         ],
         "req" : "1C",
         "module" : "SR Document Content"
      },
      "(0008,103e)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Series Description",
         "desc" : "Description of the Series",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "req" : "3",
         "module" : "SR Document Series"
      },
      "(0008,001b)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Original Specialized SOP Class UID",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "name" : "Encrypted Content",
         "usage" : "M",
         "entity" : "Document",
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
         "module" : "SOP Common"
      },
      "(0038,0010)" : {
         "name" : "Admission ID",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3"
      },
      "(0012,0010)" : {
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1",
         "name" : "Clinical Trial Sponsor Name",
         "usage" : "U",
         "entity" : "Patient"
      },
      "(4ffe,0001)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "MAC Parameters Sequence",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "desc" : [
            "A sequence that provides reference to a Study SOP Class/Instance pair.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.6.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "module" : "SR Document General",
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Referenced SOP Instance MAC Sequence"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "SR Document General"
      },
      "(0040,a370)[<0>](0032,1064)" : {
         "name" : "Requested Procedure Code Sequence",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "A sequence that conveys the requested procedure. Zero or one Item shall be included in this sequence.",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "2",
         "module" : "SR Document General"
      },
      "(0040,a07a)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "2",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0012,0051)" : {
         "name" : "Clinical Trial Time Point Description",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "3"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)" : {
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "module" : "SR Document General",
         "name" : "Referenced SOP Sequence",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Encrypted Content Transfer Syntax UID",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a370)[<0>](0008,0050)" : {
         "name" : "Accession Number",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "desc" : "A departmental IS generated number that identifies the order for the Study.",
         "req" : "2",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0103)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Pixel Representation",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1",
         "module" : "SR Document Content"
      },
      "(0040,a730)[<0>](0040,a132)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Referenced Sample Positions",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "desc" : [
            "List of samples within a multiplex group specifying temporal points of the referenced data. Position of first sample is 1.",
            "Required if the Referenced SOP Instance is a Waveform and Referenced Time Offsets (0040,A138) and Referenced DateTime (0040,A13A) are not present.",
            "May be used only if Referenced Channels (0040,A0B0) refers to channels within a single multiplex group."
         ],
         "req" : "1C"
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
         "req" : "1C",
         "module" : "SR Document Content",
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,2000)" : {
         "name" : "ICC Profile",
         "entity" : "Document",
         "usage" : "M",
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
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "module" : "SR Document Content"
      },
      "(0040,a07a)[<0>](0040,a080)" : {
         "module" : "SR Document General",
         "req" : "1",
         "desc" : [
            [
               "Participant's role with respect to the clinical content of this document. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.2.5"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "In HL7 Structured Documents, the participation comparable to Attestor is the \"Authenticator\"."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Participation Type"
      },
      "(0040,a370)[<0>](0032,1060)" : {
         "name" : "Requested Procedure Description",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "2",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0100,0426)" : {
         "name" : "Authorization Equipment Certification Number",
         "entity" : "Document",
         "usage" : "M",
         "req" : "3",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
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
         ],
         "req" : "1"
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Institutional Department Name"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "module" : "SR Document Content"
      },
      "(0008,0030)" : {
         "usage" : "M",
         "entity" : "Study",
         "name" : "Study Time",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Time the Study started.",
         "req" : "2",
         "module" : "General Study"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0088,0130)" : {
         "name" : "Storage Media File-Set ID",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "SR Document General",
         "req" : "1",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
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
                     }
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
      "(0008,0096)[<0>](0040,1101)" : {
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,a073)[<0>](0040,a030)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "Date and Time of verification by the Verifying Observer Name (0040,A075).",
         "req" : "1",
         "module" : "SR Document General",
         "name" : "Verification DateTime",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a078)[<0>](0008,0082)" : {
         "module" : "SR Document General",
         "req" : "2",
         "desc" : [
            "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,1120)" : {
         "name" : "Referenced Patient Sequence",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0010,1010)" : {
         "entity" : "Study",
         "usage" : "U",
         "name" : "Patient's Age",
         "req" : "3",
         "desc" : "Age of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3"
      },
      "(0040,a730)[<0>](0070,0022)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.18.9.1.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "module" : "SR Document Content",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Graphic Data"
      },
      "(0040,a730)[<0>](0040,a043)" : {
         "module" : "SR Document Content",
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
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "req" : "1C",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Concept Name Code Sequence"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "name" : "Referenced SOP Instance MAC Sequence",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document General",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a07a)[<0>](0008,1010)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Station Name",
         "desc" : [
            "Name of the device observer for this document instance.",
            "Required if Observer Type value is DEV."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "2C",
         "module" : "SR Document General"
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Institution Name",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "module" : "General Equipment"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "req" : "2C"
      },
      "(0018,1802)" : {
         "name" : "Time Distribution Protocol",
         "usage" : "U",
         "entity" : "Frame of Reference",
         "req" : "3",
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
               "list" : [
                  [
                     "NTP",
                     "Network Time Protocol"
                  ],
                  [
                     "IRIG",
                     "Inter Range Instrumentation Group"
                  ],
                  [
                     "GPS",
                     "Global Positioning System"
                  ],
                  [
                     "SNTP",
                     "Simple Network Time Protocol"
                  ],
                  [
                     "PTP",
                     "IEEE 1588 Precision Time Protocol"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,2180)" : {
         "module" : "Patient Study",
         "desc" : "Occupation of the Patient.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Occupation",
         "usage" : "U",
         "entity" : "Study"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "MAC Algorithm",
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
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0040,a07a)[<0>](0040,a123)" : {
         "module" : "SR Document General",
         "desc" : [
            "Name of the person observer for this document Instance.",
            "Required if Observer Type value is PSN."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "entity" : "Document",
         "usage" : "M",
         "name" : "Person Name"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
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
         "req" : "1",
         "name" : "MAC Algorithm",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0012,0083)" : {
         "usage" : "U",
         "entity" : "Study",
         "name" : "Consent for Clinical Trial Use Sequence",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial use of the composite instances within this Study.",
            "One or more Items are permitted in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
      },
      "(0040,a730)[<0>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document Content",
         "req" : "1",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1"
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
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
         "req" : "1",
         "module" : "SR Document General",
         "name" : "Data Elements Signed",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "usage" : "M",
         "entity" : "Study",
         "name" : "Universal Entity ID Type",
         "module" : "General Study",
         "req" : "1C",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0010,2299)" : {
         "module" : "Patient",
         "req" : "2C",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Organization",
         "entity" : "Patient",
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
         "req" : "3",
         "module" : "SR Document General",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0008,0081)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Institution Address",
         "module" : "General Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,a375)[<0>](0020,000d)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Study Instance UID",
         "module" : "SR Document General",
         "desc" : "Unique identifier for the Study",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "entity" : "Document",
         "usage" : "M",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,0054)" : {
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "module" : "SR Document General",
         "name" : "Retrieve AE Title",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0008,1062)" : {
         "name" : "Physician(s) Reading Study Identification Sequence",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,a078)[<0>](0008,0080)" : {
         "module" : "SR Document General",
         "req" : "2",
         "desc" : "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "name" : "Institution Name",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0018,106a)" : {
         "usage" : "U",
         "entity" : "Frame of Reference",
         "name" : "Synchronization Trigger",
         "req" : "1",
         "desc" : [
            "Data acquisition synchronization with external equipment",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SOURCE",
                     "this equipment provides synchronization channel or trigger to other equipment"
                  ],
                  [
                     "EXTERNAL",
                     "this equipment receives synchronization channel or trigger from other equipment"
                  ],
                  [
                     "PASSTHRU",
                     "this equipment receives synchronization channel or trigger and forwards it"
                  ],
                  [
                     "NO TRIGGER",
                     "data acquisition not synchronized by common channel or trigger"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization"
      },
      "(0010,2201)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient Species Description",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0012,0063)" : {
         "module" : "Patient",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "orderedlist",
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
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
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
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
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "name" : "De-identification Method"
      },
      "(0008,103f)" : {
         "usage" : "M",
         "entity" : "Series",
         "name" : "Series Description Code Sequence",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "SR Document Series"
      },
      "(0010,2203)" : {
         "module" : "Patient Study",
         "req" : "2C",
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "ALTERED",
                     "Altered/Neutered"
                  ],
                  [
                     "UNALTERED",
                     "Unaltered/intact"
                  ]
               ]
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Sex Neutered",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "name" : "Referenced SOP Instance MAC Sequence",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "module" : "Patient Study",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0028,0120)" : {
         "usage" : "M",
         "entity" : "Equipment",
         "name" : "Pixel Padding Value",
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
                     "el" : "orderedlist",
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
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
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
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
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
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
                                 ]
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study"
      },
      "(0040,a360)[<0>](0008,1115)" : {
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "module" : "SR Document General",
         "name" : "Referenced Series Sequence",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ],
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                                 ]
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "el" : "para"
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,0070)" : {
         "name" : "Manufacturer",
         "entity" : "Equipment",
         "usage" : "M",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "2",
         "module" : "General Equipment"
      },
      "(0040,a372)" : {
         "desc" : "A Sequence that conveys the codes of the performed procedures pertaining to this SOP Instance. Zero or more Items shall be included in this sequence.",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "2",
         "module" : "SR Document General",
         "name" : "Performed Procedure Code Sequence",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a073)" : {
         "name" : "Verifying Observer Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C",
         "desc" : [
            "The person or persons authorized to verify documents of this type and accept responsibility for the content of this document.",
            "One or more Items shall be included in this sequence.",
            "Required if Verification Flag (0040,A493) is VERIFIED.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "In HL7 Structured Documents, the comparable attribute is the \"legalAuthenticator\"."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0040,e011)" : {
         "req" : "3",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Retrieve Location UID"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Person Identification Code Sequence"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
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
         "module" : "SOP Common",
         "name" : "Certified Timestamp",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person's Address"
      },
      "(0040,a730)[<0>](0040,a504)[<1>](0040,db00)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Template Identifier",
         "req" : "1",
         "desc" : "Template identifier.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "module" : "SR Document Content"
      },
      "(0040,a078)" : {
         "name" : "Author Observer Sequence",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "3",
         "desc" : [
            "The person or device that created the clinical content of this document. This attribute sets the default Observer Context for the root of the content tree.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0040,a491)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            [
               "The estimated degree of completeness of this SR Document. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.17.2.7",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "req" : "1",
         "module" : "SR Document General",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Completion Flag"
      },
      "(0040,a730)[<0>](0040,a050)" : {
         "module" : "SR Document Content",
         "desc" : [
            "This flag specifies for a CONTAINER whether or not its contained Content Items are logically linked in a continuous textual flow, or are separate items.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SEPARATE",
                     null
                  ],
                  [
                     "CONTINUOUS",
                     null
                  ]
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.18.8.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "name" : "Continuity of Content",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0040,a122)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Time",
         "module" : "SR Document Content",
         "req" : "1C",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ]
      },
      "(0040,a078)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "2C",
         "desc" : [
            "Coded identifier of person observer.",
            "Zero or one Item shall be included in this sequence.",
            "Required if Observer Type value is PSN."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General"
      },
      "(0040,a370)[<0>](0040,1001)" : {
         "desc" : "Identifier of the related Requested Procedure",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "req" : "2",
         "module" : "SR Document General",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Requested Procedure ID"
      },
      "(0018,1061)" : {
         "module" : "Synchronization",
         "req" : "3",
         "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "entity" : "Frame of Reference",
         "usage" : "U",
         "name" : "Trigger Source or Type"
      },
      "(0008,1080)" : {
         "req" : "3",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Admitting Diagnoses Description"
      },
      "(0008,1049)" : {
         "name" : "Physician(s) of Record Identification Sequence",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "desc" : [
            "Reference to a Softcopy Presentation State SOP Class/SOP Instance pair.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Referenced SOP Sequence"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Universal Entity ID"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "usage" : "M",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Coding Scheme Designator",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient"
      },
      "(0040,a730)[<0>](0070,0023)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Graphic Type",
         "req" : "1",
         "desc" : [
            "See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.18.9.1.2"
               },
               "el" : "xref"
            },
            " for Enumerated Values."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "module" : "SR Document Content"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0090)" : {
         "entity" : "Study",
         "usage" : "M",
         "name" : "Referring Physician's Name",
         "module" : "General Study",
         "desc" : "Name of the patient's referring physician",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2"
      },
      "(0040,a525)[<0>](0020,000d)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study",
         "req" : "1",
         "name" : "Study Instance UID",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a496)" : {
         "module" : "SR Document General",
         "req" : "3",
         "desc" : [
            "Indicates whether this SR Document is intended to be regarded as a preliminary or final report.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PRELIMINARY",
                     "This report precedes the final report and may contain limited information; it may be time sensitive, and it is not expected to contain all the reportable findings."
                  ],
                  [
                     "FINAL",
                     "This report is the definitive means of communicating the results of a procedure."
                  ]
               ]
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The definitions of the Enumerated Values are derived from the ACR Practice Guideline for Communication of Diagnostic Imaging Findings, Revised 2005."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "name" : "Preliminary Flag",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,0005)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Specific Character Set",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "module" : "SR Document General",
         "req" : "1",
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
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
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "usage" : "M",
         "name" : "Data Elements Signed"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "module" : "SR Document General",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Storage Media File-Set UID"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1"
      },
      "(0040,a385)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study",
         "req" : "1",
         "module" : "SR Document General"
      },
      "(0040,a07a)[<0>](0040,1101)" : {
         "desc" : [
            "Coded identifier of person observer.",
            "Zero or one Item shall be included in this sequence.",
            "Required if Observer Type value is PSN."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0008,1060)" : {
         "module" : "General Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "name" : "Name of Physician(s) Reading Study",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1103)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup Table Data (0028,1203). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "req" : "1",
         "module" : "SR Document General",
         "name" : "Digital Signature UID",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a078)[<0>](0018,1002)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Device UID",
         "module" : "SR Document General",
         "desc" : [
            "Unique identifier of device observer.",
            "Required if Observer Type value is DEV."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "1C"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0088,0140)" : {
         "module" : "SR Document General",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "usage" : "M",
         "name" : "Storage Media File-Set UID"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Attribute Modification DateTime"
      },
      "(0010,4000)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient Comments",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "User-defined additional information about the patient.",
         "req" : "3",
         "module" : "Patient"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "SR Document General",
         "req" : "1",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "name" : "Series Instance UID",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0008,0014)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Instance Creator UID",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0040,a300)" : {
         "name" : "Measured Value Sequence",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document Content",
         "desc" : [
            "This is the value of the Content Item.",
            "Shall consist of a Sequence of Items conveying the measured value(s), which represent integers or real numbers and units of measurement.",
            "Zero or one Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "req" : "2"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
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
         "req" : "1C"
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
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID"
      },
      "(0040,a493)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Indicates whether this SR Document is Verified.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "UNVERIFIED",
                     "Not attested to."
                  ],
                  [
                     "VERIFIED",
                     "Attested to by a Verifying Observer Name (0040,A075) who is accountable for its content."
                  ]
               ]
            },
            "A value of \"VERIFIED\" shall be used only when the value of Completion Flag (0040,A491) is \"COMPLETE\".",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The intent of this specification is that the \"prevailing final version\" of an SR Document is the version having the most recent Verification DateTime (0040,A030), Verification Flag (0040,A493) of VERIFIED and Preliminary Flag (0040,A496) of FINAL."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "module" : "SR Document General",
         "name" : "Verification Flag",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
         "req" : "1",
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
         "name" : "SOP Instance UID",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0032)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "SR Document General"
      },
      "(0020,0200)" : {
         "desc" : [
            "UID of common synchronization environment. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.2.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "usage" : "U",
         "entity" : "Frame of Reference",
         "name" : "Synchronization Frame of Reference UID"
      },
      "(0012,0060)" : {
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "2",
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "usage" : "U",
         "name" : "Clinical Trial Coordinating Center Name"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "module" : "Patient",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
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
         "req" : "3",
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0070,031a)" : {
         "module" : "SR Document Content",
         "desc" : [
            "The globally unique identifier for this fiducial item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The fiducial UID can be used to associate this set of graphics with other Content Items."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Fiducial UID"
      },
      "(0012,0020)" : {
         "module" : "Clinical Trial Subject",
         "req" : "1",
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
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0106)" : {
         "module" : "SR Document Content",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "3",
         "name" : "Smallest Image Pixel Value",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "Patient"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0011)" : {
         "name" : "Columns",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document Content",
         "desc" : "Number of columns in the image",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1"
      },
      "(0040,a07a)[<0>](0008,1090)" : {
         "module" : "SR Document General",
         "desc" : [
            "Model Name of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "req" : "1C",
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "usage" : "M",
         "entity" : "Study",
         "name" : "Institution Address",
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "name" : "HL7 Instance Identifier"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme Name",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0040,a730)[<0>](0040,a301)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Numeric Value Qualifier Code Sequence",
         "module" : "SR Document Content",
         "req" : "3",
         "desc" : [
            "Qualification of Numeric Value in Measured Value Sequence, or reason for absence of Measured Value Sequence Item.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "name" : "MAC",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3"
               },
               "el" : "xref"
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
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
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "module" : "SR Document General"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0040,a730)[<0>](0040,a124)" : {
         "name" : "UID",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "module" : "SR Document Content"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Certificate of Signer",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "req" : "1"
      },
      "(0040,a730)[<0>](0040,a504)" : {
         "name" : "Content Template Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C",
         "desc" : [
            "Template that describes the content of this Content Item and its subsidiary Content Items.",
            "Only a single Item shall be included in this sequence.",
            [
               "Required if a template was used to define the content of this Item, and the template consists of a single CONTAINER with nested content, and it is the outermost invocation of a set of nested templates that start with the same CONTAINER (see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.18.8.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               ")."
            ]
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "module" : "SR Document Content"
      },
      "(0400,0561)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Original Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,a370)[<0>](0040,2017)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Filler Order Number/Imaging Service Request",
         "module" : "SR Document General",
         "req" : "2",
         "desc" : "The order number assigned to the Imaging Service Request by the party filling the order.",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)" : {
         "module" : "SR Document Content",
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
         "req" : "3",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Icon Image Sequence"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1160)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "module" : "SR Document Content",
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0020,1040)" : {
         "usage" : "U",
         "entity" : "Frame of Reference",
         "name" : "Position Reference Indicator",
         "desc" : [
            "Part of the imaging target used as a reference. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.2"
               }
            },
            " for further explanation."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "module" : "Frame of Reference"
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Instance Creation Time"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0102)" : {
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1",
         "module" : "SR Document Content",
         "name" : "High Bit",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "req" : "2",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0006)" : {
         "module" : "SR Document Content",
         "req" : "1C",
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
         "name" : "Planar Configuration",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "desc" : [
            "The type of distribution for which consent to distribute has been granted.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  }
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Distribution Type"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
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
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15"
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Spatial Resolution",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0033)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "req" : "1C",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Universal Entity ID Type"
      },
      "(0040,a171)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Observation UID",
         "module" : "SR Document Content",
         "req" : "3",
         "desc" : "Unique identifier for the observation Content Item (and its subsidiary Content Items, if any). The UID represents the semantic content of the observation; an encoding of the same observation with the same context into another representation (e.g., a CDA Entry) may use the same UID.",
         "mod_tables" : [
            "table_C.17-6"
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "req" : "1",
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
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15"
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
         "name" : "MAC Algorithm",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "SR Document Content",
         "name" : "Referenced SOP Class UID",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,0016)" : {
         "module" : "SOP Common",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "name" : "SOP Class UID"
      },
      "(0012,0072)" : {
         "name" : "Clinical Trial Series Description",
         "usage" : "U",
         "entity" : "Series",
         "desc" : [
            "A description of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               }
            },
            "."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series"
      },
      "(0040,a360)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "req" : "1"
      },
      "(0040,a730)[<0>](0040,a504)[<1>](0008,0105)" : {
         "name" : "Mapping Resource",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document Content",
         "desc" : [
            [
               "Mapping Resource that defines the template. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_8.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "DCMR",
                     "DICOM Content Mapping Resource"
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Signature",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "req" : "1",
         "module" : "SR Document General"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "SR Document General"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Modifying System"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Identifier Type Code)."
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
         ],
         "module" : "Patient"
      },
      "(0008,0096)" : {
         "entity" : "Study",
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "module" : "General Study"
      },
      "(0040,a07a)[<0>](0040,a082)" : {
         "name" : "Participation DateTime",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "DateTime of participation with respect to the clinical content of this document.",
         "req" : "2"
      },
      "(0010,1020)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters.",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Patient's Size"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Station Name"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0008,1111)" : {
         "name" : "Referenced Performed Procedure Step Sequence",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance for which the Series is created.",
            "Zero or one item shall be included in this sequence.",
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "The Performed Procedure Step referred to by this Attribute is the Step during which this Document is generated."
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
                                    "If this Document is generated during the same Performed Procedure Step as the evidence in the current interpretation procedure, this attribute may contain reference to that Performed Procedure Step."
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
                                    "This Attribute is not used to convey reference to the evidence in the current interpretation procedure. See Current Requested Procedure Evidence Sequence (0040,A375)."
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
                                    "This Sequence may be sent zero length if the Performed Procedure Step is unknown."
                                 ],
                                 "el" : "para"
                              },
                              "\n                    "
                           ]
                        },
                        "\n                  "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "module" : "SR Document Series"
      },
      "(0028,0303)" : {
         "name" : "Longitudinal Temporal Information Modified",
         "entity" : "Document",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
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
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person's Address"
      },
      "(0020,0013)" : [
         {
            "name" : "Instance Number",
            "entity" : "Document",
            "usage" : "M",
            "desc" : "A number that identifies the SR Document.",
            "req" : "1",
            "mod_tables" : [
               "table_C.17-2"
            ],
            "module" : "SR Document General"
         },
         {
            "desc" : "A number that identifies this Composite object instance.",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "req" : "3",
            "module" : "SOP Common",
            "name" : "Instance Number",
            "entity" : "Document",
            "usage" : "M"
         }
      ],
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1101)" : {
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
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1C",
         "module" : "SR Document Content",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "module" : "General Study"
      },
      "(0008,0051)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Issuer of Accession Number Sequence"
      },
      "(0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "entity" : "Document",
         "usage" : "M",
         "mod_tables" : [
            "table_C.17-2"
         ],
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
         "req" : "1C",
         "module" : "SR Document General"
      },
      "(0040,a370)[<0>](0040,2016)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "The order number assigned to the Imaging Service Request by the party placing the order.",
         "req" : "2",
         "module" : "SR Document General",
         "name" : "Placer Order Number/Imaging Service Request",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "name" : "Reason for the Attribute Modification",
         "entity" : "Document",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0008,1010)" : {
         "name" : "Station Name",
         "entity" : "Equipment",
         "usage" : "M",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "module" : "General Equipment"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0088,0130)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Storage Media File-Set ID",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "req" : "3"
      },
      "(0010,0020)" : {
         "name" : "Patient ID",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Primary hospital identification number or code for the patient.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Contributing Equipment Sequence",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,0054)" : {
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Retrieve AE Title"
      },
      "(0040,a730)[<0>](0040,a160)" : {
         "name" : "Text Value",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document Content",
         "req" : "1C",
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
                     "content" : [
                        "The text may contain single or multi-byte characters and use code extension techniques as described in ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetdoc" : "PS3.5",
                              "targetptr" : "PS3.5",
                              "xrefstyle" : "select: labelnumber"
                           }
                        },
                        " if permitted by the values of Specific Character Set (0008,0005)."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ]
      },
      "(0010,0024)" : {
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "name" : "MAC",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "1",
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
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
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document General",
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
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0008,001a)" : {
         "name" : "Related General SOP Class UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,2202)" : {
         "module" : "Patient",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "name" : "Patient Species Code Sequence",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0010,1030)" : {
         "desc" : "Weight of the Patient, in kilograms.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Patient's Weight",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0008,0020)" : {
         "usage" : "M",
         "entity" : "Study",
         "name" : "Study Date",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Date the Study started.",
         "req" : "2",
         "module" : "General Study"
      },
      "(0040,a032)" : {
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.17-6"
         ],
         "module" : "SR Document Content",
         "name" : "Observation DateTime",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0040,a130)" : {
         "req" : "1",
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.18.7.1.1",
                  "xrefstyle" : "select: label"
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
         "usage" : "M",
         "entity" : "Document",
         "name" : "Temporal Range Type"
      },
      "(0010,2297)" : {
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Responsible Person"
      },
      "(0040,a370)[<0>](0020,000d)" : {
         "module" : "SR Document General",
         "req" : "1",
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "usage" : "M",
         "name" : "Study Instance UID"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Signature",
         "module" : "SR Document General",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Certificate Type",
         "module" : "SOP Common",
         "req" : "1",
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
               "el" : "note",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,0010)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Patient's full name.",
         "req" : "2",
         "module" : "Patient",
         "name" : "Patient's Name",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,a370)" : {
         "module" : "SR Document General",
         "req" : "1C",
         "desc" : [
            "Identifies Requested Procedures that are being fulfilled (completely or partially) by creation of this Document.",
            "One or more Items shall be included in this sequence.",
            "Required if this Document fulfills at least one Requested Procedure. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Referenced Request Sequence"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The algorithm used in generating the MAC.",
            {
               "type" : "variablelist",
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
               ]
            },
            {
               "content" : [
                  "\n                    ",
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
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "MAC Algorithm"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0012,0040)" : {
         "usage" : "U",
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID",
         "desc" : [
            "The assigned identifier for the clinical trial subject. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
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
         "module" : "SR Document General",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Institution Code Sequence"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "req" : "1",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "name" : "Signature",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a07c)" : {
         "module" : "SR Document General",
         "req" : "3",
         "desc" : [
            "Custodial organization for this SR Document instance. Represents the organization from which the document originates and that is in charge of maintaining the document, i.e., the steward of the original source document.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This may or may not be identical to the Institution identified in the Equipment Module."
                     ],
                     "el" : "para"
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
         "name" : "Custodial Organization Sequence",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0010,2298)" : {
         "name" : "Responsible Person Role",
         "entity" : "Patient",
         "usage" : "M",
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
                     "linkend" : "sect_C.7.1.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ],
         "req" : "1C"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1202)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Green Palette Color Lookup Table Data",
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               }
            },
            " for further explanation."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content"
      },
      "(0040,a390)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "1C",
         "module" : "SOP Common",
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0032)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "module" : "SR Document General"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0012,0021)" : {
         "usage" : "U",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Name",
         "desc" : [
            "The name of the clinical trial protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.3"
               }
            },
            "."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0008,1048)" : {
         "name" : "Physician(s) of Record",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "desc" : [
            "Names of the physician(s) who are responsible for overall patient care at time of Study (see ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for Performing Physician)"
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Digital Signature UID"
      },
      "(0040,a730)[<0>](0040,a138)" : {
         "name" : "Referenced Time Offsets",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "Specifies temporal points for reference by number of seconds after start of data.",
            "Required if Referenced Sample Positions (0040,A132) and Referenced DateTime (0040,A13A) are not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "module" : "SR Document Content"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "module" : "SR Document General",
         "name" : "Storage Media File-Set UID",
         "entity" : "Document",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Digital Signature DateTime",
         "module" : "SOP Common",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "entity" : "Study",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "module" : "SOP Common",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0010,2293)" : {
         "name" : "Patient Breed Code Sequence",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
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
         "req" : "2C"
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
         "req" : "1C",
         "module" : "SR Document General",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Manufacturer"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Series Instance UID",
         "module" : "SR Document General",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). Only a single value shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ]
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0032)" : {
         "module" : "SR Document General",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Universal Entity ID"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
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
                  "linkend" : "sect_C.12.1.1.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1",
         "module" : "SR Document General",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Data Elements Signed"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "usage" : "M",
         "entity" : "Patient",
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
         ],
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
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
      "(0012,0083)[<0>](0012,0085)" : {
         "module" : "Clinical Trial Study",
         "req" : "1",
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  }
               },
               "."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Distribution Flag",
         "usage" : "U",
         "entity" : "Study"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
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
         "req" : "1"
      },
      "(0100,0424)" : {
         "name" : "SOP Authorization Comment",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3"
      },
      "(0040,a07a)[<0>](0018,1002)" : {
         "name" : "Device UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C",
         "desc" : [
            "Unique identifier of device observer.",
            "Required if Observer Type value is DEV."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "module" : "General Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers"
      },
      "(0020,000e)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Series Instance UID",
         "desc" : [
            "Unique identifier of the Series.",
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
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "module" : "SR Document Series"
      },
      "(0010,21b0)" : {
         "entity" : "Study",
         "usage" : "U",
         "name" : "Additional Patient History",
         "module" : "Patient Study",
         "desc" : "Additional information about the Patient's medical history.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3"
      },
      "(0012,0030)" : {
         "name" : "Clinical Trial Site ID",
         "usage" : "U",
         "entity" : "Patient",
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
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0040,a730)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Content Sequence",
         "req" : "1C",
         "desc" : [
            "A potentially recursively nested Sequence of Items that conveys content that is the Target of Relationships with the enclosing Source Content Item.",
            "One or more Items shall be included in this sequence.",
            "Required if the enclosing Content Item has relationships.",
            {
               "el" : "note",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                "
               ]
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
         "mod_tables" : [
            "table_C.17-6"
         ],
         "module" : "SR Document Content"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1155)" : {
         "module" : "SR Document Content",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "SR Document General",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0010,0032)" : {
         "name" : "Patient's Birth Time",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Birth time of the Patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "3",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0010,0040)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Sex of the named patient.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "req" : "2",
         "module" : "Patient",
         "name" : "Patient's Sex",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Spatial Resolution",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a730)[<0>](3006,0024)" : {
         "desc" : "Uniquely identifies the Frame of Reference within which the coordinates are defined.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "module" : "SR Document Content",
         "name" : "Referenced Frame of Reference UID",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-1",
            "table_10-11"
         ],
         "module" : "SR Document Series"
      },
      "(0040,a730)[<0>](0040,a13a)" : {
         "module" : "SR Document Content",
         "req" : "1C",
         "desc" : [
            "Specifies temporal points for reference by absolute time.",
            "Required if Referenced Sample Positions (0040,A132) and Referenced Time Offsets (0040,A138) are not present."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "name" : "Referenced DateTime",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "entity" : "Document",
         "usage" : "M",
         "desc" : [
            "This is the value of the Content Item.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.2-1"
         ],
         "module" : "SR Document Content"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0033)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Universal Entity ID Type",
         "module" : "SR Document General",
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
         "req" : "1C"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Referenced SOP Class UID",
         "module" : "SR Document General",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "req" : "1C",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "name" : "Patient ID",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1",
         "desc" : "An identification number or code used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0020,000e)" : {
         "name" : "Series Instance UID",
         "usage" : "M",
         "entity" : "Document",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "module" : "SR Document General"
      },
      "(0010,0024)[<0>](0040,0036)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,a370)[<0>](0040,0027)" : {
         "name" : "Order Filler Identifier Sequence",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document General",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Filler Order Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0040,a370)[<0>](0040,0026)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Order Placer Identifier Sequence",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Placer Order Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General"
      },
      "(0008,0060)" : {
         "name" : "Modality",
         "entity" : "Series",
         "usage" : "M",
         "module" : "SR Document Series",
         "req" : "1",
         "desc" : [
            "Modality type.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SR",
                     "SR Document"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-1"
         ]
      },
      "(0040,a370)[<0>](0040,1002)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Reason for the Requested Procedure",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "Reason for requesting this procedure.",
         "req" : "3",
         "module" : "SR Document General"
      },
      "(0012,0042)" : {
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "Identifies the subject for blinded evaluations. Shall be present if Clinical Trial Subject ID (0012,0040) is absent. May be present otherwise. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.7"
               }
            },
            "."
         ],
         "req" : "1C",
         "name" : "Clinical Trial Subject Reading ID",
         "entity" : "Patient",
         "usage" : "U"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)" : {
         "name" : "Referenced Real World Value Mapping Instance Sequence",
         "usage" : "M",
         "entity" : "Document",
         "desc" : [
            "Reference to a Real World Value Mapping SOP Class/SOP Instance pair.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "req" : "3",
         "module" : "SR Document Content"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
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
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Signature"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "module" : "SOP Common",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Operators' Name",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0010,2292)" : {
         "desc" : [
            [
               "The breed of the patient. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.1"
                  }
               },
               "."
            ],
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient Breed Description",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Identifier Type Code)."
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
         ],
         "req" : "3"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,08ea)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "req" : "1",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "module" : "SR Document Content"
      },
      "(0040,a370)[<0>](0008,1110)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Uniquely identifies the Study SOP Instance.",
            "Zero or one Item shall be included in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.6.1"
                  }
               },
               "."
            ]
         ],
         "req" : "2",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced Study Sequence"
      },
      "(0010,0021)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0040,a370)[<0>](0008,1110)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "SR Document General",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Study",
         "usage" : "M",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "usage" : "M",
         "name" : "Coding Scheme UID"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "SR Document General",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "usage" : "M",
         "name" : "Retrieve Location UID"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the related equipment is being reference.",
            "Only a single Item shall be included in this sequence.",
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
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0008,0031)" : {
         "module" : "SR Document Series",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : "Time the Series started.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Series Time"
      },
      "(0008,1084)" : {
         "name" : "Admitting Diagnoses Code Sequence",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0088,0130)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "req" : "3",
         "name" : "Storage Media File-Set ID",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0008,0023)" : {
         "name" : "Content Date",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "The date the document content creation started.",
         "req" : "1"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Referenced Frame Number",
         "module" : "SOP Common",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C"
      },
      "(0018,1801)" : {
         "name" : "Time Source",
         "entity" : "Frame of Reference",
         "usage" : "U",
         "req" : "3",
         "desc" : "ID of equipment or system providing time reference",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization"
      },
      "(0012,0071)" : {
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "3",
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "usage" : "U",
         "name" : "Clinical Trial Series ID"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0002)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Number of samples (planes) in this image. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.1"
               }
            },
            " for further explanation."
         ],
         "req" : "1",
         "module" : "SR Document Content",
         "name" : "Samples per Pixel",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0008,0033)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "The time the document content creation started.",
         "req" : "1",
         "name" : "Content Time",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
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
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ],
         "req" : "1",
         "module" : "SR Document General",
         "name" : "MAC",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "req" : "3",
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
         ],
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "name" : "Modified Attributes Sequence",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SOP Common",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "SR Document General",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "req" : "1C",
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
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "module" : "SR Document General",
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
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "3",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced Digital Signature Sequence"
      },
      "(0010,1000)" : {
         "name" : "Other Patient IDs",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Digital Signature UID"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Signature",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0040,a0b0)" : {
         "module" : "SR Document Content",
         "req" : "1C",
         "desc" : [
            [
               "List of channels in Waveform to which the reference applies. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.18.5.1.1",
                     "xrefstyle" : "select: label"
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
         ],
         "usage" : "M",
         "entity" : "Document",
         "name" : "Referenced Waveform Channels"
      },
      "(0008,0110)[<0>](0008,0112)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Coding Scheme Registry"
      },
      "(0008,0021)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Series Date",
         "module" : "SR Document Series",
         "desc" : "Date the Series started.",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Type of Patient ID",
         "module" : "Patient",
         "desc" : [
            "The type of identifier in this item.",
            {
               "title" : "Defined Terms:",
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
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1"
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Ethnic Group"
      },
      "(0040,a375)" : {
         "name" : "Current Requested Procedure Evidence Sequence",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : [
            "Full set of Composite SOP Instances, of which the creator is aware, which were created to satisfy the current Requested Procedure(s) for which this SR Document is generated or that are referenced in the content tree.",
            "One or more Items shall be included in this sequence.",
            "Required if the creator is aware of Composite Objects acquired in order to satisfy the Requested Procedure(s) for which the SR Document is or if instances are referenced in the content tree. May be present otherwise.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.2.3"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "MAC Algorithm",
         "module" : "SR Document General",
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
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0100,0410)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "SOP Instance Status",
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
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,a730)[<0>](0040,db73)" : {
         "name" : "Referenced Content Item Identifier",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document Content",
         "req" : "1C",
         "desc" : [
            "An ordered set of one or more integers that uniquely identifies the Target Content Item of the relationship.",
            "The root Content Item is referenced by a single value of 1.",
            "Each subsequent integer represents an ordinal position of a Content Item in the Content Sequence (0040,A730) in which it belongs. The Referenced Content Item Identifier is the set of these ordinal positions along the by-value relationship path. The number of values in this Multi-Value Attribute is exactly the number of relationships traversed in the SR content tree plus one.",
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "See ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "linkend" : "sect_C.17.3.2.5",
                                          "xrefstyle" : "select: label"
                                       }
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
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
                                       },
                                       "el" : "olink"
                                    },
                                    ")."
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
               ]
            },
            "Required if the Target Content Item is denoted by-reference, i.e., the Document Relationship Macro and Document Content Macro are not included."
         ],
         "mod_tables" : [
            "table_C.17-6"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0100)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
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
         "req" : "1",
         "name" : "Bits Allocated",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1102)" : {
         "name" : "Green Palette Color Lookup Table Descriptor",
         "entity" : "Document",
         "usage" : "M",
         "module" : "SR Document Content",
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
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "req" : "1C"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a30a)" : {
         "desc" : [
            "Numeric measurement value.",
            "Only a single value shall be present."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "module" : "SR Document Content",
         "name" : "Numeric Value",
         "entity" : "Document",
         "usage" : "M"
      },
      "(0038,0060)" : {
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Service Episode ID",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "req" : "1",
         "module" : "SR Document General"
      },
      "(0018,1020)" : {
         "name" : "Software Versions",
         "entity" : "Equipment",
         "usage" : "M",
         "desc" : [
            "Manufacturer's designation of software version of the equipment that produced the composite instances. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.5.1.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "module" : "SR Document General",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ]
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID Type"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0020,0010)" : {
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "name" : "Study ID"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1203)" : {
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
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content",
         "name" : "Blue Palette Color Lookup Table Data",
         "usage" : "M",
         "entity" : "Document"
      },
      "(0040,a078)[<0>](0040,a084)" : {
         "name" : "Observer Type",
         "usage" : "M",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : {
            "type" : "variablelist",
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
            ]
         },
         "req" : "1",
         "module" : "SR Document General"
      },
      "(0012,0064)" : {
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "name" : "De-identification Method Code Sequence",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "req" : "1",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Document",
         "name" : "Digital Signature UID"
      },
      "(0008,1032)" : {
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Procedure Code Sequence"
      },
      "(fffa,fffa)" : {
         "usage" : "M",
         "entity" : "Document",
         "name" : "Digital Signatures Sequence",
         "module" : "SOP Common",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0038,0064)" : {
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Issuer of Service Episode ID Sequence",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0012,0050)" : {
         "name" : "Clinical Trial Time Point ID",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               }
            },
            "."
         ],
         "req" : "2",
         "module" : "Clinical Trial Study"
      },
      "(0012,0062)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient Identity Removed",
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "The true identity of the patient has been removed from the Attributes and the Pixel Data",
            {
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
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0020,000d)" : {
         "entity" : "Study",
         "usage" : "M",
         "name" : "Study Instance UID",
         "req" : "1",
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0040,a730)[<0>](0040,a121)" : {
         "name" : "Date",
         "usage" : "M",
         "entity" : "Document",
         "module" : "SR Document Content",
         "req" : "1C",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Breed Registry Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "module" : "Patient"
      }
   },
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
   ]
}