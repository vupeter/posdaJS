var data = {
   "tags" : {
      "(0040,0275)[<0>](0040,0008)" : {
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "module" : "RT Series",
         "name" : "Scheduled Protocol Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0008,1062)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) Reading Study Identification Sequence",
         "module" : "General Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "entity" : "Study",
         "req" : "3"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0125)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "name" : "Table Top Eccentric Angle",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "Table Top (non-isocentric) angle, i.e., orientation of IEC TABLE TOP ECCENTRIC coordinate system with respect to IEC PATIENT SUPPORT coordinate system (degrees). Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Table Top Eccentric Angle changes during beam administration."
      },
      "(0038,0062)" : {
         "name" : "Service Episode Description",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "desc" : "Description of the type of service episode.",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0223)" : {
         "name" : "Referenced Fraction Number",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "desc" : "Identifies fraction.",
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "RT Series",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0018,1201)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Time of Last Calibration",
         "module" : "General Equipment",
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
         "entity" : "Equipment",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
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
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0230)" : {
         "desc" : [
            "Position of Beam Stopper during beam administration.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "RT Beams Session Record",
         "name" : "Beam Stopper Position",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](300a,00f0)" : {
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : "Number of shielding blocks or Electron Inserts associated with Beam.",
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Number of Blocks",
         "usage" : "M"
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
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0048)" : {
         "desc" : "Dose Rate actually delivered for segment beginning at current control point (Meterset/min).",
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Dose Rate Delivered",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](300a,00b4)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "name" : "Source-Axis Distance",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "Radiation source to gantry rotation axis distance of the equipment that was used for beam delivery (mm).",
         "module" : "RT Beams Session Record"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "module" : "SOP Common",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0040,0251)" : {
         "name" : "Performed Procedure Step End Time",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,011a)[<2>](300a,011c)" : {
         "usage" : "M",
         "name" : "Leaf/Jaw Positions",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "Positions of beam limiting device (collimator) leaf (element) or jaw pairs (mm) in IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), e.g., X-axis for MLCX, Y-axis for MLCY. Contains 2N values, where N is the Number of Leaf/Jaw Pairs (300A,00BC) defined in element of Beam Limiting Device Leaf Pairs Sequence (3008,00A0). Values shall be in IEC leaf subscript order 101, 102, \u2026 1N, 201, 202 \u2026 2N.",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(3008,0010)[<0>](3004,0002)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "name" : "Dose Units",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "module" : "Measured Dose Reference Record",
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
         ]
      },
      "(3008,0220)[<0>](3008,0224)" : {
         "req" : "2",
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
         "usage" : "U"
      },
      "(3008,00e0)" : {
         "name" : "Treatment Summary Measured Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of references to Measured Dose References.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
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
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](3008,0066)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "User-defined description of reason for override of parameter specified by Override Parameter Pointer (3008,0062).",
         "module" : "RT Beams Session Record",
         "name" : "Override Reason",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00b0)[<1>](300a,00d8)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : "Orientation of wedge, i.e., orientation of IEC WEDGE FILTER coordinate system with respect to IEC BEAM LIMITING DEVICE coordinate system (degrees).",
         "usage" : "M",
         "name" : "Wedge Orientation",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(3008,0020)[<0>](3008,0037)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Delivered Secondary Meterset",
         "module" : "RT Beams Session Record",
         "desc" : "Machine setting actually delivered as recorded by secondary Meterset."
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0109)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : [
            "Type of Applicator.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
               ]
            },
            "=",
            "=",
            "=",
            "="
         ],
         "module" : "RT Beams Session Record",
         "name" : "Applicator Type",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0025)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : "Time when the delivery of radiation at this control point began. For the final control point this shall be the Time when the previous control point ended.",
         "usage" : "M",
         "name" : "Treatment Control Point Time",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of parameters that were overridden during the administration of the beam segment immediately prior to the current control point.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Override Sequence",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b8)" : {
         "module" : "RT Patient Setup",
         "desc" : "User-defined label for Setup Device used for patient alignment.",
         "usage" : "U",
         "name" : "Setup Device Label",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,012a)" : {
         "req" : "2C",
         "entity" : "Treatment Record",
         "desc" : "Table Top Lateral position in IEC TABLE TOP coordinate system (mm). This value is interpreted as an absolute, rather than relative, Table setting. Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Table Top Lateral Position changes during beam administration.",
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Table Top Lateral Position",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9170)" : {
         "usage" : "U",
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
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(0028,0303)" : {
         "name" : "Longitudinal Temporal Information Modified",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0038,0014)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Admission ID Sequence"
      },
      "(300a,0206)[<0>](300a,00b2)" : {
         "mod_tables" : [
            "table_C.8-54"
         ],
         "name" : "Treatment Machine Name",
         "usage" : "M",
         "desc" : "User-defined name identifying treatment machine used for treatment delivery.",
         "module" : "RT Treatment Machine Record",
         "entity" : "Treatment Record",
         "req" : "2"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "module" : "SOP Common",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Series"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0142)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "name" : "Table Top Pitch Rotation Direction",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : [
            [
               "Direction of Table Top Pitch Rotation when viewing the table along the positive X-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. If required by treatment delivery device, shall be present for first item of Control Point Sequence. If required by treatment delivery device and if Table Top Pitch Rotation Direction changes during Beam, shall be present in all subsequent items of Control Point Sequence. See ",
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
                     "linkend" : "sect_C.8.8.25.6.2",
                     "xrefstyle" : "select: label"
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
         "module" : "RT Beams Session Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0032)" : {
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0012,0072)" : {
         "entity" : "Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series Description",
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
         "module" : "Clinical Trial Series"
      },
      "(3008,0020)[<0>](3008,00b0)[<1>](300a,00d4)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Wedge ID",
         "module" : "RT Beams Session Record",
         "desc" : "User-supplied identifier for wedge."
      },
      "(0008,0012)" : {
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Date",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0068)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Corrected Parameter Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : [
            "Introduces a sequence of items describing any corrections made to any attributes prior to delivery of the next control point.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution Description",
         "usage" : "M"
      },
      "(3008,0202)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Treatment Status Comment",
         "module" : "RT Treatment Summary Record",
         "desc" : "Comment on current treatment status."
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "entity" : "Study"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "req" : "1C",
         "entity" : "Series",
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
         "module" : "RT Series",
         "name" : "Scheduled Procedure Step ID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0010,1000)" : {
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "usage" : "M",
         "name" : "Other Patient IDs",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a4)" : {
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : "User-defined label for Shielding Device.",
         "module" : "RT Patient Setup",
         "name" : "Shielding Device Label",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0015)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Nominal Beam Energy Unit",
         "module" : "RT Beams Session Record",
         "desc" : [
            "Units used for Nominal Beam Energy (300A,0114). Required if Nominal Beam Energy (300A,0114) is sent.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            "If Radiation Type (300A,00C6) is PHOTON, Nominal Beam Energy Unit (300A,0015) shall be MV. If Radiation Type (300A,00C6) is ELECTRON, Nominal Beam Energy Unit (300A,0015) shall be MEV."
         ],
         "entity" : "Treatment Record",
         "req" : "1C"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "module" : "General Study",
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
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Study"
      },
      "(0008,0014)" : {
         "name" : "Instance Creator UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Series",
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
         "name" : "Text Value",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0128)" : {
         "entity" : "Treatment Record",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Table Top Vertical Position",
         "module" : "RT Beams Session Record",
         "desc" : "Table Top Vertical position in IEC TABLE TOP coordinate system (mm). This value is interpreted as an absolute, rather than relative, Table setting. Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Table Top Vertical Position changes during beam administration."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "DateTime",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "module" : "RT Series",
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
         "usage" : "M",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "RT Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(300a,0180)[<0>](300a,0410)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "name" : "Motion Synchronization Sequence",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of Motion Synchronization.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "RT Patient Setup"
      },
      "(0010,0020)" : {
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : "Primary hospital identification number or code for the patient."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "module" : "SOP Common",
         "desc" : "Person's telephone number(s)"
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
         "module" : "RT Patient Setup",
         "name" : "Referenced Setup Image Sequence",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0070)" : {
         "usage" : "U",
         "name" : "Calculated Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "module" : "Calculated Dose Reference Record",
         "desc" : [
            "Sequence of doses estimated for each treatment delivery.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(3008,0030)[<0>](0008,1155)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT General Treatment Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01d2)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Vertical Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., vertical offset between patient positioning performed using setup and treatment position.",
         "module" : "RT Patient Setup",
         "name" : "Table Top Vertical Setup Displacement",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(0010,2293)" : {
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
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "usage" : "M",
         "name" : "Patient Breed Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
         "entity" : "Patient"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,014c)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Gantry Pitch Rotation Direction",
         "usage" : "M",
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
                  "attrs" : {
                     "linkend" : "sect_C.8.8.25.6.5",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "RT Beams Session Record"
      },
      "(3008,0020)[<0>](300c,00b0)[<1>](300a,00f9)" : {
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Accessory Code",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,00c0)[<1>](300a,00e5)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : "User-supplied identifier for compensator.",
         "usage" : "M",
         "name" : "Compensator ID",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(3008,0020)[<0>](3008,0090)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : [
            "Sequence of doses estimated for each treatment delivery.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Referenced Calculated Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0010,1030)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Patient's Weight",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Weight of the Patient, in kilograms."
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0024)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Treatment Control Point Date",
         "module" : "RT Beams Session Record",
         "desc" : "Date when the delivery of radiation at this control point began. For the final control point this shall be the Date when the previous control point ended."
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT General Treatment Record",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number"
      },
      "(3008,0054)" : {
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : "Date of delivery of the first treatment.",
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "First Treatment Date",
         "usage" : "U"
      },
      "(3008,0020)[<0>](300a,0420)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : [
            "Introduces a Sequence of General Accessories associated with this Beam.",
            "One or more items are permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "General Accessory Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "name" : "Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](3008,0061)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "name" : "Parameter Sequence Pointer",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "Contains the Data Element Tag of the parent sequence containing the attribute that was overridden. The value is limited in scope to the Treatment Session Beam Sequence (3008,0020) and all nested sequences therein.",
         "module" : "RT Beams Session Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "req" : "1C",
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
         "usage" : "M"
      },
      "(3008,0070)[<0>](3008,0074)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "name" : "Calculated Dose Reference Description",
         "module" : "Calculated Dose Reference Record",
         "desc" : "User-defined description of Calculated Dose Reference."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0400,0561)" : {
         "usage" : "M",
         "name" : "Original Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0012,0083)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Consent for Clinical Trial Use Sequence",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
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
         "module" : "Clinical Trial Study"
      },
      "(0010,1010)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Age",
         "module" : "Patient Study",
         "desc" : "Age of the Patient."
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "req" : "1",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
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
         ],
         "usage" : "U",
         "name" : "Consent for Distribution Flag",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Value Type",
         "req" : "1",
         "entity" : "Series"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0124)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Distance (positive) from the IEC PATIENT SUPPORT vertical axis to the IEC TABLE TOP ECCENTRIC vertical axis (mm).",
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Table Top Eccentric Axis Distance",
         "usage" : "M"
      },
      "(0018,1008)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Gantry ID",
         "usage" : "M",
         "desc" : "Identifier of the gantry or positioner.",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Version",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study"
      },
      "(0012,0021)" : {
         "desc" : [
            "The name of the clinical trial protocol. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.3"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "2",
         "entity" : "Patient"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0435)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "name" : "Applicator Opening Y",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : [
            "Opening (in mm) of the applicator's aperture in IEC BEAM LIMITING DEVICE coordinate system in Y-Direction.",
            "Required if Applicator Aperture Shape (300A,0432) is SYM_RECTANGLE."
         ]
      },
      "(0008,0060)" : {
         "entity" : "Series",
         "req" : "1",
         "name" : "Modality",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M",
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
         "module" : "RT Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "module" : "SOP Common",
         "desc" : "May include Sequence Attributes and their Items.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,00e0)[<0>](3008,0052)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "name" : "Cumulative Dose to Dose Reference",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "desc" : "Cumulative Dose delivered to Dose Reference (Gy).",
         "module" : "RT Treatment Summary Record"
      },
      "(3008,0020)[<0>](300a,00c2)" : {
         "module" : "RT Beams Session Record",
         "desc" : "User-defined name for delivered Beam.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Beam Name",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "module" : "Patient",
         "name" : "Ethnic Group",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0010,0021)" : {
         "req" : "3",
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
                     ]
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
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Attribute Modification DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "usage" : "M",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         "entity" : "Patient",
         "req" : "3"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
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
         "module" : "SOP Common"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0433)" : {
         "usage" : "M",
         "name" : "Applicator Opening",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : [
            "Opening (in mm) of the applicator's aperture in IEC BEAM LIMITING DEVICE coordinate system. In case of square-shaped applicator contains the length of the sides of the square. In case of circular-shaped applicators, contains the diameter of the circular aperture.",
            "Required if Applicator Aperture Shape (300A,0432) is SYM_SQUARE or SYM_CIRCULAR."
         ],
         "entity" : "Treatment Record",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "UID"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3"
      },
      "(3008,0251)" : {
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : "Time when current fraction was delivered (begun), or Time last fraction was delivered (begun) in case of RT Treatment Summary Record IOD. See Note.",
         "module" : "RT General Treatment Record",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "name" : "Treatment Time",
         "usage" : "M"
      },
      "(3008,0050)[<0>](300c,0051)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Referenced Dose Reference Number",
         "module" : "RT Treatment Summary Record",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan referenced in Referenced RT Plan Sequence (300C,0002) of RT General Treatment Record Module."
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
               "el" : "note",
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
               ]
            }
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Algorithm",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](300c,00b0)[<1>](300a,00dc)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Bolus ID",
         "usage" : "M",
         "desc" : "User-supplied identifier for the Bolus.",
         "module" : "RT Beams Session Record"
      },
      "(0008,0201)" : {
         "req" : "3",
         "entity" : "Treatment Record",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
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
         "usage" : "M",
         "name" : "Timezone Offset From UTC",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "entity" : "Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "RT Series"
      },
      "(3008,0020)[<0>](3008,00a0)[<1>](300a,00bc)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Number of Leaf/Jaw Pairs",
         "usage" : "M",
         "desc" : "Number of leaf (element) or jaw pairs (equal to 1 for standard beam limiting device jaws).",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(0012,0060)" : {
         "entity" : "Series",
         "req" : "2",
         "usage" : "U",
         "name" : "Clinical Trial Coordinating Center Name",
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         ]
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment"
      },
      "(3008,0020)[<0>](3008,003a)" : {
         "name" : "Specified Treatment Time",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "Treatment Time set (sec).",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0018,1000)" : {
         "entity" : "Equipment",
         "req" : "3",
         "usage" : "M",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
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
      "(0010,1002)[<0>](0010,0022)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Type of Patient ID",
         "module" : "Patient",
         "desc" : [
            "The type of identifier in this item.",
            {
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
               ],
               "title" : "Defined Terms:"
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
         "entity" : "Patient",
         "req" : "1"
      },
      "(3008,0020)[<0>](3008,00b0)" : {
         "name" : "Recorded Wedge Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence of treatment wedges present during delivered Beam. Required if Number of Wedges (300A,00D0) is non-zero.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "req" : "1",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M"
      },
      "(0012,0030)" : {
         "entity" : "Patient",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site ID",
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
         "module" : "Clinical Trial Subject"
      },
      "(3008,0020)[<0>](300c,0040)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Verification Image Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : [
            "Sequence of verification images obtained during delivery of current beam.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0020,000d)" : {
         "req" : "1",
         "entity" : "Study",
         "desc" : "Unique identifier for the Study.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Instance UID",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,0184)" : {
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "desc" : "User-defined additional description of patient position. Required if Patient Position (0018,5100) is not present.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Patient Additional Position"
      },
      "(3008,0020)[<0>](300a,0420)[<1>](300a,0421)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : "User or machine supplied identifier for General Accessory.",
         "usage" : "M",
         "name" : "General Accessory ID",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0008,1111)" : {
         "module" : "RT Series",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "One or more items are permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Referenced Performed Procedure Step Sequence",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "3",
         "entity" : "Series"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "req" : "1C"
      },
      "(3008,0020)[<0>](300a,0420)[<1>](300a,0424)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "General Accessory Number",
         "usage" : "M",
         "desc" : "Identification Number of the General Accessory. The value shall be unique within the sequence.",
         "module" : "RT Beams Session Record"
      },
      "(0038,0064)" : {
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "U",
         "name" : "Issuer of Service Episode ID Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "entity" : "Study"
      },
      "(3008,0020)[<0>](3008,00d0)[<1>](300c,00e0)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : "Uniquely identifies block specified by Block Number (300A,00FC) within Beam referenced by Referenced Beam Number (300C,0006).",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Referenced Block Number"
      },
      "(3008,0020)[<0>](300c,0040)[<1>](3008,0078)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Start Meterset",
         "usage" : "M",
         "desc" : "Cumulative Meterset Weight within Beam referenced by Referenced Beam Number at which image acquisition starts.",
         "module" : "RT Beams Session Record"
      },
      "(0008,0021)" : {
         "name" : "Series Date",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M",
         "desc" : "Date the Series started.",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,0250)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Performed Procedure Step End Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series",
         "desc" : "Date on which the Performed Procedure Step ended."
      },
      "(3008,0020)[<0>](300a,00e0)" : {
         "usage" : "M",
         "name" : "Number of Compensators",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "Number of compensators associated with current delivered Beam.",
         "entity" : "Treatment Record",
         "req" : "2"
      },
      "(3008,0020)[<0>](300c,00b0)" : {
         "desc" : [
            "Sequence of boli associated with Beam.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "RT Beams Session Record",
         "name" : "Referenced Bolus Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0008,0096)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referring Physician Identification Sequence",
         "module" : "General Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "module" : "RT Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0008,0110)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Identification Sequence",
         "usage" : "M",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "SOP Common"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Referenced Instance Sequence",
         "usage" : "U",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Common Instance Reference"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common"
      },
      "(300a,0180)[<0>](300a,0183)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Patient Setup Label",
         "usage" : "U",
         "desc" : "The user-defined label for the patient setup.",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0010,2299)" : {
         "name" : "Responsible Organization",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2C"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "req" : "1C",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0120)" : {
         "desc" : "Beam Limiting Device (collimator) angle, i.e., orientation of IEC BEAM LIMITING DEVICE coordinate system with respect to IEC GANTRY coordinate system (degrees). Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if beam limiting device (collimator) angle changes during beam delivery.",
         "module" : "RT Beams Session Record",
         "name" : "Beam Limiting Device Angle",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(0018,a001)" : {
         "usage" : "M",
         "name" : "Contributing Equipment Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0008,0013)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Instance Creation Time",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers"
      },
      "(3008,0020)[<0>](3008,0090)[<1>](3008,0092)" : {
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : "Uniquely identifies Calculated Dose Reference specified by Calculated Dose Reference Number (3008,0072) within Calculated Dose Reference Sequence (3008,0070). Required if Referenced Dose Reference Number (300C,0051) is not sent.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Referenced Calculated Dose Reference Number"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
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
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0199)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Fixation Device Pitch Angle",
         "usage" : "U",
         "desc" : "The Fixation Device Pitch Angle, i.e., orientation of PITCHED FIXATION DEVICE coordinate system with respect to IEC PATIENT SUPPORT coordinate system (degrees). Pitching is the rotation around IEC PATIENT SUPPORT X-axis.",
         "module" : "RT Patient Setup"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "req" : "1",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0436)" : {
         "module" : "RT Beams Session Record",
         "desc" : "Radiation source to applicator mounting position distance (in mm) for current applicator.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : " Source to Applicator Mounting Position Distance",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0070)[<0>](300c,0051)" : {
         "usage" : "U",
         "name" : "Referenced Dose Reference Number",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "module" : "Calculated Dose Reference Record",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan. Required only if Calculated Dose Reference Number (3008,0072) is not sent. It shall not be present otherwise.",
         "entity" : "Treatment Record",
         "req" : "1C"
      },
      "(0008,001a)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Related General SOP Class UID",
         "usage" : "M",
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
         "module" : "SOP Common"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0008,0016)" : {
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
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
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
         "usage" : "M",
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0028,0120)" : {
         "req" : "1C",
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
                                 "el" : "para",
                                 "content" : [
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                                 ]
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
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "General Equipment",
         "name" : "Pixel Padding Value",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0010,21b0)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Additional Patient History",
         "usage" : "U",
         "desc" : "Additional information about the Patient's medical history.",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3"
      },
      "(3008,0030)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Treatment Record Sequence",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "module" : "RT General Treatment Record",
         "desc" : [
            "Reference to RT Treatment Records to which the current RT Treatment Record is significantly related.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0140)" : {
         "req" : "1C",
         "entity" : "Treatment Record",
         "desc" : [
            "Table Top Pitch Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system (degrees). If required by treatment delivery device, shall be present for first item of Control Point Sequence. If required by treatment delivery device and if Table Top Pitch Angle changes during Beam, shall be present in all subsequent items of Control Point Sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Table Top Pitch Angle",
         "usage" : "M"
      },
      "(300a,0206)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Mailing address of the institution where the equipment is located that was used for treatment delivery.",
         "module" : "RT Treatment Machine Record",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01b4)" : {
         "desc" : [
            "Sequence of devices used for patient alignment in Patient Setup.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Setup Device Sequence",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0010,0040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Sex",
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
         "entity" : "Patient",
         "req" : "2"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "entity" : "Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type",
         "usage" : "M",
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
         "module" : "RT Series"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "usage" : "M",
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "entity" : "Treatment Record",
         "req" : "2C"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0115)" : {
         "name" : "Dose Rate Set",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "Dose Rate set on treatment machine for segment beginning at current control point (Meterset/min).",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "2"
      },
      "(0010,2201)" : {
         "name" : "Patient Species Description",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "RT Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,1201)" : {
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
         "module" : "SOP Common",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0123)" : {
         "module" : "RT Beams Session Record",
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
         ],
         "usage" : "M",
         "name" : "Patient Support Rotation Direction",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(0010,0010)" : {
         "req" : "2",
         "entity" : "Patient",
         "desc" : "Patient's full name.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Name",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Issuer of Accession Number Sequence",
         "module" : "RT Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Name",
         "module" : "SOP Common",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SOP Common"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Series containing the referenced Instances."
      },
      "(0008,1090)" : {
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "entity" : "Equipment",
         "req" : "3"
      },
      "(0010,2297)" : {
         "module" : "Patient",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Person",
         "req" : "2C",
         "entity" : "Patient"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Common Instance Reference"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "module" : "SOP Common",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "usage" : "M",
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b6)" : {
         "usage" : "U",
         "name" : "Setup Device Type",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
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
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,00f9)" : {
         "usage" : "M",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(3008,0020)" : {
         "desc" : [
            "Sequence of Beams administered during treatment session.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "RT Beams Session Record",
         "name" : "Treatment Session Beam Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
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
         "entity" : "Series",
         "req" : "1C"
      },
      "(3008,0020)[<0>](3008,00c0)[<1>](300a,00ef)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "User-supplied identifier for compensator tray.",
         "module" : "RT Beams Session Record",
         "name" : "Compensator Tray ID",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01d0)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Setup Reference Description",
         "module" : "RT Patient Setup",
         "desc" : "User-defined description of Setup Reference used for patient alignment.",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "req" : "1",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(300a,0206)[<0>](0008,1090)" : {
         "desc" : "Manufacturer's model name of the equipment used for treatment delivery.",
         "module" : "RT Treatment Machine Record",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(3008,0010)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "Measured Dose Reference Record",
         "desc" : [
            "Sequence of doses measured during treatment delivery, summed over entire session.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "name" : "Measured Dose Reference Sequence"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a2)" : {
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
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Shielding Device Type",
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Common Instance Reference"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2C"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0144)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "name" : "Table Top Roll Angle",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : [
            "Table Top Roll Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the IEC Y-axis of the IEC TABLE TOP coordinate system (degrees). If required by treatment delivery device, shall be present for first item of Control Point Sequence. If required by treatment delivery device and if Table Top Roll Angle changes during Beam, shall be present in all subsequent items of Control Point Sequence. See ",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Series Instance UID",
         "usage" : "U",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "module" : "Common Instance Reference"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "UID",
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C"
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Software Versions",
         "req" : "3",
         "entity" : "Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "RT Series"
      },
      "(0010,1020)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "desc" : "Length or size of the Patient, in meters.",
         "usage" : "U",
         "name" : "Patient's Size",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(3008,0020)[<0>](3008,00a0)[<1>](300a,00b8)" : {
         "usage" : "M",
         "name" : "RT Beam Limiting Device Type",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
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
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(3008,0020)[<0>](300c,0040)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,01d4)" : {
         "module" : "RT Patient Setup",
         "desc" : "Longitudinal Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., longitudinal offset between patient positioning performed using setup and treatment position.",
         "usage" : "U",
         "name" : "Table Top Longitudinal Setup Displacement",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C"
      },
      "(3008,00e0)[<0>](300a,0016)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "desc" : "User-defined description of Dose Reference.",
         "usage" : "U",
         "name" : "Dose Reference Description",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0116)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "name" : "Wedge Position Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence of Wedge positions for current control point.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "RT Beams Session Record"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "module" : "SOP Common",
         "name" : "Contribution DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0070)" : {
         "entity" : "Equipment",
         "req" : "2",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "module" : "General Equipment"
      },
      "(0010,2203)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Sex Neutered",
         "usage" : "U",
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
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "2C"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a6)" : {
         "desc" : "User-defined description of Shielding Device.",
         "module" : "RT Patient Setup",
         "name" : "Shielding Device Description",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0012,0031)" : {
         "req" : "2",
         "entity" : "Patient",
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
         "usage" : "U",
         "name" : "Clinical Trial Site Name",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0114)" : {
         "usage" : "M",
         "name" : "Nominal Beam Energy",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "Nominal Beam Energy at control point.",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(3008,0020)[<0>](300a,00c7)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "name" : "High-Dose Technique Type",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : [
            "Type of high-dose treatment technique.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            },
            "Required if treatment technique requires a dose that would normally require overriding of treatment machine safety controls."
         ]
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,019a)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "The Fixation Device Roll Angle, i.e., orientation of ROLLED FIXATION DEVICE coordinate system with respect to IEC PITCHED FIXATION DEVICE coordinate system (degrees). Rolling is the rotation around IEC PATIENT SUPPORT Y-axis.",
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Roll Angle",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(0010,0032)" : {
         "module" : "Patient",
         "desc" : "Birth time of the Patient.",
         "usage" : "M",
         "name" : "Patient's Birth Time",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "entity" : "Patient"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Treatment Record",
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
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "U"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "desc" : [
            "Type of Patient ID. Refer to HL7 v2 Table 0203 for Defined Terms.",
            {
               "content" : [
                  "\n                ",
                  {
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
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
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
               "content" : [
                  "\n                      ",
                  {
                     "el" : "orderedlist",
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
                     ],
                     "attrs" : {
                        "numeration" : "arabic"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate of Signer"
      },
      "(0038,0010)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Admission ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider"
      },
      "(0040,0260)" : {
         "req" : "3",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "name" : "Performed Protocol Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "name" : "Breed Registry Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ]
      },
      "(3008,0050)[<0>](3008,0052)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Cumulative Dose to Dose Reference",
         "module" : "RT Treatment Summary Record",
         "desc" : "Cumulative Dose delivered to Dose Reference (Gy)."
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0129)" : {
         "name" : "Table Top Longitudinal Position",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "Table Top Longitudinal position in IEC TABLE TOP coordinate system (mm). This value is interpreted as an absolute, rather than relative, Table setting. Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Table Top Longitudinal Position changes during beam administration.",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "2C"
      },
      "(0040,0245)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Performed Procedure Step Start Time",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "Time on which the Performed Procedure Step started.",
         "module" : "RT Series"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "entity" : "Study",
         "req" : "1",
         "usage" : "M",
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
         ]
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01bc)" : {
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Setup Device Parameter",
         "module" : "RT Patient Setup",
         "desc" : [
            "Setup Parameter for Setup Device in appropriate IEC 61217 coordinate system.",
            "Units shall be mm for distances and degrees for angles."
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Study"
      },
      "(0010,0200)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Quality Control Subject",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "module" : "Patient"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1150)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
         "module" : "Patient"
      },
      "(0040,0253)" : {
         "req" : "3",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "usage" : "M",
         "name" : "Performed Procedure Step ID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(3008,0020)[<0>](3008,003b)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Treatment Time actually delivered (sec).",
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Delivered Treatment Time",
         "usage" : "M"
      },
      "(0008,1080)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Treatment Record",
         "req" : "1C"
      },
      "(0010,2180)" : {
         "entity" : "Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Occupation",
         "usage" : "U",
         "desc" : "Occupation of the Patient.",
         "module" : "Patient Study"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
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
         "usage" : "M",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "req" : "3",
         "entity" : "Series"
      },
      "(0008,001b)" : {
         "req" : "3",
         "entity" : "Treatment Record",
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
         "module" : "SOP Common",
         "name" : "Original Specialized SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(3008,0010)[<0>](3008,0064)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "U",
         "name" : "Measured Dose Reference Number",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "module" : "Measured Dose Reference Record",
         "desc" : "Unique identifier of measured dose point. Required only if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise."
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Requested Procedure ID",
         "module" : "RT Series",
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
         ]
      },
      "(0010,4000)" : {
         "desc" : "User-defined additional information about the patient.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Comments",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,0005)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "name" : "Specific Character Set",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         "module" : "SOP Common"
      },
      "(3008,0010)[<0>](3008,0012)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "Measured Dose Reference Record",
         "desc" : "User-defined description of Dose Reference (e.g., \"Exit dose\", \"Point A\").",
         "usage" : "U",
         "name" : "Measured Dose Description",
         "mod_tables" : [
            "table_C.8-55"
         ]
      },
      "(3008,0020)[<0>](300a,00ce)" : {
         "desc" : [
            "Delivery Type of treatment.",
            {
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
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Treatment Delivery Type",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
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
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp Type",
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(0008,0053)" : {
         "req" : "1C",
         "entity" : "Treatment Record",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Query/Retrieve View",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "req" : "1C",
         "entity" : "Patient",
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
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "module" : "RT Series",
         "name" : "Scheduled Procedure Step Description",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0194)" : {
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "desc" : "User-defined label identifier for Fixation Device.",
         "usage" : "U",
         "name" : "Fixation Device Label",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3008,0220)[<0>](300a,0078)" : {
         "desc" : "Number of fractions planned for this fraction group.",
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Number of Fractions Planned",
         "usage" : "U",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,0182)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Patient Setup Number",
         "usage" : "U",
         "desc" : "Identification number of the Patient Setup. The value of Patient Setup Number (300A,0182) shall be unique within the RT Plan in which it is created.",
         "module" : "RT Patient Setup"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "module" : "RT Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "name" : "Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0100,0410)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance Status",
         "usage" : "M",
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
         "module" : "SOP Common"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9171)" : {
         "usage" : "U",
         "name" : "Respiratory Signal Source",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "desc" : [
            "Signal source from which respiratory motion is derived.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
               ]
            }
         ],
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "req" : "1C"
      },
      "(3008,0070)[<0>](3008,0072)" : {
         "desc" : "Unique identifier of dose reference point within RT Treatment Record IOD. Required only if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "module" : "Calculated Dose Reference Record",
         "name" : "Calculated Dose Reference Number",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(3008,0056)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Most Recent Treatment Date",
         "usage" : "U",
         "desc" : "Date of delivery of the most recent administration.",
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "req" : "2"
      },
      "(0012,0082)" : {
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0020,0010)" : {
         "module" : "General Study",
         "desc" : "User or equipment generated Study identifier.",
         "usage" : "M",
         "name" : "Study ID",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "entity" : "Study"
      },
      "(0008,1120)" : {
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "usage" : "M",
         "name" : "Referenced Patient Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "req" : "1",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
            "One or more items are permitted in this sequence.",
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
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Referenced Study Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "module" : "RT Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "req" : "1C",
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
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "name" : "Concept Code Sequence",
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
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0116)[<2>](300a,0118)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Wedge Position",
         "module" : "RT Beams Session Record",
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
         ]
      },
      "(3008,0030)[<0>](0008,1150)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "RT General Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0008,0090)" : {
         "desc" : "Name of the patient's referring physician",
         "module" : "General Study",
         "name" : "Referring Physician's Name",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "2",
         "entity" : "Study"
      },
      "(0008,0081)" : {
         "entity" : "Equipment",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment"
      },
      "(3008,0020)[<0>](3008,0022)" : {
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : "Fraction number for this beam administration.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Current Fraction Number"
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
         "module" : "RT Series",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Treatment Record",
         "req" : "1"
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
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0008,1049)" : {
         "name" : "Physician(s) of Record Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
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
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0008,0020)" : {
         "req" : "2",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Date the Study started.",
         "usage" : "M",
         "name" : "Study Date",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0068)[<2>](3008,0061)" : {
         "desc" : [
            "Contains the Data Element Tag of the parent sequence containing the attribute that was corrected.",
            "The value is limited in scope to the Treatment Session Beam Sequence (3008,0020) and all nested sequences therein."
         ],
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Parameter Sequence Pointer",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0116)[<2>](300c,00c0)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Referenced Wedge Number",
         "usage" : "M",
         "desc" : "Uniquely identifies wedge specified by Wedge Number (300A,00D2) within the Recorded Wedge Sequence (3008,00B0).",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "RT Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry",
         "usage" : "M",
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
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "module" : "RT Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00c0)[<1>](300a,00ee)" : {
         "desc" : [
            "Type of compensator (if any).",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            }
         ],
         "module" : "RT Beams Session Record",
         "name" : "Compensator Type",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "usage" : "M",
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
         "entity" : "Series",
         "req" : "1C"
      },
      "(0012,0040)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "U",
         "name" : "Clinical Trial Subject ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
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
         ]
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0434)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "name" : "Applicator Opening X",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : [
            "Opening (in mm) of the applicator's aperture in IEC BEAM LIMITING DEVICE coordinate system in X-Direction.",
            "Required if Applicator Aperture Shape (300A,0432) is SYM_RECTANGLE."
         ],
         "module" : "RT Beams Session Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Date"
      },
      "(3008,0020)[<0>](3008,00d0)[<1>](300a,00f5)" : {
         "module" : "RT Beams Session Record",
         "desc" : "User-supplied identifier for block tray or Electron Insert.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Block Tray ID",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0012,0063)" : {
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "A description or label of the mechanism or method use to remove the patient's identity. May be multi-valued if successive de-identification steps have been performed.",
            {
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
                                 "el" : "para",
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
                                 ]
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
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "name" : "De-identification Method",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0244)" : {
         "module" : "RT Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "usage" : "M",
         "name" : "Performed Procedure Step Start Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "req" : "3",
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(3008,0010)[<0>](3008,0016)" : {
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "U",
         "name" : "Measured Dose Value",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "module" : "Measured Dose Reference Record",
         "desc" : "Measured Dose in units specified by Dose Units (3004,0002)."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,1084)" : {
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "req" : "3"
      },
      "(0008,0031)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : "Time the Series started.",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Series Time",
         "usage" : "M"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common",
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(4ffe,0001)" : {
         "usage" : "M",
         "name" : "MAC Parameters Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,00f9)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Accessory Code",
         "usage" : "U",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "module" : "RT Series",
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
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Series",
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
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00d0)[<1>](300a,00fe)" : {
         "module" : "RT Beams Session Record",
         "desc" : "User-defined name for block.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Block Name",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](3008,0062)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Override Parameter Pointer",
         "module" : "RT Beams Session Record",
         "desc" : "Contains the Data Element Tag of the attribute that was overridden.",
         "entity" : "Treatment Record",
         "req" : "2"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1"
      },
      "(300a,0206)[<0>](0018,1000)" : {
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Machine Record",
         "desc" : "Manufacturer's serial number of the equipment used for treatment delivery.",
         "usage" : "M",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.8-54"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
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
         "module" : "RT Series",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "usage" : "M",
         "name" : "Signature",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "module" : "Patient",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,1030)" : {
         "req" : "3",
         "entity" : "Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Description",
         "usage" : "M"
      },
      "(0020,000e)" : {
         "usage" : "M",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series",
         "desc" : "Unique identifier of the series.",
         "entity" : "Series",
         "req" : "1"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "req" : "1",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0020,0011)" : {
         "entity" : "Series",
         "req" : "2",
         "usage" : "M",
         "name" : "Series Number",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series",
         "desc" : "A number that identifies this series."
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,002a)" : {
         "req" : "2",
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
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Treatment Termination Status",
         "usage" : "U"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0122)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "name" : "Patient Support Angle",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "Patient Support angle, i.e., orientation of IEC PATIENT SUPPORT (turntable) coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees). Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Patient Support Angle changes during beam administration.",
         "module" : "RT Beams Session Record"
      },
      "(3008,0020)[<0>](300c,006a)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies Patient Setup used within current beam, specified by Patient Setup Number (300A,0182) within Patient Setup Sequence (300A,0180) of RT Treatment Record.",
         "module" : "RT Beams Session Record",
         "name" : "Referenced Patient Setup Number",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "req" : "1C",
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
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "req" : "3",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature UID",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "entity" : "Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "RT Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0431)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Applicator Geometry Sequence",
         "usage" : "M",
         "desc" : [
            "Describes the applicator aperture geometry.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "usage" : "M",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Study"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "module" : "RT Series",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "entity" : "Series"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
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
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01ba)" : {
         "module" : "RT Patient Setup",
         "desc" : "User-defined description for Setup Device used for patient alignment.",
         "usage" : "U",
         "name" : "Setup Device Description",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0080)[<1>](3008,0082)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "name" : "Referenced Measured Dose Reference Number",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "Uniquely references Measured Dose Reference specified by Measured Dose Reference Number (3008,0064) in Measured Dose Reference Sequence (3008,0010). Required if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "module" : "RT Beams Session Record"
      },
      "(3008,0020)[<0>](3008,002b)" : {
         "desc" : "Treatment machine termination code. This code is dependent upon the particular application and equipment.",
         "module" : "RT Beams Session Record",
         "name" : "Treatment Termination Code",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0108)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : "User or machine supplied identifier for Applicator.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Applicator ID"
      },
      "(3008,0020)[<0>](3008,0032)" : {
         "desc" : "Desired machine setting of primary Meterset.",
         "module" : "RT Beams Session Record",
         "name" : "Specified Primary Meterset",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3002,0050)[<1>](3002,0051)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Fluence Mode",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : [
            "Describes whether the fluence shaping is the standard mode for the beam or an alternate.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference"
      },
      "(3008,0020)[<0>](3008,00a0)" : {
         "name" : "Beam Limiting Device Leaf Pairs Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence of beam limiting device (collimator) jaw or leaf (element) leaf pair values.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(3008,0020)[<0>](300c,0006)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "name" : "Referenced Beam Number",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "References Beam specified by Beam Number (300A,00C0) in Beam Sequence (300A,00B0) in RT Beams Module within referenced RT Plan.",
         "module" : "RT Beams Session Record"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "req" : "1",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(3008,0010)[<0>](3008,0014)" : {
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : [
            "Type of dose measurement.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
         "module" : "Measured Dose Reference Record",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "name" : "Measured Dose Type",
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "module" : "RT Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](300a,0402)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "desc" : "Comment on the Setup Image.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Setup Image Comment"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9185)" : {
         "module" : "RT Patient Setup",
         "desc" : "Description of respiratory motion compensation technique.",
         "usage" : "U",
         "name" : "Respiratory Motion Compensation Technique Description",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0121)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "name" : "Beam Limiting Device Rotation Direction",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : [
            "Direction of Beam Limiting Device Rotation when viewing beam limiting device (collimator) from radiation source, for segment beginning at current Control Point. Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Beam Limiting Device Rotation Direction changes during beam administration.",
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
         "module" : "RT Beams Session Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
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
         "name" : "Rational Denominator Value"
      },
      "(3008,0020)[<0>](300a,00c6)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Radiation Type",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
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
      "(3008,0020)[<0>](3008,00b0)[<1>](300a,00d2)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : "Identification number of the Wedge. The value of Wedge Number (300A,00D2) shall be unique within the wedge sequence.",
         "usage" : "M",
         "name" : "Wedge Number",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(3008,00e0)[<0>](300c,0051)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan referenced in Referenced RT Plan Sequence (300C,0002) of RT General Treatment Record Module.",
         "module" : "RT Treatment Summary Record",
         "name" : "Referenced Dose Reference Number",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0010,0030)" : {
         "entity" : "Patient",
         "req" : "2",
         "name" : "Patient's Birth Date",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : "Birth date of the patient.",
         "module" : "Patient"
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient"
      },
      "(3008,0020)[<0>](300c,0040)[<1>](0008,1155)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-57",
            "table_10-11"
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "req" : "1C",
         "entity" : "Study",
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
                  "attrs" : {
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "module" : "Clinical Trial Study",
         "name" : "Distribution Type",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](0008,1070)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Operators' Name",
         "module" : "RT Beams Session Record",
         "desc" : "Name of operator who authorized override.",
         "entity" : "Treatment Record",
         "req" : "2"
      },
      "(0100,0424)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization Comment",
         "module" : "SOP Common",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO."
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1155)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Patient Setup",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(3008,0020)[<0>](3008,00d0)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Recorded Block Sequence",
         "usage" : "M",
         "desc" : [
            "Sequence of blocks associated with current Beam.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "RT Beams Session Record"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Station Name",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0050)[<0>](300a,0016)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Dose Reference Description",
         "usage" : "U",
         "desc" : "User-defined description of Dose Reference.",
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0062,000b)" : {
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type",
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
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,014a)" : {
         "module" : "RT Beams Session Record",
         "desc" : [
            "Gantry Pitch Angle. i.e., the rotation of the IEC GANTRY coordinate system about the X-axis of the IEC GANTRY coordinate system (degrees). If used, must be present for first item of Control Point Sequence, or if used and Gantry Pitch Rotation Angle changes during Beam, must be present. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.25.6.5"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Gantry Pitch Angle",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "module" : "SOP Common",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Spatial Resolution",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "usage" : "M",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "module" : "RT Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "module" : "SOP Common",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Digital Signature Purpose Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0080)[<1>](3008,0016)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Measured Dose Value",
         "usage" : "M",
         "desc" : "Measured Dose in units specified by Dose Units (3004,0002) in sequence referenced by Measured Dose Reference Sequence (3008,0010) or Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan as defined above.",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
      "(0008,1115)" : {
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Referenced Series Sequence",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0033)" : {
         "module" : "RT Beams Session Record",
         "desc" : "Desired machine setting of secondary Meterset.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Specified Secondary Meterset",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(300a,0206)[<0>](0008,1040)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Department in the institution where the equipment is located that was used for treatment delivery.",
         "module" : "RT Treatment Machine Record",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "usage" : "M"
      },
      "(300a,0180)" : {
         "usage" : "U",
         "name" : "Patient Setup Sequence",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "desc" : [
            "Sequence of patient setup data for current plan.",
            "One or more items shall be included in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
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
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0008,1070)" : {
         "module" : "RT Series",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "usage" : "M",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "2",
         "entity" : "Series"
      },
      "(0012,0081)" : {
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Name"
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT General Treatment Record",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](300c,0040)[<1>](3008,007a)" : {
         "desc" : "Cumulative Meterset Weight within Beam referenced by Referenced Beam Number at which image acquisition ends.",
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "End Meterset",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0040,0280)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Comments on the Performed Procedure Step",
         "module" : "RT Series",
         "desc" : "User-defined comments on the Performed Procedure Step."
      },
      "(3008,0020)[<0>](3008,0080)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : [
            "Sequence of doses measured during treatment delivery for current Beam.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Referenced Measured Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(3008,0020)[<0>](300a,00c3)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Beam Description",
         "usage" : "M",
         "desc" : "User-defined description for delivered Beam.",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(3008,0020)[<0>](300c,00b0)[<1>](3006,0084)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Referenced ROI Number",
         "module" : "RT Beams Session Record",
         "desc" : "Uniquely identifies ROI representing the bolus specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in Structure Set Module within RT Structure Set IOD referenced by referenced RT Plan in Referenced RT Plan Sequence (300C,0002) in RT General Treatment Record Module.",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(3008,0020)[<0>](3008,0090)[<1>](3008,0076)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Calculated Dose Reference Dose Value",
         "usage" : "M",
         "desc" : "Calculated Dose (Gy).",
         "module" : "RT Beams Session Record"
      },
      "(3008,0020)[<0>](3008,0080)[<1>](300c,0051)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Referenced Dose Reference Number",
         "usage" : "M",
         "desc" : "Uniquely references Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan. Required if Referenced Measured Dose Reference Number (3008,0082) is not sent. It shall not be present otherwise.",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1C"
      },
      "(0008,1200)" : {
         "usage" : "U",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "entity" : "Treatment Record",
         "req" : "1C"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Retrieve URI",
         "module" : "SOP Common",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,00f9)" : {
         "module" : "RT Patient Setup",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "usage" : "U",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
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
         "module" : "SOP Common",
         "name" : "Certified Timestamp",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0008,1048)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) of Record",
         "module" : "General Study",
         "desc" : [
            "Names of the physician(s) who are responsible for overall patient care at time of Study (see ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for Performing Physician)"
         ],
         "entity" : "Study",
         "req" : "3"
      },
      "(0038,0060)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Service Episode ID",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "desc" : "The coding scheme full common name",
         "module" : "SOP Common",
         "name" : "Coding Scheme Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,00c0)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "name" : "Recorded Compensator Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence of treatment compensators associated with current Beam.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "RT Beams Session Record"
      },
      "(0008,0051)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Issuer of Accession Number Sequence",
         "module" : "General Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Study",
         "req" : "3"
      },
      "(3008,0020)[<0>](300a,0420)[<1>](300a,0422)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "General Accessory Description",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "User supplied description of General Accessory."
      },
      "(3008,0020)[<0>](3008,00d0)[<1>](300a,00f9)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader."
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0251)" : {
         "entity" : "Treatment Record",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Treatment Time",
         "usage" : "U",
         "desc" : "Time when fraction was delivered.",
         "module" : "RT Treatment Summary Record"
      },
      "(300a,00b3)" : {
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
                     "MINUTE",
                     "minute"
                  ]
               ]
            }
         ],
         "module" : "RT Beams Session Record",
         "name" : "Primary Dosimeter Unit",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,01b0)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Setup Technique",
         "module" : "RT Patient Setup",
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
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0400,0500)" : {
         "req" : "1C",
         "entity" : "Treatment Record",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Attributes Sequence",
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00b0)[<1>](300a,00f9)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader."
      },
      "(0018,1050)" : {
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "General Equipment"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0126)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Table Top Eccentric Rotation Direction",
         "module" : "RT Beams Session Record",
         "desc" : [
            "Direction of Table Top Eccentric Rotation when viewing table from above, for segment beginning at current Control Point. Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Table Top Eccentric Rotation Direction changes during beam administration.",
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
      "(3008,0220)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "name" : "Fraction Group Summary Sequence",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence describing current state of planned vs. delivered fraction groups.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "RT Treatment Summary Record"
      },
      "(0012,0050)" : {
         "req" : "2",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
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
         "usage" : "U",
         "name" : "Clinical Trial Time Point ID",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(300a,0206)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Treatment Machine Sequence",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "module" : "RT Treatment Machine Record",
         "desc" : [
            "Sequence describing treatment machine used for treatment delivery.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(3008,0020)[<0>](3008,00c0)[<1>](300c,00d0)" : {
         "name" : "Referenced Compensator Number",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies compensator specified by Compensator Number (300A,00E4) within Beam referenced by Referenced Beam Number (300C,0006).",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "RT Series",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0010,2292)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Description",
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
         "req" : "2C"
      },
      "(0040,0254)" : {
         "req" : "3",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "usage" : "M",
         "name" : "Performed Procedure Step Description",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(300a,0180)[<0>](300a,01d6)" : {
         "name" : "Table Top Lateral Setup Displacement",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "desc" : "Lateral Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., lateral offset between patient positioning performed using setup and treatment position.",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0432)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : [
            "Aperture shape of the applicator.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "usage" : "M",
         "name" : "Applicator Aperture Shape",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "req" : "1C",
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
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0192)" : {
         "req" : "1",
         "entity" : "Treatment Record",
         "desc" : [
            "Type of Fixation Device used during in Patient Setup.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Type",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Reason for the Requested Procedure",
         "module" : "RT Series",
         "desc" : "Reason for requesting this procedure.",
         "entity" : "Series",
         "req" : "3"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "entity" : "Study",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study"
      },
      "(300a,0206)[<0>](0008,0070)" : {
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : "Manufacturer of the equipment used for treatment delivery.",
         "module" : "RT Treatment Machine Record",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "usage" : "M"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,0190)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of Fixation Devices used in Patient Setup.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Fixation Device Sequence",
         "usage" : "U"
      },
      "(3008,0020)[<0>](3008,00c0)[<1>](300a,00f9)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Accessory Code",
         "module" : "RT Beams Session Record",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(3008,0020)[<0>](3002,0050)[<1>](3002,0052)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Fluence Mode ID",
         "module" : "RT Beams Session Record",
         "desc" : [
            "Identifier for the specific fluence-shaping mode.",
            "Required if Fluence Mode (3002,0051) has value NON_STANDARD."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Study Instance UID",
         "module" : "RT Series",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "entity" : "Series",
         "req" : "3"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization DateTime",
         "usage" : "M",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9186)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Respiratory Signal Source ID",
         "module" : "RT Patient Setup",
         "desc" : "Identifies the device providing the respiratory signal.",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(300a,0078)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Number of Fractions Planned",
         "module" : "RT Beams Session Record",
         "desc" : "Total number of treatments (Fractions) planned for current Fraction Group.",
         "entity" : "Treatment Record",
         "req" : "2"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0068)[<2>](3008,0065)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Parameter Pointer",
         "usage" : "M",
         "desc" : "Contains the Data Element Tag of the attribute that was corrected.",
         "module" : "RT Beams Session Record"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(3008,0020)[<0>](300a,00d0)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Number of Wedges",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "Number of wedges associated with current delivered Beam."
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common"
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
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "entity" : "Patient",
         "req" : "1",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : "An identification number or code used to identify the patient.",
         "module" : "Patient"
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300c,00f0)" : {
         "desc" : "Uniquely identifies Control Point specified by Control Point Index (300A,0112) within Beam referenced by Referenced Beam Number (300C,0006).",
         "module" : "RT Beams Session Record",
         "name" : "Referenced Control Point Index",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0068)[<2>](3008,0063)" : {
         "usage" : "M",
         "name" : "Parameter Item Index",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "Contains the sequence item index (starting at 1) of the corrected attribute within its parent sequence.",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,1021)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Size Code Sequence",
         "module" : "Patient Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(3008,0020)[<0>](3008,0040)" : {
         "module" : "RT Beams Session Record",
         "desc" : [
            "Sequence of beam control points for current treatment beam.",
            "One or more Items shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.21.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Control Point Delivery Sequence",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0070)[<0>](3008,0076)" : {
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : "Calculated Dose (Gy).",
         "module" : "Calculated Dose Reference Record",
         "name" : "Calculated Dose Reference Dose Value",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "module" : "RT Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "entity" : "Series"
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
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0012,0064)" : {
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "De-identification Method Code Sequence"
      },
      "(0008,0018)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance UID",
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
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "module" : "SOP Common"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0250)" : {
         "desc" : "Date when fraction was delivered.",
         "module" : "RT Treatment Summary Record",
         "name" : "Treatment Date",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "module" : "Patient"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "usage" : "M",
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
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "RT Series",
         "name" : "UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,0030)" : {
         "entity" : "Study",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Time",
         "module" : "General Study",
         "desc" : "Time the Study started."
      },
      "(0010,1001)" : {
         "module" : "Patient",
         "desc" : "Other names used to identify the patient.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient Names",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,0146)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Table Top Roll Rotation Direction",
         "usage" : "M",
         "desc" : [
            [
               "Direction of Table Top Roll Rotation when viewing the table along the positive Y-axis of the IEC TABLE TOP coordinate system, for segment following Control Point. If required by treatment delivery device, shall be present for first item of Control Point Sequence. If required by treatment delivery device and if Table Top Roll Rotation Direction changes during Beam, shall be present in all subsequent items of Control Point Sequence. See ",
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
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "1C"
      },
      "(3008,0020)[<0>](300a,00c4)" : {
         "req" : "1",
         "entity" : "Treatment Record",
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
         "module" : "RT Beams Session Record",
         "name" : "Beam Type",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "req" : "1C",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Series",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "usage" : "U",
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(300c,0022)" : {
         "desc" : "Identifier of Fraction Group within referenced RT Plan.",
         "module" : "RT Beams Session Record",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Referenced Fraction Group Number",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0040,1012)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Reason For Performed Procedure Code Sequence",
         "usage" : "M",
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
         "entity" : "Study",
         "req" : "3"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study"
      },
      "(3008,0020)[<0>](300a,0107)[<1>](300a,010a)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Applicator Description",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "User-defined description for Applicator."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C"
      },
      "(3008,0220)[<0>](300c,0022)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "References Fraction Group Number (300A,0071) in Fraction Group Sequence (300A,0070) in the referenced RT Plan.",
         "module" : "RT Treatment Summary Record",
         "name" : "Referenced Fraction Group Number",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U"
      },
      "(0008,0015)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "name" : "Instance Coercion DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common"
      },
      "(0008,1032)" : {
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Procedure Code Sequence"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference"
      },
      "(0020,0013)" : [
         {
            "entity" : "Treatment Record",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-53"
            ],
            "name" : "Instance Number",
            "module" : "RT General Treatment Record",
            "desc" : "Instance number identifying this particular instance of the object."
         },
         {
            "usage" : "M",
            "name" : "Instance Number",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "module" : "SOP Common",
            "desc" : "A number that identifies this Composite object instance.",
            "entity" : "Treatment Record",
            "req" : "3"
         }
      ],
      "(0008,0050)" : {
         "entity" : "Study",
         "req" : "2",
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "module" : "General Study"
      },
      "(3008,0020)[<0>](3008,0090)[<1>](300c,0051)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Dose Reference Number",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan. Required if Referenced Calculated Dose Reference Number (3008,0092) is not sent."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
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
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "M"
      },
      "(3008,0250)" : {
         "req" : "2",
         "entity" : "Treatment Record",
         "desc" : "Date when current fraction was delivered, or Date last fraction was delivered in case of RT Treatment Summary Record IOD. See Note.",
         "module" : "RT General Treatment Record",
         "name" : "Treatment Date",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "module" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "req" : "3",
         "entity" : "Patient"
      },
      "(3008,0200)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Current Treatment Status",
         "usage" : "U",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.23.1"
                  }
               },
               "."
            ]
         ],
         "module" : "RT Treatment Summary Record"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0196)" : {
         "module" : "RT Patient Setup",
         "desc" : "User-defined description of Fixation Device.",
         "usage" : "U",
         "name" : "Fixation Device Description",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0100,0426)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Authorization Equipment Certification Number",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01a0)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "name" : "Shielding Device Sequence",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "desc" : [
            "Sequence of Shielding Devices used in Patient Setup.",
            "One or more items are permitted in this sequence."
         ]
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "req" : "1"
      },
      "(3008,0020)[<0>](3008,002a)" : {
         "module" : "RT Beams Session Record",
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
         "usage" : "M",
         "name" : "Treatment Termination Status",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0018,1200)" : {
         "module" : "General Equipment",
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
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "entity" : "Equipment"
      },
      "(300a,0180)[<0>](300a,01b2)" : {
         "name" : "Setup Technique Description",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "desc" : "User-defined description of Setup Technique.",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(3008,0020)[<0>](3008,0036)" : {
         "name" : "Delivered Primary Meterset",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : "Machine setting actually delivered as recorded by primary Meterset.",
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(3008,0020)[<0>](3002,0050)" : {
         "name" : "Primary Fluence Mode Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "desc" : [
            "Sequence defining whether the primary fluence of the treatment beam used a non-standard fluence-shaping when the beam was delivered.",
            "Only a single item is permitted in this sequence."
         ],
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(3008,0020)[<0>](300a,0420)[<1>](300a,0425)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Source to General Accessory Distance",
         "module" : "RT Beams Session Record",
         "desc" : "Radiation source to general accessory distance (in mm) for current accessory.",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0060)[<2>](3008,0063)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Parameter Item Index",
         "module" : "RT Beams Session Record",
         "desc" : "Contains the sequence item index (monotonically increasing from 1) of the overridden attributes within its parent sequence. The value is limited in scope to the Treatment Session Beam Sequence (3008,0020) and all nested sequences therein.",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "module" : "Patient",
         "desc" : "Identification number of an animal within the registry.",
         "usage" : "M",
         "name" : "Breed Registration Number",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "entity" : "Patient"
      },
      "(0008,1040)" : {
         "module" : "General Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "entity" : "Equipment"
      },
      "(0040,0275)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Request Attributes Sequence",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Digital Signature DateTime",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "entity" : "Series",
         "req" : "1C",
         "name" : "Time",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "RT Series"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "usage" : "M",
         "name" : "Coding Scheme UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "entity" : "Treatment Record",
         "req" : "1C"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "entity" : "Study"
      },
      "(0010,2202)" : {
         "req" : "1C",
         "entity" : "Patient",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "name" : "Patient Species Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,00b0)[<1>](300a,00d3)" : {
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : [
            "Type of wedge defined for delivered Beam.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
         "usage" : "M",
         "name" : "Wedge Type",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "name" : "Requested Procedure Description",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure."
      },
      "(0040,a390)" : {
         "module" : "SOP Common",
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
         "usage" : "M",
         "name" : "HL7 Structured Document Reference Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](300a,0107)" : {
         "usage" : "M",
         "name" : "Applicator Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : [
            "Sequence of Applicators associated with Beam.",
            "Only a single item is permitted in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0008,1010)" : {
         "module" : "General Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "usage" : "M",
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "entity" : "Equipment"
      },
      "(3008,0020)[<0>](300a,00ed)" : {
         "desc" : "Number of boli used with current Beam.",
         "module" : "RT Beams Session Record",
         "name" : "Number of Boli",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(0008,1110)" : {
         "module" : "General Study",
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
         "usage" : "M",
         "name" : "Referenced Study Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operators' Name",
         "module" : "SOP Common",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(3008,0020)[<0>](3008,00b0)[<1>](300a,00d5)" : {
         "desc" : "Nominal wedge angle delivered (degrees).",
         "module" : "RT Beams Session Record",
         "name" : "Wedge Angle",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0010)[<0>](300c,0051)" : {
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "Measured Dose Reference Record",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan. Required only if Measured Dose Reference Number (3008,0064) is not sent. It shall not be present otherwise.",
         "usage" : "U",
         "name" : "Referenced Dose Reference Number",
         "mod_tables" : [
            "table_C.8-55"
         ]
      },
      "(0010,2298)" : {
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Person Role",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(3008,0020)[<0>](300a,0420)[<1>](300a,0423)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "General Accessory Type",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
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
         ]
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0044)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Delivered Meterset",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : [
            "Machine setting actually delivered at current control point. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.21.2"
               }
            },
            "."
         ]
      },
      "(0012,0062)" : {
         "name" : "Patient Identity Removed",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
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
         ],
         "module" : "SOP Common",
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0198)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Position/Notch number of Fixation Device.",
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Position",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0068)[<2>](3008,006a)" : {
         "desc" : "The value applied to the attribute that was referenced by the Parameter Sequence Pointer (3008,0061), Parameter Item Index (3008,0063) and Parameter Pointer (3008,0065).",
         "module" : "RT Beams Session Record",
         "name" : "Correction Value",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(3008,0050)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "desc" : [
            "Sequence of references to Calculated Dose References.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "U",
         "name" : "Treatment Summary Calculated Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a8)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Position/Notch number of Shielding Device.",
         "module" : "RT Patient Setup",
         "name" : "Shielding Device Position",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(3008,0020)[<0>](3008,002c)" : {
         "module" : "RT Beams Session Record",
         "desc" : [
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
                     "treatment verified manually"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "usage" : "M",
         "name" : "Treatment Verification Status",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,011a)[<2>](300a,00b8)" : {
         "module" : "RT Beams Session Record",
         "desc" : [
            "Type of beam limiting device. The value of this attribute shall correspond to RT Beam Limiting Device Type (300A,00B8) defined in an element of Beam Limiting Device Leaf Pairs Sequence (3008,00A0).",
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
         "usage" : "M",
         "name" : "RT Beam Limiting Device Type",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(300a,0206)[<0>](0008,0080)" : {
         "entity" : "Treatment Record",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "name" : "Institution Name",
         "usage" : "M",
         "desc" : "Institution where the equipment is located that was used for treatment delivery.",
         "module" : "RT Treatment Machine Record"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,011e)" : {
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : "Treatment machine gantry angle, i.e., orientation of IEC GANTRY coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees). Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if Gantry Angle changes during beam administration.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Gantry Angle"
      },
      "(0008,103f)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Series Description Code Sequence",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "RT Series"
      },
      "(0010,1002)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Other Patient IDs Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(3008,0220)[<0>](3008,0240)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "name" : "Fraction Status Summary Sequence",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "module" : "RT Treatment Summary Record",
         "desc" : [
            "Sequence describing status of fractions in Fraction Group.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
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
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0032,1034)" : {
         "module" : "General Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Requesting Service Code Sequence",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Study containing the referenced Instances."
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Modified Attributes Sequence",
         "usage" : "M",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,00f9)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Accessory Code",
         "module" : "RT Patient Setup",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Software Versions",
         "usage" : "M",
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
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,011f)" : {
         "module" : "RT Beams Session Record",
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
         ],
         "usage" : "M",
         "name" : "Gantry Rotation Direction",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(0012,0010)" : {
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
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Sponsor Name",
         "usage" : "U",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0012,0051)" : {
         "req" : "3",
         "entity" : "Study",
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
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Time Point Description",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1"
      },
      "(300a,0180)[<0>](0018,5100)" : {
         "req" : "1C",
         "entity" : "Treatment Record",
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
         "module" : "RT Patient Setup",
         "name" : "Patient Position",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(0008,1060)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Name of Physician(s) Reading Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : "Names of the physician(s) reading the Study."
      },
      "(3008,0020)[<0>](300a,0420)[<1>](300a,00f9)" : {
         "req" : "3",
         "entity" : "Treatment Record",
         "desc" : "Machine-readable identifier for this accessory",
         "module" : "RT Beams Session Record",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](3008,0042)" : {
         "mod_tables" : [
            "table_C.8-57"
         ],
         "name" : "Specified Meterset",
         "usage" : "M",
         "desc" : [
            "Desired machine setting for current control point. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.21.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "RT Beams Session Record",
         "entity" : "Treatment Record",
         "req" : "2"
      },
      "(300c,0002)" : {
         "name" : "Referenced RT Plan Sequence",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "usage" : "M",
         "desc" : [
            "Reference to a RT Plan.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "module" : "RT General Treatment Record",
         "entity" : "Treatment Record",
         "req" : "2"
      },
      "(0012,0071)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series ID",
         "usage" : "U",
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "req" : "3"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "req" : "3",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(3008,0020)[<0>](3008,0040)[<1>](300a,011a)" : {
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "RT Beams Session Record",
         "desc" : [
            "Sequence of beam limiting device (collimator) jaw or leaf (element) positions.",
            "One or more Items shall be included in this sequence.",
            "Required for Control Point 0 of Control Point Delivery Sequence (3008,0040) or if beam limiting device (collimator) changes during beam administration."
         ],
         "usage" : "M",
         "name" : "Beam Limiting Device Position Sequence",
         "mod_tables" : [
            "table_C.8-57"
         ]
      },
      "(0008,103e)" : {
         "req" : "3",
         "entity" : "Series",
         "desc" : "Description of the series.",
         "module" : "RT Series",
         "name" : "Series Description",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)" : {
         "usage" : "M",
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "entity" : "Treatment Record",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "name" : "Reason for the Attribute Modification",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         "module" : "SOP Common"
      },
      "(3008,0220)[<0>](3008,005a)" : {
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Number of Fractions Delivered",
         "module" : "RT Treatment Summary Record",
         "desc" : "Number of fractions delivered as of Treatment Summary Report."
      },
      "(3008,0020)[<0>](300a,0110)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Number of Control Points",
         "mod_tables" : [
            "table_C.8-57"
         ],
         "module" : "RT Beams Session Record",
         "desc" : "Number of control points delivered."
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common",
         "name" : "Source of Previous Values",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record"
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