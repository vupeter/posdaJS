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
      "Can't handle table_8.8-1 (in table_C.8-37 after (0008,103F))",
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
      "Can't handle table_8.8-1 (in table_C.8-41 after (0008,9215))",
      "Can't handle table_8.8-1 (in table_C.8-44 after (3006,0086))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ],
   "tags" : {
      "(3006,0080)[<0>](3006,0084)" : {
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : "Uniquely identifies the referenced ROI described in the Structure Set ROI Sequence (3006,0020).",
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Referenced ROI Number",
         "module" : "RT ROI Observations"
      },
      "(3006,0020)[<0>](3006,002c)" : {
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "module" : "Structure Set",
         "name" : "ROI Volume",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : "Volume of ROI (cubic centimeters)."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "name" : "Protocol Context Sequence",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0038,0064)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Issuer of Service Episode ID Sequence",
         "module" : "Patient Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Referenced Segment Number"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Requested Procedure Code Sequence",
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0010,4000)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Patient Comments",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "User-defined additional information about the patient."
      },
      "(0010,2202)" : {
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient Species Code Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ]
      },
      "(0010,1020)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Patient's Size",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters."
      },
      "(0008,1110)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
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
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Study Sequence",
         "module" : "General Study"
      },
      "(3006,0018)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-41",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "Structure Set",
         "name" : "Referenced SOP Instance UID"
      },
      "(0010,0040)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Sex of the named patient.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "usage" : "M",
         "req" : "2",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient's Sex"
      },
      "(0038,0014)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Issuer of Admission ID Sequence",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "name" : "Numeric Value",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "RT Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               }
            },
            "."
         ],
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Clinical Trial Time Point Description",
         "module" : "Clinical Trial Study"
      },
      "(3006,0010)[<0>](3006,0012)" : {
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "RT Referenced Study Sequence",
         "module" : "Structure Set",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : [
            "Sequence of Studies containing series to be referenced.",
            "One or more items are permitted in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.5.4"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0038,0060)" : {
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode ID",
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0010,1001)" : {
         "name" : "Other Patient Names",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "UID",
         "module" : "RT Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,0070)" : {
         "module" : "General Equipment",
         "name" : "Manufacturer",
         "usage" : "M",
         "req" : "2",
         "entity" : "Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "req" : "1",
         "usage" : "U",
         "entity" : "Structure Set"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series"
      },
      "(0010,2294)" : {
         "module" : "Patient",
         "name" : "Breed Registration Sequence",
         "entity" : "Patient",
         "req" : "2C",
         "usage" : "M",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Source of Previous Values",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "2",
         "entity" : "Structure Set"
      },
      "(0010,2292)" : {
         "module" : "Patient",
         "name" : "Patient Breed Description",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1120)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Referenced Patient Sequence"
      },
      "(0040,0244)" : {
         "name" : "Performed Procedure Step Start Date",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "desc" : "Date on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Structure Set",
         "module" : "SOP Common",
         "name" : "Contribution Description"
      },
      "(0010,0024)" : {
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "module" : "RT Series",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "General Study",
         "req" : "1",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0020,0010)" : {
         "usage" : "M",
         "req" : "2",
         "entity" : "Study",
         "name" : "Study ID",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "User or equipment generated Study identifier."
      },
      "(3006,0020)[<0>](3006,0026)" : {
         "req" : "2",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "Structure Set",
         "name" : "ROI Name",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : "User-defined name for ROI."
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "name" : "Contribution DateTime",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "module" : "RT Series",
         "name" : "Numeric Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0012,0030)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "req" : "2",
         "usage" : "U",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site ID"
      },
      "(0018,1000)" : {
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Device Serial Number",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         ]
      },
      "(0008,0081)" : {
         "name" : "Institution Address",
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme External ID",
         "req" : "2C",
         "usage" : "M",
         "entity" : "Structure Set",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Data Elements Signed",
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
         ]
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "module" : "RT Series"
      },
      "(0018,a001)" : {
         "module" : "SOP Common",
         "name" : "Contributing Equipment Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Concept Code Sequence"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set",
         "module" : "SOP Common",
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0008,103e)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : "Description of the series.",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Series Description",
         "module" : "RT Series"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "req" : "1C",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Distribution Type",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "The type of distribution for which consent to distribute has been granted.",
            {
               "title" : "Defined Terms:",
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
               ]
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
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0012,0072)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "U",
         "name" : "Clinical Trial Series Description",
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Coding Scheme Responsible Organization",
         "module" : "SOP Common"
      },
      "(0100,0426)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Structure Set",
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "module" : "RT Series",
         "name" : "Text Value",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
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
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "module" : "SOP Common",
         "name" : "Certificate Type",
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "module" : "RT Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0012,0010)" : {
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
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Sponsor Name",
         "module" : "Clinical Trial Subject"
      },
      "(0008,0016)" : {
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Class UID",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set"
      },
      "(3006,0010)" : {
         "desc" : [
            "Sequence describing Frames of Reference in which the ROIs are defined. One or more items are permitted in this sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.5.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set",
         "name" : "Referenced Frame of Reference Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Scheduled Procedure Step ID",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ]
            }
         ]
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
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "module" : "SOP Common"
      },
      "(3006,0020)" : {
         "desc" : [
            "ROIs for current Structure Set.",
            "One or more items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-41"
         ],
         "name" : "Structure Set ROI Sequence",
         "module" : "Structure Set",
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Rational Numerator Value"
      },
      "(0038,0062)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Service Episode Description",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the type of service episode."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(3006,0080)[<0>](3006,00a6)" : {
         "desc" : "Name of person performing the interpretation.",
         "mod_tables" : [
            "table_C.8-44"
         ],
         "module" : "RT ROI Observations",
         "name" : "ROI Interpreter",
         "entity" : "Structure Set",
         "req" : "2",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Structure Set",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center."
      },
      "(0010,1002)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Other Patient IDs Sequence"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "UID",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(3006,0039)" : {
         "desc" : [
            "Sequence of Contour Sequences defining ROIs.",
            "One or more items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-42"
         ],
         "module" : "ROI Contour",
         "name" : "ROI Contour Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "RT Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(4ffe,0001)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Structure Set",
         "name" : "MAC Parameters Sequence",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "U",
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "entity" : "Study",
         "req" : "1",
         "usage" : "U",
         "name" : "Consent for Distribution Flag",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
                  "attrs" : {
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Reason for the Requested Procedure",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : "Reason for requesting this procedure."
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "module" : "SOP Common",
         "name" : "Digital Signature Purpose Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "entity" : "Patient",
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
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "module" : "RT Series",
         "name" : "Date",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0016)" : {
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "name" : "Contour Image Sequence",
         "module" : "ROI Contour",
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : [
            "Sequence of images containing the contour.",
            "One or more items are permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence",
         "req" : "1",
         "usage" : "U",
         "entity" : "Structure Set",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "name" : "Concept Code Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0020,000e)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : "Unique identifier of the series.",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Series Instance UID"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
         "name" : "Date of Last Calibration",
         "entity" : "Structure Set",
         "req" : "3",
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
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set",
         "name" : "MAC Algorithm",
         "module" : "SOP Common"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0016)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-42",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "ROI Contour",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0275)" : {
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Request Attributes Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Station Name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance."
      },
      "(300e,0002)" : {
         "desc" : [
            "Approval status at the time the SOP Instance was created.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "APPROVED",
                     "Reviewer recorded that object met an implied criterion"
                  ],
                  [
                     "UNAPPROVED",
                     "No review of object has been recorded"
                  ],
                  [
                     "REJECTED",
                     "Reviewer recorded that object failed to meet an implied criterion"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-52"
         ],
         "name" : "Approval Status",
         "module" : "Approval",
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
         ]
      },
      "(3006,0080)[<0>](3006,00b0)[<1>](3006,00b6)" : {
         "entity" : "Structure Set",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT ROI Observations",
         "name" : "ROI Elemental Composition Sequence",
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : [
            "The elemental composition of the ROI and the atomic mass fraction of the elements in the ROI.",
            "Required if ROI Physical Property (3006,00B2) equals ELEM_FRACTION.",
            "One or more items shall be included in this sequence."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set",
         "name" : "Person Identification Code Sequence",
         "module" : "SOP Common",
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
      "(0038,0014)[<0>](0040,0033)" : {
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
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
      "(0040,0275)[<0>](0040,0007)" : {
         "module" : "RT Series",
         "name" : "Scheduled Procedure Step Description",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
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
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
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
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
                     },
                     "el" : "orderedlist"
                  },
                  "\n                "
               ]
            },
            "Time earlier than UTC is expressed as a negative offset.",
            {
               "el" : "note",
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
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Timezone Offset From UTC",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "entity" : "Structure Set",
         "usage" : "M",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1021)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Patient's Size Code Sequence"
      },
      "(0008,0012)" : {
         "name" : "Instance Creation Date",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,2160)" : {
         "module" : "Patient",
         "name" : "Ethnic Group",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.12.1.1.6"
                  }
               },
               "."
            ],
            "Required if unencapsulated HL7 Structured Documents are referenced within the Instance. Every such document so referenced is required to have a corresponding Item in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "HL7 Structured Document Reference Sequence",
         "module" : "SOP Common",
         "entity" : "Structure Set",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0015)" : {
         "module" : "SOP Common",
         "name" : "Instance Coercion DateTime",
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
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
         ]
      },
      "(0008,0021)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Series Date",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : "Date the Series started."
      },
      "(0010,21b0)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Additional information about the Patient's medical history.",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Additional Patient History",
         "module" : "Patient Study"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "entity" : "Structure Set",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "Common Instance Reference",
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ]
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Manufacturer",
         "module" : "SOP Common"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "module" : "RT Series",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
         "name" : "Related General SOP Class UID",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "name" : "Certified Timestamp",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(3006,0080)[<0>](3006,00a0)[<1>](3006,0082)" : {
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Observation Number",
         "module" : "RT ROI Observations",
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : "Uniquely identifies a related ROI Observation."
      },
      "(0008,001b)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Structure Set",
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common"
      },
      "(0010,2203)" : {
         "req" : "2C",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Patient's Sex Neutered",
         "mod_tables" : [
            "table_C.7-4a"
         ],
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
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ]
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
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
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient"
      },
      "(3006,0080)[<0>](3006,00b0)" : {
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : [
            "Sequence describing physical properties associated with current ROI interpretation.",
            "One or more items are permitted in this sequence."
         ],
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "module" : "RT ROI Observations",
         "name" : "ROI Physical Properties Sequence"
      },
      "(0012,0020)" : {
         "req" : "1",
         "entity" : "Patient",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "Identifier for the noted protocol. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0020,000d)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Unique identifier for the Study.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Instance UID"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "name" : "Scheduled Protocol Code Sequence",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence."
      },
      "(0040,0245)" : {
         "desc" : "Time on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Start Time",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0008,1049)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Physician(s) of Record Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ]
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)[<2>](0020,000e)" : {
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "M",
         "module" : "Structure Set",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : "Unique identifier for the series containing the images."
      },
      "(0010,1002)[<0>](0010,0022)" : {
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
         ],
         "module" : "Patient",
         "name" : "Type of Patient ID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Protocol Context Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence."
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Study Instance UID",
         "module" : "RT Series"
      },
      "(0008,0005)" : {
         "entity" : "Structure Set",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Specific Character Set",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "module" : "RT Series",
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3006,0010)[<0>](3006,0012)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "Structure Set",
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-41",
            "table_10-11"
         ]
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0008,1040)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Institutional Department Name"
      },
      "(0010,2180)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Occupation of the Patient.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Occupation",
         "module" : "Patient Study"
      },
      "(3006,0080)[<0>](3006,0082)" : {
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : "Identification number of the Observation. The value of Observation Number (3006,0082) shall be unique within the RT ROI Observations Sequence (3006,0080).",
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "M",
         "module" : "RT ROI Observations",
         "name" : "Observation Number"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0010,0010)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Patient's full name.",
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient's Name"
      },
      "(0010,0200)" : {
         "module" : "Patient",
         "name" : "Quality Control Subject",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series"
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
         "name" : "Institution Code Sequence",
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "Structure Set",
         "usage" : "M"
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)[<2>](3006,0016)[<3>](0062,000b)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "Structure Set",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.8-41",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "module" : "RT Series",
         "name" : "Requested Procedure Description",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
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
         "module" : "RT Series"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance."
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "req" : "1C",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ]
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Accession Number"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "req" : "1",
         "entity" : "Structure Set",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ]
      },
      "(3006,0039)[<0>](3006,0084)" : {
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : "Uniquely identifies the referenced ROI described in the Structure Set ROI Sequence (3006,0020).",
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "M",
         "module" : "ROI Contour",
         "name" : "Referenced ROI Number"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "An identification number or code used to identify the patient."
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence",
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1062)" : {
         "module" : "General Study",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0020,9172)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Structure Set",
         "name" : "Conversion Source Attributes Sequence",
         "module" : "SOP Common"
      },
      "(3006,0080)[<0>](3006,0030)[<1>](3006,0084)" : {
         "desc" : "Uniquely identifies the related ROI described in the Structure Set ROI Sequence (3006,0020).",
         "mod_tables" : [
            "table_C.8-44"
         ],
         "module" : "RT ROI Observations",
         "name" : "Referenced ROI Number",
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
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
      "(3006,0080)[<0>](3006,00b0)[<1>](3006,00b4)" : {
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : "User-assigned value for physical property.",
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "ROI Physical Property Value",
         "module" : "RT ROI Observations"
      },
      "(3006,0020)[<0>](3006,0038)" : {
         "desc" : "User-defined description of technique used to generate ROI.",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set",
         "name" : "ROI Generation Description",
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M"
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
         "entity" : "Study",
         "usage" : "M",
         "name" : "Procedure Code Sequence",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "module" : "RT Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1060)" : {
         "desc" : "Names of the physician(s) reading the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Name of Physician(s) Reading Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Value Type"
      },
      "(0040,0254)" : {
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Description",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "name" : "Numeric Value",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "req" : "3",
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
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
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
         "entity" : "Patient",
         "name" : "Identifier Type Code",
         "module" : "Patient"
      },
      "(0040,0253)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Performed Procedure Step ID",
         "module" : "RT Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ]
      },
      "(0018,1201)" : {
         "module" : "General Equipment",
         "name" : "Time of Last Calibration",
         "entity" : "Equipment",
         "req" : "3",
         "usage" : "M",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(3006,0010)[<0>](0020,0052)" : {
         "module" : "Structure Set",
         "name" : "Frame of Reference UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set",
         "desc" : "Uniquely identifies Frame of Reference within Structure Set.",
         "mod_tables" : [
            "table_C.8-41"
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
               "title" : "Defined Terms:",
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
                           "attrs" : {
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1C",
         "entity" : "Structure Set",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Certified Timestamp Type"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(3006,0020)[<0>](0008,9215)" : {
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "module" : "Structure Set",
         "name" : "Derivation Code Sequence",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : [
            "A coded description of how this ROI was derived.",
            "One or more items are permitted in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.5.3"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "module" : "RT Series",
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Series"
      },
      "(0008,0031)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : "Time the Series started.",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Series Time"
      },
      "(0018,1020)" : {
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
         ],
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Software Versions"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Attribute Modification DateTime",
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "M"
      },
      "(0012,0082)" : {
         "req" : "3",
         "entity" : "Patient",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081)."
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)[<2>](3006,0016)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "module" : "Structure Set",
         "entity" : "Structure Set",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.8-41",
            "table_10-3"
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Time",
         "module" : "RT Series"
      },
      "(0012,0021)" : {
         "usage" : "U",
         "req" : "2",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The name of the clinical trial protocol. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(3006,0008)" : {
         "entity" : "Structure Set",
         "req" : "2",
         "usage" : "M",
         "name" : "Structure Set Date",
         "module" : "Structure Set",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : "Date at which Structure Set was last modified."
      },
      "(0010,0024)[<0>](0040,0039)" : {
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
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "RT Series",
         "name" : "Referenced Frame Number",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0042)" : {
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : [
            [
               "Geometric type of contour. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.6.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "list" : [
                  [
                     "POINT",
                     "single point"
                  ],
                  [
                     "OPEN_PLANAR",
                     "open contour containing coplanar points"
                  ],
                  [
                     "OPEN_NONPLANAR",
                     "open contour containing non-coplanar points"
                  ],
                  [
                     "CLOSED_PLANAR",
                     "closed contour (polygon) containing coplanar points"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "module" : "ROI Contour",
         "name" : "Contour Geometric Type"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0028,0120)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
                                 ]
                              },
                              "\n                      "
                           ]
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1C",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Pixel Padding Value",
         "module" : "General Equipment"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "module" : "SOP Common",
         "name" : "Operators' Name",
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0008,1080)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Admitting Diagnoses Description",
         "module" : "Patient Study"
      },
      "(3006,0009)" : {
         "entity" : "Structure Set",
         "req" : "2",
         "usage" : "M",
         "module" : "Structure Set",
         "name" : "Structure Set Time",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : "Time at which Structure Set was last modified."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "name" : "Content Item Modifier Sequence",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
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
         ]
      },
      "(0008,0020)" : {
         "module" : "General Study",
         "name" : "Study Date",
         "usage" : "M",
         "req" : "2",
         "entity" : "Study",
         "desc" : "Date the Study started.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0012,0083)" : {
         "name" : "Consent for Clinical Trial Use Sequence",
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
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
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set",
         "module" : "SOP Common",
         "name" : "Encrypted Content Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used."
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Local Namespace Entity ID"
      },
      "(0012,0031)" : {
         "req" : "2",
         "entity" : "Patient",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ]
      },
      "(0100,0424)" : {
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "SOP Authorization Comment",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO."
      },
      "(0012,0040)" : {
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject ID",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "The assigned identifier for the clinical trial subject. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.6"
               }
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Measurement Units Code Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "name" : "Time",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Time",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0012,0071)" : {
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
         "name" : "Clinical Trial Series ID",
         "module" : "Clinical Trial Series",
         "req" : "3",
         "entity" : "Series",
         "usage" : "U"
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
         "entity" : "Study",
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence",
         "module" : "General Study"
      },
      "(0008,0090)" : {
         "module" : "General Study",
         "name" : "Referring Physician's Name",
         "entity" : "Study",
         "req" : "2",
         "usage" : "M",
         "desc" : "Name of the patient's referring physician",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced SOP Class UID"
      },
      "(3006,0020)[<0>](3006,0022)" : {
         "desc" : "Identification number of the ROI. The value of ROI Number (3006,0022) shall be unique within the Structure Set in which it is created.",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "name" : "ROI Number",
         "module" : "Structure Set",
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set"
      },
      "(0008,1200)" : {
         "req" : "1C",
         "entity" : "Structure Set",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ]
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Referenced Study Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
            "One or more items are permitted in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_10.6.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0028,0303)" : {
         "name" : "Longitudinal Temporal Information Modified",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Structure Set",
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
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,0013)" : [
         {
            "mod_tables" : [
               "table_C.8-41"
            ],
            "desc" : "A number that identifies this object instance.",
            "req" : "3",
            "entity" : "Structure Set",
            "usage" : "M",
            "name" : "Instance Number",
            "module" : "Structure Set"
         },
         {
            "desc" : "A number that identifies this Composite object instance.",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "module" : "SOP Common",
            "name" : "Instance Number",
            "req" : "3",
            "usage" : "M",
            "entity" : "Structure Set"
         }
      ],
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0016)[<2>](0008,1160)" : {
         "mod_tables" : [
            "table_C.8-42",
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
         "req" : "1C",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "module" : "ROI Contour"
      },
      "(0400,0561)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "SOP Common",
         "name" : "Original Attributes Sequence"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0046)" : {
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : "Number of points (triplets) in Contour Data (3006,0050).",
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Number of Contour Points",
         "module" : "ROI Contour"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "module" : "Patient Study",
         "req" : "1C",
         "entity" : "Study",
         "usage" : "U"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(3006,0080)[<0>](3006,00b0)[<1>](3006,00b6)[<2>](3006,00b7)" : {
         "desc" : "The atomic number of the element for which the ROI Elemental Composition Sequence (3006,00B6) is sent.",
         "mod_tables" : [
            "table_C.8-44"
         ],
         "name" : "ROI Elemental Composition Atomic Number",
         "module" : "RT ROI Observations",
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "name" : "Person Name",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0044)" : {
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : [
            "Thickness of slab (in mm) represented by contour, where Contour Data (3006,0050) defines a plane in the center of the slab, offset by the Contour Offset Vector (3006,0045) if it is present. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.6.2"
               }
            },
            "."
         ],
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Contour Slab Thickness",
         "module" : "ROI Contour"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,2201)" : {
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient Species Description",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0012,0081)" : {
         "usage" : "U",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present."
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "SOP Common",
         "name" : "Reason for the Attribute Modification"
      },
      "(0008,103f)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Series Description Code Sequence"
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
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M"
      },
      "(3006,0006)" : {
         "desc" : "User-defined description for Structure Set.",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "name" : "Structure Set Description",
         "module" : "Structure Set",
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,1008)" : {
         "desc" : "Identifier of the gantry or positioner.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Gantry ID",
         "module" : "General Equipment",
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Date",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Spatial Resolution",
         "entity" : "Equipment",
         "req" : "3",
         "usage" : "M"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Encrypted data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.4.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set",
         "module" : "SOP Common",
         "name" : "Encrypted Content"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "module" : "RT Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(3006,0020)[<0>](3006,0024)" : {
         "desc" : "Uniquely identifies Frame of Reference in which ROI is defined, specified by Frame of Reference UID (0020,0052) in Referenced Frame of Reference Sequence (3006,0010).",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set",
         "name" : "Referenced Frame of Reference UID",
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "module" : "General Study",
         "name" : "Institution Name",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-3",
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
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Universal Entity ID Type",
         "module" : "General Study"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "req" : "1",
         "entity" : "Structure Set",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ]
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set",
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0049)" : {
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : "List of Contour Number (3006,0048) defining lower-numbered contour(s) to which the current contour is connected.",
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Attached Contours",
         "module" : "ROI Contour"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Structure Set"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Text Value",
         "module" : "RT Series"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "desc" : "Identification number of an animal within the registry.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Number",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient"
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)[<2>](3006,0016)[<3>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-41",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "Structure Set"
      },
      "(3006,0039)[<0>](3006,002a)" : {
         "name" : "ROI Display Color",
         "module" : "ROI Contour",
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "desc" : "RGB triplet color representation for ROI, specified using the range 0-255.",
         "mod_tables" : [
            "table_C.8-42"
         ]
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Institution Address",
         "module" : "General Study"
      },
      "(3006,0080)[<0>](3006,0030)[<1>](3006,0033)" : {
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "module" : "RT ROI Observations",
         "name" : "RT ROI Relationship",
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : [
            "Relationship of referenced ROI with respect to referencing ROI.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "SAME",
                     "ROIs represent the same entity"
                  ],
                  [
                     "ENCLOSED",
                     "referenced ROI completely encloses referencing ROI"
                  ],
                  [
                     "ENCLOSING",
                     "referencing ROI completely encloses referenced ROI"
                  ]
               ]
            }
         ]
      },
      "(3006,0018)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-41",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set",
         "module" : "Structure Set",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,0032)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth time of the Patient.",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient's Birth Time",
         "module" : "Patient"
      },
      "(0010,1030)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Weight of the Patient, in kilograms.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Patient's Weight",
         "module" : "Patient Study"
      },
      "(0038,0010)" : {
         "name" : "Admission ID",
         "module" : "Patient Study",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Measurement Units Code Sequence"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Coding Scheme Designator",
         "module" : "SOP Common"
      },
      "(0008,1115)" : {
         "module" : "Common Instance Reference",
         "name" : "Referenced Series Sequence",
         "entity" : "Structure Set",
         "req" : "1C",
         "usage" : "U",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)" : {
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : [
            "Sequence describing series of images within the referenced study that are used in defining the Structure Set.",
            "One or more items shall be included in this sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "Structure Set",
         "name" : "RT Referenced Series Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Text Value",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Text Value",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0008,0030)" : {
         "req" : "2",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Time",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Time the Study started."
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "DateTime",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "name" : "Person's Address",
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "name" : "Value Type",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set",
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
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0250)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step ended.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Date",
         "module" : "RT Series"
      },
      "(0008,0053)" : {
         "req" : "1C",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Query/Retrieve View",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "module" : "RT Series",
         "name" : "Content Item Modifier Sequence",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.4.10.1"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "module" : "SOP Common",
         "name" : "Retrieve URI",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "module" : "RT Series",
         "name" : "Person Name",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
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
         ]
      },
      "(0010,0021)" : {
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
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID"
      },
      "(0040,0260)" : {
         "name" : "Performed Protocol Code Sequence",
         "module" : "RT Series",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "module" : "RT Series",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "SOP Authorization DateTime"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "module" : "SOP Common",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,1070)" : {
         "name" : "Operators' Name",
         "module" : "RT Series",
         "req" : "2",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(3006,0080)[<0>](3006,00b0)[<1>](3006,00b2)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set",
         "module" : "RT ROI Observations",
         "name" : "ROI Physical Property",
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : [
            "Physical property specified by ROI Physical Property Value (3006,00B4).",
            {
               "list" : [
                  [
                     "REL_MASS_DENSITY",
                     "mass density relative to water"
                  ],
                  [
                     "REL_ELEC_DENSITY",
                     "electron density relative to water"
                  ],
                  [
                     "EFFECTIVE_Z",
                     "effective atomic number"
                  ],
                  [
                     "EFF_Z_PER_A",
                     [
                        "ratio of effective atomic number to mass (AMU",
                        {
                           "el" : "superscript",
                           "content" : [
                              "-1"
                           ]
                        },
                        ")"
                     ]
                  ],
                  [
                     "REL_STOP_RATIO",
                     "linear stopping power ratio relative to water"
                  ],
                  [
                     "ELEM_FRACTION",
                     "elemental composition of the material"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "module" : "SOP Common",
         "name" : "Software Versions",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
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
      "(0010,2298)" : {
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
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Responsible Person Role"
      },
      "(0400,0500)" : {
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
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Structure Set"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "U",
         "name" : "Study Instance UID",
         "module" : "Common Instance Reference"
      },
      "(0012,0064)" : {
         "name" : "De-identification Method Code Sequence",
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,1010)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "name" : "Patient's Age",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Age of the Patient."
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
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Responsible Organization"
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
         "name" : "Admitting Diagnoses Code Sequence",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Person Name"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person's Address",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "req" : "1",
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(3006,0080)[<0>](3006,00a0)" : {
         "desc" : [
            "Sequence of related ROI Observations.",
            "One or more items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-44"
         ],
         "name" : "Related RT ROI Observations Sequence",
         "module" : "RT ROI Observations",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set"
      },
      "(0012,0062)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The true identity of the patient has been removed from the Attributes and the Pixel Data",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Identity Removed"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "DateTime"
      },
      "(0010,2297)" : {
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Responsible Person",
         "entity" : "Patient",
         "req" : "2C",
         "usage" : "M"
      },
      "(300e,0004)" : {
         "name" : "Review Date",
         "module" : "Approval",
         "req" : "2C",
         "entity" : "Structure Set",
         "usage" : "U",
         "desc" : "Date on which object was reviewed. Required if Approval Status (300E,0002) is APPROVED or REJECTED.",
         "mod_tables" : [
            "table_C.8-52"
         ]
      },
      "(300e,0008)" : {
         "desc" : "Name of person who reviewed object. Required if Approval Status (300E,0002) is APPROVED or REJECTED.",
         "mod_tables" : [
            "table_C.8-52"
         ],
         "module" : "Approval",
         "name" : "Reviewer Name",
         "entity" : "Structure Set",
         "req" : "2C",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0050)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "ROI Contour",
         "name" : "Contour Data",
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : [
            [
               "Sequence of (x,y,z) triplets defining a contour in the patient based coordinate system described in ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.2.1.1"
                  },
                  "el" : "xref"
               },
               " (mm). See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.6.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.6.3",
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
                     "el" : "para",
                     "content" : [
                        "Contour Data may not be properly encoded if Explicit VR transfer syntax is used and the VL of this attribute exceeds 65534 bytes."
                     ]
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Floating Point Value",
         "module" : "RT Series"
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)[<2>](3006,0016)[<3>](0008,1150)" : {
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "module" : "Structure Set",
         "mod_tables" : [
            "table_C.8-41",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(3006,0018)" : {
         "module" : "Structure Set",
         "name" : "Predecessor Structure Set Sequence",
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "The Structure Set that has been used to derive the current Structure Set.",
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-41"
         ]
      },
      "(3006,0080)[<0>](3006,0030)" : {
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "module" : "RT ROI Observations",
         "name" : "RT Related ROI Sequence",
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : [
            "Sequence of significantly related ROIs, e.g., CTVs contained within a PTV.",
            "One or more items are permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "module" : "RT Series",
         "name" : "DateTime",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Coding Scheme Version"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "module" : "RT Series",
         "name" : "Floating Point Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300e,0005)" : {
         "desc" : "Time at which object was reviewed. Required if Approval Status (300E,0002) is APPROVED or REJECTED.",
         "mod_tables" : [
            "table_C.8-52"
         ],
         "module" : "Approval",
         "name" : "Review Time",
         "entity" : "Structure Set",
         "req" : "2C",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "name" : "UID",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0012,0063)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "De-identification Method",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
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
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0012,0050)" : {
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Time Point ID",
         "req" : "2",
         "usage" : "U",
         "entity" : "Study",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0008,1048)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Physician(s) of Record",
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
         ]
      },
      "(0008,1090)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances."
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "SOP Common",
         "name" : "MAC ID Number"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "module" : "RT Series",
         "name" : "Universal Entity ID Type",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
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
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature UID",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set"
      },
      "(3006,0010)[<0>](3006,0012)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-41",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "Structure Set",
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Digital Signature DateTime",
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
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ]
      },
      "(3006,0080)[<0>](3006,0088)" : {
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : "User-defined description for ROI Observation.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "RT ROI Observations",
         "name" : "ROI Observation Description"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Name"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "req" : "1",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
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
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "req" : "1C",
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
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,1111)" : {
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "One or more items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Referenced Performed Procedure Step Sequence",
         "module" : "RT Series",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "entity" : "Structure Set",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15",
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
                     "el" : "orderedlist",
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
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "el" : "para"
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(3006,0020)[<0>](3006,0028)" : {
         "desc" : "User-defined description for ROI.",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "module" : "Structure Set",
         "name" : "ROI Description",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
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
                     "el" : "para",
                     "content" : [
                        "This Attribute may be multi-valued."
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "req" : "1C",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "module" : "RT Series",
         "name" : "Numeric Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0045)" : {
         "desc" : [
            "Vector (x,y,z) in the patient based coordinate system described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " that is normal to plane of Contour Data (3006,0050), describing direction and magnitude of the offset (in mm) of each point of the central plane of a contour slab from the corresponding original point of Contour Data (3006,0050). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.6.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-42"
         ],
         "name" : "Contour Offset Vector",
         "module" : "ROI Contour",
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "module" : "RT Series",
         "name" : "Time",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Study Description"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme Name",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set"
      },
      "(3006,0002)" : {
         "name" : "Structure Set Label",
         "module" : "Structure Set",
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "M",
         "desc" : "User-defined label for Structure Set.",
         "mod_tables" : [
            "table_C.8-41"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
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
         "req" : "1",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Value Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "module" : "RT Series",
         "name" : "Date",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0016)[<2>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-42",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set",
         "module" : "ROI Contour",
         "name" : "Referenced SOP Instance UID"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(3006,0039)[<0>](3006,0040)" : {
         "name" : "Contour Sequence",
         "module" : "ROI Contour",
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "desc" : "Sequence of Contours defining ROI. One or more items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.8-42"
         ]
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Address",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Name",
         "module" : "General Study"
      },
      "(3006,0080)[<0>](3006,00b0)[<1>](3006,00b6)[<2>](3006,00b8)" : {
         "name" : "ROI Elemental Composition Atomic Mass Fraction",
         "module" : "RT ROI Observations",
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set",
         "desc" : [
            "The fractional weight of the element for which the ROI Elemental Composition Sequence (3006,00B6) is sent.",
            "The sum of all ROI Elemental Composition Atomic Mass Fractions (3006,00B8) sent in the ROI Elemental Composition Sequence (3006,00B6) shall equal 1.0 within acceptable limits of floating point precision."
         ],
         "mod_tables" : [
            "table_C.8-44"
         ]
      },
      "(0012,0042)" : {
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Subject Reading ID",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "Identifies the subject for blinded evaluations. Shall be present if Clinical Trial Subject ID (0012,0040) is absent. May be present otherwise. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.7",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "name" : "UID",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0251)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Time at which the Performed Procedure Step ended.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Performed Procedure Step End Time"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0016)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.8-42",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Structure Set",
         "name" : "Referenced Segment Number",
         "module" : "ROI Contour"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
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
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "name" : "Value Type",
         "module" : "RT Series"
      },
      "(3006,0004)" : {
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "module" : "Structure Set",
         "name" : "Structure Set Name",
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : "User-defined name for Structure Set."
      },
      "(0010,0024)[<0>](0040,0036)" : {
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
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Breed Registry Code Sequence",
         "req" : "1",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3006,0020)[<0>](3006,0036)" : {
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : [
            "Type of algorithm used to generate ROI.",
            {
               "list" : [
                  [
                     "AUTOMATIC",
                     "calculated ROI"
                  ],
                  [
                     "SEMIAUTOMATIC",
                     "ROI calculated with user assistance"
                  ],
                  [
                     "MANUAL",
                     "user-entered ROI"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "usage" : "M",
         "req" : "2",
         "entity" : "Structure Set",
         "name" : "ROI Generation Algorithm",
         "module" : "Structure Set"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(3006,0010)[<0>](3006,0012)[<1>](3006,0014)[<2>](3006,0016)" : {
         "mod_tables" : [
            "table_C.8-41"
         ],
         "desc" : [
            "Sequence of items describing images in a given series used in defining the Structure Set (typically CT or MR images).",
            "One or more items shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Contour Image Sequence",
         "module" : "Structure Set"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series"
      },
      "(3006,0080)[<0>](3006,0086)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
         "name" : "RT ROI Identification Code Sequence",
         "module" : "RT ROI Observations",
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : [
            "Sequence containing Code used to identify ROI.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0008,0050)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "entity" : "Study",
         "req" : "2",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Accession Number"
      },
      "(0008,0110)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Coding Scheme Identification Sequence",
         "module" : "SOP Common"
      },
      "(0010,0020)" : {
         "desc" : "Primary hospital identification number or code for the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient ID",
         "req" : "2",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(3006,0080)[<0>](3006,00a4)" : {
         "desc" : [
            [
               "Type of ROI. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.8.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "EXTERNAL",
                     "external patient contour"
                  ],
                  [
                     "PTV",
                     "Planning Target Volume (as defined in ICRU50)"
                  ],
                  [
                     "CTV",
                     "Clinical Target Volume (as defined in ICRU50)"
                  ],
                  [
                     "GTV",
                     "Gross Tumor Volume (as defined in ICRU50)"
                  ],
                  [
                     "TREATED_VOLUME",
                     "Treated Volume (as defined in ICRU50)"
                  ],
                  [
                     "IRRAD_VOLUME",
                     "Irradiated Volume (as defined in ICRU50)"
                  ],
                  [
                     "BOLUS",
                     "patient bolus to be used for external beam therapy"
                  ],
                  [
                     "AVOIDANCE",
                     "region in which dose is to be minimized"
                  ],
                  [
                     "ORGAN",
                     "patient organ"
                  ],
                  [
                     "MARKER",
                     "patient marker or marker on a localizer"
                  ],
                  [
                     "REGISTRATION",
                     "registration ROI"
                  ],
                  [
                     "ISOCENTER",
                     "treatment isocenter to be used for external beam therapy"
                  ],
                  [
                     "CONTRAST_AGENT",
                     "volume into which a contrast agent has been injected"
                  ],
                  [
                     "CAVITY",
                     "patient anatomical cavity"
                  ],
                  [
                     "BRACHY_CHANNEL",
                     "brachytherapy channel"
                  ],
                  [
                     "BRACHY_ACCESSORY",
                     "brachytherapy accessory device"
                  ],
                  [
                     "BRACHY_SRC_APP",
                     "brachytherapy source applicator"
                  ],
                  [
                     "BRACHY_CHNL_SHLD",
                     "brachytherapy channel shield"
                  ],
                  [
                     "SUPPORT",
                     "external patient support device"
                  ],
                  [
                     "FIXATION",
                     "external patient fixation or immobilization device"
                  ],
                  [
                     "DOSE_REGION",
                     "ROI to be used as a dose reference"
                  ],
                  [
                     "CONTROL",
                     "ROI to be used in control of dose optimization and calculation"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-44"
         ],
         "name" : "RT ROI Interpreted Type",
         "module" : "RT ROI Observations",
         "req" : "2",
         "usage" : "M",
         "entity" : "Structure Set"
      },
      "(0008,0080)" : {
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Name",
         "module" : "General Equipment",
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,0018)" : {
         "name" : "SOP Instance UID",
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
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
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0032,1034)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Requesting Service Code Sequence"
      },
      "(0008,0014)" : {
         "name" : "Instance Creator UID",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
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
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Requested Procedure ID",
         "module" : "RT Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "name" : "HL7 Instance Identifier",
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "M",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "SOP Common",
         "name" : "Instance Creation Time"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Identifier Type Code",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Structure Set",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(3006,0080)[<0>](3006,0085)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Structure Set",
         "name" : "ROI Observation Label",
         "module" : "RT ROI Observations",
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : "User-defined label for ROI Observation."
      },
      "(0020,0011)" : {
         "req" : "2",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Series Number",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : "A number that identifies this series."
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "req" : "1C",
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0010,2293)" : {
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
         "module" : "Patient",
         "name" : "Patient Breed Code Sequence",
         "entity" : "Patient",
         "req" : "2C",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Institution Address"
      },
      "(0010,1000)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Other Patient IDs",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other identification numbers or codes used to identify the patient."
      },
      "(3006,0080)[<0>](300a,00e1)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set",
         "module" : "RT ROI Observations",
         "name" : "Material ID",
         "mod_tables" : [
            "table_C.8-44"
         ],
         "desc" : "User-supplied identifier for ROI material."
      },
      "(0040,0280)" : {
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Comments on the Performed Procedure Step",
         "module" : "RT Series",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "entity" : "Structure Set",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "MAC Calculation Transfer Syntax UID",
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ]
      },
      "(0018,1200)" : {
         "mod_tables" : [
            "table_C.7-8"
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
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "name" : "Date of Last Calibration",
         "module" : "General Equipment"
      },
      "(0008,0096)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0008,0060)" : {
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Modality",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : [
            "Type of equipment that originally acquired the data.",
            {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "req" : "1",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,1010)" : {
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Station Name",
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment"
      },
      "(3006,0039)[<0>](3006,0040)[<1>](3006,0048)" : {
         "mod_tables" : [
            "table_C.8-42"
         ],
         "desc" : "Identification number of the contour. The value of Contour Number (3006,0048) shall be unique within the Contour Sequence (3006,0040) in which it is defined. No semantics or ordering shall be inferred from this attribute.",
         "req" : "3",
         "entity" : "Structure Set",
         "usage" : "M",
         "name" : "Contour Number",
         "module" : "ROI Contour"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Rational Denominator Value"
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
         "entity" : "Structure Set",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Digital Signatures Sequence"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0012,0060)" : {
         "name" : "Clinical Trial Coordinating Center Name",
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "req" : "2",
         "entity" : "Series",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0100,0410)" : {
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
                     "el" : "para",
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "SOP Instance Status",
         "req" : "3",
         "usage" : "M",
         "entity" : "Structure Set"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(3006,0080)" : {
         "desc" : [
            "Sequence of observations related to ROIs defined in the ROI Module.",
            "One or more items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-44"
         ],
         "module" : "RT ROI Observations",
         "name" : "RT ROI Observations Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Structure Set"
      }
   }
}