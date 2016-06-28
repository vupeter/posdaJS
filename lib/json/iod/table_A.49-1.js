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
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ],
   "tags" : {
      "(0008,0018)" : {
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
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "req" : "1",
         "module" : "SOP Common",
         "name" : "SOP Instance UID",
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,008c)[<2>](300c,00f0)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Referenced Control Point Index",
         "module" : "RT Fraction Scheme",
         "desc" : [
            "Uniquely identifies the Control Point specified by Control Point Index (300A,0112) within Beam referenced by Referenced Beam Number (300C,0006).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.13.1.1"
                  },
                  "el" : "xref"
               }
            ],
            "Required, if the Referenced Cumulative Meterset corresponds to a Control Point in the Control Point Sequence (300A,0111)."
         ],
         "req" : "1C"
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT General Plan",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-45",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0008,0012)" : {
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Date",
         "req" : "3",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common"
      },
      "(300a,03a2)[<0>](300a,00d0)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Number of Wedges",
         "req" : "1",
         "desc" : "Number of wedges associated with current beam.",
         "module" : "RT Ion Beams"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "name" : "Institution Address",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(300a,03a2)[<0>](300a,0340)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Number of Range Modulators",
         "desc" : "Number of range modulators associated with current beam.",
         "req" : "1",
         "module" : "RT Ion Beams"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Patient Setup",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "usage" : "U"
      },
      "(300a,0180)[<0>](300a,0183)" : {
         "name" : "Patient Setup Label",
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : "The user-defined label for the patient setup.",
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(300a,03a2)[<0>](300a,03aa)[<1>](300a,00d4)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Wedge ID",
         "module" : "RT Ion Beams",
         "desc" : "User-supplied identifier for Wedge.",
         "req" : "3"
      },
      "(0008,1030)" : {
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "module" : "General Study",
         "name" : "Study Description",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "module" : "RT Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,03a2)[<0>](300a,03a6)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "req" : "3",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "module" : "RT Ion Beams",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(300a,03a2)[<0>](300a,0107)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Applicator Sequence",
         "desc" : [
            "Sequence of Applicators associated with Beam.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "RT Ion Beams"
      },
      "(0010,2202)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient Species Code Sequence",
         "module" : "Patient",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(300a,0180)[<0>](300a,01a0)" : {
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : [
            "Sequence of Shielding Devices used in Patient Setup.",
            "One or more items are permitted in this sequence."
         ],
         "name" : "Shielding Device Sequence",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-45",
            "table_10-11"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT General Plan"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0134)" : {
         "module" : "RT Ion Beams",
         "desc" : "Cumulative weight to current control point. Cumulative Meterset Weight for the first item in Control Point Sequence shall always be zero. Cumulative Meterset Weight for the final item in Ion Control Point Sequence shall always be equal to Final Cumulative Meterset Weight.",
         "req" : "2",
         "name" : "Cumulative Meterset Weight",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0129)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Table Top Longitudinal Position",
         "req" : "2C",
         "desc" : [
            "Table Top Longitudinal position in IEC TABLE TOP coordinate system (mm). Required for first item of Control Point Sequence, or if Table Top Longitudinal Position changes during Beam. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.6"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "RT Ion Beams"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme UID",
         "req" : "1C",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "module" : "SOP Common"
      },
      "(300a,03a2)[<0>](300c,00b0)" : {
         "name" : "Referenced Bolus Sequence",
         "desc" : [
            "Sequence of boli associated with Beam.",
            "Required if Number of Boli (300A,00ED) is non-zero.",
            "The number of items shall be identical to the value of Number of Boli (300A,00ED)."
         ],
         "req" : "1C",
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,0007)" : {
         "name" : "RT Plan Time",
         "req" : "2",
         "desc" : "Time treatment plan was last modified.",
         "module" : "RT General Plan",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "usage" : "M"
      },
      "(0008,1090)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "req" : "3",
         "name" : "Manufacturer's Model Name"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "req" : "2",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Any Attribute from the main data set that was modified or removed."
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,03ac)[<2>](300a,0118)" : {
         "name" : "Wedge Position",
         "req" : "1",
         "desc" : [
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
         "module" : "RT Ion Beams",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
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
         "module" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "module" : "General Study",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,030d)" : {
         "module" : "RT Ion Beams",
         "desc" : "Axial position of the snout (in mm) measured from isocenter to the downstream side of the snout (without consideration of variable length elements such as blocks, MLC and/or compensators). Required for first item in Control Point Sequence, or if Snout Position changes during Beam.",
         "req" : "2C",
         "name" : "Snout Position",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Identifier Type Code",
         "req" : "3",
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
         "module" : "Patient"
      },
      "(300a,03a2)[<0>](0008,1090)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that is to be used for beam delivery.",
         "name" : "Manufacturer's Model Name"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "module" : "General Study",
         "req" : "3",
         "desc" : "Person's mailing address"
      },
      "(0040,0254)" : {
         "name" : "Performed Procedure Step Description",
         "module" : "RT Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0008,1120)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Referenced Patient Sequence",
         "req" : "3",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0012,0040)" : {
         "entity" : "Patient",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1C",
         "desc" : [
            "The assigned identifier for the clinical trial subject. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject ID"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
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
         "req" : "3"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0380)[<2>](300a,0388)" : {
         "name" : "Range Modulator Gating Stop Water Equivalent Thickness",
         "desc" : [
            "If Range Modulator Type (300A,0348) is WHL_MODWEIGHTS or WHL_FIXEDWEIGHTS:",
            "Water equivalent thickness (in mm) of the range modulator at the position specified by Range Modulator Gating Stop Value (300A,0384).",
            "If Range Modulator Type (300A,0348) is FIXED:",
            "Maximum water equivalent thickness (in mm) of the range modulator."
         ],
         "req" : "3",
         "module" : "RT Ion Beams",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0008,001b)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "req" : "3",
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
         "module" : "SOP Common",
         "name" : "Original Specialized SOP Class UID"
      },
      "(300a,03a0)[<0>](300a,0048)[<1>](300a,004a)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ],
         "name" : "Beam Limiting Device Position Tolerance",
         "module" : "RT Ion Tolerance Tables",
         "req" : "1",
         "desc" : "Maximum permitted difference (in mm) between planned and delivered leaf (element) or jaw positions for current beam limiting device (collimator)."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "RT Series",
         "name" : "Referenced SOP Sequence"
      },
      "(300a,03a2)[<0>](300a,00ed)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Number of Boli",
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : "Number of boli associated with current Beam."
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a8)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "3",
         "desc" : "Position/Notch number of Shielding Device.",
         "module" : "RT Patient Setup",
         "name" : "Shielding Device Position"
      },
      "(300a,03a2)[<0>](300c,00b0)[<1>](300a,00f9)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Accessory Code",
         "module" : "RT Ion Beams",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "req" : "3"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "HL7 Instance Identifier",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier)."
      },
      "(300a,0004)" : {
         "name" : "RT Plan Description",
         "module" : "RT General Plan",
         "req" : "3",
         "desc" : "User-defined description of treatment plan.",
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45"
         ]
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a6)" : {
         "req" : "3",
         "desc" : "User-defined description of Shielding Device.",
         "module" : "RT Patient Setup",
         "name" : "Shielding Device Description",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,008c)[<2>](300a,008e)" : {
         "module" : "RT Fraction Scheme",
         "req" : "2C",
         "desc" : [
            "The average radiological depth in mm (water-equivalent depth, taking tissue heterogeneity into account) in the patient along a ray from the source to the dose point specified by the Beam Dose Specification Point (300A,0082) from the current Beam Dose Verification Control Point to the next one.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.13.1.2",
                     "xrefstyle" : "select: label"
                  }
               }
            ],
            "Required for all but the last items in that sequence."
         ],
         "name" : "Average Beam Dose Point Equivalent Depth",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(300a,03a2)[<0>](300a,02ea)" : {
         "name" : "Ion Range Compensator Sequence",
         "desc" : [
            "Sequence of compensators.",
            "Required if Number of Compensators (300A,00E0) is non-zero.",
            "The number of items shall be identical to the value of Number of Compensators (300A,00E0)."
         ],
         "req" : "1C",
         "module" : "RT Ion Beams",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0392)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Number of Scan Spot Positions",
         "module" : "RT Ion Beams",
         "desc" : "Number of spot positions used to specify scanning pattern for current segment beginning at control point. Required if Scan Mode (300A,0308) is MODULATED.",
         "req" : "1C"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0005)" : {
         "name" : "Specific Character Set",
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
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "module" : "Patient",
         "req" : "1",
         "desc" : "An identification number or code used to identify the patient.",
         "name" : "Patient ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(300a,03a2)[<0>](300a,03a6)[<1>](300a,0100)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Block Thickness",
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : [
            "Physical thickness of block (in mm) parallel to radiation beam axis. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(300a,03a2)[<0>](300a,0342)" : {
         "req" : "1C",
         "desc" : [
            "Sequence of range modulators associated with Beam.",
            "Required if Number of Range Modulators (300A,0340) is non-zero.",
            "The number of items shall be identical to the value of Number of Range Modulators (300A,0340)."
         ],
         "module" : "RT Ion Beams",
         "name" : "Range Modulator Sequence",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "module" : "SOP Common",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "name" : "Institution Address",
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "name" : "Series Instance UID",
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ]
      },
      "(300a,03a2)[<0>](300c,0042)[<1>](300a,00c8)" : {
         "req" : "1",
         "desc" : "Uniquely identifies Reference Image within Referenced Reference Image Sequence (300C,0042).",
         "module" : "RT Ion Beams",
         "name" : "Reference Image Number",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "name" : "Reason for Requested Procedure Code Sequence",
         "module" : "RT Series",
         "req" : "3",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(300a,03a2)[<0>](300a,0420)" : {
         "name" : "General Accessory Sequence",
         "req" : "3",
         "desc" : [
            "Introduces a Sequence of General Accessories associated with this Beam.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "RT Ion Beams",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(300a,03a2)[<0>](300a,00c4)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "module" : "RT Ion Beams",
         "desc" : [
            "Motion characteristic of Beam.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "STATIC",
                     "all beam parameters remain unchanged during delivery"
                  ],
                  [
                     "DYNAMIC",
                     "one or more beam parameters changes during delivery"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1",
         "name" : "Beam Type"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
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
         "req" : "3",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "General Study"
      },
      "(0010,1010)" : {
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Age of the Patient.",
         "name" : "Patient's Age"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0128)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Table Top Vertical Position",
         "req" : "2C",
         "desc" : [
            "Table Top Vertical position in IEC TABLE TOP coordinate system (mm). Required for first item of Control Point Sequence, or if Table Top Vertical Position changes during Beam. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.6"
               }
            },
            "."
         ],
         "module" : "RT Ion Beams"
      },
      "(300a,03a2)[<0>](300a,0332)[<1>](300a,033a)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Lateral Spreading Device Description",
         "module" : "RT Ion Beams",
         "desc" : "User-defined description for lateral spreading device.",
         "req" : "3"
      },
      "(300a,03a0)[<0>](300a,0048)[<1>](300a,00b8)" : {
         "module" : "RT Ion Tolerance Tables",
         "req" : "1",
         "desc" : [
            "Type of beam limiting device (collimator).",
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
         "name" : "RT Beam Limiting Device Type",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ],
         "usage" : "U"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Retrieve URI",
         "req" : "3",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "module" : "SOP Common"
      },
      "(300e,0008)" : {
         "module" : "Approval",
         "desc" : "Name of person who reviewed object. Required if Approval Status (300E,0002) is APPROVED or REJECTED.",
         "req" : "2C",
         "name" : "Reviewer Name",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-52"
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(300a,03a2)[<0>](300a,00f3)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : "Water-Equivalent thickness of the block tray (in mm) parallel to radiation beam axis.",
         "name" : "Total Block Tray Water-Equivalent Thickness"
      },
      "(0010,2160)" : {
         "name" : "Ethnic Group",
         "desc" : "Ethnic group or race of the patient.",
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3",
         "name" : "Contribution DateTime"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "RT Series",
         "name" : "UID"
      },
      "(300a,0180)[<0>](300a,0184)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "module" : "RT Patient Setup",
         "desc" : "User-defined additional description of patient position. Required if Patient Position (0018,5100) is not present.",
         "req" : "1C",
         "name" : "Patient Additional Position"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0360)[<2>](300a,0366)" : {
         "name" : "Range Shifter Water Equivalent Thickness",
         "module" : "RT Ion Beams",
         "desc" : "Water equivalent thickness (in mm) of the range shifter at the central axis for the beam energy incident upon the device.",
         "req" : "3",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(0032,1034)" : {
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "General Study",
         "name" : "Requesting Service Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
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
         "module" : "SOP Common"
      },
      "(300a,03a2)[<0>](300a,0358)" : {
         "name" : "Fixation Light Polar Angle",
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : [
            "Polar angle (degrees) of the fixation light coordinate. Used for eye treatments. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.4"
               }
            },
            "."
         ],
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,00ce)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Treatment Delivery Type",
         "req" : "1",
         "desc" : [
            "Delivery Type of treatment.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "TREATMENT",
                     "Normal patient treatment"
                  ],
                  [
                     "OPEN_PORTFILM",
                     "Portal image acquisition with open field (the source of radiation is specified by Radiation Type (300A,00C6))"
                  ],
                  [
                     "TRMT_PORTFILM",
                     "Portal image acquisition with treatment port (the source of radiation is specified by Radiation Type (300A,00C6))"
                  ],
                  [
                     "CONTINUATION",
                     "Continuation of interrupted treatment"
                  ],
                  [
                     "SETUP",
                     "No treatment beam is applied for this RT Beam. To be used for specifying the gantry, couch, and other machine positions where X-Ray set-up images or measurements shall be taken."
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "module" : "RT Ion Beams"
      },
      "(300a,03a0)[<0>](300a,004b)" : {
         "name" : "Snout Position Tolerance",
         "module" : "RT Ion Tolerance Tables",
         "desc" : "Maximum permitted difference (in mm) between planned and delivered Snout Position.",
         "req" : "3",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ],
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,0308)" : {
         "desc" : [
            "The method of beam scanning to be used during treatment.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "NONE",
                     "No beam scanning is performed."
                  ],
                  [
                     "UNIFORM",
                     "The beam is scanned between control points to create a uniform lateral fluence distribution across the field."
                  ],
                  [
                     "MODULATED",
                     "The beam is scanned between control points to create a modulated lateral fluence distribution across the field."
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "req" : "1",
         "module" : "RT Ion Beams",
         "name" : "Scan Mode",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0008,0016)" : {
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Class UID",
         "module" : "SOP Common",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "req" : "1"
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Other Patient Names",
         "module" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "req" : "3"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,00f9)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "name" : "Accessory Code"
      },
      "(0040,0245)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Performed Procedure Step Start Time",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Time on which the Performed Procedure Step started."
      },
      "(300a,03a2)[<0>](300c,00b0)[<1>](3006,0084)" : {
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : "Uniquely identifies ROI representing the Bolus specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in Structure Set Module within RT Structure Set in Referenced Structure Set Sequence (300C,0060) in RT General Plan Module.",
         "name" : "Referenced ROI Number",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a2)[<0>](300a,03a6)[<1>](300a,0104)" : {
         "name" : "Block Number of Points",
         "module" : "RT Ion Beams",
         "desc" : "Number of (x,y) pairs defining the block edge.",
         "req" : "1",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,03aa)[<1>](300a,00d3)" : {
         "name" : "Wedge Type",
         "req" : "2",
         "desc" : [
            "Type of wedge (if any) defined for Beam.",
            {
               "list" : [
                  [
                     "STANDARD",
                     "standard (static) wedge"
                  ],
                  [
                     "MOTORIZED",
                     "single wedge that can be removed from beam remotely."
                  ],
                  [
                     "PARTIAL_STANDARD",
                     "wedge does not extend across the whole field and is operated manually."
                  ],
                  [
                     "PARTIAL_MOTORIZ",
                     "wedge does not extend across the whole field and can be removed from beam remotely."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "module" : "RT Ion Beams",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0020,1040)" : {
         "name" : "Position Reference Indicator",
         "req" : "2",
         "desc" : [
            "Part of the imaging target used as a reference. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.4.1.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "module" : "Frame of Reference",
         "entity" : "Frame of Reference",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-6"
         ]
      },
      "(0100,0410)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         "req" : "3",
         "module" : "SOP Common",
         "name" : "SOP Instance Status"
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,00e9)" : {
         "name" : "Compensator Pixel Spacing",
         "req" : "1",
         "desc" : [
            "Physical distance (in mm) between the center of each pixel projected onto machine isocentric plane. Specified by a numeric pair - adjacent row spacing followed by adjacent column spacing. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_10.7.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation of the value order."
         ],
         "module" : "RT Ion Beams",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "req" : "1C",
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
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ]
      },
      "(0010,0030)" : {
         "req" : "2",
         "desc" : "Birth date of the patient.",
         "module" : "Patient",
         "name" : "Patient's Birth Date",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series",
         "usage" : "M",
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
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Scheduled Procedure Step ID"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "name" : "Accession Number",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(300a,03a2)[<0>](300a,0302)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "module" : "RT Ion Beams",
         "desc" : "Mass number of radiation. Required if Radiation Type (300A,00C6) is ION",
         "req" : "1C",
         "name" : "Radiation Mass Number"
      },
      "(300a,0070)[<0>](300c,0080)[<1>](0008,1150)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Fraction Scheme",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,21b0)" : {
         "req" : "3",
         "desc" : "Additional information about the Patient's medical history.",
         "module" : "Patient Study",
         "name" : "Additional Patient History",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Certificate of Signer",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15"
                  },
                  "el" : "olink"
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
               ]
            }
         ],
         "req" : "1",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "req" : "1",
         "name" : "MAC ID Number",
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,a390)" : {
         "name" : "HL7 Structured Document Reference Sequence",
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
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(300a,03a2)[<0>](300a,0420)[<1>](300a,0422)" : {
         "name" : "General Accessory Description",
         "desc" : "User supplied description of General Accessory.",
         "req" : "3",
         "module" : "RT Ion Beams",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,0010)[<0>](300a,001a)" : {
         "name" : "Nominal Prior Dose",
         "module" : "RT Prescription",
         "req" : "3",
         "desc" : "Dose (in Gy) from prior treatment to this Dose Reference (e.g., from a previous course of treatment).",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "req" : "1",
         "name" : "Study Instance UID",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,02e7)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Compensator Relative Stopping Power Ratio",
         "desc" : "Compensator Linear Stopping Power Ratio, relative to water, at the beam energy specified by the Nominal Beam Energy (300A,0114) of the first Control Point of the Ion Control Point Sequence (300A,03A8).",
         "req" : "3",
         "module" : "RT Ion Beams"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "req" : "1C",
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
         "module" : "General Study",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "module" : "RT Series",
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
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300a,03a2)[<0>](300a,03aa)[<1>](300a,00d5)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Wedge Angle",
         "module" : "RT Ion Beams",
         "req" : "2",
         "desc" : "Nominal wedge angle (degrees)."
      },
      "(300a,03a0)[<0>](300a,0051)" : {
         "module" : "RT Ion Tolerance Tables",
         "desc" : "Maximum permitted difference (in mm) between planned and delivered Table Top Vertical Position.",
         "req" : "3",
         "name" : "Table Top Vertical Position Tolerance",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ]
      },
      "(0020,0010)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study ID",
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0370)[<2>](300a,0374)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "module" : "RT Ion Beams",
         "desc" : [
            "Isocenter to downstream edge of Lateral Spreading Device (mm) at current control point. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.4"
               },
               "el" : "xref"
            }
         ],
         "req" : "3",
         "name" : "Isocenter to Lateral Spreading Device Distance"
      },
      "(0010,1000)" : {
         "module" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "req" : "3",
         "name" : "Other Patient IDs",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "module" : "SOP Common",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1",
         "name" : "Coding Scheme Designator",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01d4)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : "Longitudinal Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., longitudinal offset between patient positioning performed using setup and treatment position.",
         "name" : "Table Top Longitudinal Setup Displacement"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0121)" : {
         "name" : "Beam Limiting Device Rotation Direction",
         "desc" : [
            [
               "Direction of Beam Limiting Device Rotation when viewing beam limiting device (collimator) from radiation source, for segment following Control Point. Required for first item of Control Point Sequence, or if Beam Limiting Device Rotation Direction changes during Beam. See ",
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
         "req" : "1C",
         "module" : "RT Ion Beams",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,0070)[<0>](300a,0078)" : {
         "desc" : "Total number of treatments (Fractions) prescribed for current Fraction Group.",
         "req" : "2",
         "module" : "RT Fraction Scheme",
         "name" : "Number of Fractions Planned",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,0107)[<1>](300a,00f9)" : {
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "name" : "Accessory Code",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0380)" : {
         "name" : "Range Modulator Settings Sequence",
         "module" : "RT Ion Beams",
         "desc" : [
            "Sequence of Range Modulator Settings for current control point.",
            "One or more items shall be included in this sequence.",
            "Required for first item of Control Point Sequence if Number of Range Modulators (300A,0340) is non-zero, or if Range Modulator Setting changes during Beam."
         ],
         "req" : "1C",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "General Study",
         "name" : "Local Namespace Entity ID"
      },
      "(300a,03a2)[<0>](300a,03aa)[<1>](300a,00d8)" : {
         "desc" : "Orientation of wedge, i.e., orientation of IEC WEDGE FILTER coordinate system with respect to the IEC BEAM LIMITING DEVICE coordinate systems (degrees).",
         "req" : "2",
         "module" : "RT Ion Beams",
         "name" : "Wedge Orientation",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0040,0250)" : {
         "desc" : "Date on which the Performed Procedure Step ended.",
         "req" : "3",
         "module" : "RT Series",
         "name" : "Performed Procedure Step End Date",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "RT Series"
      },
      "(0008,001a)" : {
         "module" : "SOP Common",
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
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(300a,03a2)[<0>](300c,0042)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "req" : "3",
         "desc" : [
            "Reference images used for validation of current beam.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "RT Ion Beams",
         "name" : "Referenced Reference Image Sequence"
      },
      "(0008,0060)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series",
         "req" : "1",
         "desc" : [
            "Type of equipment that originally acquired the data.",
            {
               "title" : "Enumerated Values:",
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
               ]
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
         ],
         "name" : "Modality"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300c,0006)" : {
         "name" : "Referenced Beam Number",
         "desc" : "Uniquely identifies Beam specified by Beam Number (300A,00C0) within Beam Sequence (300A,00B0) in RT Beams Module.",
         "req" : "1",
         "module" : "RT Fraction Scheme",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(300c,0080)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "RT General Plan",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-45",
            "table_10-11"
         ]
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers"
      },
      "(300a,0070)[<0>](300a,00a0)" : {
         "module" : "RT Fraction Scheme",
         "req" : "1",
         "desc" : "Number of Brachy Application Setups in current Fraction Group. If Number of Brachy Application Setups is greater then zero, Number of Beams (300A,0080) shall equal zero.",
         "name" : "Number of Brachy Application Setups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "module" : "RT Series",
         "req" : "1",
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
         "name" : "Value Type",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,0070)[<0>](300a,007a)" : {
         "name" : "Repeat Fraction Cycle Length",
         "module" : "RT Fraction Scheme",
         "desc" : "Number of weeks needed to describe treatment pattern. See Note 2.",
         "req" : "3",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(300a,03a2)[<0>](300a,00d7)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Total Wedge Tray Water-Equivalent Thickness",
         "req" : "3",
         "desc" : "Shift of the wedge tray induced on the range of the ion beam as measured in water (in mm).",
         "module" : "RT Ion Beams"
      },
      "(300a,0010)[<0>](300a,0023)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "req" : "3",
         "desc" : "The maximum dose (in Gy) that can be delivered to the dose reference.",
         "module" : "RT Prescription",
         "name" : "Delivery Maximum Dose"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0112)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "desc" : "Index of current Control Point, starting at 0 for first Control Point.",
         "req" : "1",
         "module" : "RT Ion Beams",
         "name" : "Control Point Index"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Breed Registry Code Sequence",
         "req" : "1",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "module" : "Patient"
      },
      "(300a,03a2)[<0>](300c,0080)[<1>](0008,1155)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Ion Beams",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0040,0280)" : {
         "name" : "Comments on the Performed Procedure Step",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "req" : "3",
         "module" : "RT Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0010,1020)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Patient's Size",
         "req" : "3",
         "desc" : "Length or size of the Patient, in meters.",
         "module" : "Patient Study"
      },
      "(300c,0002)[<0>](300a,0055)" : {
         "req" : "1",
         "desc" : [
            "Relationship of referenced plan with respect to current plan.",
            {
               "list" : [
                  [
                     "PRIOR",
                     "plan delivered prior to current treatment"
                  ],
                  [
                     "ALTERNATIVE",
                     "alternative plan prepared for current treatment"
                  ],
                  [
                     "PREDECESSOR",
                     "plan used in derivation of current plan"
                  ],
                  [
                     "VERIFIED_PLAN",
                     "plan that is verified using the current plan. This value shall only be used if Plan Intent (300A,000A) is present and has a value of VERIFICATION"
                  ],
                  [
                     "CONCURRENT",
                     "plan that forms part of a set of two or more RT Plan instances representing a single conceptual 'plan', applied in parallel in one treatment phase"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "module" : "RT General Plan",
         "name" : "RT Plan Relationship",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "usage" : "M"
      },
      "(0040,0275)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Request Attributes Sequence",
         "module" : "RT Series",
         "req" : "3",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "module" : "Common Instance Reference",
         "name" : "Series Instance UID",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0018,1020)" : {
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Software Versions",
         "module" : "General Equipment",
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
         "req" : "3"
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "module" : "SOP Common",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name"
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,02e4)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Isocenter to Compensator Tray Distance",
         "module" : "RT Ion Beams",
         "desc" : [
            "Isocenter to compensator tray attachment edge distance (in mm) for current range compensator. Required if Compensator Mounting Position (300A,02E1) is not DOUBLE_SIDED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.4",
                  "xrefstyle" : "select: label"
               }
            }
         ],
         "req" : "1C"
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,02eb)" : {
         "name" : "Compensator Description",
         "req" : "3",
         "desc" : "User defined description for the compensator.",
         "module" : "RT Ion Beams",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
         ],
         "req" : "1",
         "name" : "Reason for the Attribute Modification"
      },
      "(300a,0010)[<0>](300a,0027)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U",
         "module" : "RT Prescription",
         "req" : "3",
         "desc" : "Maximum permitted dose (in Gy) to Dose Reference if Dose Reference Type (300A,0020) is TARGET.",
         "name" : "Target Maximum Dose"
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "name" : "Issuer of Admission ID Sequence",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient Study"
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,02e6)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Isocenter to Compensator Distances",
         "module" : "RT Ion Beams",
         "req" : "1C",
         "desc" : [
            "A data stream of the pixel samples that comprise the distance from the isocenter to the compensator surface closest to the radiation source (in mm). The order of pixels sent is left to right, top to bottom (upper left pixel, followed by the remainder of row 1, followed by the remainder of the rows). Required if Material ID (300A,00E1) is non-zero length, and Compensator Mounting Position (300A,02E1) is DOUBLE_SIDED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.9"
               }
            },
            " and ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.4"
               }
            },
            "."
         ]
      },
      "(0012,0010)" : {
         "module" : "Clinical Trial Subject",
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.1"
               }
            },
            "."
         ],
         "req" : "1",
         "name" : "Clinical Trial Sponsor Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
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
         "module" : "RT Series",
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "name" : "Institution Address",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0018,1008)" : {
         "req" : "3",
         "desc" : "Identifier of the gantry or positioner.",
         "module" : "General Equipment",
         "name" : "Gantry ID",
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,035a)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : "Specifies the speed of delivery of the specified dose in units specified by Primary Dosimeter Unit (300A,00B3) per minute.",
         "name" : "Meterset Rate"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1160)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "req" : "1C",
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
         "module" : "RT Patient Setup"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,008c)[<2>](300a,008d)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "name" : "Average Beam Dose Point Depth",
         "desc" : [
            "The average depth (in mm) in the patient along a ray from the source to the dose point specified by the Beam Dose Specification Point (300A,0082) from the current Beam Dose Verification Control Point to the next one.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.13.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ],
            "Required for all but the last items in that sequence."
         ],
         "req" : "2C",
         "module" : "RT Fraction Scheme"
      },
      "(300a,03a2)[<0>](300c,0042)[<1>](0008,1155)" : {
         "module" : "RT Ion Beams",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1",
            "table_10-11"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0012,0081)" : {
         "usage" : "U",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "req" : "1C",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "module" : "Clinical Trial Subject"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(300a,03a0)[<0>](300a,0048)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ],
         "desc" : [
            "Sequence of beam limiting device (collimator) tolerances.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "RT Ion Tolerance Tables",
         "name" : "Beam Limiting Device Tolerance Sequence"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,002d)" : {
         "module" : "RT Fraction Scheme",
         "req" : "3",
         "desc" : "Maximum permitted fraction (in percent) of Organ at Risk to receive more than the Organ at Risk Maximum Dose if Dose Reference Type (300A,0020) of referenced Dose Reference is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) of referenced Dose Reference is VOLUME.",
         "name" : "Organ at Risk Overdose Volume Fraction",
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(300a,03a2)[<0>](300a,0342)[<1>](300a,0344)" : {
         "name" : "Range Modulator Number",
         "req" : "1",
         "desc" : "Identification number of the Range Modulator. The value of Range Modulator Number (300A,0344) shall be unique within the Beam in which it is created.",
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,011f)" : {
         "module" : "RT Ion Beams",
         "req" : "1C",
         "desc" : [
            [
               "Direction of Gantry Rotation when viewing gantry from isocenter, for segment following Control Point. Required for first item of Control Point Sequence, or if Gantry Rotation Direction changes during Beam. See ",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Gantry Rotation Direction",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0010,0032)" : {
         "req" : "3",
         "desc" : "Birth time of the Patient.",
         "module" : "Patient",
         "name" : "Patient's Birth Time",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0012,0031)" : {
         "name" : "Clinical Trial Site Name",
         "module" : "Clinical Trial Subject",
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
         "req" : "2",
         "usage" : "U",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "name" : "Spatial Resolution",
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(300a,0010)[<0>](300a,0016)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "name" : "Dose Reference Description",
         "module" : "RT Prescription",
         "req" : "3",
         "desc" : "User-defined description of Dose Reference."
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "usage" : "U",
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
         "req" : "1C",
         "name" : "Universal Entity ID Type"
      },
      "(300a,03a2)[<0>](300a,0304)" : {
         "name" : "Radiation Atomic Number",
         "desc" : "Atomic number of radiation. Required if Radiation Type (300A,00C6) is ION",
         "req" : "1C",
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,002c)" : {
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "req" : "3",
         "desc" : "Maximum dose (in Gy) to non-overdosed part of Dose Reference if Dose Reference Type (300A,0020) of referenced Dose Reference is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) of referenced Dose Reference is VOLUME.",
         "module" : "RT Fraction Scheme",
         "name" : "Organ at Risk Maximum Dose"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Content Item Modifier Sequence",
         "req" : "3",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.4.10.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "RT Series"
      },
      "(300a,03a2)[<0>](0018,1000)" : {
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that is to be used for beam delivery.",
         "module" : "RT Ion Beams",
         "name" : "Device Serial Number",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a2)[<0>](300c,00a0)" : {
         "name" : "Referenced Tolerance Table Number",
         "desc" : "Uniquely identifies Tolerance Table specified by Tolerance Table Number (300A,0042) within Tolerance Table Sequence in RT Ion Tolerance Tables Module. These tolerances are to be used for verification of treatment machine settings.",
         "req" : "3",
         "module" : "RT Ion Beams",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "req" : "1",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(300c,0060)[<0>](0008,1150)" : {
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "RT General Plan",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(300a,03a2)[<0>](300c,0080)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "desc" : [
            "Related instances of RT Dose (for grids, isodose curves, and named/unnamed point doses).",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "RT Ion Beams",
         "name" : "Referenced Dose Sequence"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
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
         "module" : "SOP Common",
         "name" : "Encrypted Content"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0396)" : {
         "name" : "Scan Spot Meterset Weights",
         "module" : "RT Ion Beams",
         "req" : "1C",
         "desc" : "A data set of Meterset weights corresponding to scan spot positions. The order of weights matches the positions in Scan Spot Positions (300A,0394). The sum contained in all Meterset weights shall match the difference of the cumulative Meterset weight of the current control point to the following control point. Required if Scan Mode (300A,0308) is MODULATED.",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0370)[<2>](300a,033c)" : {
         "name" : "Lateral Spreading Device Water Equivalent Thickness",
         "desc" : "Water equivalent thickness (in mm) of the lateral spreading device at the central axis for the beam energy incident upon the device.",
         "req" : "3",
         "module" : "RT Ion Beams",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,002a)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Organ at Risk Full-volume Dose",
         "module" : "RT Fraction Scheme",
         "req" : "3",
         "desc" : "Maximum dose (in Gy) to entire Dose Reference if Dose Reference Type (300A,0020) of referenced Dose Reference is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) of referenced Dose Reference is VOLUME."
      },
      "(300a,0010)[<0>](300a,0012)" : {
         "req" : "1",
         "desc" : "Identification number of the Dose Reference. The value of Dose Reference Number (300A,0012) shall be unique within the RT Plan in which it is created.",
         "module" : "RT Prescription",
         "name" : "Dose Reference Number",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0370)[<2>](300a,0372)" : {
         "name" : "Lateral Spreading Device Setting",
         "module" : "RT Ion Beams",
         "desc" : [
            "Machine specific setting attribute for the lateral spreading device. The specific encoding of this value should be documented in a Conformance Statement. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.5",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,0354)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1",
            "table_C.8.8.28-1"
         ],
         "desc" : "A Patient Support accessory identifier to be read by a device such as a bar code reader.",
         "req" : "3",
         "module" : "RT Ion Beams",
         "name" : "Patient Support Accessory Code"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,011a)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1",
            "table_C.8.8.27-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Beam Limiting Device Position Sequence",
         "desc" : [
            "Sequence of beam limiting device (collimator) jaw or leaf (element) positions.",
            "One or more items shall be included in this sequence.",
            "Required if Ion Beam Limiting Device Sequence (300A,03A4) or Beam Limiting Device Leaf Pairs Sequence (3008,00A0) is included in this SOP instance and for first item of Ion Control Point Sequence, or if Beam Limiting Device changes during Beam."
         ],
         "req" : "1C",
         "module" : "RT Ion Beams"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "req" : "3",
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
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(300a,03a2)[<0>](300a,00c0)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Beam Number",
         "module" : "RT Ion Beams",
         "desc" : [
            "Identification number of the Beam. The value of Beam Number (300A,00C0) shall be unique within the RT Ion Plan in which it is created. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.1"
               }
            },
            "."
         ],
         "req" : "1"
      },
      "(300a,03a2)[<0>](300a,00c2)" : {
         "name" : "Beam Name",
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : [
            "User-defined name for Beam. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a2)[<0>](300a,00c3)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Beam Description",
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : [
            "User-defined description for Beam. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "name" : "Requested Procedure Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0008,1032)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "General Study",
         "name" : "Procedure Code Sequence"
      },
      "(0008,0090)" : {
         "module" : "General Study",
         "desc" : "Name of the patient's referring physician",
         "req" : "2",
         "name" : "Referring Physician's Name",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "module" : "RT Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(300a,03a2)[<0>](300c,006a)" : {
         "desc" : "Uniquely identifies Patient Setup to be used for current beam, specified by Patient Setup Number (300A,0182) within Patient Setup Sequence of RT Patient Setup Module.",
         "req" : "3",
         "module" : "RT Ion Beams",
         "name" : "Referenced Patient Setup Number",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0008,1010)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Station Name",
         "module" : "General Equipment",
         "req" : "3",
         "desc" : "User defined name identifying the machine that produced the composite instances."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(300a,03a2)[<0>](300a,0314)[<1>](300a,00f9)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "module" : "RT Ion Beams",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "req" : "3",
         "name" : "Accessory Code"
      },
      "(300a,0070)[<0>](300c,0004)" : {
         "name" : "Referenced Beam Sequence",
         "req" : "1C",
         "desc" : [
            "Sequence of treatment beams in current Fraction Group.",
            "One or more items shall be included in this sequence.",
            "Required if Number of Beams (300A,0080) is greater than zero."
         ],
         "module" : "RT Fraction Scheme",
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series",
         "usage" : "M",
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
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Requested Procedure ID"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0142)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Table Top Pitch Rotation Direction",
         "module" : "RT Ion Beams",
         "desc" : [
            [
               "Direction of Table Top Pitch Rotation when viewing the table along the positive X-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. Required for first item of Control Point Sequence, or if Table Top Pitch Rotation Direction changes during Beam. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.8",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.25.6.2"
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
         "req" : "2C"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1155)" : {
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Patient Setup"
      },
      "(300a,0180)[<0>](300a,0410)" : {
         "req" : "3",
         "desc" : [
            "Sequence of Motion Synchronization.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "RT Patient Setup",
         "name" : "Motion Synchronization Sequence",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,0332)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "RT Series",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Study",
         "req" : "1C",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1",
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
         "module" : "RT Series",
         "name" : "Value Type"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01bc)" : {
         "name" : "Setup Device Parameter",
         "desc" : [
            "Setup Parameter for Setup Device in appropriate IEC 61217 coordinate system.",
            "Units shall be mm for distances and degrees for angles."
         ],
         "req" : "2",
         "module" : "RT Patient Setup",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0114)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "module" : "RT Ion Beams",
         "req" : "1C",
         "desc" : "Nominal Beam Energy at control point in MeV per nucleon. Defined at nozzle entrance before all Beam Modifiers. Required for first item of Control Point Sequence, or if Nominal Beam Energy changes during Beam, and KVP (0018,0060) is not present.",
         "name" : "Nominal Beam Energy"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](300a,0402)" : {
         "module" : "RT Patient Setup",
         "desc" : "Comment on the Setup Image.",
         "req" : "3",
         "name" : "Setup Image Comment",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(300a,03a2)[<0>](300a,03a6)[<1>](300a,00f5)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "module" : "RT Ion Beams",
         "desc" : "User-supplied identifier for block tray.",
         "req" : "3",
         "name" : "Block Tray ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this sequence. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.4.10.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "name" : "Content Item Modifier Sequence"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(300a,03a0)[<0>](300a,0043)" : {
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ],
         "module" : "RT Ion Tolerance Tables",
         "desc" : "User-defined label for Tolerance Table.",
         "req" : "3",
         "name" : "Tolerance Table Label"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300c,0050)[<2>](300a,010c)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "module" : "RT Ion Beams",
         "req" : "2",
         "desc" : "Coefficient used to calculate cumulative dose contribution from this Beam to the referenced Dose Reference at the current Control Point.",
         "name" : "Cumulative Dose Reference Coefficient"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "name" : "Coding Scheme Registry",
         "module" : "SOP Common",
         "req" : "1C",
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
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
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
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(300a,03a0)[<0>](300a,0053)" : {
         "module" : "RT Ion Tolerance Tables",
         "req" : "3",
         "desc" : "Maximum permitted difference (in mm) between planned and delivered Table Top Lateral Position.",
         "name" : "Table Top Lateral Position Tolerance",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,012a)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "desc" : [
            "Table Top Lateral position in IEC TABLE TOP coordinate system (mm). Required for first item of Control Point Sequence, or if Table Top Lateral Position changes during Beam. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.6",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "2C",
         "module" : "RT Ion Beams",
         "name" : "Table Top Lateral Position"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300a,0070)[<0>](300c,0050)" : {
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Referenced Dose Reference Sequence",
         "module" : "RT Fraction Scheme",
         "desc" : [
            "Sequence of Dose References for the current Fraction Group.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9170)" : {
         "name" : "Respiratory Motion Compensation Technique",
         "module" : "RT Patient Setup",
         "desc" : [
            "Technique applied to reduce respiratory motion artifacts.",
            {
               "list" : [
                  [
                     "NONE",
                     null
                  ],
                  [
                     "BREATH_HOLD",
                     null
                  ],
                  [
                     "REALTIME",
                     "image acquisition shorter than respiratory cycle"
                  ],
                  [
                     "GATING",
                     "Prospective gating"
                  ],
                  [
                     "TRACKING",
                     "prospective through-plane or in-plane motion tracking"
                  ],
                  [
                     "PHASE_ORDERING",
                     "prospective phase ordering"
                  ],
                  [
                     "PHASE_RESCANNING",
                     "prospective techniques, such as real-time averaging, diminishing variance and motion adaptive gating"
                  ],
                  [
                     "RETROSPECTIVE",
                     "retrospective gating"
                  ],
                  [
                     "CORRECTION",
                     "retrospective image correction"
                  ],
                  [
                     "UNKNOWN",
                     "technique not known"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "req" : "1",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "module" : "Patient",
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
         "req" : "3"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01ba)" : {
         "name" : "Setup Device Description",
         "module" : "RT Patient Setup",
         "desc" : "User-defined description for Setup Device used for patient alignment.",
         "req" : "3",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Operators' Name",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment."
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0120)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "req" : "1C",
         "desc" : "Beam Limiting Device angle, i.e., orientation of IEC BEAM LIMITING DEVICE coordinate system with respect to IEC GANTRY coordinate system (degrees). Required for first item of Control Point Sequence, or if Beam Limiting Device Angle changes during Beam.",
         "module" : "RT Ion Beams",
         "name" : "Beam Limiting Device Angle"
      },
      "(300a,0010)[<0>](300a,002b)" : {
         "name" : "Organ at Risk Limit Dose",
         "module" : "RT Prescription",
         "req" : "3",
         "desc" : "Maximum permitted dose (in Gy) to any part of Dose Reference if Dose Reference Type (300A,0020) is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) is VOLUME.",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Issuer of Accession Number Sequence",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "RT Series"
      },
      "(0008,1111)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced Performed Procedure Step Sequence",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "RT Series"
      },
      "(300a,0070)[<0>](300a,008b)" : {
         "name" : "Beam Dose Meaning",
         "desc" : [
            "Indicates the meaning of Beam Dose (300A,0084).",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "BEAM_LEVEL",
                     "Beam Dose value is individually calculated for this Beam"
                  ],
                  [
                     "FRACTION_LEVEL",
                     "Dose is calculated on the Fraction level, and the value of Beam Dose (300A,0084) is assigned to the Beam to carry a nominally distributed dose only."
                  ]
               ]
            }
         ],
         "req" : "3",
         "module" : "RT Fraction Scheme",
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(0008,1200)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "req" : "1C",
         "module" : "Common Instance Reference"
      },
      "(300a,0070)[<0>](300a,0072)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "module" : "RT Fraction Scheme",
         "desc" : "The user defined description for the fraction group.",
         "req" : "3",
         "name" : "Fraction Group Description"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,0084)" : {
         "name" : "Beam Dose",
         "module" : "RT Fraction Scheme",
         "desc" : "Dose (in Gy) at Beam Dose Specification Point (300A,0082) due to current Beam.",
         "req" : "3",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "name" : "Date",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(300a,0010)[<0>](3006,0084)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U",
         "module" : "RT Prescription",
         "desc" : "Uniquely identifies ROI representing the dose reference specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in Structure Set Module within RT Structure Set in Referenced Structure Set Sequence (300C,0060) in RT General Plan Module. Required if Dose Reference Structure Type (300A,0014) is POINT or VOLUME.",
         "req" : "1C",
         "name" : "Referenced ROI Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "module" : "RT Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0038,0064)" : {
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Service Episode ID Sequence"
      },
      "(300a,03a2)[<0>](0008,0070)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Manufacturer",
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : "Manufacturer of the equipment to be used for beam delivery."
      },
      "(300a,03a2)[<0>](300a,0314)[<1>](300a,0320)" : {
         "req" : "1",
         "desc" : [
            "Type of Range Shifter.",
            {
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "ANALOG",
                     "Device is variable thickness and is composed of opposing sliding wedges, water column or similar mechanism."
                  ],
                  [
                     "BINARY",
                     "Device is composed of different thickness materials that can be moved in or out of the beam in various stepped combinations."
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "RT Ion Beams",
         "name" : "Range Shifter Type",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "RT Series",
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,008c)[<2>](300a,0134)" : {
         "mod_tables" : [
            "table_C.8-49"
         ],
         "entity" : "Plan",
         "usage" : "U",
         "name" : "Cumulative Meterset Weight",
         "desc" : "The cumulative Meterset weight value, at which the beam dose point geometrical parameters apply.",
         "req" : "1",
         "module" : "RT Fraction Scheme"
      },
      "(0010,2293)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Code Sequence",
         "module" : "Patient",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "req" : "2C"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,012e)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Surface Entry Point",
         "desc" : [
            "Patient surface entry point coordinates (x,y,z), along the central axis of the beam, in the patient based coordinate system described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               }
            },
            " (mm)."
         ],
         "req" : "3",
         "module" : "RT Ion Beams"
      },
      "(300a,0070)[<0>](300c,000a)" : {
         "name" : "Referenced Brachy Application Setup Sequence",
         "module" : "RT Fraction Scheme",
         "req" : "1C",
         "desc" : "Sequence of treatment Brachy Application Setups in current Fraction Group. Required if Number of Brachy Application Setups (300A,00A0) is greater than zero. One or more items shall be included in this sequence.",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(300a,03a2)[<0>](300a,03a6)[<1>](300a,00f7)" : {
         "req" : "1",
         "desc" : [
            "Isocenter to downstream edge of block tray (mm). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.4",
                  "xrefstyle" : "select: label"
               }
            }
         ],
         "module" : "RT Ion Beams",
         "name" : "Isocenter to Block Tray Distance",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0196)" : {
         "req" : "3",
         "desc" : "User-defined description of Fixation Device.",
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Description",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(300a,0180)[<0>](300a,0401)" : {
         "name" : "Referenced Setup Image Sequence",
         "module" : "RT Patient Setup",
         "desc" : [
            "Sequence of setup verification images for this patient setup.",
            "One or more items are permitted in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.12.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "req" : "3",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,002b)" : {
         "name" : "Organ at Risk Limit Dose",
         "module" : "RT Fraction Scheme",
         "desc" : "Maximum permitted dose (in Gy) to any part of Dose Reference if Dose Reference Type (300A,0020) of referenced Dose Reference is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) of referenced Dose Reference is VOLUME.",
         "req" : "3",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
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
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,1060)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Names of the physician(s) reading the Study.",
         "req" : "3",
         "module" : "General Study",
         "name" : "Name of Physician(s) Reading Study"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0199)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "module" : "RT Patient Setup",
         "desc" : "The Fixation Device Pitch Angle, i.e., orientation of PITCHED FIXATION DEVICE coordinate system with respect to IEC PATIENT SUPPORT coordinate system (degrees). Pitching is the rotation around IEC PATIENT SUPPORT X-axis.",
         "req" : "3",
         "name" : "Fixation Device Pitch Angle"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,039a)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Number of Paintings",
         "module" : "RT Ion Beams",
         "desc" : "The number of times the scan pattern given by Scan Spot Position Map (300A,0394) and Scan Spot Meterset Weights (300A,0396) shall be applied at the current control point. To obtain the Meterset weight per painting, the values in the Scan Spot Meterset Weights (300A,0396) should be divided by the value of this attribute. Required if Scan Mode (300A,0308) is MODULATED.",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "RT Series"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0021)" : {
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Constraint Weight",
         "module" : "RT Fraction Scheme",
         "desc" : "Relative importance of satisfying constraint, where high values represent more important constraints.",
         "req" : "3"
      },
      "(300a,0010)[<0>](300a,0025)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "module" : "RT Prescription",
         "desc" : "Minimum permitted dose (in Gy) to Dose Reference if Dose Reference Type (300A,0020) is TARGET.",
         "req" : "3",
         "name" : "Target Minimum Dose"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "UID",
         "module" : "RT Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
         "req" : "1",
         "name" : "Signature"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
         "req" : "3",
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
         "name" : "Date of Last Calibration",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0251)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "req" : "3",
         "name" : "Performed Procedure Step End Time"
      },
      "(0008,0201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M",
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
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetdoc" : "PS3.5"
                                       }
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
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
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
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "module" : "SOP Common",
         "name" : "Timezone Offset From UTC"
      },
      "(0008,0013)" : {
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "name" : "Instance Creation Time"
      },
      "(fffa,fffa)" : {
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Digital Signatures Sequence"
      },
      "(300a,03a2)[<0>](300a,03aa)[<1>](300a,00d2)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : "Identification number of the Wedges. The value of Wedge Number (300A,00D2) shall be unique within the Beam in which it was created.",
         "name" : "Wedge Number"
      },
      "(300a,03a0)[<0>](300a,0044)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ],
         "name" : "Gantry Angle Tolerance",
         "module" : "RT Ion Tolerance Tables",
         "desc" : "Maximum permitted difference (in degrees) between planned and delivered Gantry Angle.",
         "req" : "3"
      },
      "(0008,0070)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Manufacturer",
         "module" : "General Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "req" : "2"
      },
      "(0010,0040)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
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
         "req" : "2",
         "name" : "Patient's Sex"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,03a2)[<0>](300a,0342)[<1>](300a,034a)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Range Modulator Description",
         "module" : "RT Ion Beams",
         "desc" : "User-defined description of Range Modulator.",
         "req" : "3"
      },
      "(300a,0010)[<0>](300a,0020)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U",
         "name" : "Dose Reference Type",
         "desc" : [
            "Type of Dose Reference.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "TARGET",
                     "treatment target (corresponding to GTV, PTV, or CTV in ICRU50)"
                  ],
                  [
                     "ORGAN_AT_RISK",
                     "Organ at Risk (as defined in ICRU50)"
                  ]
               ]
            }
         ],
         "req" : "1",
         "module" : "RT Prescription"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "module" : "General Study",
         "req" : "3",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(300a,03a2)[<0>](300a,02e3)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "req" : "3",
         "desc" : "Water-Equivalent thickness of the compensator tray (in mm) parallel to radiation beam axis.",
         "module" : "RT Ion Beams",
         "name" : "Total Compensator Tray Water-Equivalent Thickness"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "module" : "RT Series"
      },
      "(300a,03a2)[<0>](300a,0420)[<1>](300a,0421)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "General Accessory ID",
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : "User or machine supplied identifier for General Accessory."
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,014a)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Gantry Pitch Angle",
         "module" : "RT Ion Beams",
         "req" : "2C",
         "desc" : [
            "Gantry Pitch Angle of the radiation source, i.e., the rotation of the IEC GANTRY coordinate system about the X-axis of the IEC GANTRY coordinate system (degrees). Required for first item of Control Point Sequence, or if Gantry Pitch Rotation Angle changes during Beam. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(300a,03a2)[<0>](300a,03aa)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "req" : "1C",
         "desc" : [
            "Sequence of treatment wedges.",
            "Required if Number of Wedges (300A,00D0) is non-zero.",
            "The number of items shall be identical to the value of Number of Wedges (300A,00D0)."
         ],
         "module" : "RT Ion Beams",
         "name" : "Ion Wedge Sequence"
      },
      "(300a,03a2)[<0>](300a,03a6)[<1>](300a,00f8)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Block Type",
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : [
            [
               "Type of block. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.4",
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
                     "SHIELDING",
                     "blocking material is inside contour"
                  ],
                  [
                     "APERTURE",
                     "blocking material is outside contour"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(300a,03a2)[<0>](300a,00b3)" : {
         "name" : "Primary Dosimeter Unit",
         "module" : "RT Ion Beams",
         "desc" : [
            "Measurement unit of machine dosimeter.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "MU",
                     "Monitor Unit"
                  ],
                  [
                     "NP",
                     "number of particles"
                  ]
               ]
            }
         ],
         "req" : "1",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence"
      },
      "(0012,0062)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Identity Removed",
         "module" : "Patient",
         "req" : "3",
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
         ]
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,011a)[<2>](300a,011c)" : {
         "req" : "1",
         "desc" : [
            "Positions of beam limiting device (collimator) leaf (element) or jaw pairs (in mm) in IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), e.g., X-axis for MLCX, Y-axis for MLCY. Contains 2N values, where N is the Number of Leaf/Jaw Pairs (300A,00BC) in Ion Beam Limiting Device Sequence (300A,03A4). Values shall be listed in IEC leaf (element) subscript order 101, 102, \u2026 1N, 201, 202, \u2026 2N. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.3"
               }
            },
            "."
         ],
         "module" : "RT Ion Beams",
         "name" : "Leaf/Jaw Positions",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1",
            "table_C.8.8.27-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,0010)[<0>](300a,0022)" : {
         "name" : "Delivery Warning Dose",
         "req" : "3",
         "desc" : "The dose (in Gy) that when reached or exceeded should cause some action to be taken.",
         "module" : "RT Prescription",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,0420)[<1>](300a,0423)" : {
         "name" : "General Accessory Type",
         "desc" : [
            "Specifies the type of accessory.",
            {
               "list" : [
                  [
                     "GRATICULE",
                     "Accessory tray with a radio-opaque grid"
                  ],
                  [
                     "IMAGE_DETECTOR",
                     "Image acquisition device positioned in the beam line"
                  ],
                  [
                     "RETICLE",
                     "Accessory tray with radio-transparent markers or grid"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "req" : "3",
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0028)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "req" : "3",
         "desc" : "Maximum permitted fraction (in percent) of Target to receive less than the Target Prescription Dose (300A,0027) if Dose Reference Type (300A,0020) of referenced Dose Reference is TARGET and Dose Reference Structure Type (300A,0014) of referenced Dose Reference is VOLUME.",
         "module" : "RT Fraction Scheme",
         "name" : "Target Underdose Volume Fraction"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(300a,03a2)[<0>](300a,03aa)[<1>](300a,00f9)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Accessory Code",
         "module" : "RT Ion Beams",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "req" : "3"
      },
      "(300a,03a2)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "module" : "RT Ion Beams",
         "desc" : "Mailing address of the institution where the equipment is located that is to be used for beam delivery.",
         "req" : "3",
         "name" : "Institution Address"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1150)" : {
         "module" : "RT Patient Setup",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "U"
      },
      "(300a,000c)" : {
         "name" : "RT Plan Geometry",
         "req" : "1",
         "desc" : [
            [
               "Describes whether RT Plan is based on patient or treatment device geometry. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.9.1"
                  }
               },
               "."
            ],
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "PATIENT",
                     "RT Structure Set exists"
                  ],
                  [
                     "TREATMENT_DEVICE",
                     "RT Structure Set does not exist"
                  ]
               ]
            }
         ],
         "module" : "RT General Plan",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "usage" : "M"
      },
      "(0012,0020)" : {
         "name" : "Clinical Trial Protocol ID",
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
         ],
         "req" : "1",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0012,0042)" : {
         "req" : "1C",
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
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0380)[<2>](300a,0384)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Range Modulator Gating Stop Value",
         "req" : "1C",
         "desc" : "Stop position defines the range modulator position at which the beam is switched off. Required if Range Modulator Type (300A,0348) of the range modulator referenced by Referenced Range Modulator Number (300C,0104) is WHL_MODWEIGHTS or WHL_FIXEDWEIGHTS",
         "module" : "RT Ion Beams"
      },
      "(300a,0070)[<0>](300c,000a)[<1>](300c,000c)" : {
         "mod_tables" : [
            "table_C.8-49"
         ],
         "entity" : "Plan",
         "usage" : "U",
         "desc" : "Uniquely identifies Brachy Application Setup specified by Brachy Application Setup Number (300A,0234) within Brachy Application Setup Sequence (300A,0230) in RT Brachy Application Setups Module.",
         "req" : "1",
         "module" : "RT Fraction Scheme",
         "name" : "Referenced Brachy Application Setup Number"
      },
      "(300a,03a2)[<0>](300a,0107)[<1>](300a,0109)" : {
         "name" : "Applicator Type",
         "module" : "RT Ion Beams",
         "desc" : [
            "Type of applicator.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "ION_SQUARE",
                     "square ion applicator"
                  ],
                  [
                     "ION_RECT",
                     "rectangular ion applicator"
                  ],
                  [
                     "ION_CIRC",
                     "circular ion applicator"
                  ],
                  [
                     "ION_SHORT",
                     "short ion applicator"
                  ],
                  [
                     "ION_OPEN",
                     "open (dummy) ion applicator"
                  ],
                  [
                     "INTRAOPERATIVE",
                     "intraoperative (custom) applicator"
                  ],
                  [
                     "STEREOTACTIC",
                     "stereotactic applicator"
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "req" : "1",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
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
         "req" : "3",
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,1040)" : {
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "module" : "General Equipment",
         "name" : "Institutional Department Name"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "desc" : "Person's mailing address",
         "req" : "3",
         "name" : "Person's Address",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "name" : "Referenced Series Sequence"
      },
      "(0008,1115)" : {
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "req" : "1C",
         "module" : "Common Instance Reference",
         "name" : "Referenced Series Sequence"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,019a)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Fixation Device Roll Angle",
         "module" : "RT Patient Setup",
         "desc" : "The Fixation Device Roll Angle, i.e., orientation of ROLLED FIXATION DEVICE coordinate system with respect to IEC PITCHED FIXATION DEVICE coordinate system (degrees). Rolling is the rotation around IEC PATIENT SUPPORT Y-axis.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "module" : "RT Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,008c)" : {
         "name" : "Beam Dose Verification Control Point Sequence",
         "desc" : [
            "Sequence of Items containing Beam Dose Verification Control Points.",
            "Two or more items may be included in this sequence."
         ],
         "req" : "3",
         "module" : "RT Fraction Scheme",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,0342)[<1>](300a,034c)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Beam Current Modulation ID",
         "desc" : "User-supplied identifier for the beam current modulation pattern. Required if Range Modulator Type (300A,0348) is WHL_MODWEIGHTS",
         "req" : "1C",
         "module" : "RT Ion Beams"
      },
      "(300a,03a2)[<0>](300a,0342)[<1>](300a,0348)" : {
         "module" : "RT Ion Beams",
         "desc" : [
            "Type of Range Modulator.",
            {
               "list" : [
                  [
                     "FIXED",
                     "fixed modulation width and weights using ridge filter or constant speed wheel with constant beam current"
                  ],
                  [
                     "WHL_FIXEDWEIGHTS",
                     "selected wheel/track (Range Modulator ID) is spinning at constant speed. Modulation width is adjusted by switching constant beam current on and off at wheel steps indicated by Range Modulator Gating Values."
                  ],
                  [
                     "WHL_MODWEIGHTS",
                     "selected wheel/track (Range Modulator ID) is spinning at constant speed. Weight per wheel step is adjusted by modulating beam current according to selected Beam Current Modulation ID (300A,034C)."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Only one item in the Range Modulator Sequence (300A,0342) can have a Range Modulator Type (300A,0348) of WHL_MODWEIGHTS."
         ],
         "req" : "1",
         "name" : "Range Modulator Type",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "req" : "3",
         "name" : "Coding Scheme Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "DateTime",
         "module" : "RT Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C"
      },
      "(0008,1070)" : {
         "module" : "RT Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "req" : "2",
         "name" : "Operators' Name",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference",
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "usage" : "U",
         "name" : "Distribution Type",
         "module" : "Clinical Trial Study",
         "req" : "1C",
         "desc" : [
            "The type of distribution for which consent to distribute has been granted.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
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
         ]
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9171)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "1",
         "desc" : [
            "Signal source from which respiratory motion is derived.",
            {
               "list" : [
                  [
                     "NONE",
                     null
                  ],
                  [
                     "BELT",
                     null
                  ],
                  [
                     "NASAL_PROBE",
                     null
                  ],
                  [
                     "CO2_SENSOR",
                     null
                  ],
                  [
                     "NAVIGATOR",
                     "MR navigator and organ edge detection"
                  ],
                  [
                     "MR_PHASE",
                     "phase (of center k-space line)"
                  ],
                  [
                     "ECG",
                     "baseline demodulation of the ECG"
                  ],
                  [
                     "SPIROMETER",
                     "Signal derived from flow sensor"
                  ],
                  [
                     "EXTERNAL_MARKER",
                     "Signal determined from external motion surrogate"
                  ],
                  [
                     "INTERNAL_MARKER",
                     "Signal determined from internal motion surrogate"
                  ],
                  [
                     "IMAGE",
                     "Signal derived from an image"
                  ],
                  [
                     "UNKNOWN",
                     "Signal source not known"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "module" : "RT Patient Setup",
         "name" : "Respiratory Signal Source"
      },
      "(300c,0080)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-45",
            "table_10-11"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT General Plan",
         "name" : "Referenced SOP Instance UID"
      },
      "(300a,03a2)[<0>](300a,0330)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Number of Lateral Spreading Devices",
         "desc" : "Number of lateral spreading devices associated with current beam.",
         "req" : "1",
         "module" : "RT Ion Beams"
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0018,1000)" : {
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Device Serial Number",
         "module" : "General Equipment",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "3"
      },
      "(300a,03a2)[<0>](300a,03a4)" : {
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : [
            "Sequence of beam limiting device (collimator) jaw or leaf (element) sets.",
            "One or more items are permitted in this sequence."
         ],
         "name" : "Ion Beam Limiting Device Sequence",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a2)[<0>](300a,03a4)[<1>](300a,00bb)" : {
         "module" : "RT Ion Beams",
         "req" : "2",
         "desc" : [
            "Isocenter to beam limiting device (collimator) distance (in mm) of the equipment that is to be used for beam delivery.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.25.4"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Isocenter to Beam Limiting Device Distance",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "req" : "1",
         "desc" : "Identification number of an animal within the registry.",
         "module" : "Patient",
         "name" : "Breed Registration Number",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,0200)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3",
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
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "name" : "Quality Control Subject"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0360)[<2>](300c,0100)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "desc" : "Uniquely references Range Shifter described by Range Shifter Number (300A,0316) in Range Shifter Sequence (300A,0314).",
         "req" : "1",
         "module" : "RT Ion Beams",
         "name" : "Referenced Range Shifter Number"
      },
      "(300a,03a2)[<0>](300a,0332)[<1>](300a,0336)" : {
         "desc" : "User or machine supplied identifier for Lateral Spreading Device.",
         "req" : "1",
         "module" : "RT Ion Beams",
         "name" : "Lateral Spreading Device ID",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0360)[<2>](300a,0362)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "req" : "1",
         "desc" : [
            "Machine specific setting attribute for the range shifter. The specific encoding of this value should be documented in a Conformance Statement. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "RT Ion Beams",
         "name" : "Range Shifter Setting"
      },
      "(0010,2180)" : {
         "name" : "Occupation",
         "req" : "3",
         "desc" : "Occupation of the Patient.",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "module" : "General Study",
         "name" : "Institution Address"
      },
      "(0008,1049)" : {
         "name" : "Physician(s) of Record Identification Sequence",
         "module" : "General Study",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,0010)[<0>](300a,0013)" : {
         "name" : "Dose Reference UID",
         "desc" : "A unique identifier for a Dose Reference that can be used to link the same entity across multiple RT Plan objects.",
         "req" : "3",
         "module" : "RT Prescription",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-46"
         ]
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,02e8)" : {
         "name" : "Compensator Milling Tool Diameter",
         "desc" : "The diameter (in mm) of the milling tool to be used to create the compensator. The diameter is expressed as the actual physical size and not a projected size at isocenter.",
         "req" : "3",
         "module" : "RT Ion Beams",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0012,0051)" : {
         "name" : "Clinical Trial Time Point Description",
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
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0380)[<2>](300a,0382)" : {
         "name" : "Range Modulator Gating Start Value",
         "req" : "1C",
         "desc" : "Start position defines the range modulator position at which the beam is switched on. Required if Range Modulator Type (300A,0348) of the range modulator referenced by Referenced Range Modulator Number (300C,0104) is WHL_MODWEIGHTS or WHL_FIXEDWEIGHTS",
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,0010)[<0>](300a,0021)" : {
         "name" : "Constraint Weight",
         "module" : "RT Prescription",
         "desc" : "Relative importance of satisfying constraint, where high values represent more important constraints.",
         "req" : "3",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,03ac)[<2>](300a,00db)" : {
         "module" : "RT Ion Beams",
         "desc" : [
            "Closest distance from the central axis of the beam along a wedge axis to the thin edge as projected to the machine isocentric plane (mm). Value is positive is the wedge does not cover the central axis, negative if it does. Required if Wedge Type (300A,00D3) of the wedge referenced by Referenced Wedge Number (300C,00C0) is PARTIAL_STANDARD or PARTIAL_MOTORIZ. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1C",
         "name" : "Wedge Thin Edge Position",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300e,0002)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-52"
         ],
         "usage" : "U",
         "name" : "Approval Status",
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
         "req" : "1",
         "module" : "Approval"
      },
      "(300c,0002)" : {
         "name" : "Referenced RT Plan Sequence",
         "module" : "RT General Plan",
         "desc" : [
            "Related instances of RT Plan.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "usage" : "M"
      },
      "(300a,03a0)" : {
         "name" : "Ion Tolerance Table Sequence",
         "desc" : [
            "Sequence of ion tolerance tables to be used for delivery of treatment plan.",
            "One or more items shall be included in this sequence.",
            "See Note 1."
         ],
         "req" : "1",
         "module" : "RT Ion Tolerance Tables",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ]
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300c,0050)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : [
            "Introduces a sequence of Dose References for current Beam.",
            "One or more items are permitted in this sequence."
         ],
         "name" : "Referenced Dose Reference Sequence"
      },
      "(300a,03a2)[<0>](300a,0356)" : {
         "name" : "Fixation Light Azimuthal Angle",
         "module" : "RT Ion Beams",
         "desc" : [
            "Azimuthal angle (degrees) of the fixation light coordinate around IEC BEAM LIMITING DEVICE Y-axis. Used for eye treatments. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "module" : "General Study"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence"
      },
      "(0008,0014)" : {
         "name" : "Instance Creator UID",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "req" : "3",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(300a,03a2)[<0>](300a,03a4)[<1>](300a,00be)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "req" : "1C",
         "desc" : [
            "Boundaries of beam limiting device (collimator) leaves (in mm) in IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), i.e., X-axis for MLCY, Y-axis for MLCX.",
            [
               "Contains N+1 values, where N is the Number of Leaf/Jaw Pairs (300A,00BC), starting from Leaf (Element) Pair 1. Required if RT Beam Limiting Device Type (300A,00B8) is MLCX or MLCY. May be present otherwise. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.25.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "RT Ion Beams",
         "name" : "Leaf Position Boundaries"
      },
      "(300a,0003)" : {
         "module" : "RT General Plan",
         "req" : "3",
         "desc" : "User-defined name for treatment plan.",
         "name" : "RT Plan Name",
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45"
         ]
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0390)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "module" : "RT Ion Beams",
         "desc" : "User-supplied or machine code identifier for machine configuration to produce beam spot. This may be the nominal spot size or some other machine specific value. Required if Scan Mode (300A,0308) is MODULATED.",
         "req" : "1C",
         "name" : "Scan Spot Tune ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "module" : "RT Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "name" : "Time",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(300a,0070)[<0>](300c,0080)[<1>](0008,1155)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Fraction Scheme"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0398)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "req" : "3",
         "desc" : "The Scanning Spot Size as calculated using the Full Width Half Maximum (FWHM). Specified by a numeric pair - the size measured in air at isocenter in IEC GANTRY X direction followed by the size in the IEC GANTRY Y direction (mm).",
         "module" : "RT Ion Beams",
         "name" : "Scanning Spot Size"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
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
         "module" : "RT Series",
         "name" : "Referenced Frame Number"
      },
      "(0020,0011)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series",
         "desc" : "A number that identifies this series.",
         "req" : "2",
         "name" : "Series Number"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0400,0561)" : {
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Original Attributes Sequence"
      },
      "(300a,03a2)[<0>](300a,010e)" : {
         "name" : "Final Cumulative Meterset Weight",
         "req" : "1C",
         "desc" : [
            "Value of Cumulative Meterset Weight (300A,0134) for final Control Point in Ion Control Point Sequence (300A,03A8). Required if Cumulative Meterset Weight is non-null in Control Points specified within Ion Control Point Sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.1"
               }
            },
            "."
         ],
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0400,0500)" : {
         "name" : "Encrypted Attributes Sequence",
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
         "module" : "SOP Common",
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "module" : "SOP Common",
         "req" : "3",
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
         ]
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "req" : "3",
         "module" : "RT Series",
         "name" : "Scheduled Procedure Step Description",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Requested Procedure Description",
         "module" : "RT Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "req" : "3"
      },
      "(300a,0010)[<0>](300a,002d)" : {
         "name" : "Organ at Risk Overdose Volume Fraction",
         "module" : "RT Prescription",
         "req" : "3",
         "desc" : "Maximum permitted fraction (in percent) of the Organ at Risk to receive more than the Organ at Risk Maximum Dose if Dose Reference Type (300A,0020) is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) is VOLUME.",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "module" : "General Equipment"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "name" : "Digital Signature UID",
         "module" : "SOP Common",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1"
      },
      "(0040,1012)" : {
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ]
                  },
                  "\n                  "
               ]
            },
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Reason For Performed Procedure Code Sequence"
      },
      "(300a,0070)[<0>](300a,0079)" : {
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "desc" : "Number of digits in Fraction Pattern (300A,007B) used to represent one day. See Note 2.",
         "req" : "3",
         "module" : "RT Fraction Scheme",
         "name" : "Number of Fraction Pattern Digits Per Day"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0192)" : {
         "name" : "Fixation Device Type",
         "module" : "RT Patient Setup",
         "req" : "1",
         "desc" : [
            "Type of Fixation Device used during in Patient Setup.",
            {
               "title" : "Defined Terms:",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0028,0303)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Longitudinal Temporal Information Modified",
         "module" : "SOP Common",
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
                     "targetptr" : "PS3.15",
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "req" : "3"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0146)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "module" : "RT Ion Beams",
         "desc" : [
            [
               "Direction of Table Top Roll Rotation when viewing the table along the positive Y-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. Required for first item of Control Point Sequence, or if Table Top Roll Rotation Direction changes during Beam. See ",
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
                     "no rotation."
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "2C",
         "name" : "Table Top Roll Rotation Direction"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content Transfer Syntax UID",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(300a,03a2)[<0>](300a,0332)[<1>](300a,0338)" : {
         "name" : "Lateral Spreading Device Type",
         "req" : "1",
         "desc" : [
            "Type of Lateral Spreading Device.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "SCATTERER",
                     "metal placed into the beam path to scatter charged particles laterally."
                  ],
                  [
                     "MAGNET",
                     "nozzle configuration of magnet devices to expand beam laterally."
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "module" : "RT Ion Beams",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,0314)" : {
         "desc" : [
            "Sequence of range shifters associated with Beam.",
            "Required if Number of Range Shifters (300A,0312) is non-zero.",
            "The number of items shall be identical to the value of Number of Range Shifters (300A,0312)."
         ],
         "req" : "1C",
         "module" : "RT Ion Beams",
         "name" : "Range Shifter Sequence",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Series",
         "name" : "Referenced Segment Number"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,03a0)[<0>](300a,0050)" : {
         "name" : "Table Top Roll Angle Tolerance",
         "module" : "RT Ion Tolerance Tables",
         "req" : "3",
         "desc" : "Maximum permitted difference (in degrees) between planned and delivered Table Top Roll Angle.",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ],
         "usage" : "U"
      },
      "(0040,0260)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Performed Protocol Code Sequence",
         "req" : "3",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "module" : "RT Series"
      },
      "(300a,0070)[<0>](300c,0080)" : {
         "desc" : [
            "Related instances of RT Dose (for grids, isodose curves and named/unnamed point doses).",
            "One or more items are permitted in this sequence.",
            "See Note 1."
         ],
         "req" : "3",
         "module" : "RT Fraction Scheme",
         "name" : "Referenced Dose Sequence",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0022)" : {
         "desc" : "The dose (in Gy) that when reached or exceeded should cause some action to be taken.",
         "req" : "3",
         "module" : "RT Fraction Scheme",
         "name" : "Delivery Warning Dose",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
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
         "module" : "RT Series",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(300a,0070)[<0>](300c,000a)[<1>](300a,00a4)" : {
         "module" : "RT Fraction Scheme",
         "desc" : "Dose (in Gy) at Brachy Application Setup Dose Specification Point (300A,00A2) due to current Brachy Application Setup.",
         "req" : "3",
         "name" : "Brachy Application Setup Dose",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,03ac)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "req" : "1C",
         "desc" : [
            "Sequence of Wedge positions for current control point.",
            "Required for first item of Ion Control Point Sequence if Number of Wedges (300A,00D0) is non-zero, and in subsequent control points if Wedge Position (300A,0118) or Wedge Thin Edge Position (300A,00DB) changes during beam.",
            "The number of items shall be identical to the value of Number of Wedges (300A,00D0)."
         ],
         "module" : "RT Ion Beams",
         "name" : "Ion Wedge Position Sequence"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0148)" : {
         "req" : "3",
         "desc" : [
            "Angle (in degrees) of the head fixation for eye treatments with respect to the Table Top Pitch Angle (300A,0140) coordinate system. Positive head fixation angle is the same direction as positive Table Top pitch. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "RT Ion Beams",
         "name" : "Head Fixation Angle",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "SOP Common"
      },
      "(300a,03a2)[<0>](300a,0420)[<1>](300a,00f9)" : {
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : "Machine-readable identifier for this accessory",
         "name" : "Accessory Code",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,00e1)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "desc" : "User-supplied identifier for material used to manufacture Compensator.",
         "req" : "2",
         "module" : "RT Ion Beams",
         "name" : "Material ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "name" : "Numeric Value",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "name" : "Time of Last Calibration",
         "module" : "SOP Common",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(300a,0180)" : {
         "name" : "Patient Setup Sequence",
         "desc" : [
            "Sequence of patient setup data for current plan.",
            "One or more items shall be included in this sequence."
         ],
         "req" : "1",
         "module" : "RT Patient Setup",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,0352)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1",
            "table_C.8.8.28-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Patient Support ID",
         "desc" : "User-specified identifier for manufacturer specific patient support devices.",
         "req" : "3",
         "module" : "RT Ion Beams"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Referenced Study Sequence",
         "module" : "RT Series",
         "req" : "3",
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
      "(300a,03a2)[<0>](300a,030c)[<1>](300a,030f)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Snout ID",
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : "User or machine supplied identifier for Snout."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence"
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,02e0)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Compensator Divergence",
         "module" : "RT Ion Beams",
         "desc" : [
            "Indicates presence or absence of geometrical divergence of the range compensator.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "PRESENT",
                     "the range compensator is shaped according to the beam geometrical divergence."
                  ],
                  [
                     "ABSENT",
                     "the range compensator is not shaped according to the beam geometrical divergence."
                  ]
               ]
            }
         ],
         "req" : "1"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "RT Series",
         "name" : "Time",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300c,0050)[<2>](300c,0051)" : {
         "name" : "Referenced Dose Reference Number",
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module.",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : "Institution where the equipment is located that is to be used for beam delivery.",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a2)[<0>](300a,03a6)[<1>](300a,00fe)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "module" : "RT Ion Beams",
         "desc" : "User-defined name for block.",
         "req" : "3",
         "name" : "Block Name"
      },
      "(0008,0021)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M",
         "desc" : "Date the Series started.",
         "req" : "3",
         "module" : "RT Series",
         "name" : "Series Date"
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,00ec)" : {
         "name" : "Compensator Thickness Data",
         "req" : "1",
         "desc" : "A data stream of the pixel samples that comprise the range compensator, expressed as physical thickness (in mm), either parallel to radiation beam axis if Compensator Divergence (300A,02E0) equals ABSENT, or divergent according to the beam geometrical divergence if Compensator Divergence (300A,02E0) equals PRESENT. The order of pixels sent is left to right, top to bottom (upper left pixel, followed by the remainder of row 1, followed by the remainder of the rows).",
         "module" : "RT Ion Beams",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "name" : "UID",
         "module" : "RT Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(300a,000b)" : {
         "req" : "3",
         "desc" : "Planned treatment sites.",
         "module" : "RT General Plan",
         "name" : "Treatment Sites",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(300a,03a2)[<0>](300a,03a4)[<1>](300a,00bc)" : {
         "name" : "Number of Leaf/Jaw Pairs",
         "desc" : "Number of leaf (element) or jaw pairs (equal to 1 for standard beam limiting device jaws).",
         "req" : "1",
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0100,0424)" : {
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "name" : "SOP Authorization Comment",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b8)" : {
         "module" : "RT Patient Setup",
         "desc" : "User-defined label for Setup Device used for patient alignment.",
         "req" : "2",
         "name" : "Setup Device Label",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(300c,0060)" : {
         "mod_tables" : [
            "table_C.8-45"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "name" : "Referenced Structure Set Sequence",
         "module" : "RT General Plan",
         "req" : "1C",
         "desc" : [
            "The RT Structure Set on which the RT Plan is based.",
            "Only a single item shall be included in this sequence.",
            "Required if RT Plan Geometry (300A,000C) is PATIENT."
         ]
      },
      "(0010,2203)" : {
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Sex Neutered",
         "desc" : [
            "Whether or not a procedure has been performed in an effort to render the patient sterile.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
         "req" : "2C",
         "module" : "Patient Study"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0027)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Target Maximum Dose",
         "module" : "RT Fraction Scheme",
         "desc" : "Maximum permitted dose (in Gy) to Dose Reference if Dose Reference Type (300A,0020) of referenced Dose Reference is TARGET.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Referenced SOP Sequence"
      },
      "(0100,0426)" : {
         "req" : "3",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "name" : "Authorization Equipment Certification Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Series"
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,02e5)" : {
         "module" : "RT Ion Beams",
         "desc" : "The offset distance (in mm) applied to the x coordinate of Compensator Position (300A,00EA) for even numbered rows. Required if the compensator pattern is hexagonal.",
         "req" : "1C",
         "name" : "Compensator Column Offset",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Digital Signature DateTime"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0122)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "desc" : "Patient Support angle, i.e., orientation of IEC PATIENT SUPPORT (turntable) coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees). Required for first item of Control Point Sequence, or if Patient Support Angle changes during Beam.",
         "req" : "1C",
         "module" : "RT Ion Beams",
         "name" : "Patient Support Angle"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0023)" : {
         "module" : "RT Fraction Scheme",
         "desc" : "The maximum dose (in Gy) that can be delivered to the dose reference.",
         "req" : "3",
         "name" : "Delivery Maximum Dose",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0025)" : {
         "module" : "RT Fraction Scheme",
         "desc" : "Minimum permitted dose (in Gy) to Dose Reference if Dose Reference Type (300A,0020) of referenced Dose Reference is TARGET.",
         "req" : "3",
         "name" : "Target Minimum Dose",
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Identifier Type Code)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0028,0120)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
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
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
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
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
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
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
         ],
         "req" : "1C",
         "name" : "Pixel Padding Value"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,008c)[<2>](300a,008f)" : {
         "req" : "2C",
         "desc" : [
            "Average Source to patient surface distance in mm along a ray from the source to the dose point specified by the Beam Dose Specification Point (300A,0082) from the current Beam Dose Verification Control Point to the next one.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.13.1.2",
                     "xrefstyle" : "select: label"
                  }
               }
            ],
            "Required for all but the last items in that sequence."
         ],
         "module" : "RT Fraction Scheme",
         "name" : "Average Beam Dose Point SSD",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "RT Series",
         "name" : "Date",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,00e4)" : {
         "name" : "Compensator Number",
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : "Identification number of the Compensator. The value of Compensator Number (300A,00E4) shall be unique within the Beam in which it is created.",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Rational Denominator Value"
      },
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "name" : "SOP Authorization DateTime"
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,00e8)" : {
         "name" : "Compensator Columns",
         "req" : "1",
         "desc" : "Number of columns in the range compensator. A column is defined to be in the Y direction of the IEC Beam Limiting Device Coordinate system.",
         "module" : "RT Ion Beams",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "RT Series",
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0012,0083)" : {
         "name" : "Consent for Clinical Trial Use Sequence",
         "module" : "Clinical Trial Study",
         "req" : "3",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial use of the composite instances within this Study.",
            "One or more Items are permitted in this sequence.",
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
            ]
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U"
      },
      "(0018,1201)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
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
         "name" : "Time of Last Calibration"
      },
      "(0012,0060)" : {
         "module" : "Clinical Trial Series",
         "req" : "2",
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
         "name" : "Clinical Trial Coordinating Center Name",
         "usage" : "U",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0008,0031)" : {
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Time the Series started.",
         "name" : "Series Time",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "name" : "Institution Address",
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(300a,03a2)[<0>](300a,03a6)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "req" : "1C",
         "desc" : [
            "Sequence of blocks associated with Beam.",
            "Required if Number of Blocks (300A,00F0) is non-zero.",
            "The number of items shall be identical to the value of Number of Blocks (300A,00F0)."
         ],
         "module" : "RT Ion Beams",
         "name" : "Ion Block Sequence"
      },
      "(300a,0010)[<0>](300a,0014)" : {
         "name" : "Dose Reference Structure Type",
         "req" : "1",
         "desc" : [
            "Structure type of Dose Reference.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "POINT",
                     "dose reference point specified as ROI"
                  ],
                  [
                     "VOLUME",
                     "dose reference volume specified as ROI"
                  ],
                  [
                     "COORDINATES",
                     "point specified by Dose Reference Point Coordinates (300A,0018)"
                  ],
                  [
                     "SITE",
                     "dose reference clinical site"
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "module" : "RT Prescription",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-46"
         ]
      },
      "(300a,03a2)[<0>](300a,0314)[<1>](300a,0322)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "desc" : "User defined description of Range Shifter.",
         "req" : "3",
         "module" : "RT Ion Beams",
         "name" : "Range Shifter Description"
      },
      "(0018,1200)" : {
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Date of Last Calibration",
         "req" : "3",
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
         "module" : "General Equipment"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,00f9)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Plan",
         "usage" : "U",
         "module" : "RT Patient Setup",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "req" : "3",
         "name" : "Accessory Code"
      },
      "(300a,03a2)[<0>](300a,030c)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "desc" : [
            "Sequence of Snouts associated with Beam.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "RT Ion Beams",
         "name" : "Snout Sequence"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,0086)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "name" : "Beam Meterset",
         "module" : "RT Fraction Scheme",
         "req" : "3",
         "desc" : "Machine setting to be delivered for current Beam, specified in Monitor Units (MU) or minutes as defined by Primary Dosimeter Unit (300A,00B3) (in RT Beams Module) for referenced Beam. See Note 4."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "RT Series"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b6)" : {
         "module" : "RT Patient Setup",
         "req" : "1",
         "desc" : [
            "Type of Setup Device used for Patient alignment.",
            {
               "list" : [
                  [
                     "LASER_POINTER",
                     null
                  ],
                  [
                     "DISTANCE_METER",
                     null
                  ],
                  [
                     "TABLE_HEIGHT",
                     null
                  ],
                  [
                     "MECHANICAL_PTR",
                     null
                  ],
                  [
                     "ARC",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "name" : "Setup Device Type",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "module" : "SOP Common",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Measurement Units Code Sequence"
      },
      "(300a,03a2)[<0>](300a,00c6)" : {
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : [
            "Particle type of Beam.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PHOTON",
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
               "title" : "Defined Terms:"
            }
         ],
         "name" : "Radiation Type",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0008,0096)" : {
         "name" : "Referring Physician Identification Sequence",
         "module" : "General Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1062)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "req" : "3",
         "name" : "Physician(s) Reading Study Identification Sequence"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0370)[<2>](300c,0102)" : {
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : "Uniquely references Lateral Spreading Device described by Lateral Spreading Device Number (300A,0334) in Lateral Spreading Device Sequence (300A,0332).",
         "name" : "Referenced Lateral Spreading Device Number",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a2)[<0>](300a,0312)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Number of Range Shifters",
         "req" : "1",
         "desc" : "Number of range shifters associated with current beam.",
         "module" : "RT Ion Beams"
      },
      "(0010,2292)" : {
         "name" : "Patient Breed Description",
         "module" : "Patient",
         "req" : "2C",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(300a,03a2)[<0>](300a,0110)" : {
         "req" : "1",
         "desc" : "Number of control points in Beam. Value shall be greater than or equal to 2.",
         "module" : "RT Ion Beams",
         "name" : "Number of Control Points",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,014c)" : {
         "name" : "Gantry Pitch Rotation Direction",
         "desc" : [
            [
               "Direction of Gantry Pitch Angle when viewing along the positive X-axis of the IEC GANTRY coordinate system, for segment following Control Point. Required for first item of Control Point Sequence, or if Gantry Pitch Rotation Direction changes during Beam. See ",
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
                     "linkend" : "sect_C.8.8.25.6.5"
                  }
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
         "req" : "2C",
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,03ac)[<2>](300c,00c0)" : {
         "name" : "Referenced Wedge Number",
         "desc" : "Uniquely references Wedge described by Wedge Number (300A,00D2) in Wedge Sequence (300A,00D1).",
         "req" : "1",
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,0180)[<0>](300a,01b0)" : {
         "name" : "Setup Technique",
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : [
            "Setup Technique used in Patient Setup.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "ISOCENTRIC",
                     null
                  ],
                  [
                     "FIXED_SSD",
                     null
                  ],
                  [
                     "TBI",
                     null
                  ],
                  [
                     "BREAST_BRIDGE",
                     null
                  ],
                  [
                     "SKIN_APPOSITION",
                     null
                  ]
               ]
            }
         ],
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9186)" : {
         "name" : "Respiratory Signal Source ID",
         "desc" : "Identifies the device providing the respiratory signal.",
         "req" : "3",
         "module" : "RT Patient Setup",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(0020,000d)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "1",
         "desc" : "Unique identifier for the Study.",
         "module" : "General Study",
         "name" : "Study Instance UID"
      },
      "(300a,0010)[<0>](300a,0018)" : {
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "name" : "Dose Reference Point Coordinates",
         "req" : "1C",
         "desc" : [
            "Coordinates (x,y,z) of Reference Point in the patient based coordinate system described in ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " (mm). Required if Dose Reference Structure Type (300A,0014) is COORDINATES."
         ],
         "module" : "RT Prescription"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0123)" : {
         "module" : "RT Ion Beams",
         "req" : "1C",
         "desc" : [
            [
               "Direction of Patient Support Rotation when viewing table from above, for segment following Control Point. Required for first item of Control Point Sequence, or if Patient Support Rotation Direction changes during Beam. See ",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Patient Support Rotation Direction",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,0180)[<0>](300a,0190)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Sequence of Fixation Devices used in Patient Setup.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Sequence"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Scheduled Protocol Code Sequence",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "RT Series"
      },
      "(0010,2298)" : {
         "usage" : "M",
         "entity" : "Patient",
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
         "req" : "1C",
         "module" : "Patient",
         "name" : "Responsible Person Role"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common",
         "name" : "Contribution Description"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300c,0051)" : {
         "name" : "Referenced Dose Reference Number",
         "module" : "RT Fraction Scheme",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) within Dose Reference Sequence (300A,0010) in RT Prescription Module.",
         "req" : "1",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Plan",
         "usage" : "M",
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
         "req" : "1",
         "module" : "SOP Common",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(300a,03a2)[<0>](300a,0107)[<1>](300a,0108)" : {
         "module" : "RT Ion Beams",
         "desc" : "User or machine supplied identifier for Applicator.",
         "req" : "1",
         "name" : "Applicator ID",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0018,1050)" : {
         "name" : "Spatial Resolution",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0012,0072)" : {
         "usage" : "U",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "desc" : [
            "A description of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3",
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series Description"
      },
      "(0010,2299)" : {
         "module" : "Patient",
         "req" : "2C",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Organization",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "module" : "RT Series"
      },
      "(0020,0052)" : {
         "name" : "Frame of Reference UID",
         "module" : "Frame of Reference",
         "req" : "1",
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.4.1.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "usage" : "M",
         "entity" : "Frame of Reference",
         "mod_tables" : [
            "table_C.7-6"
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "General Study",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(300a,0070)[<0>](300c,000a)[<1>](300a,00a2)" : {
         "module" : "RT Fraction Scheme",
         "req" : "3",
         "desc" : [
            "Coordinates (x,y,z) of point in the patient based coordinate system described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               },
               "el" : "xref"
            },
            " at which Brachy Application Setup Dose (300A,00A4) is specified (mm)."
         ],
         "name" : "Brachy Application Setup Dose Specification Point",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0360)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "module" : "RT Ion Beams",
         "req" : "1C",
         "desc" : [
            "Sequence of Range Shifter settings for the current control point.",
            "One or more items shall be included in this sequence.",
            "Required for first item of Control Point Sequence if Number of Range Shifters (300A,0312) is non-zero, or if Range Shifter Setting (300A,0362) changes during Beam."
         ],
         "name" : "Range Shifter Settings Sequence"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(300a,03a2)[<0>](300a,03a6)[<1>](300a,00fc)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Block Number",
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : "Identification number of the Block. The value of Block Number (300A,00FC) shall be unique within the Beam in which it is created."
      },
      "(0020,0013)" : [
         {
            "usage" : "M",
            "entity" : "Plan",
            "mod_tables" : [
               "table_C.8-45"
            ],
            "name" : "Instance Number",
            "module" : "RT General Plan",
            "req" : "3",
            "desc" : "A number that identifies this object instance."
         },
         {
            "entity" : "Plan",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "usage" : "M",
            "name" : "Instance Number",
            "module" : "SOP Common",
            "req" : "3",
            "desc" : "A number that identifies this Composite object instance."
         }
      ],
      "(0012,0021)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "req" : "2",
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
         ],
         "name" : "Clinical Trial Protocol Name"
      },
      "(300a,03a2)[<0>](300a,0332)[<1>](300a,0334)" : {
         "req" : "1",
         "desc" : "Identification number of the Lateral Spreading Device. The value of Lateral Spreading Device Number (300A,0334) shall be unique within the Beam in which it is created.",
         "module" : "RT Ion Beams",
         "name" : "Lateral Spreading Device Number",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "req" : "1C",
         "name" : "Certified Timestamp Type"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0144)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "req" : "2C",
         "desc" : [
            "Table Top Roll Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the Y-axis of the IEC TABLE TOP coordinate system (degrees). Required for first item of Control Point Sequence, or if Table Top Roll Angle changes during Beam. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "RT Ion Beams",
         "name" : "Table Top Roll Angle"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "RT Series",
         "name" : "Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01d2)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Vertical Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., vertical offset between patient positioning performed using setup and treatment position.",
         "module" : "RT Patient Setup",
         "name" : "Table Top Vertical Setup Displacement"
      },
      "(300a,0070)[<0>](300a,007b)" : {
         "mod_tables" : [
            "table_C.8-49"
         ],
         "entity" : "Plan",
         "usage" : "U",
         "module" : "RT Fraction Scheme",
         "desc" : "String of 0's (no treatment) and 1's (treatment) describing treatment pattern. Length of string is 7 x Number of Fraction Pattern Digits Per Day x Repeat Fraction Cycle Length. Pattern shall start on a Monday. See Note 2.",
         "req" : "3",
         "name" : "Fraction Pattern"
      },
      "(300a,0010)[<0>](300a,0028)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "name" : "Target Underdose Volume Fraction",
         "module" : "RT Prescription",
         "req" : "3",
         "desc" : [
            "Maximum permitted fraction (in percent) of Target to receive less than the Target Prescription Dose if Dose Reference Type (300A,0020) is TARGET and Dose Reference Structure Type (300A,0014) is VOLUME. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.10.1"
               }
            },
            "."
         ]
      },
      "(300a,03a2)[<0>](300a,03a6)[<1>](300a,00e1)" : {
         "module" : "RT Ion Beams",
         "desc" : "User-supplied identifier for material used to manufacture Block.",
         "req" : "2",
         "name" : "Material ID",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300c,0042)[<1>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Ion Beams",
         "name" : "Referenced SOP Class UID",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1",
            "table_10-11"
         ]
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0026)" : {
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Target Prescription Dose",
         "req" : "3",
         "desc" : "Prescribed dose (in Gy) to Dose Reference if Dose Reference Type (300A,0020) of referenced Dose Reference is TARGET.",
         "module" : "RT Fraction Scheme"
      },
      "(300a,0010)[<0>](300a,002c)" : {
         "req" : "3",
         "desc" : "Maximum dose (in Gy) to non-overdosed part of Dose Reference if Dose Reference Type (300A,0020) is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) is VOLUME.",
         "module" : "RT Prescription",
         "name" : "Organ at Risk Maximum Dose",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-46"
         ]
      },
      "(0010,0010)" : {
         "name" : "Patient's Name",
         "module" : "Patient",
         "desc" : "Patient's full name.",
         "req" : "2",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(300e,0005)" : {
         "module" : "Approval",
         "req" : "2C",
         "desc" : "Time at which object was reviewed. Required if Approval Status (300E,0002) is APPROVED or REJECTED.",
         "name" : "Review Time",
         "mod_tables" : [
            "table_C.8-52"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0380)[<2>](300a,0386)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "desc" : [
            "If Range Modulator Type (300A,0348) is WHL_MODWEIGHTS or WHL_FIXEDWEIGHTS:",
            "Water equivalent thickness (in mm) of the range modulator at the position specified by Range Modulator Gating Start Value (300A,0382).",
            "If Range Modulator Type (300A,0348) is FIXED:",
            "Minimum water equivalent thickness (in mm) of the range modulator."
         ],
         "req" : "3",
         "module" : "RT Ion Beams",
         "name" : "Range Modulator Gating Start Water Equivalent Thickness"
      },
      "(300a,0180)[<0>](300a,01b2)" : {
         "name" : "Setup Technique Description",
         "module" : "RT Patient Setup",
         "desc" : "User-defined description of Setup Technique.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,011a)[<2>](300a,00b8)" : {
         "mod_tables" : [
            "table_C.8.8.25-1",
            "table_C.8.8.27-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "req" : "1",
         "desc" : [
            "Type of beam limiting device (collimator). The value of this attribute shall correspond to RT Beam Limiting Device Type (300A,00B8) defined in an item of Ion Beam Limiting Device Sequence (300A,03A4).",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "RT Ion Beams",
         "name" : "RT Beam Limiting Device Type"
      },
      "(300a,03a2)[<0>](300a,0342)[<1>](300a,00f9)" : {
         "req" : "3",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "module" : "RT Ion Beams",
         "name" : "Accessory Code",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0008,1048)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) of Record",
         "req" : "3",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "name" : "Time",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300a,0070)[<0>](300a,0080)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "name" : "Number of Beams",
         "desc" : "Number of Beams in current Fraction Group. If Number of Beams is greater then zero, Number of Brachy Application Setups (300A,00A0) shall equal zero.",
         "req" : "1",
         "module" : "RT Fraction Scheme"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers"
      },
      "(300a,03a2)[<0>](300a,03a6)[<1>](300a,00fa)" : {
         "module" : "RT Ion Beams",
         "desc" : [
            "Indicates presence or otherwise of geometrical divergence.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "PRESENT",
                     "block edges are shaped for beam divergence"
                  ],
                  [
                     "ABSENT",
                     "block edges are not shaped for beam divergence"
                  ]
               ]
            }
         ],
         "req" : "1",
         "name" : "Block Divergence",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,03a8)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "desc" : [
            "Sequence of machine configurations describing Ion treatment beam.",
            "The number of items shall be identical to the value of Number of Control Points (300A,0110).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.25.7",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "1",
         "module" : "RT Ion Beams",
         "name" : "Ion Control Point Sequence"
      },
      "(300a,0010)[<0>](300a,0026)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U",
         "name" : "Target Prescription Dose",
         "module" : "RT Prescription",
         "desc" : "Prescribed dose (in Gy) to Dose Reference if Dose Reference Type (300A,0020) is TARGET.",
         "req" : "3"
      },
      "(300a,03a2)[<0>](300a,00e0)" : {
         "name" : "Number of Compensators",
         "req" : "1",
         "desc" : "Number of compensators associated with current Beam.",
         "module" : "RT Ion Beams",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a0)[<0>](300a,004c)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ],
         "usage" : "U",
         "name" : "Patient Support Angle Tolerance",
         "module" : "RT Ion Tolerance Tables",
         "req" : "3",
         "desc" : "Maximum permitted difference (in degrees) between planned and delivered Patient Support Angle."
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,00f9)" : {
         "req" : "3",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "module" : "RT Patient Setup",
         "name" : "Accessory Code",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0012,0071)" : {
         "usage" : "U",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series ID",
         "module" : "Clinical Trial Series",
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Floating Point Value",
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "module" : "RT Series"
      },
      "(0012,0063)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
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
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "name" : "De-identification Method"
      },
      "(0012,0030)" : {
         "name" : "Clinical Trial Site ID",
         "req" : "2",
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
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(300a,03a2)[<0>](300a,0107)[<1>](300a,010a)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Applicator Description",
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : "User-defined description for Applicator."
      },
      "(0040,0244)" : {
         "desc" : "Date on which the Performed Procedure Step started.",
         "req" : "3",
         "module" : "RT Series",
         "name" : "Performed Procedure Step Start Date",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(300a,0006)" : {
         "module" : "RT General Plan",
         "req" : "2",
         "desc" : "Date treatment plan was last modified.",
         "name" : "RT Plan Date",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "usage" : "M"
      },
      "(300a,03a2)[<0>](300a,03a4)[<1>](300a,00b8)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : [
            "Type of beam limiting device (collimator).",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
         "name" : "RT Beam Limiting Device Type"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "name" : "Modifying System",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "name" : "Data Elements Signed",
         "module" : "SOP Common",
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
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "module" : "Patient",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Series",
         "name" : "Referenced Segment Number"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
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
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(300a,03a0)[<0>](300a,0046)" : {
         "module" : "RT Ion Tolerance Tables",
         "req" : "3",
         "desc" : "Maximum permitted difference (in degrees) between planned and delivered Beam Limiting Device Angle.",
         "name" : "Beam Limiting Device Angle Tolerance",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ],
         "usage" : "U"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "req" : "3",
         "module" : "General Study",
         "name" : "Person's Address"
      },
      "(0010,2297)" : {
         "name" : "Responsible Person",
         "req" : "2C",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1080)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "name" : "Admitting Diagnoses Description",
         "req" : "3",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "module" : "Patient Study"
      },
      "(300a,03a2)[<0>](300a,030a)" : {
         "name" : "Virtual Source-Axis Distances",
         "req" : "1",
         "desc" : [
            "Distance (in mm) from virtual source position to gantry rotation axis or nominal isocenter position (fixed beam-lines) of the equipment to be used for beam delivery. Specified by a numeric pair - the VSAD in the IEC Gantry X direction followed by the VSAD in the IEC Gantry Y direction.",
            [
               "The VSAD is commonly used for designing apertures in contrast to the effective source-axis-distance (ESAD) that is commonly used with the inverse square law for calculating the dose decrease with distance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.25.4"
                  }
               },
               "."
            ]
         ],
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,02e1)" : {
         "desc" : [
            "Indicates on which side of the Compensator Tray the compensator is mounted.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "PATIENT_SIDE",
                     "the Compensator is mounted on the side of the Compensator Tray that is towards the patient."
                  ],
                  [
                     "SOURCE_SIDE",
                     "the Compensator is mounted on the side of the Compensator Tray that is towards the radiation source."
                  ],
                  [
                     "DOUBLE_SIDED",
                     "the Compensator has a shaped (i.e., non-flat) surface on both sides of the Compensator Tray."
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "module" : "RT Ion Beams",
         "name" : "Compensator Mounting Position",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,03aa)[<1>](300a,00d9)" : {
         "name" : "Isocenter to Wedge Tray Distance",
         "desc" : [
            "Isocenter to downstream edge of wedge tray (mm).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.25.4"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "req" : "1",
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a0)[<0>](300a,0052)" : {
         "name" : "Table Top Longitudinal Position Tolerance",
         "module" : "RT Ion Tolerance Tables",
         "req" : "3",
         "desc" : "Maximum permitted difference (in mm) between planned and delivered Table Top Longitudinal Position.",
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ]
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](0018,0060)" : {
         "name" : "KVP",
         "module" : "RT Ion Beams",
         "desc" : "Peak kilo voltage output of the setup X-Ray generator to be used. Required for first item of Control Point Sequence, or if kVp changes during setup, and Nominal Beam Energy (300A,0114) is not present.",
         "req" : "1C",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Person Identification Code Sequence"
      },
      "(300a,03a2)[<0>](300a,00f0)" : {
         "req" : "1",
         "desc" : "Number of shielding blocks associated with Beam.",
         "module" : "RT Ion Beams",
         "name" : "Number of Blocks",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0010,0021)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "req" : "3",
         "module" : "Patient",
         "name" : "Issuer of Patient ID"
      },
      "(300a,03a0)[<0>](300a,004f)" : {
         "module" : "RT Ion Tolerance Tables",
         "req" : "3",
         "desc" : "Maximum permitted difference (in degrees) between planned and delivered Table Top Pitch Angle.",
         "name" : "Table Top Pitch Angle Tolerance",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0012,0082)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "module" : "Clinical Trial Subject",
         "req" : "3",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081)."
      },
      "(0010,4000)" : {
         "req" : "3",
         "desc" : "User-defined additional information about the patient.",
         "module" : "Patient",
         "name" : "Patient Comments",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,103f)" : {
         "module" : "RT Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "name" : "Series Description Code Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a2)" : {
         "name" : "Shielding Device Type",
         "desc" : [
            "Type of Shielding Device used in Patient Setup.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "GUM",
                     null
                  ],
                  [
                     "EYE",
                     null
                  ],
                  [
                     "GONAD",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "req" : "1",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0010,2201)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "name" : "Patient Species Description"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "module" : "SOP Common",
         "name" : "Attribute Modification DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(0038,0062)" : {
         "module" : "Patient Study",
         "desc" : "Description of the type of service episode.",
         "req" : "3",
         "name" : "Service Episode Description",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,0342)[<1>](300a,0346)" : {
         "name" : "Range Modulator ID",
         "module" : "RT Ion Beams",
         "desc" : "User or machine supplied identifier for Range Modulator.",
         "req" : "1",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "req" : "3",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "DateTime",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300a,0010)" : {
         "mod_tables" : [
            "table_C.8-46"
         ],
         "entity" : "Plan",
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Sequence of Dose References.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "RT Prescription",
         "name" : "Dose Reference Sequence"
      },
      "(300a,03a0)[<0>](300a,0042)" : {
         "desc" : "Identification number of the Tolerance Table. The value of Tolerance Table Number (300A,0042) shall be unique within the RT Ion Plan in which it is created.",
         "req" : "1",
         "module" : "RT Ion Tolerance Tables",
         "name" : "Tolerance Table Number",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.24-1"
         ]
      },
      "(300a,03a2)" : {
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "name" : "Ion Beam Sequence",
         "req" : "1",
         "desc" : [
            "Sequence of setup and/or treatment beams for current RT Ion Plan.",
            "One or more items shall be included in this sequence."
         ],
         "module" : "RT Ion Beams"
      },
      "(300a,03a2)[<0>](300a,0350)" : {
         "name" : "Patient Support Type",
         "req" : "1",
         "desc" : [
            {
               "list" : [
                  [
                     "TABLE",
                     "Treatment delivery system table"
                  ],
                  [
                     "CHAIR",
                     "Treatment delivery system chair"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.25.6.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1",
            "table_C.8.8.28-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0360)[<2>](300a,0364)" : {
         "req" : "3",
         "desc" : [
            "Isocenter to downstream edge of range shifter (mm) at current control point. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "module" : "RT Ion Beams",
         "name" : "Isocenter to Range Shifter Distance",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "module" : "RT Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,0030)" : {
         "req" : "2",
         "desc" : "Time the Study started.",
         "module" : "General Study",
         "name" : "Study Time",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a4)" : {
         "req" : "2",
         "desc" : "User-defined label for Shielding Device.",
         "module" : "RT Patient Setup",
         "name" : "Shielding Device Label",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Plan",
         "usage" : "U"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Series"
      },
      "(300a,03a2)[<0>](0008,1040)" : {
         "desc" : "Department in the institution where the equipment is located that is to be used for beam delivery.",
         "req" : "3",
         "module" : "RT Ion Beams",
         "name" : "Institutional Department Name",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0380)[<2>](300c,0104)" : {
         "module" : "RT Ion Beams",
         "desc" : "Uniquely references Range Modulator described by Range Modulator Number (300A,0344) in Range Modulator Sequence (300A,0342).",
         "req" : "1",
         "name" : "Referenced Range Modulator Number",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID"
      },
      "(300a,0180)[<0>](300a,01b4)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Setup Device Sequence",
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : [
            "Sequence of devices used for patient alignment in Patient Setup.",
            "One or more items are permitted in this sequence."
         ]
      },
      "(0008,0020)" : {
         "name" : "Study Date",
         "req" : "2",
         "desc" : "Date the Study started.",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,03a2)[<0>](300a,03a6)[<1>](300a,0106)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Block Data",
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : "A data stream of (x,y) pairs that comprise the block edge. The number of pairs shall be equal to Block Number of Points (300A,0104), and the vertices shall be interpreted as a closed polygon. Coordinates are projected onto the machine isocentric plane in the IEC BEAM LIMITING DEVICE coordinate system (mm)."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "name" : "Referenced Instance Sequence",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U"
      },
      "(300a,0180)[<0>](300a,0182)" : {
         "req" : "1",
         "desc" : "Identification number of the Patient Setup. The value of Patient Setup Number (300A,0182) shall be unique within the RT Plan in which it is created.",
         "module" : "RT Patient Setup",
         "name" : "Patient Setup Number",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(4ffe,0001)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC Parameters Sequence",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0008,1110)" : {
         "module" : "General Study",
         "req" : "3",
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
         "name" : "Referenced Study Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Version",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(300a,0070)[<0>](300a,0071)" : {
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "module" : "RT Fraction Scheme",
         "req" : "1",
         "desc" : "Identification number of the Fraction Group. The value of Fraction Group Number (300A,0071) shall be unique within the RT Plan in which it is created.",
         "name" : "Fraction Group Number"
      },
      "(0010,0020)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient ID",
         "module" : "Patient",
         "req" : "2",
         "desc" : "Primary hospital identification number or code for the patient."
      },
      "(300a,0070)" : {
         "mod_tables" : [
            "table_C.8-49"
         ],
         "entity" : "Plan",
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "Sequence of Fraction Groups in current Fraction Scheme.",
            "One or more items shall be included in this sequence."
         ],
         "module" : "RT Fraction Scheme",
         "name" : "Fraction Group Sequence"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Algorithm",
         "module" : "SOP Common",
         "desc" : [
            "The algorithm used in generating the MAC to be encrypted to form the Digital Signature.",
            {
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
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15"
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
         "req" : "1"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0140)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Table Top Pitch Angle",
         "module" : "RT Ion Beams",
         "req" : "2C",
         "desc" : [
            "Table Top Pitch Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system (degrees). Required for first item of Control Point Sequence, or if Table Top Pitch Angle changes during Beam. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.2"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(300a,0010)[<0>](300a,002a)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U",
         "name" : "Organ at Risk Full-volume Dose",
         "module" : "RT Prescription",
         "req" : "3",
         "desc" : "Maximum dose (in Gy) to entire Dose Reference if Dose Reference Type (300A,0020) is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) is VOLUME."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Person Name",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "RT Series"
      },
      "(300a,0009)" : {
         "name" : "Treatment Protocols",
         "module" : "RT General Plan",
         "req" : "3",
         "desc" : "Planned treatment protocols.",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "entity" : "Plan",
         "usage" : "M"
      },
      "(300a,03a2)[<0>](300a,00b2)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Treatment Machine Name",
         "module" : "RT Ion Beams",
         "desc" : [
            "User-defined name identifying treatment machine to be used for beam delivery. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01d0)" : {
         "desc" : "User-defined description of Setup Reference used for patient alignment.",
         "req" : "3",
         "module" : "RT Patient Setup",
         "name" : "Setup Reference Description",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,011e)" : {
         "req" : "1C",
         "desc" : "Gantry angle of radiation source, i.e., orientation of IEC GANTRY coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees). Required for first item of Control Point Sequence, or if Gantry Angle changes during Beam.",
         "module" : "RT Ion Beams",
         "name" : "Gantry Angle",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,0082)" : {
         "module" : "RT Fraction Scheme",
         "req" : "3",
         "desc" : [
            "Coordinates (x,y,z) of point at which Beam Dose is specified in the patient based coordinate system described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               },
               "el" : "xref"
            },
            " (mm). See Note 3."
         ],
         "name" : "Beam Dose Specification Point",
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0020,000e)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M",
         "name" : "Series Instance UID",
         "req" : "1",
         "desc" : "Unique identifier of the series.",
         "module" : "RT Series"
      },
      "(300a,03a2)[<0>](300a,0314)[<1>](300a,0316)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Range Shifter Number",
         "desc" : "Identification number of the Range Shifter. The value of Range Shifter Number (300A,0316) shall be unique within the Beam in which it is created.",
         "req" : "1",
         "module" : "RT Ion Beams"
      },
      "(0008,1084)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
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
         "req" : "1",
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "RT Series",
         "name" : "Person Name"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0380)[<2>](300a,038a)" : {
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "req" : "3",
         "desc" : [
            "Isocenter to downstream edge of range modulator (mm) at current control point. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.4"
               },
               "el" : "xref"
            }
         ],
         "module" : "RT Ion Beams",
         "name" : "Isocenter to Range Modulator Distance"
      },
      "(300a,03a2)[<0>](300a,0314)[<1>](300a,0318)" : {
         "name" : "Range Shifter ID",
         "desc" : "User or machine supplied identifier for Range Shifter.",
         "req" : "1",
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0008,0110)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "name" : "Coding Scheme Identification Sequence",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0008,103e)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "desc" : "Description of the series.",
         "module" : "RT Series",
         "name" : "Series Description"
      },
      "(300a,000e)" : {
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "module" : "RT Prescription",
         "desc" : "User-defined description of treatment prescription.",
         "req" : "3",
         "name" : "Prescription Description"
      },
      "(300a,03a2)[<0>](300a,0420)[<1>](300a,0424)" : {
         "name" : "General Accessory Number",
         "req" : "1",
         "desc" : "Identification Number of the General Accessory. The value shall be unique within the sequence.",
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0040,0253)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step ID",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "req" : "3",
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "UID"
      },
      "(0010,1002)[<0>](0010,0022)" : {
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
         "module" : "Patient",
         "name" : "Type of Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0194)" : {
         "req" : "2",
         "desc" : "User-defined label identifier for Fixation Device.",
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Label",
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0038,0010)" : {
         "name" : "Admission ID",
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "usage" : "U"
      },
      "(300a,0180)[<0>](0018,5100)" : {
         "name" : "Patient Position",
         "module" : "RT Patient Setup",
         "req" : "1C",
         "desc" : [
            "Patient position descriptor relative to the equipment. Required if Patient Additional Position (300A,0184) is not present. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.12.1.2"
               },
               "el" : "xref"
            },
            " for Defined Terms and further explanation."
         ],
         "usage" : "U",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Reason for requesting this procedure.",
         "module" : "RT Series",
         "name" : "Reason for the Requested Procedure"
      },
      "(0008,0015)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               }
            },
            ")."
         ],
         "name" : "Instance Coercion DateTime"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0370)" : {
         "module" : "RT Ion Beams",
         "desc" : [
            "Sequence of Lateral Spreading Device settings for the current control point.",
            "One or more items shall be included in this sequence.",
            "Required for first item of Control Point Sequence if Number of Lateral Spreading Devices (300A,0330) is non-zero, or if Lateral Spreading Device Setting (300A,0372) changes during Beam."
         ],
         "req" : "1C",
         "name" : "Lateral Spreading Device Settings Sequence",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0010,0024)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,0394)" : {
         "desc" : "The x and y coordinates of the scan spots are defined as projected onto the machine isocentric plane in the IEC GANTRY coordinate system (mm). Required if Scan Mode (300A,0308) is MODULATED. Contains 2N values where N is the Number of Scan Spot Positions (300A,0392).",
         "req" : "1C",
         "module" : "RT Ion Beams",
         "name" : "Scan Spot Position Map",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9185)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Plan",
         "usage" : "U",
         "module" : "RT Patient Setup",
         "desc" : "Description of respiratory motion compensation technique.",
         "req" : "3",
         "name" : "Respiratory Motion Compensation Technique Description"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "General Study",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(0038,0060)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Service Episode ID",
         "module" : "Patient Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "req" : "3"
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,00f9)" : {
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Accessory Code",
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader."
      },
      "(300a,03a2)[<0>](300a,0420)[<1>](300a,0425)" : {
         "module" : "RT Ion Beams",
         "desc" : "Radiation source to general accessory distance (in mm) for current accessory.",
         "req" : "3",
         "name" : "Source to General Accessory Distance",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "module" : "Patient",
         "req" : "2C",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(300a,03a2)[<0>](300a,03a6)[<1>](300a,00fb)" : {
         "name" : "Block Mounting Position",
         "desc" : [
            "Indicates on which side of the Block Tray the block is mounted.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "PATIENT_SIDE",
                     "the block is mounted on the side of the Block Tray that is towards the patient"
                  ],
                  [
                     "SOURCE_SIDE",
                     "the block is mounted on the side of the Block Tray that is towards the radiation source"
                  ]
               ]
            }
         ],
         "req" : "1",
         "module" : "RT Ion Beams",
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(300a,03a2)[<0>](300a,0332)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "name" : "Lateral Spreading Device Sequence",
         "req" : "1C",
         "desc" : [
            "Sequence of lateral spreading devices associated with Beam.",
            "Required if Number of Lateral Spreading Devices (300A,0330) is non-zero.",
            "The number of items shall be identical to the value of Number of Lateral Spreading Devices (300A,0330)."
         ],
         "module" : "RT Ion Beams"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0198)" : {
         "module" : "RT Patient Setup",
         "desc" : "Position/Notch number of Fixation Device.",
         "req" : "3",
         "name" : "Fixation Device Position",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(300a,000a)" : {
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "name" : "Plan Intent",
         "module" : "RT General Plan",
         "req" : "3",
         "desc" : [
            "Intent of this plan.",
            {
               "list" : [
                  [
                     "CURATIVE",
                     "Curative therapy on patient"
                  ],
                  [
                     "PALLIATIVE",
                     "Palliative therapy on patient"
                  ],
                  [
                     "PROPHYLACTIC",
                     "Preventative therapy on patient"
                  ],
                  [
                     "VERIFICATION",
                     "Verification of patient plan using phantom"
                  ],
                  [
                     "MACHINE_QA",
                     "Quality assurance of the delivery machine (independently of a specific patient)"
                  ],
                  [
                     "RESEARCH",
                     "Research project"
                  ],
                  [
                     "SERVICE",
                     "Machine repair or maintenance operation"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ]
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,00e7)" : {
         "name" : "Compensator Rows",
         "req" : "1",
         "desc" : "Number of rows in the range compensator. A row is defined to be in the X direction of the IEC Beam Limiting Device Coordinate system.",
         "module" : "RT Ion Beams",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0008,0081)" : {
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Address",
         "req" : "3",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment"
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,00ea)" : {
         "desc" : "The x and y coordinates of the upper left hand corner (first pixel transmitted) of the range compensator, projected onto the machine isocentric plane in the IEC BEAM LIMITING DEVICE coordinate system (mm).",
         "req" : "1",
         "module" : "RT Ion Beams",
         "name" : "Compensator Position",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0018,a001)" : {
         "module" : "SOP Common",
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
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(300a,03a2)[<0>](300a,02ea)[<1>](300a,00e5)" : {
         "desc" : "User-supplied identifier for the compensator.",
         "req" : "3",
         "module" : "RT Ion Beams",
         "name" : "Compensator ID",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(300a,03a2)[<0>](300a,0306)" : {
         "name" : "Radiation Charge State",
         "module" : "RT Ion Beams",
         "desc" : "Charge state of radiation. Required if Radiation Type (300A,00C6) is ION",
         "req" : "1C",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0010,1002)" : {
         "module" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "name" : "Other Patient IDs Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0050)" : {
         "name" : "Accession Number",
         "module" : "General Study",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "req" : "2",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "RT Series",
         "name" : "DateTime",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,03a2)[<0>](300c,0080)[<1>](0008,1150)" : {
         "module" : "RT Ion Beams",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8.8.25-1",
            "table_10-11"
         ],
         "entity" : "Plan",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "module" : "RT Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0012,0064)" : {
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "De-identification Method Code Sequence",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "req" : "1",
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
                     "linkend" : "sect_C.7.2.3.1.2",
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
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Consent for Distribution Flag"
      },
      "(0010,1030)" : {
         "name" : "Patient's Weight",
         "desc" : "Weight of the Patient, in kilograms.",
         "req" : "3",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U"
      },
      "(300a,03a2)[<0>](300a,03a8)[<1>](300a,012c)" : {
         "module" : "RT Ion Beams",
         "desc" : [
            "Isocenter coordinates (x,y,z) in the patient based coordinate system described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               },
               "el" : "xref"
            },
            " (mm). Required for first item of Segment Control Point Sequence, or if Segment Isocenter Position changes during Beam."
         ],
         "req" : "2C",
         "name" : "Isocenter Position",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "req" : "2C",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1021)" : {
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Patient's Size Code Sequence"
      },
      "(300a,0002)" : {
         "desc" : "User-defined label for treatment plan.",
         "req" : "1",
         "module" : "RT General Plan",
         "name" : "RT Plan Label",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01d6)" : {
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Table Top Lateral Setup Displacement",
         "module" : "RT Patient Setup",
         "desc" : "Lateral Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., lateral offset between patient positioning performed using setup and treatment position.",
         "req" : "3"
      },
      "(300a,03a2)[<0>](300a,030c)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "module" : "RT Ion Beams",
         "req" : "3",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "usage" : "C - Required if RT Fraction Scheme Module is included and Number of Beams (300A,0080) is greater than zero for one or more fraction groups",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.8.8.25-1"
         ]
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Plan",
         "usage" : "M",
         "name" : "Software Versions",
         "req" : "3",
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
         "module" : "SOP Common"
      },
      "(300e,0004)" : {
         "desc" : "Date on which object was reviewed. Required if Approval Status (300E,0002) is APPROVED or REJECTED.",
         "req" : "2C",
         "module" : "Approval",
         "name" : "Review Date",
         "entity" : "Plan",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-52"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(300c,0060)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT General Plan",
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45",
            "table_10-11"
         ]
      },
      "(0012,0050)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Time Point ID",
         "module" : "Clinical Trial Study",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2"
      },
      "(300c,0080)" : {
         "desc" : [
            "Related instances of RT Dose (for grids and named/unnamed point doses).",
            "One or more items are permitted in this sequence.",
            "See Note 1."
         ],
         "req" : "3",
         "module" : "RT General Plan",
         "name" : "Referenced Dose Sequence",
         "entity" : "Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45"
         ]
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "usage" : "M",
         "entity" : "Plan",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "SOP Common"
      }
   }
}