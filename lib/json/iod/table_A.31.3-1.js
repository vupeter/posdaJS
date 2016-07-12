var data = {
   "tags" : {
      "(0008,009d)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Patient",
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
         "module" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence"
      },
      "(0040,0250)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Performed Procedure Step End Date"
      },
      "(3008,0220)[<0>](3008,005a)" : {
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "desc" : "Number of fractions delivered as of Treatment Summary Report.",
         "name" : "Number of Fractions Delivered"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(3008,00e0)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Treatment Summary Measured Dose Reference Sequence",
         "module" : "RT Treatment Summary Record",
         "desc" : [
            "Sequence of references to Measured Dose References.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Treatment Record"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "name" : "Institution Address",
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study"
      },
      "(0012,0030)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "name" : "Clinical Trial Site ID",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
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
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Description",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Series Instance UID",
         "entity" : "Patient",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "module" : "Patient"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0012,0042)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
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
         "name" : "Clinical Trial Subject Reading ID",
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
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
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0008,0090)" : {
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referring Physician's Name",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Name of the patient's referring physician"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "name" : "Requested Procedure Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0038,0014)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Issuer of Admission ID Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "el" : "note",
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
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,0200)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "module" : "Patient",
         "desc" : [
            "Indicates whether or not the subject is a quality control phantom.",
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
            },
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            [
               "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1",
                     "xrefstyle" : "select: title"
                  }
               },
               ", which is used to describe an image acquired."
            ]
         ],
         "entity" : "Patient",
         "name" : "Quality Control Subject"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "entity" : "Series",
         "name" : "Value Type"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "name" : "Subject Relative Position in Image",
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.4.1.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
         "name" : "Software Versions",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID",
         "module" : "Patient",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient"
      },
      "(0008,1040)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institutional Department Name",
         "module" : "General Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment"
      },
      "(3008,0202)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Comment on current treatment status.",
         "module" : "RT Treatment Summary Record",
         "name" : "Treatment Status Comment"
      },
      "(0008,0300)" : {
         "entity" : "Treatment Record",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "module" : "SOP Common",
         "name" : "Private Data Element Characteristics Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "RT Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0033)" : {
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
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "req" : "1C",
         "module" : "SOP Common",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Treatment Record",
         "name" : "Referenced Frame Number"
      },
      "(0008,103e)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Description of the series.",
         "module" : "RT Series",
         "name" : "Series Description"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ]
      },
      "(0008,0123)" : {
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "name" : "Context Group Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step Description",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed."
      },
      "(300c,0002)" : {
         "name" : "Referenced RT Plan Sequence",
         "module" : "RT General Treatment Record",
         "entity" : "Treatment Record",
         "desc" : [
            "Reference to a RT Plan.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-53"
         ]
      },
      "(0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "A sequence that provides reference to a Study SOP Class/Instance pair.",
            "One or more Items are permitted in this Sequence.",
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
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "name" : "Floating Point Value"
      },
      "(0012,0051)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Clinical Trial Time Point Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "3"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "entity" : "Treatment Record",
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
         "module" : "SOP Common",
         "name" : "Encrypted Content",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(3008,00e0)[<0>](3008,0052)" : {
         "name" : "Cumulative Dose to Dose Reference",
         "module" : "RT Treatment Summary Record",
         "desc" : "Cumulative Dose delivered to Dose Reference (Gy).",
         "entity" : "Treatment Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "1"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Treatment Record",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0040,0245)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "req" : "3",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "name" : "Performed Procedure Step Start Time"
      },
      "(0010,0034)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     },
                     "el" : "para",
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "name" : "Patient's Death Date in Alternative Calendar"
      },
      "(3008,0030)[<0>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "RT General Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Treatment Record"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0012,0083)" : {
         "name" : "Consent for Clinical Trial Use Sequence",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "3"
      },
      "(0010,0219)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            [
               "A coded identification of the strain of the patient. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items are permitted in this sequence. If more than one item is present, each item represents the same information but encoded using a different coding scheme (rather than post-coordinated modifiers)."
         ],
         "name" : "Strain Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "module" : "RT Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "entity" : "Study",
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
               ],
               "el" : "note"
            }
         ],
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "name" : "Accession Number",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure."
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M",
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
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
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
         "module" : "RT Series",
         "name" : "Value Type",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,1048)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Physician(s) of Record",
         "entity" : "Study",
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
         "module" : "General Study"
      },
      "(0100,0426)" : {
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Treatment Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "module" : "SOP Common",
         "name" : "Identifying Private Elements"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "name" : "Coding Scheme Designator",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0010,2202)" : {
         "name" : "Patient Species Code Sequence",
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
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1072)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Operator Identification Sequence",
         "module" : "RT Series",
         "desc" : "Identification of the operator(s) supporting the Series. One or more items may be present in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present.",
         "entity" : "Series"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Patient",
         "name" : "DICOM Media Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0028,0120)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Pixel Padding Value",
         "entity" : "Equipment",
         "desc" : [
            [
               "Single pixel value or one limit (inclusive) of a range of pixel values used in an image to pad to rectangular format or to signal background that may be suppressed. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.5.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Pixel Padding Range Limit (0028,0121) is present and either Pixel Data (7FE0,0010) or Pixel Data Provider URL (0028,7FE0) is present. May be present otherwise only if Pixel Data (7FE0,0010) or Pixel Data Provider URL (0028,7FE0) is present.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
                                 },
                                 "content" : [
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                                 ],
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
                                 "attrs" : {
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
                                 ]
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
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
                                 }
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
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 }
                              },
                              "\n                      "
                           ]
                        },
                        "\n                    "
                     ],
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Equipment"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "The type of certified timestamp used in Certified Timestamp (0400,0310). Required if Certified Timestamp (0400,0310) is present.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
         "entity" : "Treatment Record",
         "name" : "Certified Timestamp Type"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "name" : "DICOM Retrieval Sequence",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "entity" : "Treatment Record",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Content Item Modifier Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.4.10.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0018,1201)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "module" : "General Equipment",
         "entity" : "Equipment",
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
         "name" : "Time of Last Calibration"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "module" : "SOP Common",
         "name" : "Attribute Modification DateTime"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "name" : "Scheduled Protocol Code Sequence"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "name" : "Retrieve URL",
         "module" : "Patient",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1"
      },
      "(0012,0021)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Name",
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
         "module" : "Clinical Trial Subject"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "module" : "SOP Common",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
         "entity" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "entity" : "Treatment Record",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common",
         "name" : "Station Name"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "req" : "1",
         "usage" : "M",
         "desc" : "Primary identifier for an individual subject.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0010,0033)" : {
         "name" : "Patient's Birth Date in Alternative Calendar",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     },
                     "el" : "para",
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "name" : "Private Group Reference",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Treatment Record",
         "desc" : "Person's telephone number(s)",
         "module" : "SOP Common",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1100)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Patient Photo Sequence",
         "entity" : "Patient",
         "desc" : [
            "A photo to confirm the identity of a patient.",
            "Only a single Item is permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.2.2.1.1",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Patient"
      },
      "(0008,1062)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "entity" : "Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "module" : "General Study"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "req" : "1",
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
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Reason for the Attribute Modification"
      },
      "(0040,0244)" : {
         "name" : "Performed Procedure Step Start Date",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0040,1012)" : {
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
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
               ],
               "el" : "note"
            },
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Reason For Performed Procedure Code Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,0122)" : {
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0251)" : {
         "name" : "Treatment Time",
         "desc" : "Time when fraction was delivered.",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
         "entity" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     }
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "module" : "RT Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "name" : "Deidentification Action Sequence",
         "entity" : "Treatment Record",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(3008,0200)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "1",
         "module" : "RT Treatment Summary Record",
         "desc" : [
            "Status of the Treatment at the time the Treatment Summary was created.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "NOT_STARTED",
                     null
                  ],
                  [
                     "ON_TREATMENT",
                     null
                  ],
                  [
                     "ON_BREAK",
                     null
                  ],
                  [
                     "SUSPENDED",
                     null
                  ],
                  [
                     "STOPPED",
                     null
                  ],
                  [
                     "COMPLETED",
                     null
                  ]
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.23.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Treatment Record",
         "name" : "Current Treatment Status"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "RT Series",
         "name" : "Rational Numerator Value"
      },
      "(0010,0024)[<0>](0040,0032)" : {
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study",
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
                                 "el" : "para",
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
         "entity" : "Study",
         "name" : "Person's Telecom Information"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "Common Instance Reference",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1",
         "usage" : "U",
         "name" : "Consent for Distribution Flag",
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
               "title" : "Enumerated Values:",
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
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
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
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     },
                     "el" : "para",
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Study",
         "module" : "Clinical Trial Study"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "entity" : "Treatment Record",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,009d)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Consulting Physician Identification Sequence"
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "name" : "Institution Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0020,0013)" : [
         {
            "name" : "Instance Number",
            "module" : "RT General Treatment Record",
            "desc" : "Instance number identifying this particular instance of the object.",
            "entity" : "Treatment Record",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-53"
            ],
            "req" : "1"
         },
         {
            "req" : "3",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "usage" : "M",
            "name" : "Instance Number",
            "entity" : "Treatment Record",
            "desc" : "A number that identifies this Composite object instance.",
            "module" : "SOP Common"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0012,0072)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "3",
         "usage" : "U",
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
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series Description"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "module" : "RT Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Series",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Treatment Record",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "module" : "RT Series",
         "entity" : "Series",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "entity" : "Series",
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
            "One or more Items are permitted in this Sequence.",
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
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0014)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "name" : "Instance Creator UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Protocol Context Sequence"
      },
      "(0010,1021)" : {
         "module" : "Patient Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "name" : "Patient's Size Code Sequence",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0012,0031)" : {
         "name" : "Clinical Trial Site Name",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
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
         "usage" : "U",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(3008,0050)[<0>](3008,0052)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "M",
         "name" : "Cumulative Dose to Dose Reference",
         "desc" : "Cumulative Dose delivered to Dose Reference (Gy).",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record"
      },
      "(0012,0082)" : {
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number"
      },
      "(0020,0011)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "2",
         "name" : "Series Number",
         "module" : "RT Series",
         "desc" : "A number that identifies this series.",
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "name" : "Certified Timestamp",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Query/Retrieve View",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,2160)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Ethnic Group",
         "entity" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "RT Series",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,1120)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Referenced Patient Sequence"
      },
      "(3008,0050)[<0>](300a,0016)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Dose Reference Description",
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "desc" : "User-defined description of Dose Reference."
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "module" : "SOP Common",
         "name" : "Nonidentifying Private Elements"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Repository Unique ID",
         "module" : "Patient",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID"
      },
      "(3008,0250)" : {
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "module" : "RT General Treatment Record",
         "desc" : [
            "Date when current fraction was delivered, or Date last fraction was delivered in case of ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_A.31",
                  "xrefstyle" : "select: title"
               }
            },
            ". See Note."
         ],
         "entity" : "Treatment Record",
         "name" : "Treatment Date"
      },
      "(0012,0063)" : {
         "name" : "De-identification Method",
         "entity" : "Patient",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 },
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "select: title",
                                          "linkend" : "sect_C.12.1"
                                       },
                                       "el" : "xref"
                                    },
                                    ". De-identifying equipment may use a Purpose of Reference of ",
                                    {
                                       "attrs" : {
                                          "targetdoc" : "PS3.16",
                                          "targetptr" : "DCM_109104"
                                       },
                                       "el" : "olink",
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ]
                                    },
                                    "."
                                 ],
                                 "el" : "para"
                              },
                              "\n                      "
                           ]
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ]
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0100,0424)" : {
         "name" : "SOP Authorization Comment",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,1020)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "usage" : "U",
         "name" : "Patient's Size",
         "desc" : "Length or size of the Patient, in meters.",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Treatment Record",
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "name" : "Referenced SOP Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ]
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "name" : "Block Identifying Information Status",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0010,0021)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "name" : "Issuer of Patient ID"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Requested Procedure Description",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "RT Series"
      },
      "(0010,1000)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Other Patient IDs",
         "entity" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "RT Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "name" : "Rational Denominator Value"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0040,0260)" : {
         "name" : "Performed Protocol Code Sequence",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "RT Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,0051)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Issuer of Accession Number Sequence"
      },
      "(0012,0040)" : {
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject ID",
         "module" : "Clinical Trial Subject",
         "desc" : [
            "The assigned identifier for the clinical trial or research subject. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.6"
               },
               "el" : "xref"
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Reason for requesting this procedure.",
         "module" : "RT Series",
         "name" : "Reason for the Requested Procedure"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
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
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0100,0410)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "SOP Instance Status",
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
               "type" : "variablelist",
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
         "entity" : "Treatment Record",
         "module" : "SOP Common"
      },
      "(0008,0117)" : {
         "name" : "Context UID",
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
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1049)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "entity" : "Study",
         "name" : "Physician(s) of Record Identification Sequence"
      },
      "(0028,0303)" : {
         "name" : "Longitudinal Temporal Information Modified",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,0124)" : {
         "name" : "Mapping Resource Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "name" : "Study Instance UID",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure."
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "name" : "Modified Attributes Sequence",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0280)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Comments on the Performed Procedure Step",
         "entity" : "Series",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "module" : "RT Series"
      },
      "(0038,0010)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Admission ID"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Treatment Record",
         "name" : "Referenced Segment Number"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "module" : "RT Series",
         "name" : "Protocol Context Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "name" : "Date",
         "module" : "RT Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,0216)[<0>](0010,0215)" : {
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
         "module" : "Patient",
         "name" : "Strain Source Registry Code Sequence",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
         "entity" : "Patient",
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
      "(0008,1115)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "entity" : "Treatment Record",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0020,0010)" : {
         "name" : "Study ID",
         "entity" : "Study",
         "desc" : "User or equipment generated Study identifier.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C",
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Study",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            [
               "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.3",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Clinical Trial Study"
      },
      "(0020,9172)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Conversion Source Attributes Sequence",
         "entity" : "Treatment Record",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common"
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "RT General Treatment Record",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,0060)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Type of equipment that originally acquired the data.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "RTIMAGE",
                     "RT Image"
                  ],
                  [
                     "RTDOSE",
                     "RT Dose"
                  ],
                  [
                     "RTSTRUCT",
                     "RT Structure Set"
                  ],
                  [
                     "RTPLAN",
                     "RT Plan"
                  ],
                  [
                     "RTRECORD",
                     "RT Treatment Record"
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
                     "linkend" : "sect_C.8.8.1.1"
                  }
               },
               "."
            ]
         ],
         "name" : "Modality",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0012,0064)" : {
         "entity" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "name" : "De-identification Method Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "module" : "SOP Common",
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
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
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
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(3008,0220)[<0>](300a,0078)" : {
         "entity" : "Treatment Record",
         "desc" : "Number of fractions planned for this fraction group.",
         "module" : "RT Treatment Summary Record",
         "name" : "Number of Fractions Planned",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1"
      },
      "(0008,0015)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
      "(0010,0032)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Birth time of the Patient.",
         "name" : "Patient's Birth Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0010,2297)" : {
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Responsible Person",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "entity" : "Treatment Record",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "SOP Common",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "entity" : "Treatment Record",
         "name" : "Instance Creation Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0018,1200)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "entity" : "Equipment",
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
         "module" : "General Equipment"
      },
      "(3008,0056)" : {
         "name" : "Most Recent Treatment Date",
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "desc" : "Date of delivery of the most recent administration.",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "module" : "RT Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Home Community ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,0030)" : {
         "name" : "Study Time",
         "desc" : "Time the Study started.",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0010,2293)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            [
               "The breed of the patient. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "name" : "Patient Breed Code Sequence",
         "usage" : "M",
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "module" : "SOP Common",
         "name" : "Modifying System"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "name" : "MAC ID Number"
      },
      "(0012,0081)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "name" : "Clinical Trial Protocol Ethics Committee Name"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Treatment Record",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Treatment Record",
         "module" : "SOP Common"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     },
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
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "module" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "name" : "Private Creator Reference",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0010,0040)" : {
         "name" : "Patient's Sex",
         "entity" : "Patient",
         "desc" : [
            "Sex of the named patient.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0008,1060)" : {
         "name" : "Name of Physician(s) Reading Study",
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "RT Series"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0018)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "SOP Instance UID",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "name" : "Person Identification Code Sequence"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "entity" : "Patient",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "module" : "Patient",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0031)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Series Time",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Time the Series started."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced SOP Sequence"
      },
      "(3008,00e0)[<0>](300a,0016)" : {
         "entity" : "Treatment Record",
         "desc" : "User-defined description of Dose Reference.",
         "module" : "RT Treatment Summary Record",
         "name" : "Dose Reference Description",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "M"
      },
      "(0008,1070)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "name" : "Operators' Name",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "desc" : [
            "The type of distribution for which consent to distribute has been granted.",
            {
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
               ],
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.2.3.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "name" : "Distribution Type"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "entity" : "Treatment Record",
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
         "module" : "SOP Common",
         "name" : "Date of Last Calibration",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0081)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Address",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located."
      },
      "(0010,1030)" : {
         "name" : "Patient's Weight",
         "module" : "Patient Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "usage" : "U",
         "name" : "Referenced Series Sequence",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Common Instance Reference"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "UID",
         "module" : "RT Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "entity" : "Patient",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "module" : "Patient",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0010,0212)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Strain Description",
         "entity" : "Patient",
         "desc" : [
            "The strain of the patient. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Patient"
      },
      "(0010,2201)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
         "name" : "Patient Species Description",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "module" : "RT Series",
         "entity" : "Series",
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)" : {
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Request Attributes Sequence",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "usage" : "U",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "usage" : "U",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "entity" : "Treatment Record",
         "module" : "SOP Common"
      },
      "(0010,2203)" : {
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
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
               ],
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Patient's Sex Neutered"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Data Elements Signed",
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
         "entity" : "Treatment Record",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ]
            }
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "entity" : "Treatment Record",
         "name" : "Contribution DateTime"
      },
      "(0400,0500)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
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
         ],
         "module" : "SOP Common",
         "name" : "Encrypted Attributes Sequence"
      },
      "(3008,0220)" : {
         "name" : "Fraction Group Summary Sequence",
         "desc" : [
            "Sequence describing current state of planned vs. delivered fraction groups.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0010,0010)" : {
         "name" : "Patient's Name",
         "entity" : "Patient",
         "desc" : "Patient's full name.",
         "module" : "Patient",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0010,21b0)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Additional Patient History",
         "module" : "Patient Study",
         "desc" : "Additional information about the Patient's medical history.",
         "entity" : "Study"
      },
      "(0008,009c)" : {
         "entity" : "Study",
         "desc" : "Consulting physician(s) for this patient visit.",
         "module" : "General Study",
         "name" : "Consulting Physician's Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "name" : "Value Type",
         "desc" : [
            "The type of the value encoded in this name-value Item.",
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,a390)" : {
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : "Treatment Record",
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
         "module" : "SOP Common",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0022)" : {
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
                     "el" : "para",
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Type of Patient ID",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Text Value",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "RT Series"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "name" : "Study Instance UID",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0010,2294)" : {
         "module" : "Patient",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "entity" : "Patient",
         "name" : "Breed Registration Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Time",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0008,1010)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "module" : "General Equipment",
         "name" : "Station Name"
      },
      " (0010,0027) " : {
         "name" : "Group of Patients Identification Sequence",
         "entity" : "Patient",
         "desc" : [
            [
               "A sequence containing the identifiers and locations of the individual subjects whose data was acquired at the same time (as a group) and encoded in this composite instance. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items are permitted in this sequence."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "req" : "\n                  3 ",
         "usage" : "M"
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "module" : "RT General Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Treatment Record",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "entity" : "Treatment Record",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "module" : "SOP Common",
         "name" : "Operators' Name",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "entity" : "Treatment Record",
         "name" : "Study Instance UID"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "name" : "Time",
         "module" : "RT Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Text Value"
      },
      "(0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "May include Sequence Attributes and their Items.",
         "module" : "SOP Common",
         "name" : "Any Attribute from the main data set that was modified or removed."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3008,0220)[<0>](3008,0240)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence describing status of fractions in Fraction Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "RT Treatment Summary Record",
         "name" : "Fraction Status Summary Sequence"
      },
      "(3008,00e0)[<0>](300c,0051)" : {
         "name" : "Referenced Dose Reference Number",
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "desc" : [
            "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.10"
               }
            },
            " of referenced RT Plan referenced in Referenced RT Plan Sequence (300C,0002) of ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.17"
               }
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Signature",
         "entity" : "Treatment Record",
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
         "module" : "SOP Common"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "name" : "Person's Address"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     },
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
         "name" : "Scheduled Procedure Step ID"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
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
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0010,1002)" : {
         "entity" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient",
         "name" : "Other Patient IDs Sequence",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "entity" : "Patient",
         "name" : "Retrieve AE Title"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "name" : "Strain Stock Number",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "The stock number of the strain of the patient issued by the organization identified by Strain Source (0010,0217). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1"
      },
      "(0008,1084)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Admitting Diagnoses Code Sequence",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,0118)" : {
         "desc" : "The unique identifier of the Mapping Resource",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Mapping Resource UID",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(3008,0050)" : {
         "name" : "Treatment Summary Calculated Dose Reference Sequence",
         "desc" : [
            "Sequence of references to Calculated Dose References.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Patient",
         "name" : "WADO Retrieval Sequence"
      },
      "(0040,0251)" : {
         "name" : "Performed Procedure Step End Time",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
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
         "name" : "Referenced Frame Number"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "U"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,002a)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "2",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "Conditions under which treatment was terminated.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "NORMAL",
                     "treatment terminated normally"
                  ],
                  [
                     "OPERATOR",
                     "operator terminated treatment"
                  ],
                  [
                     "MACHINE",
                     "machine terminated treatment for other than NORMAL condition"
                  ],
                  [
                     "UNKNOWN",
                     "status at termination unknown"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "RT Treatment Summary Record",
         "name" : "Treatment Termination Status"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Content Item Modifier Sequence",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.4.10.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "module" : "SOP Common",
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
         "entity" : "Treatment Record",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0010,0026)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Source Patient Group Identification Sequence",
         "module" : "Patient",
         "desc" : [
            [
               "A sequence containing the value used for Patient ID (0010,0020) and related Attributes in the source composite instances that contained a group of subjects whose data was acquired at the same time, from which this composite instance was extracted. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Patient"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Breed Registration Number",
         "desc" : "Identification number of an animal within the registry.",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0038,0014)[<0>](0040,0033)" : {
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
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "U"
      },
      "(0008,0096)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence",
         "entity" : "Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "module" : "General Study"
      },
      "(0010,0218)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Additional Information",
         "module" : "Patient",
         "desc" : [
            "Additional information about the strain of the patient that is not encoded in the formal nomenclature used in Strain Description (0010,0212). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Patient"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "name" : "Coding Scheme Version",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(3008,0220)[<0>](3008,0224)" : {
         "entity" : "Treatment Record",
         "desc" : [
            "Indicates type of fraction group.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "EXTERNAL_BEAM",
                     null
                  ],
                  [
                     "BRACHY",
                     null
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "RT Treatment Summary Record",
         "name" : "Fraction Group Type",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "2",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0020,000e)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M",
         "desc" : "Unique identifier of the series.",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Series Instance UID"
      },
      "(0008,010f)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Context Identifier",
         "entity" : "Treatment Record",
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
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "entity" : "Series",
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
         "module" : "RT Series"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "RT Series",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0201)" : {
         "name" : "Timezone Offset From UTC",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
                                       "el" : "olink",
                                       "attrs" : {
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5",
                                          "targetdoc" : "PS3.5"
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
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     },
                     "el" : "para",
                     "content" : [
                        "For example:"
                     ]
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
                     "el" : "para",
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ],
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0038,0062)" : {
         "name" : "Service Episode Description",
         "desc" : "Description of the type of service episode.",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "usage" : "U"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Contribution Description",
         "entity" : "Treatment Record",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
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
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0010,1001)" : {
         "name" : "Other Patient Names",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     },
                     "content" : [
                        "Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "XDS Retrieval Sequence",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "name" : "Person's Address",
         "module" : "SOP Common",
         "desc" : "Person's mailing address",
         "entity" : "Treatment Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
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
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "RT Series",
         "name" : "Date",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(4ffe,0001)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "name" : "MAC Parameters Sequence",
         "module" : "SOP Common",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Treatment Record"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Primary identifier for the group of subjects.",
         "name" : "Patient ID",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient ID",
         "entity" : "Patient",
         "desc" : [
            "An identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
                     },
                     "el" : "para",
                     "content" : [
                        "In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also ",
                        {
                           "attrs" : {
                              "xrefstyle" : "select: label",
                              "linkend" : "sect_C.7.1.4.1.1"
                           },
                           "el" : "xref"
                        },
                        "."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
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
                           "el" : "listitem",
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
                           ]
                        },
                        "\n                "
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "SOP Common",
         "name" : "Person's Telecom Information"
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
         "desc" : [
            "The person's telecommunication contact information, including telephone, email, or other telecom addresses.",
            {
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
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "content" : [
                                    "This attribute may have internal format or structure in accordance with local agreement or profile. In the absence of such agreement or prior formatting, use of ITU-T E.123 is suggested."
                                 ],
                                 "el" : "para"
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
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ],
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(3008,0054)" : {
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "First Treatment Date",
         "module" : "RT Treatment Summary Record",
         "desc" : "Date of delivery of the first treatment.",
         "entity" : "Treatment Record"
      },
      "(0008,1200)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "module" : "Common Instance Reference",
         "name" : "Studies Containing Other Referenced Instances Sequence"
      },
      "(0038,0064)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Issuer of Service Episode ID Sequence",
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0040,e020)" : {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Type of Instances",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0018,1000)" : {
         "name" : "Device Serial Number",
         "entity" : "Equipment",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                     },
                     "el" : "para",
                     "content" : [
                        "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "General Equipment",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0010,0213)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Strain Nomenclature",
         "desc" : [
            "The nomenclature used for Strain Description (0010,0212). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Treatment Record",
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
         ],
         "module" : "SOP Common",
         "name" : "Digital Signature DateTime"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "name" : "Coding Scheme UID"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "entity" : "Treatment Record",
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "2C"
      },
      "(0008,001a)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID",
         "module" : "SOP Common",
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
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "module" : "SOP Common",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
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
         "module" : "General Study"
      },
      "(0008,1111)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced Performed Procedure Step Sequence"
      },
      "(3008,0050)[<0>](300c,0051)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "M",
         "name" : "Referenced Dose Reference Number",
         "entity" : "Treatment Record",
         "desc" : [
            "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.10",
                  "xrefstyle" : "select: title"
               }
            },
            " of referenced RT Plan referenced in Referenced RT Plan Sequence (300C,0002) of ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.17"
               }
            },
            "."
         ],
         "module" : "RT Treatment Summary Record"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0250)" : {
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "desc" : "Date when fraction was delivered.",
         "name" : "Treatment Date",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "module" : "RT Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Series",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "req" : "1"
      },
      "(0010,0216)" : {
         "name" : "Strain Stock Sequence",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0254)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step Description",
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "module" : "RT Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Treatment Record",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0070)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "2",
         "name" : "Manufacturer",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances."
      },
      "(0008,1032)" : {
         "name" : "Procedure Code Sequence",
         "module" : "General Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Time"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     }
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
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,1010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "name" : "Patient's Age",
         "module" : "Patient Study",
         "desc" : "Age of the Patient.",
         "entity" : "Study"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Local Namespace Entity ID"
      },
      "(0012,0010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1",
         "module" : "Clinical Trial Subject",
         "desc" : [
            "The name of the clinical trial or research sponsor. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Patient",
         "name" : "Clinical Trial Sponsor Name"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C"
      },
      "(0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(0018,1020)" : {
         "name" : "Software Versions",
         "module" : "General Equipment",
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
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "UID",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0010,0020)" : {
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient ID",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also ",
                        {
                           "attrs" : {
                              "xrefstyle" : "select: label",
                              "linkend" : "sect_C.7.1.4.1.1"
                           },
                           "el" : "xref"
                        },
                        "."
                     ],
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Strain Source",
         "entity" : "Patient",
         "desc" : [
            "Identification of the organization that is the source of the animal, issued by the registry identified by Strain Source Registry Code Sequence (0010,0215). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Patient"
      },
      "(0010,2292)" : {
         "name" : "Patient Breed Description",
         "module" : "Patient",
         "entity" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C"
      },
      "(3008,0030)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Treatment Record",
         "module" : "RT General Treatment Record",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Treatment Record",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3"
      },
      "(0008,001b)" : {
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common",
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
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0012,0062)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Patient Identity Removed",
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
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "RT Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "req" : "2",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0012,0020)" : {
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Patient",
         "desc" : [
            "Identifier for the noted protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "RT Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series",
         "name" : "Concept Code Sequence"
      },
      "(3008,0220)[<0>](300c,0022)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Fraction Group Number",
         "desc" : "References Fraction Group Number (300A,0071) in Fraction Group Sequence (300A,0070) in the referenced RT Plan.",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record"
      },
      "(fffa,fffa)" : {
         "name" : "Digital Signatures Sequence",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Identifier Type Code"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "RT Series",
         "name" : "Rational Numerator Value"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "name" : "Storage Media File-Set ID",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "2"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0008,0016)" : {
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "Treatment Record",
         "name" : "SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0032,1034)" : {
         "name" : "Requesting Service Code Sequence",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "entity" : "Treatment Record",
         "name" : "Coding Scheme Name"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "RT Series",
         "name" : "Numeric Value"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0005)" : {
         "entity" : "Treatment Record",
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
         "module" : "SOP Common",
         "name" : "Specific Character Set",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(3008,0030)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "name" : "Referenced Treatment Record Sequence",
         "module" : "RT General Treatment Record",
         "entity" : "Treatment Record",
         "desc" : [
            "Reference to RT Treatment Records to which the current RT Treatment Record is significantly related.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 2 (Universal ID)."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient"
      },
      "(0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "1",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Unique identifier for the Study.",
         "name" : "Study Instance UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0018,1008)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Gantry ID",
         "desc" : "Identifier of the gantry or positioner.",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0018,9004)" : {
         "name" : "Content Qualification",
         "entity" : "Treatment Record",
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
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "RT Series",
         "entity" : "Series",
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
         "name" : "Universal Entity ID Type"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
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
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "module" : "RT Series",
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "name" : "Person's Address"
      },
      "(0008,0020)" : {
         "module" : "General Study",
         "desc" : "Date the Study started.",
         "entity" : "Study",
         "name" : "Study Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Breed Registry Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1080)" : {
         "name" : "Admitting Diagnoses Description",
         "entity" : "Study",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Person Name",
         "module" : "RT Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series"
      },
      "(0040,0253)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step ID",
         "entity" : "Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "module" : "RT Series"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            [
               "Patient position descriptor relative to the equipment.  See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1.1"
                  }
               },
               "."
            ],
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
         "module" : "Patient",
         "name" : "Patient Position"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "usage" : "U",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "name" : "Requested Procedure ID",
         "module" : "RT Series",
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "1C"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "name" : "Deidentification Action",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
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
               ]
            },
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            },
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
                                 "el" : "para",
                                 "content" : [
                                    "No C (clean) action is specified, since replacement with values of\n                        similar meaning known not to contain identifying information and consistent\n                        with the VR requires an understanding of the meaning of the value of the\n                        element. Whether or not to clean rather than remove or replace values is at\n                        the discretion of the implementer."
                                 ],
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "attrs" : {
                                          "targetdoc" : "PS3.15",
                                          "targetptr" : "sect_E.3.1",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0012,0071)" : {
         "module" : "Clinical Trial Series",
         "desc" : [
            "An identifier of the series in the context of a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "entity" : "Series",
         "name" : "Clinical Trial Series ID",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(3008,0251)" : {
         "name" : "Treatment Time",
         "module" : "RT General Treatment Record",
         "desc" : [
            "Time when current fraction was delivered (begun), or Time last fraction was delivered (begun) in case of ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_A.31"
               }
            },
            ". See Note."
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-53"
         ]
      },
      "(0008,0021)" : {
         "module" : "RT Series",
         "desc" : "Date the Series started.",
         "entity" : "Series",
         "name" : "Series Date",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "DateTime",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "RT Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     },
                     "el" : "para",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "Patient"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0018,1050)" : {
         "module" : "General Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "entity" : "Equipment",
         "name" : "Spatial Resolution",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "DateTime",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "RT Series"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "desc" : [
            "Details for retrieving instances via WADO-RS.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     },
                     "el" : "para",
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "WADO-RS Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
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
         "entity" : "Treatment Record",
         "name" : "Time of Last Calibration"
      },
      "(0100,0420)" : {
         "name" : "SOP Authorization DateTime",
         "module" : "SOP Common",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 4 subcomponent 1."
                     ],
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Issuer of Patient ID"
      },
      "(0010,4000)" : {
         "desc" : "User-defined additional information about the patient.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Comments",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "RT Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "name" : "Time"
      },
      "(0010,0035)" : {
         "desc" : [
            "The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient's Alternative Calendar",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,0106)" : {
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
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Context Group Version",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0010,2299)" : {
         "name" : "Responsible Organization",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "module" : "Patient",
         "name" : "Universal Entity ID"
      },
      "(0008,0050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "module" : "General Study",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "entity" : "Study",
         "name" : "Accession Number"
      },
      "(0018,a001)" : {
         "name" : "Contributing Equipment Sequence",
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
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
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
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "RT Series",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0012,0050)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               }
            },
            "."
         ],
         "name" : "Clinical Trial Time Point ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "2"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "entity" : "Treatment Record",
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(0008,0012)" : {
         "name" : "Instance Creation Date",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0010,2298)" : {
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Responsible Person Role",
         "desc" : [
            "Relationship of Responsible Person to the patient.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.2"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ],
            "Required if Responsible Person is present and has a value."
         ],
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
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
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist",
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common",
         "name" : "Certificate of Signer"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0010,2180)" : {
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Occupation of the Patient.",
         "entity" : "Study",
         "name" : "Occupation"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Reason for Requested Procedure Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3"
      },
      "(0010,0030)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Birth date of the patient.",
         "name" : "Patient's Birth Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Date",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Series",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient"
      },
      "(0008,0105)" : {
         "name" : "Mapping Resource",
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
         "entity" : "Treatment Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0223)" : {
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "desc" : "Identifies fraction.",
         "name" : "Referenced Fraction Number"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Retrieve URI",
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
               "content" : [
                  "\n",
                  {
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
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
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,103f)" : {
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Series Description Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0012,0060)" : {
         "entity" : "Series",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Coordinating Center Name",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "2",
         "usage" : "U"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Algorithm",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "name" : "Institution Name",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study"
      },
      "(0038,0060)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "module" : "Patient Study",
         "name" : "Service Episode ID"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Series",
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
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "RT Series",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient"
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
      "Can't handle table_8.8-1 (in table_C.8-37 after (0008,103F))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9 after (0040,0008))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-9:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16 after (0040,0260))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-37:table_10-16:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
