var data = 
{
   "tags" : {
      "(0074,1048)[<0>](0072,0054)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "req" : "1C",
         "name" : "Selector Sequence Pointer Private Creator",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "module" : "RT General Machine Verification",
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
         ]
      },
      "(0100,0420)" : {
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "SOP Authorization DateTime",
         "req" : "3"
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300a,00ef)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Compensator Tray ID",
         "req" : "User-supplied identifier for compensator tray.",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null
      },
      "(0074,1042)[<0>](3008,0033)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "req" : "Desired machine setting of secondary Meterset. The units shall match those specified for Specified Secondary Meterset (3008,0033) in the plan specified in the Referenced RT Plan Sequence (300C,0002).",
         "name" : "Specified Secondary Meterset",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Modified Attributes Sequence",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0074,104a)[<0>](0072,0052)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
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
         "req" : "1C",
         "name" : "Selector Sequence Pointer",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ]
      },
      "(0074,104a)[<0>](0072,0054)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "name" : "Selector Sequence Pointer Private Creator",
         "req" : "1C",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00f9)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "name" : "Accessory Code",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0040,a390)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
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
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0008,0013)" : {
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "name" : "Instance Creation Time",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "module" : "SOP Common",
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
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "name" : "MAC Algorithm",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
         "entity" : "",
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
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0116)[<2>](300a,0118)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "name" : "Wedge Position",
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
         "mod_tables" : [
            "table_C.31-2"
         ],
         "desc" : null,
         "module" : "RT Conventional Machine Verification",
         "entity" : ""
      },
      "(0008,0122)" : {
         "module" : "SOP Common",
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
         "req" : "3",
         "name" : "Mapping Resource Name",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1042)[<0>](300a,00ed)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Number of Boli",
         "req" : "Number of boli used with current Beam.",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
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
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "Contribution DateTime",
         "req" : "3"
      },
      "(0074,1042)[<0>](300a,00c6)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "name" : "Radiation Type",
         "req" : [
            "Particle type of Beam.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
               ]
            }
         ]
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     }
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
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Date",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0016)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "SOP Class UID",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
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
      "(0074,1048)[<0>](0072,0052)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : [
            "Contains the Data Element Tags of the path to the Sequence that contains the Attribute that is identified by Selector Attribute (0072,0026) or to the Item(s) to be selected in Selector Sequence Pointer Items (0074,1057).",
            "This attribute shall have the same number of values as the level of nesting of Selector Attribute (0072,0026) or the selected Item(s).",
            "Required if Selector Attribute (0072,0026) is nested in one or more Sequences or is absent.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.17.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "1C",
         "name" : "Selector Sequence Pointer",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,012a)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "req" : [
            "Table Top Lateral position in mm in the IEC TABLE TOP coordinate system. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.6",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Table Top Lateral Position",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "RT Conventional Machine Verification"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)"
      },
      "(0074,1048)[<0>](0074,1057)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
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
                     "linkend" : "sect_10.17.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "name" : "Selector Sequence Pointer Items",
         "req" : "1C",
         "usage" : "Contains general delivery verification information"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "",
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
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     },
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
         ],
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d5)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Nominal wedge angle delivered in degrees.",
         "name" : "Wedge Angle",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0106)" : {
         "name" : "Context Group Version",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
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
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0140)" : {
         "mod_tables" : [
            "table_C.31-2"
         ],
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "req" : [
            "Table Top Pitch Angle in degrees, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Table Top Pitch Angle",
         "desc" : null,
         "entity" : "",
         "module" : "RT Conventional Machine Verification"
      },
      "(0100,0424)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization Comment",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO."
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
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
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ]
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d4)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Wedge ID",
         "req" : "User-supplied identifier for wedge.",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,011a)[<2>](300a,00b8)" : {
         "mod_tables" : [
            "table_C.31-2"
         ],
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "name" : "RT Beam Limiting Device Type",
         "req" : [
            "Type of beam limiting device (collimator). The value of this attribute shall correspond to RT Beam Limiting Device Type (300A,00B8) defined in an item of Beam Limiting Device Sequence (300A,00B6)",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "desc" : null,
         "module" : "RT Conventional Machine Verification",
         "entity" : ""
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "attrs" : {
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetptr" : "sect_E.3.10",
                     "targetdoc" : "PS3.15"
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Block Identifying Information Status",
         "usage" : "Contains SOP Common Information"
      },
      "(0010,0021)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "usage" : "Contains general delivery verification information",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "",
         "module" : "RT General Machine Verification"
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0190)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Fixation Devices used in Patient Setup.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Fixation Device Sequence"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0124)" : {
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-2"
         ],
         "req" : "Distance (positive) in mm from the IEC PATIENT SUPPORT vertical axis to the IEC TABLE TOP ECCENTRIC vertical axis.",
         "name" : "Table Top Eccentric Axis Distance",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines"
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "usage" : "Contains general delivery verification information",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "module" : "RT General Machine Verification"
      },
      "(300c,0022)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Referenced Fraction Group Number",
         "req" : "Identifier of Fraction Group within referenced RT Plan.",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)[<0>](3008,00d0)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "Blocks associated with current Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Recorded Block Sequence",
         "usage" : "Contains general delivery verification information"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "3",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "Coding Scheme UID",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR."
      },
      "(0074,1042)[<0>](3008,00a0)[<1>](300a,00bc)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "name" : "Number of Leaf/Jaw Pairs",
         "req" : "Number of leaf (element) or jaw pairs (equal to 1 for standard beam limiting device jaws)."
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0114)" : {
         "entity" : "",
         "module" : "RT Conventional Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-2"
         ],
         "name" : "Nominal Beam Energy",
         "req" : "Nominal Beam Energy at control point.",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines"
      },
      "(0400,0500)" : {
         "name" : "Encrypted Attributes Sequence",
         "req" : "1C",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         ]
      },
      "(300c,0002)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "name" : "Referenced RT Plan Sequence",
         "req" : [
            "A reference to an RT Plan SOP Class/Instance pair.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0074,1042)[<0>](3008,00c0)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "Treatment compensators associated with current Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Recorded Compensator Sequence",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(0008,0300)" : {
         "name" : "Private Data Element Characteristics Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Institutional Department Name",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1048)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Failed Parameters Sequence",
         "req" : [
            "List of parameters that failed verification by the MPV.",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.31.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "Contains general delivery verification information"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "req" : "3",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0074,1042)[<0>](3008,00d0)[<1>](300a,00f9)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "name" : "Accessory Code"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "name" : "Coding Scheme Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0020)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Patient ID",
         "req" : "Primary identifier for the patient.",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(0008,0015)" : {
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            ")."
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "name" : "Attribute Modification DateTime",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0129)" : {
         "entity" : "",
         "module" : "RT Conventional Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-2"
         ],
         "req" : [
            "Table Top Longitudinal position in mm in the IEC TABLE TOP coordinate system. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.6"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Table Top Longitudinal Position",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Institution Name",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Institution where the equipment that contributed to the composite instance is located."
      },
      "(0074,1042)[<0>](300c,00b0)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "req" : "An accessory identifier to be read by a device such as a bar code reader.",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null
      },
      "(0074,104a)[<0>](3008,0066)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Override Reason",
         "req" : "User-defined description of reason for override of overridden parameter.",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "name" : "HL7 Instance Identifier",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0100,0426)" : {
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Authorization Equipment Certification Number",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1048)[<0>](0072,0056)" : {
         "name" : "Selector Attribute Private Creator",
         "req" : "1C",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Selector Attribute (0072,0026) value is the Data Element Tag of a Private Attribute.",
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
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,011e)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "name" : "Gantry Angle",
         "req" : "Gantry angle in degrees of radiation source, i.e., orientation of the IEC GANTRY coordinate system with respect to the IEC FIXED REFERENCE coordinate system."
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d2)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Identification number of the Wedge. The value of Wedge Number (300A,00D2) shall be unique within the wedge sequence.",
         "name" : "Wedge Number",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "name" : "Modifying System",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0126)" : {
         "desc" : null,
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "name" : "Table Top Eccentric Rotation Direction",
         "req" : [
            [
               "Direction of Table Top Eccentric Rotation when viewing table from above, for segment following Control Point. See ",
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
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "entity" : "",
         "module" : "SOP Common",
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
         "name" : "Date of Last Calibration",
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Deidentification Action",
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
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ],
                     "el" : "para"
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
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
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_79bc3e05-de52-489c-8337-4fe4bb188ec4"
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
                                          "targetptr" : "sect_E.3.1",
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetdoc" : "PS3.15"
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
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "req" : "2C",
         "name" : "Coding Scheme External ID",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present."
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Source of Previous Values",
         "req" : "2",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received."
      },
      "(0008,010f)" : {
         "name" : "Context Identifier",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
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
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0115)" : {
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "desc" : null,
         "req" : "Dose Rate to be set on treatment machine for segment beginning at current control point (e.g., MU/min).",
         "name" : "Dose Rate Set",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "mod_tables" : [
            "table_C.31-2"
         ]
      },
      "(0074,104a)[<0>](0074,1057)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
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
         ],
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "name" : "Selector Sequence Pointer Items",
         "req" : "1C",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "req" : "1C",
         "name" : "Nonidentifying Private Elements",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0146)" : {
         "name" : "Table Top Roll Rotation Direction",
         "req" : [
            [
               "Direction of Table Top Roll Rotation when viewing the table along the positive Y-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.8"
                  }
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
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
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
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Identifier Type Code",
         "req" : "3",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ]
      },
      "(0008,0118)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "Mapping Resource UID",
         "req" : "3",
         "desc" : "The unique identifier of the Mapping Resource",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0190)[<2>](300a,0192)" : {
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Type of Fixation Device used during Patient Setup.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ],
         "name" : "Fixation Device Type",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification"
      },
      "(0074,1042)[<0>](300a,00d0)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "name" : "Number of Wedges",
         "req" : "Number of wedges associated with current Beam."
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0008,0081)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "usage" : "Contains general delivery verification information",
         "name" : "Institution Address",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "RT General Machine Verification",
         "entity" : ""
      },
      "(0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ]
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "entity" : "",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "name" : "Person's Address",
         "req" : "3",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ]
      },
      "(0008,0014)" : {
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Instance Creator UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "MAC ID Number",
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0201)" : {
         "req" : "3",
         "name" : "Timezone Offset From UTC",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "Contains the offset from UTC to the timezone for all DA and TM Attributes present in this SOP Instance, and for all DT Attributes present in this SOP Instance that do not contain an explicitly encoded timezone offset.",
            "Encoded as an ASCII string in the format \"&ZZXX\". The components of this string, from left to right, are & = \"+\" or \"-\", and ZZ = Hours and XX = Minutes of offset. Leading space characters shall not be present.",
            "The offset for UTC shall be +0000; -0000 shall not be used.",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetdoc" : "PS3.5"
                                       },
                                       "el" : "olink"
                                    },
                                    " for the offset component of the DT Value Representation."
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
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
                                    "The \"+\" sign may not be omitted."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 }
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
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     },
                     "content" : [
                        "Offset = -0200"
                     ]
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ]
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "",
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
         "name" : "Digital Signature DateTime",
         "req" : "1",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1044)[<0>](0074,104c)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "req" : [
            "Beam control points for current treatment beam.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Conventional Control Point Verification Sequence",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "desc" : null,
         "module" : "RT Conventional Machine Verification",
         "entity" : ""
      },
      "(0074,1042)[<0>](300a,0110)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "req" : "Number of control points in Beam.",
         "name" : "Number of Control Points",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "SOP Common",
         "entity" : "",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "Institution Address",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Digital Signature Purpose Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ]
      },
      "(0028,0303)" : {
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
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15"
                  }
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "name" : "Longitudinal Temporal Information Modified",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,011a)[<2>](300a,011c)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT Conventional Machine Verification",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "req" : "Positions of beam limiting device (collimator) leaf (element) or jaw pairs in mm in the IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), e.g., X-axis for MLCX, Y-axis for MLCY. Contains 2N values, where N is the Number of Leaf/Jaw Pairs (300A,00BC) in Beam Limiting Device Sequence (300A,00B6). Values shall be listed in the IEC leaf (element) subscript order 101, 102, \u2026 1N, 201, 202, \u2026 2N.",
         "name" : "Leaf/Jaw Positions",
         "mod_tables" : [
            "table_C.31-2"
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Station Name"
      },
      "(0074,1042)[<0>](300a,0107)[<1>](300a,0108)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Applicator ID",
         "req" : "User or machine supplied identifier for Applicator.",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-11"
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0074,1042)[<0>](300a,00e0)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Number of compensators associated with current Beam.",
         "name" : "Number of Compensators",
         "usage" : "Contains general delivery verification information"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
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
         ]
      },
      "(3008,002c)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Conditions under which treatment was verified by a verification system.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Treatment Verification Status",
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0125)" : {
         "req" : "Table Top (non-isocentric) angle, i.e., orientation of the IEC TABLE TOP ECCENTRIC coordinate system with respect to the IEC PATIENT SUPPORT coordinate system, in degrees.",
         "name" : "Table Top Eccentric Angle",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300c,00f0)" : {
         "mod_tables" : [
            "table_C.31-2"
         ],
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "req" : "Uniquely identifies Control Point specified by Control Point Index (300A,0112) within the Beam referenced by Referenced Beam Number (300C,0006).",
         "name" : "Referenced Control Point Index",
         "desc" : null,
         "entity" : "",
         "module" : "RT Conventional Machine Verification"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Deidentification Action Sequence",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,00b0)[<1>](300a,00d8)" : {
         "usage" : "Contains general delivery verification information",
         "name" : "Wedge Orientation",
         "req" : "Orientation of wedge, i.e., orientation of the IEC WEDGE FILTER coordinate system with respect to the IEC BEAM LIMITING DEVICE coordinate system, in degrees.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0122)" : {
         "req" : "Patient Support angle in degrees, i.e., orientation of the IEC PATIENT SUPPORT (turntable) coordinate system with respect to the IEC FIXED REFERENCE coordinate system.",
         "name" : "Patient Support Angle",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "module" : "SOP Common",
         "entity" : "",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Creator Reference",
         "req" : "1",
         "usage" : "Contains SOP Common Information"
      },
      "(0008,0005)" : {
         "usage" : "Contains SOP Common Information",
         "name" : "Specific Character Set",
         "req" : "1C",
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
         ],
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0120)" : {
         "desc" : null,
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "name" : "Beam Limiting Device Angle",
         "req" : "Beam Limiting Device angle in degrees, i.e., orientation of the IEC BEAM LIMITING DEVICE coordinate system with respect to the IEC GANTRY coordinate system."
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0074,1042)[<0>](3008,00a0)" : {
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Beam limiting device (collimator) jaw or leaf (element) leaf pair values.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Beam Limiting Device Leaf Pairs Sequence",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0008,0082)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1044)" : {
         "desc" : null,
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "name" : "Conventional Machine Verification Sequence",
         "req" : [
            "Sequence containing conventional machine verification parameters.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.31-2"
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "Referenced SOP Class UID",
         "req" : "1"
      },
      "(0074,1042)[<0>](300a,00c2)" : {
         "name" : "Beam Name",
         "req" : "User-defined name for Beam.",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ]
                  },
                  "\n              "
               ]
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
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,1048)[<0>](0072,0026)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : [
            "Data Element Tag of the attribute to be referenced.",
            "Required if the selected content is not a Sequence Item."
         ],
         "name" : "Selector Attribute",
         "req" : "1C",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ]
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Spatial Resolution",
         "req" : "3",
         "usage" : "Contains SOP Common Information"
      },
      "(0018,a001)" : {
         "entity" : "",
         "module" : "SOP Common",
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
         "name" : "Contributing Equipment Sequence",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1048)[<0>](0072,0028)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : [
            "Non-negative integer identifying which value of a multi-valued attribute identified by Selector Attribute (0072,0026) is to be referenced. The value 1 identifies the first value. The value 0 identifies all values.",
            "When the Value Multiplicity of the Selector Attribute (0072,0026) is 1 then the value of this attribute shall be 1.",
            "Required if the selected content is a single attribute of any VR other than SQ."
         ],
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "name" : "Selector Value Number",
         "req" : "1C",
         "usage" : "Contains general delivery verification information"
      },
      "(0008,0105)" : {
         "name" : "Mapping Resource",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "The identifier of the Mapping Resource.",
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
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Sequence containing general machine verification parameters.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "General Machine Verification Sequence",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : ""
      },
      "(0074,1042)[<0>](3008,00a0)[<1>](300a,00b8)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "name" : "RT Beam Limiting Device Type",
         "req" : [
            "Type of beam limiting device (collimator).",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0144)" : {
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "desc" : null,
         "req" : [
            "Table Top Roll Angle in degrees, i.e., the rotation of the IEC TABLE TOP coordinate system about the Y-axis of the IEC TABLE TOP coordinate system. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Table Top Roll Angle",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "mod_tables" : [
            "table_C.31-2"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
         "entity" : "",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "name" : "Query/Retrieve View",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,003a)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "req" : "Treatment Time set in seconds.",
         "name" : "Specified Treatment Time"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0008,0123)" : {
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "Context Group Identification Sequence",
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Group Reference",
         "req" : "1",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0123)" : {
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "desc" : null,
         "name" : "Patient Support Rotation Direction",
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
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "mod_tables" : [
            "table_C.31-2"
         ]
      },
      "(0018,9004)" : {
         "module" : "SOP Common",
         "entity" : "",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         "name" : "Content Qualification",
         "req" : "3",
         "usage" : "Contains SOP Common Information"
      },
      "(0008,001a)" : {
         "module" : "SOP Common",
         "entity" : "",
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
         "name" : "Related General SOP Class UID",
         "req" : "3",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1103)" : {
         "usage" : "Contains general delivery verification information",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "module" : "RT General Machine Verification",
         "entity" : ""
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "usage" : "Contains SOP Common Information",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,011a)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "req" : [
            "Beam limiting device (collimator) jaw or leaf (element) positions.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Beam Limiting Device Position Sequence",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "RT Conventional Machine Verification"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "name" : "Coding Scheme Responsible Organization",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information."
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300a,00e5)" : {
         "name" : "Compensator ID",
         "req" : "User-supplied identifier for compensator.",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "",
         "module" : "RT General Machine Verification",
         "usage" : "Contains general delivery verification information",
         "req" : "1C",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,011f)" : {
         "mod_tables" : [
            "table_C.31-2"
         ],
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "req" : [
            [
               "Direction of Gantry Rotation when viewing gantry from isocenter, for segment following Control Point. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.8",
                     "xrefstyle" : "select: label"
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
         "name" : "Gantry Rotation Direction",
         "desc" : null,
         "entity" : "",
         "module" : "RT Conventional Machine Verification"
      },
      "(0074,104a)[<0>](0008,1072)" : {
         "usage" : "Contains general delivery verification information",
         "name" : "Operator Identification Sequence",
         "req" : "Identification of the operator who authorized override. Only a single Item is permitted in this sequence.",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : ""
      },
      "(0018,a001)[<0>](0040,a170)" : {
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
         "entity" : "",
         "module" : "SOP Common",
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "entity" : "",
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
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
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
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "Contains SOP Common Information"
      },
      "(4ffe,0001)" : {
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "MAC Parameters Sequence",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "Coding Scheme Version",
         "req" : "3",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0128)" : {
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "desc" : null,
         "req" : [
            "Table Top Vertical position in mm in the IEC TABLE TOP coordinate system. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.6"
               }
            },
            "."
         ],
         "name" : "Table Top Vertical Position",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "mod_tables" : [
            "table_C.31-2"
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "usage" : "Contains SOP Common Information",
         "name" : "Coding Scheme Registry",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300c,00d0)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Uniquely identifies compensator specified by Compensator Number (300A,00E4) within Beam referenced by Referenced Beam Number (300C,0006).",
         "name" : "Referenced Compensator Number",
         "usage" : "Contains general delivery verification information"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
         "module" : "SOP Common",
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
         ]
      },
      "(0074,1042)[<0>](300c,00b0)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "name" : "Referenced Bolus Sequence",
         "req" : [
            "Boli associated with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "Signature",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](300a,00b2)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : [
            "User-defined name identifying treatment machine to be used for beam delivery. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Treatment Machine Name",
         "usage" : "Contains general delivery verification information",
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0121)" : {
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
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
         "name" : "Beam Limiting Device Rotation Direction",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "RT Conventional Machine Verification"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "",
         "module" : "SOP Common",
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
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "name" : "Certificate of Signer",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0074,1042)[<0>](300c,00b0)[<1>](3006,0084)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "name" : "Referenced ROI Number",
         "req" : [
            "Uniquely identifies ROI representing the Bolus specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.5",
                  "xrefstyle" : "select: title"
               }
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
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0100,0410)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
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
               "el" : "note",
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
               ]
            }
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Time of Last Calibration",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "entity" : "",
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
         ]
      },
      "(0074,104a)[<0>](0072,0028)" : {
         "req" : "1C",
         "name" : "Selector Value Number",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : [
            "Non-negative integer identifying which value of a multi-valued attribute identified by Selector Attribute (0072,0026) is to be referenced. The value 1 identifies the first value. The value 0 identifies all values.",
            "When the Value Multiplicity of the Selector Attribute (0072,0026) is 1 then the value of this attribute shall be 1.",
            "Required if the selected content is a single attribute of any VR other than SQ."
         ]
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "name" : "Certificate Type",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
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
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
                           }
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0074,104a)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "req" : [
            "List of parameters that were overridden by the user.",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.31.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "name" : "Overridden Parameters Sequence",
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification"
      },
      "(0074,1042)[<0>](3008,00b0)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Treatment wedges present during delivered Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Recorded Wedge Sequence"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0074,1042)[<0>](300a,0107)" : {
         "usage" : "Contains general delivery verification information",
         "req" : [
            "Applicators associated with Beam.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Applicator Sequence",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "req" : "3",
         "name" : "Contribution Description",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "Description of the contribution the equipment made to the composite instance."
      },
      "(0074,104a)[<0>](0072,0056)" : {
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ],
         "req" : "1C",
         "name" : "Selector Attribute Private Creator",
         "usage" : "Contains general delivery verification information",
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : [
            "Identification of the creator of a group of private data elements.",
            "Required if the Selector Attribute (0072,0026) value is the Data Element Tag of a Private Attribute.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.17.1.2"
                  }
               },
               "."
            ]
         ]
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
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Context UID"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0142)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "name" : "Table Top Pitch Rotation Direction",
         "req" : [
            [
               "Direction of Table Top Pitch Rotation when viewing the table along the positive X-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. See ",
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
                     "linkend" : "sect_C.8.8.25.6.2",
                     "xrefstyle" : "select: label"
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
         ]
      },
      "(0074,1042)[<0>](3008,0032)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "req" : "Desired machine setting of primary Meterset. The units shall match those specified by Primary Dosimeter Unit (300A,00B3) in the plan specified in the Referenced RT Plan Sequence (300C,0002).",
         "name" : "Specified Primary Meterset",
         "usage" : "Contains general delivery verification information"
      },
      "(0020,0013)" : {
         "req" : "3",
         "name" : "Instance Number",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "A number that identifies this Composite object instance."
      },
      "(0008,0124)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource Identification Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "entity" : "",
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)" : {
         "req" : "3",
         "name" : "Original Attributes Sequence",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0190)[<2>](300a,00f9)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Accessory Code",
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "usage" : "Contains general delivery verification information"
      },
      "(0074,1042)[<0>](300c,0006)" : {
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
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25",
                  "xrefstyle" : "select: title"
               }
            },
            " within the referenced RT Ion Plan."
         ],
         "name" : "Referenced Beam Number",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "name" : "Software Versions",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
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
      "(0074,1042)[<0>](300a,0180)[<1>](300a,0182)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "mod_tables" : [
            "table_C.31-1"
         ],
         "name" : "Patient Setup Number",
         "req" : "Identification number of the Patient Setup.",
         "usage" : "Contains general delivery verification information"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "usage" : "Contains SOP Common Information",
         "req" : "1C",
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     },
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0116)[<2>](300c,00c0)" : {
         "desc" : null,
         "entity" : "",
         "module" : "RT Conventional Machine Verification",
         "mod_tables" : [
            "table_C.31-2"
         ],
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "req" : "Uniquely references Wedge described by Wedge Number (300A,00D2) in Wedge Sequence (300A,00D1).",
         "name" : "Referenced Wedge Number"
      },
      "(0074,1042)[<0>](3008,00d0)[<1>](300c,00e0)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "req" : "Uniquely identifies block specified by Block Number (300A,00FC) within Beam referenced by Referenced Beam Number (300C,0006).",
         "name" : "Referenced Block Number",
         "desc" : null,
         "entity" : "",
         "module" : "RT General Machine Verification"
      },
      "(0074,1042)[<0>](3008,00c0)[<1>](300a,00f9)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "name" : "Accessory Code",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0074,1042)[<0>](300a,0180)" : {
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null,
         "name" : "Patient Setup Sequence",
         "req" : [
            "Patient setup data for current plan.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "name" : "MAC ID Number",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "Contains SOP Common Information",
         "name" : "Device Serial Number",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0020,9172)" : {
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0074,104a)[<0>](0008,1070)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : "",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "name" : "Operators' Name",
         "req" : "Name of operator who authorized override of overridden parameter."
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "module" : "SOP Common",
         "entity" : "",
         "desc" : [
            [
               "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with",
               {
                  "attrs" : {
                     "linkend" : "biblio_RFC_3986"
                  },
                  "el" : "xref"
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Retrieve URI",
         "req" : "3",
         "usage" : "Contains SOP Common Information"
      },
      "(0074,1042)[<0>](3008,00d0)[<1>](300a,00f5)" : {
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "name" : "Block Tray ID",
         "req" : "User-supplied identifier for block tray or Electron Insert.",
         "mod_tables" : [
            "table_C.31-1"
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Encrypted Content",
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
         "entity" : "",
         "module" : "SOP Common"
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "req" : "3",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0074,104a)[<0>](0072,0026)" : {
         "desc" : [
            "Data Element Tag of the attribute to be referenced.",
            "Required if the selected content is not a Sequence Item."
         ],
         "module" : "RT General Machine Verification",
         "entity" : "",
         "usage" : "Contains general delivery verification information",
         "req" : "1C",
         "name" : "Selector Attribute",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-20"
         ]
      },
      "(0074,1042)[<0>](300a,00f0)" : {
         "req" : "Number of shielding blocks or Electron Inserts associated with Beam.",
         "name" : "Number of Blocks",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "entity" : "",
         "module" : "RT General Machine Verification",
         "desc" : null
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "SOP Instance UID",
         "req" : "1",
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
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0074,1042)[<0>](300a,0107)[<1>](300a,0109)" : {
         "usage" : "Contains general delivery verification information",
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
         "name" : "Applicator Type",
         "mod_tables" : [
            "table_C.31-1"
         ],
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : ""
      },
      "(0074,1044)[<0>](0074,104c)[<1>](300a,0116)" : {
         "mod_tables" : [
            "table_C.31-2"
         ],
         "req" : [
            "Wedge Positions for the current control point.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.5"
                  }
               },
               "."
            ]
         ],
         "name" : "Wedge Position Sequence",
         "usage" : "Contains delivery verification information specific to conventional (photon or electron) machines",
         "module" : "RT Conventional Machine Verification",
         "entity" : "",
         "desc" : null
      },
      "(fffa,fffa)" : {
         "usage" : "Contains SOP Common Information",
         "req" : "3",
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "entity" : ""
      },
      "(0074,1042)[<0>](300a,0107)[<1>](300a,00f9)" : {
         "mod_tables" : [
            "table_C.31-1"
         ],
         "usage" : "Contains general delivery verification information",
         "name" : "Accessory Code",
         "req" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "desc" : null,
         "module" : "RT General Machine Verification",
         "entity" : ""
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "Person's Address",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "req" : "1",
         "name" : "Reason for the Attribute Modification",
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
         "entity" : ""
      },
      "(0008,001b)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
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
         "entity" : ""
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "req" : "1",
         "usage" : "Contains SOP Common Information",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "",
         "module" : "SOP Common",
         "desc" : "A UID that can be used to uniquely reference this signature."
      },
      "(0074,104a)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "RT General Machine Verification",
         "entity" : "",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "Contains general delivery verification information",
         "mod_tables" : [
            "table_C.31-1",
            "table_10-1"
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "entity" : "",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "Contains SOP Common Information",
         "name" : "Identifying Private Elements",
         "req" : "1"
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
