var data = {
   "tags" : {
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3008,0030)[<0>](0008,1155)" : {
         "module" : "RT General Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(300a,0206)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "module" : "RT Treatment Machine Record",
         "desc" : "Institution where the equipment is located that was used for treatment delivery.",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M"
      },
      "(3008,0021)[<0>](300a,0330)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Number of Lateral Spreading Devices",
         "module" : "RT Ion Beams Session Record",
         "desc" : "Number of lateral spreading devices associated with current beam.",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "module" : "RT Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
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
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Content Item Modifier Sequence"
      },
      "(300a,0180)[<0>](300a,01b0)" : {
         "module" : "RT Patient Setup",
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
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Setup Technique"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common"
      },
      "(0010,2293)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Code Sequence",
         "req" : "2C",
         "entity" : "Patient",
         "usage" : "M",
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient"
      },
      "(0010,2298)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0010,2299)" : {
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Organization"
      },
      "(300a,0206)[<0>](300a,00b2)" : {
         "name" : "Treatment Machine Name",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "module" : "RT Treatment Machine Record",
         "req" : "2",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "User-defined name identifying treatment machine used for treatment delivery."
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "name" : "Attribute Modification DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "U",
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number"
      },
      "(3008,0021)[<0>](3008,00b0)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader."
      },
      "(3008,0010)[<0>](3008,0064)" : {
         "name" : "Measured Dose Reference Number",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "U",
         "desc" : "Unique identifier of measured dose point. Required only if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "module" : "Measured Dose Reference Record"
      },
      "(0040,0254)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Description"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0068)[<2>](3008,0063)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Parameter Item Index",
         "desc" : "Contains the ones-based sequence item index of the corrected attribute within its parent sequence as indicated by Parameter Sequence Pointer (3008,0061).",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Reason for the Attribute Modification",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
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
         ]
      },
      "(0010,21b0)" : {
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "desc" : "Additional information about the Patient's medical history.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Additional Patient History"
      },
      "(0008,0020)" : {
         "req" : "2",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Date the Study started.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Date"
      },
      "(3008,0021)[<0>](300a,0107)[<1>](300a,0108)" : {
         "name" : "Applicator ID",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "desc" : "User or machine supplied identifier for Applicator.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0010,2202)" : {
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Code Sequence"
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Admission ID Sequence",
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "usage" : "U"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,011e)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Treatment machine gantry angle, i.e., orientation of IEC GANTRY coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees). Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041) or if Gantry Angle changes during beam administration.",
         "module" : "RT Ion Beams Session Record",
         "name" : "Gantry Angle",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0142)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : [
            [
               "Direction of Table Top Pitch Rotation when viewing the table along the positive X-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. Required for first item of Control Point Sequence, or if Table Top Pitch Rotation Direction changes during Beam. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.8",
                     "xrefstyle" : "select: label"
                  }
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
               ]
            }
         ],
         "entity" : "Treatment Record",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Table Top Pitch Rotation Direction"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Source of Previous Values"
      },
      "(0008,0081)" : {
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
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
         "module" : "SOP Common"
      },
      "(300a,0180)[<0>](300a,0183)" : {
         "name" : "Patient Setup Label",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "The user-defined label for the patient setup."
      },
      "(3008,0021)[<0>](3008,00a0)[<1>](300a,00bc)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Number of leaf (element) or jaw pairs (equal to 1 for standard beam limiting device jaws).",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Number of Leaf/Jaw Pairs"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(3008,0021)[<0>](3008,0041)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Ion Control Point Delivery Sequence",
         "desc" : [
            "Sequence of beam control points for current ion treatment beam.",
            "One or more items shall be included in this sequence.",
            "The number of items shall be identical to the value of Number of Control Points (300A,0110).",
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
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0012,0030)" : {
         "name" : "Clinical Trial Site ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "usage" : "U",
         "entity" : "Patient",
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
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0380)[<2>](300a,0382)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "Start position defines the range modulator position at which the beam is switched on. Required if Range Modulator Type (300A,0348) of the range modulator referenced by Referenced Range Modulator Number (300C,0104) is WHL_MODWEIGHTS or WHL_FIXEDWEIGHTS",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Range Modulator Gating Start Value"
      },
      "(3008,0021)[<0>](3008,00c0)[<1>](300c,00d0)" : {
         "module" : "RT Ion Beams Session Record",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies compensator specified by Compensator Number (300A,00E4) within Beam referenced by Referenced Beam Number (300C,0006).",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Referenced Compensator Number"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
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
         "name" : "Concept Code Sequence"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0060)[<2>](3008,0066)" : {
         "module" : "RT Ion Beams Session Record",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "User-defined description of reason for override of parameter specified by Override Parameter Pointer (3008,0062).",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Override Reason"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0008,0070)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "entity" : "Equipment",
         "req" : "2",
         "usage" : "M",
         "module" : "General Equipment"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9170)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
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
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,0005)" : {
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
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "name" : "Specific Character Set",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "RT Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1032)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Procedure Code Sequence",
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0128)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Table Top Vertical Position",
         "desc" : "Table Top Vertical position in IEC TABLE TOP coordinate system (mm). This value is interpreted as an absolute, rather than relative, Table setting. Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041) or if Table Top Vertical Position changes during beam administration.",
         "entity" : "Treatment Record",
         "req" : "2C",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "name" : "Instance Creator UID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0220)[<0>](3008,0224)" : {
         "name" : "Fraction Group Type",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "req" : "2",
         "entity" : "Treatment Record",
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
         "module" : "RT Treatment Summary Record"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "desc" : "Person's mailing address",
         "module" : "General Study"
      },
      "(0012,0031)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "2",
         "usage" : "U",
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               }
            }
         ],
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site Name"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
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
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "module" : "RT Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,03ac)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Ion Wedge Position Sequence",
         "module" : "RT Ion Beams Session Record",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of Wedge positions for current control point.",
            "Required for first item of Ion Control Point Sequence if Number of Wedges (300A,00D0) is non-zero, and in subsequent control points if Wedge Position (300A,0118) or Wedge Thin Edge Position (300A,00DB) changes during beam.",
            "One or more items shall be included in this sequence.",
            "The number of items shall be identical to the value of Number of Wedges (300A,00D0)."
         ]
      },
      "(3008,0050)[<0>](300a,0016)" : {
         "module" : "RT Treatment Summary Record",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "User-defined description of Dose Reference.",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Dose Reference Description"
      },
      "(3008,0021)[<0>](3008,0090)[<1>](300c,0051)" : {
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Ion Plan. Required if Referenced Calculated Dose Reference Number (3008,0092) is not sent.",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record",
         "name" : "Referenced Dose Reference Number",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](300a,0107)[<1>](300a,010a)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Applicator Description",
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "User-defined description for Applicator."
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme UID"
      },
      "(0008,0090)" : {
         "name" : "Referring Physician's Name",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Name of the patient's referring physician",
         "usage" : "M",
         "req" : "2",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Patient Setup"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0370)" : {
         "desc" : [
            "Sequence of Lateral Spreading Device settings for the current control point.",
            "One or more items shall be included in this sequence.",
            "Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041) or if Lateral Spreading Device Setting (300A,0372) changes during beam administration, and Number of Lateral Spreading Devices (300A,0330) is non-zero."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Lateral Spreading Device Settings Sequence"
      },
      "(3008,0021)[<0>](300c,0006)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Referenced Beam Number",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "References Beam specified by Beam Number (300A,00C0) in Ion Beam Sequence (300A,03A2) in RT Ion Beams Module within the referenced RT Ion Plan.",
         "module" : "RT Ion Beams Session Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
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
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type"
      },
      "(300a,0180)[<0>](300a,01b2)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Setup Technique Description",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "User-defined description of Setup Technique."
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(3008,0021)[<0>](3008,0080)[<1>](3008,0016)" : {
         "name" : "Measured Dose Value",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Measured Dose in units specified by Dose Units (3004,0002) in sequence referenced by Measured Dose Reference Sequence (3008,0010) or Dose Reference Sequence (300A,0010) in RT Prescription Module of Referenced RT Ion Plan as defined above."
      },
      "(3008,0021)[<0>](300a,0420)[<1>](300a,0423)" : {
         "name" : "General Accessory Type",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : [
            "Specifies the type of accessory.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
               ]
            }
         ],
         "module" : "RT Ion Beams Session Record"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Data Elements Signed",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
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
         "module" : "SOP Common"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0121)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Beam Limiting Device Rotation Direction",
         "desc" : [
            "Direction of Beam Limiting Device Rotation when viewing beam limiting device (collimator) from radiation source, for segment beginning at current Control Point. Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041) or if Beam Limiting Device Rotation Direction changes during beam administration.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0038,0010)" : {
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admission ID"
      },
      "(0020,0011)" : {
         "name" : "Series Number",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series",
         "desc" : "A number that identifies this series.",
         "req" : "2",
         "usage" : "M",
         "entity" : "Series"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01bc)" : {
         "name" : "Setup Device Parameter",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "usage" : "U",
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : [
            "Setup Parameter for Setup Device in appropriate IEC 61217 coordinate system.",
            "Units shall be mm for distances and degrees for angles."
         ]
      },
      "(3008,0021)[<0>](3008,00b0)[<1>](300a,00d4)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Wedge ID",
         "desc" : "User-supplied identifier for Wedge.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Referenced Instance Sequence",
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(3008,0021)[<0>](3008,00c0)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Recorded Compensator Sequence",
         "module" : "RT Ion Beams Session Record",
         "desc" : [
            "Sequence of treatment compensators.",
            "Required if Number of Compensators (300A,00E0) is non-zero.",
            "One or more items shall be included in this sequence.",
            "The number of items shall be identical to the value of Number of Compensators (300A,00E0)."
         ],
         "req" : "1C",
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0010,1030)" : {
         "desc" : "Weight of the Patient, in kilograms.",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Weight"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Study",
         "req" : "1",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
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
         "module" : "SOP Common"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0194)" : {
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "U",
         "desc" : "User-defined label identifier for Fixation Device.",
         "name" : "Fixation Device Label",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(3008,0021)[<0>](300c,0040)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8.8.26-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Ion Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "module" : "RT Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,00f9)" : {
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Accessory Code"
      },
      "(0020,000e)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Series Instance UID",
         "module" : "RT Series",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Unique identifier of the series."
      },
      "(3008,0021)[<0>](300a,0420)[<1>](300a,0422)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "General Accessory Description",
         "desc" : "User supplied description of General Accessory.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Longitudinal Temporal Information Modified"
      },
      "(0020,9172)[<0>](0008,1160)" : {
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
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(3008,0021)[<0>](3008,0022)" : {
         "name" : "Current Fraction Number",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : "Fraction number for this beam administration.",
         "module" : "RT Ion Beams Session Record"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "req" : "1",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(3008,0056)" : {
         "desc" : "Date of delivery of the most recent administration.",
         "req" : "2",
         "entity" : "Treatment Record",
         "usage" : "U",
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Most Recent Treatment Date"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0012,0010)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Sponsor Name",
         "desc" : [
            "The name of the clinical trial sponsor. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "usage" : "U",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number"
      },
      "(300a,00b3)" : {
         "name" : "Primary Dosimeter Unit",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "desc" : [
            "Measurement unit of the machine dosimeter.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "MU",
                     "Monitor Units"
                  ],
                  [
                     "NP",
                     "Number of Particles"
                  ]
               ]
            }
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0008,103e)" : {
         "name" : "Series Description",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "desc" : "Description of the series."
      },
      "(300a,0180)[<0>](0018,5100)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Patient Position",
         "desc" : [
            "Patient position descriptor relative to the equipment. Required if Patient Additional Position (300A,0184) is not present. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.12.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for Defined Terms and further explanation."
         ],
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "U",
         "module" : "RT Patient Setup"
      },
      "(3008,0010)[<0>](3008,0012)" : {
         "mod_tables" : [
            "table_C.8-55"
         ],
         "name" : "Measured Dose Description",
         "desc" : "User-defined description of Dose Reference (e.g., \"Exit dose\", \"Point A\").",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "module" : "Measured Dose Reference Record"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Number",
         "module" : "Patient",
         "desc" : "Identification number of an animal within the registry.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Reason for requesting this procedure.",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Reason for the Requested Procedure"
      },
      "(0008,0080)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Name",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0192)" : {
         "module" : "RT Patient Setup",
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
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Fixation Device Type"
      },
      "(0012,0063)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "De-identification Method",
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M",
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
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
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
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ]
      },
      "(3008,0021)[<0>](3008,002a)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Conditions under which treatment was terminated.",
            {
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
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Treatment Termination Status"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(3008,0021)[<0>](3008,00d0)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of blocks associated with Beam.",
            "Required if Number of Blocks (300A,00F0) is non-zero.",
            "One or more items shall be included in this sequence.",
            "The number of items shall be identical to the value of Number of Blocks (300A,00F0)."
         ],
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Recorded Block Sequence"
      },
      "(0100,0424)" : {
         "name" : "SOP Authorization Comment",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "RT Series",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,2294)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Sequence",
         "module" : "Patient",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Patient",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0020,0013)" : [
         {
            "name" : "Instance Number",
            "mod_tables" : [
               "table_C.8-53"
            ],
            "desc" : "Instance number identifying this particular instance of the object.",
            "usage" : "M",
            "req" : "1",
            "entity" : "Treatment Record",
            "module" : "RT General Treatment Record"
         },
         {
            "mod_tables" : [
               "table_C.12-1"
            ],
            "name" : "Instance Number",
            "desc" : "A number that identifies this Composite object instance.",
            "entity" : "Treatment Record",
            "req" : "3",
            "usage" : "M",
            "module" : "SOP Common"
         }
      ],
      "(3008,0070)[<0>](3008,0072)" : {
         "module" : "Calculated Dose Reference Record",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Treatment Record",
         "desc" : "Unique identifier of dose reference point within RT Treatment Record IOD. Required only if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "name" : "Calculated Dose Reference Number"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address"
      },
      "(0008,1070)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Operators' Name",
         "module" : "RT Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "req" : "2",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,0031)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Series Time",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Time the Series started.",
         "module" : "RT Series"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0060)[<2>](3008,0063)" : {
         "module" : "RT Ion Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "desc" : "Contains the ones-based sequence item index of the overriden attributes within it's parent sequence. The value is limited in scope to the Treatment Session Ion Beam Sequence (3008,0021) and all nested sequences therein.",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Parameter Item Index"
      },
      "(3008,0010)[<0>](3008,0016)" : {
         "mod_tables" : [
            "table_C.8-55"
         ],
         "name" : "Measured Dose Value",
         "desc" : "Measured Dose in units specified by Dose Units (3004,0002).",
         "usage" : "U",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "Measured Dose Reference Record"
      },
      "(0040,0280)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Comments on the Performed Procedure Step",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0010,1001)" : {
         "module" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Other Patient Names",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(3008,0021)[<0>](3008,00f6)[<1>](300a,00f9)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Accessory Code"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "usage" : "M",
         "req" : "3",
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
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0390)" : {
         "desc" : "User-supplied or machine code identifier for machine configuration to produce beam spot. This may be the nominal spot size or some other machine specific value. Required if Scan Mode (300A,0308) is MODULATED.",
         "req" : "1C",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record",
         "name" : "Scan Spot Tune ID",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](300a,0340)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Number of Range Modulators",
         "desc" : "Number of range modulators associated with current beam.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "req" : "1C",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Protocol ID"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "This is not a certified timestamp, and hence is not completely verifiable. An application can compare this date and time with those of other signatures and the validity date of the certificate to gain confidence in the veracity of this date and time."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature DateTime"
      },
      "(3008,0021)[<0>](300a,0107)" : {
         "module" : "RT Ion Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Sequence of Applicators associated with Beam.",
            "Required if Applicator Sequence (300A,0107) is included in the RT Ion Plan referenced within the Referenced RT Plan Sequence (300C,0002).",
            "Only a single item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Applicator Sequence"
      },
      "(0040,1012)" : {
         "usage" : "M",
         "req" : "3",
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
         "module" : "General Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(3008,0010)[<0>](3004,0002)" : {
         "module" : "Measured Dose Reference Record",
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record",
         "desc" : [
            "Units used to describe measured dose.",
            {
               "list" : [
                  [
                     "GY",
                     "Gray"
                  ],
                  [
                     "RELATIVE",
                     "Dose relative to implicit reference value"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.8-55"
         ],
         "name" : "Dose Units"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(3008,0021)[<0>](3008,002c)" : {
         "module" : "RT Ion Beams Session Record",
         "req" : "2",
         "usage" : "M",
         "entity" : "Treatment Record",
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
         ],
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Treatment Verification Status"
      },
      "(300c,0022)" : {
         "name" : "Referenced Fraction Group Number",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Identifier of fraction group within referenced RT Ion Plan."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record"
      },
      "(3008,0220)[<0>](3008,0240)" : {
         "module" : "RT Treatment Summary Record",
         "desc" : [
            "Sequence describing status of fractions in Fraction Group.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Fraction Status Summary Sequence"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0025)" : {
         "name" : "Treatment Control Point Time",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Time when the delivery of radiation at this control point began. For the final control point this shall be the Time when the previous control point ended.",
         "module" : "RT Ion Beams Session Record"
      },
      "(0012,0050)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Time Point ID",
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
         "usage" : "U",
         "entity" : "Study",
         "module" : "Clinical Trial Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "desc" : "May include Sequence Attributes and their Items.",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(3008,0021)[<0>](300a,00ed)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Number of Boli",
         "module" : "RT Ion Beams Session Record",
         "desc" : "Number of boli associated with current Beam.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID"
      },
      "(300a,0180)[<0>](300a,0401)" : {
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
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Referenced Setup Image Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "module" : "RT Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date"
      },
      "(0010,0030)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M",
         "desc" : "Birth date of the patient."
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,011a)[<2>](300a,00b8)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
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
         "module" : "RT Ion Beams Session Record",
         "name" : "RT Beam Limiting Device Type",
         "mod_tables" : [
            "table_C.8.8.26-1",
            "table_C.8.8.27-1"
         ]
      },
      "(3008,0200)" : {
         "desc" : [
            "Status of the Treatment at the time the Treatment Summary was created.",
            {
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
               "title" : "Enumerated Values:",
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
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Current Treatment Status"
      },
      "(0008,1090)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Manufacturer's Model Name",
         "module" : "General Equipment",
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances."
      },
      "(0040,0250)" : {
         "module" : "RT Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Date"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0199)" : {
         "name" : "Fixation Device Pitch Angle",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "desc" : "The Fixation Device Pitch Angle, i.e., orientation of PITCHED FIXATION DEVICE coordinate system with respect to IEC PATIENT SUPPORT coordinate system (degrees). Pitching is the rotation around IEC PATIENT SUPPORT X-axis.",
         "module" : "RT Patient Setup"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
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
                     "el" : "orderedlist",
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This encoding is the same as described in ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5"
                                       }
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "The \"+\" sign may not be omitted."
                                 ]
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
               ],
               "el" : "note"
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Timezone Offset From UTC"
      },
      "(3008,0021)[<0>](3008,00f2)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Recorded Range Shifter Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of range shifters recorded with Beam.",
            "Required if Number of Range Shifters (300A,0312) is non-zero.",
            "One or more items shall be included in this sequence.",
            "The number of items shall be identical to the value of Number of Range Shifters (300A,0312)."
         ],
         "module" : "RT Ion Beams Session Record"
      },
      "(0008,001b)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](0018,0060)" : {
         "module" : "RT Ion Beams Session Record",
         "req" : "1C",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : "Peak kilo voltage output of the setup X-Ray generator used. Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041), or if kVp changes during setup, and Nominal Beam Energy (300A,0114) is not present.",
         "name" : "KVP",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](300a,0358)" : {
         "name" : "Fixation Light Polar Angle",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
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
         "module" : "RT Ion Beams Session Record"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Algorithm",
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
               "title" : "Defined Terms:",
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
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "SOP Common"
      },
      "(3008,0021)[<0>](3008,00f6)[<1>](300a,0348)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Range Modulator Type",
         "module" : "RT Ion Beams Session Record",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
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
                     "selected wheel/track (Range Modulator ID) is spinning at constant speed. Modulation width is adjusted by switching constant beam current on and off at wheel steps indicated by Range Modulator Interrupt Values"
                  ],
                  [
                     "WHL_MODWEIGHTS",
                     "selected wheel/track (Range Modulator ID) is spinning at constant speed. Weight per wheel step is adjusted by modulating beam current according to selected Beam Current Modulation ID (300A,034C)"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "Only one item in the Recorded Range Modulator Sequence (3008,00F6) can have a Range Modulator Type (300A,0348) of WHL_MODWEIGHTS."
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0148)" : {
         "desc" : [
            "Angle (in degrees) of the head fixation for eye treatments with respect to the Table Top Pitch Angle (300A,0140) coordinate system. Positive head fixation angle is the same direction as positive Table Top Pitch. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.4"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Head Fixation Angle"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0400,0500)" : {
         "name" : "Encrypted Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "req" : "1C",
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
         "module" : "SOP Common"
      },
      "(0010,0200)" : {
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Quality Control Subject"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "module" : "SOP Common",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Treatment Record",
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
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
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Value Type"
      },
      "(3008,0021)[<0>](3008,00f4)[<1>](300a,00f9)" : {
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Scheduled Protocol Code Sequence",
         "module" : "RT Series",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence."
      },
      "(300a,0206)" : {
         "desc" : [
            "Sequence describing treatment machine used for treatment delivery.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Treatment Machine Record",
         "name" : "Treatment Machine Sequence",
         "mod_tables" : [
            "table_C.8-54"
         ]
      },
      "(3008,0021)[<0>](3008,00f2)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "module" : "RT Ion Beams Session Record"
      },
      "(0010,1020)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "desc" : "Length or size of the Patient, in meters.",
         "module" : "Patient Study",
         "name" : "Patient's Size",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "module" : "RT Series",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0100,0426)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Authorization Equipment Certification Number"
      },
      "(3008,0021)[<0>](3008,00f6)[<1>](300a,0346)" : {
         "desc" : "User or machine supplied identifier for Range Modulator.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record",
         "name" : "Range Modulator ID",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](3008,0032)" : {
         "desc" : [
            "Desired machine setting of primary Meterset in units specified by Primary Dosimeter Unit (300A,00B3). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.26.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record",
         "name" : "Specified Primary Meterset",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(0010,2201)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Description",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "module" : "RT Patient Setup",
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
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : "An identification number or code used to identify the patient.",
         "req" : "1",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient ID"
      },
      "(0040,0244)" : {
         "name" : "Performed Procedure Step Start Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step started.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(3008,0050)" : {
         "name" : "Treatment Summary Calculated Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "desc" : [
            "Sequence of references to Calculated Dose References.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "module" : "RT Treatment Summary Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(300a,0180)[<0>](300a,0190)" : {
         "name" : "Fixation Device Sequence",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "U",
         "desc" : [
            "Sequence of Fixation Devices used in Patient Setup.",
            "One or more items are permitted in this sequence."
         ]
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Coding Scheme Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value"
      },
      "(3008,0010)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "desc" : [
            "Sequence of doses measured during treatment delivery, summed over entire session.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Measured Dose Reference Record",
         "name" : "Measured Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8-55"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Person Name"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0370)[<2>](300a,0372)" : {
         "desc" : [
            "Machine specific setting attribute for the lateral spreading device. The specific encoding of this value should be documented in a Conformance Statement. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Lateral Spreading Device Setting"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
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
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,0016)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "M",
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
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common",
         "name" : "SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0021)[<0>](3008,00f2)[<1>](300a,0318)" : {
         "desc" : "User or machine supplied identifier for Range Modulator.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Range Shifter ID"
      },
      "(3008,0021)[<0>](300c,00b0)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of boli associated with Beam.",
            "Required if Number of Boli (300A,00ED) is non-zero.",
            "One or more items shall be included in this sequence.",
            "The number of items shall be identical to the value of Number of Boli (300A,00ED)."
         ],
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Referenced Bolus Sequence"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Floating Point Value"
      },
      "(3008,0021)[<0>](3008,0080)[<1>](300c,0051)" : {
         "desc" : "Uniquely references Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Ion Plan. Required if Referenced Measured Dose Reference Number (3008,0082) is not sent.",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Referenced Dose Reference Number"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,011a)[<2>](300a,011c)" : {
         "module" : "RT Ion Beams Session Record",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "Positions of beam limiting device (collimator) leaf (element) or jaw pairs (in mm) in IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), e.g., X-axis for MLCX, Y-axis for MLCY. Contains 2N values, where N is the Number of Leaf/Jaw Pairs (300A,00BC) in Ion Beam Limiting Device Sequence (300A,03A4). Values shall be listed in IEC leaf (element) subscript order 101, 102, \u2026 1N, 201, 202, \u2026 2N. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8.8.26-1",
            "table_C.8.8.27-1"
         ],
         "name" : "Leaf/Jaw Positions"
      },
      "(3008,0021)[<0>](300a,0350)" : {
         "mod_tables" : [
            "table_C.8.8.26-1",
            "table_C.8.8.28-1"
         ],
         "name" : "Patient Support Type",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "TABLE",
                     "Treatment delivery system table"
                  ],
                  [
                     "CHAIR",
                     "Treatment delivery system chair"
                  ]
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.25.6.3"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "RT Ion Beams Session Record"
      },
      "(300a,0180)[<0>](300a,01a0)" : {
         "name" : "Shielding Device Sequence",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : [
            "Sequence of Shielding Devices used in Patient Setup.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9185)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Respiratory Motion Compensation Technique Description",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "U",
         "desc" : "Description of respiratory motion compensation technique.",
         "module" : "RT Patient Setup"
      },
      "(3008,0021)[<0>](300a,00e0)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "Number of range compensators associated with current Beam.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Number of Compensators"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "name" : "Consent for Distribution Flag",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "usage" : "U",
         "req" : "1",
         "entity" : "Study",
         "module" : "Clinical Trial Study"
      },
      "(0040,0251)" : {
         "name" : "Performed Procedure Step End Time",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Time at which the Performed Procedure Step ended."
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common"
      },
      "(3008,0021)[<0>](3008,003a)" : {
         "desc" : "Treatment Time set (sec).",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Specified Treatment Time"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Common Instance Reference"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Spatial Resolution",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime"
      },
      "(3008,0070)" : {
         "mod_tables" : [
            "table_C.8-56"
         ],
         "name" : "Calculated Dose Reference Sequence",
         "module" : "Calculated Dose Reference Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "desc" : [
            "Sequence of doses estimated for each treatment delivery.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Referenced Instance Sequence"
      },
      "(3008,0021)[<0>](3008,003b)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Delivered Treatment Time",
         "desc" : "Treatment Time actually delivered (sec).",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Series",
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
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number"
      },
      "(fffa,fffa)" : {
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signatures Sequence"
      },
      "(3008,0021)[<0>](3008,0090)[<1>](3008,0076)" : {
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "Calculated Dose (Gy).",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Calculated Dose Reference Dose Value"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0060)[<2>](0008,1070)" : {
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M",
         "desc" : "Name of operator who authorized override.",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Operators' Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(3008,0021)[<0>](300a,00c4)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Beam Type",
         "desc" : [
            "Motion characteristic of Beam.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "module" : "RT Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0012,0082)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "module" : "Clinical Trial Subject",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "usage" : "U",
         "entity" : "Patient"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "req" : "1",
         "usage" : "M",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b8)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Setup Device Label",
         "req" : "2",
         "usage" : "U",
         "entity" : "Treatment Record",
         "desc" : "User-defined label for Setup Device used for patient alignment.",
         "module" : "RT Patient Setup"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "module" : "RT Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Numeric Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "module" : "RT Series",
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
         ],
         "name" : "Time"
      },
      "(0012,0083)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Clinical Trial Use Sequence",
         "req" : "3",
         "usage" : "U",
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
         "module" : "Clinical Trial Study"
      },
      "(3008,0021)[<0>](3008,00b0)[<1>](300a,00d3)" : {
         "name" : "Wedge Type",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "desc" : [
            "Type of wedge (if any) defined for Beam.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
               ]
            }
         ],
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "req" : "1C",
         "entity" : "Study",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "General Study",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
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
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3",
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
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Content Item Modifier Sequence"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0129)" : {
         "name" : "Table Top Longitudinal Position",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "usage" : "M",
         "req" : "2C",
         "entity" : "Treatment Record",
         "desc" : "Table Top Longitudinal position in IEC TABLE TOP coordinate system (mm). This value is interpreted as an absolute, rather than relative, Table setting. Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041) or if Table Top Longitudinal Position changes during beam administration.",
         "module" : "RT Ion Beams Session Record"
      },
      "(0008,001a)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID",
         "module" : "SOP Common",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0021)[<0>](3008,00f0)[<1>](300a,030f)" : {
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "User or machine supplied identifier for Snout.",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Snout ID"
      },
      "(0008,1010)" : {
         "module" : "General Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "entity" : "Equipment",
         "req" : "3",
         "usage" : "M",
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(3008,0021)[<0>](300c,006a)" : {
         "module" : "RT Ion Beams Session Record",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : "Uniquely identifies Ion Patient Setup to be used for current beam, specified by Patient Setup Number (300A,0182) within Patient Setup Sequence of RT Patient Setup Module.",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Referenced Patient Setup Number"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Treatment Record",
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
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0146)" : {
         "desc" : [
            [
               "Direction of Table Top Roll Rotation when viewing the table along the positive Y-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. Required for first item of Control Point Sequence, or if Table Top Roll Rotation Direction changes during Beam. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.8"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.25.6.2",
                     "xrefstyle" : "select: label"
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
         "req" : "2C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Table Top Roll Rotation Direction"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,011f)" : {
         "module" : "RT Ion Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Direction of Gantry Rotation when viewing gantry from isocenter, for segment beginning at current Control Point. Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041), or if Gantry Rotation Direction changes during beam administration.",
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
         "name" : "Gantry Rotation Direction",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](300a,0302)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "Mass number of radiation. Required if Radiation Type (300A,00C6) is ION",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Radiation Mass Number"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0068)[<2>](3008,006a)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Correction Value",
         "desc" : "The value that was added the value referenced by the Parameter Sequence Pointer (3008,0061), Parameter Item Index (3008,0063) and Parameter Pointer (3008,0065).",
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value"
      },
      "(3008,0021)[<0>](300a,00f0)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Number of Blocks",
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "Number of shielding blocks associated with Beam."
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0060)[<2>](3008,0061)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Parameter Sequence Pointer",
         "desc" : "Contains the Data Element Tag of the parent sequence containing the attribute that was overriden. The value is limited in scope to the Treatment Session Ion Beam Sequence (3008,0021) and all nested sequences therein.",
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record"
      },
      "(0012,0021)" : {
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "2",
         "usage" : "U",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference"
      },
      "(3008,0021)[<0>](3008,0037)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Delivered Secondary Meterset",
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : [
            "Machine setting actually delivered as recorded by secondary Meterset. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.26.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0008,1084)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Code Sequence",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01ba)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "desc" : "User-defined description for Setup Device used for patient alignment.",
         "module" : "RT Patient Setup",
         "name" : "Setup Device Description",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer's Model Name",
         "module" : "SOP Common",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Name"
      },
      "(300a,0180)[<0>](300a,0182)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record",
         "desc" : "Identification number of the Patient Setup. The value of Patient Setup Number (300A,0182) shall be unique within the RT Plan in which it is created.",
         "module" : "RT Patient Setup",
         "name" : "Patient Setup Number",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(3008,0021)[<0>](3008,00d0)[<1>](300a,00fe)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Block Name",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "User-defined name for block.",
         "module" : "RT Ion Beams Session Record"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0047)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "A data set of Metersets delivered to the scan spot positions. The order of Metersets matches the positions in Scan Spot Position Map (300A,0394). The sum contained in all Metersets shall match the difference of the Delivered Meterset of the current control point to the following control point. Required if Scan Mode (300A,0308) is MODULATED.",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Scan Spot Metersets Delivered"
      },
      "(0018,1020)" : {
         "module" : "General Equipment",
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
         "entity" : "Equipment",
         "req" : "3",
         "usage" : "M",
         "name" : "Software Versions",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(3008,0021)[<0>](3008,00f6)" : {
         "name" : "Recorded Range Modulator Sequence",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of range modulators associated with Beam.",
            "Required if Number of Range Modulators (300A,0340) is non-zero.",
            "One or more items shall be included in this sequence.",
            "The number of items shall be identical to the value of Number of Range Modulators (300A,0340)."
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0360)[<2>](300a,0362)" : {
         "name" : "Range Shifter Setting",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "desc" : [
            "Machine specific setting attribute for the range shifter. The specific encoding of this value should be documented in a Conformance Statement. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.5"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0394)" : {
         "name" : "Scan Spot Position Map",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "desc" : "The x and y coordinates of the scan spots are defined as projected onto the machine isocentric plane in the IEC GANTRY coordinate system (mm). Required if Scan Mode (300A,0308) is MODULATED. Contains 2N values were N is the Number of Scan Spot Positions (300A,0392).",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
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
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(3008,0021)[<0>](300a,0107)[<1>](300a,0109)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : [
            "Type of applicator.",
            {
               "title" : "Defined Terms:",
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
               ]
            }
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Applicator Type"
      },
      "(0010,4000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Comments",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "User-defined additional information about the patient.",
         "module" : "Patient"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a4)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Shielding Device Label",
         "desc" : "User-defined label for Shielding Device.",
         "req" : "2",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study"
      },
      "(0008,1115)" : {
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Referenced Series Sequence"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9171)" : {
         "module" : "RT Patient Setup",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Respiratory Signal Source"
      },
      "(0018,1000)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
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
         ],
         "module" : "General Equipment",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Text Value"
      },
      "(3008,0021)[<0>](300a,00c6)" : {
         "module" : "RT Ion Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "desc" : [
            "Particle type of Beam.",
            {
               "title" : "Defined Terms:",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Radiation Type"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0360)" : {
         "name" : "Range Shifter Settings Sequence",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of Range Shifter settings for the current control point.",
            "One or more items shall be included in this sequence.",
            "Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041) or if Range Shifter Setting (300A,0362) changes during beam administration,and Number of Range Shifters (300A,0312) is non-zero."
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0380)[<2>](300c,0104)" : {
         "module" : "RT Ion Beams Session Record",
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : "Uniquely references Range Modulator described by Range Modulator Number (300A,0344) in Range Modulator Sequence (300A,0342).",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Referenced Range Modulator Number"
      },
      "(300a,0206)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "desc" : "Mailing address of the institution where the equipment is located that was used for treatment delivery.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Machine Record"
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
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "RT Series",
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0068)[<2>](3008,0061)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Parameter Sequence Pointer",
         "module" : "RT Ion Beams Session Record",
         "desc" : "Contains the Data Element Tag of the parent sequence containing the attribute that was corrected. The value is limited in scope to the Treatment Session Ion Beam Sequence (3008,0021) and all nested sequences therein.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0250)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Treatment Date",
         "desc" : "Date when fraction was delivered.",
         "req" : "2",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record"
      },
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Description"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Time Point Description",
         "module" : "Clinical Trial Study",
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
         "entity" : "Study",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value"
      },
      "(3008,0021)[<0>](3008,0080)" : {
         "name" : "Referenced Measured Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "desc" : [
            "Sequence of doses measured during treatment delivery for current Beam.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "name" : "Retrieve URI",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "module" : "SOP Common"
      },
      "(3008,0021)[<0>](300a,0420)[<1>](300a,0424)" : {
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "Identification Number of the General Accessory. The value shall be unique within the sequence.",
         "name" : "General Accessory Number",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(0018,1050)" : {
         "module" : "General Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(3008,0220)[<0>](300a,0078)" : {
         "desc" : "Number of fractions planned for this fraction group.",
         "usage" : "U",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Number of Fractions Planned"
      },
      "(3008,0021)[<0>](300a,0304)" : {
         "name" : "Radiation Atomic Number",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "desc" : "Atomic number of radiation. Required if Radiation Type (300A,00C6) is ION",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "name" : "Software Versions",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,00e0)[<0>](300a,0016)" : {
         "desc" : "User-defined description of Dose Reference.",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Dose Reference Description"
      },
      "(0010,2160)" : {
         "name" : "Ethnic Group",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0010,0024)" : {
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(3008,0050)[<0>](300c,0051)" : {
         "name" : "Referenced Dose Reference Number",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan referenced in Referenced RT Plan Sequence (300C,0002) of RT General Treatment Record Module.",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Name"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
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
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "name" : "Type of Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
               "content" : [
                  "\n                    ",
                  {
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
         "req" : "1",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Requested Procedure Code Sequence"
      },
      "(0008,1110)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referenced Study Sequence",
         "module" : "General Study",
         "desc" : [
            "A sequence that provides reference to a Study SOP Class/Instance pair.",
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
         "req" : "3",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,011a)" : {
         "module" : "RT Ion Beams Session Record",
         "req" : "1C",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : [
            "Sequence of beam limiting device (collimator) jaw or leaf (element) positions.",
            "One or more items shall be included in this sequence.",
            "Required if Ion Beam Limiting Device Sequence (300A,03A4) or Beam Limiting Device Leaf Pairs Sequence (3008,00A0) is included in this SOP instance and for first item of Ion Control Point Sequence, or if Beam Limiting Device changes during Beam."
         ],
         "mod_tables" : [
            "table_C.8.8.26-1",
            "table_C.8.8.27-1"
         ],
         "name" : "Beam Limiting Device Position Sequence"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0370)[<2>](300c,0102)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "Uniquely references Lateral Spreading Device described by Lateral Spreading Device Number (300A,0334) in Lateral Spreading Device Sequence (300A,0332).",
         "module" : "RT Ion Beams Session Record",
         "name" : "Referenced Lateral Spreading Device Number",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "UID",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "RT Series"
      },
      "(3008,0021)[<0>](3008,00f6)[<1>](300c,0104)" : {
         "desc" : "Uniquely identifies range modulator specified by Range Modulator Number (300A,0344) within Beam referenced by Referenced Beam Number (300C,0006).",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Referenced Range Modulator Number"
      },
      "(3008,0021)[<0>](3008,00a0)[<1>](300a,00b8)" : {
         "name" : "RT Beam Limiting Device Type",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record"
      },
      "(0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID",
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
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(3008,0030)[<0>](0008,1150)" : {
         "module" : "RT General Treatment Record",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0010,1000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "module" : "Patient"
      },
      "(0038,0064)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9186)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Respiratory Signal Source ID",
         "desc" : "Identifies the device providing the respiratory signal.",
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b6)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Setup Device Type",
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "U",
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
         "module" : "RT Patient Setup"
      },
      "(0020,9172)" : {
         "module" : "SOP Common",
         "req" : "1C",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Conversion Source Attributes Sequence"
      },
      "(0008,1048)" : {
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
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
         "name" : "Physician(s) of Record",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(3008,0021)[<0>](300a,0420)[<1>](300a,0425)" : {
         "name" : "Source to General Accessory Distance",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "desc" : "Radiation source to general accessory distance (in mm) for current accessory.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "RT General Treatment Record",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,0030)" : {
         "module" : "General Study",
         "desc" : "Time the Study started.",
         "usage" : "M",
         "req" : "2",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Time"
      },
      "(300a,0206)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.8-54"
         ],
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : "Manufacturer's model name of the equipment used for treatment delivery.",
         "module" : "RT Treatment Machine Record"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a6)" : {
         "name" : "Shielding Device Description",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "User-defined description of Shielding Device.",
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,039a)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Number of Paintings",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "The intended number of times the scan pattern given by Scan Spot Position Map (300A,0394) and Scan Spot Meterset Weights (300A,0396) in the Referenced RT Plan was to be applied at the current control point.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The actual number of paintings is not known or recorded. The Scan Spot Metersets Delivered (3008,0047) contains the sum of all complete and partial repaints."
                     ]
                  },
                  "\n                  "
               ]
            },
            "Required if Scan Mode (300A,0308) is MODULATED."
         ],
         "module" : "RT Ion Beams Session Record"
      },
      "(0018,1008)" : {
         "name" : "Gantry ID",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "Identifier of the gantry or positioner."
      },
      "(3008,0021)[<0>](300a,0312)" : {
         "desc" : "Number of range shifters associated with current beam.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Number of Range Shifters"
      },
      "(0008,1062)[<0>](0008,0082)" : {
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
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
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
         ]
      },
      "(0040,0245)" : {
         "module" : "RT Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Performed Procedure Step Start Time",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0010,0040)" : {
         "name" : "Patient's Sex",
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
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,014c)" : {
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Treatment Record",
         "desc" : [
            [
               "Direction of Gantry Pitch Angle when viewing along the positive X-axis of the IEC GANTRY coordinate system, for segment following Control Point. Required for first item of Control Point Sequence, or if Gantry Pitch Rotation Direction changes during Beam. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.8"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.25.6.5"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "name" : "Gantry Pitch Rotation Direction",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](3008,00c0)[<1>](300a,00f9)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Accessory Code",
         "module" : "RT Ion Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader."
      },
      "(300a,0206)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment used for treatment delivery.",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Machine Record",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "name" : "Device Serial Number"
      },
      "(3008,0021)[<0>](300c,00b0)[<1>](3006,0084)" : {
         "desc" : "Uniquely identifies ROI representing the Bolus specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in Structure Set Module within RT Structure Set in Referenced Structure Set Sequence (300C,0060) in RT General Plan Module.",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Referenced ROI Number"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(3008,0021)[<0>](3008,00f4)[<1>](300a,0336)" : {
         "name" : "Lateral Spreading Device ID",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : "User or machine supplied identifier for Lateral Spreading Device.",
         "module" : "RT Ion Beams Session Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "RT Series"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0360)[<2>](300c,0100)" : {
         "module" : "RT Ion Beams Session Record",
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : "Uniquely references Range Shifter described by Range Shifter Number (300A,0316) in Range Shifter Sequence (300A,0314).",
         "name" : "Referenced Range Shifter Number",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(0008,0012)" : {
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Instance Creation Date",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "module" : "RT Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "UID"
      },
      "(3008,0021)[<0>](3008,0080)[<1>](3008,0082)" : {
         "name" : "Referenced Measured Dose Reference Number",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "desc" : "Uniquely references Measured Dose Reference specified by Measured Dose Reference Number (3008,0064) in Measured Dose Reference Sequence (3008,0010). Required if Referenced Dose Reference Number (300C,0051) is not sent.",
         "module" : "RT Ion Beams Session Record"
      },
      "(0008,1040)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institutional Department Name",
         "entity" : "Equipment",
         "req" : "3",
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment"
      },
      "(3008,0021)[<0>](300a,00c2)" : {
         "name" : "Beam Name",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "User-defined name for Beam. See ",
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
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0114)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "desc" : "Nominal Beam Energy at control point in MeV per nucleon. Defined at nozzle entrance before all Beam Modifiers. Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041) or if Nominal Beam Energy (300A,0114) changes during beam administration, and KVP (0018,0060) is not present.",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Nominal Beam Energy"
      },
      "(0010,2203)" : {
         "name" : "Patient's Sex Neutered",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "2C",
         "entity" : "Study",
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
         "module" : "Patient Study"
      },
      "(3008,00e0)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "desc" : [
            "Sequence of references to Measured Dose References.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "RT Treatment Summary Record",
         "name" : "Treatment Summary Measured Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(300a,0180)[<0>](300a,0410)" : {
         "name" : "Motion Synchronization Sequence",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "desc" : [
            "Sequence of Motion Synchronization.",
            "One or more items are permitted in this sequence."
         ]
      },
      "(0020,000d)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Study",
         "desc" : "Unique identifier for the Study.",
         "module" : "General Study",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0253)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "module" : "RT Series",
         "name" : "Performed Procedure Step ID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0008,0015)" : {
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
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Instance Coercion DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Requested Procedure ID",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "RT Series"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Device Serial Number",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "module" : "RT Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Numeric Value"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modified Attributes Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "module" : "SOP Common"
      },
      "(0010,1010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Age",
         "req" : "3",
         "entity" : "Study",
         "usage" : "U",
         "desc" : "Age of the Patient.",
         "module" : "Patient Study"
      },
      "(0010,2180)" : {
         "desc" : "Occupation of the Patient.",
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Occupation",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1111)" : {
         "module" : "RT Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "One or more items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Referenced Performed Procedure Step Sequence"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "name" : "Coding Scheme Version",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1080)" : {
         "name" : "Admitting Diagnoses Description",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "module" : "Patient Study"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "module" : "Patient",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "name" : "Breed Registry Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
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
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Signature"
      },
      "(0100,0420)" : {
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization DateTime"
      },
      "(3008,0070)[<0>](300c,0051)" : {
         "mod_tables" : [
            "table_C.8-56"
         ],
         "name" : "Referenced Dose Reference Number",
         "module" : "Calculated Dose Reference Record",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan. Required only if Calculated Dose Reference Number (3008,0072) is not sent. It shall not be present otherwise.",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Treatment Record"
      },
      "(0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient ID",
         "req" : "2",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Primary hospital identification number or code for the patient.",
         "module" : "Patient"
      },
      "(3008,0010)[<0>](3008,0014)" : {
         "module" : "Measured Dose Reference Record",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "U",
         "desc" : [
            "Type of dose measurement.",
            {
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
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "name" : "Measured Dose Type",
         "mod_tables" : [
            "table_C.8-55"
         ]
      },
      "(3008,0021)[<0>](300a,00d0)" : {
         "name" : "Number of Wedges",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "desc" : "Number of wedges associated with current beam.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(300a,0206)[<0>](0008,1040)" : {
         "mod_tables" : [
            "table_C.8-54"
         ],
         "name" : "Institutional Department Name",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "desc" : "Department in the institution where the equipment is located that was used for treatment delivery.",
         "module" : "RT Treatment Machine Record"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0060)" : {
         "module" : "RT Ion Beams Session Record",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : [
            "Sequence of parameters that were overridden during the administration of the beam segment immediately prior to the current control point.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Override Sequence"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,00f9)" : {
         "module" : "RT Patient Setup",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0028,0120)" : {
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
                     ],
                     "el" : "orderedlist",
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1C",
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Pixel Padding Value"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
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
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0068)[<2>](3008,0065)" : {
         "name" : "Parameter Pointer",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Contains the Data Element Tag of the attribute that was corrected."
      },
      "(0008,103f)" : {
         "name" : "Series Description Code Sequence",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(3008,0021)[<0>](3008,002b)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "Treatment machine termination code. This code is dependent upon the particular application and equipment.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Treatment Termination Code"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
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
         "module" : "Patient"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,030d)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "Axial position of the snout (in mm) measured from isocenter to the downstream side of the snout (without consideration of variable length elements such as blocks, MLC and/or compensators). Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041) or if Snout Position changes during beam administration.",
         "entity" : "Treatment Record",
         "req" : "2C",
         "usage" : "M",
         "name" : "Snout Position",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0024)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Treatment Control Point Date",
         "module" : "RT Ion Beams Session Record",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Date when the delivery of radiation at this control point began. For the final control point this shall be the Date when the previous control point ended."
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0251)" : {
         "module" : "RT General Treatment Record",
         "desc" : "Time when current fraction was delivered (begun), or Time last fraction was delivered (begun) in case of RT Treatment Summary Record IOD. See Note.",
         "req" : "2",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Treatment Time",
         "mod_tables" : [
            "table_C.8-53"
         ]
      },
      "(3008,0021)[<0>](3008,00b0)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : [
            "Sequence of treatment wedges.",
            "Required if Number of Wedges (300A,00D0) is non-zero.",
            "One or more items shall be included in this sequence.",
            "The number of items shall be identical to the value of Number of Wedges (300A,00D0)."
         ],
         "req" : "1C",
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "Recorded Wedge Sequence",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Referenced Series Sequence",
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "desc" : "Person's mailing address"
      },
      "(3008,0021)[<0>](3008,00b0)[<1>](300a,00d2)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "Identification number of the Wedges. The value of Wedge Number (300A,00D2) shall be unique within the Beam in which it was created.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Wedge Number"
      },
      "(3008,0021)[<0>](300c,0040)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8.8.26-1",
            "table_10-11"
         ],
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "name" : "Digital Signature Purpose Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(3008,0021)[<0>](300c,00a0)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Referenced Tolerance Table Number",
         "module" : "RT Ion Beams Session Record",
         "desc" : "Uniquely identifies Ion Tolerance Table specified by Tolerance Table Number (300A,0042) within Ion Tolerance Table Sequence in RT Ion Tolerance Tables Module. These tolerances are to be used for verification of treatment machine settings.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0038,0062)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "desc" : "Description of the type of service episode.",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode Description"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "module" : "RT Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Study Instance UID",
         "module" : "Common Instance Reference",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "desc" : "Unique identifier of the Study containing the referenced Instances."
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0380)[<2>](300a,0384)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Range Modulator Gating Stop Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "desc" : "Stop position defines the range modulator position at which the beam is switched off. Required if Range Modulator Type (300A,0348) of the range modulator referenced by Referenced Range Modulator Number (300C,0104) is WHL_MODWEIGHTS or WHL_FIXEDWEIGHTS",
         "module" : "RT Ion Beams Session Record"
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "RT General Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
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
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Identity Removed"
      },
      "(3008,0021)[<0>](300a,0420)[<1>](300a,0421)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "General Accessory ID",
         "module" : "RT Ion Beams Session Record",
         "desc" : "User or machine supplied identifier for General Accessory.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(3008,0021)[<0>](3008,00f0)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : [
            "Sequence of Snouts associated with Beam.",
            "Required if Snout Sequence (300A,030C) is included in the RT Ion Plan referenced within the Referenced RT Plan Sequence (300C,0002).",
            "Only a single item shall be included in this sequence."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Recorded Snout Sequence"
      },
      "(0010,0032)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Time",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "desc" : "Birth time of the Patient."
      },
      "(3008,0021)[<0>](3008,00d0)[<1>](300a,00f5)" : {
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "User-supplied identifier for block tray.",
         "name" : "Block Tray ID",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contributing Equipment Sequence"
      },
      "(3008,0021)[<0>](300a,0306)" : {
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "desc" : "Charge state of radiation. Required if Radiation Type (300A,00C6) is ION",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Radiation Charge State"
      },
      "(0008,1200)" : {
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference"
      },
      "(0012,0072)" : {
         "name" : "Clinical Trial Series Description",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "desc" : [
            "A description of the series in the context of a clinical trial. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "usage" : "U",
         "entity" : "Series"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "module" : "Patient Study",
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
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0012,0020)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "req" : "1",
         "entity" : "Patient",
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
         "module" : "Clinical Trial Subject"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time",
         "module" : "RT Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,a390)" : {
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
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "HL7 Structured Document Reference Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0021)[<0>](3008,00b0)[<1>](300a,00d5)" : {
         "module" : "RT Ion Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M",
         "desc" : "Nominal wedge angle (degrees).",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Wedge Angle"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(0008,0051)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Issuer of Accession Number Sequence"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0380)" : {
         "desc" : [
            "Sequence of Range Modulator Settings for current control point.",
            "One or more items shall be included in this sequence.",
            "Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041), or if Range Modulator Settings change during beam administration, and Number of Range Modulators (300A,0340) is non-zero."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record",
         "name" : "Range Modulator Settings Sequence",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Series",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1120)" : {
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Referenced Patient Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(300a,0180)[<0>](300a,01d4)" : {
         "module" : "RT Patient Setup",
         "desc" : "Longitudinal Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., longitudinal offset between patient positioning performed using setup and treatment position.",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "name" : "Table Top Longitudinal Setup Displacement",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(3008,0220)[<0>](3008,005a)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Number of Fractions Delivered",
         "module" : "RT Treatment Summary Record",
         "req" : "2",
         "usage" : "U",
         "entity" : "Treatment Record",
         "desc" : "Number of fractions delivered as of Treatment Summary Report."
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "module" : "SOP Common",
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
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,014a)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Gantry Pitch Angle",
         "desc" : [
            "Gantry Pitch Angle. i.e., the rotation of the IEC GANTRY coordinate system about the X-axis of the IEC GANTRY coordinate system (degrees). Required for first item of Control Point Sequence, or if Gantry Pitch Rotation Angle changes during Beam. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.5"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Treatment Record",
         "req" : "2C",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,03ac)[<2>](300a,00db)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Wedge Thin Edge Position",
         "module" : "RT Ion Beams Session Record",
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
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(3008,0021)[<0>](300a,0420)[<1>](300a,00f9)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Accessory Code",
         "module" : "RT Ion Beams Session Record",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : "Machine-readable identifier for this accessory"
      },
      "(0010,2292)" : {
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Description"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(3008,0250)" : {
         "desc" : "Date when current fraction was delivered, or Date last fraction was delivered in case of RT Treatment Summary Record IOD. See Note.",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M",
         "module" : "RT General Treatment Record",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "name" : "Treatment Date"
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
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common",
         "name" : "Contribution Description",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0070)[<0>](3008,0076)" : {
         "name" : "Calculated Dose Reference Dose Value",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "module" : "Calculated Dose Reference Record",
         "req" : "2",
         "usage" : "U",
         "entity" : "Treatment Record",
         "desc" : "Calculated Dose (Gy)."
      },
      "(3008,0220)" : {
         "module" : "RT Treatment Summary Record",
         "desc" : [
            "Sequence describing current state of planned vs. delivered fraction groups.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Fraction Group Summary Sequence"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0038,0064)[<0>](0040,0033)" : {
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
         "req" : "1C",
         "entity" : "Study",
         "usage" : "U",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0008,0050)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Accession Number",
         "usage" : "M",
         "req" : "2",
         "entity" : "Study",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "module" : "General Study"
      },
      "(0040,0275)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Request Attributes Sequence"
      },
      "(3008,0021)[<0>](300a,0354)" : {
         "mod_tables" : [
            "table_C.8.8.26-1",
            "table_C.8.8.28-1"
         ],
         "name" : "Patient Support Accessory Code",
         "desc" : "A Patient Support accessory identifier to be read by a device such as a bar code reader.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0010,1002)" : {
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs Sequence"
      },
      "(0100,0410)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
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
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance Status"
      },
      "(4ffe,0001)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Parameters Sequence",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0038,0060)" : {
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Service Episode ID",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0044)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "Machine setting actually delivered at current control point in units specified by Primary Dosimeter Unit (300A,00B3).",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Delivered Meterset"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study"
      },
      "(300c,0002)" : {
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M",
         "desc" : [
            "Reference to a RT Plan.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "RT General Treatment Record",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "name" : "Referenced RT Plan Sequence"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "SOP Common"
      },
      "(0018,1200)" : {
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0032,1034)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Requesting Service Code Sequence",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "module" : "General Study"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(300a,0180)[<0>](300a,01d2)" : {
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "desc" : "Vertical Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., vertical offset between patient positioning performed using setup and treatment position.",
         "name" : "Table Top Vertical Setup Displacement",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0010,1021)" : {
         "module" : "Patient Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Size Code Sequence"
      },
      "(3008,0021)[<0>](300a,0107)[<1>](300a,00f9)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Accessory Code",
         "module" : "RT Ion Beams Session Record",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader."
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,00f9)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Accessory Code",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader."
      },
      "(3008,0021)[<0>](3008,00f4)[<1>](300c,0102)" : {
         "name" : "Referenced Lateral Spreading Device Number",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "desc" : "Uniquely identifies lateral spreading device specified by Lateral Spreading Device Number (300A,0334) within Beam referenced by Referenced Beam Number (300C,0006).",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0012,0071)" : {
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
         "usage" : "U",
         "req" : "3",
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series ID"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "name" : "Encrypted Content Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution DateTime",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(3008,0021)[<0>](3008,00c0)[<1>](300a,00e5)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "User-supplied identifier for compensator.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "name" : "Compensator ID",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(0018,1201)" : {
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment"
      },
      "(300a,0180)[<0>](300a,01d6)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Table Top Lateral Setup Displacement",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Lateral Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., lateral offset between patient positioning performed using setup and treatment position."
      },
      "(0008,0060)" : {
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "RT Series",
         "name" : "Modality",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0010,2297)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Person",
         "module" : "Patient",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient",
         "req" : "2C",
         "usage" : "M"
      },
      "(3008,0021)[<0>](300c,00b0)[<1>](300a,00f9)" : {
         "module" : "RT Ion Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a2)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Shielding Device Type",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "desc" : [
            "Type of Shielding Device used in Patient Setup.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "module" : "RT Patient Setup"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Patient Setup",
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0042)" : {
         "req" : "2",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Desired machine setting for current control point in units specified by Primary Dosimeter Unit (300A,00B3).",
         "module" : "RT Ion Beams Session Record",
         "name" : "Specified Meterset",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
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
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Person's mailing address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,002a)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Treatment Termination Status",
         "desc" : [
            "Conditions under which treatment was terminated.",
            {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "2",
         "entity" : "Treatment Record",
         "usage" : "U",
         "module" : "RT Treatment Summary Record"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step Description",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "module" : "RT Series"
      },
      "(0012,0040)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject ID",
         "module" : "Clinical Trial Subject",
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
         "req" : "1C",
         "usage" : "U",
         "entity" : "Patient"
      },
      "(3008,0050)[<0>](3008,0052)" : {
         "module" : "RT Treatment Summary Record",
         "desc" : "Cumulative Dose delivered to Dose Reference (Gy).",
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Cumulative Dose to Dose Reference"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0198)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Fixation Device Position",
         "desc" : "Position/Notch number of Fixation Device.",
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0012,0060)" : {
         "module" : "Clinical Trial Series",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Series",
         "req" : "2",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Coordinating Center Name"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0398)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "The Scanning Spot Size as calculated using the Full Width Half Maximum (FWHM). Specified by a numeric pair - the size measured in air at isocenter in IEC GANTRY X direction followed by the size in the IEC GANTRY Y direction (mm).",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Scanning Spot Size"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "module" : "RT Series",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(3008,0202)" : {
         "module" : "RT Treatment Summary Record",
         "desc" : "Comment on current treatment status.",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "name" : "Treatment Status Comment",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
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
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Time of Last Calibration"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "M"
      },
      "(0020,0010)" : {
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study ID"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "RT Series"
      },
      "(300a,0206)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.8-54"
         ],
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment used for treatment delivery.",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Machine Record"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers"
      },
      "(3008,0021)[<0>](3008,00f6)[<1>](300a,034c)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "User-supplied identifier for the beam current modulation pattern. Required if Range Modulator Type (300A,0348) is WHL_MODWEIGHTS",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "name" : "Beam Current Modulation ID",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0223)" : {
         "module" : "RT Treatment Summary Record",
         "desc" : "Identifies fraction.",
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Referenced Fraction Number"
      },
      "(3008,0021)[<0>](300a,0356)" : {
         "desc" : [
            "Azimuthal angle (degrees) of the fixation light coordinate around IEC PATIENT SUPPORT Y-axis. Used for eye treatments. See ",
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
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record",
         "name" : "Fixation Light Azimuthal Angle",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](3008,00f0)[<1>](300a,00f9)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Accessory Code",
         "module" : "RT Ion Beams Session Record",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader."
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0144)" : {
         "name" : "Table Top Roll Angle",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "req" : "2C",
         "usage" : "M",
         "entity" : "Treatment Record",
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
         ]
      },
      "(0008,0021)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Series Date",
         "module" : "RT Series",
         "desc" : "Date the Series started.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study"
      },
      "(3008,0021)[<0>](300c,0040)" : {
         "name" : "Referenced Verification Image Sequence",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "desc" : [
            "Sequence of verification images obtained during delivery of current beam.",
            "One or more items are permitted in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.2"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0045)" : {
         "name" : "Meterset Rate Set",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "desc" : "The specified speed of delivery of the specified dose in units specified by Primary Dosimeter Unit (300A,00B3) per minute.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(3008,0021)[<0>](3008,00b0)[<1>](300a,00d8)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Wedge Orientation",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : "Orientation of wedge, i.e., orientation of IEC WEDGE FILTER coordinate system with respect to the IEC BEAM LIMITING DEVICE coordinate systems (degrees).",
         "module" : "RT Ion Beams Session Record"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Study",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0012,0042)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject Reading ID",
         "usage" : "U",
         "req" : "1C",
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
         "module" : "Clinical Trial Subject"
      },
      "(3008,0021)[<0>](3008,00d0)[<1>](300a,00f9)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "An accessory identifier to be read by a device such as a bar code reader.",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Accessory Code"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Series"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0046)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "The delivered speed of delivery of the specified dose in units specified by Primary Dosimeter Unit (300A,00B3) per minute.",
         "module" : "RT Ion Beams Session Record",
         "name" : "Meterset Rate Delivered",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](3008,0036)" : {
         "name" : "Delivered Primary Meterset",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "desc" : [
            "Machine setting actually delivered as recorded by primary Meterset in units specified by Primary Dosimeter Unit (300A,00B3). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.26.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M"
      },
      "(3008,0021)[<0>](3008,00a0)" : {
         "module" : "RT Ion Beams Session Record",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : [
            "Sequence of beam limiting device (collimator) jaw or leaf (element) sets.",
            "One or more items are permitted in this sequence."
         ],
         "name" : "Beam Limiting Device Leaf Pairs Sequence",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,03ac)[<2>](300a,0118)" : {
         "name" : "Wedge Position",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
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
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M"
      },
      "(3008,0021)[<0>](300a,0110)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Number of Control Points",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "Number of control points in Beam.",
         "module" : "RT Ion Beams Session Record"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step ID"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(3008,0021)[<0>](3008,00f2)[<1>](300c,0100)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies range shifter specified by Range Shifter Number (300A,0316) within Beam referenced by Referenced Beam Number (300C,0006).",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Referenced Range Shifter Number"
      },
      "(300a,0180)" : {
         "desc" : [
            "Sequence of patient setup data for current plan.",
            "One or more items shall be included in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "module" : "RT Patient Setup",
         "name" : "Patient Setup Sequence",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operator Identification Sequence",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0140)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Table Top Pitch Angle",
         "module" : "RT Ion Beams Session Record",
         "req" : "2C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "Table Top Pitch Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system (degrees). Required for first item of Control Point Sequence, or if Table Top Pitch Angle changes during Beam. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0120)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Beam Limiting Device Angle",
         "module" : "RT Ion Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "desc" : "Beam Limiting Device (collimator) angle, i.e., orientation of IEC BEAM LIMITING DEVICE coordinate system with respect to IEC GANTRY coordinate system (degrees). Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041) or if beam limiting device (collimator) angle changes during beam administration."
      },
      "(3008,0021)[<0>](300a,0352)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "User-specified identifier for manufacturer specific patient support devices.",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1",
            "table_C.8.8.28-1"
         ],
         "name" : "Patient Support ID"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,03ac)[<2>](300c,00c0)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Referenced Wedge Number",
         "module" : "RT Ion Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely references Wedge described by Wedge Number (300A,00D2) in Wedge Sequence (300A,00D1)."
      },
      "(3008,00e0)[<0>](300c,0051)" : {
         "name" : "Referenced Dose Reference Number",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "module" : "RT Treatment Summary Record",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan referenced in Referenced RT Plan Sequence (300C,0002) of RT General Treatment Record Module."
      },
      "(3008,0010)[<0>](300c,0051)" : {
         "module" : "Measured Dose Reference Record",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan. Required only if Measured Dose Reference Number (3008,0064) is not sent. It shall not be present otherwise.",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "name" : "Referenced Dose Reference Number"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,1062)" : {
         "module" : "General Study",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0392)" : {
         "module" : "RT Ion Beams Session Record",
         "desc" : "Number of spot positions used to specify scanning pattern for current segment beginning at control point. Required if Scan Mode (300A,0308) is MODULATED.",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Number of Scan Spot Positions"
      },
      "(0010,0010)" : {
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M",
         "desc" : "Patient's full name.",
         "module" : "Patient",
         "name" : "Patient's Name",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "module" : "Clinical Trial Study",
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
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Distribution Type"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01d0)" : {
         "desc" : "User-defined description of Setup Reference used for patient alignment.",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "module" : "RT Patient Setup",
         "name" : "Setup Reference Description",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,012a)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Table Top Lateral Position",
         "desc" : "Table Top Lateral position in IEC TABLE TOP coordinate system (mm). This value is interpreted as an absolute, rather than relative, Table setting. Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041) or if Table Top Lateral Position changes during beam administration.",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "name" : "Certificate of Signer",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
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
                     "el" : "orderedlist",
                     "content" : [
                        "\n                        ",
                        {
                           "content" : [
                              "\n                          ",
                              {
                                 "content" : [
                                    "As technology advances, additional encryption algorithms may be allowed in future versions. Implementations should take this possibility into account."
                                 ],
                                 "el" : "para"
                              },
                              "\n                        "
                           ],
                           "el" : "listitem"
                        },
                        "\n                        ",
                        {
                           "content" : [
                              "\n                          ",
                              {
                                 "content" : [
                                    "When symmetric encryption is used, the certificate merely identifies which key was used by which entity, but not the actual key itself. Some other means (e.g., a trusted third party) must be used to obtain the key."
                                 ],
                                 "el" : "para"
                              },
                              "\n                        "
                           ],
                           "el" : "listitem"
                        },
                        "\n                      "
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ]
      },
      "(3008,0030)" : {
         "mod_tables" : [
            "table_C.8-53"
         ],
         "name" : "Referenced Treatment Record Sequence",
         "module" : "RT General Treatment Record",
         "desc" : [
            "Reference to RT Treatment Records to which the current RT Treatment Record is significantly related.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](300a,0402)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Comment on the Setup Image.",
         "module" : "RT Patient Setup",
         "name" : "Setup Image Comment",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
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
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "UID"
      },
      "(0012,0064)" : {
         "name" : "De-identification Method Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ]
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(300a,0180)[<0>](300a,01b4)" : {
         "desc" : [
            "Sequence of devices used for patient alignment in Patient Setup.",
            "One or more items are permitted in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "module" : "RT Patient Setup",
         "name" : "Setup Device Sequence",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0060)[<2>](3008,0062)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : "Contains the Data Element Tag of the attribute that was overridden.",
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Override Parameter Pointer"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence"
      },
      "(0040,0260)" : {
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Performed Protocol Code Sequence"
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
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
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common"
      },
      "(3008,0021)[<0>](3008,0090)[<1>](3008,0092)" : {
         "desc" : "Uniquely identifies Calculated Dose Reference specified by Calculated Dose Reference Number (3008,0072) within Calculated Dose Reference Sequence (3008,0070). Required if Referenced Dose Reference Number (300C,0051) is not sent.",
         "req" : "1C",
         "entity" : "Treatment Record",
         "usage" : "M",
         "module" : "RT Ion Beams Session Record",
         "name" : "Referenced Calculated Dose Reference Number",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300c,00f0)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "desc" : "Uniquely identifies Control Point specified by Control Point Index (300A,0112) within the Beam referenced by Referenced Beam Number (300C,0006).",
         "module" : "RT Ion Beams Session Record",
         "name" : "Referenced Control Point Index",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0062,000b)" : {
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Treatment Record",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a8)" : {
         "module" : "RT Patient Setup",
         "desc" : "Position/Notch number of Shielding Device.",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Shielding Device Position"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "RT Series",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0196)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Fixation Device Description",
         "module" : "RT Patient Setup",
         "desc" : "User-defined description of Fixation Device.",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Protocol Context Sequence"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0251)" : {
         "module" : "RT Treatment Summary Record",
         "desc" : "Time when fraction was delivered.",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Treatment Time"
      },
      "(0008,0013)" : {
         "name" : "Instance Creation Time",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0220)[<0>](300c,0022)" : {
         "name" : "Referenced Fraction Group Number",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "desc" : "References Fraction Group Number (300A,0071) in Fraction Group Sequence (300A,0070) in the referenced RT Plan.",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(3008,0021)[<0>](300a,0308)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Scan Mode",
         "module" : "RT Ion Beams Session Record",
         "desc" : [
            "The method of beam scanning used during treatment.",
            {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M"
      },
      "(3008,0021)[<0>](300a,00ce)" : {
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : [
            "Delivery Type of treatment.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "TREATMENT",
                     "normal patient treatment"
                  ],
                  [
                     "OPEN_PORTFILM",
                     "portal image acquisition with open field (the source of radiation is specified by Radiation Type (300A,00C6))"
                  ],
                  [
                     "TRMT_PORTFILM",
                     "portal image acquisition with treatment port (the source of radiation is specified by Radiation Type (300A,00C6))"
                  ],
                  [
                     "CONTINUATION",
                     "continuation of interrupted treatment"
                  ],
                  [
                     "SETUP",
                     "no treatment beam was applied for this RT Beam. To be used for specifying the gantry, couch, and other machine positions where X-Ray set-up images or measurements were taken"
                  ],
                  [
                     "VERIFICATION",
                     "Treatment used for Quality Assurance rather than patient treatment"
                  ]
               ]
            }
         ],
         "module" : "RT Ion Beams Session Record",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Treatment Delivery Type"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer"
      },
      "(0008,0096)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "module" : "General Study",
         "name" : "Referring Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](3008,0068)" : {
         "name" : "Corrected Parameter Sequence",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "desc" : [
            "Introduces a sequence of items describing corrections made to any attributes prior to delivery of the next control point.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(3008,0021)[<0>](3008,0033)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "Desired machine setting of secondary Meterset. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.26.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "RT Ion Beams Session Record",
         "name" : "Specified Secondary Meterset",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](3008,00d0)[<1>](300c,00e0)" : {
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies block specified by Block Number (300A,00FC) within Beam referenced by Referenced Beam Number (300C,0006).",
         "name" : "Referenced Block Number",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(3008,0021)[<0>](3008,00f4)" : {
         "name" : "Recorded Lateral Spreading Device Sequence",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "desc" : [
            "Sequence of lateral spreading devices associated with Beam.",
            "Required if Number of Lateral Spreading Devices (300A,0330) is non-zero.",
            "One or more items shall be included in this sequence.",
            "The number of items shall be identical to the value of Number of Lateral Spreading Devices (300A,0330)."
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "RT Ion Beams Session Record"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Requested Procedure Description"
      },
      "(3008,0021)[<0>](300a,0420)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "General Accessory Sequence",
         "module" : "RT Ion Beams Session Record",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "desc" : [
            "Introduces a Sequence of General Accessories associated with this Beam.",
            "One or more items are permitted in this sequence."
         ]
      },
      "(3008,0070)[<0>](3008,0074)" : {
         "mod_tables" : [
            "table_C.8-56"
         ],
         "name" : "Calculated Dose Reference Description",
         "module" : "Calculated Dose Reference Record",
         "desc" : "User-defined description of Calculated Dose Reference.",
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "U"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0123)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Patient Support Rotation Direction",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "desc" : [
            "Direction of Patient Support Rotation when viewing table from above, for segment beginning at current Control Point.",
            "Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041), or if Patient Support Rotation Direction changes during beam administration.",
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
         "module" : "RT Ion Beams Session Record"
      },
      "(0012,0081)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
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
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0021)[<0>](300a,00c3)" : {
         "name" : "Beam Description",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "req" : "3",
         "entity" : "Treatment Record",
         "usage" : "M",
         "desc" : [
            "User-defined description for Beam. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "RT Ion Beams Session Record"
      },
      "(3008,0054)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "First Treatment Date",
         "req" : "2",
         "usage" : "U",
         "entity" : "Treatment Record",
         "desc" : "Date of delivery of the first treatment.",
         "module" : "RT Treatment Summary Record"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Referenced Study Sequence",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
            "One or more items are permitted in this sequence.",
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
         "module" : "RT Series"
      },
      "(3008,0021)[<0>](3008,0041)[<1>](300a,0122)" : {
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "name" : "Patient Support Angle",
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "desc" : "Patient Support angle, i.e., orientation of IEC PATIENT SUPPORT (turntable) coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees). Required for Control Point 0 of Ion Control Point Delivery Sequence (3008,0041) or if Patient Support Angle changes during beam administration."
      },
      "(0008,1060)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Name of Physician(s) Reading Study",
         "module" : "General Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "req" : "3",
         "entity" : "Study",
         "usage" : "M"
      },
      "(300a,0078)" : {
         "name" : "Number of Fractions Planned",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "desc" : "Total number of treatments (fractions) planned for current fraction group.",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,019a)" : {
         "module" : "RT Patient Setup",
         "desc" : "The Fixation Device Roll Angle, i.e., orientation of ROLLED FIXATION DEVICE coordinate system with respect to IEC PITCHED FIXATION DEVICE coordinate system (degrees). Rolling is the rotation around IEC PATIENT SUPPORT Y-axis.",
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "name" : "Fixation Device Roll Angle",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "module" : "General Study",
         "req" : "1C",
         "usage" : "M",
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
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "module" : "RT Series",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Accession Number"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "module" : "RT Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(3008,00e0)[<0>](3008,0052)" : {
         "module" : "RT Treatment Summary Record",
         "req" : "1",
         "entity" : "Treatment Record",
         "usage" : "U",
         "desc" : "Cumulative Dose delivered to Dose Reference (Gy).",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Cumulative Dose to Dose Reference"
      },
      "(0008,1049)" : {
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Physician(s) of Record Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(300a,0180)[<0>](300a,0184)" : {
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "U",
         "desc" : "User-defined additional description of patient position. Required if Patient Position (0018,5100) is not present.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Patient Additional Position"
      },
      "(3008,0021)" : {
         "name" : "Treatment Session Ion Beam Sequence",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ],
         "module" : "RT Ion Beams Session Record",
         "desc" : [
            "Sequence of setup and/or treatment beams administered during treatment session.",
            "One or more items shall be included in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(3008,0021)[<0>](3008,0090)" : {
         "module" : "RT Ion Beams Session Record",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of doses estimated for each treatment delivery.",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Referenced Calculated Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8.8.26-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "entity" : "Series",
         "req" : "1C",
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
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number"
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
   ]
}