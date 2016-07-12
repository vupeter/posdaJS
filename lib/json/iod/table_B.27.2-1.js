var data = {
   "tags" : {
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
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
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,00c0)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "Treatment compensators associated with current Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "desc" : null,
         "name" : "Recorded Compensator Sequence"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "name" : "Coding Scheme External ID",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0100,0410)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
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
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1103)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "module" : "RT General Machine Verification",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "name" : "Person's Telephone Numbers"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0115)" : {
         "entity" : "",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "desc" : null,
         "name" : "Dose Rate Set",
         "req" : "Dose Rate to be set on treatment machine for segment beginning at current control point (e.g., MU/min).",
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1",
         "name" : "Coding Scheme Designator"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,011a)[<2>](300a,011c)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification",
         "desc" : null,
         "name" : "Leaf/Jaw Positions",
         "req" : "Positions of beam limiting device (collimator) leaf (element) or jaw pairs in mm in the IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), e.g., X-axis for MLCX, Y-axis for MLCY. Contains 2N values, where N is the Number of Leaf/Jaw Pairs (300A,00BC) in Beam Limiting Device Sequence (300A,00B6). Values shall be listed in the IEC leaf (element) subscript order 101, 102, \u2026 1N, 201, 202, \u2026 2N."
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300a,00ef)" : {
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "name" : "Compensator Tray ID",
         "req" : "User-supplied identifier for compensator tray.",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0190)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "req" : [
            "Fixation Devices used in Patient Setup.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Fixation Device Sequence",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification"
      },
      "(0400,0561)" : {
         "req" : "3",
         "name" : "Original Attributes Sequence",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(3008,002c)" : {
         "req" : [
            "Conditions under which treatment was verified by a verification system.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "VERIFIED",
                     "treatment verified"
                  ],
                  [
                     "VERIFIED_OVR",
                     "treatment verified with at least one out-of-range value overridden"
                  ],
                  [
                     "NOT_VERIFIED",
                     "treatment failed verification (one or more values out of range and not overridden)"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "desc" : null,
         "name" : "Treatment Verification Status",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
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
         "name" : "Software Versions",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1042)[<0>](3008,0032)" : {
         "desc" : null,
         "req" : "Desired machine setting of primary Meterset. The units shall match those specified by Primary Dosimeter Unit (300A,00B3) in the plan specified in the Referenced RT Plan Sequence (300C,0002).",
         "name" : "Specified Primary Meterset",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
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
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     },
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "Digital Signature DateTime",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,0123)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Group Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0074,104a)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "req" : "Name of operator who authorized override of overridden parameter.",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,104a)[<0>](0072,0056)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "module" : "RT General Machine Verification",
         "req" : "1C",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Selector Attribute (0072,0026) value is the Data Element Tag of a Private Attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.17.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Selector Attribute Private Creator",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0074,1048)[<0>](0072,0054)" : {
         "req" : "1C",
         "desc" : [
            "Identification of the creator of a group of private data elements used to encode attributes in the Selector Sequence Pointer (0072,0052).",
            "This attribute shall have the same number of values as Selector Sequence Pointer (0072,0052).",
            "For values of the Selector Sequence Pointer (0072,0052) that are not the Data Element Tag of a Private Attribute, the corresponding value in Selector Sequence Pointer Private Creator (0072,0054) shall be empty.",
            "Required if Selector Sequence Pointer (0072,0052) is present and one or more of the values of Selector Sequence Pointer (0072,0052) is the Data Element Tag of a Private Attribute.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.17.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "name" : "Selector Sequence Pointer Private Creator",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0146)" : {
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "req" : [
            [
               "Direction of Table Top Roll Rotation when viewing the table along the positive Y-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.8",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.25.6.2"
                  }
               },
               "."
            ],
            {
               "list" : [
                  [
                     "CW",
                     "clockwise"
                  ],
                  [
                     "CC",
                     "counter-clockwise"
                  ],
                  [
                     "NONE",
                     "no rotation"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Table Top Roll Rotation Direction",
         "desc" : null,
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : ""
      },
      "(0074,1042)[<0>](300a,00f0)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "name" : "Number of Blocks",
         "desc" : null,
         "req" : "Number of shielding blocks or Electron Inserts associated with Beam.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Certificate of Signer",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
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
                     "content" : [
                        "\n                        ",
                        {
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
                           ],
                           "el" : "listitem"
                        },
                        "\n                        ",
                        {
                           "el" : "listitem",
                           "content" : [
                              "\n                          ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
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
               ]
            }
         ],
         "req" : "1"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0124)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : "",
         "desc" : null,
         "req" : "Distance (positive) in mm from the IEC PATIENT SUPPORT vertical axis to the IEC TABLE TOP ECCENTRIC vertical axis.",
         "name" : "Table Top Eccentric Axis Distance",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification"
      },
      "(0074,1042)[<0>](300c,00b0)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "name" : "Referenced Bolus Sequence",
         "req" : [
            "Boli associated with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "desc" : null,
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1048)[<0>](0072,0052)" : {
         "desc" : [
            "Contains the Data Element Tags of the path to the Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026) or to the Item(s) to be selected in Selector Sequence Pointer Items (0074,1057).",
            "This attribute shall have the same number of values as the level of nesting of Selector Attribute (0072,0026) or the selected Item(s).",
            "Required if Selector Attribute (0072,0026) is nested in one or more Sequences or is absent.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.17.1.1"
                  }
               },
               "."
            ]
         ],
         "req" : "1C",
         "name" : "Selector Sequence Pointer",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0074,1042)[<0>](300a,0107)[<1>](300a,0109)" : {
         "name" : "Applicator Type",
         "req" : [
            "Type of Applicator.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "ELECTRON_SQUARE",
                     "square electron applicator"
                  ],
                  [
                     "ELECTRON_RECT",
                     "rectangular electron applicator"
                  ],
                  [
                     "ELECTRON_CIRC",
                     "circular electron applicator"
                  ],
                  [
                     "ELECTRON_SHORT",
                     "short electron applicator"
                  ],
                  [
                     "ELECTRON_OPEN",
                     "open (dummy) electron applicator"
                  ],
                  [
                     "INTRAOPERATIVE",
                     "intraoperative (custom) applicator"
                  ],
                  [
                     "STEREOTACTIC",
                     "stereotactic applicator"
                  ]
               ]
            }
         ],
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "req" : "1",
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
         "name" : "Encrypted Content",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,011a)[<2>](300a,00b8)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : "",
         "name" : "RT Beam Limiting Device Type",
         "req" : [
            "Type of beam limiting device (collimator). The value of this attribute shall correspond to RT Beam Limiting Device Type (300A,00B8) defined in an item of Beam Limiting Device Sequence (300A,00B6)",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "X",
                     "symmetric jaw pair in IEC X direction"
                  ],
                  [
                     "Y",
                     "symmetric jaw pair in IEC Y direction"
                  ],
                  [
                     "ASYMX",
                     "asymmetric jaw pair in IEC X direction"
                  ],
                  [
                     "ASYMY",
                     "asymmetric pair in IEC Y direction"
                  ],
                  [
                     "MLCX",
                     "multileaf (multi-element) jaw pair in IEC X direction"
                  ],
                  [
                     "MLCY",
                     "multileaf (multi-element) jaw pair in IEC Y direction"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "desc" : null,
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification"
      },
      "(0074,1048)[<0>](0072,0026)" : {
         "desc" : [
            "Data Element Tag of the attribute to be referenced.",
            "Required if the selected content is not a Sequence Item."
         ],
         "req" : "1C",
         "name" : "Selector Attribute",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1044)" : {
         "entity" : "",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification",
         "desc" : null,
         "name" : "Conventional Machine Verification Sequence",
         "req" : [
            "Sequence containing conventional machine verification parameters.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,00d0)" : {
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "Blocks associated with current Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "desc" : null,
         "name" : "Recorded Block Sequence",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)[<0>](300a,00e0)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "name" : "Number of Compensators",
         "req" : "Number of compensators associated with current Beam.",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0128)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : "",
         "req" : [
            "Table Top Vertical position in mm in the IEC TABLE TOP coordinate system. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "desc" : null,
         "name" : "Table Top Vertical Position",
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ]
      },
      "(0074,1042)[<0>](3008,00a0)" : {
         "desc" : null,
         "name" : "Beam Limiting Device Leaf Pairs Sequence",
         "req" : [
            "Beam limiting device (collimator) jaw or leaf (element) leaf pair values.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "name" : "Certificate Type",
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
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,0013)" : {
         "name" : "Instance Creation Time",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
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
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
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
         "name" : "MAC Algorithm",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0074,1042)[<0>](3008,0033)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "req" : "Desired machine setting of secondary Meterset. The units shall match those specified for Specified Secondary Meterset (3008,0033) in the plan specified in the Referenced RT Plan Sequence (300C,0002).",
         "desc" : null,
         "name" : "Specified Secondary Meterset",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0008,0118)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The unique identifier of the Mapping Resource",
         "req" : "3",
         "name" : "Mapping Resource UID"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0121)" : {
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification",
         "name" : "Beam Limiting Device Rotation Direction",
         "desc" : null,
         "req" : [
            [
               "Direction of Beam Limiting Device Rotation when viewing beam limiting device (collimator) from radiation source, for segment following Control Point. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.8"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "CW",
                     "clockwise"
                  ],
                  [
                     "CC",
                     "counter-clockwise"
                  ],
                  [
                     "NONE",
                     "no rotation"
                  ]
               ]
            }
         ],
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,00d0)[<1>](300c,00e0)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "req" : "Uniquely identifies block specified by Block Number (300A,00FC) within Beam referenced by Referenced Beam Number (300C,0006).",
         "desc" : null,
         "name" : "Referenced Block Number"
      },
      "(0018,9004)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Content Qualification",
         "req" : "3",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ]
      },
      "(0074,104a)[<0>](3008,0066)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "name" : "Override Reason",
         "desc" : null,
         "req" : "User-defined description of reason for override of overridden parameter.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification"
      },
      "(0074,104a)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "desc" : null,
         "req" : "Identification of the operator who authorized override. Only a single Item is permitted in this sequence.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "name" : "Nonidentifying Private Elements",
         "req" : "1C",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d4)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "name" : "Wedge ID",
         "req" : "User-supplied identifier for wedge.",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "module" : "RT General Machine Verification",
         "name" : "Assigning Jurisdiction Code Sequence",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0074,104a)[<0>](0074,1057)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "desc" : [
            "Identification of the Item indices in the Selector Sequence Pointer (0072,0052).",
            "This attribute shall have the same number of values as the Selector Sequence Pointer (0072,0052).",
            "The value 1 identifies the first Item of the corresponding Sequence. The value 0 identifies all Items of the corresponding Sequence.",
            "Required if Selector Sequence Pointer (0072,0052) is present.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.17.1.1"
                  }
               },
               "."
            ]
         ],
         "req" : "1C",
         "name" : "Selector Sequence Pointer Items"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1"
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d2)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "req" : "Identification number of the Wedge. The value of Wedge Number (300A,00D2) shall be unique within the wedge sequence.",
         "desc" : null,
         "name" : "Wedge Number",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(4ffe,0001)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "name" : "MAC Parameters Sequence",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0129)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : "",
         "desc" : null,
         "name" : "Table Top Longitudinal Position",
         "req" : [
            "Table Top Longitudinal position in mm in the IEC TABLE TOP coordinate system. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.6",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification"
      },
      "(fffa,fffa)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Digital Signatures Sequence",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,010f)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Identifier",
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
         "req" : "1"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "req" : "1",
         "name" : "Private Group Reference",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0008,0014)" : {
         "req" : "3",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "name" : "Instance Creator UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](300a,00c6)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "name" : "Radiation Type",
         "desc" : null,
         "req" : [
            "Particle type of Beam.",
            {
               "list" : [
                  [
                     "PHOTON",
                     null
                  ],
                  [
                     "ELECTRON",
                     null
                  ],
                  [
                     "NEUTRON",
                     null
                  ],
                  [
                     "PROTON",
                     null
                  ],
                  [
                     "ION",
                     null
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "req" : "1",
         "name" : "HL7 Instance Identifier",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](300c,00b0)[<1>](3006,0084)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "req" : [
            "Uniquely identifies ROI representing the Bolus specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.5",
                  "xrefstyle" : "select: title"
               },
               "el" : "xref"
            },
            " within RT Structure Set in Referenced Structure Set Sequence (300C,0060) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.9",
                  "xrefstyle" : "select: title"
               }
            },
            "."
         ],
         "desc" : null,
         "name" : "Referenced ROI Number",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification"
      },
      "(0010,0020)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "name" : "Patient ID",
         "desc" : null,
         "req" : "Primary identifier for the patient.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification"
      },
      "(0074,104a)[<0>](0072,0052)" : {
         "req" : "1C",
         "name" : "Selector Sequence Pointer",
         "desc" : [
            "Contains the Data Element Tags of the path to the Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026) or to the Item(s) to be selected in Selector Sequence Pointer Items (0074,1057).",
            "This attribute shall have the same number of values as the level of nesting of Selector Attribute (0072,0026) or the selected Item(s).",
            "Required if Selector Attribute (0072,0026) is nested in one or more Sequences or is absent.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.17.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Deidentification Action Sequence",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "req" : "3",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "req" : "1",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "name" : "Coding Scheme Name",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0074,1042)[<0>](300a,00c2)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "req" : "User-defined name for Beam.",
         "name" : "Beam Name",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0074,104a)[<0>](0072,0026)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "module" : "RT General Machine Verification",
         "req" : "1C",
         "desc" : [
            "Data Element Tag of the attribute to be referenced.",
            "Required if the selected content is not a Sequence Item."
         ],
         "name" : "Selector Attribute"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0116)[<2>](300a,0118)" : {
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification",
         "req" : [
            "Position of Wedge at current Control Point.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "IN",
                     null
                  ],
                  [
                     "OUT",
                     null
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "name" : "Wedge Position",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines"
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d5)" : {
         "name" : "Wedge Angle",
         "req" : "Nominal wedge angle delivered in degrees.",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0015)" : {
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               }
            },
            ")."
         ],
         "name" : "Instance Coercion DateTime",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0074,1042)[<0>](300a,0107)[<1>](300a,00f9)" : {
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "desc" : null,
         "name" : "Accessory Code",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Signature",
         "req" : "1",
         "desc" : [
            "The MAC generated as described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
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
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Contribution Description",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3",
         "name" : "Contribution DateTime"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
                     "el" : "para"
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
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
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
                                 ]
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
         "req" : "1",
         "name" : "Deidentification Action"
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300c,00d0)" : {
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "name" : "Referenced Compensator Number",
         "req" : "Uniquely identifies compensator specified by Compensator Number (300A,00E4) within Beam referenced by Referenced Beam Number (300C,0006).",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0008,0201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Timezone Offset From UTC",
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
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
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
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     },
                     "content" : [
                        "For example:"
                     ]
                  },
                  "\n                  ",
                  {
                     "content" : [
                        "UTC = 5.00 a.m."
                     ],
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     },
                     "el" : "para"
                  },
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     },
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ]
                  },
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     },
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
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0008,001b)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "req" : "3",
         "name" : "Original Specialized SOP Class UID",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,011f)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : "",
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "desc" : null,
         "req" : [
            [
               "Direction of Gantry Rotation when viewing gantry from isocenter, for segment following Control Point. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.8",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "CW",
                     "clockwise"
                  ],
                  [
                     "CC",
                     "counter-clockwise"
                  ],
                  [
                     "NONE",
                     "no rotation"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Gantry Rotation Direction"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300c,00f0)" : {
         "name" : "Referenced Control Point Index",
         "desc" : null,
         "req" : "Uniquely identifies Control Point specified by Control Point Index (300A,0112) within the Beam referenced by Referenced Beam Number (300C,0006).",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : ""
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0074,1048)[<0>](0072,0056)" : {
         "req" : "1C",
         "name" : "Selector Attribute Private Creator",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Selector Attribute (0072,0026) value is the Data Element Tag of a Private Attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.17.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Certified Timestamp Type",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     },
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
         "req" : "1C",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-11"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0565)" : {
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
         "req" : "1",
         "name" : "Reason for the Attribute Modification",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "name" : "Attribute Modification DateTime",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0008,0105)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
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
         "name" : "Mapping Resource",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1042)[<0>](300a,0110)" : {
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Number of control points in Beam.",
         "desc" : null,
         "name" : "Number of Control Points",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0100,0424)" : {
         "name" : "SOP Authorization Comment",
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0008,0081)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "module" : "RT General Machine Verification",
         "name" : "Institution Address",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0008,0016)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Class UID",
         "req" : "1",
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
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ]
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0190)[<2>](300a,00f9)" : {
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "desc" : null,
         "name" : "Accessory Code",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "req" : "3",
         "name" : "Station Name",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "name" : "Private Creator Reference",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00f9)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "name" : "Accessory Code",
         "desc" : null,
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0116)[<2>](300c,00c0)" : {
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification",
         "desc" : null,
         "req" : "Uniquely references Wedge described by Wedge Number (300A,00D2) in Wedge Sequence (300A,00D1).",
         "name" : "Referenced Wedge Number",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : ""
      },
      "(0074,1044)[<0>](0074,104c)" : {
         "name" : "Conventional Control Point Verification Sequence",
         "req" : [
            "Beam control points for current treatment beam.",
            "Only a single Item shall be included in this Sequence."
         ],
         "desc" : null,
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
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
         "name" : "Universal Entity ID Type",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "req" : "1C",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0008,001a)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID",
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
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1",
         "name" : "Digital Signature UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0140)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : "",
         "name" : "Table Top Pitch Angle",
         "req" : [
            "Table Top Pitch Angle in degrees, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "desc" : null,
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ]
      },
      "(0074,1042)[<0>](3008,00a0)[<1>](300a,00bc)" : {
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Number of Leaf/Jaw Pairs",
         "desc" : null,
         "req" : "Number of leaf (element) or jaw pairs (equal to 1 for standard beam limiting device jaws).",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "name" : "Device Serial Number",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0122)" : {
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "desc" : null,
         "name" : "Patient Support Angle",
         "req" : "Patient Support angle in degrees, i.e., orientation of the IEC PATIENT SUPPORT (turntable) coordinate system with respect to the IEC FIXED REFERENCE coordinate system.",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : ""
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Date when the image acquisition device calibration was last changed in any way. Multiple entries may be used for additional calibrations at other times. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.5.1.1.1"
               }
            },
            " for further explanation."
         ],
         "name" : "Date of Last Calibration",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0018,a001)" : {
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.5"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "3",
         "name" : "Contributing Equipment Sequence",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,00b0)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "Treatment wedges present during delivered Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "desc" : null,
         "name" : "Recorded Wedge Sequence"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "name" : "Identifying Private Elements",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,003a)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "name" : "Specified Treatment Time",
         "req" : "Treatment Time set in seconds.",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "name" : "Coding Scheme Responsible Organization",
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0400,0500)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
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
         ],
         "name" : "Encrypted Attributes Sequence",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0142)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : "",
         "desc" : null,
         "name" : "Table Top Pitch Rotation Direction",
         "req" : [
            [
               "Direction of Table Top Pitch Rotation when viewing the table along the positive X-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.8",
                     "xrefstyle" : "select: label"
                  }
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.25.6.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "CW",
                     "clockwise"
                  ],
                  [
                     "CC",
                     "counter-clockwise"
                  ],
                  [
                     "NONE",
                     "no rotation"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,012a)" : {
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "desc" : null,
         "name" : "Table Top Lateral Position",
         "req" : [
            "Table Top Lateral position in mm in the IEC TABLE TOP coordinate system. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines"
      },
      "(300c,0022)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "desc" : null,
         "req" : "Identifier of Fraction Group within referenced RT Plan.",
         "name" : "Referenced Fraction Group Number",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0074,104a)[<0>](0072,0054)" : {
         "name" : "Selector Sequence Pointer Private Creator",
         "desc" : [
            "Identification of the creator of a group of private data elements used to encode attributes in the Selector Sequence Pointer (0072,0052).",
            "This attribute shall have the same number of values as Selector Sequence Pointer (0072,0052).",
            "For values of the Selector Sequence Pointer (0072,0052) that are not the Data Element Tag of a Private Attribute, the corresponding value in Selector Sequence Pointer Private Creator (0072,0054) shall be empty.",
            "Required if Selector Sequence Pointer (0072,0052) is present and one or more of the values of Selector Sequence Pointer (0072,0052) is the Data Element Tag of a Private Attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.17.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(300c,0002)" : {
         "req" : [
            "A reference to an RT Plan SOP Class/Instance pair.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Referenced RT Plan Sequence",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "req" : "1",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0144)" : {
         "name" : "Table Top Roll Angle",
         "desc" : null,
         "req" : [
            "Table Top Roll Angle in degrees, i.e., the rotation of the IEC TABLE TOP coordinate system about the Y-axis of the IEC TABLE TOP coordinate system. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "entity" : "",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0123)" : {
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "req" : [
            [
               "Direction of Patient Support Rotation when viewing table from above, for segment following Control Point. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.8"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "CW",
                     "clockwise"
                  ],
                  [
                     "CC",
                     "counter-clockwise"
                  ],
                  [
                     "NONE",
                     "no rotation"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "name" : "Patient Support Rotation Direction",
         "desc" : null,
         "entity" : "",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines"
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300a,00f9)" : {
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "name" : "Accessory Code",
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0074,104a)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "req" : [
            "List of parameters that were overridden by the user.",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.31.1.1"
                  }
               },
               "."
            ]
         ],
         "name" : "Overridden Parameters Sequence",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0125)" : {
         "req" : "Table Top (non-isocentric) angle, i.e., orientation of the IEC TABLE TOP ECCENTRIC coordinate system with respect to the IEC PATIENT SUPPORT coordinate system, in degrees.",
         "desc" : null,
         "name" : "Table Top Eccentric Angle",
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "req" : "3",
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
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Universal Entity ID",
         "req" : "3",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Modified Attributes Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,0005)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "req" : "1C",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0116)" : {
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification",
         "desc" : null,
         "req" : [
            "Wedge Positions for the current control point.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Wedge Position Sequence",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300a,00e5)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "name" : "Compensator ID",
         "req" : "User-supplied identifier for compensator.",
         "desc" : null
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0008,0080)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "module" : "RT General Machine Verification",
         "name" : "Institution Name",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3",
         "name" : "Spatial Resolution",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0126)" : {
         "entity" : "",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "name" : "Table Top Eccentric Rotation Direction",
         "desc" : null,
         "req" : [
            [
               "Direction of Table Top Eccentric Rotation when viewing table from above, for segment following Control Point. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.8"
                  }
               },
               "."
            ],
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "CW",
                     "clockwise"
                  ],
                  [
                     "CC",
                     "counter-clockwise"
                  ],
                  [
                     "NONE",
                     "no rotation"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "el" : "para",
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
         "name" : "Person's Telecom Information",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "req" : "3",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "name" : "Coding Scheme Version",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0124)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Mapping Resource Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "module" : "RT General Machine Verification",
         "name" : "Assigning Facility Sequence",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
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
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0074,1042)[<0>](300a,00ed)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "name" : "Number of Boli",
         "desc" : null,
         "req" : "Number of boli used with current Beam.",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "module" : "SOP Common",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](300a,0180)" : {
         "req" : [
            "Patient setup data for current plan.",
            "One or more Items are permitted in this Sequence."
         ],
         "desc" : null,
         "name" : "Patient Setup Sequence",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0012)" : {
         "name" : "Instance Creation Date",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1101)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "module" : "RT General Machine Verification",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "usage" : "Contains SOP Common Information",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ]
                  },
                  "\n"
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "name" : "Retrieve URI"
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0190)[<2>](300a,0192)" : {
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Fixation Device Type",
         "req" : [
            "Type of Fixation Device used during Patient Setup.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "BITEBLOCK",
                     null
                  ],
                  [
                     "HEADFRAME",
                     null
                  ],
                  [
                     "MASK",
                     null
                  ],
                  [
                     "MOLD",
                     null
                  ],
                  [
                     "CAST",
                     null
                  ],
                  [
                     "HEADREST",
                     null
                  ],
                  [
                     "BREAST_BOARD",
                     null
                  ],
                  [
                     "BODY_FRAME",
                     null
                  ],
                  [
                     "VACUUM_MOLD",
                     null
                  ],
                  [
                     "WHOLE_BODY_POD",
                     null
                  ],
                  [
                     "RECTAL_BALLOON",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "desc" : null,
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0100,0426)" : {
         "req" : "3",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "name" : "Authorization Equipment Certification Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0018)" : {
         "name" : "SOP Instance UID",
         "req" : "1",
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
         ],
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0074,1048)[<0>](0074,1057)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "req" : "1C",
         "name" : "Selector Sequence Pointer Items",
         "desc" : [
            "Identification of the Item indices in the Selector Sequence Pointer (0072,0052).",
            "This attribute shall have the same number of values as the Selector Sequence Pointer (0072,0052).",
            "The value 1 identifies the first Item of the corresponding Sequence. The value 0 identifies all Items of the corresponding Sequence.",
            "Required if Selector Sequence Pointer (0072,0052) is present.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.17.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0074,1042)[<0>](300a,00d0)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "req" : "Number of wedges associated with current Beam.",
         "name" : "Number of Wedges",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification"
      },
      "(0008,0053)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Query/Retrieve View",
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
         ]
      },
      "(0074,1042)[<0>](3008,00d0)[<1>](300a,00f9)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "desc" : null,
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification"
      },
      "(0040,a390)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "name" : "HL7 Structured Document Reference Sequence",
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this Sequence.",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1042)[<0>](300a,0107)" : {
         "desc" : null,
         "req" : [
            "Applicators associated with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Applicator Sequence",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0110)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "name" : "Coding Scheme Identification Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Block Identifying Information Status",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetptr" : "sect_E.3.10"
                  }
               },
               "."
            ],
            {
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
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,011e)" : {
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "desc" : null,
         "name" : "Gantry Angle",
         "req" : "Gantry angle in degrees of radiation source, i.e., orientation of the IEC GANTRY coordinate system with respect to the IEC FIXED REFERENCE coordinate system.",
         "entity" : "",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines"
      },
      "(0074,1042)[<0>](3008,00d0)[<1>](300a,00f5)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "desc" : null,
         "name" : "Block Tray ID",
         "req" : "User-supplied identifier for block tray or Electron Insert.",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0010,0024)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ]
      },
      "(0008,0117)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Context UID",
         "desc" : [
            "The unique identifier of the Context Group.",
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
         ]
      },
      "(0008,0122)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "The name of the Mapping Resource.",
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
         "name" : "Mapping Resource Name",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](300c,0006)" : {
         "name" : "Referenced Beam Number",
         "desc" : null,
         "req" : [
            "References Beam specified by Beam Number (300A,00C0) in Beam Sequence (300A,00B0) in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.14"
               },
               "el" : "xref"
            },
            " of referenced RT Plan\n                  or in Ion Beam Sequence (300A,03A2) in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.25"
               },
               "el" : "xref"
            },
            " within the referenced RT Ion Plan."
         ],
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,104a)[<0>](0072,0028)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "module" : "RT General Machine Verification",
         "name" : "Selector Value Number",
         "desc" : [
            "Non-negative integer identifying which value of a multi-valued attribute identified by Selector Attribute (0072,0026) is to be referenced. The value 1 identifies the first value. The value 0 identifies all values.",
            "When the Value Multiplicity of the Selector Attribute (0072,0026) is 1 then the value of this attribute shall be 1.",
            "Required if the selected content is a single attribute of any VR other than SQ."
         ],
         "req" : "1C"
      },
      "(0074,1048)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "name" : "Failed Parameters Sequence",
         "req" : [
            "List of parameters that failed verification by the MPV.",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.31.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "name" : "Source of Previous Values"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Digital Signature Purpose Code Sequence",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0008,0106)" : {
         "name" : "Context Group Version",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](300a,00b2)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "name" : "Treatment Machine Name",
         "desc" : null,
         "req" : [
            "User-defined name identifying treatment machine to be used for beam delivery. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)[<0>](3008,00a0)[<1>](300a,00b8)" : {
         "desc" : null,
         "name" : "RT Beam Limiting Device Type",
         "req" : [
            "Type of beam limiting device (collimator).",
            {
               "list" : [
                  [
                     "X",
                     "symmetric jaw pair in IEC X direction"
                  ],
                  [
                     "Y",
                     "symmetric jaw pair in IEC Y direction"
                  ],
                  [
                     "ASYMX",
                     "asymmetric jaw pair in IEC X direction"
                  ],
                  [
                     "ASYMY",
                     "asymmetric pair in IEC Y direction"
                  ],
                  [
                     "MLCX",
                     "multileaf (multi-element) jaw pair in IEC X direction"
                  ],
                  [
                     "MLCY",
                     "multileaf (multi-element) jaw pair in IEC Y direction"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0028,0303)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "name" : "Longitudinal Temporal Information Modified"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1104)" : {
         "req" : "3",
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
                           "el" : "listitem",
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Name",
         "req" : "3"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "req" : "3",
         "name" : "Person's Address",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d8)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "req" : "Orientation of wedge, i.e., orientation of the IEC WEDGE FILTER coordinate system with respect to the IEC BEAM LIMITING DEVICE coordinate system, in degrees.",
         "desc" : null,
         "name" : "Wedge Orientation",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification"
      },
      "(0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,011a)" : {
         "entity" : "",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification",
         "name" : "Beam Limiting Device Position Sequence",
         "desc" : null,
         "req" : [
            "Beam limiting device (collimator) jaw or leaf (element) positions.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "req" : "3",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "name" : "Operators' Name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0074,1042)[<0>](300c,00b0)[<1>](300a,00f9)" : {
         "req" : "An accessory identifier to be read by a device such as a bar code reader.",
         "desc" : null,
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(0074,1048)[<0>](0072,0028)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "module" : "RT General Machine Verification",
         "desc" : [
            "Non-negative integer identifying which value of a multi-valued attribute identified by Selector Attribute (0072,0026) is to be referenced. The value 1 identifies the first value. The value 0 identifies all values.",
            "When the Value Multiplicity of the Selector Attribute (0072,0026) is 1 then the value of this attribute shall be 1.",
            "Required if the selected content is a single attribute of any VR other than SQ."
         ],
         "name" : "Selector Value Number",
         "req" : "1C",
         "usage" : "Contains general delivery verification information",
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
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
         "name" : "Certified Timestamp",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "entity" : ""
      },
      "(0020,0013)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "A number that identifies this Composite object instance.",
         "name" : "Instance Number",
         "req" : "3"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0114)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "entity" : "",
         "desc" : null,
         "name" : "Nominal Beam Energy",
         "req" : "Nominal Beam Energy at control point.",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification"
      },
      "(0008,0300)" : {
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "name" : "Private Data Element Characteristics Sequence",
         "req" : "3"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0120)" : {
         "entity" : "",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "req" : "Beam Limiting Device angle in degrees, i.e., orientation of the IEC BEAM LIMITING DEVICE coordinate system with respect to the IEC GANTRY coordinate system.",
         "name" : "Beam Limiting Device Angle",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification"
      },
      "(0074,1042)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Sequence containing general machine verification parameters.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "desc" : null,
         "name" : "General Machine Verification Sequence",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1042)[<0>](300a,0107)[<1>](300a,0108)" : {
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "desc" : null,
         "name" : "Applicator ID",
         "req" : "User or machine supplied identifier for Applicator.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification"
      },
      "(0100,0420)" : {
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "name" : "SOP Authorization DateTime",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0182)" : {
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "module" : "RT General Machine Verification",
         "name" : "Patient Setup Number",
         "desc" : null,
         "req" : "Identification number of the Patient Setup."
      }
   },
   "errors" : [
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))",
      "Can't handle table_8.8-1 (in table_C.31-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.31-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.31-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.31-1:table_10-1 after (0008,0082))"
   ]
}
