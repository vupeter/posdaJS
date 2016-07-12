var data = {
   "tags" : {
      "(0008,1110)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "General Study",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1072)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "entity" : "Series",
         "name" : "Operator Identification Sequence",
         "module" : "RT Series",
         "desc" : "Identification of the operator(s) supporting the Series. One or more items may be present in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present.",
         "req" : "3"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](3008,0066)" : {
         "name" : "Override Reason",
         "module" : "RT Beams Session Record",
         "req" : "3",
         "desc" : "User-defined description of reason for override of parameter specified by Override Parameter Pointer (3008,0062).",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Numeric Value",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(3008,0020)[<0>](3008,0090)" : {
         "module" : "RT Beams Session Record",
         "name" : "Referenced Calculated Dose Reference Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of doses estimated for each treatment delivery.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,00f9)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "name" : "Accessory Code",
         "module" : "RT Patient Setup",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0038,0010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "name" : "Admission ID",
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "req" : "3"
      },
      "(0010,2294)" : {
         "module" : "Patient",
         "name" : "Breed Registration Sequence",
         "req" : "2C",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0010,0035)" : {
         "req" : "1C",
         "desc" : [
            "The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ],
            "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."
         ],
         "module" : "Patient",
         "name" : "Patient's Alternative Calendar",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,00f9)" : {
         "module" : "RT Patient Setup",
         "name" : "Accessory Code",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record"
      },
      "(300c,0022)" : {
         "module" : "RT Beams Session Record",
         "name" : "Referenced Fraction Group Number",
         "desc" : "Identifier of Fraction Group within referenced RT Plan.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(300a,00b3)" : {
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
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "module" : "RT Beams Session Record",
         "name" : "Primary Dosimeter Unit",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "module" : "Patient",
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
         "req" : "1C"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](0008,1070)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "Operators' Name",
         "module" : "RT Beams Session Record",
         "desc" : "Name of operator who authorized override.",
         "req" : "2"
      },
      "(0010,0024)[<0>](0040,0033)" : {
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
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(3008,0251)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "usage" : "M",
         "req" : "2",
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
         "module" : "RT General Treatment Record",
         "name" : "Treatment Time"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0192)" : {
         "desc" : [
            "Type of Fixation Device used during in Patient Setup.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
         "req" : "1",
         "name" : "Fixation Device Type",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(3008,0020)[<0>](300a,0420)[<1>](300a,00f9)" : {
         "desc" : "Machine-readable identifier for this accessory",
         "req" : "3",
         "module" : "RT Beams Session Record",
         "name" : "Accessory Code",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "req" : "1",
         "name" : "HL7 Instance Identifier",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0070)[<0>](300c,0051)" : {
         "module" : "Calculated Dose Reference Record",
         "name" : "Referenced Dose Reference Number",
         "req" : "1C",
         "desc" : [
            "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.10"
               },
               "el" : "xref"
            },
            " of referenced RT Plan. Required only if Calculated Dose Reference Number (3008,0072) is not sent. It shall not be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-56"
         ],
         "entity" : "Treatment Record",
         "usage" : "U"
      },
      "(300a,0180)[<0>](300a,01d4)" : {
         "req" : "3",
         "desc" : "Longitudinal Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., longitudinal offset between patient positioning performed using setup and treatment position.",
         "name" : "Table Top Longitudinal Setup Displacement",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(3008,0220)[<0>](3008,0240)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Sequence describing status of fractions in Fraction Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Fraction Status Summary Sequence",
         "module" : "RT Treatment Summary Record"
      },
      "(0040,0253)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Performed Procedure Step ID",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "req" : "3"
      },
      "(0040,0280)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "req" : "3",
         "name" : "Comments on the Performed Procedure Step",
         "module" : "RT Series"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0121)" : {
         "desc" : [
            "Direction of Beam Limiting Device Rotation when viewing beam limiting device (collimator) from radiation source, for segment beginning at current Control Point. Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Beam Limiting Device Rotation Direction changes during beam administration.",
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
         "req" : "1C",
         "module" : "RT Beams Session Record",
         "name" : "Beam Limiting Device Rotation Direction",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "entity" : "Treatment Record",
         "usage" : "U"
      },
      "(3008,0020)[<0>](300a,00ed)" : {
         "desc" : "Number of boli used with current Beam.",
         "req" : "2",
         "module" : "RT Beams Session Record",
         "name" : "Number of Boli",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "name" : "Attribute Modification DateTime",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a6)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "name" : "Shielding Device Description",
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : "User-defined description of Shielding Device."
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0116)[<2>](300c,00c0)" : {
         "req" : "1",
         "desc" : "Uniquely identifies wedge specified by Wedge Number (300A,00D2) within the Recorded Wedge Sequence (3008,00B0).",
         "name" : "Referenced Wedge Number",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "name" : "Person's Telecom Information",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b8)" : {
         "desc" : "User-defined label for Setup Device used for patient alignment.",
         "req" : "2",
         "name" : "Setup Device Label",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0008,0105)" : {
         "name" : "Mapping Resource",
         "module" : "SOP Common",
         "desc" : [
            "The identifier of the Mapping Resource.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_8.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,01b4)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of devices used for patient alignment in Patient Setup.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "RT Patient Setup",
         "name" : "Setup Device Sequence"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0431)" : {
         "name" : "Applicator Geometry Sequence",
         "module" : "RT Beams Session Record",
         "desc" : [
            "Describes the applicator aperture geometry.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Requested Procedure Code Sequence",
         "module" : "RT Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "module" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_dc68c1a1-46db-4a55-bcba-f75b9d9a8ab4"
                     }
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
         "entity" : "Patient"
      },
      "(0008,0201)" : {
         "name" : "Timezone Offset From UTC",
         "module" : "SOP Common",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
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
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
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
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ]
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     }
                  },
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     },
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
                     "attrs" : {
                        "xml:id" : "para_50578448-3e31-49d4-87db-a9b392279794"
                     },
                     "el" : "para"
                  },
                  "\n                  ",
                  {
                     "content" : [
                        "Offset = -0200"
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     }
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record"
      },
      "(3008,0070)[<0>](3008,0072)" : {
         "mod_tables" : [
            "table_C.8-56"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "module" : "Calculated Dose Reference Record",
         "name" : "Calculated Dose Reference Number",
         "desc" : "Unique identifier of dose reference point within RT Treatment Record IOD. Required only if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1",
         "name" : "Value Type",
         "module" : "RT Series"
      },
      "(0010,1021)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "name" : "Patient's Size Code Sequence",
         "module" : "Patient Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "req" : "3",
         "module" : "RT Series",
         "name" : "Accession Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "name" : "Institution Name"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](3008,0063)" : {
         "module" : "RT Beams Session Record",
         "name" : "Parameter Item Index",
         "desc" : "Contains the sequence item index (monotonically increasing from 1) of the overridden attributes within its parent sequence. The value is limited in scope to the Treatment Session Beam Sequence (3008,0020) and all nested sequences therein.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      " (0010,0027) " : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "req" : "\n                  3 ",
         "desc" : [
            [
               "A sequence containing the identifiers and locations of the individual subjects whose data was acquired at the same time (as a group) and encoded in this composite instance. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Group of Patients Identification Sequence",
         "module" : "Patient"
      },
      "(0008,0117)" : {
         "name" : "Context UID",
         "module" : "SOP Common",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Retrieval Sequence",
         "module" : "Patient"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Person's Telecom Information",
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
                                 "attrs" : {
                                    "xml:id" : "para_6a265054-28ce-4b9d-a9a3-4379a2e9e70e"
                                 },
                                 "el" : "para",
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Strain Stock Number",
         "desc" : [
            "The stock number of the strain of the patient issued by the organization identified by Strain Source (0010,0217). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "req" : "1C",
         "name" : "HL7 Instance Identifier",
         "module" : "Patient"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "module" : "General Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(3008,0020)[<0>](300a,0110)" : {
         "name" : "Number of Control Points",
         "module" : "RT Beams Session Record",
         "desc" : "Number of control points delivered.",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Institution Name",
         "req" : "3",
         "desc" : "Institution where the equipment that contributed to the composite instance is located."
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0109)" : {
         "desc" : [
            "Type of Applicator.",
            {
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
                     "PHOTON_SQUARE",
                     "square photon applicator"
                  ],
                  [
                     "PHOTON_RECT",
                     "rectangular photon applicator"
                  ],
                  [
                     "PHOTON_CIRC",
                     "circular photon applicator"
                  ],
                  [
                     "INTRAOPERATIVE",
                     "intraoperative (custom) applicator"
                  ],
                  [
                     "STEREOTACTIC",
                     "stereotactic applicator (deprecated)"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "name" : "Applicator Type",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0008,0030)" : {
         "name" : "Study Time",
         "module" : "General Study",
         "desc" : "Time the Study started.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(0008,0031)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Series Time",
         "req" : "3",
         "desc" : "Time the Series started."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Referenced Segment Number",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00c0)[<1>](300a,00ee)" : {
         "name" : "Compensator Type",
         "module" : "RT Beams Session Record",
         "desc" : [
            "Type of compensator (if any).",
            {
               "list" : [
                  [
                     "STANDARD",
                     "physical (static) compensator"
                  ],
                  [
                     "DYNAMIC",
                     "moving Beam Limiting Device (collimator) simulating compensator"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0008,1080)" : {
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "req" : "3",
         "name" : "Admitting Diagnoses Description",
         "module" : "Patient Study",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0012,0064)" : {
         "module" : "Patient",
         "name" : "De-identification Method Code Sequence",
         "req" : "1C",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00c0)[<1>](300a,0355)" : {
         "desc" : "An identifier for the Tray intended to be read by a device such as a bar-code reader.",
         "req" : "3",
         "module" : "RT Beams Session Record",
         "name" : "Tray Accessory Code",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "module" : "Patient",
         "name" : "Repository Unique ID",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,00f9)" : {
         "module" : "RT Patient Setup",
         "name" : "Accessory Code",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0062,000b)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "usage" : "U",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "module" : "RT Patient Setup",
         "name" : "Referenced Segment Number"
      },
      "(3008,0020)[<0>](3008,00d0)[<1>](300a,00fe)" : {
         "module" : "RT Beams Session Record",
         "name" : "Block Name",
         "req" : "2",
         "desc" : "User-defined name for block.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(0010,1000)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "req" : "3",
         "name" : "Other Patient IDs",
         "module" : "Patient"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
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
         "entity" : "Study",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0129)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "desc" : "Table Top Longitudinal position in IEC TABLE TOP coordinate system (mm). This value is interpreted as an absolute, rather than relative, Table setting. Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Table Top Longitudinal Position changes during beam administration.",
         "req" : "2C",
         "module" : "RT Beams Session Record",
         "name" : "Table Top Longitudinal Position"
      },
      "(0008,1084)" : {
         "name" : "Admitting Diagnoses Code Sequence",
         "module" : "Patient Study",
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
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0068)[<2>](3008,0063)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "1",
         "desc" : "Contains the sequence item index (starting at 1) of the corrected attribute within its parent sequence.",
         "module" : "RT Beams Session Record",
         "name" : "Parameter Item Index"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ]
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
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "attrs" : {
                                          "targetdoc" : "PS3.15",
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
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
         "name" : "Deidentification Action",
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Coding Scheme Responsible Organization",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "req" : "3"
      },
      "(3008,0020)[<0>](300a,0420)[<1>](300a,0424)" : {
         "name" : "General Accessory Number",
         "module" : "RT Beams Session Record",
         "desc" : "Identification Number of the General Accessory. The value shall be unique within the sequence.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(3008,0010)[<0>](300c,0051)" : {
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "desc" : [
            "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.10",
                  "xrefstyle" : "select: title"
               },
               "el" : "xref"
            },
            " of referenced RT Plan. Required only if Measured Dose Reference Number (3008,0064) is not sent. It shall not be present otherwise."
         ],
         "req" : "1C",
         "name" : "Referenced Dose Reference Number",
         "module" : "Measured Dose Reference Record"
      },
      "(0008,1120)" : {
         "name" : "Referenced Patient Sequence",
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00c0)[<1>](300a,00e5)" : {
         "module" : "RT Beams Session Record",
         "name" : "Compensator ID",
         "req" : "3",
         "desc" : "User-supplied identifier for compensator.",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "module" : "RT Series"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(3008,0020)[<0>](3008,0022)" : {
         "name" : "Current Fraction Number",
         "module" : "RT Beams Session Record",
         "req" : "2",
         "desc" : "Fraction number for this beam administration.",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0194)" : {
         "req" : "2",
         "desc" : "User-defined label identifier for Fixation Device.",
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Label",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,014a)" : {
         "module" : "RT Beams Session Record",
         "name" : "Gantry Pitch Angle",
         "desc" : [
            "Gantry Pitch Angle. i.e., the rotation of the IEC GANTRY coordinate system about the X-axis of the IEC GANTRY coordinate system (degrees). If used, must be present for first item of Control Point Sequence, or if used and Gantry Pitch Rotation Angle changes during Beam, must be present. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.5"
               }
            },
            "."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "name" : "Assigning Facility Sequence",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "module" : "RT Series"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,010a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "name" : "Applicator Description",
         "module" : "RT Beams Session Record",
         "desc" : "User-defined description for Applicator.",
         "req" : "3"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
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
         "req" : "1C",
         "module" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence"
      },
      "(0010,0033)" : {
         "req" : "3",
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
         "name" : "Patient's Birth Date in Alternative Calendar",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01ba)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "name" : "Setup Device Description",
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : "User-defined description for Setup Device used for patient alignment."
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "RT General Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Private Group Reference",
         "req" : "1",
         "desc" : "Odd group number within which the Private Data Element block is reserved."
      },
      "(0012,0060)" : {
         "req" : "2",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial or research. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Coordinating Center Name",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U"
      },
      "(3008,0020)[<0>](3008,0032)" : {
         "req" : "3",
         "desc" : "Desired machine setting of primary Meterset.",
         "name" : "Specified Primary Meterset",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "req" : "3",
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
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     }
                  },
                  "\n"
               ]
            }
         ],
         "module" : "SOP Common",
         "name" : "Retrieve URI",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0032,1034)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "name" : "Requesting Service Code Sequence",
         "module" : "General Study",
         "req" : "3",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "name" : "Institution Name",
         "module" : "General Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(3008,0020)[<0>](3008,00c0)[<1>](300a,00f9)" : {
         "req" : "3",
         "desc" : "An identifier for the Compensator intended to be read by a device such as a bar-code reader.",
         "name" : "Accessory Code",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C"
      },
      "(0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "module" : "General Equipment",
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment"
      },
      "(0010,1002)" : {
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Other Patient IDs Sequence",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "name" : "Institution Name",
         "module" : "General Equipment"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Floating Point Value",
         "module" : "RT Series"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0042)" : {
         "module" : "RT Beams Session Record",
         "name" : "Specified Meterset",
         "desc" : [
            "Desired machine setting for current control point. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.21.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0010,0040)" : {
         "req" : "2",
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
         "name" : "Patient's Sex",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "name" : "Override Sequence",
         "desc" : [
            "Sequence of parameters that were overridden during the administration of the beam segment immediately prior to the current control point.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a4)" : {
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "User-defined label for Shielding Device.",
         "req" : "2",
         "module" : "RT Patient Setup",
         "name" : "Shielding Device Label"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common",
         "name" : "Digital Signature DateTime"
      },
      "(0028,0303)" : {
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
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Longitudinal Temporal Information Modified",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
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
         "req" : "1C",
         "module" : "Patient",
         "name" : "WADO-RS Retrieval Sequence"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
            "One or more Items are permitted in this Sequence.",
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
         ],
         "name" : "Referenced Study Sequence",
         "module" : "RT Series"
      },
      "(3008,0050)[<0>](300c,0051)" : {
         "module" : "RT Treatment Summary Record",
         "name" : "Referenced Dose Reference Number",
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
               "attrs" : {
                  "linkend" : "sect_C.8.8.17",
                  "xrefstyle" : "select: title"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Series",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ]
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Subject Relative Position in Image",
         "req" : "3",
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
         ]
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
      "(0040,0244)" : {
         "module" : "RT Series",
         "name" : "Performed Procedure Step Start Date",
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step started.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "entity" : "Series"
      },
      "(3008,0070)[<0>](3008,0076)" : {
         "desc" : "Calculated Dose (Gy).",
         "req" : "2",
         "module" : "Calculated Dose Reference Record",
         "name" : "Calculated Dose Reference Dose Value",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-56"
         ]
      },
      "(0400,0500)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this Sequence.",
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
         "name" : "Encrypted Attributes Sequence",
         "module" : "SOP Common"
      },
      "(3008,0020)[<0>](3008,00a0)[<1>](300a,00b8)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Beams Session Record",
         "name" : "RT Beam Limiting Device Type",
         "desc" : [
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
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
         "entity" : "Patient"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0025)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "desc" : "Time when the delivery of radiation at this control point began. For the final control point this shall be the Time when the previous control point ended.",
         "req" : "1",
         "name" : "Treatment Control Point Time",
         "module" : "RT Beams Session Record"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
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
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Time",
         "module" : "RT Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "name" : "Series Instance UID",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3008,0020)[<0>](300a,00c3)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Beams Session Record",
         "name" : "Beam Description",
         "desc" : "User-defined description for delivered Beam.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
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
         "module" : "RT Series",
         "name" : "Universal Entity ID Type",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "module" : "General Study",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0008,0090)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "name" : "Referring Physician's Name",
         "module" : "General Study",
         "req" : "2",
         "desc" : "Name of the patient's referring physician"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
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
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "module" : "RT Series",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(3008,0010)[<0>](3008,0014)" : {
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "desc" : [
            "Type of dose measurement.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "DIODE",
                     "semiconductor diode"
                  ],
                  [
                     "TLD",
                     "thermoluminescent dosimeter"
                  ],
                  [
                     "ION_CHAMBER",
                     "ion chamber"
                  ],
                  [
                     "GEL",
                     "dose sensitive gel"
                  ],
                  [
                     "EPID",
                     "electronic portal imaging device"
                  ],
                  [
                     "FILM",
                     "dose sensitive film"
                  ]
               ]
            }
         ],
         "req" : "2",
         "name" : "Measured Dose Type",
         "module" : "Measured Dose Reference Record"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Person's Telecom Information",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Text Value",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(3008,0020)[<0>](300c,00b0)[<1>](300a,00dc)" : {
         "req" : "3",
         "desc" : "User-supplied identifier for the Bolus.",
         "module" : "RT Beams Session Record",
         "name" : "Bolus ID",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "name" : "Person Name",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "module" : "SOP Common",
         "name" : "Deidentification Action Sequence",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0198)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Position",
         "req" : "3",
         "desc" : "Position/Notch number of Fixation Device."
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "entity" : "Patient",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C",
         "module" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person's Address",
         "req" : "3",
         "desc" : "Person's mailing address"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Device Serial Number",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "RT Series",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series"
      },
      "(3008,0020)[<0>](300a,00c6)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "name" : "Radiation Type",
         "module" : "RT Beams Session Record",
         "req" : "1",
         "desc" : [
            "Particle type of delivered Beam.",
            {
               "type" : "variablelist",
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
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "UID",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0018,a001)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
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
         "name" : "Contributing Equipment Sequence",
         "module" : "SOP Common"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300c,00f0)" : {
         "module" : "RT Beams Session Record",
         "name" : "Referenced Control Point Index",
         "req" : "3",
         "desc" : "Uniquely identifies Control Point specified by Control Point Index (300A,0112) within Beam referenced by Referenced Beam Number (300C,0006).",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0008,009c)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "name" : "Consulting Physician's Name",
         "module" : "General Study",
         "req" : "3",
         "desc" : "Consulting physician(s) for this patient visit."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "RT Series",
         "name" : "Time",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(300a,0206)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Sequence describing treatment machine used for treatment delivery.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "RT Treatment Machine Record",
         "name" : "Treatment Machine Sequence"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0196)" : {
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Description",
         "desc" : "User-defined description of Fixation Device.",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "module" : "SOP Common"
      },
      "(3008,0056)" : {
         "module" : "RT Treatment Summary Record",
         "name" : "Most Recent Treatment Date",
         "req" : "2",
         "desc" : "Date of delivery of the most recent administration.",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "usage" : "U"
      },
      "(0012,0062)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient Identity Removed",
         "req" : "3",
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
         ]
      },
      "(0040,a390)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "HL7 Structured Document Reference Sequence",
         "module" : "SOP Common",
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
         "req" : "1C"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0068)[<2>](3008,0061)" : {
         "req" : "1",
         "desc" : [
            "Contains the Data Element Tag of the parent sequence containing the attribute that was corrected.",
            "The value is limited in scope to the Treatment Session Beam Sequence (3008,0020) and all nested sequences therein."
         ],
         "name" : "Parameter Sequence Pointer",
         "module" : "RT Beams Session Record",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9185)" : {
         "desc" : "Description of respiratory motion compensation technique.",
         "req" : "3",
         "name" : "Respiratory Motion Compensation Technique Description",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(0010,0021)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "module" : "Patient",
         "name" : "Issuer of Patient ID"
      },
      "(3008,0020)[<0>](300a,0420)" : {
         "req" : "3",
         "desc" : [
            "Introduces a Sequence of General Accessories associated with this Beam.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "General Accessory Sequence",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00c0)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "Recorded Compensator Sequence",
         "module" : "RT Beams Session Record",
         "req" : "3",
         "desc" : [
            "Sequence of treatment compensators associated with current Beam.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(300a,0206)[<0>](0018,1000)" : {
         "module" : "RT Treatment Machine Record",
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the equipment used for treatment delivery.",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
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
         "req" : "1",
         "module" : "RT Series",
         "name" : "Value Type",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](300c,00b0)[<1>](300a,00f9)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "3",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "name" : "Accessory Code",
         "module" : "RT Beams Session Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0116)[<2>](300a,0118)" : {
         "req" : "1",
         "desc" : [
            "Position of Wedge at current control point.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "RT Beams Session Record",
         "name" : "Wedge Position",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
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
         "name" : "Identifier Type Code",
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Date of Last Calibration"
      },
      "(0008,0123)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Context Group Identification Sequence"
      },
      "(0400,0561)" : {
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Original Attributes Sequence",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
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
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0010,2203)" : {
         "name" : "Patient's Sex Neutered",
         "module" : "Patient Study",
         "req" : "2C",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study"
      },
      "(3008,0220)[<0>](3008,005a)" : {
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "2",
         "desc" : "Number of fractions delivered as of Treatment Summary Report.",
         "module" : "RT Treatment Summary Record",
         "name" : "Number of Fractions Delivered"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "module" : "General Study",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "RT Series",
         "name" : "Concept Code Sequence"
      },
      "(0038,0060)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Service Episode ID",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "req" : "3"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
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
         "name" : "Universal Entity ID Type",
         "module" : "Patient Study"
      },
      "(3008,0020)[<0>](300a,0420)[<1>](300a,0421)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "General Accessory ID",
         "module" : "RT Beams Session Record",
         "req" : "1",
         "desc" : "User or machine supplied identifier for General Accessory."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
         "module" : "Patient",
         "req" : "3",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient"
      },
      "(0008,001b)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Original Specialized SOP Class UID"
      },
      "(0008,1040)" : {
         "name" : "Institutional Department Name",
         "module" : "General Equipment",
         "req" : "3",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "name" : "Identifying Private Elements",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(3008,0020)[<0>](300a,00c4)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "name" : "Beam Type",
         "desc" : [
            "Motion characteristic of delivered Beam.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "req" : "1"
      },
      "(0010,1030)" : {
         "module" : "Patient Study",
         "name" : "Patient's Weight",
         "req" : "3",
         "desc" : "Weight of the Patient, in kilograms.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "req" : "1",
         "module" : "Common Instance Reference",
         "name" : "Series Instance UID",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(0012,0040)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID",
         "module" : "Clinical Trial Subject",
         "req" : "1C",
         "desc" : [
            "The assigned identifier for the clinical trial or research subject. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            ". Shall be present if Clinical Trial Subject Reading ID (0012,0042) is absent. May be present otherwise."
         ]
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "name" : "Study Instance UID",
         "module" : "Patient",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "req" : "1C"
      },
      "(0008,010f)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "Context Identifier",
         "module" : "SOP Common",
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
         "req" : "1"
      },
      "(0018,1008)" : {
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Identifier of the gantry or positioner.",
         "module" : "General Equipment",
         "name" : "Gantry ID"
      },
      "(300a,0206)[<0>](300a,00b2)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Treatment Machine Record",
         "name" : "Treatment Machine Name",
         "req" : "2",
         "desc" : "User-defined name identifying treatment machine used for treatment delivery."
      },
      "(3008,0020)[<0>](300a,00ce)" : {
         "name" : "Treatment Delivery Type",
         "module" : "RT Beams Session Record",
         "req" : "2",
         "desc" : [
            "Delivery Type of treatment.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "TREATMENT",
                     "Normal patient treatment"
                  ],
                  [
                     "OPEN_PORTFILM",
                     "Portal image acquisition with open field"
                  ],
                  [
                     "TRMT_PORTFILM",
                     "Portal image acquisition with treatment port"
                  ],
                  [
                     "CONTINUATION",
                     "Continuation of interrupted treatment"
                  ],
                  [
                     "SETUP",
                     "No treatment beam is applied for this RT Beam. To be used for specifying the gantry, couch, and other machine positions where X-Ray set-up images or measurements are to be taken."
                  ],
                  [
                     "VERIFICATION",
                     "Treatment used for Quality Assurance rather than patient treatment"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](0008,1072)[<3>](0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57",
            "table_10-1"
         ],
         "entity" : "Treatment Record",
         "name" : "Institution Address",
         "module" : "RT Beams Session Record",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0146)" : {
         "req" : "1C",
         "desc" : [
            [
               "Direction of Table Top Roll Rotation when viewing the table along the positive Y-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. If required by treatment delivery device, shall be present for first item of Control Point Sequence. If required by treatment delivery device and if Table Top Roll Rotation Direction changes during Beam, shall be present in all subsequent items of Control Point Sequence. See ",
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
         "name" : "Table Top Roll Rotation Direction",
         "module" : "RT Beams Session Record",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0008,1032)" : {
         "req" : "3",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Procedure Code Sequence",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(3008,0020)[<0>](3008,00b0)[<1>](300a,00d3)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "name" : "Wedge Type",
         "desc" : [
            "Type of wedge defined for delivered Beam.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "STANDARD",
                     "standard (static) wedge"
                  ],
                  [
                     "DYNAMIC",
                     "moving Beam Limiting Device (collimator) jaw simulating wedge"
                  ],
                  [
                     "MOTORIZED",
                     "single wedge that can be removed from beam remotely"
                  ]
               ]
            }
         ],
         "req" : "2"
      },
      "(3008,0020)[<0>](3008,003b)" : {
         "req" : "3",
         "desc" : "Treatment Time actually delivered (sec).",
         "module" : "RT Beams Session Record",
         "name" : "Delivered Treatment Time",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0128)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "2C",
         "desc" : "Table Top Vertical position in IEC TABLE TOP coordinate system (mm). This value is interpreted as an absolute, rather than relative, Table setting. Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Table Top Vertical Position changes during beam administration.",
         "module" : "RT Beams Session Record",
         "name" : "Table Top Vertical Position"
      },
      "(3008,0010)[<0>](3004,0002)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "entity" : "Treatment Record",
         "name" : "Dose Units",
         "module" : "Measured Dose Reference Record",
         "req" : "1",
         "desc" : [
            "Units used to describe measured dose.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "GY",
                     "Gray"
                  ],
                  [
                     "RELATIVE",
                     "Dose relative to implicit reference value"
                  ]
               ]
            }
         ]
      },
      "(3008,0020)[<0>](3008,0037)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "name" : "Delivered Secondary Meterset",
         "module" : "RT Beams Session Record",
         "req" : "3",
         "desc" : "Machine setting actually delivered as recorded by secondary Meterset."
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0120)" : {
         "name" : "Beam Limiting Device Angle",
         "module" : "RT Beams Session Record",
         "desc" : "Beam Limiting Device (collimator) angle, i.e., orientation of IEC BEAM LIMITING DEVICE coordinate system with respect to IEC GANTRY coordinate system (degrees). Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if beam limiting device (collimator) angle changes during beam delivery.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0116)" : {
         "req" : "3",
         "desc" : [
            "Sequence of Wedge positions for current control point.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Wedge Position Sequence",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Sequence of beam control points for current treatment beam.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.21.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "name" : "Control Point Delivery Sequence",
         "module" : "RT Beams Session Record"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "name" : "Modifying System",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0108)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "name" : "Applicator ID",
         "req" : "1",
         "desc" : "User or machine supplied identifier for Applicator."
      },
      "(0008,1111)" : {
         "req" : "3",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Referenced Performed Procedure Step Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M"
      },
      "(0010,1001)" : {
         "desc" : "Other names used to identify the patient.",
         "req" : "3",
         "module" : "Patient",
         "name" : "Other Patient Names",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(3008,0020)[<0>](3008,00c0)[<1>](300a,00ef)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "User-supplied identifier for compensator tray.",
         "name" : "Compensator Tray ID",
         "module" : "RT Beams Session Record"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "name" : "Coding Scheme UID",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Patient",
         "name" : "Universal Entity ID",
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
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient"
      },
      "(0008,0118)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "name" : "Mapping Resource UID",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "The unique identifier of the Mapping Resource"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0012,0072)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series",
         "name" : "Clinical Trial Series Description",
         "module" : "Clinical Trial Series",
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
         ]
      },
      "(0100,0424)" : {
         "module" : "SOP Common",
         "name" : "SOP Authorization Comment",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9186)" : {
         "req" : "3",
         "desc" : "Identifies the device providing the respiratory signal.",
         "module" : "RT Patient Setup",
         "name" : "Respiratory Signal Source ID",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID"
      },
      "(3008,0050)[<0>](300a,0016)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "name" : "Dose Reference Description",
         "module" : "RT Treatment Summary Record",
         "req" : "3",
         "desc" : "User-defined description of Dose Reference."
      },
      "(0010,2293)" : {
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
         "req" : "2C",
         "module" : "Patient",
         "name" : "Patient Breed Code Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
         "module" : "Patient"
      },
      "(3008,00e0)[<0>](300c,0051)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "desc" : [
            "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.10"
               },
               "el" : "xref"
            },
            " of referenced RT Plan referenced in Referenced RT Plan Sequence (300C,0002) of ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.17"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "module" : "RT Treatment Summary Record",
         "name" : "Referenced Dose Reference Number"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Treatment Record",
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0012,0051)" : {
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial or research. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "name" : "Clinical Trial Time Point Description",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "req" : "1C",
         "module" : "Patient",
         "name" : "Referenced Segment Number",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence"
      },
      "(0008,0005)" : {
         "req" : "1C",
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
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "entity" : "Series",
         "name" : "Institution Code Sequence",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(300a,0180)[<0>](300a,0401)" : {
         "module" : "RT Patient Setup",
         "name" : "Referenced Setup Image Sequence",
         "desc" : [
            "Sequence of setup verification images for this patient setup.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.12.1.1"
                  }
               }
            ]
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0230)" : {
         "module" : "RT Beams Session Record",
         "name" : "Beam Stopper Position",
         "desc" : [
            "Position of Beam Stopper during beam administration.",
            {
               "list" : [
                  [
                     "EXTENDED",
                     "Beam Stopper extended"
                  ],
                  [
                     "RETRACTED",
                     "Beam Stopper retracted"
                  ],
                  [
                     "UNKNOWN",
                     "Position unknown"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(0010,1100)" : {
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
         "req" : "3",
         "name" : "Referenced Patient Photo Sequence",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(3008,0020)[<0>](3008,0036)" : {
         "module" : "RT Beams Session Record",
         "name" : "Delivered Primary Meterset",
         "req" : "3",
         "desc" : "Machine setting actually delivered as recorded by primary Meterset.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0090)[<1>](3008,0092)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "name" : "Referenced Calculated Dose Reference Number",
         "desc" : "Uniquely identifies Calculated Dose Reference specified by Calculated Dose Reference Number (3008,0072) within Calculated Dose Reference Sequence (3008,0070). Required if Referenced Dose Reference Number (300C,0051) is not sent.",
         "req" : "1C"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "module" : "Patient",
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
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,0250)" : {
         "name" : "Performed Procedure Step End Date",
         "module" : "RT Series",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0012,0082)" : {
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "module" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0435)" : {
         "desc" : [
            "Opening (in mm) of the applicator's aperture in IEC BEAM LIMITING DEVICE coordinate system in Y-Direction.",
            "Required if Applicator Aperture Shape (300A,0432) is SYM_RECTANGLE."
         ],
         "req" : "1C",
         "module" : "RT Beams Session Record",
         "name" : "Applicator Opening Y",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Digital Signatures Sequence",
         "req" : "3",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "req" : "2C",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common",
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0081)" : {
         "req" : "1C",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(3008,0010)[<0>](3008,0016)" : {
         "desc" : "Measured Dose in units specified by Dose Units (3004,0002).",
         "req" : "2",
         "name" : "Measured Dose Value",
         "module" : "Measured Dose Reference Record",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-55"
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "req" : "1",
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
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
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
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "MAC Algorithm",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "desc" : "May include Sequence Attributes and their Items.",
         "module" : "SOP Common",
         "name" : "Any Attribute from the main data set that was modified or removed."
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "module" : "Clinical Trial Study",
         "name" : "Distribution Type",
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
         "entity" : "Study",
         "usage" : "U"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "req" : "2",
         "name" : "Source of Previous Values",
         "module" : "SOP Common"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "module" : "General Study",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00d0)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "name" : "Recorded Block Sequence",
         "module" : "RT Beams Session Record",
         "req" : "3",
         "desc" : [
            "Sequence of blocks associated with current Beam.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0018,1050)" : {
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "module" : "General Equipment"
      },
      "(0040,0275)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Request Attributes Sequence",
         "req" : "3",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(300a,0180)[<0>](300a,01b0)" : {
         "req" : "3",
         "desc" : [
            "Setup Technique used in Patient Setup.",
            {
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
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "module" : "RT Patient Setup",
         "name" : "Setup Technique",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "module" : "SOP Common"
      },
      "(3008,0020)[<0>](3002,0050)[<1>](3002,0052)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "desc" : [
            "Identifier for the specific fluence-shaping mode.",
            "Required if Fluence Mode (3002,0051) has value NON_STANDARD."
         ],
         "req" : "1C",
         "module" : "RT Beams Session Record",
         "name" : "Fluence Mode ID"
      },
      "(3008,0020)[<0>](3008,002a)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "desc" : [
            "Conditions under which treatment was terminated.",
            {
               "title" : "Enumerated Values:",
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
                     "machine terminated treatment"
                  ],
                  [
                     "UNKNOWN",
                     "status at termination unknown"
                  ]
               ]
            }
         ],
         "req" : "1",
         "module" : "RT Beams Session Record",
         "name" : "Treatment Termination Status"
      },
      "(0010,0010)" : {
         "req" : "2",
         "desc" : "Patient's full name.",
         "module" : "Patient",
         "name" : "Patient's Name",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9171)" : {
         "usage" : "U",
         "entity" : "Treatment Record",
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
      "(3008,0054)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "name" : "First Treatment Date",
         "module" : "RT Treatment Summary Record",
         "desc" : "Date of delivery of the first treatment.",
         "req" : "2"
      },
      "(0020,000d)" : {
         "desc" : "Unique identifier for the Study.",
         "req" : "1",
         "module" : "General Study",
         "name" : "Study Instance UID",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "name" : "Breed Registry Code Sequence",
         "module" : "Patient"
      },
      "(3008,0020)[<0>](300a,0420)[<1>](300a,0423)" : {
         "req" : "3",
         "desc" : [
            "Specifies the type of accessory.",
            {
               "type" : "variablelist",
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
               "title" : "Defined Terms:"
            }
         ],
         "name" : "General Accessory Type",
         "module" : "RT Beams Session Record",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0008,1049)" : {
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "req" : "3",
         "module" : "General Study",
         "name" : "Physician(s) of Record Identification Sequence"
      },
      "(3008,0020)[<0>](3008,0080)[<1>](3008,0016)" : {
         "name" : "Measured Dose Value",
         "module" : "RT Beams Session Record",
         "req" : "1",
         "desc" : [
            "Measured Dose in units specified by Dose Units (3004,0002) in sequence referenced by Measured Dose Reference Sequence (3008,0010) or Dose Reference Sequence (300A,0010) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.10"
               }
            },
            " of referenced RT Plan as defined above."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a2)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "desc" : [
            "Type of Shielding Device used in Patient Setup.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
               ]
            }
         ],
         "req" : "1",
         "name" : "Shielding Device Type",
         "module" : "RT Patient Setup"
      },
      "(0020,0010)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "name" : "Study ID",
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,019a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "name" : "Fixation Device Roll Angle",
         "module" : "RT Patient Setup",
         "desc" : "The Fixation Device Roll Angle, i.e., orientation of ROLLED FIXATION DEVICE coordinate system with respect to IEC PITCHED FIXATION DEVICE coordinate system (degrees). Rolling is the rotation around IEC PATIENT SUPPORT Y-axis.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](3008,0062)" : {
         "module" : "RT Beams Session Record",
         "name" : "Override Parameter Pointer",
         "desc" : "Contains the Data Element Tag of the attribute that was overridden.",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "entity" : "Treatment Record"
      },
      "(3008,0010)[<0>](3008,0012)" : {
         "name" : "Measured Dose Description",
         "module" : "Measured Dose Reference Record",
         "desc" : "User-defined description of Dose Reference (e.g., \"Exit dose\", \"Point A\").",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "entity" : "Treatment Record"
      },
      "(0038,0062)" : {
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the type of service episode.",
         "req" : "3",
         "name" : "Service Episode Description",
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "1C",
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "module" : "RT Series",
         "name" : "Requested Procedure ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "RT Series",
         "name" : "Numeric Value"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "name" : "Institution Address",
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
         "name" : "Data Elements Signed",
         "req" : "1",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0008,0060)" : {
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "module" : "RT Series",
         "name" : "Modality",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300a,0206)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "module" : "RT Treatment Machine Record",
         "req" : "2",
         "desc" : "Institution where the equipment is located that was used for treatment delivery.",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Strain Source Registry Code Sequence",
         "req" : "1",
         "desc" : [
            [
               "Identification of the organization that is the registry of sources of animals. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "req" : "3",
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
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "req" : "1",
         "desc" : [
            "Type of object instances referenced.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "DICOM",
                     null
                  ],
                  [
                     "CDA",
                     null
                  ]
               ]
            }
         ],
         "name" : "Type of Instances",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0020,0013)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-53"
            ],
            "entity" : "Treatment Record",
            "name" : "Instance Number",
            "module" : "RT General Treatment Record",
            "req" : "1",
            "desc" : "Instance number identifying this particular instance of the object."
         },
         {
            "entity" : "Treatment Record",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "usage" : "M",
            "req" : "3",
            "desc" : "A number that identifies this Composite object instance.",
            "name" : "Instance Number",
            "module" : "SOP Common"
         }
      ],
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Retrieve AE Title",
         "req" : "1",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network."
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "req" : "1",
         "desc" : [
            "Describes the purpose for which the related equipment is being referenced.",
            "Only a single Item shall be included in this Sequence.",
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
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0250)" : {
         "desc" : "Date when fraction was delivered.",
         "req" : "2",
         "module" : "RT Treatment Summary Record",
         "name" : "Treatment Date",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "module" : "SOP Common",
         "name" : "Institution Address",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Treatment Record"
      },
      "(0008,009d)" : {
         "name" : "Consulting Physician Identification Sequence",
         "module" : "General Study",
         "req" : "3",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(3008,0200)" : {
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "desc" : [
            "Status of the Treatment at the time the Treatment Summary was created.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.23.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "1",
         "module" : "RT Treatment Summary Record",
         "name" : "Current Treatment Status"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0124)" : {
         "name" : "Table Top Eccentric Axis Distance",
         "module" : "RT Beams Session Record",
         "req" : "3",
         "desc" : "Distance (positive) from the IEC PATIENT SUPPORT vertical axis to the IEC TABLE TOP ECCENTRIC vertical axis (mm).",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "name" : "Institution Address",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0114)" : {
         "module" : "RT Beams Session Record",
         "name" : "Nominal Beam Energy",
         "req" : "3",
         "desc" : "Nominal Beam Energy at control point.",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "module" : "Patient",
         "name" : "Breed Registration Number",
         "desc" : "Identification number of an animal within the registry.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(300a,0180)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "name" : "Patient Setup Sequence",
         "module" : "RT Patient Setup",
         "desc" : [
            "Sequence of patient setup data for current plan.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(3008,0020)[<0>](3002,0050)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "3",
         "desc" : [
            "Sequence defining whether the primary fluence of the treatment beam used a non-standard fluence-shaping when the beam was delivered.",
            "Only a single item is permitted in this Sequence."
         ],
         "name" : "Primary Fluence Mode Sequence",
         "module" : "RT Beams Session Record"
      },
      "(3008,0020)[<0>](300a,00c2)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "name" : "Beam Name",
         "module" : "RT Beams Session Record",
         "desc" : "User-defined name for delivered Beam.",
         "req" : "3"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(3008,0020)[<0>](3002,0050)[<1>](3002,0051)" : {
         "name" : "Fluence Mode",
         "module" : "RT Beams Session Record",
         "req" : "1",
         "desc" : [
            "Describes whether the fluence shaping is the standard mode for the beam or an alternate.",
            {
               "list" : [
                  [
                     "STANDARD",
                     "Uses standard fluence-shaping"
                  ],
                  [
                     "NON_STANDARD",
                     "Uses a non-standard fluence-shaping mode"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "req" : "1",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0199)" : {
         "desc" : "The Fixation Device Pitch Angle, i.e., orientation of PITCHED FIXATION DEVICE coordinate system with respect to IEC PATIENT SUPPORT coordinate system (degrees). Pitching is the rotation around IEC PATIENT SUPPORT X-axis.",
         "req" : "3",
         "name" : "Fixation Device Pitch Angle",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(3008,0020)[<0>](300c,0040)[<1>](0008,1150)" : {
         "module" : "RT Beams Session Record",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57",
            "table_10-11"
         ],
         "entity" : "Treatment Record"
      },
      "(0008,103e)" : {
         "req" : "3",
         "desc" : "Description of the series.",
         "module" : "RT Series",
         "name" : "Series Description",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
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
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ]
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
         "req" : "3",
         "name" : "Person's Telecom Information",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0100,0410)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
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
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "SOP Instance Status",
         "module" : "SOP Common"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "General Study",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "module" : "RT Series",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
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
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "module" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study"
      },
      "(3008,0020)[<0>](3008,0033)" : {
         "name" : "Specified Secondary Meterset",
         "module" : "RT Beams Session Record",
         "desc" : "Desired machine setting of secondary Meterset.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0040,0245)" : {
         "module" : "RT Series",
         "name" : "Performed Procedure Step Start Time",
         "desc" : "Time on which the Performed Procedure Step started.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "name" : "Date",
         "module" : "RT Series"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Referenced SOP Sequence",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(3008,00e0)[<0>](3008,0052)" : {
         "req" : "1",
         "desc" : "Cumulative Dose delivered to Dose Reference (Gy).",
         "name" : "Cumulative Dose to Dose Reference",
         "module" : "RT Treatment Summary Record",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "req" : "1",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "targetptr" : "sect_E.3.10",
                     "xrefstyle" : "template:PS3.15 Section %n %t"
                  }
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
         "name" : "Block Identifying Information Status",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0034)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "name" : "Patient's Death Date in Alternative Calendar"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(300a,0206)[<0>](0008,1090)" : {
         "module" : "RT Treatment Machine Record",
         "name" : "Manufacturer's Model Name",
         "req" : "2",
         "desc" : "Manufacturer's model name of the equipment used for treatment delivery.",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series"
      },
      "(3008,00e0)[<0>](300a,0016)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "name" : "Dose Reference Description",
         "module" : "RT Treatment Summary Record",
         "desc" : "User-defined description of Dose Reference.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "name" : "Requested Procedure Description",
         "module" : "RT Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series"
      },
      "(0012,0021)" : {
         "name" : "Clinical Trial Protocol Name",
         "module" : "Clinical Trial Subject",
         "desc" : [
            "The name of the clinical trial or research protocol. See ",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient"
      },
      "(3008,0070)[<0>](3008,0074)" : {
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "req" : "3",
         "desc" : "User-defined description of Calculated Dose Reference.",
         "name" : "Calculated Dose Reference Description",
         "module" : "Calculated Dose Reference Record"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1",
         "name" : "Coding Scheme Designator",
         "module" : "SOP Common"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0436)" : {
         "req" : "3",
         "desc" : "Radiation source to applicator mounting position distance (in mm) for current applicator.",
         "module" : "RT Beams Session Record",
         "name" : " Source to Applicator Mounting Position Distance",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(300a,0180)[<0>](300a,01a0)" : {
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : [
            "Sequence of Shielding Devices used in Patient Setup.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Shielding Device Sequence",
         "module" : "RT Patient Setup"
      },
      "(0008,0124)" : {
         "name" : "Mapping Resource Identification Sequence",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0100,0420)" : {
         "module" : "SOP Common",
         "name" : "SOP Authorization DateTime",
         "req" : "3",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,002b)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "Treatment Termination Code",
         "module" : "RT Beams Session Record",
         "req" : "3",
         "desc" : "Treatment machine termination code. This code is dependent upon the particular application and equipment."
      },
      "(0010,2201)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient Species Description",
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
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
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "Digital Signature Security Profiles (see ",
                        {
                           "attrs" : {
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15"
                           },
                           "el" : "olink"
                        },
                        ") may require the use of a restricted subset of these terms."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fe92f60f-2615-4c9b-bab0-86d640bd9af4"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "name" : "Certificate Type",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,0051)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0020,0011)" : {
         "desc" : "A number that identifies this series.",
         "req" : "2",
         "name" : "Series Number",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M"
      },
      "(0010,0026)" : {
         "name" : "Source Patient Group Identification Sequence",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00d0)[<1>](300a,00f5)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "name" : "Block Tray ID",
         "desc" : "User-supplied identifier for block tray or Electron Insert.",
         "req" : "3"
      },
      "(3008,0020)[<0>](300a,0420)[<1>](300a,0422)" : {
         "desc" : "User supplied description of General Accessory.",
         "req" : "3",
         "name" : "General Accessory Description",
         "module" : "RT Beams Session Record",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series"
      },
      "(3008,0020)[<0>](300a,0107)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Sequence of Applicators associated with Beam.",
            "Only a single item is permitted in this Sequence."
         ],
         "name" : "Applicator Sequence",
         "module" : "RT Beams Session Record"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,0032)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "desc" : "Birth time of the Patient.",
         "name" : "Patient's Birth Time",
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(3008,0020)[<0>](300c,0006)" : {
         "name" : "Referenced Beam Number",
         "module" : "RT Beams Session Record",
         "desc" : [
            "References Beam specified by Beam Number (300A,00C0) in Beam Sequence (300A,00B0) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.14",
                  "xrefstyle" : "select: title"
               }
            },
            " within referenced RT Plan."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Text Value",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "RT Series",
         "name" : "Date"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "module" : "RT Series"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0048)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "Dose Rate actually delivered for segment beginning at current control point (Meterset/min).",
         "req" : "2",
         "module" : "RT Beams Session Record",
         "name" : "Dose Rate Delivered"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0100,0426)" : {
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Authorization Equipment Certification Number",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](3008,0061)" : {
         "desc" : "Contains the Data Element Tag of the parent sequence containing the attribute that was overridden. The value is limited in scope to the Treatment Session Beam Sequence (3008,0020) and all nested sequences therein.",
         "req" : "3",
         "module" : "RT Beams Session Record",
         "name" : "Parameter Sequence Pointer",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0144)" : {
         "module" : "RT Beams Session Record",
         "name" : "Table Top Roll Angle",
         "desc" : [
            "Table Top Roll Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the IEC Y-axis of the IEC TABLE TOP coordinate system (degrees). If required by treatment delivery device, shall be present for first item of Control Point Sequence. If required by treatment delivery device and if Table Top Roll Angle changes during Beam, shall be present in all subsequent items of Control Point Sequence. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "module" : "Patient",
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
         "req" : "3"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1160)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "usage" : "U",
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
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "module" : "RT Patient Setup",
         "name" : "Referenced Frame Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Scheduled Procedure Step Description",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "req" : "3"
      },
      "(0010,2299)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Responsible Organization",
         "module" : "Patient",
         "req" : "2C",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ]
      },
      "(0018,1020)" : {
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M"
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "name" : "Referring Physician Identification Sequence",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0080)[<1>](3008,0082)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "name" : "Referenced Measured Dose Reference Number",
         "req" : "1C",
         "desc" : "Uniquely references Measured Dose Reference specified by Measured Dose Reference Number (3008,0064) in Measured Dose Reference Sequence (3008,0010). Required if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "name" : "Concept Code Sequence",
         "module" : "RT Series"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme Name",
         "desc" : "The coding scheme full common name",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00c0)[<1>](300c,00d0)" : {
         "module" : "RT Beams Session Record",
         "name" : "Referenced Compensator Number",
         "req" : "1",
         "desc" : "Uniquely identifies compensator specified by Compensator Number (300A,00E4) within Beam referenced by Referenced Beam Number (300C,0006).",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0068)[<2>](3008,0065)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "Contains the Data Element Tag of the attribute that was corrected.",
         "req" : "1",
         "module" : "RT Beams Session Record",
         "name" : "Parameter Pointer"
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "module" : "SOP Common",
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
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(300a,0078)" : {
         "name" : "Number of Fractions Planned",
         "module" : "RT Beams Session Record",
         "req" : "2",
         "desc" : "Total number of treatments (Fractions) planned for current Fraction Group.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "WADO Retrieval Sequence",
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
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(0008,001a)" : {
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Related General SOP Class UID",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : [
            "An identifier for the patient.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "req" : "1",
         "name" : "Patient ID",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "module" : "Patient",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](0008,1072)[<3>](0008,0082)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "module" : "RT Beams Session Record"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a8)" : {
         "name" : "Shielding Device Position",
         "module" : "RT Patient Setup",
         "desc" : "Position/Notch number of Shielding Device.",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](300a,0420)[<1>](300a,0425)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Radiation source to general accessory distance (in mm) for current accessory.",
         "name" : "Source to General Accessory Distance",
         "module" : "RT Beams Session Record"
      },
      "(0008,0096)[<0>](0040,1104)" : {
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
         "req" : "3",
         "name" : "Person's Telecom Information",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(3008,0220)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Sequence describing current state of planned vs. delivered fraction groups.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "RT Treatment Summary Record",
         "name" : "Fraction Group Summary Sequence"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0068)" : {
         "req" : "3",
         "desc" : [
            "Introduces a sequence of items describing any corrections made to any attributes prior to delivery of the next control point.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "RT Beams Session Record",
         "name" : "Corrected Parameter Sequence",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0012,0020)" : {
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
         "req" : "1",
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0010,2160)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Ethnic group or race of the patient.",
         "req" : "3",
         "module" : "Patient",
         "name" : "Ethnic Group"
      },
      "(0012,0071)" : {
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series ID",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "entity" : "Series",
         "usage" : "U"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Study",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b6)" : {
         "name" : "Setup Device Type",
         "module" : "RT Patient Setup",
         "desc" : [
            "Type of Setup Device used for Patient alignment.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
               ]
            }
         ],
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Treatment Record",
         "name" : "Signature",
         "module" : "SOP Common",
         "req" : "1",
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
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0008,1030)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "name" : "Study Description",
         "module" : "General Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "req" : "3"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(0008,0020)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Date",
         "desc" : "Date the Study started.",
         "req" : "2"
      },
      "(3008,0020)[<0>](300c,0040)[<1>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57",
            "table_10-11"
         ],
         "entity" : "Treatment Record",
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Beams Session Record",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "RT Series",
         "name" : "DateTime"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(3008,0220)[<0>](300a,0078)" : {
         "module" : "RT Treatment Summary Record",
         "name" : "Number of Fractions Planned",
         "desc" : "Number of fractions planned for this fraction group.",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "usage" : "U"
      },
      "(0012,0063)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "De-identification Method",
         "module" : "Patient",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
            {
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
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 }
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
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 },
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the ",
                                    {
                                       "attrs" : {
                                          "linkend" : "sect_C.12.1",
                                          "xrefstyle" : "select: title"
                                       },
                                       "el" : "xref"
                                    },
                                    ". De-identifying equipment may use a Purpose of Reference of ",
                                    {
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ],
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.16",
                                          "targetptr" : "DCM_109104"
                                       }
                                    },
                                    "."
                                 ]
                              },
                              "\n                      "
                           ]
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,014c)" : {
         "req" : "3",
         "desc" : [
            [
               "Direction of Gantry Pitch Angle when viewing along the positive X-axis of the IEC GANTRY coordinate system, for segment following Control Point. If used, must be present for first item of Control Point Sequence, or if used and Gantry Pitch Rotation Direction changes during Beam, must be present. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.8"
                  },
                  "el" : "xref"
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
         "name" : "Gantry Pitch Rotation Direction",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "RT Series",
         "name" : "UID"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0433)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : [
            "Opening (in mm) of the applicator's aperture in IEC BEAM LIMITING DEVICE coordinate system. In case of square-shaped applicator contains the length of the sides of the square. In case of circular-shaped applicators, contains the diameter of the circular aperture.",
            "Required if Applicator Aperture Shape (300A,0432) is SYM_SQUARE or SYM_CIRCULAR."
         ],
         "req" : "1C",
         "module" : "RT Beams Session Record",
         "name" : "Applicator Opening"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "module" : "SOP Common",
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
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "entity" : "Treatment Record"
      },
      "(0008,0015)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               }
            },
            ")."
         ],
         "module" : "SOP Common",
         "name" : "Instance Coercion DateTime"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "name" : "Text Value",
         "module" : "RT Series"
      },
      "(0010,4000)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "desc" : "User-defined additional information about the patient.",
         "module" : "Patient",
         "name" : "Patient Comments"
      },
      "(3008,0030)" : {
         "desc" : [
            "Reference to RT Treatment Records to which the current RT Treatment Record is significantly related.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "RT General Treatment Record",
         "name" : "Referenced Treatment Record Sequence",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-53"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "module" : "RT Series",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0010,0030)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Patient's Birth Date",
         "module" : "Patient",
         "desc" : "Birth date of the patient.",
         "req" : "2"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0434)" : {
         "name" : "Applicator Opening X",
         "module" : "RT Beams Session Record",
         "req" : "1C",
         "desc" : [
            "Opening (in mm) of the applicator's aperture in IEC BEAM LIMITING DEVICE coordinate system in X-Direction.",
            "Required if Applicator Aperture Shape (300A,0432) is SYM_RECTANGLE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,00f9)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "name" : "Accessory Code",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "name" : "Contribution DateTime",
         "module" : "SOP Common"
      },
      "(3008,0020)[<0>](3008,00b0)[<1>](300a,00d2)" : {
         "name" : "Wedge Number",
         "module" : "RT Beams Session Record",
         "req" : "3",
         "desc" : "Identification number of the Wedge. The value of Wedge Number (300A,00D2) shall be unique within the wedge sequence.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common",
         "name" : "Contribution Description"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,011a)[<2>](300a,00b8)" : {
         "req" : "1",
         "desc" : [
            "Type of beam limiting device. The value of this attribute shall correspond to RT Beam Limiting Device Type (300A,00B8) defined in an element of Beam Limiting Device Leaf Pairs Sequence (3008,00A0).",
            {
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
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "RT Beam Limiting Device Type",
         "module" : "RT Beams Session Record",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(3008,0020)[<0>](3008,0080)[<1>](300c,0051)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "desc" : [
            "Uniquely references Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.10"
               }
            },
            " of referenced RT Plan. Required if Referenced Measured Dose Reference Number (3008,0082) is not sent. It shall not be present otherwise."
         ],
         "req" : "1C",
         "name" : "Referenced Dose Reference Number",
         "module" : "RT Beams Session Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
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
         "req" : "1",
         "module" : "RT Series",
         "name" : "Value Type"
      },
      "(0008,0018)" : {
         "req" : "1",
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
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "name" : "SOP Instance UID",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "req" : "1C",
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
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01d0)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "name" : "Setup Reference Description",
         "desc" : "User-defined description of Setup Reference used for patient alignment.",
         "req" : "3"
      },
      "(0012,0050)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Time Point ID",
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
         "req" : "2"
      },
      "(3008,0020)[<0>](300c,0040)" : {
         "module" : "RT Beams Session Record",
         "name" : "Referenced Verification Image Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of verification images obtained during delivery of current beam.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,002a)" : {
         "module" : "RT Treatment Summary Record",
         "name" : "Treatment Termination Status",
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
         "req" : "2",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "usage" : "U"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0251)" : {
         "module" : "RT Treatment Summary Record",
         "name" : "Treatment Time",
         "req" : "2",
         "desc" : "Time when fraction was delivered.",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "usage" : "U"
      },
      "(3008,0020)[<0>](300c,0040)[<1>](3008,007a)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Beams Session Record",
         "name" : "End Meterset",
         "req" : "3",
         "desc" : "Cumulative Meterset Weight within Beam referenced by Referenced Beam Number at which image acquisition ends."
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "module" : "RT Series",
         "name" : "Protocol Context Sequence",
         "req" : "3",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "entity" : "Series"
      },
      "(3008,0020)[<0>](300a,00d0)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "desc" : "Number of wedges associated with current delivered Beam.",
         "req" : "1",
         "name" : "Number of Wedges",
         "module" : "RT Beams Session Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0126)" : {
         "desc" : [
            "Direction of Table Top Eccentric Rotation when viewing table from above, for segment beginning at current Control Point. Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Table Top Eccentric Rotation Direction changes during beam administration.",
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
         "req" : "1C",
         "name" : "Table Top Eccentric Rotation Direction",
         "module" : "RT Beams Session Record",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "req" : "1",
         "name" : "Study Instance UID",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(3008,0020)[<0>](3008,00d0)[<1>](300c,00e0)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "3",
         "desc" : "Uniquely identifies block specified by Block Number (300A,00FC) within Beam referenced by Referenced Beam Number (300C,0006).",
         "name" : "Referenced Block Number",
         "module" : "RT Beams Session Record"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "req" : "1",
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
         "module" : "SOP Common",
         "name" : "Encrypted Content",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,003a)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "desc" : "Treatment Time set (sec).",
         "req" : "3",
         "module" : "RT Beams Session Record",
         "name" : "Specified Treatment Time"
      },
      "(300a,0180)[<0>](300a,0183)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "name" : "Patient Setup Label",
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : "The user-defined label for the patient setup."
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01b2)" : {
         "desc" : "User-defined description of Setup Technique.",
         "req" : "3",
         "module" : "RT Patient Setup",
         "name" : "Setup Technique Description",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](0008,1072)[<3>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "req" : "3",
         "module" : "RT Beams Session Record",
         "name" : "Person's Address",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57",
            "table_10-1"
         ]
      },
      "(0008,0122)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "Mapping Resource Name",
         "module" : "SOP Common",
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
         ]
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1155)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "U",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Patient Setup"
      },
      "(0040,0260)" : {
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "name" : "Performed Protocol Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Treatment Record"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "module" : "General Study",
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
         ]
      },
      "(3008,0220)[<0>](300c,0022)" : {
         "req" : "3",
         "desc" : "References Fraction Group Number (300A,0071) in Fraction Group Sequence (300A,0070) in the referenced RT Plan.",
         "module" : "RT Treatment Summary Record",
         "name" : "Referenced Fraction Group Number",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U"
      },
      "(0010,2298)" : {
         "module" : "Patient",
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "name" : "Patient ID",
         "module" : "Patient",
         "req" : "1",
         "desc" : "Primary identifier for the group of subjects.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "usage" : "M",
         "entity" : "Series",
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
         "name" : "Concept Name Code Sequence",
         "module" : "RT Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "req" : "1C",
         "module" : "SOP Common",
         "name" : "Nonidentifying Private Elements"
      },
      "(3008,0020)[<0>](3008,00a0)" : {
         "req" : "1",
         "desc" : [
            "Sequence of beam limiting device (collimator) jaw or leaf (element) leaf pair values.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Beam Limiting Device Leaf Pairs Sequence",
         "module" : "RT Beams Session Record",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0008,1060)" : {
         "req" : "3",
         "desc" : "Names of the physician(s) reading the Study.",
         "module" : "General Study",
         "name" : "Name of Physician(s) Reading Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "req" : "1",
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
         "module" : "Patient",
         "name" : "Strain Source",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0068)[<2>](3008,006a)" : {
         "desc" : "The value applied to the attribute that was referenced by the Parameter Sequence Pointer (3008,0061), Parameter Item Index (3008,0063) and Parameter Pointer (3008,0065).",
         "req" : "1",
         "module" : "RT Beams Session Record",
         "name" : "Correction Value",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(300a,0206)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the equipment used for treatment delivery.",
         "req" : "2",
         "module" : "RT Treatment Machine Record",
         "name" : "Manufacturer",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "usage" : "M"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "name" : "Referenced Series Sequence",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "module" : "RT Series"
      },
      "(3008,0202)" : {
         "req" : "3",
         "desc" : "Comment on current treatment status.",
         "name" : "Treatment Status Comment",
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "name" : "Institution Name",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C"
      },
      "(0028,0120)" : {
         "usage" : "M",
         "entity" : "Equipment",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
                                 },
                                 "content" : [
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
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
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
                                 },
                                 "el" : "para",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
                                 "content" : [
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
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
         "module" : "General Equipment",
         "name" : "Pixel Padding Value"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "req" : "3",
         "desc" : "Reason for requesting this procedure.",
         "module" : "RT Series",
         "name" : "Reason for the Requested Procedure",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Home Community ID",
         "req" : "3",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed."
      },
      "(300c,0002)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "usage" : "M",
         "desc" : [
            "Reference to a RT Plan.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "req" : "2",
         "name" : "Referenced RT Plan Sequence",
         "module" : "RT General Treatment Record"
      },
      "(3008,00e0)" : {
         "req" : "3",
         "desc" : [
            "Sequence of references to Measured Dose References.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Treatment Summary Measured Dose Reference Sequence",
         "module" : "RT Treatment Summary Record",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(300a,0180)[<0>](300a,01d2)" : {
         "module" : "RT Patient Setup",
         "name" : "Table Top Vertical Setup Displacement",
         "req" : "3",
         "desc" : "Vertical Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., vertical offset between patient positioning performed using setup and treatment position.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record"
      },
      "(0010,0213)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The nomenclature used for Strain Description (0010,0212). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "3",
         "module" : "Patient",
         "name" : "Strain Nomenclature"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0125)" : {
         "module" : "RT Beams Session Record",
         "name" : "Table Top Eccentric Angle",
         "desc" : "Table Top (non-isocentric) angle, i.e., orientation of IEC TABLE TOP ECCENTRIC coordinate system with respect to IEC PATIENT SUPPORT coordinate system (degrees). Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Table Top Eccentric Angle changes during beam administration.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0090)[<1>](3008,0076)" : {
         "req" : "1",
         "desc" : "Calculated Dose (Gy).",
         "module" : "RT Beams Session Record",
         "name" : "Calculated Dose Reference Dose Value",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "RT Series",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(3008,0020)[<0>](300a,00e0)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "2",
         "desc" : "Number of compensators associated with current delivered Beam.",
         "name" : "Number of Compensators",
         "module" : "RT Beams Session Record"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "req" : "1",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "module" : "Patient",
         "name" : "Retrieve URL",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "name" : "Person Name",
         "module" : "RT Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(3008,0070)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "entity" : "Treatment Record",
         "module" : "Calculated Dose Reference Record",
         "name" : "Calculated Dose Reference Sequence",
         "desc" : [
            "Sequence of doses estimated for each treatment delivery.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0020,9172)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,011f)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "name" : "Gantry Rotation Direction",
         "req" : "1C",
         "desc" : [
            "Direction of Gantry Rotation when viewing gantry from isocenter, for segment beginning at current Control Point. Required for Control Point 0 of Control Point Delivery Sequence (3008,0040), or if Gantry Rotation Direction changes during beam administration.",
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
         ]
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "module" : "SOP Common"
      },
      "(3008,0030)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT General Treatment Record",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0012,0030)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Site ID",
         "module" : "Clinical Trial Subject",
         "req" : "2",
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
      "(0010,2180)" : {
         "module" : "Patient Study",
         "name" : "Occupation",
         "desc" : "Occupation of the Patient.",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study"
      },
      "(0018,1201)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M",
         "module" : "General Equipment",
         "name" : "Time of Last Calibration",
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
         ]
      },
      "(300a,0180)[<0>](300a,0190)" : {
         "desc" : [
            "Sequence of Fixation Devices used in Patient Setup.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Fixation Device Sequence",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0010,21b0)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : "Additional information about the Patient's medical history.",
         "req" : "3",
         "module" : "Patient Study",
         "name" : "Additional Patient History"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "req" : "3",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,0206)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution where the equipment is located that was used for treatment delivery.",
         "req" : "3",
         "module" : "RT Treatment Machine Record",
         "name" : "Institution Address",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
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
         "name" : "Reason for the Attribute Modification",
         "module" : "SOP Common"
      },
      "(0010,2202)" : {
         "module" : "Patient",
         "name" : "Patient Species Code Sequence",
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Only a single Item shall be included in this Sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](0008,1072)[<3>](0008,0080)" : {
         "module" : "RT Beams Session Record",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-57",
            "table_10-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00d0)[<1>](300a,00f9)" : {
         "module" : "RT Beams Session Record",
         "name" : "Accessory Code",
         "desc" : "An identifier for the Block intended to be read by a device such as a bar-code reader.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00b0)[<1>](300a,00d5)" : {
         "module" : "RT Beams Session Record",
         "name" : "Wedge Angle",
         "desc" : "Nominal wedge angle delivered (degrees).",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0008,1010)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Station Name",
         "module" : "General Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "The type of identifier in this item.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "name" : "Type of Patient ID"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Institution Name"
      },
      "(0010,0024)" : {
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,0106)" : {
         "desc" : [
            "The identifier of the version of the Context Group.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.5"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "1",
         "name" : "Context Group Version",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0008,0070)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "name" : "Manufacturer",
         "module" : "General Equipment",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "req" : "2"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "RT Series",
         "name" : "UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "module" : "RT Series",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(300a,0180)[<0>](300a,0182)" : {
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "1",
         "desc" : "Identification number of the Patient Setup. The value of Patient Setup Number (300A,0182) shall be unique within the RT Plan in which it is created.",
         "module" : "RT Patient Setup",
         "name" : "Patient Setup Number"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9170)" : {
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "1",
         "desc" : [
            "Technique applied to reduce respiratory motion artifacts.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
               ]
            }
         ],
         "name" : "Respiratory Motion Compensation Technique",
         "module" : "RT Patient Setup"
      },
      "(3008,0020)[<0>](3008,00b0)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "Recorded Wedge Sequence",
         "module" : "RT Beams Session Record",
         "desc" : [
            "Sequence of treatment wedges present during delivered Beam. Required if Number of Wedges (300A,00D0) is non-zero.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(0038,0064)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Issuer of Service Episode ID Sequence",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(3008,0050)[<0>](3008,0052)" : {
         "desc" : "Cumulative Dose delivered to Dose Reference (Gy).",
         "req" : "1",
         "module" : "RT Treatment Summary Record",
         "name" : "Cumulative Dose to Dose Reference",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0044)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Machine setting actually delivered at current control point. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.21.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "name" : "Delivered Meterset",
         "module" : "RT Beams Session Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Value Type",
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
         "req" : "1"
      },
      "(3008,0010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "entity" : "Treatment Record",
         "name" : "Measured Dose Reference Sequence",
         "module" : "Measured Dose Reference Record",
         "desc" : [
            "Sequence of doses measured during treatment delivery, summed over entire session.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(3008,0020)[<0>](300a,00c7)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Beams Session Record",
         "name" : "High-Dose Technique Type",
         "desc" : [
            "Type of high-dose treatment technique.",
            {
               "list" : [
                  [
                     "TBI",
                     "Total Body Irradiation"
                  ],
                  [
                     "HDR",
                     "High Dose Rate"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Required if treatment technique requires a dose that would normally require overriding of treatment machine safety controls."
         ],
         "req" : "1C"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C",
         "module" : "Patient",
         "name" : "DICOM Media Retrieval Sequence"
      },
      "(0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "module" : "Common Instance Reference",
         "req" : "1C",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Treatment Record",
         "usage" : "U"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Certificate of Signer",
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
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "el" : "para",
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
               ]
            }
         ],
         "req" : "1"
      },
      "(4ffe,0001)" : {
         "req" : "3",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "MAC Parameters Sequence",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,0014)" : {
         "req" : "3",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "module" : "SOP Common",
         "name" : "Instance Creator UID",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "req" : "3",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ]
      },
      "(300a,0180)[<0>](0018,5100)" : {
         "module" : "RT Patient Setup",
         "name" : "Patient Position",
         "desc" : [
            "Patient position descriptor relative to the equipment. Required if Patient Additional Position (300A,0184) is not present. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.12.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for Defined Terms and further explanation."
         ],
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "module" : "Patient",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "req" : "1"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
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
                     "el" : "para",
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
         "name" : "Referenced Frame Number",
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "module" : "General Study"
      },
      "(0010,0212)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Strain Description",
         "module" : "Patient",
         "req" : "3",
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
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "name" : "Institution Address",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
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
      "(3008,0020)[<0>](3008,0040)[<1>](300a,011a)[<2>](300a,011c)" : {
         "req" : "1",
         "desc" : "Positions of beam limiting device (collimator) leaf (element) or jaw pairs (mm) in IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), e.g., X-axis for MLCX, Y-axis for MLCY. Contains 2N values, where N is the Number of Leaf/Jaw Pairs (300A,00BC) defined in element of Beam Limiting Device Leaf Pairs Sequence (3008,00A0). Values shall be in IEC leaf subscript order 101, 102, \u2026 1N, 201, 202 \u2026 2N.",
         "module" : "RT Beams Session Record",
         "name" : "Leaf/Jaw Positions",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00b0)[<1>](300a,00d4)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "User-supplied identifier for wedge.",
         "req" : "3",
         "name" : "Wedge ID",
         "module" : "RT Beams Session Record"
      },
      "(3008,0020)[<0>](3008,00a0)[<1>](300a,00bc)" : {
         "desc" : "Number of leaf (element) or jaw pairs (equal to 1 for standard beam limiting device jaws).",
         "req" : "1",
         "module" : "RT Beams Session Record",
         "name" : "Number of Leaf/Jaw Pairs",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
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
               "title" : "Enumerated Values:",
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
         "req" : "1",
         "module" : "Clinical Trial Study",
         "name" : "Consent for Distribution Flag",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U"
      },
      "(300a,0180)[<0>](300a,0410)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Sequence of Motion Synchronization.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Motion Synchronization Sequence",
         "module" : "RT Patient Setup"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "module" : "SOP Common",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "RT Series",
         "name" : "UID"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0024)" : {
         "req" : "1",
         "desc" : "Date when the delivery of radiation at this control point began. For the final control point this shall be the Date when the previous control point ended.",
         "module" : "RT Beams Session Record",
         "name" : "Treatment Control Point Date",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "req" : "3",
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
               ]
            }
         ],
         "name" : "Person's Telecom Information",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](300c,0040)[<1>](3008,0078)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Beams Session Record",
         "name" : "Start Meterset",
         "desc" : "Cumulative Meterset Weight within Beam referenced by Referenced Beam Number at which image acquisition starts.",
         "req" : "3"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "module" : "RT Series",
         "name" : "Referenced Frame Number",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "el" : "note",
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
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0010,0020)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
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
         "req" : "2",
         "name" : "Patient ID",
         "module" : "Patient"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "desc" : [
            [
               "URI/URL specifying the location of the referenced instance(s). Includes fully specified scheme, authority, path, and query in accordance with ",
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
         "name" : "Retrieve URI",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0010,0219)" : {
         "module" : "Patient",
         "name" : "Strain Code Sequence",
         "req" : "3",
         "desc" : [
            [
               "A coded identification of the strain of the patient. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items are permitted in this sequence. If more than one item is present, each item represents the same information but encoded using a different coding scheme (rather than post-coordinated modifiers)."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0010,1020)" : {
         "module" : "Patient Study",
         "name" : "Patient's Size",
         "desc" : "Length or size of the Patient, in meters.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U"
      },
      "(3008,0020)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "name" : "Treatment Session Beam Sequence",
         "req" : "1",
         "desc" : [
            "Sequence of Beams administered during treatment session.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "entity" : "Treatment Record",
         "usage" : "U"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "name" : "Patient Position",
         "module" : "Patient",
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
                     "linkend" : "sect_C.7.3.1.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "1C",
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
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Scheduled Procedure Step ID",
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "entity" : "Series",
         "name" : "Content Item Modifier Sequence",
         "module" : "RT Series",
         "req" : "3",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.4.10.1"
               }
            },
            "."
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(3008,0020)[<0>](3008,00d0)[<1>](300a,0355)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "desc" : "An identifier for the Tray intended to be read by a device such as a bar-code reader.",
         "req" : "3",
         "name" : "Tray Accessory Code",
         "module" : "RT Beams Session Record"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "RT Series",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "DateTime",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "module" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,1048)" : {
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
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
         "name" : "Physician(s) of Record",
         "module" : "General Study"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,011e)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "1C",
         "desc" : "Treatment machine gantry angle, i.e., orientation of IEC GANTRY coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees). Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Gantry Angle changes during beam administration.",
         "module" : "RT Beams Session Record",
         "name" : "Gantry Angle"
      },
      "(3008,0020)[<0>](300c,00b0)" : {
         "desc" : [
            "Sequence of boli associated with Beam.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "RT Beams Session Record",
         "name" : "Referenced Bolus Sequence",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1150)" : {
         "module" : "RT Patient Setup",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](0008,1072)[<3>](0040,1103)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57",
            "table_10-1"
         ],
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "module" : "RT Beams Session Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0140)" : {
         "req" : "1C",
         "desc" : [
            "Table Top Pitch Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system (degrees). If required by treatment delivery device, shall be present for first item of Control Point Sequence. If required by treatment delivery device and if Table Top Pitch Angle changes during Beam, shall be present in all subsequent items of Control Point Sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.2"
               }
            },
            "."
         ],
         "module" : "RT Beams Session Record",
         "name" : "Table Top Pitch Angle",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0432)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "1",
         "desc" : [
            "Aperture shape of the applicator.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "SYM_SQUARE",
                     "A square-shaped aperture symmetrical to the central axis."
                  ],
                  [
                     "SYM_RECTANGLE",
                     "A rectangular-shaped aperture symmetrical to the central axis."
                  ],
                  [
                     "SYM_CIRCULAR",
                     "A circular-shaped aperture symmetrical to the central axis."
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "name" : "Applicator Aperture Shape",
         "module" : "RT Beams Session Record"
      },
      "(0008,0016)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "req" : "1",
         "name" : "SOP Class UID",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "name" : "Digital Signature Purpose Code Sequence",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00b0)[<1>](300a,00d8)" : {
         "desc" : "Orientation of wedge, i.e., orientation of IEC WEDGE FILTER coordinate system with respect to IEC BEAM LIMITING DEVICE coordinate system (degrees).",
         "req" : "3",
         "name" : "Wedge Orientation",
         "module" : "RT Beams Session Record",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(3008,0220)[<0>](3008,0224)" : {
         "module" : "RT Treatment Summary Record",
         "name" : "Fraction Group Type",
         "desc" : [
            "Indicates type of fraction group.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "2",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
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
         "entity" : "Study",
         "usage" : "M"
      },
      "(0008,103f)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "RT Series",
         "name" : "Series Description Code Sequence"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "module" : "Patient",
         "name" : "XDS Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
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
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient"
      },
      "(0008,1200)" : {
         "module" : "Common Instance Reference",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Treatment Record"
      },
      "(0008,0021)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Series Date",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Date the Series started."
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](0008,1072)[<3>](0040,1104)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57",
            "table_10-1"
         ],
         "req" : "3",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_96e493a8-b679-4f97-987f-4e08360642a4"
                                 },
                                 "content" : [
                                    "It is recommended that this attribute be treated as equivalent to HL7v2 (v2.5 or later) field ROL-12, and be formatted in accordance with the HL7v2 XTN data type (without escapes for HL7 message structure reserved characters). See additional notes in the Module invoking this Macro."
                                 ]
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
         "module" : "RT Beams Session Record",
         "name" : "Person's Telecom Information"
      },
      "(3008,0030)[<0>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT General Treatment Record",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ]
      },
      "(3008,0020)[<0>](3008,002c)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Beams Session Record",
         "name" : "Treatment Verification Status",
         "req" : "2",
         "desc" : [
            "Conditions under which treatment was verified by a verification system.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
                     "treatment verified manually"
                  ]
               ]
            }
         ]
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "module" : "General Study",
         "name" : "Person's Address",
         "req" : "3",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0036)" : {
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
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(3008,0050)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "name" : "Treatment Summary Calculated Dose Reference Sequence",
         "module" : "RT Treatment Summary Record",
         "req" : "3",
         "desc" : [
            "Sequence of references to Calculated Dose References.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,0300)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "Private Data Element Characteristics Sequence",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Rational Denominator Value",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0223)" : {
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "desc" : "Identifies fraction.",
         "req" : "1",
         "name" : "Referenced Fraction Number",
         "module" : "RT Treatment Summary Record"
      },
      "(3008,0020)[<0>](3008,0090)[<1>](300c,0051)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : [
            "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.10",
                  "xrefstyle" : "select: title"
               }
            },
            " of referenced RT Plan. Required if Referenced Calculated Dose Reference Number (3008,0092) is not sent."
         ],
         "req" : "1C",
         "name" : "Referenced Dose Reference Number",
         "module" : "RT Beams Session Record"
      },
      "(3008,0020)[<0>](3008,0080)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of doses measured during treatment delivery for current Beam.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Referenced Measured Dose Reference Sequence",
         "module" : "RT Beams Session Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0123)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "name" : "Patient Support Rotation Direction",
         "module" : "RT Beams Session Record",
         "req" : "1C",
         "desc" : [
            "Direction of Patient Support Rotation when viewing table from above, for segment beginning at current Control Point. Required for Control Point 0 of Control Point Delivery Sequence (3008,0040), or if Patient Support Rotation Direction changes during beam administration.",
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
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0142)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Beams Session Record",
         "name" : "Table Top Pitch Rotation Direction",
         "desc" : [
            [
               "Direction of Table Top Pitch Rotation when viewing the table along the positive X-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. If required by treatment delivery device, shall be present for first item of Control Point Sequence. If required by treatment delivery device and if Table Top Pitch Rotation Direction changes during Beam, shall be present in all subsequent items of Control Point Sequence. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.8"
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
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "RT Series",
         "name" : "Rational Numerator Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "name" : "Floating Point Value",
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(3008,0020)[<0>](300c,00b0)[<1>](3006,0084)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "1",
         "desc" : [
            "Uniquely identifies ROI representing the bolus specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.5"
               },
               "el" : "xref"
            },
            " within ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_A.19"
               },
               "el" : "xref"
            },
            " referenced by referenced RT Plan in Referenced RT Plan Sequence (300C,0002) in ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.17",
                  "xrefstyle" : "select: title"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Referenced ROI Number",
         "module" : "RT Beams Session Record"
      },
      "(0010,0216)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient",
         "name" : "Strain Stock Sequence"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Numeric Value",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0015)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Beams Session Record",
         "name" : "Nominal Beam Energy Unit",
         "desc" : [
            "Units used for Nominal Beam Energy (300A,0114). Required if Nominal Beam Energy (300A,0114) is sent.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "MV",
                     "Megavolt"
                  ],
                  [
                     "MEV",
                     "Mega electron-Volt"
                  ]
               ],
               "title" : "Defined Terms:"
            },
            "If Radiation Type (300A,00C6) is PHOTON, Nominal Beam Energy Unit (300A,0015) shall be MV. If Radiation Type (300A,00C6) is ELECTRON, Nominal Beam Energy Unit (300A,0015) shall be MEV."
         ],
         "req" : "1C"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0122)" : {
         "name" : "Patient Support Angle",
         "module" : "RT Beams Session Record",
         "req" : "1C",
         "desc" : "Patient Support angle, i.e., orientation of IEC PATIENT SUPPORT (turntable) coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees). Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Patient Support Angle changes during beam administration.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,0184)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "name" : "Patient Additional Position",
         "module" : "RT Patient Setup",
         "desc" : "User-defined additional description of patient position. Required if Patient Position (0018,5100) is not present.",
         "req" : "1C"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(300a,0206)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.8-54"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Treatment Machine Record",
         "name" : "Institutional Department Name",
         "req" : "3",
         "desc" : "Department in the institution where the equipment is located that was used for treatment delivery."
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "2",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "name" : "Storage Media File-Set ID",
         "module" : "Patient"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "module" : "SOP Common",
         "name" : "Operators' Name"
      },
      "(0008,0050)" : {
         "req" : "2",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "module" : "General Study",
         "name" : "Accession Number",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](0008,1072)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Beams Session Record",
         "name" : "Operator Identification Sequence",
         "req" : "3",
         "desc" : "Identification of the operator who authorized override. Only a single Item is permitted in this sequence."
      },
      "(3008,0020)[<0>](300c,006a)" : {
         "desc" : "Uniquely identifies Patient Setup used within current beam, specified by Patient Setup Number (300A,0182) within Patient Setup Sequence (300A,0180) of RT Treatment Record.",
         "req" : "3",
         "name" : "Referenced Patient Setup Number",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0018,9004)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Content Qualification",
         "req" : "3",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced Frame Number",
         "req" : "1C",
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
         ]
      },
      "(0040,0254)" : {
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "req" : "3",
         "module" : "RT Series",
         "name" : "Performed Procedure Step Description",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Date"
      },
      "(0008,1062)" : {
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "req" : "3",
         "module" : "General Study",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "name" : "Institution Address",
         "module" : "RT Series",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0012,0083)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "req" : "3",
         "name" : "Consent for Clinical Trial Use Sequence",
         "module" : "Clinical Trial Study"
      },
      "(3008,0020)[<0>](3008,00b0)[<1>](300a,00f9)" : {
         "req" : "3",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "name" : "Accessory Code",
         "module" : "RT Beams Session Record",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0010,0200)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Quality Control Subject",
         "module" : "Patient",
         "desc" : [
            "Indicates whether or not the subject is a quality control phantom.",
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
            },
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            [
               "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.1"
                  }
               },
               ", which is used to describe an image acquired."
            ]
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
         "module" : "RT Series",
         "req" : "3",
         "desc" : [
            "Sequence that specifies modifiers for a Protocol Context Content Item. One or more Items are permitted in this Sequence. See ",
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "name" : "Institutional Department Name",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "name" : "Station Name",
         "module" : "SOP Common",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "req" : "3"
      },
      "(0020,000e)" : {
         "req" : "1",
         "desc" : "Unique identifier of the series.",
         "name" : "Series Instance UID",
         "module" : "RT Series",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(3008,0250)" : {
         "desc" : [
            "Date when current fraction was delivered, or Date last fraction was delivered in case of ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_A.31"
               }
            },
            ". See Note."
         ],
         "req" : "2",
         "module" : "RT General Treatment Record",
         "name" : "Treatment Date",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.5.1.1.1"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0010,2297)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Responsible Person",
         "module" : "Patient",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "req" : "2C"
      },
      "(0008,1110)" : {
         "req" : "3",
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
         "name" : "Referenced Study Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "name" : "Instance Creation Date",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "module" : "General Study",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "module" : "SOP Common",
         "name" : "MAC ID Number"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "name" : "DateTime",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0012,0031)" : {
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site Name",
         "req" : "2",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0010,0218)" : {
         "module" : "Patient",
         "name" : "Strain Additional Information",
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
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Software Versions",
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
         "req" : "3"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0115)" : {
         "req" : "2",
         "desc" : "Dose Rate set on treatment machine for segment beginning at current control point (Meterset/min).",
         "module" : "RT Beams Session Record",
         "name" : "Dose Rate Set",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0010,1010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "name" : "Patient's Age",
         "module" : "Patient Study",
         "desc" : "Age of the Patient.",
         "req" : "3"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](0008,1072)[<3>](0040,1101)" : {
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57",
            "table_10-1"
         ],
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "RT Beams Session Record",
         "name" : "Person Identification Code Sequence"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "module" : "Patient",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Issuer of Admission ID Sequence",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "module" : "RT General Treatment Record",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "entity" : "Treatment Record"
      },
      "(0012,0010)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "1",
         "desc" : [
            "The name of the clinical trial or research sponsor. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Sponsor Name"
      },
      "(3008,0020)[<0>](300a,00f0)" : {
         "name" : "Number of Blocks",
         "module" : "RT Beams Session Record",
         "desc" : "Number of shielding blocks or Electron Inserts associated with Beam.",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0008,1070)" : {
         "module" : "RT Series",
         "name" : "Operators' Name",
         "req" : "2",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(3008,0010)[<0>](3008,0064)" : {
         "desc" : "Unique identifier of measured dose point. Required only if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "req" : "1C",
         "module" : "Measured Dose Reference Record",
         "name" : "Measured Dose Reference Number",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-55"
         ]
      },
      "(3008,0020)[<0>](300a,00b4)" : {
         "desc" : "Radiation source to gantry rotation axis distance of the equipment that was used for beam delivery (mm).",
         "req" : "3",
         "name" : "Source-Axis Distance",
         "module" : "RT Beams Session Record",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0018,1000)" : {
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                     },
                     "content" : [
                        "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Device Serial Number",
         "module" : "General Equipment"
      },
      "(0012,0042)" : {
         "name" : "Clinical Trial Subject Reading ID",
         "module" : "Clinical Trial Subject",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "usage" : "U"
      },
      "(0040,1012)" : {
         "module" : "General Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ],
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01d6)" : {
         "req" : "3",
         "desc" : "Lateral Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., lateral offset between patient positioning performed using setup and treatment position.",
         "name" : "Table Top Lateral Setup Displacement",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
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
         "module" : "Patient"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "req" : "1",
         "desc" : "Primary identifier for an individual subject.",
         "name" : "Patient ID",
         "module" : "Patient",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Private Creator Reference",
         "req" : "1",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "module" : "RT Series",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "name" : "Protocol Context Sequence",
         "module" : "RT Series"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01bc)" : {
         "desc" : [
            "Setup Parameter for Setup Device in appropriate IEC 61217 coordinate system.",
            "Units shall be mm for distances and degrees for angles."
         ],
         "req" : "2",
         "module" : "RT Patient Setup",
         "name" : "Setup Device Parameter",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
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
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "module" : "RT Series",
         "desc" : "Person's mailing address",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "req" : "1",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "module" : "SOP Common",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "name" : "Numeric Value",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1",
         "name" : "Digital Signature UID",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](300a,0402)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "name" : "Setup Image Comment",
         "req" : "3",
         "desc" : "Comment on the Setup Image."
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
         "name" : "Certified Timestamp Type",
         "req" : "1C",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
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
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "name" : "Instance Creation Time",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,012a)" : {
         "desc" : "Table Top Lateral position in IEC TABLE TOP coordinate system (mm). This value is interpreted as an absolute, rather than relative, Table setting. Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Table Top Lateral Position changes during beam administration.",
         "req" : "2C",
         "name" : "Table Top Lateral Position",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,011a)" : {
         "req" : "1C",
         "desc" : [
            "Sequence of beam limiting device (collimator) jaw or leaf (element) positions.",
            "One or more Items shall be included in this Sequence.",
            "Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if beam limiting device (collimator) changes during beam administration."
         ],
         "module" : "RT Beams Session Record",
         "name" : "Beam Limiting Device Position Sequence",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0018,1200)" : {
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
         "module" : "General Equipment",
         "name" : "Date of Last Calibration",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Coding Scheme Identification Sequence",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "module" : "RT Series",
         "name" : "Scheduled Protocol Code Sequence",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0251)" : {
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Time at which the Performed Procedure Step ended.",
         "req" : "3",
         "module" : "RT Series",
         "name" : "Performed Procedure Step End Time"
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
      "Can't handle table_8.8-1 (in table_C.8-57:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.8-57:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
