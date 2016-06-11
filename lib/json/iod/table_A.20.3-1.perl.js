var data = {
   "tags" : {
      "(0038,0010)" : {
         "entity" : "Study",
         "name" : "Admission ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "req" : "3"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,0292)" : {
         "name" : "Source Applicator Type",
         "entity" : "Plan",
         "req" : "1C",
         "desc" : [
            "Type of Source Applicator. Required if Source Applicator Number (300A,0290) is sent.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "FLEXIBLE",
                     null
                  ],
                  [
                     "RIGID",
                     null
                  ]
               ]
            }
         ],
         "module" : "RT Brachy Application Setups",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "name" : "Time"
      },
      "(0008,1048)" : {
         "name" : "Physician(s) of Record",
         "entity" : "Study",
         "module" : "General Study",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,1001)" : {
         "entity" : "Patient",
         "name" : "Other Patient Names",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "desc" : "Other names used to identify the patient."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1160)" : {
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "usage" : "U",
         "name" : "Referenced Frame Number",
         "entity" : "Plan"
      },
      "(300a,0040)[<0>](300a,0042)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-47"
         ],
         "req" : "1",
         "desc" : "Identification number of the Tolerance Table. The value of Tolerance Table Number (300A,0042) shall be unique within the RT Plan in which it is created.",
         "module" : "RT Tolerance Tables",
         "entity" : "Plan",
         "name" : "Tolerance Table Number"
      },
      "(300a,00b0)[<0>](300a,0420)[<1>](300a,00f9)" : {
         "entity" : "Plan",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "Machine-readable identifier for this accessory"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "module" : "General Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Study"
      },
      "(300a,00b0)[<0>](300a,00f2)" : {
         "name" : "Total Block Tray Factor",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "Total block tray transmission for all block trays (between 0 and 1) at the beam energy specified by the Nominal Beam Energy (300A,0114) of the first Control Point of the Control Point Sequence (300A,0111).",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(0400,0500)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Encrypted Attributes Sequence"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "name" : "Breed Registry Code Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient",
         "req" : "3",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Series",
         "module" : "RT Series",
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02d0)[<2>](300c,0055)[<3>](300c,0051)" : {
         "module" : "RT Brachy Application Setups",
         "req" : "1",
         "desc" : "Uniquely identifies Dose Reference described in Dose Reference Sequence. (300A,0010) within RT Prescription Module of current RT Plan.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "name" : "Referenced Dose Reference Number",
         "entity" : "Plan"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Plan"
      },
      "(0010,2292)" : {
         "name" : "Patient Breed Description",
         "entity" : "Patient",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02b0)[<2>](300a,02b2)" : {
         "entity" : "Plan",
         "name" : "Channel Shield Number",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "req" : "1",
         "desc" : "Identification number of the Channel Shield. The value of Channel Shield Number (300A,02B2) shall be unique within the Channel in which it is created.",
         "module" : "RT Brachy Application Setups"
      },
      "(300a,00b0)" : {
         "module" : "RT Beams",
         "desc" : [
            "Sequence of treatment beams for current RT Plan.",
            "One or more items shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Beam Sequence",
         "entity" : "Plan"
      },
      "(0012,0031)" : {
         "module" : "Clinical Trial Subject",
         "desc" : [
            "Name of the site responsible for submitting clinical trial data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "req" : "2",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site Name",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "name" : "Referenced SOP Sequence"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Spatial Resolution",
         "entity" : "Plan"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1",
         "entity" : "Plan",
         "name" : "Any Attribute from the main data set that was modified or removed."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "entity" : "Plan",
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U"
      },
      "(300a,0070)[<0>](300c,0004)" : {
         "name" : "Referenced Beam Sequence",
         "entity" : "Plan",
         "req" : "1C",
         "desc" : [
            "Sequence of treatment beams in current Fraction Group.",
            "One or more items shall be included in this sequence.",
            "Required if Number of Beams (300A,0080) is greater than zero."
         ],
         "module" : "RT Fraction Scheme",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0144)" : {
         "module" : "RT Beams",
         "desc" : [
            "Table Top Roll Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the IEC Y-axis of the IEC TABLE TOP coordinate system (degrees). If required by treatment delivery device, shall be present for first item of Control Point Sequence. If required by treatment delivery device and if Table Top Roll Angle changes during Beam, shall be present in all subsequent items of Control Point Sequence. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.12",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Table Top Roll Angle",
         "entity" : "Plan"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "entity" : "Plan",
         "module" : "SOP Common",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Coding Scheme Registry"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02c8)" : {
         "module" : "RT Brachy Application Setups",
         "req" : "1C",
         "desc" : [
            "Value of Cumulative Time Weight (300A,02D6) for final Control Point in Brachy Control Point Sequence (300A,02D0). Required if Cumulative Time Weight (300A,02D6) is non-null in Control Points specified within Brachy Control Point Sequence (300A,02D0). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.15.6",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "name" : "Final Cumulative Time Weight",
         "entity" : "Plan"
      },
      "(300a,0070)[<0>](300c,0080)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Plan",
         "module" : "RT Fraction Scheme",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49",
            "table_10-11"
         ]
      },
      "(0010,2180)" : {
         "req" : "3",
         "desc" : "Occupation of the Patient.",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Occupation",
         "entity" : "Study"
      },
      "(300a,0210)[<0>](300a,0216)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "desc" : "Manufacturer of Source.",
         "req" : "3",
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Source Manufacturer"
      },
      "(300c,0002)[<0>](300a,0055)" : {
         "desc" : [
            "Relationship of referenced plan with respect to current plan.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
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
               ]
            }
         ],
         "req" : "1",
         "module" : "RT General Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "name" : "RT Plan Relationship",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300c,0050)" : {
         "name" : "Referenced Dose Reference Sequence",
         "entity" : "Plan",
         "desc" : "Introduces a sequence of Dose References for current Beam. One or more items are permitted in this sequence.",
         "req" : "3",
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0126)" : {
         "name" : "Table Top Eccentric Rotation Direction",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "1C",
         "desc" : [
            [
               "Direction of Table Top Eccentric Rotation when viewing table from above, for segment following Control Point. Required for first item of Control Point Sequence, or if Table Top Eccentric Rotation Direction changes during Beam. See ",
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
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,00f9)" : {
         "entity" : "Plan",
         "name" : "Accessory Code",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "req" : "3",
         "module" : "RT Patient Setup"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0116)" : {
         "name" : "Wedge Position Sequence",
         "entity" : "Plan",
         "module" : "RT Beams",
         "desc" : [
            "A Sequence of Items describing Wedge Positions for the current control point.",
            [
               "Required for first item of Control Point Sequence if Number of Wedges (300A,00D0) is non-zero, and in subsequent control points if Wedge Position (300A,0118) changes during Beam. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.5"
                  }
               },
               "."
            ],
            "The number of items in this sequence shall equal the value of Number of Wedges (300A,00D0)."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID",
         "entity" : "Series"
      },
      "(0012,0063)" : {
         "entity" : "Patient",
         "name" : "De-identification Method",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
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
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ]
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,008c)[<2>](300a,0134)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "module" : "RT Fraction Scheme",
         "req" : "1",
         "desc" : "The cumulative Meterset weight value, at which the beam dose point geometrical parameters apply.",
         "entity" : "Plan",
         "name" : "Cumulative Meterset Weight"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "req" : "2C",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Coding Scheme External ID",
         "entity" : "Plan"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Code Sequence"
      },
      "(0018,1200)" : {
         "name" : "Date of Last Calibration",
         "entity" : "Equipment",
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
         "module" : "General Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime",
         "entity" : "Series"
      },
      "(0010,0040)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
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
         "req" : "2",
         "entity" : "Patient",
         "name" : "Patient's Sex"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "name" : "Numeric Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
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
         "req" : "1"
      },
      "(0010,2201)" : {
         "name" : "Patient Species Description",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1C",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0134)" : {
         "name" : "Cumulative Meterset Weight",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "2",
         "desc" : [
            "Cumulative weight to current control point. Cumulative Meterset Weight for the first item in Control Point Sequence shall always be zero. Cumulative Meterset Weight for the final item in Control Point Sequence shall always be equal to Final Cumulative Meterset Weight. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers"
      },
      "(300a,0070)[<0>](300a,0079)" : {
         "module" : "RT Fraction Scheme",
         "req" : "3",
         "desc" : "Number of digits in Fraction Pattern (300A,007B) used to represent one day. See Note 2.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Number of Fraction Pattern Digits Per Day",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,014c)" : {
         "entity" : "Plan",
         "name" : "Gantry Pitch Rotation Direction",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
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
         "req" : "3",
         "module" : "RT Beams"
      },
      "(0010,1002)[<0>](0010,0022)" : {
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
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Type of Patient ID"
      },
      "(300a,0210)[<0>](300a,0229)" : {
         "name" : "Source Strength Units",
         "entity" : "Plan",
         "desc" : [
            "Measurement unit of Source Strength.",
            "Required if the source is not a gamma-emitting (photon) source. May be present otherwise.",
            {
               "list" : [
                  [
                     "AIR_KERMA_RATE",
                     "Air Kerma Rate if Source is Gamma emitting Isotope."
                  ],
                  [
                     "DOSE_RATE_WATER",
                     "Dose Rate in Water if Source is Beta emitting Isotope."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1C",
         "module" : "RT Brachy Application Setups",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ]
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0025)" : {
         "entity" : "Plan",
         "name" : "Target Minimum Dose",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Minimum permitted dose (in Gy) to Dose Reference if Dose Reference Type (300A,0020) of referenced Dose Reference is TARGET.",
         "module" : "RT Fraction Scheme"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02a0)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "module" : "RT Brachy Application Setups",
         "req" : "1C",
         "desc" : "Distance of path along channel (in mm) between adjacent (potential) dwell positions. Required if Source Movement Type (300A,0288) is STEPWISE.",
         "entity" : "Plan",
         "name" : "Source Applicator Step Size"
      },
      "(0012,0051)" : {
         "entity" : "Study",
         "name" : "Clinical Trial Time Point Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "req" : "3",
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0012,0060)" : {
         "module" : "Clinical Trial Series",
         "desc" : [
            "The name of the institution that is responsible for coordinating the medical imaging data for the clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Coordinating Center Name",
         "entity" : "Series"
      },
      "(0018,a001)" : {
         "module" : "SOP Common",
         "req" : "3",
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
         "usage" : "M",
         "name" : "Contributing Equipment Sequence",
         "entity" : "Plan"
      },
      "(300a,0010)" : {
         "entity" : "Plan",
         "name" : "Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U",
         "desc" : [
            "Sequence of Dose References.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "RT Prescription"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "name" : "Person Name",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00e4)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "1C",
         "desc" : "Identification number of the Compensator. The value of Compensator Number (300A,00E4) shall be unique within the Beam in which it is created. Required if Number of Compensators (300A,00E0) is non-zero.",
         "entity" : "Plan",
         "name" : "Compensator Number"
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(300a,00b0)[<0>](300c,00b0)[<1>](300a,00dc)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "desc" : "User-supplied identifier for the Bolus.",
         "req" : "3",
         "entity" : "Plan",
         "name" : "Bolus ID"
      },
      "(0010,1030)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Weight of the Patient, in kilograms.",
         "entity" : "Study",
         "name" : "Patient's Weight"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0129)" : {
         "name" : "Table Top Longitudinal Position",
         "entity" : "Plan",
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
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Plan"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
         "entity" : "Plan",
         "name" : "Encrypted Content"
      },
      "(300c,0002)" : {
         "entity" : "Plan",
         "name" : "Referenced RT Plan Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "desc" : [
            "Related instances of RT Plan.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "RT General Plan"
      },
      "(0040,0275)" : {
         "module" : "RT Series",
         "req" : "3",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M",
         "name" : "Request Attributes Sequence",
         "entity" : "Series"
      },
      "(300a,00b0)[<0>](300a,00ca)[<1>](3002,000e)" : {
         "entity" : "Plan",
         "name" : "X-Ray Image Receptor Angle",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "req" : "3",
         "desc" : [
            "X-Ray Image Receptor Angle i.e., orientation of IEC X-RAY IMAGE RECEPTOR coordinate system with respect to IEC GANTRY coordinate system (degrees). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "RT Beams"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,012e)" : {
         "entity" : "Plan",
         "name" : "Surface Entry Point",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "desc" : [
            "Patient surface entry point coordinates (x,y,z) in the patient based coordinate system described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               },
               "el" : "xref"
            },
            " (mm)."
         ],
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "name" : "Digital Signature UID",
         "entity" : "Plan",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(300a,0210)[<0>](3008,0105)" : {
         "req" : "3",
         "desc" : "Identifier for the Source Instance. Identifies the actual source instance of the source, to which Source Strength Reference Date (300A,022C) and Source Strength Reference Time (300A,022E) refer.",
         "module" : "RT Brachy Application Setups",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "name" : "Source Serial Number",
         "entity" : "Plan"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "module" : "General Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "entity" : "Study"
      },
      "(300a,000b)" : {
         "req" : "3",
         "desc" : "Planned treatment sites.",
         "module" : "RT General Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "name" : "Treatment Sites",
         "entity" : "Plan"
      },
      "(300a,0040)[<0>](300a,004f)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-47"
         ],
         "module" : "RT Tolerance Tables",
         "desc" : "Maximum permitted difference (in degrees) between the planned and delivered Table Top Pitch Angle.",
         "req" : "3",
         "entity" : "Plan",
         "name" : "Table Top Pitch Angle Tolerance"
      },
      "(0012,0040)" : {
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
         "entity" : "Patient",
         "name" : "Clinical Trial Subject ID"
      },
      "(0008,0070)" : {
         "name" : "Manufacturer",
         "entity" : "Equipment",
         "req" : "2",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "module" : "RT Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
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
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(300a,00b0)[<0>](300a,0420)[<1>](300a,0425)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "desc" : "Radiation source to general accessory distance (in mm) for current accessory.",
         "req" : "3",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Source to General Accessory Distance"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Plan"
      },
      "(300a,0210)[<0>](300a,022b)" : {
         "name" : "Source Strength",
         "entity" : "Plan",
         "req" : "1C",
         "desc" : [
            "Source Strength of Isotope at Source Strength Reference Date (300A,022C) and Source Strength Reference Time (300A,022E), in units specified in Source Strength Units (300A,0229).",
            [
               "Required if the source is not a gamma-emitting (photon) source. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.15.13",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "RT Brachy Application Setups",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ]
      },
      "(0012,0010)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Sponsor Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
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
         "req" : "1"
      },
      "(300a,0210)[<0>](300a,00e1)" : {
         "name" : "Material ID",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "User-supplied identifier for encapsulation material of active Source.",
         "module" : "RT Brachy Application Setups",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ]
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,028a)" : {
         "entity" : "Plan",
         "name" : "Number of Pulses",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "desc" : "Number of Pulses per fraction for current Channel. Required if Brachy Treatment Type (300A,0202) is PDR.",
         "req" : "1C",
         "module" : "RT Brachy Application Setups"
      },
      "(300a,0180)[<0>](0018,5100)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : [
            "Patient position descriptor relative to the equipment. Required if Patient Additional Position (300A,0184) is not present. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.12.1.2"
               }
            },
            " for Defined Terms and further explanation."
         ],
         "req" : "1C",
         "module" : "RT Patient Setup",
         "entity" : "Plan",
         "name" : "Patient Position"
      },
      "(300a,0040)[<0>](300a,0046)" : {
         "mod_tables" : [
            "table_C.8-47"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Maximum permitted difference (in degrees) between planned and delivered Beam Limiting Device Angle.",
         "module" : "RT Tolerance Tables",
         "entity" : "Plan",
         "name" : "Beam Limiting Device Angle Tolerance"
      },
      "(0008,0012)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Instance Creation Date"
      },
      "(300a,0040)[<0>](300a,004e)" : {
         "module" : "RT Tolerance Tables",
         "req" : "3",
         "desc" : "Maximum permitted difference (in degrees) between planned and delivered Table Top Eccentric Angle.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-47"
         ],
         "name" : "Table Top Eccentric Angle Tolerance",
         "entity" : "Plan"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         "entity" : "Plan",
         "name" : "Date of Last Calibration"
      },
      "(300a,0040)[<0>](300a,0043)" : {
         "entity" : "Plan",
         "name" : "Tolerance Table Label",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-47"
         ],
         "module" : "RT Tolerance Tables",
         "req" : "3",
         "desc" : "User-defined label for Tolerance Table."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(300a,0070)[<0>](300c,0080)" : {
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : [
            "Related instances of RT Dose (for grids, isodose curves and named/unnamed point doses).",
            "One or more items are permitted in this sequence.",
            "See Note 1."
         ],
         "module" : "RT Fraction Scheme",
         "entity" : "Plan",
         "name" : "Referenced Dose Sequence"
      },
      "(300a,00b0)[<0>](300a,00e2)" : {
         "entity" : "Plan",
         "name" : "Total Compensator Tray Factor",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "Compensator Tray transmission factor (between 0 and 1), at the beam energy specified by the Nominal Beam Energy (300A,0114) of the first Control Point of the Control Point Sequence (300A,0111)."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "name" : "Coding Scheme Name",
         "entity" : "Plan",
         "desc" : "The coding scheme full common name",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0062)" : {
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
         ],
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Identity Removed",
         "entity" : "Patient"
      },
      "(300a,0206)[<0>](0008,1040)" : {
         "entity" : "Plan",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "desc" : "Department in the institution where the equipment is located that is to be used for treatment delivery.",
         "req" : "3",
         "module" : "RT Brachy Application Setups"
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00e1)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "2C",
         "desc" : "User-supplied identifier for material used to manufacture Compensator. Required if Number of Compensators (300A,00E0) is non-zero.",
         "entity" : "Plan",
         "name" : "Material ID"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0116)[<2>](300c,00c0)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "1",
         "desc" : "Uniquely references Wedge described by Wedge Number (300A,00D2) in Wedge Sequence (300A,00D1).",
         "entity" : "Plan",
         "name" : "Referenced Wedge Number"
      },
      "(300a,00b0)[<0>](300a,00ed)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "req" : "1",
         "desc" : "Number of boli associated with current Beam.",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Number of Boli"
      },
      "(0008,1084)" : {
         "entity" : "Study",
         "name" : "Admitting Diagnoses Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient Study"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "entity" : "Plan",
         "name" : "Operators' Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "module" : "SOP Common"
      },
      "(300a,00b0)[<0>](300a,00b6)[<1>](300a,00b8)" : {
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
         "req" : "1",
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "RT Beam Limiting Device Type",
         "entity" : "Plan"
      },
      "(300a,0210)[<0>](300a,022a)" : {
         "entity" : "Plan",
         "name" : "Reference Air Kerma Rate",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "module" : "RT Brachy Application Setups",
         "desc" : [
            "Air Kerma Rate in air of Isotope specified at Source Strength Reference Date (300A,022C) and Source Strength Reference Time (300A,022E) (in \u00b5Gy h",
            {
               "el" : "superscript",
               "content" : [
                  "-1"
               ]
            },
            " at 1 m). Value shall be zero for non-gamma sources."
         ],
         "req" : "1"
      },
      "(300a,00b0)[<0>](300a,00ce)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "desc" : [
            "Delivery Type of treatment.",
            {
               "list" : [
                  [
                     "TREATMENT",
                     "normal patient treatment"
                  ],
                  [
                     "OPEN_PORTFILM",
                     "portal image acquisition with open field"
                  ],
                  [
                     "TRMT_PORTFILM",
                     "portal image acquisition with treatment port"
                  ],
                  [
                     "CONTINUATION",
                     "continuation of interrupted treatment"
                  ],
                  [
                     "SETUP",
                     "no treatment beam is applied for this RT Beam. To be used for specifying the gantry, couch, and other machine positions where X-Ray set-up images or measurements are to be taken"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "req" : "3",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Treatment Delivery Type"
      },
      "(300a,0230)[<0>](300a,0238)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "desc" : "Manufacturer of Application Setup.",
         "req" : "3",
         "entity" : "Plan",
         "name" : "Application Setup Manufacturer"
      },
      "(300a,0210)[<0>](300a,0214)" : {
         "module" : "RT Brachy Application Setups",
         "desc" : [
            "Type of Source.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "POINT",
                     null
                  ],
                  [
                     "LINE",
                     null
                  ],
                  [
                     "CYLINDER",
                     null
                  ],
                  [
                     "SPHERE",
                     null
                  ]
               ]
            }
         ],
         "req" : "1",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Source Type",
         "entity" : "Plan"
      },
      "(0010,4000)" : {
         "entity" : "Patient",
         "name" : "Patient Comments",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "desc" : "User-defined additional information about the patient."
      },
      "(300a,00b0)[<0>](300a,00ca)[<1>](3002,0026)" : {
         "entity" : "Plan",
         "name" : "RT Image SID",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "req" : "3",
         "desc" : "Radiation machine source to image plane distance (mm).",
         "module" : "RT Beams"
      },
      "(300a,0004)" : {
         "mod_tables" : [
            "table_C.8-45"
         ],
         "usage" : "M",
         "module" : "RT General Plan",
         "desc" : "User-defined description of treatment plan.",
         "req" : "3",
         "entity" : "Plan",
         "name" : "RT Plan Description"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Study Instance UID"
      },
      "(300a,000e)" : {
         "name" : "Prescription Description",
         "entity" : "Plan",
         "module" : "RT Prescription",
         "desc" : "User-defined description of treatment prescription.",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(300a,00b0)[<0>](300a,0107)[<1>](300a,0436)" : {
         "name" : " Source to Applicator Mounting Position Distance",
         "entity" : "Plan",
         "desc" : "Radiation source to applicator mounting position distance (in mm) for current applicator.",
         "req" : "3",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,02e2)" : {
         "entity" : "Plan",
         "name" : "Source to Compensator Distance",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "1C",
         "desc" : [
            "A data stream of the pixel samples that comprise the distance from the radiation source to the compensator surface closest to the radiation source (in mm). The order of pixels sent is left to right, top to bottom (upper left pixel, followed by the remainder of row 1, followed by the remainder of the columns). Required if Material ID (300A,00E1) is non-zero length, and Compensator Mounting Position (300A,02E1) is DOUBLE_SIDED. May be present if Material ID (300A,00E1) is zero length and Compensator Mounting Position (300A,02E1) is DOUBLE_SIDED. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.9"
               },
               "el" : "xref"
            },
            " and ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.11",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ]
      },
      "(0012,0042)" : {
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject Reading ID",
         "entity" : "Patient"
      },
      "(300a,00b0)[<0>](300a,0107)[<1>](300a,0109)" : {
         "name" : "Applicator Type",
         "entity" : "Plan",
         "desc" : [
            "Type of Applicator.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
            }
         ],
         "req" : "1",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(0040,1012)" : {
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
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Reason For Performed Procedure Code Sequence",
         "entity" : "Study"
      },
      "(0008,1062)" : {
         "entity" : "Study",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present."
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0146)" : {
         "entity" : "Plan",
         "name" : "Table Top Roll Rotation Direction",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
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
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.12",
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
         "req" : "1C",
         "module" : "RT Beams"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "entity" : "Plan",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(300a,00b0)[<0>](300a,00c7)" : {
         "module" : "RT Beams",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            "Required if treatment technique requires a dose that would normally require overriding of treatment machine safety controls."
         ],
         "req" : "1C",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "High-Dose Technique Type",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300c,0050)[<2>](300a,010c)" : {
         "name" : "Cumulative Dose Reference Coefficient",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "2",
         "desc" : [
            "Coefficient used to calculate cumulative dose contribution from this Beam to the referenced Dose Reference at the current Control Point. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.7",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "Series",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ]
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3",
         "desc" : "Person's mailing address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "entity" : "Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "module" : "RT Series"
      },
      "(0018,1050)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Spatial Resolution"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "entity" : "Series",
         "name" : "Requested Procedure Description",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure."
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
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Specific Character Set",
         "entity" : "Plan"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "entity" : "Plan",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Attribute Modification DateTime"
      },
      "(300a,0010)[<0>](300a,0020)" : {
         "req" : "1",
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
         "module" : "RT Prescription",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "name" : "Dose Reference Type",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00e5)" : {
         "entity" : "Plan",
         "name" : "Compensator ID",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "req" : "3",
         "desc" : "User-supplied identifier for compensator.",
         "module" : "RT Beams"
      },
      "(300a,00b0)[<0>](300c,00b0)[<1>](300a,00dd)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "User-defined description for the Bolus.",
         "entity" : "Plan",
         "name" : "Bolus Description"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9185)" : {
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : "Description of respiratory motion compensation technique.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Respiratory Motion Compensation Technique Description",
         "entity" : "Plan"
      },
      "(300a,0202)" : {
         "name" : "Brachy Treatment Type",
         "entity" : "Plan",
         "desc" : [
            "Type of brachytherapy treatment.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "MANUAL",
                     "manually positioned"
                  ],
                  [
                     "HDR",
                     "High dose rate"
                  ],
                  [
                     "MDR",
                     "Medium dose rate"
                  ],
                  [
                     "LDR",
                     "Low dose rate"
                  ],
                  [
                     "PDR",
                     "Pulsed dose rate"
                  ]
               ]
            }
         ],
         "req" : "1",
         "module" : "RT Brachy Application Setups",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise."
      },
      "(0008,0096)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "name" : "Referring Physician Identification Sequence"
      },
      "(300a,0230)[<0>](300a,0250)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "desc" : "Total Reference Air Kerma for current Application Setup, i.e., the product of Air Kerma Rate of all Sources in all Channels with their respective Channel Times (\u00b5Gy at 1 m). Value shall be zero for non-gamma sources.",
         "req" : "1",
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Total Reference Air Kerma"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a6)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : "User-defined description of Shielding Device.",
         "entity" : "Plan",
         "name" : "Shielding Device Description"
      },
      "(300a,00b0)[<0>](300c,0042)[<1>](0008,1155)" : {
         "entity" : "Plan",
         "name" : "Referenced SOP Instance UID",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50",
            "table_10-11"
         ],
         "module" : "RT Beams",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(300a,00b0)[<0>](300a,0107)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "3",
         "desc" : [
            "Sequence of Applicators associated with Beam.",
            "Only a single item is permitted in this sequence."
         ],
         "entity" : "Plan",
         "name" : "Applicator Sequence"
      },
      "(300a,0230)[<0>](300c,0042)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "desc" : [
            "Sequence of reference images used for validation of current Application Setup.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Referenced Reference Image Sequence"
      },
      "(300a,0040)[<0>](300a,0044)" : {
         "mod_tables" : [
            "table_C.8-47"
         ],
         "usage" : "U",
         "module" : "RT Tolerance Tables",
         "req" : "3",
         "desc" : "Maximum permitted difference (in degrees) between planned and delivered Gantry Angle.",
         "entity" : "Plan",
         "name" : "Gantry Angle Tolerance"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,0282)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "desc" : "Identification number of the Channel. The value of Channel Number (300A,0282) shall be unique within the Application Setup in which it is created.",
         "req" : "1",
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Channel Number"
      },
      "(0020,000d)" : {
         "name" : "Study Instance UID",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Unique identifier for the Study.",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Plan",
         "name" : "Certificate of Signer",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
                  },
                  "el" : "olink"
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
                                 ]
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
         "module" : "SOP Common"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,0288)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "req" : "1",
         "desc" : [
            [
               "Type of Source movement. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.15.4"
                  }
               },
               "."
            ],
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "STEPWISE",
                     null
                  ],
                  [
                     "FIXED",
                     null
                  ],
                  [
                     "OSCILLATING",
                     null
                  ],
                  [
                     "UNIDIRECTIONAL",
                     null
                  ]
               ]
            }
         ],
         "entity" : "Plan",
         "name" : "Source Movement Type"
      },
      "(300c,0060)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT General Plan",
         "entity" : "Plan",
         "name" : "Referenced SOP Instance UID"
      },
      "(0020,0010)" : {
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study ID",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "entity" : "Series",
         "req" : "1C",
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
         "usage" : "M"
      },
      "(0040,a390)" : {
         "name" : "HL7 Structured Document Reference Sequence",
         "entity" : "Plan",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(300a,00b0)[<0>](300c,0080)[<1>](0008,1150)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50",
            "table_10-11"
         ],
         "module" : "RT Beams",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Plan",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "HL7 Instance Identifier",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Rational Numerator Value"
      },
      "(300a,00b0)[<0>](300a,00ca)[<1>](300c,0009)" : {
         "name" : "End Cumulative Meterset Weight",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "Cumulative Meterset Weight within current Beam at which image acquisition will end.",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "module" : "SOP Common",
         "desc" : [
            "The algorithm used in generating the MAC to be encrypted to form the Digital Signature.",
            {
               "title" : "Defined Terms:",
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
               ]
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
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC Algorithm",
         "entity" : "Plan"
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "entity" : "Plan",
         "name" : "Time of Last Calibration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "module" : "SOP Common",
         "desc" : [
            "A list of Data Element Tags in the order they appear in the Data Set that identify the Data Elements used in creating the MAC for the Digital Signature. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.1"
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
         "name" : "Data Elements Signed",
         "entity" : "Plan"
      },
      "(300a,0230)[<0>](300a,0280)" : {
         "name" : "Channel Sequence",
         "entity" : "Plan",
         "module" : "RT Brachy Application Setups",
         "req" : "1",
         "desc" : [
            "Sequence of Channels for current Application Setup.",
            "One or more items shall be included in this sequence."
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ]
      },
      "(300a,0230)[<0>](300c,0042)[<1>](0008,1155)" : {
         "entity" : "Plan",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-51",
            "table_10-11"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Brachy Application Setups"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300c,0080)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50",
            "table_10-11"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "name" : "Coding Scheme Version",
         "entity" : "Plan",
         "module" : "SOP Common",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(300a,0070)[<0>](300c,000a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "module" : "RT Fraction Scheme",
         "req" : "1C",
         "desc" : "Sequence of treatment Brachy Application Setups in current Fraction Group. Required if Number of Brachy Application Setups (300A,00A0) is greater than zero. One or more items shall be included in this sequence.",
         "entity" : "Plan",
         "name" : "Referenced Brachy Application Setup Sequence"
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00e6)" : {
         "name" : "Source to Compensator Tray Distance",
         "entity" : "Plan",
         "req" : "2",
         "desc" : "Radiation source to compensator tray attachment edge distance (in mm) for current compensator.",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "entity" : "Series"
      },
      "(300a,00b0)[<0>](300c,0042)[<1>](300c,0009)" : {
         "req" : "3",
         "desc" : "Cumulative Meterset Weight within current Beam at which image acquisition ends.",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "End Cumulative Meterset Weight",
         "entity" : "Plan"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
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
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0008,0060)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series",
         "req" : "1",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Series",
         "name" : "Modality"
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
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
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance UID",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300c,0042)" : {
         "req" : "3",
         "desc" : "Reference images used for validation of current beam. One or more items are permitted in this sequence.",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Referenced Reference Image Sequence",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "name" : "Date"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "entity" : "Plan",
         "name" : "Digital Signature DateTime",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "module" : "SOP Common"
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,0100)" : {
         "name" : "Block Thickness",
         "entity" : "Plan",
         "desc" : [
            "Physical thickness of block (in mm) parallel to radiation beam axis. Required if Material ID (300A,00E1) is non-zero length. May be present if Material ID (300A,00E1) is zero length. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.4"
               },
               "el" : "xref"
            },
            " and ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.11"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2C",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(fffa,fffa)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Digital Signatures Sequence"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "entity" : "Series",
         "name" : "Reason for the Requested Procedure",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Reason for requesting this procedure.",
         "module" : "RT Series"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,012a)" : {
         "entity" : "Plan",
         "name" : "Table Top Lateral Position",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "2C",
         "desc" : [
            "Table Top Lateral position in IEC TABLE TOP coordinate system (mm). Required for first item of Control Point Sequence, or if Table Top Lateral Position changes during Beam. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.6"
               }
            },
            "."
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "entity" : "Series",
         "name" : "Scheduled Procedure Step ID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "desc" : [
            "Identifier that identifies the Scheduled Procedure Step.",
            "Required if procedure was scheduled.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "1C",
         "module" : "RT Series"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "name" : "Certificate Type",
         "entity" : "Plan",
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
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
         "entity" : "Series",
         "module" : "RT Series",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "entity" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Series",
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
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
      "(300a,00b0)[<0>](300a,00ca)[<1>](3002,0012)" : {
         "req" : "3",
         "desc" : "The x and y coordinates (in mm) of the upper left hand corner of the image, in the IEC X-RAY IMAGE RECEPTOR coordinate system. This is the center of the first pixel transmitted.",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "RT Image Position",
         "entity" : "Plan"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,0084)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "module" : "RT Fraction Scheme",
         "req" : "3",
         "desc" : "Dose (in Gy) at Beam Dose Specification Point (300A,0082) due to current Beam.",
         "entity" : "Plan",
         "name" : "Beam Dose"
      },
      "(300a,00b0)[<0>](300a,010e)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "desc" : [
            "Value of Cumulative Meterset Weight (300A,0134) for final Control Point in Control Point Sequence (300A,0111). Required if Cumulative Meterset Weight is non-null in Control Points specified within Control Point Sequence (300A,0111). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.1"
               }
            },
            "."
         ],
         "req" : "1C",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Final Cumulative Meterset Weight"
      },
      "(300a,00b0)[<0>](300a,00d1)[<1>](300a,00d4)" : {
         "name" : "Wedge ID",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "User-supplied identifier for Wedge.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(0010,2298)" : {
         "module" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Person Role",
         "entity" : "Patient"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,011a)[<2>](300a,00b8)" : {
         "module" : "RT Beams",
         "req" : "1",
         "desc" : [
            "Type of beam limiting device (collimator). The value of this attribute shall correspond to RT Beam Limiting Device Type (300A,00B8) defined in an item of Beam Limiting Device Sequence (300A,00B6).",
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
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "RT Beam Limiting Device Type",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "name" : "Numeric Value",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0123)" : {
         "entity" : "Plan",
         "name" : "Patient Support Rotation Direction",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "desc" : [
            [
               "Direction of Patient Support Rotation when viewing table from above, for segment following Control Point. Required for first item of Control Point Sequence, or if Patient Support Rotation Direction changes during Beam. See ",
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
         "req" : "1C"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "entity" : "Plan"
      },
      "(0010,2297)" : {
         "entity" : "Patient",
         "name" : "Responsible Person",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "module" : "Patient"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "entity" : "Plan",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(300a,0009)" : {
         "module" : "RT General Plan",
         "req" : "3",
         "desc" : "Planned treatment protocols.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "name" : "Treatment Protocols",
         "entity" : "Plan"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "module" : "Patient",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
         "entity" : "Patient"
      },
      "(300a,0180)[<0>](300a,01d6)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "Lateral Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., lateral offset between patient positioning performed using setup and treatment position.",
         "req" : "3",
         "module" : "RT Patient Setup",
         "entity" : "Plan",
         "name" : "Table Top Lateral Setup Displacement"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(300a,0210)[<0>](300a,022e)" : {
         "entity" : "Plan",
         "name" : "Source Strength Reference Time",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "req" : "1",
         "desc" : "Reference time for Air Kerma Rate (300A,022A) or Source Strength (300A,022B) of Isotope."
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "req" : "3",
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "entity" : "Study"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "entity" : "Patient",
         "name" : "Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "An identification number or code used to identify the patient.",
         "req" : "1",
         "module" : "Patient"
      },
      "(0008,1200)" : {
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "entity" : "Plan",
         "req" : "1C",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "module" : "Common Instance Reference",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "RT Series",
         "req" : "1",
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
         "entity" : "Series",
         "name" : "Value Type"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "name" : "Signature",
         "entity" : "Plan",
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
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,0298)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "req" : "3",
         "desc" : "Manufacturer of Source Applicator.",
         "entity" : "Plan",
         "name" : "Source Applicator Manufacturer"
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,02eb)" : {
         "name" : "Compensator Description",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "User defined description for the compensator.",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,00f9)" : {
         "entity" : "Plan",
         "name" : "Accessory Code",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader."
      },
      "(0008,1120)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Patient",
         "name" : "Referenced Patient Sequence"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,002a)" : {
         "entity" : "Plan",
         "name" : "Organ at Risk Full-volume Dose",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "desc" : "Maximum dose (in Gy) to entire Dose Reference if Dose Reference Type (300A,0020) of referenced Dose Reference is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) of referenced Dose Reference is VOLUME.",
         "req" : "3",
         "module" : "RT Fraction Scheme"
      },
      "(300a,0070)[<0>](300a,0080)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "desc" : "Number of Beams in current Fraction Group. If Number of Beams is greater then zero, Number of Brachy Application Setups (300A,00A0) shall equal zero.",
         "req" : "1",
         "module" : "RT Fraction Scheme",
         "entity" : "Plan",
         "name" : "Number of Beams"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,0082)" : {
         "req" : "3",
         "desc" : [
            "Coordinates (x,y,z) of point at which Beam Dose is specified in the patient based coordinate system described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               }
            },
            " (mm). See Note 3."
         ],
         "module" : "RT Fraction Scheme",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "name" : "Beam Dose Specification Point",
         "entity" : "Plan"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02d0)[<2>](300a,0412)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "req" : "3",
         "desc" : [
            "(x,y,z) component of the direction vector of the brachy source or seed at the Control Point 3D Position (300A,02D4). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.15.14",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Control Point Orientation"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "entity" : "Plan",
         "name" : "Device Serial Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance."
      },
      "(300a,0206)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "desc" : "Mailing address of the institution where the equipment is located that is to be used for treatment delivery.",
         "req" : "3",
         "entity" : "Plan",
         "name" : "Institution Address"
      },
      "(0040,0244)" : {
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "desc" : "Date on which the Performed Procedure Step started.",
         "req" : "3",
         "module" : "RT Series"
      },
      "(300a,0040)[<0>](300a,0050)" : {
         "name" : "Table Top Roll Angle Tolerance",
         "entity" : "Plan",
         "module" : "RT Tolerance Tables",
         "req" : "3",
         "desc" : "Maximum permitted difference (in degrees) between the planned and delivered Table Top Roll Angle.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-47"
         ]
      },
      "(300a,00b0)[<0>](300c,0042)[<1>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Plan",
         "module" : "RT Beams",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50",
            "table_10-11"
         ]
      },
      "(300a,0230)[<0>](300a,0234)" : {
         "entity" : "Plan",
         "name" : "Application Setup Number",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "desc" : "Identification number of the Application Setup. The value of Application Setup Number (300A,0234) shall be unique within the RT Plan in which it is created.",
         "req" : "1",
         "module" : "RT Brachy Application Setups"
      },
      "(300a,00b0)[<0>](300a,00b6)[<1>](300a,00ba)" : {
         "entity" : "Plan",
         "name" : "Source to Beam Limiting Device Distance",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "Radiation source to beam limiting device (collimator) distance of the equipment that is to be used for beam delivery (mm)."
      },
      "(300a,00b0)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that is to be used for beam delivery.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0124)" : {
         "module" : "RT Beams",
         "desc" : "Distance (positive) from the IEC PATIENT SUPPORT vertical axis to the IEC TABLE TOP ECCENTRIC vertical axis (mm).",
         "req" : "3",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Table Top Eccentric Axis Distance",
         "entity" : "Plan"
      },
      "(300a,0010)[<0>](300a,0016)" : {
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U",
         "module" : "RT Prescription",
         "req" : "3",
         "desc" : "User-defined description of Dose Reference.",
         "entity" : "Plan",
         "name" : "Dose Reference Description"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,008c)" : {
         "req" : "3",
         "desc" : [
            "Sequence of Items containing Beam Dose Verification Control Points.",
            "Two or more items may be included in this sequence."
         ],
         "module" : "RT Fraction Scheme",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Beam Dose Verification Control Point Sequence",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,0107)[<1>](300a,0108)" : {
         "entity" : "Plan",
         "name" : "Applicator ID",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "desc" : "User or machine supplied identifier for Applicator.",
         "req" : "1"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID"
      },
      "(300a,00b0)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0434)" : {
         "entity" : "Plan",
         "name" : "Applicator Opening X",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "desc" : [
            "Opening (in mm) of the applicator's aperture in IEC BEAM LIMITING DEVICE coordinate system in X-Direction.",
            "Required if Applicator Aperture Shape (300A,0432) is SYM_RECTANGLE."
         ],
         "req" : "1C",
         "module" : "RT Beams"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,012c)" : {
         "name" : "Isocenter Position",
         "entity" : "Plan",
         "desc" : [
            "Isocenter coordinates (x,y,z) in the patient based coordinate system described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               }
            },
            " (mm). Required for first item of Segment Control Point Sequence, or if Segment Isocenter Position changes during Beam."
         ],
         "req" : "2C",
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "entity" : "Plan",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT General Plan"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,00e1)" : {
         "module" : "RT Beams",
         "desc" : "User-supplied identifier for material used to manufacture Block.",
         "req" : "2",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Material ID",
         "entity" : "Plan"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02d0)[<2>](300a,0112)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "module" : "RT Brachy Application Setups",
         "req" : "1",
         "desc" : "Index of current Control Point, starting at 0 for first Control Point.",
         "entity" : "Plan",
         "name" : "Control Point Index"
      },
      "(0040,0250)" : {
         "name" : "Performed Procedure Step End Date",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(300a,0210)[<0>](300a,0228)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "module" : "RT Brachy Application Setups",
         "desc" : "Half-life of Isotope (days).",
         "req" : "1",
         "entity" : "Plan",
         "name" : "Source Isotope Half Life"
      },
      "(300e,0008)" : {
         "entity" : "Plan",
         "name" : "Reviewer Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-52"
         ],
         "module" : "Approval",
         "req" : "2C",
         "desc" : "Name of person who reviewed object. Required if Approval Status (300E,0002) is APPROVED or REJECTED."
      },
      "(300a,00b0)[<0>](300c,00b0)[<1>](300a,00f9)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "req" : "3",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Accessory Code"
      },
      "(300a,00b0)[<0>](0008,0080)" : {
         "entity" : "Plan",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "desc" : "Institution where the equipment is located that is to be used for beam delivery.",
         "req" : "3",
         "module" : "RT Beams"
      },
      "(300a,00b0)[<0>](300a,00b6)[<1>](300a,00bc)" : {
         "entity" : "Plan",
         "name" : "Number of Leaf/Jaw Pairs",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "1",
         "desc" : "Number of leaf (element) or jaw pairs (equal to 1 for standard beam limiting device jaws)."
      },
      "(0008,1115)" : {
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Referenced Series Sequence",
         "entity" : "Plan"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "module" : "Patient",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0020,0013)" : [
         {
            "entity" : "Plan",
            "name" : "Instance Number",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-45"
            ],
            "module" : "RT General Plan",
            "req" : "3",
            "desc" : "A number that identifies this object instance."
         },
         {
            "name" : "Instance Number",
            "entity" : "Plan",
            "module" : "SOP Common",
            "req" : "3",
            "desc" : "A number that identifies this Composite object instance.",
            "usage" : "M",
            "mod_tables" : [
               "table_C.12-1"
            ]
         }
      ],
      "(0008,1120)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Patient"
      },
      "(0040,0260)" : {
         "name" : "Performed Protocol Code Sequence",
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,011a)" : {
         "entity" : "Plan",
         "name" : "Beam Limiting Device Position Sequence",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "1C",
         "desc" : [
            "Sequence of beam limiting device (collimator) jaw or leaf (element) positions.",
            "One or more items shall be included in this sequence.",
            "Required for first item of Control Point Sequence, or if Beam Limiting Device changes during Beam."
         ]
      },
      "(300a,0007)" : {
         "entity" : "Plan",
         "name" : "RT Plan Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "req" : "2",
         "desc" : "Time treatment plan was last modified.",
         "module" : "RT General Plan"
      },
      "(300a,0206)[<0>](0008,0080)" : {
         "module" : "RT Brachy Application Setups",
         "desc" : "Institution where the equipment is located that is to be used for treatment delivery.",
         "req" : "3",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Institution Name",
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Series"
      },
      "(0008,1070)" : {
         "name" : "Operators' Name",
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "2",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(300a,0180)" : {
         "name" : "Patient Setup Sequence",
         "entity" : "Plan",
         "req" : "1",
         "desc" : [
            "Sequence of patient setup data for current plan.",
            "One or more items shall be included in this sequence."
         ],
         "module" : "RT Patient Setup",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,0284)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "desc" : [
            "Length of Channel (mm). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.15.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "2",
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Channel Length"
      },
      "(300a,0040)" : {
         "module" : "RT Tolerance Tables",
         "desc" : [
            "Sequence of tolerance tables to be used for delivery of treatment plan.",
            "One or more items are permitted in this sequence.",
            "See Note 1."
         ],
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-47"
         ],
         "name" : "Tolerance Table Sequence",
         "entity" : "Plan"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0023)" : {
         "name" : "Delivery Maximum Dose",
         "entity" : "Plan",
         "module" : "RT Fraction Scheme",
         "req" : "3",
         "desc" : "The maximum dose (in Gy) that can be delivered to the dose reference.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(300a,00b0)[<0>](300c,0042)[<1>](300a,00c8)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "1",
         "desc" : "Uniquely identifies Reference Image within Referenced Reference Image Sequence (300C,0042).",
         "entity" : "Plan",
         "name" : "Reference Image Number"
      },
      "(300a,0040)[<0>](300a,014e)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-47"
         ],
         "desc" : "Maximum permitted difference (in degrees) between planned and delivered Gantry Pitch Angle.",
         "req" : "3",
         "module" : "RT Tolerance Tables",
         "entity" : "Plan",
         "name" : "Gantry Pitch Angle Tolerance"
      },
      "(0012,0064)" : {
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "De-identification Method Code Sequence",
         "entity" : "Patient"
      },
      "(300a,0230)[<0>](300c,0042)[<1>](0008,1150)" : {
         "entity" : "Plan",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-51",
            "table_10-11"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "RT Brachy Application Setups"
      },
      "(300a,0003)" : {
         "name" : "RT Plan Name",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "User-defined name for treatment plan.",
         "module" : "RT General Plan",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1150)" : {
         "entity" : "Plan",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "U",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Patient Setup"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0140)" : {
         "module" : "RT Beams",
         "req" : "1C",
         "desc" : [
            "Table Top Pitch Angle, i.e., the rotation of the IEC TABLE TOP coordinate system about the X-axis of the IEC TABLE TOP coordinate system (degrees). If required by treatment delivery device, shall be present for first item of Control Point Sequence. If required by treatment delivery device and if Table Top Pitch Angle changes during Beam, shall be present in all subsequent items of Control Point Sequence. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.12",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Table Top Pitch Angle",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00eb)" : {
         "name" : "Compensator Transmission Data",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "1C",
         "desc" : [
            [
               "A data stream of the pixel samples that comprise the compensator, expressed as broad-beam transmission values (between 0 and 1) along a ray line passing through the pixel, at the beam energy specified by the Nominal Beam Energy (300A,0114) of the first Control Point of the Control Point Sequence (300A,0111). The order of pixels sent is left to right, top to bottom, i.e., the upper left pixel is sent first followed by the remainder of the first row, followed by the first pixel of the 2nd row, then the remainder of the 2nd row and so on) when viewed from the radiation source. Required if Material ID (300A,00E1) is zero-length. May be present if Material ID (300A,00E1) is non-zero length. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.10"
                  }
               },
               " and ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.11"
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
                        "Compensator Transmission Data may not be properly encoded if Explicit VR transfer syntax is used and the VL of this attribute exceeds 65534 bytes."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(0038,0060)" : {
         "req" : "3",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Service Episode ID",
         "entity" : "Study"
      },
      "(0008,0013)" : {
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Instance Creation Time",
         "entity" : "Plan"
      },
      "(0008,0053)" : {
         "name" : "Query/Retrieve View",
         "entity" : "Plan",
         "req" : "1C",
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
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](300a,0402)" : {
         "name" : "Setup Image Comment",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "Comment on the Setup Image.",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID"
      },
      "(300a,00b0)[<0>](300a,00b4)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "desc" : "Radiation source to Gantry rotation axis distance of the equipment that is to be used for beam delivery (mm).",
         "req" : "3",
         "entity" : "Plan",
         "name" : "Source-Axis Distance"
      },
      "(300a,00b0)[<0>](300a,00ca)[<1>](3002,0010)" : {
         "req" : "3",
         "desc" : "The direction cosines of the first row and the first column with respect to the IEC X-RAY IMAGE RECEPTOR coordinate system.",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "RT Image Orientation",
         "entity" : "Plan"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,019a)" : {
         "name" : "Fixation Device Roll Angle",
         "entity" : "Plan",
         "desc" : "The Fixation Device Roll Angle, i.e., orientation of ROLLED FIXATION DEVICE coordinate system with respect to IEC PITCHED FIXATION DEVICE coordinate system (degrees). Rolling is the rotation around IEC PATIENT SUPPORT Y-axis.",
         "req" : "3",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00e9)" : {
         "module" : "RT Beams",
         "desc" : [
            "Physical distance (in mm) between the center of each pixel projected onto machine isocentric plane. Specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_10.7.1.3"
               }
            },
            " for further explanation of the value order."
         ],
         "req" : "1",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Compensator Pixel Spacing",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,0420)[<1>](300a,0424)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "1",
         "desc" : "Identification Number of the General Accessory. The value shall be unique within the sequence.",
         "entity" : "Plan",
         "name" : "General Accessory Number"
      },
      "(300a,0206)" : {
         "module" : "RT Brachy Application Setups",
         "req" : "1",
         "desc" : [
            "Introduces single item sequence describing treatment machine to be used for treatment delivery.",
            "Only a single item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "name" : "Treatment Machine Sequence",
         "entity" : "Plan"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02d0)[<2>](300a,02d2)" : {
         "req" : "1",
         "desc" : [
            "Distance between current Control Point Position and the distal-most possible Source position in current Channel (mm). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.15.9"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "RT Brachy Application Setups",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Control Point Relative Position",
         "entity" : "Plan"
      },
      "(300c,0080)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45",
            "table_10-11"
         ],
         "module" : "RT General Plan",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Plan",
         "name" : "Referenced SOP Instance UID"
      },
      "(0018,1201)" : {
         "entity" : "Equipment",
         "name" : "Time of Last Calibration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         "req" : "3"
      },
      "(300a,0010)[<0>](300a,0027)" : {
         "req" : "3",
         "desc" : "Maximum permitted dose (in Gy) to Dose Reference if Dose Reference Type (300A,0020) is TARGET.",
         "module" : "RT Prescription",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "name" : "Target Maximum Dose",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "entity" : "Plan",
         "name" : "Source of Previous Values",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "2",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received."
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02d0)[<2>](300a,02d6)" : {
         "entity" : "Plan",
         "name" : "Cumulative Time Weight",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "desc" : [
            "Cumulative time weight to current Control Point (where the weighting is proportional to time values delivered). Cumulative Time Weight for first item in Brachy Control Point Sequence (300A,02D0) is always zero. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.15.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " and ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.15.8",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2"
      },
      "(0038,0062)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Description of the type of service episode.",
         "entity" : "Study",
         "name" : "Service Episode Description"
      },
      "(300a,00b0)[<0>](300a,0111)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "req" : "1",
         "desc" : [
            "Sequence of machine configurations describing treatment beam.",
            "Two or more items shall be included in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.6"
                  }
               },
               "."
            ]
         ],
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Control Point Sequence"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,0286)" : {
         "desc" : "Total amount of time between first and final Control Points of the Brachy Control Point Sequence (300A,02D0) for current Channel (sec). Channel Total Time calculation is based upon the Reference Air Kerma Rate (300A,022A) of the Referenced Source Number (300C,000E).",
         "req" : "1",
         "module" : "RT Brachy Application Setups",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "name" : "Channel Total Time",
         "entity" : "Plan"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
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
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Retrieve URI"
      },
      "(300a,00b0)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0435)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "1C",
         "desc" : [
            "Opening (in mm) of the applicator's aperture in IEC BEAM LIMITING DEVICE coordinate system in Y-Direction.",
            "Required if Applicator Aperture Shape (300A,0432) is SYM_RECTANGLE."
         ],
         "entity" : "Plan",
         "name" : "Applicator Opening Y"
      },
      "(300a,0230)[<0>](300a,0240)" : {
         "req" : "3",
         "desc" : "Identification number of the Template. The value of Template Number (300A,0240) shall be unique within the Application Setup in which it is created.",
         "module" : "RT Brachy Application Setups",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Template Number",
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Referenced SOP Sequence"
      },
      "(300a,00b0)[<0>](300a,00f4)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "req" : "1C",
         "desc" : [
            "Sequence of blocks associated with Beam.",
            "One or more items shall be included in this sequence.",
            "Required if Number of Blocks (300A,00F0) is non-zero."
         ],
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Block Sequence"
      },
      "(300a,0010)[<0>](300a,001a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "module" : "RT Prescription",
         "req" : "3",
         "desc" : "Dose (in Gy) from prior treatment to this Dose Reference (e.g., from a previous course of treatment).",
         "entity" : "Plan",
         "name" : "Nominal Prior Dose"
      },
      "(0008,1030)" : {
         "name" : "Study Description",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02d0)[<2>](300c,0055)" : {
         "module" : "RT Brachy Application Setups",
         "desc" : [
            "Introduces a sequence of Dose References for current Channel.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Brachy Referenced Dose Reference Sequence",
         "entity" : "Plan"
      },
      "(0012,0081)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "req" : "1C",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Name"
      },
      "(300a,0070)[<0>](300a,007b)" : {
         "req" : "3",
         "desc" : "String of 0's (no treatment) and 1's (treatment) describing treatment pattern. Length of string is 7 x Number of Fraction Pattern Digits Per Day x Repeat Fraction Cycle Length. Pattern shall start on a Monday. See Note 2.",
         "module" : "RT Fraction Scheme",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Fraction Pattern",
         "entity" : "Plan"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "entity" : "Plan",
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information."
      },
      "(0040,0245)" : {
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Time on which the Performed Procedure Step started.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Start Time",
         "entity" : "Series"
      },
      "(300a,0206)[<0>](0018,1000)" : {
         "entity" : "Plan",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "req" : "3",
         "desc" : "Manufacturer's serial number of the equipment that is to be used for treatment delivery."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "module" : "RT Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Series"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Study"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300c,0050)[<2>](300c,0051)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module.",
         "req" : "1",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Referenced Dose Reference Number"
      },
      "(300a,0210)[<0>](300a,0218)" : {
         "entity" : "Plan",
         "name" : "Active Source Diameter",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "desc" : "Diameter of active Source (mm).",
         "req" : "3"
      },
      "(300a,0070)" : {
         "desc" : [
            "Sequence of Fraction Groups in current Fraction Scheme.",
            "One or more items shall be included in this sequence."
         ],
         "req" : "1",
         "module" : "RT Fraction Scheme",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "name" : "Fraction Group Sequence",
         "entity" : "Plan"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "entity" : "Study",
         "name" : "Institution Address"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0020,0052)" : {
         "mod_tables" : [
            "table_C.7-6"
         ],
         "usage" : "U",
         "module" : "Frame of Reference",
         "req" : "1",
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Frame of Reference",
         "name" : "Frame of Reference UID"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a4)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "2",
         "desc" : "User-defined label for Shielding Device.",
         "module" : "RT Patient Setup",
         "entity" : "Plan",
         "name" : "Shielding Device Label"
      },
      "(300a,0006)" : {
         "req" : "2",
         "desc" : "Date treatment plan was last modified.",
         "module" : "RT General Plan",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "name" : "RT Plan Date",
         "entity" : "Plan"
      },
      "(0010,2293)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "req" : "2C",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Patient Breed Code Sequence"
      },
      "(300a,00b0)[<0>](300a,00d1)[<1>](300a,00d5)" : {
         "module" : "RT Beams",
         "req" : "2",
         "desc" : "Nominal wedge angle (degrees).",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Wedge Angle",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,00fb)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "req" : "3",
         "desc" : [
            "Indicates on which side of the Block Tray the block is mounted.",
            {
               "list" : [
                  [
                     "PATIENT_SIDE",
                     "the block is mounted on the side of the Block Tray that is towards the patient."
                  ],
                  [
                     "SOURCE_SIDE",
                     "the block is mounted on the side of the Block Tray that is towards the radiation source."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Block Mounting Position"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0062,000b)" : {
         "entity" : "Plan",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "usage" : "U",
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Patient Setup"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02d0)[<2>](300a,02d4)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "req" : "3",
         "desc" : [
            "Coordinates (x, y, z) of Control Point in the patient based coordinate system described in ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " (mm). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.15.10"
               }
            },
            "."
         ],
         "entity" : "Plan",
         "name" : "Control Point 3D Position"
      },
      "(0010,21b0)" : {
         "req" : "3",
         "desc" : "Additional information about the Patient's medical history.",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Additional Patient History",
         "entity" : "Study"
      },
      "(300a,0070)[<0>](300c,0050)" : {
         "name" : "Referenced Dose Reference Sequence",
         "entity" : "Plan",
         "req" : "3",
         "desc" : [
            "Sequence of Dose References for the current Fraction Group.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "RT Fraction Scheme",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(300a,0010)[<0>](300a,0023)" : {
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U",
         "module" : "RT Prescription",
         "desc" : "The maximum dose (in Gy) that can be delivered to the dose reference.",
         "req" : "3",
         "entity" : "Plan",
         "name" : "Delivery Maximum Dose"
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,00fa)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "2",
         "desc" : [
            "Indicates presence or otherwise of geometrical divergence.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
         "entity" : "Plan",
         "name" : "Block Divergence"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "module" : "General Study",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Study"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,0086)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "req" : "3",
         "desc" : "Machine setting to be delivered for current Beam, specified in Monitor Units (MU) or minutes as defined by Primary Dosimeter Unit (300A,00B3) (in RT Beams Module) for referenced Beam. See Note 4.",
         "module" : "RT Fraction Scheme",
         "entity" : "Plan",
         "name" : "Beam Meterset"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "entity" : "Study"
      },
      "(300a,0180)[<0>](300a,0410)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "module" : "RT Patient Setup",
         "desc" : [
            "Sequence of Motion Synchronization.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Plan",
         "name" : "Motion Synchronization Sequence"
      },
      "(300a,0180)[<0>](300a,01b0)" : {
         "name" : "Setup Technique",
         "entity" : "Plan",
         "module" : "RT Patient Setup",
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
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(0100,0410)" : {
         "entity" : "Plan",
         "name" : "SOP Instance Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
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
         "module" : "SOP Common"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "entity" : "Plan",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,0290)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "req" : "3",
         "desc" : "Identification number of the Source Applicator. The value of Source Applicator Number (300A,0290) shall be unique within the Channel in which it is created.",
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Source Applicator Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
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
         "entity" : "Series",
         "name" : "Referenced Frame Number"
      },
      "(0008,0015)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
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
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Instance Coercion DateTime"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,0296)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "req" : "1C",
         "desc" : "Length of Source Applicator (mm), defined as the distance between the connector of the applicator and the distal-most position of the source. Required if Source Applicator Number (300A,0290) is sent.",
         "entity" : "Plan",
         "name" : "Source Applicator Length"
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient"
      },
      "(300a,0210)[<0>](300a,0212)" : {
         "entity" : "Plan",
         "name" : "Source Number",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "req" : "1",
         "desc" : "Identification number of the Source. The value of Source Number (300A,0212) shall be unique within the RT Plan in which it is created."
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "entity" : "Plan",
         "name" : "Referenced SOP Instance UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "Common Instance Reference"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,002b)" : {
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "desc" : "Maximum permitted dose (in Gy) to any part of Dose Reference if Dose Reference Type (300A,0020) of referenced Dose Reference is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) of referenced Dose Reference is VOLUME.",
         "req" : "3",
         "module" : "RT Fraction Scheme",
         "entity" : "Plan",
         "name" : "Organ at Risk Limit Dose"
      },
      "(300a,00b0)[<0>](300a,00ca)[<1>](300c,0008)" : {
         "req" : "3",
         "desc" : "Cumulative Meterset Weight within current Beam at which image acquisition will start.",
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Start Cumulative Meterset Weight",
         "entity" : "Plan"
      },
      "(300a,0010)[<0>](300a,0021)" : {
         "entity" : "Plan",
         "name" : "Constraint Weight",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "module" : "RT Prescription",
         "desc" : "Relative importance of satisfying constraint, where high values represent more important constraints.",
         "req" : "3"
      },
      "(300c,0060)" : {
         "mod_tables" : [
            "table_C.8-45"
         ],
         "usage" : "M",
         "desc" : [
            "The RT Structure Set on which the RT Plan is based.",
            "Only a single item shall be included in this sequence.",
            "Required if RT Plan Geometry (300A,000C) is PATIENT."
         ],
         "req" : "1C",
         "module" : "RT General Plan",
         "entity" : "Plan",
         "name" : "Referenced Structure Set Sequence"
      },
      "(300a,0180)[<0>](300a,01b2)" : {
         "name" : "Setup Technique Description",
         "entity" : "Plan",
         "desc" : "User-defined description of Setup Technique.",
         "req" : "3",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "entity" : "Plan",
         "name" : "Digital Signature Purpose Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "name" : "Referenced Frame Number",
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
         "req" : "1C",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(300a,0210)[<0>](300a,0224)" : {
         "module" : "RT Brachy Application Setups",
         "req" : "3",
         "desc" : [
            "Nominal transmission through wall of encapsulation (between 0 and 1). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.15.12",
                  "xrefstyle" : "select: label"
               }
            }
         ],
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "name" : "Source Encapsulation Nominal Transmission",
         "entity" : "Plan"
      },
      "(300e,0002)" : {
         "entity" : "Plan",
         "name" : "Approval Status",
         "mod_tables" : [
            "table_C.8-52"
         ],
         "usage" : "U",
         "module" : "Approval",
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
         "req" : "1"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "entity" : "Patient",
         "req" : "2C",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0012,0020)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "req" : "1",
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
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol ID"
      },
      "(300a,00b0)[<0>](300a,00ca)" : {
         "entity" : "Plan",
         "name" : "Planned Verification Image Sequence",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "desc" : [
            "Sequence of planned verification images to be acquired during current beam.",
            "One or more items are permitted in this sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "module" : "RT Beams"
      },
      "(300a,00b0)[<0>](300a,00ca)[<1>](3002,000c)" : {
         "name" : "RT Image Plane",
         "entity" : "Plan",
         "desc" : [
            "Describes whether or not image plane is normal to beam axis.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "NORMAL",
                     "image plane normal to beam axis"
                  ],
                  [
                     "NON_NORMAL",
                     "image plane non-normal to beam axis"
                  ]
               ]
            }
         ],
         "req" : "3",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0021)" : {
         "name" : "Constraint Weight",
         "entity" : "Plan",
         "module" : "RT Fraction Scheme",
         "req" : "3",
         "desc" : "Relative importance of satisfying constraint, where high values represent more important constraints.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "name" : "Institutional Department Name",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,1008)" : {
         "name" : "Gantry ID",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "req" : "3",
         "desc" : "Identifier of the gantry or positioner.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9171)" : {
         "module" : "RT Patient Setup",
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
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Respiratory Signal Source",
         "entity" : "Plan"
      },
      "(0008,1010)" : {
         "entity" : "Equipment",
         "name" : "Station Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "module" : "General Equipment"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,0294)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "module" : "RT Brachy Application Setups",
         "req" : "3",
         "desc" : "User-defined name for Source Applicator.",
         "entity" : "Plan",
         "name" : "Source Applicator Name"
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,00f5)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "desc" : "User-supplied identifier for block tray.",
         "req" : "3",
         "entity" : "Plan",
         "name" : "Block Tray ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(300a,00b0)[<0>](300a,00d1)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "entity" : "Plan",
         "module" : "RT Beams",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "req" : "3",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(300a,0210)[<0>](300a,0226)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "desc" : "Name of Isotope.",
         "req" : "1",
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Source Isotope Name"
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
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referenced Study Sequence",
         "entity" : "Study"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01bc)" : {
         "name" : "Setup Device Parameter",
         "entity" : "Plan",
         "desc" : [
            "Setup Parameter for Setup Device in appropriate IEC 61217 coordinate system.",
            "Units shall be mm for distances and degrees for angles."
         ],
         "req" : "2",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "entity" : "Plan",
         "name" : "MAC ID Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA)."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "entity" : "Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02b0)[<2>](300a,02b4)" : {
         "req" : "3",
         "desc" : "User-defined name for Channel Shield.",
         "module" : "RT Brachy Application Setups",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "name" : "Channel Shield Name",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,00b2)" : {
         "req" : "2",
         "desc" : "User-defined name identifying treatment machine to be used for beam delivery. See Note 2.",
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Treatment Machine Name",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "desc" : "Manufacturer's model name of the equipment that is to be used for beam delivery.",
         "req" : "3",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Manufacturer's Model Name"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
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
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,011a)[<2>](300a,011c)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "desc" : "Positions of beam limiting device (collimator) leaf (element) or jaw pairs (in mm) in IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), e.g., X-axis for MLCX, Y-axis for MLCY. Contains 2N values, where N is the Number of Leaf/Jaw Pairs (300A,00BC) in Beam Limiting Device Sequence (300A,00B6). Values shall be listed in IEC leaf (element) subscript order 101, 102, \u2026 1N, 201, 202, \u2026 2N. See Note 3.",
         "req" : "1",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Leaf/Jaw Positions"
      },
      "(0010,0032)" : {
         "name" : "Patient's Birth Time",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "desc" : "Birth time of the Patient.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(300a,0040)[<0>](300a,004c)" : {
         "name" : "Patient Support Angle Tolerance",
         "entity" : "Plan",
         "desc" : "Maximum permitted difference (in degrees) between planned and delivered Patient Support Angle.",
         "req" : "3",
         "module" : "RT Tolerance Tables",
         "mod_tables" : [
            "table_C.8-47"
         ],
         "usage" : "U"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "entity" : "Plan",
         "name" : "Certified Timestamp Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1C",
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
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
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
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "SOP Common"
      },
      "(300a,0230)[<0>](300a,0260)[<1>](300a,0263)" : {
         "entity" : "Plan",
         "name" : "Brachy Accessory Device ID",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "req" : "2",
         "desc" : "User or machine supplied identifier for Brachy Accessory Device.",
         "module" : "RT Brachy Application Setups"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "Plan",
         "module" : "SOP Common",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "entity" : "Series",
         "name" : "Scheduled Protocol Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence."
      },
      "(300a,0010)[<0>](300a,0014)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "module" : "RT Prescription",
         "desc" : [
            "Structure type of Dose Reference.",
            {
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "req" : "1",
         "entity" : "Plan",
         "name" : "Dose Reference Structure Type"
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "entity" : "Plan",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(300a,0070)[<0>](300a,00a0)" : {
         "desc" : "Number of Brachy Application Setups in current Fraction Group. If Number of Brachy Application Setups is greater then zero, Number of Beams (300A,0080) shall equal zero.",
         "req" : "1",
         "module" : "RT Fraction Scheme",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Number of Brachy Application Setups",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "entity" : "Series",
         "name" : "Concept Code Sequence",
         "usage" : "M",
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
         ]
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,00f8)" : {
         "name" : "Block Type",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "1",
         "desc" : [
            "Type of block.",
            {
               "title" : "Enumerated Values:",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(300a,0180)[<0>](300a,01d4)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Longitudinal Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., longitudinal offset between patient positioning performed using setup and treatment position.",
         "module" : "RT Patient Setup",
         "entity" : "Plan",
         "name" : "Table Top Longitudinal Setup Displacement"
      },
      "(0008,0021)" : {
         "entity" : "Series",
         "name" : "Series Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "3",
         "desc" : "Date the Series started.",
         "module" : "RT Series"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "req" : "3",
         "desc" : [
            "A certified timestamp of the Digital Signature (0400,0120) Attribute Value, which shall be obtained when the Digital Signature is created. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.3"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "entity" : "Plan"
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Institution Name"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient",
         "req" : "3",
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
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(300a,0210)[<0>](300a,021c)" : {
         "module" : "RT Brachy Application Setups",
         "req" : "3",
         "desc" : "Description of the source.",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Source Description",
         "entity" : "Plan"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient",
         "name" : "Universal Entity ID"
      },
      "(0028,0120)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "1C",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute is not used in Presentation State Instances; there is no means in a Presentation State to \"override\" any Pixel Padding Value specified in the referenced images."
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
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
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
               ]
            }
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Pixel Padding Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "usage" : "M",
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
         ],
         "req" : "1C",
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Referenced Frame Number"
      },
      "(0012,0050)" : {
         "name" : "Clinical Trial Time Point ID",
         "entity" : "Study",
         "desc" : [
            "An identifier specifying the one or more studies that are grouped together as a clinical time point or submission in a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "2",
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ]
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.13.1.2"
                  }
               }
            ],
            "Required for all but the last items in that sequence."
         ],
         "module" : "RT Fraction Scheme",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Average Beam Dose Point SSD",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,0107)[<1>](300a,00f9)" : {
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Accessory Code",
         "entity" : "Plan"
      },
      "(0008,1032)" : {
         "entity" : "Study",
         "name" : "Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "General Study"
      },
      "(300a,0010)[<0>](300a,002a)" : {
         "name" : "Organ at Risk Full-volume Dose",
         "entity" : "Plan",
         "module" : "RT Prescription",
         "desc" : "Maximum dose (in Gy) to entire Dose Reference if Dose Reference Type (300A,0020) is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) is VOLUME.",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ]
      },
      "(300a,0040)[<0>](300a,0052)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-47"
         ],
         "module" : "RT Tolerance Tables",
         "req" : "3",
         "desc" : "Maximum permitted difference (in mm) between planned and delivered Table Top Longitudinal Position.",
         "entity" : "Plan",
         "name" : "Table Top Longitudinal Position Tolerance"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Operator Identification Sequence"
      },
      "(300a,0230)[<0>](300a,0260)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "desc" : [
            "Sequence of Brachy Accessory Devices associated with current Application Setup.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Brachy Accessory Device Sequence"
      },
      "(300a,0230)[<0>](300a,0242)" : {
         "name" : "Template Type",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "User-defined type for Template Device.",
         "module" : "RT Brachy Application Setups",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ]
      },
      "(0008,0051)" : {
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "req" : "1",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Designator",
         "entity" : "Plan"
      },
      "(300a,0180)[<0>](300a,0184)" : {
         "entity" : "Plan",
         "name" : "Patient Additional Position",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "module" : "RT Patient Setup",
         "req" : "1C",
         "desc" : "User-defined additional description of patient position. Required if Patient Position (0018,5100) is not present."
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00ee)" : {
         "entity" : "Plan",
         "name" : "Compensator Type",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "req" : "3",
         "desc" : [
            "Type of compensator (if any).",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "STANDARD",
                     "physical (static) compensator"
                  ],
                  [
                     "DYNAMIC",
                     "moving Beam Limiting Device (collimator) simulating physical compensator"
                  ]
               ]
            }
         ],
         "module" : "RT Beams"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "entity" : "Plan",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(0012,0083)[<0>](0012,0084)" : {
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
               "title" : "Defined Terms:",
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
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Distribution Type",
         "entity" : "Study"
      },
      "(0010,2299)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "entity" : "Patient",
         "name" : "Responsible Organization"
      },
      "(0040,0254)" : {
         "name" : "Performed Procedure Step Description",
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(0018,1020)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "3",
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
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Software Versions"
      },
      "(300a,0010)[<0>](3006,0084)" : {
         "module" : "RT Prescription",
         "desc" : "Uniquely identifies ROI representing the dose reference specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in Structure Set Module within RT Structure Set in Referenced Structure Set Sequence (300C,0060) in RT General Plan Module. Required if Dose Reference Structure Type (300A,0014) is POINT or VOLUME.",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "name" : "Referenced ROI Number",
         "entity" : "Plan"
      },
      "(0008,1049)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Physician(s) of Record Identification Sequence"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b6)" : {
         "name" : "Setup Device Type",
         "entity" : "Plan",
         "req" : "1",
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
         "module" : "RT Patient Setup",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
         "entity" : "Plan",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(300e,0005)" : {
         "name" : "Review Time",
         "entity" : "Plan",
         "module" : "Approval",
         "req" : "2C",
         "desc" : "Time at which object was reviewed. Required if Approval Status (300E,0002) is APPROVED or REJECTED.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-52"
         ]
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "module" : "RT Series",
         "req" : "3",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Series",
         "name" : "Reason for Requested Procedure Code Sequence"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02b0)[<2>](300a,02ba)" : {
         "name" : "Channel Shield Nominal Transmission",
         "entity" : "Plan",
         "module" : "RT Brachy Application Setups",
         "req" : "3",
         "desc" : [
            "Nominal Transmission of Channel Shield (between 0 and 1). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.15.12"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
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
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Value Type",
         "entity" : "Series"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "Plan",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
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
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "SOP Common"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "entity" : "Plan",
         "name" : "Referenced SOP Class UID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0012,0021)" : {
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Name",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "req" : "1",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content Transfer Syntax UID",
         "entity" : "Plan"
      },
      "(300a,0200)" : {
         "name" : "Brachy Treatment Technique",
         "entity" : "Plan",
         "module" : "RT Brachy Application Setups",
         "req" : "1",
         "desc" : [
            "Type of brachytherapy treatment technique.",
            {
               "list" : [
                  [
                     "INTRALUMENARY",
                     null
                  ],
                  [
                     "INTRACAVITARY",
                     null
                  ],
                  [
                     "INTERSTITIAL",
                     null
                  ],
                  [
                     "CONTACT",
                     null
                  ],
                  [
                     "INTRAVASCULAR",
                     null
                  ],
                  [
                     "PERMANENT",
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
                     "linkend" : "sect_C.8.8.15.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise."
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "entity" : "Series"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a2)" : {
         "entity" : "Plan",
         "name" : "Shielding Device Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
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
         "req" : "1"
      },
      "(300a,0230)" : {
         "entity" : "Plan",
         "name" : "Application Setup Sequence",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "req" : "1",
         "desc" : [
            "Sequence of Application Setups for current RT Plan.",
            "One or more items shall be included in this sequence."
         ],
         "module" : "RT Brachy Application Setups"
      },
      "(300a,0010)[<0>](300a,002d)" : {
         "name" : "Organ at Risk Overdose Volume Fraction",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "Maximum permitted fraction (in percent) of the Organ at Risk to receive more than the Organ at Risk Maximum Dose if Dose Reference Type (300A,0020) is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) is VOLUME.",
         "module" : "RT Prescription",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U"
      },
      "(300c,0080)" : {
         "module" : "RT General Plan",
         "desc" : [
            "Related instances of RT Dose (for grids and named/unnamed point doses).",
            "One or more items are permitted in this sequence.",
            "See Note 1."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "name" : "Referenced Dose Sequence",
         "entity" : "Plan"
      },
      "(0010,0200)" : {
         "entity" : "Patient",
         "name" : "Quality Control Subject",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
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
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Person Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "usage" : "M",
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
         "entity" : "Series",
         "name" : "Date"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0194)" : {
         "module" : "RT Patient Setup",
         "req" : "2",
         "desc" : "User-defined label identifier for Fixation Device.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Fixation Device Label",
         "entity" : "Plan"
      },
      "(0008,103e)" : {
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Description of the series.",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M",
         "name" : "Series Description",
         "entity" : "Series"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b8)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "desc" : "User-defined label for Setup Device used for patient alignment.",
         "req" : "2",
         "entity" : "Plan",
         "name" : "Setup Device Label"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "name" : "Text Value",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0010,0020)" : {
         "name" : "Patient ID",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Primary hospital identification number or code for the patient.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(300a,00b0)[<0>](300a,0420)[<1>](300a,0421)" : {
         "module" : "RT Beams",
         "req" : "1",
         "desc" : "User or machine supplied identifier for General Accessory.",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "General Accessory ID",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "RT Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series"
      },
      "(0008,0014)" : {
         "req" : "3",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Instance Creator UID",
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Requested Procedure Code Sequence"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0121)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "1C",
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
         "entity" : "Plan",
         "name" : "Beam Limiting Device Rotation Direction"
      },
      "(300a,0070)[<0>](300a,0072)" : {
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "module" : "RT Fraction Scheme",
         "req" : "3",
         "desc" : "The user defined description for the fraction group.",
         "entity" : "Plan",
         "name" : "Fraction Group Description"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,002d)" : {
         "req" : "3",
         "desc" : "Maximum permitted fraction (in percent) of Organ at Risk to receive more than the Organ at Risk Maximum Dose if Dose Reference Type (300A,0020) of referenced Dose Reference is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) of referenced Dose Reference is VOLUME.",
         "module" : "RT Fraction Scheme",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Organ at Risk Overdose Volume Fraction",
         "entity" : "Plan"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,029c)" : {
         "req" : "3",
         "desc" : [
            "Nominal Thickness of Source Applicator wall (mm). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.15.12"
               }
            },
            "."
         ],
         "module" : "RT Brachy Application Setups",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Source Applicator Wall Nominal Thickness",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
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
         "entity" : "Series",
         "name" : "Referenced SOP Sequence"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,00e1)" : {
         "module" : "RT Brachy Application Setups",
         "req" : "3",
         "desc" : "User-supplied identifier for material of Source Applicator wall. See Note.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "name" : "Material ID",
         "entity" : "Plan"
      },
      "(300a,0180)[<0>](300a,0183)" : {
         "name" : "Patient Setup Label",
         "entity" : "Plan",
         "module" : "RT Patient Setup",
         "desc" : "The user-defined label for the patient setup.",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(300a,0210)[<0>](300a,021b)" : {
         "module" : "RT Brachy Application Setups",
         "req" : "3",
         "desc" : "Identifier for the Source Model. Identifies the model, the source instance belongs to.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "name" : "Source Model ID",
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "module" : "RT Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0128)" : {
         "module" : "RT Beams",
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
         "req" : "2C",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Table Top Vertical Position",
         "entity" : "Plan"
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "entity" : "Plan",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45",
            "table_10-11"
         ],
         "module" : "RT General Plan",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,0291)" : {
         "name" : "Source Applicator ID",
         "entity" : "Plan",
         "module" : "RT Brachy Application Setups",
         "desc" : "User or machine supplied identifier for Source Applicator. Required if Source Applicator Number (300A,0290) is sent.",
         "req" : "2C",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ]
      },
      "(300a,0206)[<0>](0008,1090)" : {
         "module" : "RT Brachy Application Setups",
         "desc" : "Manufacturer's model name of the equipment that is to be used for treatment delivery.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "name" : "Manufacturer's Model Name",
         "entity" : "Plan"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02b0)[<2>](3006,0084)" : {
         "module" : "RT Brachy Application Setups",
         "req" : "2",
         "desc" : [
            "Uniquely identifies ROI representing the Channel Shield specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in Structure Set Module within RT Structure Set referenced by Referenced RT Structure Set Sequence (300C,0060) in RT General Plan Module. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.15.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Referenced ROI Number",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "usage" : "M",
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
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Rational Denominator Value"
      },
      "(300a,00b0)[<0>](300a,00b3)" : {
         "entity" : "Plan",
         "name" : "Primary Dosimeter Unit",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : [
            "Measurement unit of machine dosimeter.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.1"
                  }
               },
               "."
            ],
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1155)" : {
         "module" : "RT Patient Setup",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Plan"
      },
      "(0020,1040)" : {
         "name" : "Position Reference Indicator",
         "entity" : "Frame of Reference",
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
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-6"
         ]
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00ef)" : {
         "desc" : "User-supplied identifier for compensator tray.",
         "req" : "3",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Compensator Tray ID",
         "entity" : "Plan"
      },
      "(0012,0083)" : {
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
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Clinical Trial Use Sequence",
         "entity" : "Study"
      },
      "(4ffe,0001)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "3",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "MAC Parameters Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "name" : "Person's Address",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "Person's mailing address",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0100,0424)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "SOP Authorization Comment"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Series",
         "name" : "Issuer of Accession Number Sequence"
      },
      "(300a,0070)[<0>](300c,000a)[<1>](300a,00a2)" : {
         "entity" : "Plan",
         "name" : "Brachy Application Setup Dose Specification Point",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "req" : "3",
         "desc" : [
            "Coordinates (x,y,z) of point in the patient based coordinate system described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " at which Brachy Application Setup Dose (300A,00A4) is specified (mm)."
         ],
         "module" : "RT Fraction Scheme"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0142)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "1C",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.14.12"
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
         "entity" : "Plan",
         "name" : "Table Top Pitch Rotation Direction"
      },
      "(300a,0230)[<0>](300a,0260)[<1>](300a,026c)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "req" : "3",
         "desc" : [
            "Nominal Transmission through Brachy Accessory Device (between 0 and 1). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.15.12",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Brachy Accessory Device Nominal Transmission"
      },
      "(300a,00b0)[<0>](0008,0081)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "Mailing address of the institution where the equipment is located that is to be used for beam delivery.",
         "entity" : "Plan",
         "name" : "Institution Address"
      },
      "(0038,0064)" : {
         "name" : "Issuer of Service Episode ID Sequence",
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "req" : "3",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Contribution Description",
         "entity" : "Plan"
      },
      "(300a,0210)[<0>](300a,021a)" : {
         "req" : "3",
         "desc" : "Length of active Source (mm).",
         "module" : "RT Brachy Application Setups",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Active Source Length",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,00f6)" : {
         "entity" : "Plan",
         "name" : "Source to Block Tray Distance",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "2",
         "desc" : "Radiation Source to attachment edge of block tray assembly (mm)."
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
                     "el" : "para"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3"
      },
      "(300a,0070)[<0>](300a,008b)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "module" : "RT Fraction Scheme",
         "desc" : [
            "Indicates the meaning of Beam Dose (300A,0084).",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
         "entity" : "Plan",
         "name" : "Beam Dose Meaning"
      },
      "(300a,00b0)[<0>](300a,0420)[<1>](300a,0423)" : {
         "name" : "General Accessory Type",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "3",
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
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(300a,0010)[<0>](300a,0013)" : {
         "entity" : "Plan",
         "name" : "Dose Reference UID",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "A unique identifier for a Dose Reference that can be used to link the same entity across multiple RT Plan objects.",
         "module" : "RT Prescription"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02a4)" : {
         "entity" : "Plan",
         "name" : "Transfer Tube Length",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "req" : "2C",
         "desc" : "Length of Transfer Tube of current afterloading Channel (mm). Required if value Transfer Tube Number (300A,02A2) is non-null."
      },
      "(0008,0020)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "2",
         "desc" : "Date the Study started.",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Study Date"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "entity" : "Plan",
         "name" : "Modifying System"
      },
      "(300a,0230)[<0>](300a,0260)[<1>](300a,00e1)" : {
         "module" : "RT Brachy Application Setups",
         "desc" : "User-supplied identifier for material of Brachy Accessory Device. See Note.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "name" : "Material ID",
         "entity" : "Plan"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300c,0051)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) within Dose Reference Sequence (300A,0010) in RT Prescription Module.",
         "req" : "1",
         "module" : "RT Fraction Scheme",
         "entity" : "Plan",
         "name" : "Referenced Dose Reference Number"
      },
      "(300a,0010)[<0>](300a,0026)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "module" : "RT Prescription",
         "req" : "3",
         "desc" : "Prescribed dose (in Gy) to Dose Reference if Dose Reference Type (300A,0020) is TARGET.",
         "entity" : "Plan",
         "name" : "Target Prescription Dose"
      },
      "(0100,0426)" : {
         "name" : "Authorization Equipment Certification Number",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "entity" : "Plan",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         "entity" : "Patient",
         "name" : "Universal Entity ID"
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,00fc)" : {
         "desc" : "Identification number of the Block. The value of Block Number (300A,00FC) shall be unique within the Beam in which it is created.",
         "req" : "1",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Block Number",
         "entity" : "Plan"
      },
      "(300a,0010)[<0>](300a,002c)" : {
         "module" : "RT Prescription",
         "desc" : "Maximum dose (in Gy) to non-overdosed part of Dose Reference if Dose Reference Type (300A,0020) is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) is VOLUME.",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "name" : "Organ at Risk Maximum Dose",
         "entity" : "Plan"
      },
      "(0008,1080)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Admitting Diagnoses Description"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0196)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : "User-defined description of Fixation Device.",
         "entity" : "Plan",
         "name" : "Fixation Device Description"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02a2)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "req" : "2",
         "desc" : "Identification number of the Transfer Tube. The value of Transfer Tube Number (300A,02A2) shall be unique within the Channel in which it is created.",
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Transfer Tube Number"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0028)" : {
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "desc" : "Maximum permitted fraction (in percent) of Target to receive less than the Target Prescription Dose (300A,0027) if Dose Reference Type (300A,0020) of referenced Dose Reference is TARGET and Dose Reference Structure Type (300A,0014) of referenced Dose Reference is VOLUME.",
         "req" : "3",
         "module" : "RT Fraction Scheme",
         "entity" : "Plan",
         "name" : "Target Underdose Volume Fraction"
      },
      "(300a,00b0)[<0>](300c,0080)" : {
         "entity" : "Plan",
         "name" : "Referenced Dose Sequence",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : [
            "Related instances of RT Dose (for grids, isodose curves, and named/unnamed point doses).",
            "One or more items are permitted in this sequence."
         ]
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Referenced SOP Class UID"
      },
      "(300a,0210)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "desc" : "Sequence of Sources to be used within Application Setups. One or more items shall be included in this sequence.",
         "req" : "1",
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Source Sequence"
      },
      "(0008,0081)" : {
         "entity" : "Equipment",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "RT Series"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02d0)" : {
         "name" : "Brachy Control Point Sequence",
         "entity" : "Plan",
         "module" : "RT Brachy Application Setups",
         "req" : "1",
         "desc" : [
            "Sequence of machine configurations describing this Channel.",
            "Two or more items shall be included in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.15.7",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise."
      },
      "(300a,00b0)[<0>](300a,00b6)[<1>](300a,00be)" : {
         "name" : "Leaf Position Boundaries",
         "entity" : "Plan",
         "req" : "2C",
         "desc" : "Boundaries of beam limiting device (collimator) leaves (in mm) in IEC BEAM LIMITING DEVICE coordinate axis appropriate to RT Beam Limiting Device Type (300A,00B8), i.e., X-axis for MLCY, Y-axis for MLCX. Contains N+1 values, where N is the Number of Leaf/Jaw Pairs (300A,00BC), starting from Leaf (Element) Pair 1. Required if RT Beam Limiting Device Type (300A,00B8) is MLCX or MLCY. May be present otherwise. See Note 3.",
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Accession Number"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "entity" : "Plan",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(300a,0180)[<0>](300a,01a0)" : {
         "entity" : "Plan",
         "name" : "Shielding Device Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of Shielding Devices used in Patient Setup.",
            "One or more items are permitted in this sequence."
         ],
         "module" : "RT Patient Setup"
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "req" : "3",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0027)" : {
         "module" : "RT Fraction Scheme",
         "req" : "3",
         "desc" : "Maximum permitted dose (in Gy) to Dose Reference if Dose Reference Type (300A,0020) of referenced Dose Reference is TARGET.",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "name" : "Target Maximum Dose",
         "entity" : "Plan"
      },
      "(0010,1020)" : {
         "req" : "3",
         "desc" : "Length or size of the Patient, in meters.",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Size",
         "entity" : "Study"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,0110)" : {
         "module" : "RT Brachy Application Setups",
         "req" : "1",
         "desc" : "Number of control points in Channel. For an N-segment Channel there will be 2N (stepwise movement) or N+1 (continuous movement) control points.",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Number of Control Points",
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "name" : "Text Value"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "entity" : "Plan",
         "name" : "Referenced Instance Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Common Instance Reference"
      },
      "(0008,1040)" : {
         "entity" : "Equipment",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "module" : "General Equipment",
         "req" : "3",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located."
      },
      "(300a,00b0)[<0>](300a,00ca)[<1>](300a,00cc)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "req" : "3",
         "desc" : "User-specified device-specific parameters that describe how the imager will acquire the image.",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Imaging Device-Specific Acquisition Parameters"
      },
      "(300a,0010)[<0>](300a,0025)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "req" : "3",
         "desc" : "Minimum permitted dose (in Gy) to Dose Reference if Dose Reference Type (300A,0020) is TARGET.",
         "module" : "RT Prescription",
         "entity" : "Plan",
         "name" : "Target Minimum Dose"
      },
      "(300a,0040)[<0>](300a,0048)[<1>](300a,004a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-47"
         ],
         "module" : "RT Tolerance Tables",
         "req" : "1",
         "desc" : "Maximum permitted difference (in mm) between planned and delivered leaf (element) or jaw positions for current beam limiting device (collimator).",
         "entity" : "Plan",
         "name" : "Beam Limiting Device Position Tolerance"
      },
      "(300a,0230)[<0>](300a,0260)[<1>](300a,0262)" : {
         "entity" : "Plan",
         "name" : "Brachy Accessory Device Number",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "req" : "2",
         "desc" : "Identification number of the Brachy Accessory Device. The value of Brachy Accessory Device Number (300A,0262) shall be unique within the Application Setup in which it is created."
      },
      "(0010,0021)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID"
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "entity" : "Plan",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(300c,0060)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Plan",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT General Plan",
         "mod_tables" : [
            "table_C.8-45",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(300a,00b0)[<0>](300c,00b0)[<1>](3006,0084)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "1",
         "desc" : "Uniquely identifies ROI representing the Bolus specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in Structure Set Module within RT Structure Set in Referenced Structure Set Sequence (300C,0060) in RT General Plan Module.",
         "entity" : "Plan",
         "name" : "Referenced ROI Number"
      },
      "(300a,00b0)[<0>](3002,0050)[<1>](3002,0051)" : {
         "module" : "RT Beams",
         "req" : "1",
         "desc" : [
            "Describes whether the fluence shaping is the standard mode for the beam or an alternate.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Fluence Mode",
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
         "module" : "RT Series",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type",
         "entity" : "Series"
      },
      "(300a,0230)[<0>](300a,0260)[<1>](300a,0264)" : {
         "name" : "Brachy Accessory Device Type",
         "entity" : "Plan",
         "module" : "RT Brachy Application Setups",
         "desc" : [
            "Type of Brachy Accessory Device.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "SHIELD",
                     null
                  ],
                  [
                     "DILATATION",
                     null
                  ],
                  [
                     "MOLD",
                     null
                  ],
                  [
                     "PLAQUE",
                     null
                  ],
                  [
                     "FLAB",
                     null
                  ]
               ]
            }
         ],
         "req" : "1",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ]
      },
      "(0010,1021)" : {
         "module" : "Patient Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Patient's Size Code Sequence",
         "entity" : "Study"
      },
      "(0012,0030)" : {
         "req" : "2",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.4",
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
         "usage" : "U",
         "name" : "Clinical Trial Site ID",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "Plan",
         "name" : "Reason for the Attribute Modification",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
         "req" : "1"
      },
      "(0012,0082)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "req" : "3",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number"
      },
      "(0008,0050)" : {
         "name" : "Accession Number",
         "entity" : "Study",
         "req" : "2",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "entity" : "Study",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Study"
      },
      "(0008,001b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Plan",
         "name" : "Original Specialized SOP Class UID"
      },
      "(0010,0010)" : {
         "module" : "Patient",
         "desc" : "Patient's full name.",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Name",
         "entity" : "Patient"
      },
      "(300a,0210)[<0>](300a,022c)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "req" : "1",
         "desc" : "Reference date for Reference Air Kerma Rate (300A,022A) or Source Strength (300A,022B) of Isotope.",
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Source Strength Reference Date"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Identifier Type Code"
      },
      "(300a,0180)[<0>](300a,0401)" : {
         "name" : "Referenced Setup Image Sequence",
         "entity" : "Plan",
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : [
            "Sequence of setup verification images for this patient setup.",
            "One or more items are permitted in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.12.1.1"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(300a,00b0)[<0>](300a,00d0)" : {
         "name" : "Number of Wedges",
         "entity" : "Plan",
         "req" : "1",
         "desc" : "Number of wedges associated with current Beam.",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,008c)[<2>](300a,008d)" : {
         "entity" : "Plan",
         "name" : "Average Beam Dose Point Depth",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "module" : "RT Fraction Scheme",
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
         "req" : "2C"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9186)" : {
         "name" : "Respiratory Signal Source ID",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "Identifies the device providing the respiratory signal.",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0040,0251)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Time"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "entity" : "Plan",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3"
      },
      "(300a,0040)[<0>](300a,0048)" : {
         "mod_tables" : [
            "table_C.8-47"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Sequence of beam limiting device (collimator) tolerances. One or more items are permitted in this sequence.",
         "module" : "RT Tolerance Tables",
         "entity" : "Plan",
         "name" : "Beam Limiting Device Tolerance Sequence"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Universal Entity ID"
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00ec)" : {
         "name" : "Compensator Thickness Data",
         "entity" : "Plan",
         "module" : "RT Beams",
         "desc" : [
            [
               "A data stream of the pixel samples that comprise the compensator, expressed as thicknesses (in mm). The order of pixels sent is left to right, top to bottom, i.e., the upper left pixel is sent first followed by the remainder of the first row, followed by the first pixel of the 2nd row, then the remainder of the 2nd row and so on) when viewed from the radiation source. Required if Material ID (300A,00E1) is non-zero length. May be present if Material ID (300A,00E1) is zero length. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.9",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.10",
                     "xrefstyle" : "select: label"
                  }
               },
               " and ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.14.11"
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
                        "Compensator Thickness Data may not be properly encoded if Explicit VR transfer syntax is used and the VL of this attribute exceeds 65534 bytes."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0125)" : {
         "entity" : "Plan",
         "name" : "Table Top Eccentric Angle",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "req" : "1C",
         "desc" : "Table Top (non-isocentric) angle, i.e., orientation of IEC TABLE TOP ECCENTRIC coordinate system with respect to IEC PATIENT SUPPORT coordinate system (degrees). Required for first item of Control Point Sequence, or if Table Top Eccentric Angle changes during Beam.",
         "module" : "RT Beams"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence"
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00e7)" : {
         "entity" : "Plan",
         "name" : "Compensator Rows",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "desc" : "Number of rows in the compensator. A row is defined to be in the X direction of the IEC Beam Limiting Device Coordinate system.",
         "req" : "1"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0122)" : {
         "name" : "Patient Support Angle",
         "entity" : "Plan",
         "module" : "RT Beams",
         "desc" : "Patient Support angle, i.e., orientation of IEC PATIENT SUPPORT (turntable) coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees). Required for first item of Control Point Sequence, or if Patient Support Angle changes during Beam.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(300a,0180)[<0>](300a,01b4)" : {
         "desc" : [
            "Sequence of devices used for patient alignment in Patient Setup.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Setup Device Sequence",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,00d1)[<1>](300a,00d6)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "req" : "2",
         "desc" : "Nominal wedge factor under machine calibration conditions at the beam energy specified by the Nominal Beam Energy (300A,0114) of the first Control Point of the Control Point Sequence (300A,0111).",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Wedge Factor"
      },
      "(0010,1000)" : {
         "entity" : "Patient",
         "name" : "Other Patient IDs",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "desc" : "Other identification numbers or codes used to identify the patient."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Referenced Segment Number"
      },
      "(300a,00b0)[<0>](300a,0110)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "req" : "1",
         "desc" : "Number of control points in Beam.",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Number of Control Points"
      },
      "(300a,00b0)[<0>](300a,00d1)[<1>](300a,00d2)" : {
         "module" : "RT Beams",
         "req" : "1",
         "desc" : "Identification number of the Wedge. The value of Wedge Number (300A,00D2) shall be unique within the Beam in which it is created.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Wedge Number",
         "entity" : "Plan"
      },
      "(300a,0070)[<0>](300a,0078)" : {
         "name" : "Number of Fractions Planned",
         "entity" : "Plan",
         "module" : "RT Fraction Scheme",
         "req" : "2",
         "desc" : "Total number of treatments (Fractions) prescribed for current Fraction Group.",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence"
      },
      "(300a,0010)[<0>](300a,0012)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "desc" : "Identification number of the Dose Reference. The value of Dose Reference Number (300A,0012) shall be unique within the RT Plan in which it is created.",
         "req" : "1",
         "module" : "RT Prescription",
         "entity" : "Plan",
         "name" : "Dose Reference Number"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,008c)[<2>](300a,008e)" : {
         "module" : "RT Fraction Scheme",
         "desc" : [
            "The average radiological depth in mm (water-equivalent depth, taking tissue heterogeneity into account) in the patient along a ray from the source to the dose point specified by the Beam Dose Specification Point (300A,0082) from the current Beam Dose Verification Control Point to the next one.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.13.1.2"
                  },
                  "el" : "xref"
               }
            ],
            "Required for all but the last items in that sequence."
         ],
         "req" : "2C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Average Beam Dose Point Equivalent Depth",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,00c2)" : {
         "module" : "RT Beams",
         "desc" : "User-defined name for Beam. See Note 1.",
         "req" : "3",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Beam Name",
         "entity" : "Plan"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "entity" : "Study",
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1C",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "module" : "Clinical Trial Study"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02d0)[<2>](300c,0055)[<3>](300a,010c)" : {
         "module" : "RT Brachy Application Setups",
         "req" : "1",
         "desc" : [
            "Coefficient used to calculate cumulative dose contribution from this Source to the referenced Dose Reference at the current Control Point. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.15.11"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Cumulative Dose Reference Coefficient",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,0420)" : {
         "name" : "General Accessory Sequence",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : [
            "Introduces a Sequence of General Accessories associated with this Beam.",
            "One or more items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0022)" : {
         "module" : "RT Fraction Scheme",
         "desc" : "The dose (in Gy) that when reached or exceeded should cause some action to be taken.",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Delivery Warning Dose",
         "entity" : "Plan"
      },
      "(300a,0206)[<0>](300a,00b2)" : {
         "module" : "RT Brachy Application Setups",
         "desc" : "User-defined name identifying treatment machine to be used for treatment delivery.",
         "req" : "2",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Treatment Machine Name",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,0107)[<1>](300a,0431)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : [
            "Describes the applicator aperture geometry.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Plan",
         "name" : "Applicator Geometry Sequence"
      },
      "(300a,00b0)[<0>](300a,00e3)" : {
         "name" : "Compensator Sequence",
         "entity" : "Plan",
         "desc" : [
            "Sequence of treatment compensators.",
            "One or more items shall be included in this sequence.",
            "Required if Number of Compensators (300A,00E0) is non-zero."
         ],
         "req" : "1C",
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(0010,2202)" : {
         "entity" : "Patient",
         "name" : "Patient Species Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0008,0016)" : {
         "module" : "SOP Common",
         "req" : "1",
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
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "SOP Class UID",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,00d1)[<1>](300a,00da)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "Radiation source to wedge tray attachment edge distance (in mm) for current wedge.",
         "entity" : "Plan",
         "name" : "Source to Wedge Tray Distance"
      },
      "(300a,00b0)[<0>](300a,00b6)" : {
         "entity" : "Plan",
         "name" : "Beam Limiting Device Sequence",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "desc" : [
            "Sequence of beam limiting device (collimator) jaw or leaf (element) sets.",
            "One or more items shall be included in this sequence."
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Numeric Value"
      },
      "(300a,0070)[<0>](300c,000a)[<1>](300c,000c)" : {
         "req" : "1",
         "desc" : "Uniquely identifies Brachy Application Setup specified by Brachy Application Setup Number (300A,0234) within Brachy Application Setup Sequence (300A,0230) in RT Brachy Application Setups Module.",
         "module" : "RT Fraction Scheme",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "name" : "Referenced Brachy Application Setup Number",
         "entity" : "Plan"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300a,0010)[<0>](300a,0018)" : {
         "name" : "Dose Reference Point Coordinates",
         "entity" : "Plan",
         "module" : "RT Prescription",
         "desc" : [
            "Coordinates (x,y,z) of Reference Point in the patient based coordinate system described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.2.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " (mm). Required if Dose Reference Structure Type (300A,0014) is COORDINATES."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "entity" : "Series",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
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
      "(0008,1060)" : {
         "name" : "Name of Physician(s) Reading Study",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0010,0030)" : {
         "req" : "2",
         "desc" : "Birth date of the patient.",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date",
         "entity" : "Patient"
      },
      "(300a,0070)[<0>](300c,0080)[<1>](0008,1150)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Fraction Scheme",
         "entity" : "Plan",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0030)" : {
         "module" : "General Study",
         "desc" : "Time the Study started.",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Time",
         "entity" : "Study"
      },
      "(300a,000c)" : {
         "module" : "RT General Plan",
         "req" : "1",
         "desc" : [
            [
               "Describes whether RT Plan is based on patient or treatment device geometry. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.9.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            {
               "list" : [
                  [
                     "PATIENT",
                     "RT Structure Set exists"
                  ],
                  [
                     "TREATMENT_DEVICE",
                     "RT Structure Set does not exist"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.8-45"
         ],
         "usage" : "M",
         "name" : "RT Plan Geometry",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0130)" : {
         "entity" : "Plan",
         "name" : "Source to Surface Distance",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "Source to Patient Surface distance (mm)."
      },
      "(300a,00b0)[<0>](300c,006a)" : {
         "entity" : "Plan",
         "name" : "Referenced Patient Setup Number",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "req" : "3",
         "desc" : "Uniquely identifies Patient Setup to be used for current beam, specified by Patient Setup Number (300A,0182) within Patient Setup Sequence of RT Patient Setup Module.",
         "module" : "RT Beams"
      },
      "(0020,000e)" : {
         "name" : "Series Instance UID",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Unique identifier of the series.",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,0026)" : {
         "entity" : "Plan",
         "name" : "Target Prescription Dose",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Prescribed dose (in Gy) to Dose Reference if Dose Reference Type (300A,0020) of referenced Dose Reference is TARGET.",
         "module" : "RT Fraction Scheme"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1",
         "desc" : "Identification number of an animal within the registry.",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Breed Registration Number"
      },
      "(300e,0004)" : {
         "entity" : "Plan",
         "name" : "Review Date",
         "mod_tables" : [
            "table_C.8-52"
         ],
         "usage" : "U",
         "req" : "2C",
         "desc" : "Date on which object was reviewed. Required if Approval Status (300E,0002) is APPROVED or REJECTED.",
         "module" : "Approval"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "usage" : "M",
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
         "entity" : "Series",
         "name" : "Concept Code Sequence"
      },
      "(300a,00b0)[<0>](0008,1040)" : {
         "name" : "Institutional Department Name",
         "entity" : "Plan",
         "module" : "RT Beams",
         "desc" : "Department in the institution where the equipment is located that is to be used for beam delivery.",
         "req" : "3",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(0018,1000)" : {
         "name" : "Device Serial Number",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "req" : "3",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02b0)[<2>](300a,00e1)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "req" : "3",
         "desc" : "User-supplied identifier for material of Channel Shield. See Note.",
         "entity" : "Plan",
         "name" : "Material ID"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "name" : "Scheduled Procedure Step Description",
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "name" : "UID"
      },
      "(0012,0072)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "3",
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
         "module" : "Clinical Trial Series",
         "entity" : "Series",
         "name" : "Clinical Trial Series Description"
      },
      "(300a,0230)[<0>](300a,0260)[<1>](300a,0266)" : {
         "desc" : "User-defined name for Brachy Accessory Device.",
         "req" : "3",
         "module" : "RT Brachy Application Setups",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "name" : "Brachy Accessory Device Name",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300c,00a0)" : {
         "entity" : "Plan",
         "name" : "Referenced Tolerance Table Number",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "req" : "3",
         "desc" : "Uniquely identifies Tolerance Table specified by Tolerance Table Number (300A,0042) within Tolerance Table Sequence in RT Tolerance Tables Module. These tolerances are to be used for verification of treatment machine settings.",
         "module" : "RT Beams"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "module" : "RT Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Person Name",
         "entity" : "Series"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300a,008c)[<2>](300c,00f0)" : {
         "name" : "Referenced Control Point Index",
         "entity" : "Plan",
         "req" : "1C",
         "desc" : [
            "Uniquely identifies the Control Point specified by Control Point Index (300A,0112) within Beam referenced by Referenced Beam Number (300C,0006).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.13.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ],
            "Required, if the Referenced Cumulative Meterset corresponds to a Control Point in the Control Point Sequence (300A,0111)."
         ],
         "module" : "RT Fraction Scheme",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(300a,0180)[<0>](300a,01d2)" : {
         "entity" : "Plan",
         "name" : "Table Top Vertical Setup Displacement",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "Vertical Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., vertical offset between patient positioning performed using setup and treatment position.",
         "module" : "RT Patient Setup"
      },
      "(300a,00b0)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0433)" : {
         "name" : "Applicator Opening",
         "entity" : "Plan",
         "desc" : [
            "Opening (in mm) of the applicator's aperture in IEC BEAM LIMITING DEVICE coordinate system. In case of square-shaped applicator contains the length of the sides of the square. In case of circular-shaped applicators, contains the diameter of the circular aperture.",
            "Required if Applicator Aperture Shape (300A,0432) is SYM_SQUARE or SYM_CIRCULAR."
         ],
         "req" : "1C",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300c,0080)" : {
         "name" : "Referenced Dose Sequence",
         "entity" : "Plan",
         "module" : "RT Beams",
         "desc" : [
            "Sequence describing related instances of RT Dose (for grids, isodose curves, and named/unnamed point doses).",
            "One or more items shall be included in this sequence.",
            "Required if RT Dose is being sent, and Dose Summation Type (3004,000A) equals CONTROL_POINT."
         ],
         "req" : "1C",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(300a,0230)[<0>](300a,0280)[<1>](3006,0084)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "req" : "2C",
         "desc" : [
            "Uniquely identifies ROI representing the Source Applicator specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in Structure Set Module within RT Structure Set referenced by Referenced RT Structure Set Sequence (300C,0060) in RT General Plan Module. Required if Source Applicator Number (300A,0290) is sent. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.15.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Plan",
         "name" : "Referenced ROI Number"
      },
      "(300a,0070)[<0>](300c,0050)[<1>](300a,002c)" : {
         "entity" : "Plan",
         "name" : "Organ at Risk Maximum Dose",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "module" : "RT Fraction Scheme",
         "desc" : "Maximum dose (in Gy) to non-overdosed part of Dose Reference if Dose Reference Type (300A,0020) of referenced Dose Reference is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) of referenced Dose Reference is VOLUME.",
         "req" : "3"
      },
      "(300a,0230)[<0>](300a,0232)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "req" : "1",
         "desc" : [
            "Type of Application Setup.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "FLETCHER_SUIT",
                     null
                  ],
                  [
                     "DELCLOS",
                     null
                  ],
                  [
                     "BLOEDORN",
                     null
                  ],
                  [
                     "JOSLIN_FLYNN",
                     null
                  ],
                  [
                     "CHANDIGARH",
                     null
                  ],
                  [
                     "MANCHESTER",
                     null
                  ],
                  [
                     "HENSCHKE",
                     null
                  ],
                  [
                     "NASOPHARYNGEAL",
                     null
                  ],
                  [
                     "OESOPHAGEAL",
                     null
                  ],
                  [
                     "ENDOBRONCHIAL",
                     null
                  ],
                  [
                     "SYED_NEBLETT",
                     null
                  ],
                  [
                     "ENDORECTAL",
                     null
                  ],
                  [
                     "PERINEAL",
                     null
                  ]
               ]
            }
         ],
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Application Setup Type"
      },
      "(300a,0002)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "desc" : "User-defined label for treatment plan.",
         "req" : "1",
         "module" : "RT General Plan",
         "entity" : "Plan",
         "name" : "RT Plan Label"
      },
      "(300a,0070)[<0>](300c,000a)[<1>](300a,00a4)" : {
         "entity" : "Plan",
         "name" : "Brachy Application Setup Dose",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "req" : "3",
         "desc" : "Dose (in Gy) at Brachy Application Setup Dose Specification Point (300A,00A2) due to current Brachy Application Setup.",
         "module" : "RT Fraction Scheme"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "module" : "RT Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "entity" : "Series"
      },
      "(300a,00b0)[<0>](300a,00c4)" : {
         "name" : "Beam Type",
         "entity" : "Plan",
         "req" : "1",
         "desc" : [
            "Motion characteristic of Beam. See Note 5.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "STATIC",
                     "All Control Point Sequence (300A,0111) attributes remain unchanged between consecutive pairs of control points with changing Cumulative Meterset Weight (300A,0134)."
                  ],
                  [
                     "DYNAMIC",
                     "One or more Control Point Sequence (300A,0111) attributes change between one or more consecutive pairs of control points with changing Cumulative Meterset Weight (300A,0134)."
                  ]
               ]
            }
         ],
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02b0)[<2>](300a,02b3)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "req" : "2",
         "desc" : "User or machine supplied identifier for Channel Shield.",
         "entity" : "Plan",
         "name" : "Channel Shield ID"
      },
      "(0008,0096)[<0>](0008,0082)" : {
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
         "entity" : "Study",
         "name" : "Institution Code Sequence"
      },
      "(300a,00b0)[<0>](300a,00e0)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "1",
         "desc" : "Number of compensators associated with current Beam.",
         "entity" : "Plan",
         "name" : "Number of Compensators"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "module" : "RT Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "name" : "Value Type",
         "entity" : "Series",
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
         "req" : "1",
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01ba)" : {
         "name" : "Setup Device Description",
         "entity" : "Plan",
         "module" : "RT Patient Setup",
         "desc" : "User-defined description for Setup Device used for patient alignment.",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0192)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "entity" : "Plan",
         "name" : "Fixation Device Type"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Plan",
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "module" : "RT Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "DateTime",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "entity" : "Plan",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0199)" : {
         "name" : "Fixation Device Pitch Angle",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "The Fixation Device Pitch Angle, i.e., orientation of PITCHED FIXATION DEVICE coordinate system with respect to IEC PATIENT SUPPORT coordinate system (degrees). Pitching is the rotation around IEC PATIENT SUPPORT X-axis.",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(300a,00b0)[<0>](300a,00d1)[<1>](300a,00d3)" : {
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
                     "DYNAMIC",
                     "moving beam limiting device (collimator) jaw simulating wedge"
                  ],
                  [
                     "MOTORIZED",
                     "single wedge that can be removed from beam remotely"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Wedge Type",
         "entity" : "Plan"
      },
      "(300a,0230)[<0>](300a,0244)" : {
         "req" : "3",
         "desc" : "User-defined name for Template Device.",
         "module" : "RT Brachy Application Setups",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Template Name",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,0107)[<1>](300a,010a)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "desc" : "User-defined description for Applicator.",
         "req" : "3",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Applicator Description"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Time"
      },
      "(300a,00b0)[<0>](300a,00c6)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
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
               ]
            }
         ],
         "req" : "2",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Radiation Type"
      },
      "(0040,0280)" : {
         "entity" : "Series",
         "name" : "Comments on the Performed Procedure Step",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "module" : "RT Series"
      },
      "(0038,0014)" : {
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Admission ID Sequence",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "entity" : "Series",
         "name" : "Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "RT Series"
      },
      "(0100,0420)" : {
         "name" : "SOP Authorization DateTime",
         "entity" : "Plan",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0112)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "req" : "1",
         "desc" : "Index of current Control Point, starting at 0 for first Control Point.",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Control Point Index"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "entity" : "Series",
         "name" : "Floating Point Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
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
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,0106)" : {
         "module" : "RT Beams",
         "desc" : "A data stream of (x,y) pairs that comprise the block edge. The number of pairs shall be equal to Block Number of Points (300A,0104), and the vertices shall be interpreted as a closed polygon. Coordinates are projected onto the machine isocentric plane in the IEC BEAM LIMITING DEVICE coordinate system (mm). See Note 4.",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Block Data",
         "entity" : "Plan"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0198)" : {
         "name" : "Fixation Device Position",
         "entity" : "Plan",
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : "Position/Notch number of Fixation Device.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U"
      },
      "(0020,0011)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series",
         "req" : "2",
         "desc" : "A number that identifies this series.",
         "entity" : "Series",
         "name" : "Series Number"
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00e8)" : {
         "entity" : "Plan",
         "name" : "Compensator Columns",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "desc" : "Number of columns in the compensator. A column is defined to be in the Y direction of the IEC Beam Limiting Device Coordinate system.",
         "req" : "1",
         "module" : "RT Beams"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
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
         "req" : "1C"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "entity" : "Study",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "name" : "Date",
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "entity" : "Series",
         "name" : "UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "module" : "RT Series"
      },
      "(300c,0080)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "entity" : "Plan",
         "module" : "RT General Plan",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-45",
            "table_10-11"
         ]
      },
      "(300a,0180)[<0>](300a,0190)" : {
         "entity" : "Plan",
         "name" : "Fixation Device Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "req" : "3",
         "desc" : [
            "Sequence of Fixation Devices used in Patient Setup.",
            "One or more items are permitted in this sequence."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "req" : "1C",
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
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Patient"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "module" : "Patient",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,029e)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "module" : "RT Brachy Application Setups",
         "req" : "3",
         "desc" : [
            "Nominal Transmission through Source Applicator wall (between 0 and 1). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.15.12",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Plan",
         "name" : "Source Applicator Wall Nominal Transmission"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300c,000e)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "module" : "RT Brachy Application Setups",
         "desc" : "Uniquely identifies the referenced Source within Source Sequence (300A,0210) for current Application Setup.",
         "req" : "1",
         "entity" : "Plan",
         "name" : "Referenced Source Number"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "req" : "3",
         "module" : "Patient"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0114)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "Nominal Beam Energy at control point (MV/MeV).",
         "entity" : "Plan",
         "name" : "Nominal Beam Energy"
      },
      "(300a,0210)[<0>](300a,0222)" : {
         "mod_tables" : [
            "table_C.8-51"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "req" : "3",
         "desc" : [
            "Nominal thickness of wall of encapsulation (mm). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.15.12"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Source Encapsulation Nominal Thickness"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01d0)" : {
         "entity" : "Plan",
         "name" : "Setup Reference Description",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "User-defined description of Setup Reference used for patient alignment.",
         "module" : "RT Patient Setup"
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,00fe)" : {
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "User-defined name for block.",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Block Name",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0115)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "desc" : "Dose Rate to be set on treatment machine for segment beginning at current control point (e.g., MU/min).",
         "req" : "3",
         "entity" : "Plan",
         "name" : "Dose Rate Set"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "entity" : "Study",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,011e)" : {
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "req" : "1C",
         "desc" : "Gantry angle of radiation source, i.e., orientation of IEC GANTRY coordinate system with respect to IEC FIXED REFERENCE coordinate system (degrees). Required for first item of Control Point Sequence, or if Gantry Angle changes during Beam.",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Gantry Angle"
      },
      "(300a,0180)[<0>](300a,0182)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "req" : "1",
         "desc" : "Identification number of the Patient Setup. The value of Patient Setup Number (300A,0182) shall be unique within the RT Plan in which it is created.",
         "entity" : "Plan",
         "name" : "Patient Setup Number"
      },
      "(300a,00b0)[<0>](300a,0420)[<1>](300a,0422)" : {
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "User supplied description of General Accessory.",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "General Accessory Description",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300c,00b0)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "req" : "1C",
         "desc" : [
            "Sequence of boli associated with Beam. Required if Number of Boli (300A,00ED) is non-zero.",
            "One or more items shall be included in this sequence."
         ],
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Referenced Bolus Sequence"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0116)[<2>](300a,0118)" : {
         "module" : "RT Beams",
         "req" : "1",
         "desc" : [
            "Position of Wedge at current Control Point.",
            {
               "type" : "variablelist",
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
               ]
            }
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Wedge Position",
         "entity" : "Plan"
      },
      "(0008,103f)" : {
         "name" : "Series Description Code Sequence",
         "entity" : "Series",
         "module" : "RT Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "name" : "UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "name" : "UID",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "module" : "RT Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,0070)[<0>](300a,0071)" : {
         "name" : "Fraction Group Number",
         "entity" : "Plan",
         "module" : "RT Fraction Scheme",
         "req" : "1",
         "desc" : "Identification number of the Fraction Group. The value of Fraction Group Number (300A,0071) shall be unique within the RT Plan in which it is created.",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U"
      },
      "(0008,1090)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "name" : "Manufacturer's Model Name"
      },
      "(0008,001a)" : {
         "module" : "SOP Common",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Related General SOP Class UID",
         "entity" : "Plan"
      },
      "(0028,0303)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
                  "attrs" : {
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ],
         "entity" : "Plan",
         "name" : "Longitudinal Temporal Information Modified"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "name" : "Series Instance UID",
         "entity" : "Plan",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "req" : "1",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ]
      },
      "(300a,00b0)[<0>](300a,00ca)[<1>](300c,0007)" : {
         "desc" : "Uniquely identifies Reference Image to which planned verification image is related, specified by Reference Image Number (300A,00C8) within Referenced Reference Image Sequence (300C,0042).",
         "req" : "3",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Referenced Reference Image Number",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,0102)" : {
         "module" : "RT Beams",
         "desc" : [
            "Transmission through the block (between 0 and 1) at the beam energy specified by the Nominal Beam Energy (300A,0114) of the first Control Point of the Control Point Sequence (300A,0111). Required if Material ID (300A,00E1) is zero length. May be present if Material ID (300A,00E1) is non-zero length. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.14.4",
                  "xrefstyle" : "select: label"
               }
            },
            " and ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.14.11"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2C",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Block Transmission",
         "entity" : "Plan"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Rational Numerator Value"
      },
      "(300a,00b0)[<0>](300a,00c3)" : {
         "req" : "3",
         "desc" : "User-defined description for Beam. See Note 1.",
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Beam Description",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,011f)" : {
         "entity" : "Plan",
         "name" : "Gantry Rotation Direction",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "desc" : [
            [
               "Direction of Gantry Rotation when viewing gantry from isocenter, for segment following Control Point. Required for first item of Control Point Sequence, or if Gantry Rotation Direction changes during Beam. See ",
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
         "module" : "RT Beams"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9170)" : {
         "name" : "Respiratory Motion Compensation Technique",
         "entity" : "Plan",
         "req" : "1",
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
         "module" : "RT Patient Setup",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "entity" : "Plan",
         "name" : "Series Instance UID"
      },
      "(300a,0040)[<0>](300a,0053)" : {
         "req" : "3",
         "desc" : "Maximum permitted difference (in mm) between planned and delivered Table Top Lateral Position.",
         "module" : "RT Tolerance Tables",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-47"
         ],
         "name" : "Table Top Lateral Position Tolerance",
         "entity" : "Plan"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,0120)" : {
         "req" : "1C",
         "desc" : "Beam Limiting Device angle, i.e., orientation of IEC BEAM LIMITING DEVICE coordinate system with respect to IEC GANTRY coordinate system (degrees). Required for first item of Control Point Sequence, or if Beam Limiting Device Angle changes during Beam.",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Beam Limiting Device Angle",
         "entity" : "Plan"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "name" : "Institution Address"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300a,014a)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "desc" : [
            "Gantry Pitch Angle. i.e., the rotation of the IEC GANTRY coordinate system about the X-axis of the IEC GANTRY coordinate system (degrees). If used, must be present for first item of Control Point Sequence, or if used and Gantry Pitch Rotation Angle changes during Beam, must be present. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.25.6.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "3",
         "entity" : "Plan",
         "name" : "Gantry Pitch Angle"
      },
      "(300a,00b0)[<0>](300a,00f4)[<1>](300a,0104)" : {
         "req" : "2",
         "desc" : "Number of (x,y) pairs defining the block edge.",
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Block Number of Points",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,0107)[<1>](300a,0431)[<2>](300a,0432)" : {
         "entity" : "Plan",
         "name" : "Applicator Aperture Shape",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "1",
         "desc" : [
            "Aperture shape of the applicator.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
               ]
            }
         ]
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "entity" : "Plan",
         "req" : "1",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "Common Instance Reference",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "RT Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Text Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Floating Point Value",
         "entity" : "Series"
      },
      "(0010,1010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Age of the Patient.",
         "req" : "3",
         "entity" : "Study",
         "name" : "Patient's Age"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "module" : "SOP Common",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "entity" : "Plan"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02b0)" : {
         "desc" : [
            "Sequence of Channel Shields associated with current Channel.",
            "One or more items are permitted in this sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.15.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "3",
         "module" : "RT Brachy Application Setups",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "name" : "Channel Shield Sequence",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](300a,00d1)[<1>](300a,00d8)" : {
         "req" : "2",
         "desc" : "Orientation of wedge, i.e., orientation of IEC WEDGE FILTER coordinate system with respect to IEC BEAM LIMITING DEVICE coordinate system (degrees).",
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Wedge Orientation",
         "entity" : "Plan"
      },
      "(300a,00b0)[<0>](0008,0070)" : {
         "entity" : "Plan",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "req" : "3",
         "desc" : "Manufacturer of the equipment to be used for beam delivery.",
         "module" : "RT Beams"
      },
      "(0032,1034)" : {
         "name" : "Requesting Service Code Sequence",
         "entity" : "Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "entity" : "Plan",
         "req" : "1",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U"
      },
      "(300a,0230)[<0>](300a,0260)[<1>](3006,0084)" : {
         "name" : "Referenced ROI Number",
         "entity" : "Plan",
         "module" : "RT Brachy Application Setups",
         "req" : "2",
         "desc" : [
            "Uniquely identifies ROI representing the Brachy Accessory specified by ROI Number (3006,0022) in Structure Set ROI Sequence (3006,0020) in Structure Set Module within RT Structure Set referenced by Referenced RT Structure Set Sequence (300C,0060) in RT General Plan Module. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.15.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ]
      },
      "(300a,00b0)[<0>](300c,0042)[<1>](300c,0008)" : {
         "name" : "Start Cumulative Meterset Weight",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "Cumulative Meterset Weight within current Beam at which image acquisition starts.",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence"
      },
      "(0008,0201)" : {
         "entity" : "Plan",
         "name" : "Timezone Offset From UTC",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
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
                                 "el" : "para",
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
                     "el" : "orderedlist"
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
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "module" : "RT Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(300a,00b0)[<0>](300a,00ca)[<1>](3002,0032)" : {
         "entity" : "Plan",
         "name" : "Meterset Exposure",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "req" : "3",
         "desc" : "Meterset duration over which image is to be acquired, specified in Monitor units (MU) or minutes as defined by Primary Dosimeter Unit (300A,00B3)."
      },
      "(0008,1111)" : {
         "module" : "RT Series",
         "req" : "3",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "One or more items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M",
         "name" : "Referenced Performed Procedure Step Sequence",
         "entity" : "Series"
      },
      "(300a,00b0)[<0>](300a,00f0)" : {
         "name" : "Number of Blocks",
         "entity" : "Plan",
         "desc" : "Number of shielding blocks associated with Beam.",
         "req" : "1",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(300a,0230)[<0>](300a,0236)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "desc" : "User-defined name for Application Setup.",
         "req" : "3",
         "module" : "RT Brachy Application Setups",
         "entity" : "Plan",
         "name" : "Application Setup Name"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "module" : "RT Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Text Value",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
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
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "name" : "Requested Procedure ID"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,028c)" : {
         "entity" : "Plan",
         "name" : "Pulse Repetition Interval",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "module" : "RT Brachy Application Setups",
         "desc" : "Pulse repetition interval (sec) for current Channel. Required if Brachy Treatment Type (300A,0202) is PDR.",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "module" : "RT Series",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Person Name",
         "entity" : "Series"
      },
      "(300a,0040)[<0>](300a,0048)[<1>](300a,00b8)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-47"
         ],
         "module" : "RT Tolerance Tables",
         "req" : "1",
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
         "entity" : "Plan",
         "name" : "RT Beam Limiting Device Type"
      },
      "(300a,00b0)[<0>](300a,0111)[<1>](300c,0080)[<2>](0008,1150)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50",
            "table_10-11"
         ],
         "module" : "RT Beams",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Plan",
         "name" : "Referenced SOP Class UID"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Study",
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
         "req" : "1",
         "entity" : "Study",
         "name" : "Consent for Distribution Flag"
      },
      "(300a,000a)" : {
         "entity" : "Plan",
         "name" : "Plan Intent",
         "mod_tables" : [
            "table_C.8-45"
         ],
         "usage" : "M",
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
      "(0040,0275)[<0>](0008,1110)" : {
         "module" : "RT Series",
         "req" : "3",
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
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Referenced Study Sequence",
         "entity" : "Series"
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,00ea)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "module" : "RT Beams",
         "desc" : "The x and y coordinates of the upper left hand corner (first pixel transmitted) of the compensator, projected onto the machine isocentric plane in the IEC BEAM LIMITING DEVICE coordinate system (mm).",
         "req" : "1",
         "entity" : "Plan",
         "name" : "Compensator Position"
      },
      "(0010,2203)" : {
         "entity" : "Study",
         "name" : "Patient's Sex Neutered",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
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
         "req" : "2C"
      },
      "(0040,0253)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "req" : "3",
         "entity" : "Series",
         "name" : "Performed Procedure Step ID"
      },
      "(300a,0010)[<0>](300a,002b)" : {
         "entity" : "Plan",
         "name" : "Organ at Risk Limit Dose",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "module" : "RT Prescription",
         "req" : "3",
         "desc" : "Maximum permitted dose (in Gy) to any part of Dose Reference if Dose Reference Type (300A,0020) is ORGAN_AT_RISK and Dose Reference Structure Type (300A,0014) is VOLUME."
      },
      "(0008,0031)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series",
         "desc" : "Time the Series started.",
         "req" : "3",
         "entity" : "Series",
         "name" : "Series Time"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,00f9)" : {
         "entity" : "Plan",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "req" : "3",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "module" : "RT Patient Setup"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "name" : "Contribution DateTime",
         "entity" : "Plan",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,02e0)" : {
         "req" : "3",
         "desc" : [
            "Indicates presence or absence of geometrical divergence of the compensator.",
            {
               "list" : [
                  [
                     "PRESENT",
                     "the compensator is shaped according to the beam geometrical divergence."
                  ],
                  [
                     "ABSENT",
                     "the compensator is not shaped according to the beam geometrical divergence."
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Compensator Divergence",
         "entity" : "Plan"
      },
      "(300a,0230)[<0>](300a,0280)[<1>](300a,02b0)[<2>](300a,02b8)" : {
         "name" : "Channel Shield Nominal Thickness",
         "entity" : "Plan",
         "module" : "RT Brachy Application Setups",
         "desc" : [
            "Nominal Thickness of Channel Shield (mm). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.15.12"
               }
            },
            "."
         ],
         "req" : "3",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ]
      },
      "(300a,0070)[<0>](300a,007a)" : {
         "name" : "Repeat Fraction Cycle Length",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "Number of weeks needed to describe treatment pattern. See Note 2.",
         "module" : "RT Fraction Scheme",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-49"
         ]
      },
      "(0010,2160)" : {
         "name" : "Ethnic Group",
         "entity" : "Patient",
         "module" : "Patient",
         "desc" : "Ethnic group or race of the patient.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Modified Attributes Sequence",
         "entity" : "Plan"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
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
         "entity" : "Plan",
         "name" : "Software Versions"
      },
      "(0012,0071)" : {
         "req" : "3",
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
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series ID",
         "entity" : "Series"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a8)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "Position/Notch number of Shielding Device.",
         "req" : "3",
         "module" : "RT Patient Setup",
         "entity" : "Plan",
         "name" : "Shielding Device Position"
      },
      "(300a,0010)[<0>](300a,0022)" : {
         "entity" : "Plan",
         "name" : "Delivery Warning Dose",
         "mod_tables" : [
            "table_C.8-46"
         ],
         "usage" : "U",
         "module" : "RT Prescription",
         "req" : "3",
         "desc" : "The dose (in Gy) that when reached or exceeded should cause some action to be taken."
      },
      "(300a,0040)[<0>](300a,0051)" : {
         "name" : "Table Top Vertical Position Tolerance",
         "entity" : "Plan",
         "req" : "3",
         "desc" : "Maximum permitted difference (in mm) between planned and delivered Table Top Vertical Position.",
         "module" : "RT Tolerance Tables",
         "mod_tables" : [
            "table_C.8-47"
         ],
         "usage" : "U"
      },
      "(300a,00b0)[<0>](300a,00c0)" : {
         "desc" : "Identification number of the Beam. The value of Beam Number (300A,00C0) shall be unique within the RT Plan in which it is created. See Note 1.",
         "req" : "1",
         "module" : "RT Beams",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "name" : "Beam Number",
         "entity" : "Plan"
      },
      "(300a,0230)[<0>](300a,0260)[<1>](300a,026a)" : {
         "name" : "Brachy Accessory Device Nominal Thickness",
         "entity" : "Plan",
         "req" : "3",
         "desc" : [
            "Nominal thickness of Brachy Accessory Device (mm). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.15.12",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "RT Brachy Application Setups",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ]
      },
      "(300a,00b0)[<0>](300a,00e3)[<1>](300a,02e1)" : {
         "name" : "Compensator Mounting Position",
         "entity" : "Plan",
         "req" : "3",
         "desc" : [
            "Indicates on which side of the Compensator Tray the compensator is mounted.",
            {
               "list" : [
                  [
                     "PATIENT_SIDE",
                     "the compensator is mounted on the side of the Compensator Tray that is towards the patient."
                  ],
                  [
                     "SOURCE_SIDE",
                     "the compensator is mounted on the side of the Compensator Tray that is towards the radiation source."
                  ],
                  [
                     "DOUBLE_SIDED",
                     "the compensator has a shaped (i.e., non-flat) surface on both sides of the Compensator Tray."
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(300a,00b0)[<0>](300c,0080)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "entity" : "Plan",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "RT Beams",
         "mod_tables" : [
            "table_C.8-50",
            "table_10-11"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise."
      },
      "(300a,00b0)[<0>](300a,00d1)" : {
         "name" : "Wedge Sequence",
         "entity" : "Plan",
         "module" : "RT Beams",
         "req" : "1C",
         "desc" : "Sequence of treatment wedges. Required if Number of Wedges (300A,00D0) is non-zero. One or more items shall be included in this sequence.",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ]
      },
      "(0020,9172)" : {
         "name" : "Conversion Source Attributes Sequence",
         "entity" : "Plan",
         "req" : "1C",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "name" : "MAC ID Number",
         "entity" : "Plan",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(300a,00b0)[<0>](3002,0050)" : {
         "module" : "RT Beams",
         "req" : "3",
         "desc" : [
            "Sequence defining whether the primary fluence of the treatment beam uses a non-standard fluence-shaping.",
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-50"
         ],
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "name" : "Primary Fluence Mode Sequence",
         "entity" : "Plan"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "entity" : "Plan",
         "module" : "SOP Common",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(300a,0070)[<0>](300c,0004)[<1>](300c,0006)" : {
         "name" : "Referenced Beam Number",
         "entity" : "Plan",
         "req" : "1",
         "desc" : "Uniquely identifies Beam specified by Beam Number (300A,00C0) within Beam Sequence (300A,00B0) in RT Beams Module.",
         "module" : "RT Fraction Scheme",
         "mod_tables" : [
            "table_C.8-49"
         ],
         "usage" : "U"
      },
      "(0008,0090)" : {
         "entity" : "Study",
         "name" : "Referring Physician's Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "2",
         "desc" : "Name of the patient's referring physician",
         "module" : "General Study"
      },
      "(300a,00b0)[<0>](3002,0050)[<1>](3002,0052)" : {
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Beams (300A,0080) is greater than zero for one or more fraction groups. Shall not be present, if RT Brachy Application Setups module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-50"
         ],
         "desc" : [
            "Identifier for the specific fluence-shaping mode.",
            "Required if Fluence Mode (3002,0051) has value NON_STANDARD."
         ],
         "req" : "1C",
         "module" : "RT Beams",
         "entity" : "Plan",
         "name" : "Fluence Mode ID"
      },
      "(300a,0206)[<0>](0008,0070)" : {
         "entity" : "Plan",
         "name" : "Manufacturer",
         "usage" : "C - Required if RT Fraction Scheme Module exists and Number of Brachy Application Setups (300A,00A0) is greater than zero for one or more fraction groups. Shall not be present, if RT Beams module is present. May be present otherwise.",
         "mod_tables" : [
            "table_C.8-51"
         ],
         "req" : "3",
         "desc" : "Manufacturer of the equipment to be used for treatment delivery.",
         "module" : "RT Brachy Application Setups"
      },
      "(300a,0010)[<0>](300a,0028)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-46"
         ],
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
         ],
         "module" : "RT Prescription",
         "entity" : "Plan",
         "name" : "Target Underdose Volume Fraction"
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