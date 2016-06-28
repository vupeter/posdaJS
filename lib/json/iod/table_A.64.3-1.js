var data = {
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
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ],
   "tags" : {
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0012,0030)" : {
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "2",
         "usage" : "U",
         "name" : "Clinical Trial Site ID",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Referring Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0033)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0018,0015)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Body Part Examined",
         "req" : "3",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "template: Annex %n \u201c%t\u201d in PS3.16",
                     "targetdoc" : "PS3.16",
                     "targetptr" : "chapter_L"
                  }
               },
               " for Defined Terms"
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0008,0080)" : {
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Institution Name",
         "module" : "General Equipment",
         "entity" : "Equipment"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "req" : "1C",
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
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Concept Code Sequence"
      },
      "(0010,0010)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Patient's full name.",
         "req" : "2",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient's Name"
      },
      "(0008,0090)" : {
         "name" : "Referring Physician's Name",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Name of the patient's referring physician",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Text Value"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "module" : "General Study",
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
         "usage" : "M"
      },
      "(0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0012,0010)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "name" : "Clinical Trial Sponsor Name",
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
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
         "req" : "3"
      },
      "(0010,0040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Sex of the named patient.",
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "2",
         "name" : "Patient's Sex",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0028,0109)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Largest Pixel Value in Series",
         "usage" : "M",
         "desc" : "The maximum value of all images in this Series.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Address"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Digital Signature Purpose Code Sequence"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0253)" : {
         "name" : "Performed Procedure Step ID",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0008,001a)" : {
         "req" : "3",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Related General SOP Class UID"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "req" : "1C",
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
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Coding Scheme Registry"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "usage" : "M",
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "name" : "Encrypted Content",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.4.10.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,103f)" : {
         "usage" : "M",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Series Description Code Sequence"
      },
      "(0074,1020)[<0>](0074,1030)[<1>](0074,133a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "desc" : [
            "Offsets of field-defining edges in mm for the double exposure in the IEC BEAM LIMITING DEVICE coordinate system in the IEC order X1, X2, Y1, Y2. Negative values for X1 and Y1 indicate an enlarged field, negative values for X2 and Y2 indicate a reduced field.",
            "Required if Double Exposure Flag (0074,1034) is DOUBLE.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.29.4"
                  }
               },
               "."
            ]
         ],
         "req" : "2C",
         "name" : "Double Exposure Field Delta",
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction"
      },
      "(0074,1020)[<0>](0074,1022)" : {
         "desc" : [
            "Indication whether beam is to be verified, treated (delivered), or both.",
            {
               "list" : [
                  [
                     "VERIFY",
                     "Beam verification only"
                  ],
                  [
                     "TREAT",
                     "Beam treatment only"
                  ],
                  [
                     "VERIFY_AND_TREAT",
                     "Beam verification and treatment"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Beam Task Type"
      },
      "(0008,0014)" : {
         "name" : "Instance Creator UID",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "req" : "3"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "The type of distribution for which consent to distribute has been granted.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "name" : "Distribution Type"
      },
      "(0020,9172)[<0>](0008,1160)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Plan",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0012,0051)" : {
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "name" : "Clinical Trial Time Point Description",
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Person Identification Code Sequence",
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
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0028,0120)" : {
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Pixel Padding Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
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
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
               ],
               "el" : "note"
            }
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "UID",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0250)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Performed Procedure Step End Date",
         "usage" : "M",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3"
      },
      "(0008,0020)" : {
         "desc" : "Date the Study started.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study Date",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0020,000d)" : {
         "name" : "Study Instance UID",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "req" : "1",
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Address",
         "usage" : "M",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0038,0010)" : {
         "name" : "Admission ID",
         "module" : "Patient Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "req" : "3",
         "usage" : "U"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "entity" : "Plan",
         "module" : "Common Instance Reference",
         "name" : "Series Instance UID",
         "usage" : "C - Required if not conveyed by a Unified Procedure Step. May be present otherwise.",
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0010,0020)" : {
         "usage" : "M",
         "desc" : "Primary hospital identification number or code for the patient.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient ID"
      },
      "(0010,1002)" : {
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Other Patient IDs Sequence"
      },
      "(0008,1049)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Physician(s) of Record Identification Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "DateTime"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0074,1020)[<0>](0074,102c)" : {
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "desc" : [
            "Adjusted Table Top Pitch Angle for patient setup, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system in degrees. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.29.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2",
         "usage" : "M",
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Table Top Pitch Adjusted Angle"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "UID"
      },
      "(0010,2202)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Species Code Sequence",
         "req" : "1C",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "name" : "Contribution DateTime",
         "module" : "SOP Common",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0400,0500)" : {
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this sequence.",
            [
               "Required if application level confidentiality is needed and certain recipients are allowed to decrypt all or portions of the Encrypted Attributes Data Set. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.4.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Attributes Sequence",
         "entity" : "Plan",
         "module" : "SOP Common"
      },
      "(0074,1020)[<0>](300a,01d4)" : {
         "name" : "Table Top Longitudinal Setup Displacement",
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "desc" : "Longitudinal Displacement in the IEC TABLE TOP coordinate system in mm relative to initial Setup Position, i.e., longitudinal offset between patient positioning performed using setup and treatment position.",
         "req" : "2"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Floating Point Value",
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0100,0410)" : {
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "SOP Instance Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1020)" : {
         "usage" : "U",
         "desc" : "Length or size of the Patient, in meters.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Patient's Size"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced Frame Number",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0018,1030)" : {
         "usage" : "M",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "name" : "Protocol Name",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,2298)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Responsible Person Role",
         "usage" : "M",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Scheduled Procedure Step Description"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "usage" : "M",
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : "Plan",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Person's Address"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Describes the purpose for which the related equipment is being reference.",
            "Only a single Item shall be included in this sequence.",
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
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1",
         "usage" : "C - Required if not conveyed by a Unified Procedure Step. May be present otherwise.",
         "name" : "Referenced Instance Sequence",
         "module" : "Common Instance Reference",
         "entity" : "Plan"
      },
      "(0010,1000)" : {
         "name" : "Other Patient IDs",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "usage" : "M",
         "desc" : "Instance UID of Related Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Series Instance UID"
      },
      "(0074,1020)[<0>](0074,1030)[<1>](300c,0008)" : {
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Start Cumulative Meterset Weight",
         "desc" : "Cumulative Meterset Weight within current Beam at which image acquisition will start. Required if Verification Image Timing (0074,1032) is DURING_BEAM.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "DateTime"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0074,1020)[<0>](300a,01d2)" : {
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Table Top Vertical Setup Displacement",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "desc" : "Vertical Displacement in the IEC TABLE TOP coordinate system in mm relative to initial Setup Position, i.e., vertical offset between patient positioning performed using setup and treatment position.",
         "req" : "2",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
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
         "req" : "3",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1020)" : {
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Software Versions",
         "module" : "SOP Common",
         "entity" : "Plan"
      },
      "(0074,1020)[<0>](0074,0121)" : {
         "req" : "1C",
         "desc" : [
            "Meterset within Beam referenced by Referenced Beam Number (300C,0006) at which treatment delivery ends, in units specified by Primary Dosimeter Unit (300A,00B3).",
            "Required if Delivery Type (300A,00CE) is CONTINUATION."
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M",
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Continuation End Meterset"
      },
      "(0008,1200)" : {
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "module" : "Common Instance Reference",
         "entity" : "Plan",
         "req" : "1C",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "C - Required if not conveyed by a Unified Procedure Step. May be present otherwise."
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Address"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0010,0030)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth date of the patient.",
         "req" : "2",
         "usage" : "M",
         "name" : "Patient's Birth Date",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0040,1012)" : {
         "name" : "Reason For Performed Procedure Code Sequence",
         "module" : "General Study",
         "entity" : "Study",
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
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0074,1020)[<0>](0074,0120)" : {
         "name" : "Continuation Start Meterset",
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Meterset within Beam referenced by Referenced Beam Number (300C,0006) at which treatment delivery starts, in units specified by Primary Dosimeter Unit (300A,00B3).",
            "Required if Delivery Type (300A,00CE) is CONTINUATION."
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1101)" : {
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
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Device Serial Number",
         "usage" : "M",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "req" : "2",
         "usage" : "M",
         "name" : "Source of Previous Values",
         "module" : "SOP Common",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Person Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C"
      },
      "(0074,1020)[<0>](0074,1030)[<1>](0074,1032)" : {
         "name" : "Verification Image Timing",
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "usage" : "M",
         "desc" : [
            "Indicates the temporal relationship of the verification image with respect to the current treatment beam delivery. Value shall be DURING_BEAM for Beams with a Beam Task Type (0074,1022) of VERIFY.",
            {
               "list" : [
                  [
                     "BEFORE_BEAM",
                     null
                  ],
                  [
                     "DURING_BEAM",
                     null
                  ],
                  [
                     "AFTER_BEAM",
                     null
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "req" : "1"
      },
      "(0018,5100)" : {
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
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "2C",
         "usage" : "M",
         "name" : "Patient Position",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "module" : "General Series",
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,1060)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Name of Physician(s) Reading Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Names of the physician(s) reading the Study.",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Coding Scheme Responsible Organization"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Date",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0012,0040)" : {
         "usage" : "U",
         "desc" : [
            "The assigned identifier for the clinical trial subject. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.6"
               },
               "el" : "xref"
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "entity" : "Plan",
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
         "usage" : "M"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0074,1020)[<0>](300a,00ce)" : {
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Treatment Delivery Type",
         "desc" : [
            "Delivery Type of treatment.",
            {
               "list" : [
                  [
                     "TREATMENT",
                     "normal patient treatment"
                  ],
                  [
                     "CONTINUATION",
                     "continuation of interrupted treatment"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M"
      },
      "(0040,0244)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step started.",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1021)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "name" : "Patient's Size Code Sequence",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0010,21b0)" : {
         "usage" : "U",
         "desc" : "Additional information about the Patient's medical history.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Additional Patient History",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1030)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Patient's Weight",
         "req" : "3",
         "desc" : "Weight of the Patient, in kilograms.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
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
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Certified Timestamp Type",
         "module" : "SOP Common",
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced Frame Number"
      },
      "(0074,1020)[<0>](0074,1030)[<1>](3002,000d)" : {
         "desc" : "Position in (x,y,z) coordinates in mm of origin of the IEC X-RAY IMAGE RECEPTOR System in the IEC GANTRY coordinate system.",
         "req" : "2",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M",
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "X-Ray Image Receptor Translation"
      },
      "(0008,1111)" : {
         "usage" : "M",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Referenced Performed Procedure Step Sequence",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Operators' Name"
      },
      "(0074,1020)[<0>](0074,1324)" : {
         "desc" : [
            "Identifies required ordering of beam delivery, monotonically increasing by 1, starting from 1. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.29.5"
               }
            },
            "."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M",
         "name" : "Beam Order Index",
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Institutional Department Name"
      },
      "(0008,1250)" : {
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
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
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
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
                                 "el" : "para",
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
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
               ]
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Related Series Sequence",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0254)" : {
         "name" : "Performed Procedure Step Description",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Local Namespace Entity ID"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1",
         "usage" : "C - Required if not conveyed by a Unified Procedure Step. May be present otherwise.",
         "module" : "Common Instance Reference",
         "entity" : "Plan",
         "name" : "Study Instance UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Study Instance UID"
      },
      "(0400,0561)" : {
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Original Attributes Sequence",
         "module" : "SOP Common",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Rational Numerator Value"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "name" : "Reason for the Requested Procedure",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Reason for requesting this procedure.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0074,1020)[<0>](0074,1030)[<1>](0074,1338)" : {
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Double Exposure Meterset",
         "desc" : [
            "If this field is present, an additional exposure with the indicated Meterset is requested.",
            "Required if Double Exposure Flag (0074,1034) is DOUBLE."
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "req" : "2C",
         "usage" : "M"
      },
      "(0008,1062)" : {
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0074,1020)[<0>](0074,1026)" : {
         "desc" : [
            "Adjusted Table Top Vertical position in the IEC TABLE TOP coordinate system in mm for patient setup. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.29.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M",
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Table Top Vertical Adjusted Position"
      },
      "(0038,0064)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Issuer of Service Episode ID Sequence",
         "usage" : "U",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3"
      },
      "(0074,1020)[<0>](300c,0022)" : {
         "req" : "1C",
         "desc" : [
            "Indicates which fraction group of the referenced plan is to be treated in the treatment session. Only one Fraction Group shall be specified per Delivery Instruction SOP Instance.",
            "Required if the referenced plan has more than one Fraction Group Sequence (300A,0070) item."
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M",
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Referenced Fraction Group Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
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
         "req" : "3",
         "name" : "Content Item Modifier Sequence",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0012,0081)" : {
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "usage" : "M",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "name" : "Person Name",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0074,1020)[<0>](0074,1030)[<1>](0074,1034)" : {
         "name" : "Double Exposure Flag",
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "desc" : [
            "Indicates whether the current verification image is a single or double exposure.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SINGLE",
                     "single exposure"
                  ],
                  [
                     "DOUBLE",
                     "double exposure"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M"
      },
      "(0100,0426)" : {
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Authorization Equipment Certification Number",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,1201)" : {
         "name" : "Time of Last Calibration",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
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
            "table_C.7-8"
         ]
      },
      "(0010,1010)" : {
         "name" : "Patient's Age",
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "3",
         "desc" : "Age of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C"
      },
      "(0010,2201)" : {
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Species Description"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Numeric Value",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0012,0063)" : {
         "name" : "De-identification Method",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
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
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "usage" : "C - Required if not conveyed by a Unified Procedure Step. May be present otherwise.",
         "module" : "Common Instance Reference",
         "entity" : "Plan",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "usage" : "M",
         "desc" : [
            "The type of identifier in this item.",
            {
               "type" : "variablelist",
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
               ]
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Type of Patient ID"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
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
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C"
      },
      "(0074,1020)[<0>](0074,1025)" : {
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "name" : "Autosequence Flag",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "desc" : [
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "YES",
                     "The current beam shall be automatically treated following the preceding beam as defined by the Beam Order Index (0074,1324)."
                  ],
                  [
                     "NO",
                     "The current beam shall not be auto-sequenced."
                  ]
               ]
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.29.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "3"
      },
      "(0012,0083)" : {
         "name" : "Consent for Clinical Trial Use Sequence",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "req" : "3",
         "usage" : "U"
      },
      "(0100,0424)" : {
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "SOP Authorization Comment"
      },
      "(0074,1020)[<0>](300a,00b3)" : {
         "desc" : [
            "Measurement unit of machine dosimeter.",
            {
               "list" : [
                  [
                     "MU",
                     "Monitor Unit"
                  ],
                  [
                     "MINUTE",
                     "minute"
                  ],
                  [
                     "NP",
                     "Number of Particles"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "This value shall be the same as in the referenced RT Plan. It applies only to the Continuation Start Meterset (0074,0120) and Continuation End Meterset (0074,0121).",
            "Required if Delivery Type (300A,00CE) is CONTINUATION."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M",
         "name" : "Primary Dosimeter Unit",
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan"
      },
      "(0074,1020)[<0>](0074,1030)[<1>](0074,1036)" : {
         "name" : "Double Exposure Ordering",
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "desc" : [
            "Indicates the ordering of the open (double exposure) field with respect to the primary (collimated) field in a double exposure.",
            {
               "list" : [
                  [
                     "OPEN_FIRST",
                     "Open field first"
                  ],
                  [
                     "OPEN_SECOND",
                     "Open field second"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            "Required if Double Exposure Flag (0074,1034) is DOUBLE."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Text Value",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "usage" : "M",
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
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Scheduled Procedure Step ID"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0070)" : {
         "usage" : "M",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Manufacturer",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(0074,1020)[<0>](300c,0006)" : {
         "usage" : "M",
         "desc" : "Uniquely identifies the Beam that is specified by Beam Number (300A,00C0) within Beam Sequence (300A,00B0) in RT Beams Module of referenced RT Plan or RT Ion Plan.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "name" : "Referenced Beam Number",
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction"
      },
      "(0008,001b)" : {
         "usage" : "M",
         "req" : "3",
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
         "name" : "Original Specialized SOP Class UID",
         "entity" : "Plan",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "usage" : "M",
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Requested Procedure ID"
      },
      "(0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0012,0062)" : {
         "name" : "Patient Identity Removed",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "usage" : "M",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Protocol Context Sequence",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "name" : "Reason for Requested Procedure Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0074,1020)[<0>](0074,102d)" : {
         "name" : "Table Top Roll Adjusted Angle",
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "usage" : "M",
         "desc" : [
            "Adjusted Table Top Roll Angle for patient setup, i.e., the rotation of the IEC TABLE TOP coordinate system about the Y-axis of the IEC TABLE TOP coordinate system in degrees. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.29.2"
               }
            },
            "."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ]
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Universal Entity ID"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M"
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
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Concept Name Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "req" : "3",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Scheduled Protocol Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "name" : "UID",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0280)" : {
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Comments on the Performed Procedure Step"
      },
      "(0010,2210)" : {
         "desc" : [
            "The anatomical orientation type used in instances generated by this equipment.",
            {
               "list" : [
                  [
                     "BIPED",
                     null
                  ],
                  [
                     "QUADRUPED",
                     null
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            [
               "Required if the patient is an animal and the anatomical frame of reference is not bipedal. May be present otherwise. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.1"
                  },
                  "el" : "xref"
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
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Anatomical Orientation Type",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0018,1200)" : {
         "name" : "Date of Last Calibration",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
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
            "table_C.7-8"
         ],
         "req" : "3"
      },
      "(0038,0060)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Service Episode ID",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Identifier Type Code"
      },
      "(0018,1020)" : {
         "name" : "Software Versions",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : [
            "Manufacturer's designation of software version of the equipment that produced the composite instances. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.5.1.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3"
      },
      "(0074,1020)[<0>](0074,1028)" : {
         "name" : "Table Top Lateral Adjusted Position",
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "usage" : "M",
         "desc" : [
            "Adjusted Table Top Lateral position in the IEC TABLE TOP coordinate system in mm for patient setup. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.29.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "req" : "2"
      },
      "(0010,0200)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Quality Control Subject"
      },
      "(0008,1048)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
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
         "req" : "3",
         "name" : "Physician(s) of Record",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,0053)" : {
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Query/Retrieve View",
         "usage" : "M",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "entity" : "Series",
         "module" : "General Series",
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
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Identifier Type Code)."
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
         "usage" : "M"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "usage" : "M",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Coding Scheme External ID"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
               "type" : "variablelist",
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
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "name" : "Consent for Distribution Flag"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "req" : "3",
         "usage" : "M",
         "name" : "Retrieve URI",
         "module" : "SOP Common",
         "entity" : "Plan"
      },
      "(0008,0201)" : {
         "req" : "3",
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
                     "content" : [
                        "Local Time = 3.00 a.m."
                     ],
                     "el" : "para"
                  },
                  "\n                  ",
                  {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Timezone Offset From UTC"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Spatial Resolution"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person Identification Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "name" : "Date",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Numeric Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Rational Numerator Value"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Requested Procedure Description",
         "usage" : "M",
         "req" : "3",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Coding Scheme Designator",
         "usage" : "M",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Value Type"
      },
      "(0018,1008)" : {
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Gantry ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Identifier of the gantry or positioner.",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Date",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0020,0011)" : {
         "usage" : "M",
         "desc" : "A number that identifies this Series.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Number",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0074,1020)[<0>](0074,1027)" : {
         "usage" : "M",
         "desc" : [
            "Adjusted Table Top Longitudinal position in the IEC TABLE TOP coordinate system in mm for patient setup. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.29.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "req" : "2",
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "name" : "Table Top Longitudinal Adjusted Position"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "usage" : "C - Required if not conveyed by a Unified Procedure Step. May be present otherwise.",
         "name" : "Referenced Series Sequence",
         "module" : "Common Instance Reference",
         "entity" : "Plan"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "name" : "Patient ID",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1",
         "desc" : "An identification number or code used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "C - Required if not conveyed by a Unified Procedure Step. May be present otherwise.",
         "name" : "Referenced Instance Sequence",
         "module" : "Common Instance Reference",
         "entity" : "Plan"
      },
      "(0018,1000)" : {
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Device Serial Number",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0008,1090)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "req" : "3",
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Manufacturer's Model Name"
      },
      "(0040,a390)" : {
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "HL7 Structured Document Reference Sequence",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Floating Point Value",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1080)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "req" : "3",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "usage" : "M",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "name" : "Breed Registry Code Sequence",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "usage" : "M",
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
         ],
         "name" : "Digital Signature DateTime",
         "entity" : "Plan",
         "module" : "SOP Common"
      },
      "(0008,1040)" : {
         "name" : "Institutional Department Name",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "name" : "Value Type",
         "module" : "General Series",
         "entity" : "Series",
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
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Institution Code Sequence"
      },
      "(0040,0275)[<0>](0008,1110)" : {
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
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced Study Sequence"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "The coding scheme full common name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Coding Scheme Name"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Institution Name"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
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
         "req" : "1C"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "entity" : "Plan",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID",
         "usage" : "C - Required if not conveyed by a Unified Procedure Step. May be present otherwise.",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0010,2203)" : {
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Patient's Sex Neutered",
         "usage" : "U",
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
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
               ],
               "title" : "Enumerated Values:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Time"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "name" : "Date of Last Calibration",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
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
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0074,1020)[<0>](0074,1030)[<1>](0074,1040)[<2>](0008,1155)" : {
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.29-1",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "DateTime"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
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
                     ]
                  },
                  "\n              "
               ]
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "entity" : "Patient",
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
         "req" : "3"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "entity" : "Plan",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID",
         "usage" : "C - Required if not conveyed by a Unified Procedure Step. May be present otherwise.",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0010,2294)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Breed Registration Sequence",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0012,0071)" : {
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series ID",
         "usage" : "U",
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
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
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0008,1115)" : {
         "usage" : "C - Required if not conveyed by a Unified Procedure Step. May be present otherwise.",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1C",
         "entity" : "Plan",
         "module" : "Common Instance Reference",
         "name" : "Referenced Series Sequence"
      },
      "(0074,1020)[<0>](3008,0022)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "desc" : [
            "The index of the fraction that is to be delivered or completed in this session. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.29.1"
               }
            },
            "."
         ],
         "req" : "1",
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "name" : "Current Fraction Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced Segment Number"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Protocol Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Date",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,2293)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Breed Code Sequence",
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
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0012,0031)" : {
         "name" : "Clinical Trial Site Name",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "2",
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
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
         "usage" : "U"
      },
      "(0010,2180)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Occupation of the Patient.",
         "req" : "3",
         "usage" : "U",
         "name" : "Occupation",
         "module" : "Patient Study",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,103e)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Description of the Series",
         "req" : "3",
         "name" : "Series Description",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0040,0275)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Request Attributes Sequence",
         "req" : "3",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Floating Point Value",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0010,0032)" : {
         "req" : "3",
         "desc" : "Birth time of the Patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient's Birth Time",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0074,1020)[<0>](300a,01d6)" : {
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Table Top Lateral Setup Displacement",
         "desc" : "Lateral Displacement in the IEC TABLE TOP coordinate system in mm relative to initial Setup Position, i.e., lateral offset between patient positioning performed using setup and treatment position.",
         "req" : "2",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M"
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Other Patient Names",
         "usage" : "M",
         "desc" : "Other names used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Person's Address",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,0031)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "Time the Series started.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Time",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Floating Point Value"
      },
      "(4ffe,0001)" : {
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
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
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Data Elements Signed"
      },
      "(0020,000e)" : {
         "desc" : "Unique identifier of the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Series Instance UID",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "module" : "SOP Common",
         "entity" : "Plan",
         "req" : "1",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0074,1020)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Specification of beams to be delivered and/or verified.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "name" : "Beam Task Sequence"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "usage" : "U",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "module" : "Patient Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
         "entity" : "Patient",
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
         "usage" : "M"
      },
      "(0008,1120)" : {
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Referenced Patient Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "usage" : "M",
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
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0012,0060)" : {
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
         "req" : "2",
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "name" : "Clinical Trial Coordinating Center Name"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "name" : "Certified Timestamp",
         "module" : "SOP Common",
         "entity" : "Plan",
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
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "usage" : "M",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1072)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0032,1034)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Requesting Service Code Sequence",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3"
      },
      "(0020,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2",
         "name" : "Study ID",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Name"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0010,2292)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "req" : "2C",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Breed Description"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Person Name",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,0021)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Date the Series started.",
         "req" : "3",
         "usage" : "M",
         "name" : "Series Date",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0012,0020)" : {
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
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "name" : "Person Name",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "usage" : "M",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Attribute Modification DateTime"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person's Address",
         "req" : "3",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0008,1070)" : {
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Operators' Name",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1032)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Procedure Code Sequence"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "entity" : "Plan",
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "C - Required if not conveyed by a Unified Procedure Step. May be present otherwise."
      },
      "(0100,0420)" : {
         "usage" : "M",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "SOP Authorization DateTime"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Numeric Value",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0074,1020)[<0>](0074,102a)" : {
         "usage" : "M",
         "req" : "2",
         "desc" : [
            "Adjusted Patient Support angle for patient setup, i.e., orientation of the IEC PATIENT SUPPORT coordinate system with respect to the IEC FIXED REFERENCE coordinate system in degrees. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.29.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "name" : "Patient Support Adjusted Angle"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Accession Number",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0020,0013)" : {
         "name" : "Instance Number",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "A number that identifies this Composite object instance.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
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
         "req" : "1C",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0012,0064)" : {
         "req" : "1C",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "De-identification Method Code Sequence",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0010,2160)" : {
         "name" : "Ethnic Group",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "desc" : "Ethnic group or race of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0074,1020)[<0>](0074,1030)[<1>](3002,0032)" : {
         "req" : "2C",
         "desc" : [
            "Treatment machine Meterset duration over which image is to be acquired, specified in Monitor units (MU) or minutes as defined by Primary Dosimeter Unit (300A,00B3) specified in the Referenced RT Plan Sequence (300C,0002).",
            "Required if Verification Image Timing (0074,1032) is BEFORE_BEAM or AFTER_BEAM.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.29.3"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M",
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Meterset Exposure"
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.29-1",
            "table_10-11"
         ]
      },
      "(0008,0016)" : {
         "usage" : "M",
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "SOP Class UID"
      },
      "(0074,1020)[<0>](0074,1030)" : {
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Delivery Verification Image Sequence",
         "desc" : [
            "Beam verification images to be acquired for current beam.",
            "Required if Beam Task Type (0074,1022) is VERIFY or VERIFY_AND_TREAT.",
            "Zero or one Item shall be included in this sequence if Beam Task Type (0074,1022) is VERIFY. Zero or more Items shall be included in this sequence if Beam Task Type (0074,1022) is VERIFY_AND_TREAT."
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "req" : "2C",
         "usage" : "M"
      },
      "(0028,0108)" : {
         "name" : "Smallest Pixel Value in Series",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : "The minimum value of all images in this Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3"
      },
      "(0008,1110)" : {
         "module" : "General Study",
         "entity" : "Study",
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
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "entity" : "Series",
         "module" : "General Series",
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
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,0303)" : {
         "req" : "3",
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
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Longitudinal Temporal Information Modified"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "usage" : "M",
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "name" : "Time",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0012,0072)" : {
         "usage" : "U",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series Description",
         "entity" : "Series",
         "module" : "Clinical Trial Series"
      },
      "(0008,1010)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "req" : "3",
         "usage" : "M",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Station Name"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "name" : "Modifying System",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1"
      },
      "(0010,4000)" : {
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Comments",
         "desc" : "User-defined additional information about the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0018)" : {
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
         "req" : "1",
         "name" : "SOP Instance UID",
         "entity" : "Plan",
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
                     "el" : "para"
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
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "entity" : "Plan",
         "module" : "SOP Common",
         "usage" : "M",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "req" : "3",
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0038,0014)" : {
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Issuer of Admission ID Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "U"
      },
      "(0020,0060)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Laterality",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) are not sent.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Identification number of an animal within the registry.",
         "req" : "1",
         "usage" : "M",
         "name" : "Breed Registration Number",
         "module" : "Patient",
         "entity" : "Patient"
      },
      "(0008,1084)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Code Sequence"
      },
      "(0018,1050)" : {
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Spatial Resolution"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Reason for the Attribute Modification",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "1",
         "usage" : "M"
      },
      "(0074,1020)[<0>](0074,1030)[<1>](0074,1040)[<2>](0008,1150)" : {
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8.8.29-1",
            "table_10-11"
         ],
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
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
         "req" : "1C",
         "usage" : "M"
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8.8.29-1",
            "table_10-11"
         ],
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "name" : "Referenced SOP Instance UID"
      },
      "(0038,0062)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the type of service episode.",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Service Episode Description"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "entity" : "Plan",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "module" : "SOP Common",
         "entity" : "Plan",
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
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person's Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "req" : "3"
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
         "req" : "1C",
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Time"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Time",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "entity" : "Study"
      },
      "(0008,1030)" : {
         "usage" : "M",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Description"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "usage" : "M",
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
         ],
         "name" : "Certificate of Signer",
         "entity" : "Plan",
         "module" : "SOP Common"
      },
      "(0074,1020)[<0>](0074,1030)[<1>](0074,1040)" : {
         "name" : "Related Reference RT Image Sequence",
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "usage" : "M",
         "desc" : [
            "Uniquely identifies Reference Images to which planned verification image is related. All items in this sequence shall be RT Image SOP Instances.",
            "One or more items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "req" : "3"
      },
      "(0008,1050)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Performing Physician's Name",
         "usage" : "M",
         "req" : "3",
         "desc" : "Name of the physician(s) administering the Series.",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "module" : "General Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "name" : "UID",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0008,1052)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Performing Physician Identification Sequence",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,0013)" : {
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Instance Creation Time"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0012,0042)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "req" : "1C",
         "usage" : "U"
      },
      "(0018,a001)" : {
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
                     "linkend" : "sect_C.12.1.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Contributing Equipment Sequence",
         "module" : "SOP Common",
         "entity" : "Plan"
      },
      "(0008,0050)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Accession Number",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Institution Address",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Institution Code Sequence"
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
                  "linkend" : "sect_C.7.5.1.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Time of Last Calibration"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Requested Procedure Code Sequence",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "module" : "General Series",
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,2299)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Responsible Organization"
      },
      "(0040,0245)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "desc" : "Time on which the Performed Procedure Step started.",
         "req" : "3",
         "name" : "Performed Procedure Step Start Time",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "module" : "SOP Common",
         "entity" : "Plan"
      },
      "(0074,1020)[<0>](0074,1030)[<1>](300c,0009)" : {
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "End Cumulative Meterset Weight",
         "desc" : [
            "Cumulative Meterset Weight within current Beam at which image acquisition will end.",
            "Required if Verification Image Timing (0074,1032) is DURING_BEAM."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "req" : "3",
         "usage" : "M",
         "name" : "Coding Scheme Version",
         "module" : "SOP Common",
         "entity" : "Plan"
      },
      "(0012,0021)" : {
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
         "req" : "2",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Name"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Rational Denominator Value"
      },
      "(0008,0012)" : {
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Instance Creation Date"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "usage" : "C - Required if not conveyed by a Unified Procedure Step. May be present otherwise.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Plan",
         "module" : "Common Instance Reference"
      },
      "(300c,0002)" : {
         "entity" : "Plan",
         "module" : "RT Beams Delivery Instruction",
         "name" : "Referenced RT Plan Sequence",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            [
               "Reference to a single RT Plan or RT Ion Plan SOP Instance (whose UID is also supplied in the Input Information Sequence - see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4",
                     "targetdoc" : "PS3.4"
                  },
                  "el" : "olink"
               },
               ") containing all the Beams and the Fraction Group referenced in this SOP Instance."
            ],
            "Only a single item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "usage" : "M",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "module" : "General Series"
      },
      "(0012,0082)" : {
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Contribution Description"
      },
      "(0008,0015)" : {
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Instance Coercion DateTime",
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
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Universal Entity ID Type"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0030)" : {
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Study Time",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Time the Study started.",
         "req" : "2",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "usage" : "M",
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
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Signature",
         "entity" : "Plan",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "MAC Algorithm"
      },
      "(0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0074,1020)[<0>](0074,102b)" : {
         "module" : "RT Beams Delivery Instruction",
         "entity" : "Plan",
         "name" : "Table Top Eccentric Adjusted Angle",
         "req" : "2",
         "desc" : [
            "Adjusted Table Top (non-isocentric) angle for patient setup, i.e., orientation of the IEC TABLE TOP ECCENTRIC coordinate system with respect to the IEC PATIENT SUPPORT system in degrees. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.29.2"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8.8.29-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "req" : "3"
      },
      "(0012,0050)" : {
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Time Point ID",
         "usage" : "U",
         "req" : "2",
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
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "usage" : "M",
         "req" : "1C",
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
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "module" : "General Series",
         "entity" : "Series",
         "req" : "1",
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
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(fffa,fffa)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Digital Signatures Sequence",
         "module" : "SOP Common",
         "entity" : "Plan"
      },
      "(0010,2297)" : {
         "name" : "Responsible Person",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0060)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
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
         "req" : "1",
         "usage" : "M",
         "name" : "Modality",
         "module" : "General Series",
         "entity" : "Series"
      },
      "(0040,0251)" : {
         "entity" : "Series",
         "module" : "General Series",
         "name" : "Performed Procedure Step End Time",
         "usage" : "M",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "entity" : "Plan",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M"
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Specific Character Set",
         "module" : "SOP Common",
         "entity" : "Plan"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "req" : "1",
         "entity" : "Plan",
         "module" : "SOP Common",
         "name" : "Encrypted Content Transfer Syntax UID"
      }
   }
}