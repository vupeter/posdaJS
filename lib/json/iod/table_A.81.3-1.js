var data = {
   "tags" : {
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0080)" : {
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "name" : "Selector Code Sequence Value",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026). One or more Items shall be included in this sequence. SeeSection C.23.1.1.3.2.",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SQ and the Attribute referenced by the Selector Attribute (0072,0026) is a Code Sequence."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ]
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
         "module" : "Clinical Trial Study",
         "req" : "1C",
         "usage" : "U",
         "name" : "Distribution Type",
         "entity" : "Study"
      },
      "(0020,0013)" : {
         "entity" : "Content Assessment Results",
         "name" : "Instance Number",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "A number that identifies this Composite object instance."
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Digital Signature UID",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0063)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector DT Value",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DT.",
            "See Note 1 and Note 2."
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "entity" : "Content Assessment Results",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,005e)" : {
         "module" : "Content Assessment Results",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector AE Value",
         "entity" : "Content Assessment Results",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AE."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               }
            },
            "."
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Clinical Trial Time Point Description",
         "module" : "Clinical Trial Study"
      },
      "(0010,2293)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient Breed Code Sequence",
         "req" : "2C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0010,21b0)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Additional information about the Patient's medical history.",
         "entity" : "Study",
         "name" : "Additional Patient History",
         "usage" : "U",
         "req" : "3",
         "module" : "Patient Study"
      },
      "(0008,1072)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "entity" : "Series",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside."
      },
      "(0010,0030)" : {
         "desc" : "Birth date of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient's Birth Date",
         "req" : "2",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "entity" : "Study"
      },
      "(0018,9004)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "req" : "3",
         "usage" : "M",
         "name" : "Content Qualification"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "req" : "3",
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Text Value",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
         "req" : "1",
         "usage" : "M",
         "name" : "Value Type",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Numerator Value"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,006f)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UC."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector UC Value",
         "entity" : "Content Assessment Results"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "name" : "Data Elements Signed",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,0212)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The strain of the patient. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Strain Description",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "module" : "General Series"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0067)" : {
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OF."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Selector OF Value",
         "req" : "1C",
         "entity" : "Content Assessment Results"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Date",
         "module" : "General Series"
      },
      "(0040,0244)" : {
         "desc" : "Date on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Performed Procedure Step Start Date",
         "req" : "3"
      },
      "(0012,0064)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "De-identification Method Code Sequence",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0073)" : {
         "name" : "Selector OD Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OD."
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     },
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
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Text Value",
         "usage" : "M",
         "req" : "1C"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0062)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is CS."
         ],
         "name" : "Selector CS Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0012,0050)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial or research. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Clinical Trial Time Point ID",
         "req" : "2",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Clinical Trial Study"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "name" : "Repository Unique ID",
         "module" : "Patient"
      },
      "(0008,1060)" : {
         "req" : "3",
         "name" : "Name of Physician(s) Reading Study",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Names of the physician(s) reading the Study."
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0078)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UL."
         ],
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector UL Value",
         "usage" : "M",
         "module" : "Content Assessment Results"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0076)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector FL Value",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FL.",
            "See Note 2."
         ]
      },
      "(0008,0106)" : {
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
                     "linkend" : "sect_8.5",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1",
         "name" : "Context Group Version",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "usage" : "M",
         "name" : "Coding Scheme UID",
         "module" : "SOP Common"
      },
      "(0018,1030)" : {
         "entity" : "Series",
         "name" : "Protocol Name",
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "DateTime",
         "module" : "General Series"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0068)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LT."
         ],
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector LT Value",
         "module" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0061)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DA.",
            "See Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector DA Value"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0010,0024)[<0>](0040,0035)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Identifier Type Code",
         "req" : "3",
         "entity" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0010,2203)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Patient's Sex Neutered",
         "req" : "2C",
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     },
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
         ]
      },
      "(0082,0017)" : {
         "desc" : [
            "The person or device that made the assessment request.",
            "Only a single item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "2",
         "name" : "Assessment Requester Sequence"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
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
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Referenced Study Sequence",
         "module" : "General Series"
      },
      "(0008,0053)" : {
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
         ],
         "module" : "SOP Common",
         "req" : "1C",
         "name" : "Query/Retrieve View",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0008,1250)" : {
         "entity" : "Series",
         "name" : "Related Series Sequence",
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
            {
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
                                 "attrs" : {
                                    "xml:id" : "para_41b72cf3-4134-44f1-84cc-a28f024a1c1c"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
                                 },
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
               ],
               "el" : "note"
            }
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,006e)" : {
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is ST."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector ST Value",
         "entity" : "Content Assessment Results"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0012,0072)" : {
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "usage" : "U",
         "name" : "Clinical Trial Series Description",
         "req" : "3",
         "desc" : [
            "A description of the series in the context of a clinical trial or research. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0061)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DA.",
            "See Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector DA Value",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
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
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,006c)" : {
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector SH Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SH."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "name" : "Date",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0008,0300)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "entity" : "Content Assessment Results",
         "req" : "3",
         "name" : "Private Data Element Characteristics Sequence",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "entity" : "Content Assessment Results",
         "name" : "Modifying System",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0245)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step Start Time",
         "usage" : "M",
         "desc" : "Time on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Address",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "UID",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Patient's Birth Date in Alternative Calendar",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     },
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Numeric Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0071)" : {
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector UR Value",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UR."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,007e)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SS."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Selector SS Value",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "name" : "Floating Point Value",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ]
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "desc" : [
            [
               "Patient position descriptor relative to the equipment.  See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.2"
                  },
                  "el" : "xref"
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Position",
         "req" : "3",
         "usage" : "M"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0060)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AT."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector AT Value",
         "entity" : "Content Assessment Results"
      },
      "(0008,1111)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced Performed Procedure Step Sequence",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0066)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LO."
         ],
         "entity" : "Content Assessment Results",
         "name" : "Selector LO Value",
         "usage" : "M",
         "req" : "1C",
         "module" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,006f)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UC."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "name" : "Selector UC Value",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Person's Address",
         "usage" : "M"
      },
      "(0008,0201)" : {
         "module" : "SOP Common",
         "name" : "Timezone Offset From UTC",
         "req" : "3",
         "usage" : "M",
         "entity" : "Content Assessment Results",
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
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Universal Entity ID",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
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
      "(0008,0122)" : {
         "req" : "3",
         "name" : "Mapping Resource Name",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "The person's telecommunication contact information, including telephone, email, or other telecom addresses.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0010,0021)" : {
         "module" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "entity" : "Patient",
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
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Certified Timestamp",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0075)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OL."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector OL Value",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
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
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "name" : "Person's Address",
         "usage" : "M",
         "req" : "3",
         "entity" : "Content Assessment Results"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "entity" : "Patient",
         "name" : "WADO-RS Retrieval Sequence",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0069)" : {
         "module" : "Content Assessment Results",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector OW Value",
         "entity" : "Content Assessment Results",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OW."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0008,0090)" : {
         "module" : "General Study",
         "usage" : "M",
         "name" : "Referring Physician's Name",
         "req" : "2",
         "entity" : "Study",
         "desc" : "Name of the patient's referring physician",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "General Study"
      },
      "(0012,0082)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "usage" : "U",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0008,1030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "usage" : "M",
         "name" : "Study Description",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0010,1010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Age of the Patient.",
         "usage" : "U",
         "name" : "Patient's Age",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "module" : "SOP Common",
         "name" : "Deidentification Action",
         "usage" : "M",
         "req" : "1",
         "entity" : "Content Assessment Results",
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
               "type" : "variablelist",
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
                           ]
                        },
                        "\n                  "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Time",
         "module" : "General Series"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0072,0054)" : {
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
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10-20a",
            "table_10-20"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector Sequence Pointer Private Creator",
         "entity" : "Content Assessment Results"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0078)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UL."
         ],
         "name" : "Selector UL Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0038,0014)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Issuer of Admission ID Sequence",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            [
               "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.1.3"
                  }
               },
               "."
            ]
         ],
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Study"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name",
         "req" : "3",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "entity" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ]
      },
      "(0020,0060)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) or Measurement Laterality (0024,0113) are not sent.",
            {
               "type" : "variablelist",
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
               ]
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ],
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "2C",
         "name" : "Laterality",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,006c)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SH."
         ],
         "name" : "Selector SH Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,007c)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SL."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector SL Value",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "module" : "General Series",
         "entity" : "Series",
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
         ]
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "name" : "Operators' Name",
         "entity" : "Content Assessment Results"
      },
      "(0012,0010)" : {
         "module" : "Clinical Trial Subject",
         "req" : "1",
         "name" : "Clinical Trial Sponsor Name",
         "usage" : "U",
         "entity" : "Patient",
         "desc" : [
            "The name of the clinical trial or research sponsor. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "list" : [
                  [
                     "CMS_TSP",
                     "Internet X.509 Public Key Infrastructure Time Stamp Protocol"
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
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15"
                           },
                           "el" : "olink"
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
         "entity" : "Content Assessment Results",
         "name" : "Certified Timestamp Type",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Reason for the attribute modification.",
            {
               "title" : "Defined Terms:",
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
               ]
            }
         ],
         "usage" : "M",
         "req" : "1",
         "name" : "Reason for the Attribute Modification",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "req" : "1",
         "name" : "Manufacturer",
         "usage" : "M"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0070)" : {
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UT."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector UT Value"
      },
      "(0038,0101)[<0>](0038,0102)" : {
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "desc" : "Description or title of the resource",
         "entity" : "Content Assessment Results",
         "name" : "Resource Description",
         "req" : "3",
         "usage" : "M",
         "module" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0072,0028)" : {
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector Value Number",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10-20a",
            "table_10-20"
         ],
         "desc" : [
            "Non-negative integer identifying which value of a multi-valued attribute identified by Selector Attribute (0072,0026) is to be referenced. The value 1 identifies the first value. The value 0 identifies all values.",
            "When the Value Multiplicity of the Selector Attribute (0072,0026) is 1 then the value of this attribute shall be 1.",
            "Required if the selected content is a single attribute of any VR other than SQ."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,006b)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is TM.",
            "See Note 1 and Note 2."
         ],
         "name" : "Selector TM Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      " (0010,0027) [<0>](0010,0021)" : {
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
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Patient ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0066)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LO."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector LO Value",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,007c)" : {
         "module" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Selector SL Value",
         "req" : "1C",
         "entity" : "Content Assessment Results",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SL."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ]
      },
      "(0012,0020)" : {
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
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "module" : "SOP Common"
      },
      "(0012,0062)" : {
         "desc" : [
            "The true identity of the patient has been removed from the Attributes and the Pixel Data",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "name" : "Patient Identity Removed",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "module" : "General Series"
      },
      "(0008,103f)" : {
         "req" : "3",
         "usage" : "M",
         "name" : "Series Description Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0082,0017)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_C.17-3b"
         ],
         "desc" : [
            "Manufacturer of the device identified.",
            "Required if Observer Type value is DEV."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Manufacturer",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Instance UID of Related Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Series Instance UID",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0072)" : {
         "module" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector DS Value",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DS. See Note 1 and Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0012,0040)" : {
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "name" : "Clinical Trial Subject ID",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "The assigned identifier for the clinical trial or research subject. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "name" : "Software Versions",
         "entity" : "Content Assessment Results",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,1012)" : {
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
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     },
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
         "name" : "Reason For Performed Procedure Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,1070)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Operators' Name",
         "req" : "3",
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0082,0004)[<0>](0082,0005)[<1>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     }
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
      "(0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Primary identifier for the patient.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
                     },
                     "content" : [
                        "In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also ",
                        {
                           "attrs" : {
                              "linkend" : "sect_C.7.1.4.1.1",
                              "xrefstyle" : "select: label"
                           },
                           "el" : "xref"
                        },
                        "."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M",
         "name" : "Patient ID",
         "module" : "Patient"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Address",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,007a)" : {
         "entity" : "Content Assessment Results",
         "name" : "Selector US Value",
         "req" : "1C",
         "usage" : "M",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is US."
         ]
      },
      "(0400,0500)" : {
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Encrypted Attributes Sequence",
         "req" : "1C",
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
         ]
      },
      "(0082,0004)" : {
         "desc" : [
            "The SOP Instances that were assessed.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "name" : "Assessed SOP Instance Sequence",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0072)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DS. See Note 1 and Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector DS Value",
         "entity" : "Content Assessment Results"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Breed Registry Code Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "entity" : "Content Assessment Results",
         "req" : "1",
         "name" : "Block Identifying Information Status",
         "usage" : "M",
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
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetptr" : "sect_E.3.10"
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
         ]
      },
      "(0010,4000)" : {
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Patient Comments",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "User-defined additional information about the patient."
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "General Series",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ]
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0008,0124)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Mapping Resource Identification Sequence",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0012,0031)" : {
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.5",
                  "xrefstyle" : "select: label"
               }
            }
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "usage" : "U",
         "req" : "2",
         "name" : "Clinical Trial Site Name"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
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
         ]
      },
      "(0008,0016)" : {
         "entity" : "Content Assessment Results",
         "req" : "1",
         "usage" : "M",
         "name" : "SOP Class UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "entity" : "Patient",
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
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0018,5100)" : {
         "desc" : [
            "Patient position descriptor relative to the equipment. Required for images where Patient Orientation Code Sequence (0054,0410) is not present and whose SOP Class is one of the following: CT (\"1.2.840.10008.5.1.4.1.1.2\") or MR (\"1.2.840.10008.5.1.4.1.1.4\") or Enhanced CT (\"1.2.840.10008.5.1.4.1.1.2.1\") or Enhanced MR Image (\"1.2.840.10008.5.1.4.1.1.4.1\") or Enhanced Color MR Image (\"1.2.840.10008.5.1.4.1.1.4.3\") or MR Spectroscopy (\"1.2.840.10008.5.1.4.1.1.4.2\") Storage SOP Classes.",
            "May be present for other SOP Classes if Patient Orientation Code Sequence (0054,0410) is not present.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.2"
                  }
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "2C",
         "name" : "Patient Position",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Numeric Value",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "usage" : "M",
         "name" : "Institution Address",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0032,1034)" : {
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "name" : "Requesting Service Code Sequence",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Coding Scheme Name",
         "req" : "3",
         "desc" : "The coding scheme full common name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0075)" : {
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "name" : "Selector OL Value",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OL."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0067)" : {
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OF."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "name" : "Selector OF Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0080)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026). One or more Items shall be included in this sequence. SeeSection C.23.1.1.3.2.",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SQ and the Attribute referenced by the Selector Attribute (0072,0026) is a Code Sequence."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "name" : "Selector Code Sequence Value",
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)" : {
         "module" : "Content Assessment Results",
         "req" : "3",
         "name" : "Recommended Default Value Sequence",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : [
            "Contains a default value for the contents of the Selector Attribute (0072,0026).",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0012,0030)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial or research data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "U",
         "req" : "2",
         "name" : "Clinical Trial Site ID",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0280)" : {
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "name" : "Comments on the Performed Procedure Step",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "XDS Retrieval Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0070)" : [
         {
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Manufacturer",
            "req" : "2",
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "desc" : "Manufacturer of the equipment that produced the composite instances."
         },
         {
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "req" : "1",
            "usage" : "M",
            "name" : "Manufacturer",
            "entity" : "Equipment",
            "module" : "Enhanced General Equipment"
         }
      ],
      "(4ffe,0001)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1",
         "name" : "MAC ID Number",
         "module" : "SOP Common"
      },
      " (0010,0027) " : {
         "req" : "\n                  3 ",
         "usage" : "M",
         "name" : "Group of Patients Identification Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : [
            [
               "A sequence containing the identifiers and locations of the individual subjects whose data was acquired at the same time (as a group) and encoded in this composite instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0010,2299)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "2C",
         "name" : "Responsible Organization",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0015)" : {
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            ")."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "name" : "Instance Coercion DateTime",
         "entity" : "Content Assessment Results"
      },
      "(0020,0011)" : {
         "desc" : "A number that identifies this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "2",
         "name" : "Series Number",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Value Type",
         "entity" : "Series"
      },
      "(0012,0021)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The name of the clinical trial or research protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Patient",
         "req" : "2",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Name",
         "module" : "Clinical Trial Subject"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,006d)" : {
         "entity" : "Content Assessment Results",
         "name" : "Selector UN Value",
         "req" : "1C",
         "usage" : "M",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UN."
         ]
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Type of Instances",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Type of object instances referenced.",
            {
               "list" : [
                  [
                     "DICOM",
                     null
                  ],
                  [
                     "CDA",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ]
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "entity" : "Patient",
         "req" : "1",
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network."
      },
      "(0020,0010)" : {
         "entity" : "Study",
         "usage" : "M",
         "req" : "2",
         "name" : "Study ID",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "User or equipment generated Study identifier."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,007e)" : {
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector SS Value",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SS."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0008,001b)" : {
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
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
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Original Specialized SOP Class UID",
         "req" : "3"
      },
      "(0008,1040)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,006f)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UC."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector UC Value",
         "entity" : "Content Assessment Results"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Protocol Context Sequence",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "name" : "Date",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "entity" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0071)" : {
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UR."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector UR Value"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0065)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OB."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector OB Value",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)" : {
         "desc" : [
            "The value of the attribute in the assessed SOP Instance.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1",
         "name" : "Assessed Attribute Value Sequence",
         "entity" : "Content Assessment Results"
      },
      "(0008,0005)" : {
         "entity" : "Content Assessment Results",
         "name" : "Specific Character Set",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Floating Point Value",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1"
         ],
         "desc" : [
            "Units of measurement for the values in the Item(s) in the Constraint Value Sequence (0082,0034) and the Recommended Default Value Sequence (0082,0035).",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Content Assessment Results",
         "req" : "3",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "module" : "Content Assessment Results"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "name" : "Universal Entity ID"
      },
      "(0010,1002)" : {
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Other Patient IDs Sequence"
      },
      "(0008,0117)" : {
         "entity" : "Content Assessment Results",
         "name" : "Context UID",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
      "(0008,0300)[<0>](0008,0301)" : {
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "name" : "Private Group Reference",
         "entity" : "Content Assessment Results",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0036)" : {
         "module" : "Content Assessment Results",
         "name" : "Constraint Violation Significance",
         "req" : "3",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : [
            "Level of significance of a Selector Attribute value exceeding this constraint.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.25.2"
                  }
               },
               "."
            ],
            {
               "list" : [
                  [
                     "FAILURE",
                     null
                  ],
                  [
                     "WARNING",
                     null
                  ],
                  [
                     "INFORMATIVE",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1"
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Content Assessment Results"
      },
      "(0008,0030)" : {
         "desc" : "Time the Study started.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Study Time",
         "req" : "2",
         "usage" : "M"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0070)" : {
         "module" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector UT Value",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UT."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "usage" : "M",
         "name" : "Institution Address",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "entity" : "Content Assessment Results",
         "req" : "2C",
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0038,0101)[<0>](0040,e010)" : {
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "desc" : [
            "Retrieval access path to resource. Includes fully specified scheme, authority, path, and query in accordance with ",
            {
               "attrs" : {
                  "linkend" : "biblio_RFC_3986"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Content Assessment Results",
         "req" : "1",
         "usage" : "M",
         "name" : "Retrieve URI",
         "module" : "Content Assessment Results"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Name",
         "entity" : "Content Assessment Results",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,007a)" : {
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Selector US Value",
         "req" : "1C",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is US."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0067)" : {
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector OF Value",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OF."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ]
      },
      "(0040,0260)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Protocol Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence."
      },
      "(0008,0012)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "name" : "Instance Creation Date",
         "req" : "3",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0010,2201)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Patient Species Description",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,001a)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,006b)" : {
         "module" : "Content Assessment Results",
         "name" : "Selector TM Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is TM.",
            "See Note 1 and Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0010,2210)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Anatomical Orientation Type",
         "req" : "1C",
         "desc" : [
            "The anatomical orientation type used in instances generated by this equipment.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " and ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.2.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6250224a-3316-415a-9bc4-04999c343dd9"
                     },
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0010,0040)" : {
         "module" : "Patient",
         "req" : "2",
         "name" : "Patient's Sex",
         "usage" : "M",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "module" : "General Series",
         "name" : "Scheduled Protocol Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "M"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,006c)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SH."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "name" : "Selector SH Value",
         "req" : "1C",
         "usage" : "M"
      },
      "(0082,0003)" : {
         "module" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Assessment Summary Description",
         "req" : "3",
         "entity" : "Content Assessment Results",
         "desc" : "Human-readable summary description of the assessment result.",
         "mod_tables" : [
            "table_C.33.1-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
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
         ]
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0082,0017)[<0>](0040,a084)" : {
         "desc" : [
            "The type of entity being identified.",
            {
               "list" : [
                  [
                     "PSN",
                     "Person"
                  ],
                  [
                     "DEV",
                     "Device"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_C.17-3b"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1",
         "name" : "Observer Type",
         "entity" : "Content Assessment Results"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1",
         "name" : "Signature",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "usage" : "M",
         "name" : "Nonidentifying Private Elements",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "entity" : "Content Assessment Results",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Floating Point Value",
         "req" : "1C"
      },
      "(0008,0081)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0008,0013)" : {
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Instance Creation Time",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "entity" : "Series",
         "name" : "UID",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0080)" : {
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Selector Code Sequence Value",
         "req" : "1C",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026). One or more Items shall be included in this sequence. SeeSection C.23.1.1.3.2.",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SQ and the Attribute referenced by the Selector Attribute (0072,0026) is a Code Sequence."
         ]
      },
      "(0008,1200)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "module" : "Common Instance Reference"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Requested Procedure ID",
         "usage" : "M",
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     },
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0082,0004)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "Content Assessment Results"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : "Primary identifier for the group of subjects.",
         "req" : "1",
         "name" : "Patient ID",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,007f)" : {
         "module" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector UI Value",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UI."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Home Community ID",
         "req" : "3",
         "usage" : "M",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0038,0060)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "name" : "Service Episode ID",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0010,0213)" : {
         "entity" : "Patient",
         "name" : "Strain Nomenclature",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The nomenclature used for Strain Description (0010,0212). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0028,0108)" : {
         "req" : "3",
         "name" : "Smallest Pixel Value in Series",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "The minimum value of all images in this Series."
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "name" : "Universal Entity ID"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "req" : "3",
         "usage" : "M",
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute may be multi-valued."
                     ],
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
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
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ],
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0074)" : {
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector FD Value",
         "entity" : "Content Assessment Results",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FD.",
            "See Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ]
      },
      "(0012,0063)" : {
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 }
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
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the ",
                                    {
                                       "el" : "xref",
                                       "attrs" : {
                                          "xrefstyle" : "select: title",
                                          "linkend" : "sect_C.12.1"
                                       }
                                    },
                                    ". De-identifying equipment may use a Purpose of Reference of ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.16",
                                          "targetptr" : "DCM_109104"
                                       },
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ]
                                    },
                                    "."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 },
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
                     },
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C",
         "name" : "De-identification Method",
         "usage" : "M"
      },
      "(0008,0060)" : {
         "entity" : "Series",
         "req" : "1",
         "name" : "Modality",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Type of equipment that originally acquired the data used to create the images in this Series. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for Defined Terms."
         ]
      },
      "(0008,0014)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "req" : "3",
         "name" : "Instance Creator UID",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "module" : "Patient",
         "req" : "1",
         "name" : "Strain Source Registry Code Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            [
               "Identification of the organization that is the registry of sources of animals. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "Study Instance UID",
         "entity" : "Patient",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0082,0017)[<0>](0008,1040)" : {
         "desc" : "Department in the institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_C.17-3b"
         ],
         "module" : "Content Assessment Results",
         "req" : "3",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "entity" : "Content Assessment Results"
      },
      "(0040,0251)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Performed Procedure Step End Time",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Time at which the Performed Procedure Step ended."
      },
      "(0100,0426)" : {
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "req" : "3",
         "name" : "Authorization Equipment Certification Number",
         "usage" : "M"
      },
      "(0028,0120)" : {
         "desc" : [
            [
               "Single pixel value or one limit (inclusive) of a range of pixel values used in an image to pad to rectangular format or to signal background that may be suppressed. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.5.1.1.2"
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
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
                                 },
                                 "el" : "para"
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
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
                                 },
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
                                 },
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
                                 "el" : "para"
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "1C",
         "name" : "Pixel Padding Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Numeric Value"
      },
      "(0008,009d)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Consulting Physician Identification Sequence",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ]
      },
      "(0020,000e)" : {
         "req" : "1",
         "usage" : "M",
         "name" : "Series Instance UID",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Unique identifier of the Series."
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
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
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,006a)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is PN."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector PN Value",
         "entity" : "Content Assessment Results"
      },
      "(0082,0017)[<0>](0008,0055)" : {
         "entity" : "Content Assessment Results",
         "name" : "Station AE Title",
         "req" : "3",
         "usage" : "M",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_C.17-3b"
         ],
         "desc" : "Application Entity Title of the device identified."
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0033)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1"
         ],
         "desc" : "Brief guidance that a human operator may consider when selecting an appropriate value for the Selector Attribute (0072,0026) within the constraints defined.",
         "usage" : "M",
         "req" : "3",
         "name" : "Specification Selection Guidance",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0008,1090)" : [
         {
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "module" : "General Equipment",
            "entity" : "Equipment",
            "req" : "3",
            "usage" : "M",
            "name" : "Manufacturer's Model Name"
         },
         {
            "module" : "Enhanced General Equipment",
            "entity" : "Equipment",
            "req" : "1",
            "usage" : "M",
            "name" : "Manufacturer's Model Name",
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "mod_tables" : [
               "table_C.7-8b"
            ]
         }
      ],
      "(0008,1052)[<0>](0008,0080)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "HL7 Instance Identifier",
         "req" : "1",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0082,0007)[<0>](0082,0008)" : {
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Observation Significance",
         "req" : "1",
         "desc" : [
            "The significance of this observation regarding the quality or effectiveness of the assessed SOP Instance of this observation.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "MAJOR",
                     "The observation represents a major concern. Further use of the assessed object(s) is not advised."
                  ],
                  [
                     "MODERATE",
                     "The observation represents a moderate concern. Intervention by an authorized person is advised prior to any use of the assessed object(s)."
                  ],
                  [
                     "MINOR",
                     "The observation represents a minor concern, that does not inhibit further use of the assessed object(s)."
                  ],
                  [
                     "CONSISTENT",
                     "The observation was consistent with the assessment criteria."
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.33.1-1"
         ]
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "module" : "General Series",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "entity" : "Series",
         "name" : "DateTime",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0060)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AT."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector AT Value",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number"
      },
      "(0008,1052)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-5a",
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
                                 "el" : "para",
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 }
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
         "req" : "3",
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0082,0007)[<0>](0082,000a)" : {
         "desc" : "Human-readable description of the Observation.",
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "module" : "Content Assessment Results",
         "name" : "Observation Description",
         "usage" : "M",
         "req" : "1",
         "entity" : "Content Assessment Results"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Time",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Name",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0076)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FL.",
            "See Note 2."
         ],
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector FL Value",
         "usage" : "M",
         "module" : "Content Assessment Results"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "name" : "Coding Scheme Designator",
         "req" : "1",
         "usage" : "M",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0219)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            [
               "A coded identification of the strain of the patient. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  }
               },
               "."
            ],
            "One or more Items are permitted in this sequence. If more than one item is present, each item represents the same information but encoded using a different coding scheme (rather than post-coordinated modifiers)."
         ],
         "entity" : "Patient",
         "name" : "Strain Code Sequence",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0082,0001)" : {
         "desc" : [
            "Summary of the assessment result.",
            "The relationship between the values of Observation Type (0082,0008) found and the Assessment Summary value is implementation dependent.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PASSED",
                     "The assessment has passed. E.g., no observation of major or moderate concern was made."
                  ],
                  [
                     "INCONCLUSIVE",
                     "The object(s) have not definitively passed or failed. E.g., observations of moderate concern were made."
                  ],
                  [
                     "FAILED",
                     "The object(s) have failed the assessment. E.g., observations of major concern were made."
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "req" : "1",
         "usage" : "M",
         "name" : "Assessment Summary"
      },
      "(0008,1052)" : {
         "entity" : "Series",
         "name" : "Performing Physician Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "req" : "3",
         "name" : "Station Name",
         "usage" : "M",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0060)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AT."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector AT Value",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Retrieval Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,1010)" : {
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Station Name",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1084)" : {
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "req" : "3"
      },
      "(0040,0275)" : {
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Request Attributes Sequence",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ],
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0082,0021)" : {
         "entity" : "Content Assessment Results",
         "name" : "Assessment Type Code Sequence",
         "usage" : "M",
         "req" : "1",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "desc" : [
            "Type of Assessment that was performed.",
            "Only a single item shall be included in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "entity" : "Study"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "usage" : "M",
         "req" : "1",
         "name" : "Modified Attributes Sequence",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,006d)" : {
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UN."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "name" : "Selector UN Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "name" : "Person Name",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)" : {
         "desc" : [
            "Value(s) used to constrain the contents of the attribute referenced by the Selector Attribute (0072,0026).",
            "Required if Constraint Type (0082,0032) is not UNCONSTRAINED.",
            "If the Constraint Type (0082,0032) is GREATER_OR_EQUAL, LESS_OR_EQUAL, GREATER_THAN, LESS_THAN, EQUAL or MEMBER_OF_CID only a single Item shall be included in this Sequence.",
            "If the Constraint Type (0082,0032) is RANGE_INCL or RANGE_EXCL, exactly two Items shall be included in this Sequence, the first of which is less than or equal to the second.",
            "If the Constraint Type (0082,0032) is MEMBER_OF or NOT_MEMBER_OF, one or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "name" : "Constraint Value Sequence",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0254)" : {
         "entity" : "Series",
         "name" : "Performed Procedure Step Description",
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed."
      },
      "(0082,0017)[<0>](0018,1002)" : {
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Device UID",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_C.17-3b"
         ],
         "desc" : [
            "Unique identifier of the device identified.",
            "Required if Observer Type value is DEV."
         ]
      },
      "(0038,0064)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Issuer of Service Episode ID Sequence",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0082,0017)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_C.17-3b"
         ],
         "desc" : "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
         "usage" : "M",
         "req" : "2",
         "name" : "Institution Name",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person's Address",
         "req" : "3"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,006a)" : {
         "entity" : "Content Assessment Results",
         "name" : "Selector PN Value",
         "req" : "1C",
         "usage" : "M",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is PN."
         ]
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0010,1021)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "U",
         "name" : "Patient's Size Code Sequence",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0012,0042)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "Identifies the subject for blinded evaluations. Shall be present if Clinical Trial Subject ID (0012,0040) is absent. May be present otherwise. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.7"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "U",
         "name" : "Clinical Trial Subject Reading ID",
         "module" : "Clinical Trial Subject"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,006d)" : {
         "req" : "1C",
         "name" : "Selector UN Value",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UN."
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced Instance Sequence",
         "entity" : "Content Assessment Results",
         "module" : "Common Instance Reference"
      },
      "(0082,0007)[<0>](0082,0022)" : {
         "desc" : [
            "Basis on which the Observation was performed.",
            "Only a single item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Observation Basis Code Sequence",
         "req" : "1"
      },
      "(0018,1020)" : [
         {
            "entity" : "Equipment",
            "req" : "3",
            "usage" : "M",
            "name" : "Software Versions",
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
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
            ]
         },
         {
            "desc" : [
               "Manufacturer's designation of software version of the equipment that produced the composite instances. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.5.1.1.3"
                  }
               },
               "."
            ],
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "module" : "Enhanced General Equipment",
            "usage" : "M",
            "req" : "1",
            "name" : "Software Versions",
            "entity" : "Equipment"
         }
      ],
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
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
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "entity" : "Content Assessment Results"
      },
      "(0040,a390)[<0>](0040,e010)" : {
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
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "el" : "para"
                  },
                  "\n"
               ]
            }
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Retrieve URI",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0008,1110)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Study Sequence",
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
         ]
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Reason for Requested Procedure Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ]
                              },
                              "\n                  "
                           ]
                        },
                        "\n                "
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "req" : "3",
         "name" : "Scheduled Procedure Step Description",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed."
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0012,0081)" : {
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "usage" : "U",
         "req" : "1C",
         "name" : "Clinical Trial Protocol Ethics Committee Name"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1",
         "name" : "Study Instance UID"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Date",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "desc" : [
            "The person's telecommunication contact information, including telephone, email, or other telecom addresses.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "\n                  ",
                        {
                           "content" : [
                              "\n                    ",
                              {
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "el" : "para"
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "usage" : "M"
      },
      "(0010,0010)" : {
         "desc" : "Patient's full name.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient's Name",
         "req" : "2",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "DateTime",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "module" : "General Series"
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telecom Information",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "req" : "1C",
         "name" : "WADO Retrieval Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0082,0004)[<0>](0008,1155)" : {
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "entity" : "Content Assessment Results",
         "req" : "1",
         "name" : "Series Instance UID",
         "usage" : "M",
         "module" : "Common Instance Reference"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Other Patient Names",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other names used to identify the patient."
      },
      "(0008,0123)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Context Group Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Text Value",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "usage" : "M"
      },
      "(0082,0004)[<0>](0082,0005)" : {
         "req" : "1C",
         "name" : "Referenced Comparison SOP Instance Sequence",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "desc" : [
            "SOP Instance(s) used by the assessor to compare to the assessed SOP Instances.",
            "Required if the assessor used comparison SOP Instances.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,2202)" : {
         "req" : "1C",
         "name" : "Patient Species Code Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Only a single Item shall be included in this Sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ]
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "URL specifying the location of the referenced instance(s).",
         "usage" : "M",
         "req" : "1",
         "name" : "Retrieve URL",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0065)" : {
         "entity" : "Content Assessment Results",
         "name" : "Selector OB Value",
         "req" : "1C",
         "usage" : "M",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OB."
         ]
      },
      "(0020,9172)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "module" : "General Series",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "req" : "1",
         "usage" : "M",
         "name" : "Digital Signature DateTime"
      },
      "(0018,1000)" : [
         {
            "entity" : "Equipment",
            "name" : "Device Serial Number",
            "usage" : "M",
            "req" : "3",
            "module" : "General Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "desc" : [
               "Manufacturer's serial number of the equipment that produced the composite instances.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                        ],
                        "attrs" : {
                           "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                        },
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ]
         },
         {
            "entity" : "Equipment",
            "usage" : "M",
            "name" : "Device Serial Number",
            "req" : "1",
            "module" : "Enhanced General Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances."
         }
      ],
      "(0040,0275)[<0>](0020,000d)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Study Instance UID",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Ethnic Group",
         "entity" : "Patient"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ]
      },
      "(0082,0017)[<0>](0040,1101)" : {
         "desc" : [
            "Coded identifier of the person identified.",
            "Zero or one Item shall be included in this Sequence.",
            "Required if Observer Type value is PSN."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_C.17-3b"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "req" : "2C",
         "name" : "Person Identification Code Sequence",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "req" : "3",
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "3",
         "name" : "Deidentification Action Sequence",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0062)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is CS."
         ],
         "name" : "Selector CS Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Instance UID of Study to which the related Series belongs",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Study Instance UID",
         "module" : "General Series"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "entity" : "Patient",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
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
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,1050)" : {
         "desc" : "Name of the physician(s) administering the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Performing Physician's Name",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
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
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
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
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "entity" : "Content Assessment Results"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     },
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
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Universal Entity ID",
         "usage" : "M"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0073)" : {
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector OD Value",
         "usage" : "M",
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OD."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ]
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "3",
         "name" : "Spatial Resolution",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center."
      },
      "(0038,0010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "name" : "Admission ID",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : "Content Assessment Results",
         "req" : "3",
         "usage" : "M",
         "name" : "SOP Authorization DateTime",
         "module" : "SOP Common"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 3 (Universal ID Type)."
                     ],
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
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
         "entity" : "Content Assessment Results",
         "req" : "3",
         "name" : "Digital Signature Purpose Code Sequence",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0008,1062)" : {
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "req" : "3"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "name" : "Purpose of Reference Code Sequence",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Describes the purpose for which the related equipment is being referenced.",
            "Only a single Item shall be included in this Sequence.",
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
         ]
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
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
         "module" : "SOP Common",
         "name" : "Certificate Type",
         "req" : "1",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0008,0300)[<0>](0008,0302)" : {
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
         "entity" : "Content Assessment Results",
         "req" : "1",
         "name" : "Private Creator Reference",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0075)" : {
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OL."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector OL Value",
         "entity" : "Content Assessment Results"
      },
      "(0020,000d)" : {
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1",
         "name" : "Study Instance UID",
         "usage" : "M"
      },
      "(0008,1120)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Referenced Patient Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Requested Procedure Code Sequence"
      },
      "(0010,1000)" : {
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Other Patient IDs",
         "entity" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Date of Last Calibration",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,006a)" : {
         "name" : "Selector PN Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is PN."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0069)" : {
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OW."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "name" : "Selector OW Value",
         "usage" : "M",
         "req" : "1C"
      },
      "(0012,0060)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.1"
               }
            },
            "."
         ],
         "entity" : "Series",
         "name" : "Clinical Trial Coordinating Center Name",
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Series"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M",
         "name" : "Coding Scheme Registry",
         "entity" : "Content Assessment Results",
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
         ]
      },
      "(0010,0216)" : {
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Strain Stock Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "Content Assessment Results",
         "req" : "1",
         "usage" : "M",
         "name" : "Attribute Modification DateTime",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0010,2180)" : {
         "name" : "Occupation",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Occupation of the Patient."
      },
      "(0028,0303)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Longitudinal Temporal Information Modified",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0082,0017)[<0>](0008,1090)" : {
         "desc" : [
            "Model Name of the device identified.",
            "Required if Observer Type value is DEV."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_C.17-3b"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Manufacturer's Model Name",
         "entity" : "Content Assessment Results"
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
         "name" : "HL7 Structured Document Reference Sequence",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "entity" : "Series",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0018,1201)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Time of Last Calibration",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,0080)" : {
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "name" : "Institution Name",
         "entity" : "Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
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
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Universal Entity ID"
      },
      "(0082,0017)[<0>](0040,a123)" : {
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Person Name",
         "entity" : "Content Assessment Results",
         "desc" : [
            "Name of the person observer identified.",
            "Required if Observer Type value is PSN."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_C.17-3b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Identification of the organization that is the source of the animal, issued by the registry identified by Strain Source Registry Code Sequence (0010,0215). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ],
         "name" : "Strain Source",
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0070)" : {
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector UT Value",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UT."
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
         "entity" : "Content Assessment Results",
         "name" : "Mapping Resource",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0018,0015)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16",
                     "targetdoc" : "PS3.16",
                     "targetptr" : "chapter_L"
                  },
                  "el" : "olink"
               },
               " for Defined Terms"
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ],
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Body Part Examined",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Institution Address",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "name" : "MAC ID Number",
         "entity" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0069)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OW."
         ],
         "name" : "Selector OW Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "req" : "2",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,005f)" : {
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector AS Value",
         "usage" : "M",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AS."
         ]
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-3",
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
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "el" : "para"
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
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "module" : "General Study"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "entity" : "Content Assessment Results",
         "name" : "Series Instance UID",
         "req" : "1",
         "usage" : "M",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ]
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "req" : "3",
         "usage" : "M",
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
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0008,1048)" : {
         "entity" : "Study",
         "name" : "Physician(s) of Record",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Names of the physician(s) who are responsible for overall patient care at time of Study (see ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.1"
               }
            },
            " for Performing Physician)"
         ]
      },
      "(0012,0083)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Consent for Clinical Trial Use Sequence",
         "usage" : "U",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial or research use of the composite instances within this Study.",
            "One or more Items are permitted in this Sequence.",
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
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0028,0109)" : {
         "name" : "Largest Pixel Value in Series",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "The maximum value of all images in this Series."
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,006e)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is ST."
         ],
         "req" : "1C",
         "name" : "Selector ST Value",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "3",
         "name" : "Coding Scheme Version",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0063)" : {
         "module" : "Content Assessment Results",
         "name" : "Selector DT Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Content Assessment Results",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DT.",
            "See Note 1 and Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "name" : "Coding Scheme Identification Sequence",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "3",
         "name" : "Time of Last Calibration",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "entity" : "Content Assessment Results",
         "req" : "1",
         "name" : "Identifying Private Elements",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0018,a001)" : {
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
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "name" : "Contributing Equipment Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1049)" : {
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "name" : "Physician(s) of Record Identification Sequence",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "req" : "3",
         "name" : "Accession Number",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure."
      },
      "(0008,0021)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Series Date",
         "entity" : "Series",
         "desc" : "Date the Series started.",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "entity" : "Series",
         "name" : "Time",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "General Series"
      },
      "(0008,103e)" : {
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "name" : "Series Description",
         "usage" : "M",
         "desc" : "Description of the Series",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0072,0026)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector Attribute",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10-20a",
            "table_10-20"
         ],
         "desc" : [
            "Data Element Tag of the attribute to be referenced.",
            "Required if the selected content is not a Sequence Item."
         ]
      },
      "(0010,1030)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Weight of the Patient, in kilograms.",
         "req" : "3",
         "usage" : "U",
         "name" : "Patient's Weight",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0010,0200)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Quality Control Subject",
         "desc" : [
            "Indicates whether or not the subject is a quality control phantom.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            [
               "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               ", which is used to describe an image acquired."
            ]
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0010,1100)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "name" : "Referenced Patient Photo Sequence",
         "usage" : "M",
         "desc" : [
            "A photo to confirm the identity of a patient.",
            "Only a single Item is permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "linkend" : "sect_C.2.2.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,007e)" : {
         "module" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Selector SS Value",
         "req" : "1C",
         "entity" : "Content Assessment Results",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SS."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0010,1020)" : {
         "entity" : "Study",
         "name" : "Patient's Size",
         "usage" : "U",
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters."
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : "Content Assessment Results",
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,007f)" : {
         "entity" : "Content Assessment Results",
         "name" : "Selector UI Value",
         "usage" : "M",
         "req" : "1C",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UI."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0074,1057)" : {
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
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10-20a",
            "table_10-20"
         ],
         "module" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector Sequence Pointer Items",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "2",
         "name" : "Storage Media File-Set ID",
         "entity" : "Patient"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0064)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is IS."
         ],
         "entity" : "Content Assessment Results",
         "name" : "Selector IS Value",
         "req" : "1C",
         "usage" : "M",
         "module" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0068)" : {
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LT."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "name" : "Selector LT Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(fffa,fffa)" : {
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "req" : "3",
         "usage" : "M",
         "name" : "Digital Signatures Sequence"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0078)" : {
         "entity" : "Content Assessment Results",
         "name" : "Selector UL Value",
         "usage" : "M",
         "req" : "1C",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UL."
         ]
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1",
         "name" : "SOP Instance UID",
         "module" : "SOP Common"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0018)" : {
         "desc" : [
            "Name of the Selector Attribute (0072,0026).",
            [
               "For standard data elements, this shall be the value in the Name column of ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "table_6-1",
                     "xrefstyle" : "template:Table %n in PS3.6",
                     "targetdoc" : "PS3.6"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10-20a"
         ],
         "module" : "Content Assessment Results",
         "name" : "Selector Attribute Name",
         "usage" : "M",
         "req" : "1",
         "entity" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0032)" : {
         "name" : "Constraint Type",
         "req" : "1",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1"
         ],
         "desc" : [
            "Describes how the value(s) specified in the Constraint Value Sequence (0082,0034) shall be used to determine the acceptability of a given value for the Attribute identified by Selector Attribute (0072,0026)",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.25.1"
                  }
               },
               "."
            ],
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "RANGE_INCL",
                     null
                  ],
                  [
                     "RANGE_EXCL",
                     null
                  ],
                  [
                     "GREATER_OR_EQUAL",
                     null
                  ],
                  [
                     "LESS_OR_EQUAL",
                     null
                  ],
                  [
                     "GREATER_THAN",
                     null
                  ],
                  [
                     "LESS_THAN",
                     null
                  ],
                  [
                     "EQUAL",
                     null
                  ],
                  [
                     "MEMBER_OF",
                     null
                  ],
                  [
                     "NOT_MEMBER_OF",
                     null
                  ],
                  [
                     "MEMBER_OF_CID",
                     null
                  ],
                  [
                     "UNCONSTRAINED",
                     null
                  ]
               ]
            }
         ]
      },
      "(0008,009c)" : {
         "desc" : "Consulting physician(s) for this patient visit.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Consulting Physician's Name",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,005f)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AS."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector AS Value",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0010,0218)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Strain Additional Information",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Additional information about the strain of the patient that is not encoded in the formal nomenclature used in Strain Description (0010,0212). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ]
      },
      "(0040,0250)" : {
         "desc" : "Date on which the Performed Procedure Step ended.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Date",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1032)" : {
         "req" : "3",
         "name" : "Procedure Code Sequence",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Breed Registration Number",
         "req" : "1",
         "desc" : "Identification number of an animal within the registry.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0064)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is IS."
         ],
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector IS Value",
         "module" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,006b)" : {
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector TM Value",
         "usage" : "M",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is TM.",
            "See Note 1 and Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Address",
         "usage" : "M"
      },
      "(0010,0034)" : {
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Patient's Death Date in Alternative Calendar",
         "entity" : "Patient",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0019)" : {
         "desc" : [
            "Keyword of the Selector Attribute (0072,0026).",
            [
               "For standard data elements, this shall be the value in the Keyword column of ",
               {
                  "attrs" : {
                     "targetptr" : "table_6-1",
                     "xrefstyle" : "template:Table %n in PS3.6",
                     "targetdoc" : "PS3.6"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10-20a"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "req" : "3",
         "name" : "Selector Attribute Keyword",
         "usage" : "M"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0068)" : {
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LT."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector LT Value",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "req" : "1C",
         "name" : "Institution Name",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0008,0050)" : {
         "req" : "2",
         "name" : "Accession Number",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "A RIS generated number that identifies the order for the Study."
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "module" : "Patient",
         "name" : "Type of Patient ID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "desc" : [
            "The type of identifier in this item.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_0c5465f7-fe2f-460e-8394-64ad149bdd60"
                     },
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
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
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
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
         "module" : "SOP Common",
         "req" : "1",
         "name" : "MAC Algorithm",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0082,0007)" : {
         "entity" : "Content Assessment Results",
         "name" : "Assessment Observations Sequence",
         "req" : "1C",
         "usage" : "M",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "desc" : [
            "Observations made during the assessment.",
            "Required if Number of Assessment Observations (0082,0006) is not zero.",
            "The number of Items included in the Sequence shall equal the value of Number of Assessment Observations (0082,0006)."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0037)" : {
         "name" : "Constraint Violation Condition",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1"
         ],
         "desc" : [
            "Conditionality of the constraint violation significance. If the condition is not met, the violation has no significance.",
            "The condition may be expressed as a mathematical expression, a human readable text or other form.",
            "Required if Constraint Violation Significance (0082,0036) is only significant under certain conditions."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0066)" : {
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector LO Value",
         "usage" : "M",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is LO."
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0072,0056)" : {
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
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10-20a",
            "table_10-20"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector Attribute Private Creator"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,005f)" : {
         "name" : "Selector AS Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AS."
         ]
      },
      "(0082,0004)[<0>](0082,0005)[<1>](0008,1150)" : {
         "module" : "Content Assessment Results",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0012,0071)" : {
         "desc" : [
            "An identifier of the series in the context of a clinical trial or research. See ",
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
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "name" : "Clinical Trial Series ID",
         "req" : "3",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "module" : "General Series"
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
         ],
         "entity" : "Content Assessment Results",
         "name" : "SOP Instance Status",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0074)" : {
         "module" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector FD Value",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FD.",
            "See Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Referenced Instance Sequence",
         "req" : "1",
         "module" : "Common Instance Reference"
      },
      "(0400,0500)[<0>](0400,0520)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "name" : "Encrypted Content",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "req" : "1C"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Strain Stock Number",
         "req" : "1",
         "desc" : [
            "The stock number of the strain of the patient issued by the organization identified by Strain Source (0010,0217). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0082,0017)[<0>](0008,1010)" : {
         "desc" : [
            "Name of the identified device.",
            "Required if Observer Type value is DEV."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_C.17-3b"
         ],
         "module" : "Content Assessment Results",
         "req" : "2C",
         "usage" : "M",
         "name" : "Station Name",
         "entity" : "Content Assessment Results"
      },
      "(0008,1115)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Series Sequence",
         "entity" : "Content Assessment Results",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "UID",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0038,0101)" : {
         "desc" : [
            "List of Resources that contain information considered pertinent for the assessment.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c9e48425-d9c6-4799-be55-440fcd483c2c"
                     },
                     "content" : [
                        "This may include specifications for the assessment process and criteria for determining the Observation Type (0082,0008)."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "One or more items may be present in this Sequence."
         ],
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "name" : "Pertinent Resources Sequence",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Content Item Modifier Sequence",
         "usage" : "M",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.4.10.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : [
            "An identifier for the patient.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "linkend" : "sect_C.7.1.4.1.1",
                              "xrefstyle" : "select: label"
                           }
                        },
                        "."
                     ],
                     "attrs" : {
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "name" : "Patient ID",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "req" : "3",
         "usage" : "M",
         "name" : "Contribution Description",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Floating Point Value",
         "module" : "General Series"
      },
      "(0010,0035)" : {
         "module" : "Patient",
         "req" : "1C",
         "name" : "Patient's Alternative Calendar",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.5"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Value Type",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0038,0062)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the type of service episode.",
         "req" : "3",
         "usage" : "U",
         "name" : "Service Episode Description",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "req" : "1",
         "name" : "Consent for Distribution Flag",
         "usage" : "U"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "name" : "Patient ID",
         "desc" : "Primary identifier for an individual subject.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "name" : "Numeric Value",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "module" : "General Series"
      },
      "(0018,1050)" : {
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "name" : "Spatial Resolution",
         "entity" : "Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "desc" : "Reason for requesting this procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Reason for the Requested Procedure"
      },
      "(0082,0016)" : {
         "name" : "Assessment Set ID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "desc" : "Identifies the set of assessments to which this assessment result belongs."
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,007f)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UI."
         ],
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector UI Value",
         "module" : "Content Assessment Results"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Contribution DateTime",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0072,0052)" : {
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector Sequence Pointer",
         "entity" : "Content Assessment Results",
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
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10-20a",
            "table_10-20"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "name" : "Requested Procedure Description",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Institution-generated administrative description or classification of Requested Procedure."
      },
      "(0010,0032)" : {
         "module" : "Patient",
         "name" : "Patient's Birth Time",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Birth time of the Patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,1008)" : {
         "entity" : "Equipment",
         "name" : "Gantry ID",
         "req" : "3",
         "usage" : "M",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Identifier of the gantry or positioner."
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0071)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is UR."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector UR Value",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0074)" : {
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "name" : "Selector FD Value",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FD.",
            "See Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "req" : "1C",
         "name" : "Series Instance UID",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ]
      },
      "(0082,0006)" : {
         "desc" : "Number of Observations made during the assessment.",
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "module" : "Content Assessment Results",
         "req" : "1",
         "name" : "Number of Assessment Observations",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0072)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DS. See Note 1 and Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector DS Value",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0010,2297)" : {
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2C",
         "name" : "Responsible Person",
         "usage" : "M"
      },
      "(4ffe,0001)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "MAC Parameters Sequence",
         "req" : "3",
         "entity" : "Content Assessment Results",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
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
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
                  }
               },
               ")."
            ],
            {
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
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 }
                              },
                              "\n                        "
                           ]
                        },
                        "\n                      "
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Content Assessment Results",
         "req" : "1",
         "usage" : "M",
         "name" : "Certificate of Signer",
         "module" : "SOP Common"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,005e)" : {
         "module" : "Content Assessment Results",
         "name" : "Selector AE Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AE."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ]
      },
      "(0008,1080)" : {
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study"
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "req" : "3",
         "name" : "SOP Authorization Comment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,007c)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is SL."
         ],
         "entity" : "Content Assessment Results",
         "name" : "Selector SL Value",
         "usage" : "M",
         "req" : "1C",
         "module" : "Content Assessment Results"
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,0118)" : {
         "usage" : "M",
         "req" : "3",
         "name" : "Mapping Resource UID",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The unique identifier of the Mapping Resource"
      },
      "(0008,0020)" : {
         "usage" : "M",
         "req" : "2",
         "name" : "Study Date",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Date the Study started."
      },
      "(0010,2298)" : {
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "Responsible Person Role",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Relationship of Responsible Person to the patient.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.2"
                  }
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "General Study"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0062)" : {
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Selector CS Value",
         "req" : "1C",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is CS."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "usage" : "M",
         "req" : "1C",
         "name" : "Time",
         "entity" : "Series",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0018,1200)" : {
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
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
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Identifier Type Code"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            [
               "URI/URL specifying the location of the referenced instance(s). Includes fully specified scheme, authority, path, and query in accordance with ",
               {
                  "attrs" : {
                     "linkend" : "biblio_RFC_3986"
                  },
                  "el" : "xref"
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
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     },
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ]
                  },
                  "\n"
               ]
            }
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Retrieve URI",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0082,0017)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_C.17-3b"
         ],
         "module" : "Content Assessment Results",
         "req" : "2",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0040,0253)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "req" : "3",
         "name" : "Performed Procedure Step ID",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0061)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DA.",
            "See Note 2."
         ],
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector DA Value",
         "module" : "Content Assessment Results"
      },
      "(0008,0051)" : {
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,0096)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "name" : "Referring Physician Identification Sequence",
         "module" : "General Study"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0073)" : {
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "name" : "Selector OD Value",
         "usage" : "M",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OD."
         ]
      },
      "(0008,010f)" : {
         "desc" : [
            "The identifier of the Context Group.",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "name" : "Context Identifier",
         "usage" : "M",
         "entity" : "Content Assessment Results"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0035)[<2>](0072,0064)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is IS."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector IS Value",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : [
            "Standard defining the format of the Universal Entity ID. Required if Universal Entity ID (0040,0032) is present.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ]
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "name" : "Encrypted Content Transfer Syntax UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0010,2294)" : {
         "entity" : "Patient",
         "req" : "2C",
         "usage" : "M",
         "name" : "Breed Registration Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "module" : "General Series",
         "req" : "1",
         "name" : "Value Type",
         "usage" : "M",
         "entity" : "Series",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,0065)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is OB."
         ],
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector OB Value",
         "module" : "Content Assessment Results"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "entity" : "Series",
         "name" : "Person Name",
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Text Value",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,0026)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : [
            [
               "A sequence containing the value used for Patient ID (0010,0020) and related Attributes in the source composite instances that contained a group of subjects whose data was acquired at the same time, from which this composite instance was extracted. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Source Patient Group Identification Sequence",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "module" : "General Series",
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,005e)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is AE."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "name" : "Selector AE Value",
         "req" : "1C",
         "entity" : "Content Assessment Results"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Series",
         "name" : "Institution Address",
         "usage" : "M",
         "req" : "3",
         "module" : "General Series"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "entity" : "Study",
         "usage" : "M",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0010,2292)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "entity" : "Patient",
         "name" : "Patient Breed Description",
         "req" : "2C",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "entity" : "Content Assessment Results",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telephone Numbers"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Institutional Department Name",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0082,0023)" : {
         "desc" : "A label that is used to identify this Assessment.",
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "req" : "1",
         "usage" : "M",
         "name" : "Assessment Label"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0082,0007)[<0>](0082,000c)" : {
         "desc" : [
            "Structured Constraint(s) that were used to make this observation and description of conformance or violation.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.33.1-1"
         ],
         "module" : "Content Assessment Results",
         "usage" : "M",
         "req" : "2",
         "name" : "Structured Constraint Observation Sequence",
         "entity" : "Content Assessment Results"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "UID",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     },
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Scheduled Procedure Step ID",
         "entity" : "Series",
         "module" : "General Series"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.4.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Subject Relative Position in Image",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0038,0064)[<0>](0040,0033)" : {
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
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "U"
      },
      "(0008,0031)" : {
         "module" : "General Series",
         "req" : "3",
         "name" : "Series Time",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Time the Series started.",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0034)[<2>](0072,007a)" : {
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10.26-1"
         ],
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is US."
         ],
         "usage" : "M",
         "req" : "1C",
         "name" : "Selector US Value",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "DICOM Media Retrieval Sequence",
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,006e)" : {
         "desc" : [
            "The value of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is ST."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector ST Value",
         "entity" : "Content Assessment Results"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
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
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "name" : "Coding Scheme Responsible Organization",
         "req" : "3",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information."
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0076)" : {
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is FL.",
            "See Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
         ],
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "req" : "1C",
         "usage" : "M",
         "name" : "Selector FL Value"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telecom Information",
         "usage" : "M",
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
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "el" : "para"
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
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "usage" : "M",
         "name" : "Source of Previous Values",
         "req" : "2",
         "entity" : "Content Assessment Results",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.4.10.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "usage" : "M",
         "req" : "3",
         "name" : "Content Item Modifier Sequence",
         "entity" : "Series"
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0072,0050)" : {
         "req" : "1",
         "name" : "Selector Attribute VR",
         "usage" : "M",
         "entity" : "Content Assessment Results",
         "module" : "Content Assessment Results",
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.25-1",
            "table_10-20a"
         ],
         "desc" : [
            "Value Representation of the Selector Attribute (0072,0026).",
            [
               "For standard data elements, this shall be the value in the VR column of ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "table_6-1",
                     "targetdoc" : "PS3.6",
                     "xrefstyle" : "template:Table %n in PS3.6"
                  }
               },
               "."
            ]
         ]
      },
      "(0082,0007)[<0>](0082,000c)[<1>](0082,0010)[<2>](0072,0063)" : {
         "module" : "Content Assessment Results",
         "entity" : "Content Assessment Results",
         "name" : "Selector DT Value",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The value(s) of the attribute identified by Selector Attribute (0072,0026).",
            "Required if Selector Attribute VR (0072,0050) is present and the value is DT.",
            "See Note 1 and Note 2."
         ],
         "mod_tables" : [
            "table_C.33.1-1",
            "table_10.26-1"
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
      "Can't handle table_8.8-1 (in table_C.7-1 after (0010,0219))",
      "Can't handle table_8.8-1 (in table_C.7-1 after (0010,0215))",
      "Can't handle table_8.8-1 (in table_C.7-1 after (0012,0064))",
      "Can't handle table_8.8-1 (in table_C.7-1:table_C.7.1.4-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.7-1:table_C.7.1.4-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.7-1:table_C.7.1.4-1:table_10-18 after (0040,0039))",
      "Can't handle table_8.8-1 (in table_C.7-1:table_C.7.1.4-1:table_10-18 after (0040,003A))",
      "Can't handle table_8.8-1 (in table_C.7-3:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.7-3:table_10-1 after (0008,0082))",
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
      "Can't handle table_8.8-1 (in table_C.33.1-1 after (0082,0021))",
      "Can't handle table_8.8-1 (in table_C.33.1-1:table_C.17-3b after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.33.1-1:table_C.17-3b after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.33.1-1 after (0082,0022))",
      "Can't handle table_8.8-1 (in table_C.33.1-1:table_10.25-1:table_10.26-1 after (0072,0080))",
      "Can't handle table_8.8-1 (in table_C.33.1-1:table_10.25-1:table_10.26-1 after (0072,0080))",
      "Can't handle table_8.8-1 (in table_C.33.1-1:table_10.25-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.33.1-1:table_10.26-1 after (0072,0080))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
