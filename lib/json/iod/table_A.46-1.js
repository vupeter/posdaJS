var data = {
   "tags" : {
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0012,0042)" : {
         "desc" : [
            "Identifies the subject for blinded evaluations. Shall be present if Clinical Trial Subject ID (0012,0040) is absent. May be present otherwise. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.7",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "name" : "Clinical Trial Subject Reading ID",
         "req" : "1C",
         "module" : "Clinical Trial Subject"
      },
      "(0070,0080)" : {
         "module" : "Real World Value Mapping",
         "name" : "Content Label",
         "req" : "1",
         "desc" : "A label that is used to identify this SOP Instance.",
         "usage" : "M",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12"
         ]
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "name" : "Type of Patient ID",
         "req" : "1",
         "module" : "Patient",
         "usage" : "M",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "req" : "3",
         "name" : "Study Description",
         "module" : "General Study"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0012,0081)" : {
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "req" : "1C",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "usage" : "U",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0012,0064)" : {
         "req" : "1C",
         "name" : "De-identification Method Code Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0008,0060)" : [
         {
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "entity" : "Series",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.1"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "usage" : "M",
            "req" : "1",
            "name" : "Modality",
            "module" : "General Series"
         },
         {
            "module" : "Real World Value Mapping Series",
            "name" : "Modality",
            "req" : "1",
            "desc" : [
               "Modality type.",
               {
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "RWV",
                        null
                     ]
                  ],
                  "type" : "variablelist"
               }
            ],
            "usage" : "M",
            "entity" : "Series",
            "mod_tables" : [
               "table_C.25.1-1"
            ]
         }
      ],
      "(0018,a001)[<0>](0018,1200)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "name" : "Date of Last Calibration",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0070,0086)[<0>](0040,1102)" : {
         "module" : "Real World Value Mapping",
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12",
            "table_10-1"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "General Series",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "module" : "Clinical Trial Study",
         "name" : "Distribution Type",
         "req" : "1C",
         "usage" : "U",
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
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study"
      },
      "(0008,0015)" : {
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "module" : "SOP Common",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "req" : "3",
         "name" : "Referring Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "usage" : "M"
      },
      "(0018,1020)" : {
         "usage" : "M",
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
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Software Versions",
         "req" : "3"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "module" : "General Series",
         "req" : "1",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Instance UID of Study to which the related Series belongs"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Concept Name Code Sequence",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "module" : "General Series"
      },
      "(0008,0070)" : {
         "module" : "General Equipment",
         "name" : "Manufacturer",
         "req" : "2",
         "usage" : "M",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M"
      },
      "(0040,9094)[<0>](0008,1140)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0038,0062)" : {
         "desc" : "Description of the type of service episode.",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Service Episode Description",
         "req" : "3"
      },
      "(0012,0062)" : {
         "usage" : "M",
         "desc" : [
            "The true identity of the patient has been removed from the Attributes and the Pixel Data",
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
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Identity Removed",
         "req" : "3"
      },
      "(0008,0201)" : {
         "module" : "SOP Common",
         "name" : "Timezone Offset From UTC",
         "req" : "3",
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
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
                           ]
                        },
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
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
                     "content" : [
                        "For example:"
                     ],
                     "el" : "para"
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
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "name" : "Scheduled Procedure Step ID",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0010,4000)" : {
         "req" : "3",
         "name" : "Patient Comments",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "User-defined additional information about the patient.",
         "usage" : "M"
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient Study",
         "req" : "3",
         "name" : "Issuer of Admission ID Sequence"
      },
      "(0010,2203)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ]
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "module" : "Patient Study",
         "req" : "2C",
         "name" : "Patient's Sex Neutered"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Text Value",
         "req" : "1C"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "Common Instance Reference"
      },
      "(0020,0060)" : {
         "req" : "2C",
         "name" : "Laterality",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) are not sent.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "R",
                     "right"
                  ],
                  [
                     "L",
                     "left"
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
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M"
      },
      "(0012,0051)" : {
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Time Point Description",
         "req" : "3",
         "module" : "Clinical Trial Study"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study"
      },
      "(0012,0010)" : {
         "name" : "Clinical Trial Sponsor Name",
         "req" : "1",
         "module" : "Clinical Trial Subject",
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
         "usage" : "U",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "module" : "General Series",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "M",
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
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "DateTime",
         "module" : "General Series"
      },
      "(0032,1034)" : {
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "name" : "Requesting Service Code Sequence",
         "req" : "3",
         "module" : "General Study"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "module" : "General Series",
         "req" : "2",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ]
      },
      "(0028,0303)" : {
         "usage" : "M",
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
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
               ],
               "title" : "Enumerated Values:"
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
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3"
      },
      "(0012,0083)" : {
         "req" : "3",
         "name" : "Consent for Clinical Trial Use Sequence",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial use of the composite instances within this Study.",
            "One or more Items are permitted in this sequence.",
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
            ]
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "1",
         "usage" : "M",
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
         ],
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0500)" : {
         "usage" : "M",
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
         "entity" : "Real World Value Mapping",
         "module" : "SOP Common",
         "name" : "Encrypted Attributes Sequence",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "name" : "Universal Entity ID"
      },
      "(0012,0063)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
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
                                 "el" : "para",
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
                                 ]
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
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "De-identification Method",
         "module" : "Patient"
      },
      "(0008,1080)" : {
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Description",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "module" : "General Series",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,2201)" : {
         "module" : "Patient",
         "req" : "1C",
         "name" : "Patient Species Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ]
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "module" : "General Study",
         "name" : "Universal Entity ID Type",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study"
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Coding Scheme Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "module" : "General Study"
      },
      "(0012,0060)" : {
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Coordinating Center Name",
         "req" : "2",
         "usage" : "U",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.1"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "module" : "General Study",
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "name" : "Text Value",
         "module" : "General Series"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Real World Value Mapping",
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
                     "el" : "para",
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
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Certificate Type",
         "module" : "SOP Common"
      },
      "(0008,0081)" : {
         "module" : "General Equipment",
         "req" : "3",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Reason for the Attribute Modification"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "name" : "DateTime",
         "module" : "General Series"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "module" : "General Study",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "req" : "3",
         "module" : "General Series"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "SOP Common",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "module" : "General Series",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Instance Creation Date",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "module" : "General Series",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "module" : "General Series",
         "name" : "Date",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0070,0087)[<0>](0070,0081)" : {
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "An alternate description that is used to identify this SOP Instance.",
         "req" : "1",
         "name" : "Content Description",
         "module" : "Real World Value Mapping"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "req" : "1",
         "module" : "Common Instance Reference",
         "usage" : "M",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0040,0245)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "name" : "Performed Procedure Step Start Time"
      },
      "(0018,1000)" : {
         "module" : "General Equipment",
         "req" : "3",
         "name" : "Device Serial Number",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                     ]
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Real World Value Mapping",
         "desc" : [
            "The algorithm used in generating the MAC to be encrypted to form the Digital Signature.",
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
                  "\n                      ",
                  {
                     "el" : "para",
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
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "MAC Algorithm"
      },
      "(0010,1020)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "desc" : "Length or size of the Patient, in meters.",
         "module" : "Patient Study",
         "req" : "3",
         "name" : "Patient's Size"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "Floating Point Value"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Device Serial Number",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "module" : "General Series",
         "name" : "Protocol Context Sequence",
         "req" : "3",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series"
      },
      "(0100,0424)" : {
         "usage" : "M",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "SOP Authorization Comment",
         "req" : "3"
      },
      "(0040,a390)" : {
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence",
         "module" : "SOP Common",
         "entity" : "Real World Value Mapping",
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
                     "linkend" : "sect_C.12.1.1.6",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "name" : "Referenced Series Sequence",
         "module" : "Common Instance Reference"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,1062)" : {
         "req" : "3",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0012,0030)" : {
         "usage" : "U",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "name" : "Clinical Trial Site ID",
         "req" : "2",
         "module" : "Clinical Trial Subject"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "entity" : "Series"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Protocol ID",
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
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
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(0040,9094)[<0>](0008,1140)[<1>](0062,000b)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "module" : "Real World Value Mapping",
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "module" : "General Series",
         "name" : "Value Type",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "type" : "variablelist",
               "list" : [
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
                     "PNAME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0010,0021)" : {
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "module" : "Patient"
      },
      "(0010,1001)" : {
         "module" : "Patient",
         "name" : "Other Patient Names",
         "req" : "3",
         "usage" : "M",
         "desc" : "Other names used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
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
         "entity" : "Patient"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "module" : "General Study",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "usage" : "M",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "name" : "Requested Procedure Description",
         "req" : "3"
      },
      "(0008,1072)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "req" : "3",
         "name" : "Protocol Context Sequence",
         "module" : "General Series"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "req" : "3",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Real World Value Mapping",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15"
                  }
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
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Certificate of Signer",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "Rational Numerator Value"
      },
      "(0010,1000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "usage" : "M",
         "req" : "3",
         "name" : "Other Patient IDs",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0070,0086)" : {
         "desc" : "Identification of the person who created the content. Only a single item is permitted in this sequence.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12"
         ],
         "entity" : "Real World Value Mapping",
         "name" : "Content Creator's Identification Code Sequence",
         "req" : "3",
         "module" : "Real World Value Mapping"
      },
      "(0018,5100)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "desc" : [
            "Patient position descriptor relative to the equipment. Required for images where Patient Orientation Code Sequence (0054,0410) is not present and whose SOP Class is one of the following: CT (\"1.2.840.10008.5.1.4.1.1.2\") or MR (\"1.2.840.10008.5.1.4.1.1.4\") or Enhanced CT (\"1.2.840.10008.5.1.4.1.1.2.1\") or Enhanced MR Image (\"1.2.840.10008.5.1.4.1.1.4.1\") or Enhanced Color MR Image (\"1.2.840.10008.5.1.4.1.1.4.3\") or MR Spectroscopy (\"1.2.840.10008.5.1.4.1.1.4.2\") Storage SOP Classes.",
            "May be present for other SOP Classes if Patient Orientation Code Sequence (0054,0410) is not present.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.3.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "usage" : "M",
         "req" : "2C",
         "name" : "Patient Position",
         "module" : "General Series"
      },
      "(0038,0064)" : {
         "name" : "Issuer of Service Episode ID Sequence",
         "req" : "3",
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "General Series"
      },
      "(0008,1050)" : {
         "name" : "Performing Physician's Name",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Name of the physician(s) administering the Series.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0012,0072)" : {
         "name" : "Clinical Trial Series Description",
         "req" : "3",
         "module" : "Clinical Trial Series",
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
         "usage" : "U",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "module" : "General Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "req" : "3",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0010,2292)" : {
         "module" : "Patient",
         "name" : "Patient Breed Description",
         "req" : "2C",
         "usage" : "M",
         "desc" : [
            [
               "The breed of the patient. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Date",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "usage" : "M",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Contribution DateTime",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "An identification number or code used to identify the patient.",
         "usage" : "M",
         "req" : "1",
         "name" : "Patient ID",
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
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
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "name" : "Scheduled Procedure Step Description"
      },
      "(0028,0108)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "The minimum value of all images in this Series.",
         "module" : "General Series",
         "req" : "3",
         "name" : "Smallest Pixel Value in Series"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0010,1030)" : {
         "req" : "3",
         "name" : "Patient's Weight",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "name" : "Requested Procedure ID",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series"
      },
      "(0008,0014)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Instance Creator UID"
      },
      "(0008,1048)" : {
         "module" : "General Study",
         "name" : "Physician(s) of Record",
         "req" : "3",
         "usage" : "M",
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
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "usage" : "M",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "name" : "Manufacturer",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "usage" : "M",
         "desc" : "Identification number of an animal within the registry.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Breed Registration Number",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "UID",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "module" : "General Series",
         "req" : "1C",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0010,1010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "desc" : "Age of the Patient.",
         "usage" : "U",
         "req" : "3",
         "name" : "Patient's Age",
         "module" : "Patient Study"
      },
      "(0010,0200)" : {
         "module" : "Patient",
         "req" : "3",
         "name" : "Quality Control Subject",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
         ]
      },
      "(0012,0040)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
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
         "name" : "Clinical Trial Subject ID",
         "module" : "Clinical Trial Subject"
      },
      "(0012,0071)" : {
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series ID",
         "req" : "3",
         "usage" : "U",
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0008,0005)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "module" : "SOP Common",
         "name" : "Specific Character Set",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,9094)[<0>](0040,9096)[<1>](0040,9216)" : {
         "usage" : "M",
         "desc" : [
            "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.16.2.11.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_C.7.6.16-12",
            "table_C.7.6.16-12b"
         ],
         "module" : "Real World Value Mapping",
         "name" : "Real World Value First Value Mapped",
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "May include Sequence Attributes and their Items."
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Instance Creation Time",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M"
      },
      "(0008,0030)" : {
         "usage" : "M",
         "desc" : "Time the Study started.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "name" : "Study Time",
         "req" : "2",
         "module" : "General Study"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "req" : "1",
         "module" : "SOP Common",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "usage" : "M",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0254)" : {
         "name" : "Performed Procedure Step Description",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "req" : "3",
         "name" : "Institution Address",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M"
      },
      "(0040,9094)[<0>](0040,9096)[<1>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.25.2-1",
            "table_C.7.6.16-12",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.11.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "Real World Value Mapping",
         "req" : "1",
         "name" : "Measurement Units Code Sequence"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "req" : "3"
      },
      "(0028,0109)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Largest Pixel Value in Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "The maximum value of all images in this Series."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ]
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "usage" : "M"
      },
      "(0010,2202)" : {
         "req" : "1C",
         "name" : "Patient Species Code Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "req" : "2",
         "name" : "Source of Previous Values",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "usage" : "M"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "usage" : "M",
         "desc" : "Instance UID of Related Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Series Instance UID",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "DateTime",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "The coding scheme full common name",
         "req" : "3",
         "name" : "Coding Scheme Name",
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "module" : "SOP Common"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Study",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0280)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "module" : "General Series",
         "req" : "3",
         "name" : "Comments on the Performed Procedure Step"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "module" : "General Series",
         "name" : "Concept Name Code Sequence",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,0010)" : {
         "req" : "2",
         "name" : "Patient's Name",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "desc" : "Patient's full name.",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "module" : "General Series",
         "name" : "Person Name",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0008,0021)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Series Date",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "desc" : "Date the Series started.",
         "usage" : "M"
      },
      "(0040,9094)[<0>](0040,9096)[<1>](0040,9211)" : {
         "usage" : "M",
         "desc" : [
            "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.11.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_C.7.6.16-12",
            "table_C.7.6.16-12b"
         ],
         "name" : "Real World Value Last Value Mapped",
         "req" : "1",
         "module" : "Real World Value Mapping"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "req" : "1",
         "name" : "Series Instance UID",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "M",
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Numeric Value",
         "req" : "1C"
      },
      "(0008,1049)" : {
         "usage" : "M",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Physician(s) of Record Identification Sequence",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Time",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0018,0015)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.16",
                     "targetdoc" : "PS3.16",
                     "targetptr" : "chapter_L"
                  },
                  "el" : "olink"
               },
               " for Defined Terms"
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Series",
         "req" : "3",
         "name" : "Body Part Examined"
      },
      "(0040,0253)" : {
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step ID",
         "req" : "3",
         "module" : "General Series"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "req" : "1C",
         "module" : "SOP Common",
         "usage" : "M",
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
                     "el" : "para",
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "el" : "olink",
                           "attrs" : {
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15",
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
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0038,0060)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "req" : "3",
         "name" : "Service Episode ID",
         "module" : "Patient Study"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "usage" : "M",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1"
      },
      "(0040,1012)" : {
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "req" : "3",
         "name" : "Coding Scheme Version",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "req" : "3",
         "name" : "Scheduled Protocol Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence."
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "1C",
         "name" : "Universal Entity ID"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "module" : "General Series",
         "name" : "Study Instance UID",
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,0033)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1"
         ],
         "usage" : "M",
         "desc" : "The time the content creation started.",
         "req" : "1",
         "name" : "Content Time",
         "module" : "Real World Value Mapping"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0008,1115)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "module" : "Common Instance Reference",
         "req" : "1C",
         "name" : "Referenced Series Sequence"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "name" : "Reason for the Requested Procedure",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Reason for requesting this procedure.",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0275)" : {
         "name" : "Request Attributes Sequence",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "name" : "Institution Name",
         "req" : "1C",
         "module" : "General Study"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0400,0561)" : {
         "module" : "SOP Common",
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,0013)" : [
         {
            "module" : "Real World Value Mapping",
            "name" : "Instance Number",
            "req" : "1",
            "usage" : "M",
            "desc" : "A number that identifies this SOP Instance.",
            "mod_tables" : [
               "table_C.25.2-1",
               "table_10-12"
            ],
            "entity" : "Real World Value Mapping"
         },
         {
            "entity" : "Real World Value Mapping",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "desc" : "A number that identifies this Composite object instance.",
            "usage" : "M",
            "req" : "3",
            "name" : "Instance Number",
            "module" : "SOP Common"
         }
      ],
      "(0100,0410)" : {
         "module" : "SOP Common",
         "name" : "SOP Instance Status",
         "req" : "3",
         "desc" : [
            "A flag that indicates the storage status of the SOP Instance.",
            {
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
               ],
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
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0040,0251)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Time at which the Performed Procedure Step ended.",
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step End Time",
         "module" : "General Series"
      },
      "(0100,0420)" : {
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "module" : "SOP Common",
         "name" : "SOP Authorization DateTime",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Floating Point Value",
         "module" : "General Series"
      },
      "(0040,0250)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "req" : "3",
         "name" : "Performed Procedure Step End Date",
         "module" : "General Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "entity" : "Real World Value Mapping",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "module" : "General Study",
         "req" : "1C",
         "name" : "Institution Name",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "module" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
         ]
      },
      "(0008,1120)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "name" : "Referenced Patient Sequence"
      },
      "(0012,0031)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "usage" : "U",
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "name" : "Clinical Trial Site Name"
      },
      "(0008,1250)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Related Series Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
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
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
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
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
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
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ],
                                 "el" : "para"
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
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ]
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "req" : "1C"
      },
      "(4ffe,0001)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Real World Value Mapping",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "MAC Parameters Sequence",
         "module" : "SOP Common"
      },
      "(0020,9172)" : {
         "usage" : "M",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C"
      },
      "(fffa,fffa)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Digital Signatures Sequence",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ]
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Modifying System"
      },
      "(0040,9094)[<0>](0008,1140)[<1>](0008,1150)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Real World Value Mapping",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "module" : "General Series",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M"
      },
      "(0012,0082)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "req" : "3",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number"
      },
      "(0020,000d)" : {
         "req" : "1",
         "name" : "Study Instance UID",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "desc" : "Unique identifier for the Study.",
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "usage" : "M",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "list" : [
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
                     "PNAME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Value Type",
         "req" : "1",
         "module" : "General Series"
      },
      "(0020,0010)" : {
         "name" : "Study ID",
         "req" : "2",
         "module" : "General Study",
         "usage" : "M",
         "desc" : "User or equipment generated Study identifier.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "UID",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Software Versions",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
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
         ]
      },
      "(0040,0260)" : {
         "req" : "3",
         "name" : "Performed Protocol Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "usage" : "M",
         "req" : "3",
         "name" : "Accession Number",
         "module" : "General Series"
      },
      "(0010,2294)" : {
         "req" : "2C",
         "name" : "Breed Registration Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.4.10.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Content Item Modifier Sequence",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address"
      },
      "(0010,2297)" : {
         "usage" : "M",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Responsible Person",
         "req" : "2C"
      },
      "(0008,1040)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "req" : "3",
         "name" : "Institutional Department Name"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "module" : "SOP Common",
         "name" : "Retrieve URI",
         "req" : "3"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0070,0086)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "req" : "1C",
         "module" : "Real World Value Mapping"
      },
      "(0018,1030)" : {
         "module" : "General Series",
         "name" : "Protocol Name",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "module" : "General Series"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "req" : "1C",
         "name" : "Date",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M"
      },
      "(0070,0087)[<0>](0008,0006)" : {
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "The language in which Content Description (0070,0081) within this sequence item is written. A single Item shall be present.",
         "module" : "Real World Value Mapping",
         "req" : "1",
         "name" : "Language Code Sequence"
      },
      "(0040,9094)[<0>](0040,9096)[<1>](0040,9225)" : {
         "module" : "Real World Value Mapping",
         "name" : "Real World Value Slope",
         "req" : "1C",
         "desc" : [
            "The Slope value in relationship between stored values (SV) and the real world values.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.16.2.11.1.2"
                  }
               },
               " for further explanation."
            ],
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_C.7.6.16-12",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "usage" : "M",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
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
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "name" : "Institution Address",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "General Series",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
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
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,2299)" : {
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Responsible Organization",
         "req" : "2C",
         "module" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "req" : "1",
         "name" : "Digital Signature DateTime",
         "module" : "SOP Common",
         "entity" : "Real World Value Mapping",
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
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M"
      },
      "(0008,0016)" : {
         "name" : "SOP Class UID",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
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
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "module" : "General Series"
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Ethnic Group",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0010,2210)" : {
         "usage" : "M",
         "desc" : [
            "The anatomical orientation type used in instances generated by this equipment.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "BIPED",
                     null
                  ],
                  [
                     "QUADRUPED",
                     null
                  ]
               ]
            },
            [
               "Required if the patient is an animal and the anatomical frame of reference is not bipedal. May be present otherwise. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.2.1.1",
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
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "name" : "Anatomical Orientation Type",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "req" : "1",
         "name" : "Value Type",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "type" : "variablelist",
               "list" : [
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
                     "PNAME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "M"
      },
      "(0008,1070)" : {
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Operators' Name",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "module" : "General Series",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0010,0040)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "Sex of the named patient.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Patient",
         "req" : "2",
         "name" : "Patient's Sex"
      },
      "(0100,0426)" : {
         "module" : "SOP Common",
         "name" : "Authorization Equipment Certification Number",
         "req" : "3",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "usage" : "M",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0020,000e)" : {
         "usage" : "M",
         "desc" : "Unique identifier of the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "name" : "Series Instance UID",
         "req" : "1",
         "module" : "General Series"
      },
      "(0010,1021)" : {
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Patient's Size Code Sequence",
         "req" : "3"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(0008,0031)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Series Time",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "desc" : "Time the Series started.",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "module" : "General Series",
         "req" : "1C",
         "name" : "Person Name",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M"
      },
      "(0018,a001)" : {
         "req" : "3",
         "name" : "Contributing Equipment Sequence",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
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
         "usage" : "M"
      },
      "(0008,1110)" : {
         "usage" : "M",
         "desc" : [
            "A sequence that provides reference to a Study SOP Class/Instance pair.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.6.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Referenced Study Sequence",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "module" : "General Series",
         "req" : "1C",
         "name" : "Time",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0020,0011)" : {
         "desc" : "A number that identifies this Series.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Series Number",
         "req" : "2"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme External ID",
         "req" : "2C",
         "usage" : "M",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0040,0244)" : {
         "desc" : "Date on which the Performed Procedure Step started.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Performed Procedure Step Start Date",
         "req" : "3"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "req" : "1",
         "name" : "Encrypted Content",
         "module" : "SOP Common",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         ]
      },
      "(0008,0053)" : {
         "entity" : "Real World Value Mapping",
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
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "Query/Retrieve View"
      },
      "(0070,0081)" : {
         "name" : "Content Description",
         "req" : "2",
         "module" : "Real World Value Mapping",
         "desc" : "A description of the content of the SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0012,0020)" : {
         "module" : "Clinical Trial Subject",
         "req" : "1",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "usage" : "U",
         "desc" : [
            "Identifier for the noted protocol. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0070,0084)" : {
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "Name of operator (such as a technologist or physician) creating the content of the SOP Instance.",
         "module" : "Real World Value Mapping",
         "req" : "2",
         "name" : "Content Creator's Name"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address",
         "req" : "3",
         "name" : "Person's Address",
         "module" : "General Study"
      },
      "(0008,1052)" : {
         "usage" : "M",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "name" : "Performing Physician Identification Sequence",
         "req" : "3",
         "module" : "General Series"
      },
      "(0040,9094)[<0>](0040,9096)[<1>](0028,3003)" : {
         "mod_tables" : [
            "table_C.25.2-1",
            "table_C.7.6.16-12",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
         "req" : "1",
         "name" : "LUT Explanation",
         "module" : "Real World Value Mapping"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "module" : "Clinical Trial Study",
         "req" : "1",
         "name" : "Consent for Distribution Flag",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
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
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0008,1200)" : {
         "module" : "Common Instance Reference",
         "req" : "1C",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ]
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "req" : "3",
         "name" : "Spatial Resolution",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center."
      },
      "(0010,21b0)" : {
         "desc" : "Additional information about the Patient's medical history.",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Additional Patient History",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,0090)" : {
         "module" : "General Study",
         "name" : "Referring Physician's Name",
         "req" : "2",
         "usage" : "M",
         "desc" : "Name of the patient's referring physician",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study"
      },
      "(0008,001a)" : {
         "usage" : "M",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
         "name" : "Data Elements Signed",
         "req" : "1",
         "usage" : "M",
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
         "entity" : "Real World Value Mapping"
      },
      "(0008,0023)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1"
         ],
         "usage" : "M",
         "desc" : "The date the content creation started.",
         "req" : "1",
         "name" : "Content Date",
         "module" : "Real World Value Mapping"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Attribute Modification DateTime",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0070,0086)[<0>](0040,1101)" : {
         "module" : "Real World Value Mapping",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12",
            "table_10-1"
         ]
      },
      "(0012,0021)" : {
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Name",
         "req" : "2",
         "usage" : "U",
         "desc" : [
            "The name of the clinical trial protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "module" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "module" : "General Series",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0010,2180)" : {
         "module" : "Patient Study",
         "name" : "Occupation",
         "req" : "3",
         "usage" : "U",
         "desc" : "Occupation of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study"
      },
      "(0008,0050)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "usage" : "M",
         "module" : "General Study",
         "req" : "2",
         "name" : "Accession Number"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "module" : "General Series"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "Coding Scheme Registry"
      },
      "(0018,1008)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M",
         "desc" : "Identifier of the gantry or positioner.",
         "req" : "3",
         "name" : "Gantry ID",
         "module" : "General Equipment"
      },
      "(0008,1090)" : {
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "usage" : "M",
         "module" : "General Equipment",
         "req" : "3",
         "name" : "Manufacturer's Model Name"
      },
      "(0040,9094)[<0>](0040,9096)[<1>](0040,9212)" : {
         "req" : "1C",
         "name" : "Real World Value LUT Data",
         "module" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_C.7.6.16-12",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Real World Value Mapping",
         "desc" : [
            "LUT Data in this Sequence.",
            "Required if Real World Value Intercept (0040,9224) is not present."
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "module" : "SOP Common",
         "name" : "Contribution Description",
         "req" : "3",
         "usage" : "M",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0010,0032)" : {
         "module" : "Patient",
         "req" : "3",
         "name" : "Patient's Birth Time",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Birth time of the Patient."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
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
         "entity" : "Patient"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Modified Attributes Sequence"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "name" : "Certified Timestamp",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
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
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "entity" : "Patient",
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
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "module" : "Patient"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "req" : "1C",
         "name" : "Local Namespace Entity ID"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Station Name"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "module" : "General Series",
         "name" : "Requested Procedure Code Sequence",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series"
      },
      "(0008,1010)" : {
         "req" : "3",
         "name" : "Station Name",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "usage" : "M"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "module" : "General Series",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "module" : "General Series",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,9094)[<0>](0040,9096)[<1>](0040,9224)" : {
         "usage" : "M",
         "desc" : [
            "The Intercept value in relationship between stored values (SV) and the Real World values.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.16.2.11.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Real World Value LUT Data (0040,9212) is not present."
         ],
         "mod_tables" : [
            "table_C.25.2-1",
            "table_C.7.6.16-12",
            "table_C.7.6.16-12b"
         ],
         "entity" : "Real World Value Mapping",
         "module" : "Real World Value Mapping",
         "name" : "Real World Value Intercept",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,1201)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "module" : "SOP Common",
         "name" : "Time of Last Calibration",
         "req" : "3"
      },
      "(0010,1002)" : {
         "module" : "Patient",
         "req" : "3",
         "name" : "Other Patient IDs Sequence",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M"
      },
      "(0040,9094)[<0>](0040,9096)" : {
         "module" : "Real World Value Mapping",
         "req" : "1",
         "name" : "Real World Value Mapping Sequence",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_C.7.6.16-12"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : [
            "The mapping of stored values to associated Real World values.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "module" : "General Study",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "req" : "3",
         "name" : "Operators' Name",
         "module" : "SOP Common"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "module" : "Patient Study",
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "module" : "SOP Common"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,1060)" : {
         "module" : "General Study",
         "req" : "3",
         "name" : "Name of Physician(s) Reading Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Names of the physician(s) reading the Study.",
         "usage" : "M"
      },
      "(0008,1084)" : {
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Code Sequence",
         "req" : "3",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study"
      },
      "(0008,1111)" : {
         "usage" : "M",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Referenced Performed Procedure Step Sequence",
         "req" : "3",
         "module" : "General Series"
      },
      "(0008,103e)" : {
         "usage" : "M",
         "desc" : "Description of the Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "name" : "Series Description",
         "req" : "3",
         "module" : "General Series"
      },
      "(0070,0086)[<0>](0040,1103)" : {
         "module" : "Real World Value Mapping",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "UID",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0038,0010)" : {
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admission ID",
         "req" : "3",
         "module" : "Patient Study"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "req" : "1",
         "usage" : "M",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,9094)[<0>](0008,1140)" : {
         "req" : "1",
         "name" : "Referenced Image Sequence",
         "module" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : [
            "A sequence listing the images to which the mapping applies.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "req" : "1C"
      },
      "(0010,2298)" : {
         "usage" : "M",
         "desc" : [
            "Relationship of Responsible Person to the patient.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Responsible Person Role",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0018,1201)" : {
         "module" : "General Equipment",
         "name" : "Time of Last Calibration",
         "req" : "3",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment"
      },
      "(0018,1050)" : {
         "name" : "Spatial Resolution",
         "req" : "3",
         "module" : "General Equipment",
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "Common Instance Reference"
      },
      "(0010,0024)" : {
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "usage" : "M",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.4.10.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Content Item Modifier Sequence",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "Common Instance Reference"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "usage" : "M",
         "req" : "1",
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "Person Name"
      },
      "(0010,2293)" : {
         "module" : "Patient",
         "req" : "2C",
         "name" : "Patient Breed Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0010,0020)" : {
         "module" : "Patient",
         "name" : "Patient ID",
         "req" : "2",
         "usage" : "M",
         "desc" : "Primary hospital identification number or code for the patient.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Real World Value Mapping",
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "req" : "1"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "module" : "General Study",
         "req" : "1C",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M"
      },
      "(0008,0020)" : {
         "module" : "General Study",
         "req" : "2",
         "name" : "Study Date",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "desc" : "Date the Study started.",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(0018,1200)" : {
         "usage" : "M",
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
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "name" : "Date of Last Calibration",
         "req" : "3",
         "module" : "General Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,001b)" : {
         "req" : "3",
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "module" : "General Series",
         "name" : "Numeric Value",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "module" : "General Series",
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located."
      },
      "(0070,0087)" : {
         "module" : "Real World Value Mapping",
         "name" : "Alternate Content Description Sequence",
         "req" : "3",
         "usage" : "M",
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
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12"
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "usage" : "M",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registry Code Sequence",
         "req" : "1",
         "module" : "Patient"
      },
      "(0008,103f)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "name" : "Series Description Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "module" : "General Series",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "name" : "Person's Address",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Real World Value Mapping"
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "usage" : "M",
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "module" : "SOP Common",
         "req" : "1",
         "name" : "SOP Instance UID"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "M",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "module" : "Common Instance Reference",
         "req" : "1",
         "name" : "Study Instance UID"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "req" : "1",
         "name" : "Coding Scheme Designator",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Real World Value Mapping",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "name" : "Time",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "req" : "1C",
         "name" : "Numeric Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "module" : "General Series",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced Instance Sequence",
         "module" : "Common Instance Reference"
      },
      "(0008,1032)" : {
         "name" : "Procedure Code Sequence",
         "req" : "3",
         "module" : "General Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,9094)[<0>](0008,1140)[<1>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "Real World Value Mapping",
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
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-3"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M"
      },
      "(0040,9094)[<0>](0040,9096)[<1>](0040,9210)" : {
         "req" : "1",
         "name" : "LUT Label",
         "module" : "Real World Value Mapping",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_C.7.6.16-12",
            "table_C.7.6.16-12b"
         ],
         "usage" : "M",
         "desc" : "Label that is used to identify the transformation of this Item."
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "usage" : "M",
         "req" : "1",
         "name" : "Signature",
         "module" : "SOP Common"
      },
      "(0070,0086)[<0>](0008,0081)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "module" : "Real World Value Mapping",
         "req" : "3",
         "name" : "Institution Address"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Referenced Study Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
            "One or more items are permitted in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.6.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ]
      },
      "(0040,9094)" : {
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1"
         ],
         "desc" : [
            "A sequence of real world value mapping items. Each item defines a single mapping and a list of images to which the mapping applies.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced Image Real World Value Mapping Sequence",
         "module" : "Real World Value Mapping"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Institution Name",
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "General Series",
         "req" : "1C",
         "name" : "Universal Entity ID"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Real World Value Mapping",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "module" : "SOP Common"
      },
      "(0008,0051)" : {
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3"
      },
      "(0012,0050)" : {
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Time Point ID",
         "req" : "2",
         "module" : "Clinical Trial Study"
      },
      "(0010,0030)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "desc" : "Birth date of the patient.",
         "usage" : "M",
         "module" : "Patient",
         "req" : "2",
         "name" : "Patient's Birth Date"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "module" : "General Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "name" : "UID",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institutional Department Name",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "module" : "General Series",
         "req" : "1C",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0008,0080)" : {
         "name" : "Institution Name",
         "req" : "3",
         "module" : "General Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0028,0120)" : {
         "usage" : "M",
         "desc" : [
            [
               "Single pixel value or one limit (inclusive) of a range of pixel values used in an image to pad to rectangular format or to signal background that may be suppressed. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.5.1.1.2"
                  },
                  "el" : "xref"
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "name" : "Pixel Padding Value",
         "req" : "1C",
         "module" : "General Equipment"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "module" : "General Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
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
                     "PNAME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ]
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Value Type",
         "req" : "1",
         "module" : "General Series"
      },
      "(0070,0086)[<0>](0008,0082)" : {
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "module" : "Real World Value Mapping",
         "entity" : "Real World Value Mapping",
         "mod_tables" : [
            "table_C.25.2-1",
            "table_10-12",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
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
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.7-5a after (0008,103F))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.7-5a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9 after (0040,0008))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16 after (0040,0260))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-5a:table_10-16:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.25.2-1:table_10-12 after (0008,0006))",
      "Can't handle table_8.8-1 (in table_C.25.2-1:table_10-12:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.25.2-1:table_10-12:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.25.2-1:table_C.7.6.16-12:table_C.7.6.16-12b after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}