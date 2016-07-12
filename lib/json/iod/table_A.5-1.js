var data = {
   "tags" : {
      "(0008,0117)" : {
         "entity" : "Image",
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
         ],
         "name" : "Context UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0008,010f)" : {
         "entity" : "Image",
         "name" : "Context Identifier",
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
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0054,0020)" : {
         "req" : "1C",
         "module" : "NM Multi-frame",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "desc" : [
            "An array that contains the detector number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Detector Vector (0054,0020). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for specialization."
         ],
         "name" : "Detector Vector",
         "entity" : "Image"
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0018,1063)" : {
         "name" : "Frame Time",
         "desc" : "Nominal time per individual frame in msec.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "req" : "1",
         "module" : "NM Multi-gated Acquisition"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1",
         "module" : "Specimen",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "entity" : "Image"
      },
      "(0054,0400)" : {
         "desc" : "User or equipment generated Image identifier.",
         "name" : "Image ID",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "module" : "NM Image",
         "req" : "3"
      },
      "(0008,2112)[<0>](0062,000b)" : {
         "entity" : "Image",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ]
      },
      "(0010,0033)" : {
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date in Alternative Calendar",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Patient"
      },
      "(0040,0245)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Time",
         "desc" : "Time on which the Performed Procedure Step started."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "entity" : "Patient",
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
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient"
      },
      " (0010,0027) " : {
         "entity" : "Patient",
         "desc" : [
            [
               "A sequence containing the identifiers and locations of the individual subjects whose data was acquired at the same time (as a group) and encoded in this composite instance. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1"
                  }
               },
               "."
            ],
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Group of Patients Identification Sequence",
         "req" : "\n                  3 ",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0008,2112)[<0>](0020,0020)" : {
         "module" : "General Image",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "desc" : [
            "The Patient Orientation values of the source image.",
            "Required if the value of Spatial Locations Preserved (0028,135A) is REORIENTED_ONLY."
         ],
         "name" : "Patient Orientation",
         "entity" : "Image"
      },
      "(0008,0015)" : {
         "name" : "Instance Coercion DateTime",
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            ")."
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0020,0200)" : {
         "module" : "Synchronization",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied",
         "entity" : "Frame of Reference",
         "name" : "Synchronization Frame of Reference UID",
         "desc" : [
            "UID of common synchronization environment. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.4.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
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
      "(0028,1055)" : {
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "VOI LUT",
         "desc" : "Free form explanation of the meaning of the Window Center and Width. Multiple values correspond to multiple Window Center and Width values.",
         "name" : "Window Center & Width Explanation",
         "entity" : "Image"
      },
      "(60xx,0051)" : {
         "entity" : "Image",
         "name" : "Image Frame Origin",
         "desc" : "Frame number of Multi-frame Image to which this overlay applies; frames are numbered from 1.",
         "module" : "Multi-frame Overlay",
         "req" : "3",
         "mod_tables" : [
            "table_C.9-3"
         ],
         "usage" : "U"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "entity" : "Series",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a040)" : {
         "module" : "Specimen",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "entity" : "Image",
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
         "name" : "Value Type"
      },
      "(0018,1130)" : {
         "entity" : "Image",
         "name" : "Table Height",
         "desc" : [
            "The height of the patient table in mm. The range and values of this element are determined by the manufacturer. Should not be included if Image Type (0008,0008), Value 3, is",
            "TOMO,GATED TOMO,RECON TOMO or RECON GATED TOMO."
         ],
         "mod_tables" : [
            "table_C.8-9"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "NM Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Name",
         "entity" : "Image"
      },
      "(0050,0010)" : {
         "desc" : [
            "A sequence of items describing devices used that may be visible in the image.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Device Sequence",
         "entity" : "Image",
         "module" : "Device",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U"
      },
      "(0028,0102)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "1",
            "module" : "Image Pixel",
            "desc" : [
               "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.5",
                     "targetdoc" : "PS3.5"
                  },
                  "el" : "olink"
               },
               " for further explanation."
            ],
            "name" : "High Bit",
            "entity" : "Image"
         },
         {
            "module" : "NM Image Pixel",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-6"
            ],
            "usage" : "M",
            "entity" : "Image",
            "name" : "High Bit",
            "desc" : "Most significant bit for pixel sample data. Each sample shall have the same high bit. Shall be one less than the value in Bits Stored (0028,0101)."
         }
      ],
      "(0040,0555)[<0>](0040,a168)" : {
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Coded Value.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Date (0040,A121), Time (0040,A122), Person Name (0040,A123), Text Value (0040,A160), and the pair of Numeric Value (0040,A30A) and Measurement Units Code Sequence (0040,08EA) are not present."
         ],
         "name" : "Concept Code Sequence",
         "entity" : "Image",
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "req" : "1C",
         "module" : "Acquisition Context"
      },
      "(0008,1120)" : {
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Referenced Patient Sequence",
         "entity" : "Patient"
      },
      "(0008,1070)" : {
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "name" : "Operators' Name",
         "entity" : "Series"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "entity" : "Study",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,1020)" : {
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
         "name" : "Software Versions",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Equipment"
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0018,1062)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "module" : "NM Multi-gated Acquisition",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Average duration of accepted beats, in msec.",
         "name" : "Nominal Interval"
      },
      "(0008,0050)" : {
         "entity" : "Study",
         "name" : "Accession Number",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "module" : "General Study",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
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
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1"
      },
      "(0040,0520)[<0>](0050,001b)" : {
         "name" : "Container Component ID",
         "desc" : "Manufacturer's identifier of the container component, e.g., Lot Number and/or Version.",
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "name" : "Station Name",
         "desc" : "User defined name identifying the machine that contributed to the composite instance."
      },
      "(0054,0022)[<0>](0018,1182)" : {
         "name" : "Focal Distance",
         "desc" : [
            "Focal distance, in mm. A value of 0 means infinite distance for parallel collimation. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.11.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further specialization."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M",
         "module" : "NM Detector",
         "req" : "2"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a168)" : {
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "entity" : "Image"
      },
      "(0010,2202)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient",
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
         "name" : "Patient Species Code Sequence"
      },
      "(0008,0021)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "desc" : "Date the Series started.",
         "name" : "Series Date"
      },
      "(0038,0060)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "module" : "Patient Study",
         "entity" : "Study",
         "name" : "Service Episode ID",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Reason for Requested Procedure Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "req" : "3"
      },
      "(0028,0106)" : {
         "module" : "Image Pixel",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "desc" : "The minimum actual pixel value encountered in this image.",
         "name" : "Smallest Image Pixel Value",
         "entity" : "Image"
      },
      "(0054,0062)[<0>](0018,1064)" : {
         "desc" : [
            "Description of type of framing performed.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.18.1.1.1"
                  }
               },
               " for description and Defined Terms."
            ]
         ],
         "name" : "Cardiac Framing Type",
         "entity" : "Image",
         "req" : "3",
         "module" : "NM Multi-gated Acquisition",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            [
               "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.1.3"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Study",
         "req" : "1C",
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0008,0053)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "name" : "Query/Retrieve View",
         "entity" : "Image"
      },
      "(0008,0033)" : {
         "entity" : "Image",
         "name" : "Content Time",
         "desc" : [
            "The time the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "2C",
         "module" : "General Image"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "name" : "Storage Media File-Set ID",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside.",
         "entity" : "Patient",
         "req" : "2",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0054,0032)[<0>](0054,0211)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "mod_tables" : [
            "table_C.8-14"
         ],
         "module" : "NM Phase",
         "req" : "1C",
         "desc" : "The number of entries in Trigger Vector (0054,0210) for this phase. Required if Trigger Vector (0054,0210) is present.",
         "name" : "Number of Triggers in Phase",
         "entity" : "Image"
      },
      "(0028,0100)" : [
         {
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.5",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.5"
                  },
                  "el" : "olink"
               },
               " for further explanation."
            ],
            "name" : "Bits Allocated",
            "entity" : "Image",
            "module" : "Image Pixel",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M"
         },
         {
            "desc" : [
               "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated.",
               {
                  "type" : "variablelist",
                  "title" : "Enumerated Values:",
                  "list" : [
                     [
                        "8",
                        null
                     ],
                     [
                        "16",
                        null
                     ]
                  ]
               }
            ],
            "name" : "Bits Allocated",
            "entity" : "Image",
            "req" : "1",
            "module" : "NM Image Pixel",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-6"
            ]
         }
      ],
      "(0008,0105)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "module" : "SOP Common",
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
         ],
         "name" : "Mapping Resource",
         "entity" : "Image"
      },
      "(0008,0022)" : {
         "req" : "3",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "name" : "Acquisition Date",
         "desc" : "The date the acquisition of data that resulted in this image started",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "req" : "1"
      },
      "(0008,1111)" : {
         "entity" : "Series",
         "name" : "Referenced Performed Procedure Step Sequence",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0020,1002)" : {
         "module" : "General Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "name" : "Images in Acquisition",
         "desc" : "Number of images that resulted from this acquisition of data"
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "Patient"
      },
      "(0028,0011)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "module" : "Image Pixel",
         "req" : "1",
         "entity" : "Image",
         "name" : "Columns",
         "desc" : "Number of columns in the image"
      },
      "(0050,0010)[<0>](0050,0020)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "module" : "Device",
         "req" : "3",
         "name" : "Device Description",
         "desc" : "Further description in free form text describing the device.",
         "entity" : "Image"
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "1",
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0088,0200)[<0>](0028,0010)" : {
         "req" : "1",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Image",
         "name" : "Rows",
         "desc" : "Number of rows in the image."
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0008,1110)" : {
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
         "name" : "Referenced Study Sequence",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Study"
      },
      "(0020,0011)" : {
         "module" : "General Series",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Number",
         "desc" : "A number that identifies this Series.",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0031)" : {
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Image"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0018,1242)" : {
         "name" : "Actual Frame Duration",
         "desc" : [
            "Elapsed time for data acquisition in msec. Required if Image Type (0008,0008) Value 3 is:",
            "WHOLE BODY or",
            "STATIC.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.4.9.1.4"
                  },
                  "el" : "xref"
               },
               " for specialization."
            ]
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "NM Image"
      },
      "(0012,0060)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U",
         "req" : "2",
         "module" : "Clinical Trial Series",
         "entity" : "Series",
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
         "name" : "Clinical Trial Coordinating Center Name"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "entity" : "Image",
         "name" : "Certified Timestamp",
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
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1160)" : [
         {
            "name" : "Referenced Frame Number",
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
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "module" : "General Image",
            "req" : "1C"
         },
         {
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "module" : "NM Image",
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
            "entity" : "Image"
         }
      ],
      "(0040,0275)[<0>](0040,1002)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "name" : "Reason for the Requested Procedure",
         "desc" : "Reason for requesting this procedure.",
         "entity" : "Series"
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "entity" : "Image",
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "name" : "Identifying Private Elements",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0054,0051)" : {
         "module" : "NM Multi-frame",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "name" : "Number of Rotations",
         "desc" : [
            "Number of rotations. Required if Image Type (0008,0008), Value 3 is",
            "TOMO,GATED TOMO,RECON TOMO, or RECON GATED TOMO.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.4.8.1.5",
                     "xrefstyle" : "select: label"
                  }
               },
               " for specialization."
            ]
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0020,9172)" : {
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "name" : "Conversion Source Attributes Sequence",
         "entity" : "Image",
         "req" : "1C",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0018,0026)[<0>](0018,0028)" : {
         "entity" : "Image",
         "name" : "Intervention Drug Dose",
         "desc" : "Intervention drug dose, in mg.",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "module" : "NM Isotope",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "entity" : "Patient",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "name" : "Retrieve URL",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "1"
      },
      "(0054,0022)[<0>](0018,1181)" : {
         "desc" : [
            "Collimator type.",
            {
               "list" : [
                  [
                     "PARA",
                     "Parallel (default)"
                  ],
                  [
                     "PINH",
                     "Pinhole"
                  ],
                  [
                     "FANB",
                     "Fan-beam"
                  ],
                  [
                     "CONE",
                     "Cone-beam"
                  ],
                  [
                     "SLNT",
                     "Slant hole"
                  ],
                  [
                     "ASTG",
                     "Astigmatic"
                  ],
                  [
                     "DIVG",
                     "Diverging"
                  ],
                  [
                     "NONE",
                     "No collimator"
                  ],
                  [
                     "UNKN",
                     "Unknown"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "name" : "Collimator Type",
         "entity" : "Image",
         "module" : "NM Detector",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "name" : "Type of Patient ID",
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
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
         "entity" : "Patient",
         "req" : "1",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0610)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence of Items identifying the process steps used to prepare the specimen for image acquisition. This includes description of all processing necessary to interpret the image.",
            "Zero or more Items shall be included in this Sequence.",
            "This Sequence includes description of the specimen sampling step from an ancestor specimen, potentially back to the original part collection.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.3"
                  }
               },
               "."
            ]
         ],
         "name" : "Specimen Preparation Sequence",
         "req" : "2",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
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
         "name" : "Identifier Type Code",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(60xx,1301)" : {
         "req" : "3",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Number of pixels in ROI area.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.9.2.1.2"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "ROI Area"
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
         "name" : "Clinical Trial Series ID",
         "entity" : "Series",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "3",
         "module" : "Clinical Trial Series"
      },
      "(0008,1115)" : {
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "name" : "Referenced Series Sequence",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0018,1061)" : [
         {
            "name" : "Trigger Source or Type",
            "desc" : "Specifies equipment ID of trigger source and/or type of trigger",
            "entity" : "Frame of Reference",
            "module" : "Synchronization",
            "req" : "3",
            "usage" : "C - Required if time synchronization was applied",
            "mod_tables" : [
               "table_C.7-7"
            ]
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9"
            ],
            "req" : "3",
            "module" : "NM Image",
            "entity" : "Image",
            "desc" : [
               "Text indicating trigger source.",
               {
                  "title" : "Defined Terms:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "EKG",
                        null
                     ]
                  ]
               }
            ],
            "name" : "Trigger Source or Type"
         }
      ],
      "(0008,1062)[<0>](0008,0081)" : {
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "entity" : "Study"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0018,0026)[<0>](0018,0029)" : {
         "req" : "3",
         "module" : "NM Isotope",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "entity" : "Image",
         "name" : "Intervention Drug Code Sequence",
         "desc" : [
            "Sequence that identifies the intervention drug name.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure Code Sequence",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0008,0096)" : {
         "entity" : "Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "name" : "Referring Physician Identification Sequence",
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Image",
         "name" : "Contribution Description",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0054,0016)[<0>](0054,0304)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the radiopharmaceutical.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Radiopharmaceutical Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "module" : "NM Isotope"
      },
      "(0008,009d)" : {
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "entity" : "Study",
         "name" : "Consulting Physician Identification Sequence",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ]
      },
      "(0028,0034)" : {
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.7"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Pixel Aspect Ratio",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
         "module" : "Image Pixel"
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "name" : "SOP Instance UID",
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
      "(0040,0560)[<0>](0040,059a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "req" : "3",
         "name" : "Specimen Type Code Sequence",
         "desc" : [
            "Specimen Type.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0028,0030)" : {
         "entity" : "Image",
         "desc" : [
            "Physical distance in the patient between the center of each pixel, specified by a numeric pair - adjacent row spacing (delimiter) adjacent column spacing, in mm. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_10.7.1.3"
               }
            },
            " for further explanation of the value order."
         ],
         "name" : "Pixel Spacing",
         "module" : "NM Image Pixel",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-6"
         ]
      },
      "(0012,0063)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "De-identification Method",
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
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 },
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
                                 "el" : "para",
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
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       },
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ]
                                    },
                                    "."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 }
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
      "(0008,1052)[<0>](0040,1104)" : {
         "entity" : "Series",
         "name" : "Person's Telecom Information",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
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
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Issuer of Patient ID",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a160)" : [
         {
            "entity" : "Image",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "name" : "Text Value",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "module" : "General Image"
         },
         {
            "entity" : "Image",
            "name" : "Text Value",
            "desc" : [
               "Text value for this name-value Item.",
               "Required if Value Type (0040,A040) is TEXT."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "module" : "NM Image"
         }
      ],
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "module" : "Common Instance Reference",
         "req" : "1"
      },
      "(0040,9096)[<0>](0040,9220)" : [
         {
            "module" : "General Image",
            "req" : "3",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M",
            "entity" : "Image",
            "name" : "Quantity Definition Sequence",
            "desc" : [
               "A list of name-value pairs that describe the characteristics of the quantity represented by the Real World Value.",
               "One or more Items are permitted in this Sequence.",
               "One of the items shall have a concept name that specifies the quantified characteristic, though it is not required that (G-C1C6, SRT, \"Quantity\") be used if there is a reason to use a similar concept from a different coding scheme. Other items may be concept modifiers, such as (G-C036, SRT, \"Measurement Method\"). The order of the items is not significant."
            ]
         },
         {
            "module" : "NM Image",
            "req" : "3",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "entity" : "Image",
            "desc" : [
               "A list of name-value pairs that describe the characteristics of the quantity represented by the Real World Value.",
               "One or more Items are permitted in this Sequence.",
               "One of the items shall have a concept name that specifies the quantified characteristic, though it is not required that (G-C1C6, SRT, \"Quantity\") be used if there is a reason to use a similar concept from a different coding scheme. Other items may be concept modifiers, such as (G-C036, SRT, \"Measurement Method\"). The order of the items is not significant."
            ],
            "name" : "Quantity Definition Sequence"
         }
      ],
      "(0040,0244)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Date",
         "desc" : "Date on which the Performed Procedure Step started."
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "entity" : "Study",
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Consent for Distribution Flag",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "1",
         "module" : "Clinical Trial Study"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "entity" : "Patient",
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
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "Patient"
      },
      "(0040,0520)[<0>](0050,0012)" : {
         "name" : "Container Component Type Code Sequence",
         "desc" : [
            "Type of container component.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "req" : "1"
      },
      "(0008,2112)[<0>](0028,135a)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Image",
         "desc" : [
            "The extent to which the spatial locations of all pixels are preserved during the processing of the source image that resulted in the current image",
            {
               "list" : [
                  [
                     "YES",
                     null
                  ],
                  [
                     "NO",
                     null
                  ],
                  [
                     "REORIENTED_ONLY",
                     "A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees"
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
                                 "attrs" : {
                                    "xml:id" : "para_9976bb70-d841-4a34-8a47-46d189fa9d3b"
                                 },
                                 "content" : [
                                    "This applies not only to images with a known relationship to a 3D space, but also to projection images. For example, a projection radiograph such as a mammogram that is processed by a point image processing operation such as contrast enhancement, or a smoothing or edge enhancing convolution, would have a value of YES for this attribute. A projection radiograph that had been magnified or warped geometrically would have a value of NO for this attribute. A projection radiograph that has been flipped, and/or rotated by a multiple of 90 degrees, such that transformation of pixel locations is possible by comparison of the values of Patient Orientation (0020,0020) would have a value of REORIENTED_ONLY. This attribute is typically of importance in relating images with Presentation Intent Type (0008,0068) values of FOR PROCESSING and FOR PRESENTATION."
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
                                    "When the value of this attribute is NO, it is not possible to locate on the current image any pixel coordinates that are referenced relative to the source image, such as for example, might be required for rendering CAD findings derived from a referenced FOR PROCESSING image on the current FOR PRESENTATION image."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2b403f53-2ffb-4cb8-b283-851c3cce981b"
                                 }
                              },
                              "\n                      "
                           ]
                        },
                        "\n                    "
                     ],
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Spatial Locations Preserved",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U - See ",
         "req" : "1C",
         "module" : "Acquisition Context",
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a time.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_090933a4-c189-49db-a4ad-938040f8b381"
                     },
                     "content" : [
                        "The purpose or role of the time value could be specified in Concept Name Code Sequence (0040,A043)."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a time. Shall not be present otherwise."
         ],
         "name" : "Time"
      },
      "(0010,1010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Patient Study",
         "desc" : "Age of the Patient.",
         "name" : "Patient's Age",
         "entity" : "Study"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "name" : "Manufacturer",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "name" : "Series Instance UID",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0040,9096)[<0>](0040,9213)" : [
         {
            "name" : "Double Float Real World Value Last Value Mapped",
            "desc" : [
               "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
               "Required if Real World Value Last Value Mapped (0040,9211) is absent.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                        ",
                     {
                        "attrs" : {
                           "xml:id" : "para_bd1c2eab-c851-45bf-8577-5108abbb24a6"
                        },
                        "content" : [
                           "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                        ],
                        "el" : "para"
                     },
                     "\n                      "
                  ]
               }
            ],
            "entity" : "Image",
            "req" : "1C",
            "module" : "General Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ]
         },
         {
            "req" : "1C",
            "module" : "NM Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "entity" : "Image",
            "name" : "Double Float Real World Value Last Value Mapped",
            "desc" : [
               "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
               "Required if Real World Value Last Value Mapped (0040,9211) is absent.",
               {
                  "content" : [
                     "\n                        ",
                     {
                        "attrs" : {
                           "xml:id" : "para_bd1c2eab-c851-45bf-8577-5108abbb24a6"
                        },
                        "content" : [
                           "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                        ],
                        "el" : "para"
                     },
                     "\n                      "
                  ],
                  "el" : "note"
               }
            ]
         }
      ],
      "(0008,0008)" : [
         {
            "module" : "General Image",
            "req" : "3",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "entity" : "Image",
            "name" : "Image Type",
            "desc" : [
               "Image identification characteristics. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.2"
                  }
               },
               " for Defined Terms and further explanation."
            ]
         },
         {
            "req" : "1",
            "module" : "NM Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9"
            ],
            "name" : "Image Type",
            "desc" : [
               "Image identification characteristics. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.4.9.1.1"
                  }
               },
               " for specialization."
            ],
            "entity" : "Image"
         }
      ],
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "entity" : "Image",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(60xx,0010)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "req" : "1",
         "module" : "Overlay Plane",
         "desc" : "Number of Rows in Overlay.",
         "name" : "Overlay Rows",
         "entity" : "Image"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "entity" : "Image",
         "name" : "Modifying System",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a162)" : [
         {
            "entity" : "Image",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "name" : "Rational Numerator Value",
            "req" : "1C",
            "module" : "General Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ]
         },
         {
            "entity" : "Image",
            "name" : "Rational Numerator Value",
            "desc" : [
               "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "module" : "NM Image"
         }
      ],
      "(0018,0026)[<0>](0018,0034)" : {
         "desc" : "Name of intervention drug.",
         "name" : "Intervention Drug Name",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "module" : "NM Isotope"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "1C",
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID"
      },
      "(0054,0031)" : {
         "desc" : [
            "Number of phases. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Phase Vector (0054,0030). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "name" : "Number of Phases",
         "entity" : "Image",
         "module" : "NM Multi-frame",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-7"
         ]
      },
      "(0054,0501)" : {
         "mod_tables" : [
            "table_C.8-9"
         ],
         "usage" : "M",
         "module" : "NM Image",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "The anatomical order in which the slices were acquired.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "FEET_TO_HEAD",
                     "Slices closest to the patient's feet were acquired first."
                  ],
                  [
                     "HEAD_TO_FEET",
                     "Slices closest to the patient's head were acquired first."
                  ]
               ]
            }
         ],
         "name" : "Scan Progression Direction"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(60xx,0100)" : {
         "req" : "1",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Number of Bits Allocated in the Overlay.",
            "The value of this Attribute shall be 1.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_2b05bb80-945d-4097-b644-005f3c89d1f9"
                     },
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute was required to be the same as Bits Allocated (0028,0100). This usage has been retired. See ",
                        {
                           "el" : "link",
                           "content" : [
                              "PS3.3-2004"
                           ],
                           "attrs" : {
                              "xl:href" : "ftp://medical.nema.org/MEDICAL/Dicom/2004/printed/04_03pu3.pdf"
                           }
                        },
                        "."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "name" : "Overlay Bits Allocated"
      },
      "(0054,0016)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "2",
         "module" : "NM Isotope",
         "name" : "Radiopharmaceutical Information Sequence",
         "desc" : [
            "Sequence of Items that describe isotope information.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "SOP Common"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "module" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0554)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "1",
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Specimen UID",
         "desc" : [
            "Unique Identifier for Specimen. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.22.1.2"
               }
            },
            "."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a162)" : {
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "name" : "Date",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(0008,1164)[<0>](0008,1161)" : {
         "module" : "Frame Extraction",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "entity" : "Image",
         "name" : "Simple Frame List",
         "desc" : [
            "A list of Frames that were extracted in the form of a simple list.",
            "Required if object extraction is based on a Frame Level Retrieve using the Simple Frame List (0008,1161) attribute.",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0008,1140)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3",
         "entity" : "Image",
         "name" : "Referenced Image Sequence",
         "desc" : [
            "Other images significantly related to this image (e.g., post-localizer CT image or Mammographic biopsy or partial view images).",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value"
      },
      "(60xx,0015)" : {
         "desc" : "Number of Frames in Overlay. Required if Overlay data contains multiple frames.",
         "name" : "Number of Frames in Overlay",
         "entity" : "Image",
         "module" : "Multi-frame Overlay",
         "req" : "1",
         "mod_tables" : [
            "table_C.9-3"
         ],
         "usage" : "U"
      },
      "(0008,0031)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "module" : "General Series",
         "name" : "Series Time",
         "desc" : "Time the Series started.",
         "entity" : "Series"
      },
      "(0008,1040)" : {
         "module" : "General Equipment",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "name" : "Institutional Department Name"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0018,1100)" : {
         "entity" : "Image",
         "name" : "Reconstruction Diameter",
         "desc" : "Diameter, in mm, of the region from within which the data was used in creating the reconstruction of the image. Data may exist outside this region and portions of the patient may exist outside this region.",
         "module" : "NM Reconstruction",
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-15"
         ]
      },
      "(0088,0200)[<0>](0028,0004)" : {
         "req" : "1",
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "desc" : [
            "Specifies the intended interpretation of the pixel data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Photometric Interpretation"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value"
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "entity" : "Series",
         "desc" : "Instance UID of Study to which the related Series belongs",
         "name" : "Study Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "1",
         "module" : "General Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Image"
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Name",
         "module" : "General Equipment",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0054,0052)[<0>](0018,1242)" : {
         "entity" : "Image",
         "desc" : "Nominal acquisition time per angular position, in msec.",
         "name" : "Actual Frame Duration",
         "module" : "NM TOMO Acquisition",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO"
      },
      "(0008,114a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "module" : "General Image",
         "desc" : [
            "Non-image composite SOP Instances that are significantly related to this Image, including waveforms that may or may not be temporally synchronized with this image.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Referenced Instance Sequence",
         "entity" : "Image"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "req" : "1",
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Study"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "General Image"
      },
      "(0028,1050)" : {
         "entity" : "Image",
         "name" : "Window Center",
         "desc" : [
            "Window Center for display.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if VOI LUT Sequence (0028,3010) is not present. May be present otherwise."
         ],
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "req" : "1C",
         "module" : "VOI LUT"
      },
      "(0054,0032)[<0>](0054,0036)" : {
         "module" : "NM Phase",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-14"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "desc" : "Time paused between the last frame of the previous phase and the first frame of this phase, in msec.",
         "name" : "Phase Delay",
         "entity" : "Image"
      },
      "(60xx,1303)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "req" : "3",
         "entity" : "Image",
         "name" : "ROI Standard Deviation",
         "desc" : [
            "ROI standard deviation.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.9.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ]
      },
      "(0008,1164)[<0>](0008,1162)" : {
         "desc" : [
            "A list of Frames that were extracted in the form of one or more triplets",
            "Required if object extraction is based on a Frame Level Retrieve using the Calculated Frame List (0008,1162) attribute.",
            [
               "See ",
               {
                  "attrs" : {
                     "targetptr" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.4"
                  },
                  "el" : "olink"
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ],
         "name" : "Calculated Frame List",
         "entity" : "Image",
         "module" : "Frame Extraction",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "name" : "Encrypted Content Transfer Syntax UID",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1250)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "req" : "3",
         "module" : "General Series",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
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
                                 "attrs" : {
                                    "xml:id" : "para_41b72cf3-4134-44f1-84cc-a28f024a1c1c"
                                 },
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
                                 "content" : [
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
                                 },
                                 "content" : [
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
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
                     },
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Related Series Sequence",
         "entity" : "Series"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "entity" : "Image",
         "name" : "Deidentification Action Sequence",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,2299)" : {
         "entity" : "Patient",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "name" : "Responsible Organization",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "2C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "module" : "General Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series"
      },
      "(0008,2112)[<0>](0008,1160)" : {
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
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
         "name" : "Referenced Frame Number",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "req" : "1C",
         "module" : "General Image"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "entity" : "Image",
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
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "name" : "Repository Unique ID"
      },
      "(0010,2297)" : {
         "name" : "Responsible Person",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2C",
         "module" : "Patient"
      },
      "(0100,0424)" : {
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "name" : "SOP Authorization Comment",
         "entity" : "Image"
      },
      "(0012,0062)" : {
         "entity" : "Patient",
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
         "name" : "Patient Identity Removed",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3"
      },
      "(0040,0520)[<0>](0008,1090)" : {
         "entity" : "Image",
         "desc" : "Manufacturer's model name of the container component.",
         "name" : "Manufacturer's Model Name",
         "module" : "Specimen",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "module" : "General Series",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Value Type",
         "entity" : "Series"
      },
      "(0010,2160)" : {
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Ethnic Group",
         "desc" : "Ethnic group or race of the patient."
      },
      "(0054,0016)[<0>](0054,0300)" : {
         "module" : "NM Isotope",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the radionuclide.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Radionuclide Code Sequence"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study",
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "desc" : "The coding scheme full common name",
         "name" : "Coding Scheme Name"
      },
      "(0054,0016)[<0>](0018,1074)" : {
         "req" : "3",
         "module" : "NM Isotope",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Total amount of radionuclide injected. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.10.1.7",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "name" : "Radionuclide Total Dose"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Nonidentifying Private Elements",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "entity" : "Image",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "name" : "Digital Signature UID",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0600)" : {
         "desc" : "Short textual specimen description (may include ancestor specimen descriptions).",
         "name" : "Specimen Short Description",
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
      },
      "(0040,0555)[<0>](0040,a30a)" : {
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "req" : "1C",
         "name" : "Numeric Value",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a set of one or more numeric values.",
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a set of one or more integers or real numbers. Shall not be present otherwise."
         ],
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a121)" : {
         "entity" : "Image",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "module" : "Specimen",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series",
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
         "name" : "Referenced Frame Number",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "WADO-RS Retrieval Sequence",
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
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient"
      },
      "(0040,0513)" : {
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Issuer of the Container Identifier Sequence",
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "req" : "2"
      },
      "(0040,9096)" : [
         {
            "module" : "General Image",
            "req" : "3",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "entity" : "Image",
            "name" : "Real World Value Mapping Sequence",
            "desc" : [
               "The mapping of stored values to associated Real World values.",
               "One or more Items are permitted in this Sequence."
            ]
         },
         {
            "module" : "NM Image",
            "req" : "3",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9"
            ],
            "entity" : "Image",
            "desc" : [
               "The mapping of stored values to associated real world values.",
               "One or more Items are permitted in this Sequence."
            ],
            "name" : "Real World Value Mapping Sequence"
         }
      ],
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
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
         "entity" : "Patient"
      },
      "(0040,0555)" : {
         "entity" : "Image",
         "desc" : [
            "A sequence of Items that describes the conditions present during the acquisition of the data of the SOP Instance.",
            "Zero or more Items shall be included in this Sequence."
         ],
         "name" : "Acquisition Context Sequence",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U - See ",
         "req" : "2",
         "module" : "Acquisition Context"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "req" : "1C",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Image"
      },
      "(0038,0014)" : {
         "name" : "Issuer of Admission ID Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0054,0072)" : {
         "desc" : [
            "Sequence of Items that describe Time Slot Information. Required if the Frame Increment Pointer (0028,0009) contains the Tag for Time Slot Vector (0054,0070).",
            "Zero or more Items shall be included in this Sequence.",
            "The number of items shall be equal to Number of Time Slots (0054,0071). The first item corresponds to frames with value of 1 in the Time Slot Vector (0054,0070), the second item with value 2, etc."
         ],
         "name" : "Time Slot Information Sequence",
         "entity" : "Image",
         "module" : "NM Multi-gated Acquisition",
         "req" : "2C",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ]
      },
      "(0054,0022)" : {
         "req" : "2",
         "module" : "NM Detector",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M",
         "name" : "Detector Information Sequence",
         "desc" : [
            "Sequence of Items that describe the detectors used.",
            "Zero or more Items shall be included in this Sequence.",
            "The number of items shall be equal to Number of Detectors (0054,0021). The first item corresponds to frames with value of 1 in Detector Vector (0054,0020), the second item with value 2, etc."
         ],
         "entity" : "Image"
      },
      "(0054,0032)[<0>](0054,0033)" : {
         "req" : "1",
         "module" : "NM Phase",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "mod_tables" : [
            "table_C.8-14"
         ],
         "entity" : "Image",
         "name" : "Number of Frames in Phase",
         "desc" : "Number of frames in this phase."
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a163)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "module" : "General Image",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "name" : "Rational Denominator Value",
            "entity" : "Image"
         },
         {
            "module" : "NM Image",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "desc" : [
               "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Rational Numerator Value (0040,A162) is present."
            ],
            "name" : "Rational Denominator Value",
            "entity" : "Image"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence"
      },
      "(0028,1101)" : {
         "entity" : "Image",
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Red Palette Color Lookup Table Descriptor",
         "req" : "1C",
         "module" : "Image Pixel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a160)" : {
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "entity" : "Image",
         "name" : "MAC ID Number",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA)."
      },
      "(0040,0250)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Date",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
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
         "name" : "Related General SOP Class UID",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "entity" : "Image",
         "name" : "Signature",
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "req" : "1",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "entity" : "Patient",
         "name" : "Patient Position",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.2"
                  }
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "name" : "Home Community ID",
         "entity" : "Patient"
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0018,1084)" : {
         "req" : "3",
         "module" : "NM Multi-gated Acquisition",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "entity" : "Image",
         "desc" : "Number of heartbeats that fall outside Low R-R (0018,1081) and High R-R Value (0018,1082), and do not contribute gamma events to this R-R Interval. However, they may contribute gamma events to other R-R Intervals.",
         "name" : "Intervals Rejected"
      },
      "(0054,0011)" : {
         "entity" : "Image",
         "desc" : [
            "Number of energy window groupings. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.2"
               }
            },
            " for specialization."
         ],
         "name" : "Number of Energy Windows",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "NM Multi-frame"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C",
         "entity" : "Patient",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "name" : "Referenced Segment Number"
      },
      "(0010,1020)" : {
         "module" : "Patient Study",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Length or size of the Patient, in meters.",
         "name" : "Patient's Size",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a30a)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "module" : "Specimen",
         "req" : "1C",
         "entity" : "Image",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,0118)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The unique identifier of the Mapping Resource",
         "name" : "Mapping Resource UID"
      },
      "(0010,0218)" : {
         "entity" : "Patient",
         "desc" : [
            "Additional information about the strain of the patient that is not encoded in the formal nomenclature used in Strain Description (0010,0212). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Strain Additional Information",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0008,0032)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Image",
         "name" : "Acquisition Time",
         "desc" : "The time the acquisition of data that resulted in this image started",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
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
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient",
         "name" : "Identifier Type Code",
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
                     ],
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
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "module" : "Common Instance Reference",
         "req" : "1",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "name" : "Requested Procedure ID",
         "desc" : [
            "Identifier that identifies the Requested Procedure in the Imaging Service Request.",
            "Required if procedure was scheduled. May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     },
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,001e)" : {
         "desc" : "Container component text description.",
         "name" : "Container Component Description",
         "entity" : "Image",
         "req" : "3",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0010,0212)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Strain Description",
         "desc" : [
            "The strain of the patient. See ",
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
      "(0028,0107)" : {
         "name" : "Largest Image Pixel Value",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "entity" : "Image",
         "req" : "3",
         "module" : "Image Pixel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0054,0016)[<0>](0018,1070)" : {
         "entity" : "Image",
         "name" : "Radiopharmaceutical Route",
         "desc" : "Route of injection.",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "NM Isotope"
      },
      "(0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "2",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
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
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Patient ID",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9216)" : [
         {
            "req" : "1C",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M",
            "entity" : "Image",
            "name" : "Real World Value First Value Mapped",
            "desc" : [
               "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
               "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value First Value Mapped (0040,9214) is absent.",
               {
                  "content" : [
                     "\n                        ",
                     {
                        "attrs" : {
                           "xml:id" : "para_3508a2ea-51f7-4d12-952b-1fec9e9b31a0"
                        },
                        "content" : [
                           "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                        ],
                        "el" : "para"
                     },
                     "\n                      "
                  ],
                  "el" : "note"
               },
               [
                  "See ",
                  {
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.16.2.11.1"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ]
         },
         {
            "name" : "Real World Value First Value Mapped",
            "desc" : [
               "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
               "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value First Value Mapped (0040,9214) is absent.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                        ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_3508a2ea-51f7-4d12-952b-1fec9e9b31a0"
                        },
                        "content" : [
                           "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                        ]
                     },
                     "\n                      "
                  ]
               },
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.16.2.11.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "entity" : "Image",
            "module" : "NM Image",
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ]
         }
      ],
      "(0008,0300)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "name" : "Private Data Element Characteristics Sequence",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances using WADO-WS or IHE XDS transactions.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Retrieval via WADO-URI is addressed by the WADO Retrieval Sequence (0040,E023). Retrieval via WADO-RS is addressed by the WADO-RS Retrieval Sequence (0040,E025)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_020ae95c-9384-49b9-b460-e9625c404c63"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and WADO Retrieval Sequence (0040,E023) are not present. May be present otherwise.",
            "This sequence shall only identify repositories known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "XDS Retrieval Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "entity" : "Image"
      },
      "(0018,1201)" : {
         "name" : "Time of Last Calibration",
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
         "entity" : "Equipment",
         "module" : "General Equipment",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "entity" : "Series"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "module" : "Patient Study",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "module" : "Patient",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Strain Stock Number",
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
         ]
      },
      "(0018,0071)" : {
         "desc" : [
            "Description of how the data collection was stopped.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "CNTS",
                     "counts"
                  ],
                  [
                     "DENS",
                     "density"
                  ],
                  [
                     "MANU",
                     "manual"
                  ],
                  [
                     "OVFL",
                     "data overflow"
                  ],
                  [
                     "TIME",
                     "time"
                  ],
                  [
                     "TRIG",
                     "physiological trigger"
                  ]
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.4.9.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for specialization."
            ]
         ],
         "name" : "Acquisition Termination Condition",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "usage" : "M",
         "module" : "NM Image",
         "req" : "3"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "name" : "WADO Retrieval Sequence",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "el" : "note",
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     },
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,1012)" : {
         "name" : "Reason For Performed Procedure Code Sequence",
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
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Specimen",
         "req" : "1",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "entity" : "Series",
         "name" : "Referenced Frame Number",
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
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0054,0012)[<0>](0054,0018)" : {
         "req" : "3",
         "module" : "NM Isotope",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "entity" : "Image",
         "name" : "Energy Window Name",
         "desc" : "A user defined name that describes this Energy Window."
      },
      "(0008,1030)" : {
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "name" : "Study Description",
         "desc" : "Institution-generated description or classification of the Study (component) performed."
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0083)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "3",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial or research use of the composite instances within this Study.",
            "One or more Items are permitted in this Sequence.",
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
            ]
         ],
         "name" : "Consent for Clinical Trial Use Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0088,0200)[<0>](0028,2000)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Image",
         "entity" : "Image",
         "desc" : [
            "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.15.1.1"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "When present, defines the color space of color Pixel Data (7FE0,0010) values, and the output of Palette Color Lookup Table Data (0028,1201-1203).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "ICC Profile"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a122)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "module" : "General Image",
            "req" : "1C",
            "entity" : "Image",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "name" : "Time"
         },
         {
            "req" : "1C",
            "module" : "NM Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "entity" : "Image",
            "desc" : [
               "Time value for this name-value Item.",
               "Required if Value Type (0040,A040) is TIME."
            ],
            "name" : "Time"
         }
      ],
      "(0008,1200)[<0>](0020,000d)" : {
         "module" : "Common Instance Reference",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "entity" : "Image",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier of the Study containing the referenced Instances."
      },
      "(0008,1164)[<0>](0008,1167)" : {
         "module" : "Frame Extraction",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "name" : "Multi-frame Source SOP Instance UID",
         "desc" : "SOP Instance from which the frames of this instance are extracted.",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0088,0200)[<0>](0028,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "1C",
         "entity" : "Image",
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup Table Data (0028,1203). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Blue Palette Color Lookup Table Descriptor"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
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
      "(0008,0023)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "2C",
         "desc" : [
            "The date the image pixel data creation started.",
            "Required if image is part of a series in which the images are temporally related. May be present otherwise.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_2b4fa91b-7c4d-401b-9468-fa7b06ccb55a"
                     },
                     "content" : [
                        "This Attribute was formerly known as Image Date."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Content Date",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a122)" : {
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a121)" : {
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a date.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The purpose or role of the date value could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_3da4ec3b-efe8-40a6-9c46-16bb7c8b79ca"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a date. Shall not be present otherwise."
         ],
         "name" : "Date",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U - See ",
         "module" : "Acquisition Context",
         "req" : "1C"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)" : {
         "name" : "Specimen Preparation Step Content Item Sequence",
         "desc" : [
            "Sequence of Content Items identifying the processes used in one preparation step to prepare the specimen for image acquisition.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "req" : "1"
      },
      "(0050,0010)[<0>](0050,0018)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Device",
         "name" : "Device Volume",
         "desc" : [
            "Volume of device in ml. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image"
      },
      "(0054,0032)[<0>](0018,1242)" : {
         "name" : "Actual Frame Duration",
         "desc" : "Nominal time of acquisition per individual frame, in msec.",
         "entity" : "Image",
         "module" : "NM Phase",
         "req" : "1",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "mod_tables" : [
            "table_C.8-14"
         ]
      },
      "(0054,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "req" : "1C",
         "module" : "NM Multi-frame",
         "entity" : "Image",
         "name" : "Energy Window Vector",
         "desc" : [
            "An array that contains the energy window number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Energy Window Vector (0054,0010). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for specialization."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1160)" : {
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Referenced Frame Number",
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
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Image"
      },
      "(0008,0122)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "name" : "Mapping Resource Name",
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
      "(0018,1131)" : {
         "entity" : "Image",
         "name" : "Table Traverse",
         "desc" : [
            "Location of the patient table (or gantry relative to the table) in mm. The range and values of this element are determined by the manufacturer. Should not be included if Image Type (0008,0008), Value 3, is",
            "TOMO,GATED TOMO,RECON TOMO or RECON GATED TOMO."
         ],
         "mod_tables" : [
            "table_C.8-9"
         ],
         "usage" : "M",
         "module" : "NM Image",
         "req" : "3"
      },
      "(0010,2298)" : {
         "req" : "1C",
         "module" : "Patient",
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
         "entity" : "Patient"
      },
      "(0054,0062)" : {
         "entity" : "Image",
         "name" : "Gated Information Sequence",
         "desc" : [
            "Sequence of Items that describe R-R intervals. Each gated interval is defined by an upper and lower range of heart beat durations. Required if the Frame Increment Pointer (0028,0009) contains the Tag for R-R Interval Vector (0054,0060).",
            "Zero or more Items shall be included in this Sequence.",
            "The number of items shall be equal to Number of R-R Intervals (0054,0061). The first item corresponds to frames with value of 1 in the R-R Interval Vector (0054,0060), the second item with value 2, etc."
         ],
         "req" : "2C",
         "module" : "NM Multi-gated Acquisition",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO"
      },
      "(0020,1041)" : {
         "desc" : [
            "Relative position of the image plane expressed in mm.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.2.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "name" : "Slice Location",
         "entity" : "Image",
         "req" : "3",
         "module" : "NM Reconstruction",
         "mod_tables" : [
            "table_C.8-15"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is RECON TOMO or RECON GATED TOMO"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Device Serial Number",
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "entity" : "Image"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "name" : "Instance Creator UID"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a123)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "module" : "General Image",
            "entity" : "Image",
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "name" : "Person Name"
         },
         {
            "desc" : [
               "Person name value for this name-value Item.",
               "Required if Value Type (0040,A040) is PNAME."
            ],
            "name" : "Person Name",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "module" : "NM Image"
         }
      ],
      "(0010,0026)[<0>](0010,0020)" : {
         "req" : "1",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "entity" : "Patient",
         "name" : "Patient ID",
         "desc" : "Primary identifier for the group of subjects."
      },
      "(0040,0513)[<0>](0040,0032)" : {
         "entity" : "Image",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0062,000b)" : [
         {
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "name" : "Referenced Segment Number",
            "entity" : "Image",
            "module" : "General Image",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M"
         },
         {
            "req" : "1C",
            "module" : "NM Image",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "entity" : "Image",
            "desc" : [
               "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
               "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
            ],
            "name" : "Referenced Segment Number"
         }
      ],
      "(0088,0200)[<0>](0028,0106)" : {
         "req" : "3",
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "name" : "Smallest Image Pixel Value",
         "desc" : "The minimum actual pixel value encountered in this image.",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms."
            ]
         ],
         "entity" : "Patient"
      },
      "(0028,0004)" : [
         {
            "desc" : [
               "Specifies the intended interpretation of the pixel data. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.2"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "name" : "Photometric Interpretation",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "module" : "Image Pixel",
            "req" : "1"
         },
         {
            "entity" : "Image",
            "name" : "Photometric Interpretation",
            "desc" : [
               "Specifies the intended interpretation of the pixel data. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.4.7.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "req" : "1",
            "module" : "NM Image Pixel",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-6"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
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
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0054,0100)" : {
         "entity" : "Image",
         "desc" : [
            "An array that contains the time slice number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Time Slice Vector (0054,0100). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.10",
                  "xrefstyle" : "select: label"
               }
            },
            " for specialization."
         ],
         "name" : "Time Slice Vector",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "req" : "1C",
         "module" : "NM Multi-frame"
      },
      "(0020,0060)" : {
         "module" : "General Series",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Laterality",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) or Measurement Laterality (0024,0113) are not sent.",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     },
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "1",
         "entity" : "Patient",
         "desc" : [
            "An identifier for the patient.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
                     },
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
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Patient ID"
      },
      "(0050,0010)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Device",
         "entity" : "Image",
         "name" : "Manufacturer's Model Name",
         "desc" : "Manufacturer's model name of the device"
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "1",
         "desc" : "Primary identifier for an individual subject.",
         "name" : "Patient ID",
         "entity" : "Patient"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "entity" : "Image",
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
                     "attrs" : {
                        "xml:id" : "para_398d64f0-0a7e-4cfe-b480-b482ee2cb7a7"
                     },
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ]
                  },
                  "\n"
               ]
            }
         ],
         "name" : "Retrieve URI",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "General Series"
      },
      "(0054,0410)" : {
         "name" : "Patient Orientation Code Sequence",
         "desc" : [
            [
               "Sequence that describes the orientation of the patient with respect to gravity. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.4.6.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Zero or one Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "module" : "NM/PET Patient Orientation",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-5"
         ],
         "usage" : "M"
      },
      "(0018,1800)" : {
         "entity" : "Frame of Reference",
         "desc" : [
            "Acquisition DateTime (0008,002A) synchronized with external time reference.",
            {
               "list" : [
                  [
                     "Y",
                     null
                  ],
                  [
                     "N",
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
                     "linkend" : "sect_C.7.4.2.1.4"
                  }
               }
            ]
         ],
         "name" : "Acquisition Time Synchronized",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied",
         "req" : "1",
         "module" : "Synchronization"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "desc" : "Instance UID of Related Series",
         "name" : "Series Instance UID",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0040,0555)[<0>](0040,a136)" : {
         "module" : "Acquisition Context",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U - See ",
         "name" : "Referenced Frame Numbers",
         "desc" : [
            "References one or more frames in a Multi-frame SOP Instance. The first frame shall be denoted as frame number one.",
            "Required if this SOP Instance is a Multi-frame SOP Instance and the values in this Sequence item do not apply to all frames."
         ],
         "entity" : "Image"
      },
      "(0020,4000)" : {
         "desc" : "User-defined comments about the image",
         "name" : "Image Comments",
         "entity" : "Image",
         "module" : "General Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "3",
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers"
      },
      "(0088,0200)[<0>](0028,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "req" : "1C",
         "module" : "General Image",
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Green Palette Color Lookup Table Descriptor",
         "entity" : "Image"
      },
      "(0018,1803)" : {
         "req" : "3",
         "module" : "Synchronization",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "usage" : "C - Required if time synchronization was applied",
         "entity" : "Frame of Reference",
         "desc" : [
            "IP Address of NTP, SNTP, or PTP time source. IPv4 addresses shall be in dotted decimal (e.g., 192.168.1.1). The IPv6 addresses shall be in colon separated hexadecimal (e.g., 12:34:56:78:9a:bc:de:f0).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_852085c5-e683-4675-bc1e-585f902895a5"
                     },
                     "content" : [
                        "Identity of this value in two instances acquired contemporaneously implies a common time base. The NTP Source Address might not persist over time."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "NTP Source Address"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a124)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ]
      },
      "(0008,0013)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Time",
         "entity" : "Image"
      },
      "(0054,0016)[<0>](0018,1072)" : {
         "entity" : "Image",
         "desc" : [
            "Time of start of injection. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.10.1.5"
               }
            },
            " for further explanation."
         ],
         "name" : "Radiopharmaceutical Start Time",
         "module" : "NM Isotope",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ]
      },
      "(0054,0022)[<0>](0054,0220)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "req" : "3",
         "module" : "NM Detector",
         "entity" : "Image",
         "name" : "View Code Sequence",
         "desc" : [
            "Sequence that describes the projection of the anatomic region of interest on the image receptor.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0040,0560)[<0>](0040,0562)" : {
         "module" : "Specimen",
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "The name or code for the institution that has assigned the Specimen Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Issuer of the Specimen Identifier Sequence"
      },
      "(0008,2218)" : {
         "desc" : [
            "Sequence that identifies the anatomic region of interest in this Instance (i.e., external anatomy, surface anatomy, or general region of the body).",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Anatomic Region Sequence",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9",
            "table_10-7"
         ],
         "req" : "3",
         "module" : "NM Image"
      },
      "(0012,0082)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "3",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "entity" : "Patient"
      },
      "(0088,0200)[<0>](0028,0002)" : {
         "name" : "Samples per Pixel",
         "desc" : [
            "Number of samples (planes) in this image. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.1"
               }
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "General Image"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "1C"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "entity" : "Image",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3"
      },
      "(0054,0061)" : {
         "desc" : [
            "Number of R-R intervals. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for R-R Interval Vector (0054,0060). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "name" : "Number of R-R Intervals",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "NM Multi-frame"
      },
      "(0054,0071)" : {
         "req" : "1C",
         "module" : "NM Multi-frame",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "desc" : [
            "Number of time slots. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Time Slot Vector (0054,0070). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.7"
               }
            },
            " for specialization."
         ],
         "name" : "Number of Time Slots",
         "entity" : "Image"
      },
      "(0020,0012)" : {
         "desc" : "A number identifying the single continuous gathering of data over a period of time that resulted in this image.",
         "name" : "Acquisition Number",
         "entity" : "Image",
         "module" : "General Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0008,1052)" : {
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "name" : "Performing Physician Identification Sequence",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
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
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,1100)" : {
         "name" : "Referenced Patient Photo Sequence",
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
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3"
      },
      "(0054,0080)" : {
         "name" : "Slice Vector",
         "desc" : [
            "An array that contains the spatial slice number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Slice Vector (0054,0080). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.8"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "entity" : "Image",
         "module" : "NM Multi-frame",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-7"
         ]
      },
      "(0018,1300)" : {
         "entity" : "Image",
         "desc" : "The speed of the camera motion over the body in mm/sec. Required if Image Type (0008,0008) Value 3 contains the value WHOLE BODY.",
         "name" : "Scan Velocity",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "usage" : "M",
         "req" : "2C",
         "module" : "NM Image"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Modified Attributes Sequence"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Study"
      },
      "(0040,0515)[<0>](0040,0512)" : {
         "desc" : "The identifier for the container that contains the specimen(s) being imaged.",
         "name" : "Container Identifier",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "1",
         "module" : "Specimen"
      },
      "(0018,0026)[<0>](0054,0302)" : {
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "module" : "NM Isotope",
         "req" : "3",
         "entity" : "Image",
         "name" : "Administration Route Code Sequence",
         "desc" : [
            "Sequence that identifies the administration route for the intervention drug.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "name" : "Storage Media File-Set UID",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "1"
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
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
                     "attrs" : {
                        "xml:id" : "para_579dc3f3-c3f6-407b-b4bc-d6197e7cc820"
                     },
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ],
                     "el" : "para"
                  },
                  "\n"
               ]
            }
         ],
         "name" : "Retrieve URI",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "req" : "1"
      },
      "(0088,0200)[<0>](0028,0100)" : {
         "name" : "Bits Allocated",
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. Bits Allocated (0028,0100) shall be either 1, or a multiple of 8. See ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.5",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.5"
               },
               "el" : "olink"
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "General Image"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a168)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "module" : "General Image",
            "entity" : "Image",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "name" : "Concept Code Sequence"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "module" : "NM Image",
            "name" : "Concept Code Sequence",
            "desc" : [
               "Coded concept value of this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is CODE."
            ],
            "entity" : "Image"
         }
      ],
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "req" : "3"
      },
      "(0054,0022)[<0>](0018,1145)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "module" : "NM Detector",
         "req" : "3",
         "entity" : "Image",
         "name" : "Center of Rotation Offset",
         "desc" : [
            "Average center of rotation offset of Nuclear Medicine detector in mm. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.4.11.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ]
      },
      "(0040,0555)[<0>](0040,08ea)" : {
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Numeric Value (0040,A30A) is sent. Shall not be present otherwise."
         ],
         "name" : "Measurement Units Code Sequence",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U - See ",
         "req" : "1C",
         "module" : "Acquisition Context"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a162)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value"
      },
      "(0008,1140)[<0>](0040,a170)" : {
         "entity" : "Image",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "req" : "3",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,08ea)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "module" : "General Image",
            "req" : "1C",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "name" : "Measurement Units Code Sequence",
            "entity" : "Image"
         },
         {
            "req" : "1C",
            "module" : "NM Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "entity" : "Image",
            "desc" : [
               "Units of measurement for a numeric value in this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "name" : "Measurement Units Code Sequence"
         }
      ],
      "(0040,0275)[<0>](0040,0009)" : {
         "entity" : "Series",
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
         "name" : "Scheduled Procedure Step ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0400,0561)[<0>](0400,0565)" : {
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
         "name" : "Reason for the Attribute Modification",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0050,0010)[<0>](0050,0019)" : {
         "module" : "Device",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "name" : "Inter-Marker Distance",
         "desc" : [
            "Distance in mm between markers on calibrated device. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.12.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image"
      },
      "(0008,3010)" : {
         "entity" : "Image",
         "name" : "Irradiation Event UID",
         "desc" : [
            "Unique identification of the irradiation event(s) associated with the acquisition of this image. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.1.1.7"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "General Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "name" : "Private Creator Reference",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1164)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence containing details of how this SOP Instance was extracted from a source multi-frame SOP Instance.",
            "If this instance was created from an instance that contains a Frame Extraction Sequence, then this sequence shall contain all of the items from the parent's Frame Extraction Sequence and a new item that describes this extraction.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Frame Extraction Sequence",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "req" : "1",
         "module" : "Frame Extraction"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0040,0560)[<0>](0008,2228)[<1>](0008,2230)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "module" : "Specimen",
         "req" : "3",
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
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
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a161)" : {
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0551)" : {
         "entity" : "Image",
         "desc" : [
            [
               "A departmental information system identifier for the Specimen. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.1"
                  }
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.22.1.2"
                  }
               },
               "."
            ],
            "If a single specimen is present in a container, the value of the Specimen Identifier and the value of the Container Identifier are typically the same."
         ],
         "name" : "Specimen Identifier",
         "req" : "1",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
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
                     "attrs" : {
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0018,0015)" : {
         "entity" : "Series",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.16",
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16",
                     "targetptr" : "chapter_L"
                  },
                  "el" : "olink"
               },
               " for Defined Terms"
            ],
            {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Body Part Examined",
         "module" : "General Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0103)" : {
         "entity" : "Image",
         "desc" : [
            "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
            {
               "list" : [
                  [
                     "0000H",
                     "unsigned integer."
                  ],
                  [
                     "0001H",
                     "2's complement"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Pixel Representation",
         "req" : "1",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0054,0414)" : {
         "mod_tables" : [
            "table_C.8-5"
         ],
         "usage" : "M",
         "module" : "NM/PET Patient Orientation",
         "req" : "2",
         "entity" : "Series",
         "desc" : [
            [
               "Describes the orientation of the patient with respect to the gantry. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.4.6.1.3"
                  }
               },
               " for further explanation."
            ],
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Patient Gantry Relationship Code Sequence"
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0018,1081)" : {
         "req" : "3",
         "module" : "NM Multi-gated Acquisition",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "desc" : "R-R interval lower limit for beat rejection, in msec",
         "name" : "Low R-R Value",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time"
      },
      "(0040,051a)" : {
         "req" : "3",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Description",
         "desc" : "Description of the container.",
         "entity" : "Image"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Study Instance UID",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ]
      },
      "(0018,1088)" : {
         "req" : "3",
         "module" : "NM Multi-gated Acquisition",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "entity" : "Image",
         "desc" : "Average number of heart beats per minute for the collection period for these frames. This shall include all accepted beats as well as rejected beats.",
         "name" : "Heart Rate"
      },
      "(0054,0016)[<0>](0018,0031)" : {
         "entity" : "Image",
         "name" : "Radiopharmaceutical",
         "desc" : "Name of the radiopharmaceutical.",
         "module" : "NM Isotope",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M"
      },
      "(0040,0520)[<0>](0050,001a)" : {
         "entity" : "Image",
         "name" : "Container Component Material",
         "desc" : [
            "Material of container component.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "GLASS",
                     null
                  ],
                  [
                     "PLASTIC",
                     null
                  ],
                  [
                     "METAL",
                     null
                  ]
               ]
            }
         ],
         "req" : "3",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0008,1062)" : {
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series"
      },
      "(0010,1021)" : {
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Patient's Size Code Sequence",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen",
         "name" : "Numeric Value",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image"
      },
      "(0008,0051)" : {
         "entity" : "Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Study"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "module" : "Common Instance Reference",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "name" : "Series Instance UID",
         "entity" : "Image"
      },
      "(0054,0052)[<0>](0018,1110)" : {
         "desc" : "Distance in mm from transmission source to the detector face. Required if Image Type (0008,0008) Value 4 is TRANSMISSION.",
         "name" : "Distance Source to Detector",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "req" : "2C",
         "module" : "NM TOMO Acquisition"
      },
      "(0018,1200)" : {
         "entity" : "Equipment",
         "name" : "Date of Last Calibration",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "req" : "3"
      },
      "(0020,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "2",
         "desc" : "User or equipment generated Study identifier.",
         "name" : "Study ID",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a124)" : {
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "entity" : "Image"
      },
      "(0008,0081)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "module" : "General Equipment",
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "name" : "Institution Address"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "name" : "Time",
         "entity" : "Series"
      },
      "(0054,0052)[<0>](0018,1143)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "req" : "1",
         "module" : "NM TOMO Acquisition",
         "name" : "Scan Arc",
         "desc" : "The effective angular range of the scan data in degrees. The value shall be positive.",
         "entity" : "Image"
      },
      "(0054,0090)" : {
         "module" : "NM Multi-frame",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "desc" : [
            "An array that contains the angular view number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Angular View Vector (0054,0090). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.9"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "name" : "Angular View Vector",
         "entity" : "Image"
      },
      "(0010,1030)" : {
         "module" : "Patient Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "name" : "Patient's Weight"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "req" : "1C"
      },
      "(0018,1085)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "req" : "3",
         "module" : "NM Multi-gated Acquisition",
         "desc" : "Description of type of arrhythmic beat rejection criteria used.",
         "name" : "PVC Rejection",
         "entity" : "Image"
      },
      "(0010,1002)[<0>](0010,0021)" : {
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
         ],
         "name" : "Issuer of Patient ID",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0008,0070)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "module" : "General Equipment",
         "req" : "2",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "name" : "Manufacturer",
         "entity" : "Equipment"
      },
      "(60xx,1500)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "req" : "3",
         "desc" : "A user defined text string that may be used to label or name this overlay.",
         "name" : "Overlay Label",
         "entity" : "Image"
      },
      "(0020,0013)" : [
         {
            "entity" : "Image",
            "desc" : [
               "A number that identifies this image.",
               {
                  "content" : [
                     "\n                    ",
                     {
                        "content" : [
                           "This Attribute was named Image Number in earlier versions of this Standard."
                        ],
                        "attrs" : {
                           "xml:id" : "para_4b6d4b36-a800-41c7-a122-e8e704668af1"
                        },
                        "el" : "para"
                     },
                     "\n                  "
                  ],
                  "el" : "note"
               }
            ],
            "name" : "Instance Number",
            "req" : "2",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "desc" : "A number that identifies this Composite object instance.",
            "name" : "Instance Number",
            "usage" : "M",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "module" : "SOP Common",
            "req" : "3"
         }
      ],
      "(0008,1111)[<0>](0008,1150)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
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
         "name" : "Digital Signature DateTime"
      },
      "(0028,0300)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3",
         "name" : "Quality Control Image",
         "desc" : [
            "Indicates whether or not this image is a quality control or phantom image.",
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
            [
               "If this Attribute is absent, then the image may or may not be a quality control or phantom image. The phantom device in the image can be described using the ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_C.7.6.12"
                  },
                  "el" : "xref"
               },
               ". See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.12",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               }
            ]
         ],
         "entity" : "Image"
      },
      "(0028,0109)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "desc" : "The maximum value of all images in this Series.",
         "name" : "Largest Pixel Value in Series",
         "entity" : "Series"
      },
      "(0054,0032)[<0>](0054,0039)" : {
         "name" : "Phase Description",
         "desc" : [
            "Description of this phase of the Dynamic image.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "FLOW",
                     null
                  ],
                  [
                     "WASHOUT",
                     null
                  ],
                  [
                     "UPTAKE",
                     null
                  ],
                  [
                     "EMPTYING",
                     null
                  ],
                  [
                     "EXCRETION",
                     null
                  ]
               ]
            }
         ],
         "entity" : "Image",
         "module" : "NM Phase",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-14"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "name" : "Source of Previous Values",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "entity" : "Image",
         "req" : "2",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,2111)" : {
         "module" : "General Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "name" : "Derivation Description",
         "desc" : [
            "A text description of how this image was derived. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.1.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0088,0200)[<0>](0028,0034)" : {
         "entity" : "Image",
         "name" : "Pixel Aspect Ratio",
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.7",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "module" : "General Image",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a043)" : [
         {
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "name" : "Concept Name Code Sequence",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1",
            "module" : "General Image"
         },
         {
            "module" : "NM Image",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "desc" : [
               "Coded concept name of this name-value Item.",
               "Only a single Item shall be included in this Sequence."
            ],
            "name" : "Concept Name Code Sequence",
            "entity" : "Image"
         }
      ],
      "(0012,0020)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "req" : "1",
         "module" : "Clinical Trial Subject",
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
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "Patient"
      },
      "(0010,0213)" : {
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
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,9096)[<0>](0040,9224)" : [
         {
            "req" : "1C",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M",
            "entity" : "Image",
            "name" : "Real World Value Intercept",
            "desc" : [
               "The Intercept value in relationship between stored values (SV) and the Real World values.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.16.2.11.1.2",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ],
               "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
            ]
         },
         {
            "desc" : [
               "The Intercept value in relationship between stored values (SV) and the Real World values.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.6.16.2.11.1.2",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ],
               "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
            ],
            "name" : "Real World Value Intercept",
            "entity" : "Image",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M",
            "module" : "NM Image",
            "req" : "1C"
         }
      ],
      "(0018,1302)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "module" : "NM Image",
         "req" : "2C",
         "desc" : "Size of the imaged area in the direction of scanning motion, in mm. Required if Image Type (0008,0008) Value 3 contains the value WHOLE BODY.",
         "name" : "Scan Length",
         "entity" : "Image"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0100,0410)" : {
         "entity" : "Image",
         "name" : "SOP Instance Status",
         "desc" : [
            "A flag that indicates the storage status of the SOP Instance.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     }
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
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "entity" : "Patient",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "name" : "HL7 Instance Identifier",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "entity" : "Series",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "name" : "Accession Number",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M"
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0054,0072)[<2>](0054,0073)" : {
         "entity" : "Image",
         "name" : "Time Slot Time",
         "desc" : [
            "The total amount of time, in msec, that the acquisition accumulates gamma events into this frame. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.13.1.2"
               }
            },
            "."
         ],
         "req" : "3",
         "module" : "NM Multi-gated Acquisition",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO"
      },
      "(0100,0426)" : {
         "name" : "Authorization Equipment Certification Number",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0054,0016)[<0>](0054,0306)[<1>](0054,0017)" : {
         "entity" : "Image",
         "name" : "Residual Syringe Counts",
         "desc" : [
            "Post-injection residue syringe count rate in counts/sec. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.10.1.9"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "module" : "NM Isotope"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Retrieval Sequence"
      },
      "(0018,0070)" : {
         "name" : "Counts Accumulated",
         "desc" : [
            "Sum of all gamma events for all frames in the image. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.9.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for specialization."
         ],
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "req" : "2",
         "module" : "NM Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "entity" : "Series",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "entity" : "Image",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "name" : "Coding Scheme Version",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study"
      },
      "(0088,0200)[<0>](0028,1203)" : {
         "module" : "General Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "Blue Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Blue Palette Color Lookup Table Data"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "module" : "General Series",
         "req" : "3",
         "entity" : "Series",
         "desc" : [
            "Uniquely identifies the Study SOP Instances associated with this SOP Instance.",
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
         "name" : "Referenced Study Sequence"
      },
      "(0012,0030)" : {
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
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
         ],
         "name" : "Clinical Trial Site ID"
      },
      "(0038,0010)" : {
         "entity" : "Study",
         "name" : "Admission ID",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "module" : "Patient Study",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0010,1002)" : {
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Other Patient IDs Sequence",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0560)" : {
         "desc" : [
            "Sequence of identifiers and detailed description of the specimen(s) being imaged.",
            "One or more Items shall be included in this Sequence.",
            "Each specimen imaged in the Pixel Data shall be identified by an Item in this Sequence. Other specimens in/on the container, but not imaged in the Pixel Data, may also be identified by Items in this Sequence."
         ],
         "name" : "Specimen Description Sequence",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "1",
         "module" : "Specimen"
      },
      "(0028,2000)" : [
         {
            "name" : "ICC Profile",
            "desc" : [
               "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.11.15.1.1"
                     }
                  },
                  "."
               ],
               "When present, defines the color space of color Pixel Data (7FE0,0010) values, and the output of Palette Color Lookup Table Data (0028,1201-1203).",
               {
                  "el" : "note",
                  "content" : [
                     "\n                    ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_d69f5d22-89f7-4927-ba3e-806a769850dc"
                        },
                        "content" : [
                           "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                        ]
                     },
                     "\n                  "
                  ]
               }
            ],
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "req" : "3",
            "module" : "Image Pixel"
         },
         {
            "module" : "ICC Profile",
            "req" : "1",
            "mod_tables" : [
               "table_C.11.15-1"
            ],
            "usage" : "U",
            "entity" : "Image",
            "desc" : "An ICC Profile encoding the transformation of device-dependent color stored pixel values into PCS-Values.",
            "name" : "ICC Profile"
         }
      ],
      "(0018,a001)" : {
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
         "name" : "Contributing Equipment Sequence",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a122)" : {
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Image"
      },
      "(0032,1034)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "name" : "Requesting Service Code Sequence",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0008,2228)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Primary Anatomic Structure Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-8"
         ],
         "module" : "Specimen",
         "req" : "3"
      },
      "(0008,2228)[<0>](0008,2230)" : {
         "desc" : [
            "Sequence of Items that modifies the primary anatomic structure of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Primary Anatomic Structure Modifier Sequence",
         "entity" : "Image",
         "module" : "NM Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9",
            "table_10-7",
            "table_10-8"
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value"
      },
      "(0040,0560)[<0>](0040,0602)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "req" : "3",
         "name" : "Specimen Detailed Description",
         "desc" : "Detailed textual specimen description (may include ancestor specimen descriptions).",
         "entity" : "Image"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "name" : "Encrypted Content",
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
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Image"
      },
      "(0040,0555)[<0>](0040,a040)" : {
         "req" : "3",
         "module" : "Acquisition Context",
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "desc" : [
            "The type of the value encoded in this Item.",
            {
               "list" : [
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "NUMERIC",
                     null
                  ],
                  [
                     "CODE",
                     null
                  ],
                  [
                     "DATE",
                     null
                  ],
                  [
                     "TIME",
                     null
                  ],
                  [
                     "PNAME",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Value Type"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "req" : "1",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence"
      },
      "(0088,0200)[<0>](0028,0006)" : {
         "entity" : "Image",
         "name" : "Planar Configuration",
         "desc" : [
            "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.3"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "1C",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0040,0520)" : {
         "req" : "3",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Component Sequence",
         "desc" : [
            "Description of one or more components of the container (e.g., description of the slide and of the coverslip).",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "Image",
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
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
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
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0008,0090)" : {
         "desc" : "Name of the patient's referring physician",
         "name" : "Referring Physician's Name",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0028,0009)" : [
         {
            "desc" : [
               "Contains the Data Element Tag of the attribute that is used as the frame increment in Multi-frame pixel data. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.6.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "name" : "Frame Increment Pointer",
            "entity" : "Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-14"
            ],
            "req" : "1",
            "module" : "Multi-frame"
         },
         {
            "desc" : [
               "Contains the Data Element Tags of one or more frame index vectors. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.4.8.1.1"
                  }
               },
               " for further specialization."
            ],
            "name" : "Frame Increment Pointer",
            "entity" : "Image",
            "module" : "NM Multi-frame",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-7"
            ]
         }
      ],
      "(0018,a001)[<0>](0008,1070)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "name" : "Operators' Name",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "entity" : "Image"
      },
      "(0012,0050)" : {
         "module" : "Clinical Trial Study",
         "req" : "2",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Time Point ID",
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
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "name" : "Breed Registry Code Sequence",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "1"
      },
      "(fffa,fffa)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Image",
         "name" : "Digital Signatures Sequence",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0010,2210)" : {
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.1"
                  }
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.2.1.1",
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
                        "If this Attribute is not present, the default human standard anatomical position is used to define the patient orientation of projection images and the patient coordinate system of cross-sectional images."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6250224a-3316-415a-9bc4-04999c343dd9"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Anatomical Orientation Type",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0038,0064)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "entity" : "Study",
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0520)[<0>](0050,0013)" : {
         "entity" : "Image",
         "desc" : "Thickness in mm of container component",
         "name" : "Container Component Thickness",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "req" : "3",
         "module" : "Specimen"
      },
      "(0008,0124)" : {
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Mapping Resource Identification Sequence",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0054,0032)" : {
         "desc" : [
            "Sequence of Items that describes each dynamic phase. Required if the Frame Increment Pointer (0028,0009) contains the Tag for Phase Vector (0054,0030).",
            "Zero or more Items shall be included in this Sequence.",
            "The number of items shall be equal to Number of Phases (0054,0031). The first item corresponds to frames with value of 1 in Phase Vector (0054,0030), the second item with value 2, etc."
         ],
         "name" : "Phase Information Sequence",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-14"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "module" : "NM Phase",
         "req" : "2C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "entity" : "Series",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,9096)[<0>](0040,9214)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "General Image",
            "req" : "1C",
            "entity" : "Image",
            "desc" : [
               "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
               "Required if Real World Value First Value Mapped (0040,9216) is absent.",
               {
                  "content" : [
                     "\n                        ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_21eff4f3-31a1-4086-873d-2bb31aaf6698"
                        },
                        "content" : [
                           "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                        ]
                     },
                     "\n                      "
                  ],
                  "el" : "note"
               }
            ],
            "name" : "Double Float Real World Value First Value Mapped"
         },
         {
            "entity" : "Image",
            "desc" : [
               "Specifies the first stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) of this Item.",
               "Required if Real World Value First Value Mapped (0040,9216) is absent.",
               {
                  "content" : [
                     "\n                        ",
                     {
                        "attrs" : {
                           "xml:id" : "para_21eff4f3-31a1-4086-873d-2bb31aaf6698"
                        },
                        "content" : [
                           "The same Attribute with a double float precision value is used whether or not Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present, an integer value is not sufficient."
                        ],
                        "el" : "para"
                     },
                     "\n                      "
                  ],
                  "el" : "note"
               }
            ],
            "name" : "Double Float Real World Value First Value Mapped",
            "module" : "NM Image",
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ]
         }
      ],
      "(0054,0052)[<0>](0018,1130)" : {
         "entity" : "Image",
         "name" : "Table Height",
         "desc" : "The distance in mm of the top of the patient table to the center of rotation. Table height below the center of rotation has a positive value.",
         "req" : "3",
         "module" : "NM TOMO Acquisition",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-12"
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a121)" : [
         {
            "entity" : "Image",
            "name" : "Date",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "req" : "1C",
            "module" : "General Image"
         },
         {
            "module" : "NM Image",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "entity" : "Image",
            "desc" : [
               "Date value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATE."
            ],
            "name" : "Date"
         }
      ],
      "(0010,1000)" : {
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "name" : "Other Patient IDs",
         "desc" : "Other identification numbers or codes used to identify the patient."
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "req" : "1",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Patient"
      },
      "(0054,0016)[<0>](0054,0306)" : {
         "entity" : "Image",
         "name" : "Calibration Data Sequence",
         "desc" : [
            "Sequence that contains calibration data.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "NM Isotope",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a161)" : {
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "name" : "Floating Point Value"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
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
         ],
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a162)" : {
         "req" : "1C",
         "module" : "Acquisition Context",
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value"
      },
      "(0088,0200)[<0>](0028,1101)" : {
         "req" : "1C",
         "module" : "General Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "desc" : [
            "Specifies the format of the Red Palette Color Lookup Table Data (0028,1201). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "name" : "Red Palette Color Lookup Table Descriptor",
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0040,1104)" : {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Person's Telecom Information",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0028,0002)" : [
         {
            "desc" : [
               "Number of samples (planes) in this image. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.3.1.1"
                  }
               },
               " for further explanation."
            ],
            "name" : "Samples per Pixel",
            "entity" : "Image",
            "module" : "Image Pixel",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "desc" : "Number of samples (color planes) in this image. The value shall be 1.",
            "name" : "Samples per Pixel",
            "req" : "1",
            "module" : "NM Image Pixel",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-6"
            ]
         }
      ],
      "(0028,3010)[<0>](0028,3006)" : {
         "entity" : "Image",
         "name" : "LUT Data",
         "desc" : "LUT Data in this Sequence.",
         "module" : "VOI LUT",
         "req" : "1",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence",
         "entity" : "Image",
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "entity" : "Patient",
         "desc" : [
            [
               "Identification of the organization that is the registry of sources of animals. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Strain Source Registry Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "Patient"
      },
      "(0018,1301)" : {
         "module" : "NM Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "entity" : "Image",
         "name" : "Whole Body Technique",
         "desc" : [
            "The type of scan performed. Used only if Image Type (0008,0008), Value 3, contains the value WHOLE BODY.",
            {
               "list" : [
                  [
                     "1PS",
                     "one pass"
                  ],
                  [
                     "2PS",
                     "two pass"
                  ],
                  [
                     "PCN",
                     "patient contour following employed"
                  ],
                  [
                     "MSP",
                     "multiple static frames collected into a whole body frame"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "module" : "SOP Common",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Image",
         "name" : "Certified Timestamp Type",
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
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0512)" : {
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1",
         "entity" : "Image",
         "name" : "Container Identifier",
         "desc" : [
            "The identifier for the container that contains the specimen(s) being imaged. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.22.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C"
      },
      "(0018,1210)" : {
         "req" : "3",
         "module" : "NM Reconstruction",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-15"
         ],
         "entity" : "Image",
         "desc" : "A label describing the convolution kernel or algorithm used to reconstruct the data.",
         "name" : "Convolution Kernel"
      },
      "(60xx,0022)" : {
         "entity" : "Image",
         "name" : "Overlay Description",
         "desc" : "User-defined comments about the overlay.",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "req" : "3"
      },
      "(0050,0010)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Device",
         "desc" : "Manufacturer's serial number of the device",
         "name" : "Device Serial Number",
         "entity" : "Image"
      },
      "(60xx,0040)" : {
         "entity" : "Image",
         "name" : "Overlay Type",
         "desc" : [
            "Indicates whether this overlay represents a region of interest or other graphics.",
            {
               "list" : [
                  [
                     "G",
                     "Graphics"
                  ],
                  [
                     "R",
                     "ROI"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "Overlay Plane",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ]
      },
      "(0020,1040)" : {
         "module" : "Frame of Reference",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-6"
         ],
         "usage" : "U",
         "desc" : [
            "Part of the imaging target used as a reference. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.2"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Position Reference Indicator",
         "entity" : "Frame of Reference"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U",
         "req" : "1",
         "module" : "Specimen"
      },
      "(2050,0020)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Image",
         "name" : "Presentation LUT Shape",
         "desc" : [
            "When present, specifies an identity transformation for the Presentation LUT such that the output of all grayscale transformations, if any, are defined to be in P-Values.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "IDENTITY",
                     "output is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME2 or any color photometric interpretation."
                  ],
                  [
                     "INVERSE",
                     "output after inversion is in P-Values - shall be used if Photometric Interpretation (0028,0004) is MONOCHROME1."
                  ]
               ]
            },
            "When this attribute is used with a color photometric interpretation then the luminance component is in P-Values."
         ],
         "entity" : "Image"
      },
      "(0008,1140)[<0>](0008,1150)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "General Image"
      },
      "(0040,0555)[<0>](0040,a163)" : {
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U - See ",
         "module" : "Acquisition Context",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "entity" : "Image"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1C",
         "module" : "General Study"
      },
      "(0040,9096)[<0>](0040,9210)" : [
         {
            "name" : "LUT Label",
            "desc" : "Label that is used to identify the transformation of this Item.",
            "entity" : "Image",
            "req" : "1",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M"
         },
         {
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M",
            "req" : "1",
            "module" : "NM Image",
            "entity" : "Image",
            "desc" : "Label that is used to identify the transformation of this Item.",
            "name" : "LUT Label"
         }
      ],
      "(0054,0052)[<0>](0018,1131)" : {
         "entity" : "Image",
         "desc" : "Location of the patient table (or gantry relative to the table) in mm. The range and values of this element are determined by the manufacturer.",
         "name" : "Table Traverse",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "req" : "3",
         "module" : "NM TOMO Acquisition"
      },
      "(0040,9096)[<0>](0040,9212)" : [
         {
            "module" : "General Image",
            "req" : "1C",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M",
            "name" : "Real World Value LUT Data",
            "desc" : [
               "LUT Data in this Sequence.",
               "Required if Real World Value Intercept (0040,9224) is not present."
            ],
            "entity" : "Image"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "NM Image",
            "req" : "1C",
            "desc" : [
               "LUT Data in this Sequence.",
               "Required if Real World Value Intercept (0040,9224) is not present."
            ],
            "name" : "Real World Value LUT Data",
            "entity" : "Image"
         }
      ],
      "(0008,0005)" : {
         "entity" : "Image",
         "name" : "Specific Character Set",
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
         "req" : "1C",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0028,2112)" : {
         "entity" : "Image",
         "desc" : [
            "Describes the approximate lossy compression ratio(s) that have been applied to this image.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.5.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "name" : "Lossy Image Compression Ratio",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "General Study",
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
         "name" : "Universal Entity ID Type"
      },
      "(0012,0021)" : {
         "req" : "2",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
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
         ]
      },
      "(0008,0123)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Context Group Identification Sequence",
         "entity" : "Image"
      },
      "(0010,0021)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "name" : "Issuer of Patient ID"
      },
      "(0008,2112)[<0>](0008,1150)" : {
         "module" : "General Image",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Image",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
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
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0031)" : {
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "entity" : "Image",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
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
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient"
      },
      "(0012,0010)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "req" : "1",
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
         "name" : "Clinical Trial Sponsor Name",
         "entity" : "Patient"
      },
      "(0088,0200)[<0>](7fe0,0010)" : {
         "entity" : "Image",
         "name" : "Pixel Data",
         "desc" : [
            [
               "A data stream of the pixel samples that comprise the Image. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Pixel Data Provider URL (0028,7FE0) is not present."
         ],
         "module" : "General Image",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0008,1200)" : {
         "req" : "1C",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "entity" : "Image",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0008,009c)" : {
         "name" : "Consulting Physician's Name",
         "desc" : "Consulting physician(s) for this patient visit.",
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0008,1084)" : {
         "name" : "Admitting Diagnoses Code Sequence",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "module" : "Patient Study",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,0020)" : {
         "module" : "General Study",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study Date",
         "desc" : "Date the Study started.",
         "entity" : "Study"
      },
      "(0054,0012)" : {
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "req" : "2",
         "module" : "NM Isotope",
         "name" : "Energy Window Information Sequence",
         "desc" : [
            "Sequence of Items that describe the energy window groups used.",
            "Zero or more Items shall be included in this Sequence.",
            "The number of items shall be equal to Number of Energy Windows (0054,0011). The first item corresponds to frames with value of 1 in the Energy Window Vector (0054,0010), the second item with value 2, etc."
         ],
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
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
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0010,2203)" : {
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
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "name" : "Patient's Sex Neutered",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "req" : "2C",
         "module" : "Patient Study"
      },
      "(0088,0200)[<0>](0028,1202)" : {
         "module" : "General Image",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Green Palette Color Lookup Table Data",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0040,0260)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Performed Protocol Code Sequence",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "entity" : "Image"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "1C",
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
         "entity" : "Study"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a30a)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "module" : "General Image",
            "req" : "1C",
            "entity" : "Image",
            "name" : "Numeric Value",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ]
         },
         {
            "module" : "NM Image",
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "entity" : "Image",
            "desc" : [
               "Numeric value for this name-value Item. Only a single value shall be present.",
               "Required if Value Type (0040,A040) is NUMERIC."
            ],
            "name" : "Numeric Value"
         }
      ],
      "(0010,1001)" : {
         "entity" : "Patient",
         "name" : "Other Patient Names",
         "desc" : "Other names used to identify the patient.",
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,0050)" : {
         "name" : "Slice Thickness",
         "desc" : "Nominal slice thickness, in mm.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-15"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is RECON TOMO or RECON GATED TOMO",
         "req" : "2",
         "module" : "NM Reconstruction"
      },
      "(0040,0515)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "module" : "Specimen",
         "req" : "3",
         "entity" : "Image",
         "desc" : "Sequence of alternate identifiers for the container that contains the specimen(s) being imaged. These may have been assigned, e.g., by the manufacturer, or by another institution that collected the specimen. One or more Items are permitted in this Sequence.",
         "name" : "Alternate Container Identifier Sequence"
      },
      "(0010,0034)" : {
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient's Death Date in Alternative Calendar",
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_9f9d00e7-4c3c-4ecd-9b0f-c6dc916409e9"
                     },
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,2228)" : {
         "entity" : "Image",
         "desc" : [
            "Sequence of Items that identifies the primary anatomic structure(s) of interest in this Instance.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Primary Anatomic Structure Sequence",
         "module" : "NM Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-9",
            "table_10-7",
            "table_10-8"
         ],
         "usage" : "M"
      },
      "(0050,0010)[<0>](0018,1003)" : {
         "name" : "Device ID",
         "desc" : "User-supplied identifier for the device",
         "entity" : "Image",
         "module" : "Device",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U"
      },
      "(0040,0555)[<0>](0040,a123)" : {
         "module" : "Acquisition Context",
         "req" : "1C",
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "entity" : "Image",
         "name" : "Person Name",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Person Name.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The role of the person could be specified in Concept Name Code Sequence (0040,A043)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_a8c76dec-9c64-427d-9278-7ac6f369d5a7"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if the value that Concept Name Code Sequence (0040,A043) requires (implies) is a person name. Shall not be present otherwise."
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a161)" : [
         {
            "name" : "Floating Point Value",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "entity" : "Image",
            "req" : "1C",
            "module" : "General Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ]
         },
         {
            "name" : "Floating Point Value",
            "desc" : [
               "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
               "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
            ],
            "entity" : "Image",
            "module" : "NM Image",
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ]
         }
      ],
      "(0010,2201)" : {
         "entity" : "Patient",
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "name" : "Patient Species Description",
         "req" : "1C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0028,0010)" : {
         "req" : "1",
         "module" : "Image Pixel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "name" : "Rows",
         "desc" : "Number of rows in the image."
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0033)" : {
         "entity" : "Image",
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
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "entity" : "Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "name" : "Requested Procedure Description",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series"
      },
      "(0018,1086)" : {
         "desc" : "Number of beats skipped after a detected arrhythmia",
         "name" : "Skip Beats",
         "entity" : "Image",
         "module" : "NM Multi-gated Acquisition",
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ]
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "name" : "Person's Telecom Information",
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
               ],
               "el" : "note"
            }
         ],
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
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
         ],
         "name" : "Person's Telecom Information"
      },
      "(0010,0200)" : {
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
         "name" : "Quality Control Subject",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a124)" : [
         {
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "module" : "General Image",
            "req" : "1C",
            "entity" : "Image",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "name" : "UID"
         },
         {
            "entity" : "Image",
            "name" : "UID",
            "desc" : [
               "UID value for this name-value Item.",
               "Required if Value Type (0040,A040) is UIDREF."
            ],
            "module" : "NM Image",
            "req" : "1C",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ]
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C",
         "entity" : "Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0054,0052)[<0>](0054,0200)" : {
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "module" : "NM TOMO Acquisition",
         "req" : "1",
         "desc" : "Position of the detector about the patient for the start of this rotation, in degrees. Zero degrees is referenced to the origin at the patient's back. Viewing from the patient's feet, angle increases in a counter-clockwise direction (detector normal rotating from the patient's back towards the patient's left side).",
         "name" : "Start Angle",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)" : {
         "entity" : "Image",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)"
      },
      "(0018,1080)" : {
         "entity" : "Image",
         "desc" : [
            "Heart beat duration sorting has been applied.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "Y",
                     "yes"
                  ],
                  [
                     "N",
                     "no"
                  ]
               ]
            }
         ],
         "name" : "Beat Rejection Flag",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "module" : "NM Multi-gated Acquisition",
         "req" : "3"
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0018,1082)" : {
         "entity" : "Image",
         "name" : "High R-R Value",
         "desc" : "R-R interval upper limit for beat rejection, in msec",
         "module" : "NM Multi-gated Acquisition",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
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
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0008,0060)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "req" : "1",
         "desc" : [
            "Type of equipment that originally acquired the data used to create the images in this Series. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.1.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for Defined Terms."
         ],
         "name" : "Modality",
         "entity" : "Series"
      },
      "(0054,0060)" : {
         "desc" : [
            "An array that contains the R-R interval number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for R-R Interval Vector (0054,0060). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.6"
               }
            },
            " for specialization."
         ],
         "name" : "R-R Interval Vector",
         "entity" : "Image",
         "req" : "1C",
         "module" : "NM Multi-frame",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-7"
         ]
      },
      "(4ffe,0001)" : {
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "MAC Parameters Sequence",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0012,0064)" : {
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "name" : "De-identification Method Code Sequence",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0008,009d)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Person's Telecom Information"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Patient"
      },
      "(0050,0010)[<0>](0050,0017)" : {
         "desc" : [
            "Required if Device Diameter (0050,0016) is present.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "FR",
                     "French"
                  ],
                  [
                     "GA",
                     "Gauge"
                  ],
                  [
                     "IN",
                     "Inch"
                  ],
                  [
                     "MM",
                     "Millimeter"
                  ]
               ]
            }
         ],
         "name" : "Device Diameter Units",
         "entity" : "Image",
         "req" : "2C",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U"
      },
      "(0012,0072)" : {
         "module" : "Clinical Trial Series",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series Description",
         "desc" : [
            "A description of the series in the context of a clinical trial or research. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.3.2.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,08ea)" : {
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Measurement Units Code Sequence"
      },
      "(0054,0062)[<0>](0054,0063)[<1>](0018,1083)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "req" : "3",
         "module" : "NM Multi-gated Acquisition",
         "desc" : "Number of heartbeats that fall within Low R-R Value (0018,1081) and High R-R Value (0018,1082), and were therefore accepted and contribute gamma events to this R-R Interval.",
         "name" : "Intervals Acquired",
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
         "name" : "Identifier Type Code",
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
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0054,0052)" : {
         "entity" : "Image",
         "name" : "Rotation Information Sequence",
         "desc" : [
            "Sequence of Items that describe TOMO rotational groups. A new rotation is defined whenever the direction of the detector motion changes, or Table Traverse (0018,1131) changes.",
            "Zero or more Items shall be included in this Sequence.",
            "The number of items shall be equal to Number of Rotations (0054,0051). If Rotation Vector (0054,0050) is present, the first item corresponds to frames with value of 1 in Rotation Vector (0054,0050), the second item with value 2, etc."
         ],
         "module" : "NM TOMO Acquisition",
         "req" : "2",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-12"
         ]
      },
      "(0054,0022)[<0>](0018,1180)" : {
         "entity" : "Image",
         "desc" : "Label describing the collimator used (LEAP, hires, etc.)",
         "name" : "Collimator/Grid Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "req" : "3",
         "module" : "NM Detector"
      },
      "(7fe0,0010)" : {
         "name" : "Pixel Data",
         "desc" : [
            [
               "A data stream of the pixel samples that comprise the Image. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.3.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Pixel Data Provider URL (0028,7FE0) is not present."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Image Pixel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0008,9215)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3",
         "entity" : "Image",
         "name" : "Derivation Code Sequence",
         "desc" : [
            [
               "A coded description of how this image was derived. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "One or more Items are permitted in this Sequence. More than one Item indicates that successive derivation steps have been applied."
         ]
      },
      "(0040,0515)[<0>](0040,0513)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0018,0026)[<0>](0018,0035)" : {
         "entity" : "Image",
         "name" : "Intervention Drug Start Time",
         "desc" : "Time of administration of the intervention drug, using the same time base as for Acquisition Time (0008,0032).",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "NM Isotope"
      },
      "(0008,103f)" : {
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Series Description Code Sequence",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0054,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "module" : "NM Multi-frame",
         "req" : "1C",
         "name" : "Number of Slices",
         "desc" : [
            "Number of slices. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Slice Vector (0054,0080). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.8"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "entity" : "Image"
      },
      "(0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "name" : "Operator Identification Sequence",
         "entity" : "Series",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0008,103e)" : {
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "name" : "Series Description",
         "desc" : "Description of the Series",
         "entity" : "Series"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a120)" : [
         {
            "req" : "1C",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "entity" : "Image",
            "name" : "DateTime",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ]
         },
         {
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1C",
            "module" : "NM Image",
            "entity" : "Image",
            "name" : "DateTime",
            "desc" : [
               "DateTime value for this name-value Item.",
               "Required if Value Type (0040,A040) is DATETIME."
            ]
         }
      ],
      "(0018,5100)" : {
         "entity" : "Series",
         "name" : "Patient Position",
         "desc" : [
            "Patient position descriptor relative to the equipment. Required for images where Patient Orientation Code Sequence (0054,0410) is not present and whose SOP Class is one of the following: CT (\"1.2.840.10008.5.1.4.1.1.2\") or MR (\"1.2.840.10008.5.1.4.1.1.4\") or Enhanced CT (\"1.2.840.10008.5.1.4.1.1.2.1\") or Enhanced MR Image (\"1.2.840.10008.5.1.4.1.1.4.1\") or Enhanced Color MR Image (\"1.2.840.10008.5.1.4.1.1.4.3\") or MR Spectroscopy (\"1.2.840.10008.5.1.4.1.1.4.2\") Storage SOP Classes.",
            "May be present for other SOP Classes if Patient Orientation Code Sequence (0054,0410) is not present.",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "req" : "2C"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "name" : "Person's Telecom Information",
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
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
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "entity" : "Series"
      },
      "(0008,1140)[<0>](0008,1160)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "1C",
         "name" : "Referenced Frame Number",
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
                        "xml:id" : "para_68450e47-9448-4ac5-82e8-4015a854968a"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Image"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
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
      "(60xx,0102)" : {
         "req" : "1",
         "module" : "Overlay Plane",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "entity" : "Image",
         "name" : "Overlay Bit Position",
         "desc" : [
            "The value of this Attribute shall be 0.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_897da523-8536-4e28-8b0b-10feebf42802"
                     },
                     "content" : [
                        "Formerly the standard described embedding the overlay data in the Image Pixel Data (7FE0,0010), in which case the value of this Attribute specified the bit in which the overlay was stored. This usage has been retired. See ",
                        {
                           "el" : "link",
                           "attrs" : {
                              "xl:href" : "ftp://medical.nema.org/MEDICAL/Dicom/2004/printed/04_03pu3.pdf"
                           },
                           "content" : [
                              "PS3.3-2004"
                           ]
                        },
                        "."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,1243)" : {
         "desc" : "Maximum count rate achieved during the acquisition in counts/sec.",
         "name" : "Count Rate",
         "entity" : "Image",
         "module" : "NM Image",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "usage" : "M"
      },
      "(0054,0022)[<0>](0018,1142)" : {
         "entity" : "Image",
         "desc" : "Radial distance of the detector from the center of rotation, in mm. Should not be included if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO.",
         "name" : "Radial Position",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "req" : "3",
         "module" : "NM Detector"
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(60xx,1302)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "module" : "Overlay Plane",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "ROI Mean.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.9.2.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "name" : "ROI Mean"
      },
      "(0010,0032)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "name" : "Patient's Birth Time",
         "desc" : "Birth time of the Patient.",
         "entity" : "Patient"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "1",
         "name" : "Breed Registration Number",
         "desc" : "Identification number of an animal within the registry.",
         "entity" : "Patient"
      },
      "(0100,0420)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "name" : "SOP Authorization DateTime",
         "entity" : "Image"
      },
      "(0028,2110)" : [
         {
            "mod_tables" : [
               "table_C.7-9"
            ],
            "usage" : "M",
            "req" : "3",
            "module" : "General Image",
            "entity" : "Image",
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "00",
                        "Image has NOT been subjected to lossy compression."
                     ],
                     [
                        "01",
                        "Image has been subjected to lossy compression."
                     ]
                  ]
               },
               "Once this value has been set to 01 it shall not be reset.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.1.1.5"
                     }
                  },
                  "."
               ]
            ],
            "name" : "Lossy Image Compression"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9"
            ],
            "req" : "1C",
            "module" : "NM Image",
            "entity" : "Image",
            "name" : "Lossy Image Compression",
            "desc" : [
               "Specifies whether an Image has undergone lossy compression (at a point in its lifetime).",
               {
                  "list" : [
                     [
                        "00",
                        "Image has NOT been subjected to lossy compression."
                     ],
                     [
                        "01",
                        "Image has been subjected to lossy compression."
                     ]
                  ],
                  "title" : "Enumerated Values:",
                  "type" : "variablelist"
               },
               "Once this value has been set to 01 it shall not be reset.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.1.1.5",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  }
               ],
               "Required if Lossy Compression has been performed on the Image. May be present otherwise."
            ]
         }
      ],
      "(0054,0022)[<0>](0018,1110)" : {
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M",
         "module" : "NM Detector",
         "req" : "2C",
         "name" : "Distance Source to Detector",
         "desc" : "Distance in mm from transmission source to the detector face. Required if Image Type (0008,0008) Value 4 is TRANSMISSION and Value 3 is not any of TOMO,GATED TOMO,RECON TOMO or RECON GATED TOMO.",
         "entity" : "Image"
      },
      "(0040,0513)[<0>](0040,0033)" : {
         "entity" : "Image",
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
         "module" : "Specimen",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U"
      },
      "(0008,1060)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Name of Physician(s) Reading Study",
         "desc" : "Names of the physician(s) reading the Study."
      },
      "(0040,0520)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the container component.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Specimen"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "entity" : "Series",
         "name" : "Scheduled Protocol Code Sequence",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "entity" : "Series",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "name" : "Protocol Context Sequence",
         "module" : "General Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ]
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Assigning Jurisdiction Code Sequence"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a123)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Image"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study"
      },
      "(0020,000e)" : {
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series.",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0028,2114)" : {
         "name" : "Lossy Image Compression Method",
         "desc" : [
            "A label for the lossy compression method(s) that have been applied to this image.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.5.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ]
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "3"
      },
      "(60xx,0011)" : {
         "module" : "Overlay Plane",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "desc" : "Number of Columns in Overlay.",
         "name" : "Overlay Columns",
         "entity" : "Image"
      },
      "(0050,0010)[<0>](0050,0016)" : {
         "entity" : "Image",
         "desc" : [
            "Unit diameter of device. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Device Diameter",
         "req" : "3",
         "module" : "Device",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U"
      },
      "(0054,0012)[<0>](0054,0013)[<1>](0054,0015)" : {
         "entity" : "Image",
         "name" : "Energy Window Upper Limit",
         "desc" : [
            "The upper limit of the energy window in KeV. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.10.1.2"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "3",
         "module" : "NM Isotope",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M"
      },
      "(0012,0040)" : {
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
         "name" : "Clinical Trial Subject ID",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0040,0520)[<0>](0050,001d)" : {
         "name" : "Container Component Diameter",
         "desc" : "Diameter in mm of container component for cylindrical or circular components.",
         "entity" : "Image",
         "module" : "Specimen",
         "req" : "3",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0028,0301)" : {
         "entity" : "Image",
         "desc" : [
            "Indicates whether or not image contains sufficient burned in annotation to identify the patient and date the image was acquired.",
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
            "If this Attribute is absent, then the image may or may not contain burned in annotation."
         ],
         "name" : "Burned In Annotation",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "3"
      },
      "(0028,0101)" : [
         {
            "desc" : [
               "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.5",
                     "targetptr" : "PS3.5",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               " for further explanation."
            ],
            "name" : "Bits Stored",
            "entity" : "Image",
            "req" : "1",
            "module" : "Image Pixel",
            "mod_tables" : [
               "table_C.7-11b"
            ],
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "desc" : "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. The value shall be the same as the value in Bits Allocated (0028,0100).",
            "name" : "Bits Stored",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-6"
            ],
            "module" : "NM Image Pixel",
            "req" : "1"
         }
      ],
      "(0008,002a)" : {
         "entity" : "Image",
         "name" : "Acquisition DateTime",
         "desc" : [
            "The date and time that the acquisition of data that resulted in this image started.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The synchronization of this time with an external clock is specified in the ",
                        {
                           "el" : "xref",
                           "attrs" : {
                              "xrefstyle" : "select: title",
                              "linkend" : "sect_C.7.4.2"
                           }
                        },
                        " in Acquisition Time Synchronized (0018,1800)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_7d04c307-81dd-4f92-a182-bb4317fb66bb"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "name" : "Referenced Frame Number",
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
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series"
      },
      "(0012,0081)" : {
         "req" : "1C",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "entity" : "Patient",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "name" : "Clinical Trial Protocol Ethics Committee Name"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "entity" : "Image",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "name" : "Institution Address",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,4000)" : {
         "module" : "Patient",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "desc" : "User-defined additional information about the patient.",
         "name" : "Patient Comments",
         "entity" : "Patient"
      },
      "(0040,0556)" : {
         "desc" : "Free-text description of the image-acquisition context.",
         "name" : "Acquisition Context Description",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "usage" : "U - See ",
         "module" : "Acquisition Context",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Image",
         "req" : "1",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0054,0016)[<0>](0018,1073)" : {
         "desc" : [
            "Time of end of injection. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.10.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "name" : "Radiopharmaceutical Stop Time",
         "entity" : "Image",
         "req" : "3",
         "module" : "NM Isotope",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M"
      },
      "(0018,5020)" : {
         "module" : "NM Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9"
         ],
         "entity" : "Image",
         "name" : "Processing Function",
         "desc" : "Code or description of processing functions applied to the data."
      },
      "(0028,3010)[<0>](0028,3002)" : {
         "desc" : [
            "Specifies the format of the LUT Data in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "name" : "LUT Descriptor",
         "entity" : "Image",
         "req" : "1",
         "module" : "VOI LUT",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
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
         "name" : "Date of Last Calibration",
         "entity" : "Image"
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
      "(0088,0200)[<0>](0028,1201)" : {
         "name" : "Red Palette Color Lookup Table Data",
         "desc" : [
            "Red Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,2002)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.15.1.2"
                  }
               },
               "."
            ]
         ],
         "name" : "Color Space"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value"
      },
      "(0400,0500)" : {
         "entity" : "Image",
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
         ],
         "name" : "Encrypted Attributes Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1C",
         "module" : "SOP Common"
      },
      "(0010,0035)" : {
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
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
         "name" : "Patient's Alternative Calendar"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series"
      },
      "(0010,0216)" : {
         "entity" : "Patient",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Strain Stock Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "3"
      },
      "(0012,0083)[<0>](0012,0084)" : {
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
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "name" : "Distribution Type",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Clinical Trial Study"
      },
      "(0040,0518)" : {
         "module" : "Specimen",
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "name" : "Container Type Code Sequence",
         "desc" : [
            "Type of container that contains the specimen(s) being imaged.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0054,0022)[<0>](0018,1147)" : {
         "entity" : "Image",
         "desc" : [
            "Shape of the field of view of the Nuclear Medicine detector.",
            {
               "list" : [
                  [
                     "RECTANGLE",
                     null
                  ],
                  [
                     "ROUND",
                     null
                  ],
                  [
                     "HEXAGONAL",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "name" : "Field of View Shape",
         "module" : "NM Detector",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "req" : "1C"
      },
      "(0008,1048)" : {
         "entity" : "Study",
         "name" : "Physician(s) of Record",
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
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Study"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Referenced Instance Sequence",
         "entity" : "Image",
         "module" : "Common Instance Reference",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "name" : "Coding Scheme Designator",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0054,0062)[<0>](0054,0063)" : {
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "req" : "2",
         "module" : "NM Multi-gated Acquisition",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items that describe gating criteria.",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.4.13.1.1"
                  }
               },
               "."
            ]
         ],
         "name" : "Data Information Sequence"
      },
      "(60xx,0045)" : {
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Overlay Plane",
         "name" : "Overlay Subtype",
         "desc" : [
            "Defined Term that identifies the intended purpose of the Overlay Type. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.9.2.1.3"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Image"
      },
      "(0018,1008)" : {
         "name" : "Gantry ID",
         "desc" : "Identifier of the gantry or positioner.",
         "entity" : "Equipment",
         "req" : "3",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M"
      },
      "(0028,0051)" : {
         "entity" : "Image",
         "name" : "Corrected Image",
         "desc" : [
            "One or more values that indicate which, if any, corrections have been applied to the image. Corrections are applied to all frames in the image.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "UNIF",
                     "flood corrected"
                  ],
                  [
                     "COR",
                     "center of rotation corrected"
                  ],
                  [
                     "NCO",
                     "non-circular orbit corrected"
                  ],
                  [
                     "DECY",
                     "decay corrected"
                  ],
                  [
                     "ATTN",
                     "attenuation corrected"
                  ],
                  [
                     "SCAT",
                     "scatter corrected"
                  ],
                  [
                     "DTIM",
                     "dead time corrected"
                  ],
                  [
                     "NRGY",
                     "energy corrected"
                  ],
                  [
                     "LIN",
                     "linearity corrected"
                  ],
                  [
                     "MOTN",
                     "motion corrected"
                  ],
                  [
                     "CLN",
                     "count loss normalization; Any type of normalization applied to correct for count loss in Time Slots."
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-9"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "NM Image"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "entity" : "Study",
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
         ],
         "name" : "Person's Telecom Information",
         "module" : "General Study",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0028,3010)" : {
         "entity" : "Image",
         "desc" : [
            "Defines a sequence of VOI LUTs.",
            "One or more Items shall be included in this Sequence.",
            "Required if Window Center (0028,1050) is not present. May be present otherwise."
         ],
         "name" : "VOI LUT Sequence",
         "req" : "1C",
         "module" : "VOI LUT",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0054,0022)[<0>](0054,0220)[<1>](0054,0222)" : {
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M",
         "req" : "2C",
         "module" : "NM Detector",
         "entity" : "Image",
         "name" : "View Modifier Code Sequence",
         "desc" : [
            "View Modifier. Required if needed to fully specify the View.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0054,0022)[<0>](0028,0031)" : {
         "req" : "3",
         "module" : "NM Detector",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M",
         "entity" : "Image",
         "desc" : [
            "The amount of magnification applied to each pixel in the image, specified by a numeric pair: row value (delimiter) column value. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.11.1.4"
               }
            },
            " for further explanation."
         ],
         "name" : "Zoom Factor"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "name" : "Rational Numerator Value",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "name" : "Scheduled Procedure Step Description",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0054,0022)[<0>](0018,1149)" : {
         "module" : "NM Detector",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "entity" : "Image",
         "name" : "Field of View Dimension(s)",
         "desc" : [
            "Dimensions of the field of view, in mm. If Field of View Shape (0018,1147) is:",
            "RECTANGLE: row dimension followed by column.",
            "ROUND: diameter.",
            "HEXAGONAL: diameter of a circumscribed circle."
         ]
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Block Identifying Information Status",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "attrs" : {
                     "targetptr" : "sect_E.3.10",
                     "xrefstyle" : "template:PS3.15 Section %n %t",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0054,0070)" : {
         "module" : "NM Multi-frame",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "entity" : "Image",
         "name" : "Time Slot Vector",
         "desc" : [
            "An array that contains the time slot number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Time Slot Vector (0054,0070). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.7"
               },
               "el" : "xref"
            },
            " for specialization."
         ]
      },
      "(0054,0032)[<0>](0054,0038)" : {
         "module" : "NM Phase",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-14"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC",
         "entity" : "Image",
         "name" : "Pause Between Frames",
         "desc" : "Time paused between each frame of this phase (in msec)."
      },
      "(0008,1080)" : {
         "entity" : "Study",
         "name" : "Admitting Diagnoses Description",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Software Versions",
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
         "entity" : "Image"
      },
      "(0028,0302)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "req" : "3",
         "module" : "General Image",
         "desc" : [
            "Indicates whether or not the image contains sufficiently recognizable visual features to allow the image or a reconstruction from a set of images to identify the patient.",
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
            "If this Attribute is absent, then the image may or may not contain recognizable visual features."
         ],
         "name" : "Recognizable Visual Features",
         "entity" : "Image"
      },
      "(0008,1032)" : {
         "entity" : "Study",
         "name" : "Procedure Code Sequence",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "req" : "3"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "req" : "1",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0018,1801)" : {
         "module" : "Synchronization",
         "req" : "3",
         "usage" : "C - Required if time synchronization was applied",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "name" : "Time Source",
         "desc" : "ID of equipment or system providing time reference",
         "entity" : "Frame of Reference"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "req" : "2C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0054,0022)[<0>](0018,1120)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "req" : "3",
         "module" : "NM Detector",
         "entity" : "Image",
         "desc" : [
            "Angle of tilt in degrees of the detector. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.11.1.6"
               }
            },
            " for further explanation."
         ],
         "name" : "Gantry/Detector Tilt"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Image",
         "name" : "Private Group Reference",
         "desc" : "Odd group number within which the Private Data Element block is reserved."
      },
      "(0054,0022)[<0>](0028,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "req" : "3",
         "module" : "NM Detector",
         "entity" : "Image",
         "name" : "Zoom Center",
         "desc" : [
            "The amount of offset from (0,0) applied to each pixel in the image before application of the zoom factor, specified by a numeric pair: row value (delimiter) column value (in mm). See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.11.1.3"
               },
               "el" : "xref"
            },
            " for further explanation."
         ]
      },
      "(0008,2112)" : {
         "name" : "Source Image Sequence",
         "desc" : [
            "The set of Image SOP Class/Instance pairs of the Images that were used to derive this Image.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "module" : "General Image",
         "req" : "3"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "entity" : "Study"
      },
      "(0040,0560)[<0>](0040,0620)" : {
         "name" : "Specimen Localization Content Item Sequence",
         "desc" : [
            [
               "Sequence of Content Items identifying the location of the specimen in the container and/or in the image. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.6.22.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items shall be included in this Sequence.",
            "Required if multiple specimens present in the image. May be present otherwise."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0018,1030)" : {
         "name" : "Protocol Name",
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
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "3"
      },
      "(0010,0026)" : {
         "name" : "Source Patient Group Identification Sequence",
         "desc" : [
            [
               "A sequence containing the value used for Patient ID (0010,0020) and related Attributes in the source composite instances that contained a group of subjects whose data was acquired at the same time, from which this composite instance was extracted. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Patient",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0040,0275)" : {
         "entity" : "Series",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Request Attributes Sequence",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0040,0254)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "name" : "Performed Procedure Step Description",
         "entity" : "Series"
      },
      "(0040,9096)[<0>](0040,9225)" : [
         {
            "req" : "1C",
            "module" : "General Image",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "entity" : "Image",
            "desc" : [
               "The Slope value in relationship between stored values (SV) and the real world values.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.16.2.11.1.2"
                     }
                  },
                  " for further explanation."
               ],
               "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
            ],
            "name" : "Real World Value Slope"
         },
         {
            "name" : "Real World Value Slope",
            "desc" : [
               "The Slope value in relationship between stored values (SV) and the real world values.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.6.16.2.11.1.2",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ],
               "Required if Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are present or Real World Value LUT Data (0040,9212) is not present."
            ],
            "entity" : "Image",
            "module" : "NM Image",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M"
         }
      ],
      "(0010,1100)[<0>](0040,e020)" : {
         "entity" : "Patient",
         "name" : "Type of Instances",
         "desc" : [
            "Type of object instances referenced.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "1"
      },
      "(0028,0303)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "entity" : "Image",
         "name" : "Longitudinal Temporal Information Modified",
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
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15",
                     "xrefstyle" : "select: labelnumber"
                  },
                  "el" : "olink"
               },
               "."
            ]
         ]
      },
      "(0028,0006)" : {
         "name" : "Planar Configuration",
         "desc" : [
            "Indicates whether the pixel data are sent color-by-plane or color-by-pixel. Required if Samples per Pixel (0028,0002) has a value greater than 1. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.3"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "Image Pixel",
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "module" : "General Series",
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
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "DateTime",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0054,0016)[<0>](0054,0302)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "module" : "NM Isotope",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            "Sequence that identifies the administration route for the radiopharmaceutical.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Administration Route Code Sequence"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "entity" : "Patient",
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
      "(60xx,3000)" : {
         "req" : "1",
         "module" : "Overlay Plane",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "usage" : "U",
         "entity" : "Image",
         "desc" : [
            "Overlay pixel data.",
            "The order of pixels sent for each overlay is left to right, top to bottom, i.e., the upper left pixel is sent first followed by the remainder of the first row, followed by the first pixel of the 2nd row, then the remainder of the 2nd row and so on.",
            "Overlay data shall be contained in this Attribute.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.9.2.1.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "name" : "Overlay Data"
      },
      "(0054,0050)" : {
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "NM Multi-frame",
         "entity" : "Image",
         "name" : "Rotation Vector",
         "desc" : [
            "An array that contains the rotation number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Rotation Vector (0054,0050). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for specialization."
         ]
      },
      "(0088,0200)[<0>](0028,0102)" : {
         "entity" : "Image",
         "name" : "High Bit",
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. High Bit (0028,0102) shall be one less than Bits Stored (0028,0101). See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.5",
                  "xrefstyle" : "select: labelnumber",
                  "targetdoc" : "PS3.5"
               }
            },
            " for further explanation."
         ],
         "module" : "General Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M"
      },
      "(0054,0016)[<0>](0008,3012)" : {
         "req" : "3",
         "module" : "NM Isotope",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "desc" : [
            "Unique identification of the administration of the radiopharmaceutical to the patient.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The UID is the same Radiopharmaceutical Administration Event UID that is in the Radiopharmaceutical Radiation Dose Report."
                     ],
                     "attrs" : {
                        "xml:id" : "para_8b65188d-4c8d-454a-8cce-736db3e4b98d"
                     },
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Radiopharmaceutical Administration Event UID",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "entity" : "Series",
         "name" : "Universal Entity ID Type",
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
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ]
      },
      "(0018,0088)" : {
         "entity" : "Image",
         "desc" : "Spacing between slices, in mm, measured from center-to-center of each slice along the normal to the first image. The sign of the Spacing Between Slices (0018,0088) determines the direction of stacking. The normal is determined by the cross product of the direction cosines of the first row and first column of the first frame, such that a positive spacing indicates slices are stacked behind the first slice and a negative spacing indicates slices are stacked in front of the first slice. See Image Orientation (0020,0037) in the NM Detector module.",
         "name" : "Spacing Between Slices",
         "mod_tables" : [
            "table_C.8-15"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is RECON TOMO or RECON GATED TOMO",
         "req" : "2",
         "module" : "NM Reconstruction"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "entity" : "Series",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "req" : "2",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1",
         "module" : "General Series",
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0028,3010)[<0>](0028,3003)" : {
         "req" : "3",
         "module" : "VOI LUT",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U",
         "entity" : "Image",
         "name" : "LUT Explanation",
         "desc" : "Free form text explanation of the meaning of the LUT."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "entity" : "Series",
         "module" : "General Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0050,0010)[<0>](0050,0014)" : {
         "req" : "3",
         "module" : "Device",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-18"
         ],
         "name" : "Device Length",
         "desc" : [
            "Length in mm of device. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.12.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Image"
      },
      "(0010,0030)" : {
         "name" : "Patient's Birth Date",
         "desc" : "Birth date of the patient.",
         "entity" : "Patient",
         "req" : "2",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0054,0052)[<0>](0018,1144)" : {
         "req" : "1",
         "module" : "NM TOMO Acquisition",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "entity" : "Image",
         "name" : "Angular Step",
         "desc" : [
            "The angular scan arc step between views of the TOMO acquisition, in degrees. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.12.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ]
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0040,a040)" : [
         {
            "entity" : "Image",
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
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "req" : "1",
            "module" : "General Image"
         },
         {
            "module" : "NM Image",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "entity" : "Image",
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
                  "type" : "variablelist",
                  "title" : "Enumerated Values:"
               }
            ]
         }
      ],
      "(0054,0016)[<0>](0054,0306)[<1>](0018,1045)" : {
         "module" : "NM Isotope",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "entity" : "Image",
         "name" : "Syringe Counts",
         "desc" : [
            "Pre-injection syringe count rate in counts/sec. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.10.1.8"
               }
            },
            " for further explanation."
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID"
      },
      "(0054,0016)[<0>](0018,1071)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "module" : "NM Isotope",
         "req" : "3",
         "entity" : "Image",
         "name" : "Radiopharmaceutical Volume",
         "desc" : "Volume of injection in cubic cm."
      },
      "(0040,0280)" : {
         "entity" : "Series",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "name" : "Comments on the Performed Procedure Step",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series"
      },
      "(0010,0219)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Strain Code Sequence",
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
         ]
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "entity" : "Series",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,2292)" : {
         "entity" : "Patient",
         "name" : "Patient Breed Description",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "req" : "2C"
      },
      "(0028,1202)" : {
         "module" : "Image Pixel",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M",
         "desc" : [
            "Green Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "name" : "Green Palette Color Lookup Table Data",
         "entity" : "Image"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a040)" : {
         "entity" : "Image",
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
         "name" : "Value Type",
         "req" : "1",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Series",
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M"
      },
      "(0054,0022)[<0>](0018,1184)" : {
         "name" : "Y Focus Center",
         "desc" : [
            "Center of focus along a column. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.11.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "NM Detector",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ]
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Study",
         "req" : "1",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "module" : "SOP Common",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "desc" : "May include Sequence Attributes and their Items.",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
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
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "General Series"
      },
      "(0054,0012)[<0>](0054,0013)" : {
         "desc" : [
            "Sequence of Items that describes this energy window group.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Energy Window Range Sequence",
         "entity" : "Image",
         "module" : "NM Isotope",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ]
      },
      "(0028,2002)" : [
         {
            "name" : "Color Space",
            "desc" : [
               "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.11.15.1.2",
                        "xrefstyle" : "select: label"
                     }
                  },
                  "."
               ]
            ],
            "entity" : "Image",
            "module" : "Image Pixel",
            "req" : "3",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-11b"
            ]
         },
         {
            "module" : "ICC Profile",
            "req" : "3",
            "usage" : "U",
            "mod_tables" : [
               "table_C.11.15-1"
            ],
            "entity" : "Image",
            "name" : "Color Space",
            "desc" : [
               "A label that identifies the well-known color space of the image. Shall be consistent with any ICC Profile (0028,2000) that is also present.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.11.15.1.2",
                        "xrefstyle" : "select: label"
                     }
                  },
                  "."
               ]
            ]
         }
      ],
      "(0040,0555)[<0>](0040,a160)" : {
         "entity" : "Image",
         "desc" : [
            "This is the Value component of a Name/Value pair when the Concept implied by Concept Name Code Sequence (0040,A043) is a Text Observation Value.",
            "Required if Date (0040,A121), Time (0040,A122), and Person Name (0040,A123) do not fully describe the concept specified by Concept Name Code Sequence (0040,A043). Shall not be present otherwise."
         ],
         "name" : "Text Value",
         "module" : "Acquisition Context",
         "req" : "1C",
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0054,0500)" : {
         "module" : "NM Reconstruction",
         "req" : "3",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-15"
         ],
         "entity" : "Image",
         "name" : "Slice Progression Direction",
         "desc" : [
            "Describes the anatomical direction that slices are progressing as the slices are considered in order (as defined by Slice Vector (0054,0080)). Meaningful only for cardiac images.",
            "When View Code Sequence (0054,0220) indicates a short axis view, then the Enumerated Values are:",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "APEX_TO_BASE",
                     null
                  ],
                  [
                     "BASE_TO_APEX",
                     null
                  ]
               ]
            }
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "usage" : "U",
         "module" : "Common Instance Reference",
         "req" : "1"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Study",
         "module" : "General Study",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
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
         ],
         "entity" : "Patient"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image"
      },
      "(0038,0062)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "req" : "3",
         "entity" : "Study",
         "name" : "Service Episode Description",
         "desc" : "Description of the type of service episode."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "entity" : "Series"
      },
      "(0040,9096)[<0>](0028,3003)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "req" : "1",
            "module" : "General Image",
            "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
            "name" : "LUT Explanation",
            "entity" : "Image"
         },
         {
            "entity" : "Image",
            "name" : "LUT Explanation",
            "desc" : "Free form text explanation of the meaning of the transformation in this Item.",
            "module" : "NM Image",
            "req" : "1",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M"
         }
      ],
      "(0054,0022)[<0>](0054,0200)" : {
         "module" : "NM Detector",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "entity" : "Image",
         "desc" : "Position of the detector about the patient for the start of the acquisition, in degrees. Zero degrees is referenced to the origin at the patient's back. Viewing from the patient's feet, angle increases in a counter-clockwise direction (detector normal rotating from the patient's back towards the patient's left side). Should not be included if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO.",
         "name" : "Start Angle"
      },
      "(0020,000d)" : {
         "module" : "General Study",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Unique identifier for the Study.",
         "name" : "Study Instance UID",
         "entity" : "Study"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1",
         "module" : "Patient",
         "name" : "Strain Source",
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
         "entity" : "Patient"
      },
      "(0008,001b)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Original Specialized SOP Class UID",
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
         ]
      },
      "(0040,0251)" : {
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "entity" : "Series",
         "name" : "Performed Procedure Step End Time",
         "desc" : "Time at which the Performed Procedure Step ended."
      },
      "(0054,0062)[<0>](0018,1060)" : {
         "req" : "3",
         "module" : "NM Multi-gated Acquisition",
         "mod_tables" : [
            "table_C.8-13"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is GATED, GATED TOMO, or RECON GATED TOMO",
         "entity" : "Image",
         "desc" : "Time interval measured in msec from the start of the R-wave to the beginning of the data taking.",
         "name" : "Trigger Time"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1C",
         "module" : "Patient",
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "DICOM Media Retrieval Sequence"
      },
      "(0088,0200)[<0>](0028,0107)" : {
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "3",
         "entity" : "Image",
         "desc" : "The maximum actual pixel value encountered in this image.",
         "name" : "Largest Image Pixel Value"
      },
      "(0008,2112)[<0>](0040,a170)" : {
         "module" : "General Image",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "entity" : "Image",
         "name" : "Purpose of Reference Code Sequence",
         "desc" : [
            "Describes the purpose for which the reference is made, that is what role the source image or frame(s) played in the derivation of this image.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0020,0020)" : {
         "req" : "2C",
         "module" : "General Image",
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "entity" : "Image",
         "name" : "Patient Orientation",
         "desc" : [
            [
               "Patient direction of the rows and columns of the image. Required if image does not require Image Orientation (Patient) (0020,0037) and Image Position (Patient) (0020,0032). May be present otherwise. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.1.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_09636c87-54b7-4fd6-ae07-683cdb9bf8a4"
                     },
                     "content" : [
                        "IODs may have attributes other than Patient Orientation, Image Orientation, or Image Position (Patient) to describe orientation in which case this attribute will be zero length."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0010,2293)" : {
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
         ],
         "name" : "Patient Breed Code Sequence",
         "entity" : "Patient",
         "req" : "2C",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0012,0051)" : {
         "entity" : "Study",
         "name" : "Clinical Trial Time Point Description",
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "req" : "3"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
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
      "(0054,0410)[<0>](0054,0412)" : {
         "module" : "NM/PET Patient Orientation",
         "req" : "2C",
         "mod_tables" : [
            "table_C.8-5"
         ],
         "usage" : "M",
         "desc" : [
            [
               "Patient Orientation Modifier. Required if needed to fully specify the orientation of the patient with respect to gravity. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.4.6.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Patient Orientation Modifier Code Sequence",
         "entity" : "Series"
      },
      "(0008,1140)[<0>](0008,1155)" : {
         "module" : "General Image",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "name" : "Issuer of Accession Number Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
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
         "name" : "Time of Last Calibration",
         "entity" : "Image"
      },
      "(0010,21b0)" : {
         "req" : "3",
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "desc" : "Additional information about the Patient's medical history.",
         "name" : "Additional Patient History"
      },
      "(0008,1140)[<0>](0062,000b)" : {
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3"
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "1C"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "req" : "1",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence"
      },
      "(0008,1050)" : {
         "entity" : "Series",
         "desc" : "Name of the physician(s) administering the Series.",
         "name" : "Performing Physician's Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "req" : "3"
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a160)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Specimen",
         "name" : "Text Value",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Image"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "name" : "Deidentification Action",
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
               ]
            },
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
                           "content" : [
                              "\n                      ",
                              {
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 },
                                 "content" : [
                                    "No suggested dummy value is provided, since the encoding of the value would depend on the VR of the data element."
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
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 },
                                 "content" : [
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetptr" : "sect_E.3.1",
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
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1049)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "name" : "Physician(s) of Record Identification Sequence",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ]
      },
      "(0010,0040)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "2",
         "module" : "Patient",
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
         "name" : "Patient's Sex",
         "entity" : "Patient"
      },
      "(0054,0021)" : {
         "desc" : [
            "Number of detectors. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.4.8.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for specialization."
         ],
         "name" : "Number of Detectors",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "usage" : "M",
         "module" : "NM Multi-frame",
         "req" : "1"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "req" : "1",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "name" : "Referenced Instance Sequence",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0008,0201)" : {
         "name" : "Timezone Offset From UTC",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
                                 },
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
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does not apply to values with a DT Value Representation, that contains an explicitly encoded timezone offset."
                                 ],
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
                     ],
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     }
                  },
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     },
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
                     "el" : "para",
                     "content" : [
                        "Offset = -0200"
                     ],
                     "attrs" : {
                        "xml:id" : "para_16002fc2-2776-41b6-b49f-74eb5e06324a"
                     }
                  },
                  "\n                "
               ]
            },
            "The local timezone offset is undefined if this Attribute is absent."
         ],
         "entity" : "Image",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3"
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
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
                              "targetdoc" : "PS3.15"
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
         "name" : "Certificate Type",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "req" : "1"
      },
      "(0018,106a)" : {
         "entity" : "Frame of Reference",
         "desc" : [
            "Data acquisition synchronization with external equipment",
            {
               "list" : [
                  [
                     "SOURCE",
                     "this equipment provides synchronization channel or trigger to other equipment"
                  ],
                  [
                     "EXTERNAL",
                     "this equipment receives synchronization channel or trigger from other equipment"
                  ],
                  [
                     "PASSTHRU",
                     "this equipment receives synchronization channel or trigger and forwards it"
                  ],
                  [
                     "NO TRIGGER",
                     "data acquisition not synchronized by common channel or trigger"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "name" : "Synchronization Trigger",
         "usage" : "C - Required if time synchronization was applied",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "module" : "Synchronization",
         "req" : "1"
      },
      "(0028,0108)" : {
         "entity" : "Series",
         "name" : "Smallest Pixel Value in Series",
         "desc" : "The minimum value of all images in this Series.",
         "module" : "General Series",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0028,1103)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
         "module" : "Image Pixel",
         "entity" : "Image",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "desc" : [
            "Specifies the format of the Blue Palette Color Lookup Table Data (0028,1203). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ]
      },
      "(0028,1051)" : {
         "req" : "1C",
         "module" : "VOI LUT",
         "usage" : "U",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "desc" : [
            [
               "Window Width for display. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.2"
                  }
               },
               " for further explanation."
            ],
            "Required if Window Center (0028,1050) is sent."
         ],
         "name" : "Window Width",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "req" : "3",
         "module" : "General Series"
      },
      "(0008,1010)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "module" : "General Equipment",
         "req" : "3",
         "entity" : "Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "name" : "Station Name"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a043)" : {
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1150)" : [
         {
            "entity" : "Image",
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2",
               "table_10-11"
            ],
            "usage" : "M",
            "module" : "General Image",
            "req" : "1"
         },
         {
            "name" : "Referenced SOP Class UID",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "entity" : "Image",
            "module" : "NM Image",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2",
               "table_10-11"
            ]
         }
      ],
      "(0054,0052)[<0>](0054,0053)" : {
         "req" : "1",
         "module" : "NM TOMO Acquisition",
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "entity" : "Image",
         "name" : "Number of Frames in Rotation",
         "desc" : "Number of angular views in this rotation."
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "desc" : [
            "The name of the external registry where further definition of the identified coding scheme may be obtained. Required if coding scheme is registered.",
            {
               "list" : [
                  [
                     "HL7",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "name" : "Coding Scheme Registry",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1C"
      },
      "(0008,2112)[<0>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7-9",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Image",
         "req" : "1"
      },
      "(0028,0008)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-14"
         ],
         "req" : "1",
         "module" : "Multi-frame",
         "desc" : [
            "Number of frames in a Multi-frame Image. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.6.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "name" : "Number of Frames",
         "entity" : "Image"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
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
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_b999d6e3-1cd0-4d28-8dc1-b515149c6197"
                                 },
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
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
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
                     "attrs" : {
                        "numeration" : "arabic"
                     },
                     "el" : "orderedlist"
                  },
                  "\n                  "
               ]
            }
         ],
         "name" : "Pixel Padding Value",
         "entity" : "Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "req" : "1C"
      },
      "(0028,1102)" : {
         "entity" : "Image",
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.5"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "req" : "1C",
         "module" : "Image Pixel"
      },
      "(0028,0103)" : {
         "name" : "Pixel Representation",
         "desc" : [
            "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
            {
               "list" : [
                  [
                     "0000H",
                     "unsigned integer."
                  ],
                  [
                     "0001H",
                     "2's complement"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Image",
         "req" : "1",
         "module" : "Image Pixel",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "usage" : "M"
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
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
                     "content" : [
                        "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
                     ]
                  },
                  "\n                    "
               ]
            }
         ],
         "name" : "MAC Calculation Transfer Syntax UID",
         "entity" : "Image",
         "module" : "SOP Common",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0012,0031)" : {
         "entity" : "Patient",
         "name" : "Clinical Trial Site Name",
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
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "entity" : "Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "module" : "General Series",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0054,0052)[<0>](0018,1142)" : {
         "req" : "3",
         "module" : "NM TOMO Acquisition",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "desc" : "Radial distance of the detector from the center of rotation, in mm. It shall have a single value that is an average value for this rotation, or it shall have one value per angular view.",
         "name" : "Radial Position",
         "entity" : "Image"
      },
      "(0008,0110)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Coding Scheme Identification Sequence",
         "entity" : "Image"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "name" : "DateTime",
         "entity" : "Series"
      },
      "(0054,0022)[<0>](0020,0032)" : {
         "module" : "NM Detector",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M",
         "desc" : [
            "The x, y, and z coordinates of the upper left hand corner (center of the first voxel transmitted) of the image, in mm. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.2.1.1"
               }
            },
            " for further explanation."
         ],
         "name" : "Image Position (Patient)",
         "entity" : "Image"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "name" : "Person's Telephone Numbers",
         "entity" : "Study",
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,9096)[<0>](0040,08ea)" : [
         {
            "entity" : "Image",
            "desc" : [
               "Units of measurement.",
               "Only a single Item shall be included in this Sequence.",
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.16.2.11.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "name" : "Measurement Units Code Sequence",
            "module" : "General Image",
            "req" : "1",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "desc" : [
               "Units of measurement.",
               "Only a single Item shall be included in this Sequence.",
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.16.2.11.1"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "name" : "Measurement Units Code Sequence",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "NM Image",
            "req" : "1"
         }
      ],
      "(0010,2180)" : {
         "name" : "Occupation",
         "desc" : "Occupation of the Patient.",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "req" : "3",
         "module" : "Patient Study"
      },
      "(0040,0513)[<0>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ]
      },
      "(0040,0253)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "name" : "Performed Procedure Step ID",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Image",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "module" : "Specimen",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "desc" : [
            "Standard defining the format of the Universal Entity ID (0040,0032). Required if Universal Entity ID (0040,0032) is present.",
            {
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
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0010,0010)" : {
         "module" : "Patient",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Patient's full name.",
         "name" : "Patient's Name",
         "entity" : "Patient"
      },
      "(0040,0515)[<0>](0040,0513)" : {
         "entity" : "Image",
         "desc" : [
            "Organization that assigned the Container Identifier.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "name" : "Issuer of the Container Identifier Sequence",
         "module" : "Specimen",
         "req" : "2",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,08ea)" : {
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Image",
         "req" : "1C",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ]
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1160)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Specimen",
         "name" : "Referenced Frame Number",
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
                        "xml:id" : "para_e06e8e0c-e051-4fbc-bfa9-82d4a32dd706"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "entity" : "Image"
      },
      "(0400,0561)" : {
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Image",
         "name" : "Original Attributes Sequence",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,2218)[<0>](0008,2220)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-9",
            "table_10-7"
         ],
         "req" : "3",
         "module" : "NM Image",
         "entity" : "Image",
         "desc" : [
            "Sequence of Items that modifies the anatomic region of interest of this Instance",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Anatomic Region Modifier Sequence"
      },
      "(0088,0200)" : {
         "mod_tables" : [
            "table_C.7-9"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Image",
         "name" : "Icon Image Sequence",
         "desc" : [
            "This icon image is representative of the Image.",
            "Only a single Item is permitted in this Sequence."
         ],
         "entity" : "Image"
      },
      "(0028,1056)" : {
         "name" : "VOI LUT Function",
         "desc" : [
            "Describes a VOI LUT function to apply to the values of Window Center (0028,1050) and Window Width (0028,1051).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.11.2.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            {
               "list" : [
                  [
                     "LINEAR",
                     null
                  ],
                  [
                     "SIGMOID",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            },
            [
               "When this attribute is not present, the interpretation of the values of Window Center (0028,1050) and Window Width (0028,1051) is linear as in ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.11.2.1.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "VOI LUT",
         "mod_tables" : [
            "table_C.11-2b"
         ],
         "usage" : "U"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "entity" : "Image",
         "name" : "Contribution DateTime",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "module" : "SOP Common",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "req" : "1C",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
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
         "entity" : "Patient",
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0018,106c)" : {
         "module" : "Synchronization",
         "req" : "1C",
         "usage" : "C - Required if time synchronization was applied",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "entity" : "Frame of Reference",
         "name" : "Synchronization Channel",
         "desc" : [
            [
               "Identifier of waveform channel that records the synchronization channel or trigger, see ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.4.2.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if synchronization channel or trigger is encoded in a waveform in this SOP Instance"
         ]
      },
      "(0040,0555)[<0>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "A concept that constrains the meaning of (i.e., defines the role of) the Observation Value. The \"Name\" component of a Name/Value pair.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Image",
         "module" : "Acquisition Context",
         "req" : "1",
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ]
      },
      "(0054,0202)" : {
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO",
         "req" : "3",
         "module" : "NM TOMO Acquisition",
         "name" : "Type of Detector Motion",
         "desc" : [
            "Describes the detector motion during acquisition.",
            {
               "list" : [
                  [
                     "STEP AND SHOOT",
                     "Interrupted motion, acquire only while stationary"
                  ],
                  [
                     "CONTINUOUS",
                     "Gantry motion and acquisition are simultaneous and continuous"
                  ],
                  [
                     "ACQ DURING STEP",
                     "Interrupted motion, acquisition is continuous"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Image"
      },
      "(0054,0012)[<0>](0054,0013)[<1>](0054,0014)" : {
         "module" : "NM Isotope",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "entity" : "Image",
         "name" : "Energy Window Lower Limit",
         "desc" : [
            "The lower limit of the energy window in KeV. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.4.10.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0008,1199)[<2>](0062,000b)" : {
         "entity" : "Image",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U",
         "req" : "1C",
         "module" : "Specimen"
      },
      "(0020,0052)" : {
         "mod_tables" : [
            "table_C.7-6"
         ],
         "usage" : "U",
         "req" : "1",
         "module" : "Frame of Reference",
         "name" : "Frame of Reference UID",
         "desc" : [
            "Uniquely identifies the frame of reference for a Series. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.4.1.1.1"
               }
            },
            " for further explanation."
         ],
         "entity" : "Frame of Reference"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "General Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series"
      },
      "(0088,0200)[<0>](0028,0011)" : {
         "name" : "Columns",
         "desc" : "Number of columns in the image",
         "entity" : "Image",
         "module" : "General Image",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ]
      },
      "(0040,0560)[<0>](0040,0620)[<1>](0040,a163)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "req" : "1C",
         "module" : "Specimen",
         "entity" : "Image",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ]
      },
      "(0008,0016)" : {
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
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "name" : "SOP Class UID",
         "entity" : "Image",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0050,0010)[<0>](0008,0070)" : {
         "mod_tables" : [
            "table_C.7-18"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Device",
         "entity" : "Image",
         "desc" : "Manufacturer of the device",
         "name" : "Manufacturer"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "entity" : "Image",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "name" : "Coding Scheme External ID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "2C",
         "module" : "SOP Common"
      },
      "(0018,1802)" : {
         "entity" : "Frame of Reference",
         "desc" : [
            "Method of time distribution used to synchronize this equipment.",
            {
               "list" : [
                  [
                     "NTP",
                     "Network Time Protocol"
                  ],
                  [
                     "IRIG",
                     "Inter Range Instrumentation Group"
                  ],
                  [
                     "GPS",
                     "Global Positioning System"
                  ],
                  [
                     "SNTP",
                     "Simple Network Time Protocol"
                  ],
                  [
                     "PTP",
                     "IEEE 1588 Precision Time Protocol"
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Time Distribution Protocol",
         "usage" : "C - Required if time synchronization was applied",
         "mod_tables" : [
            "table_C.7-7"
         ],
         "req" : "3",
         "module" : "Synchronization"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)[<2>](0008,1155)" : [
         {
            "entity" : "Image",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "req" : "1",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2",
               "table_10-11"
            ],
            "usage" : "M"
         },
         {
            "entity" : "Image",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "name" : "Referenced SOP Instance UID",
            "module" : "NM Image",
            "req" : "1",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2",
               "table_10-11"
            ]
         }
      ],
      "(0054,0052)[<0>](0018,1140)" : {
         "desc" : [
            "Direction of rotation of the detector about the patient. See Start Angle (0054,0200) for further explanation of direction.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "CW",
                     "clockwise (decreasing angle)"
                  ],
                  [
                     "CC",
                     "counter-clockwise (increasing angle)."
                  ]
               ]
            }
         ],
         "name" : "Rotation Direction",
         "entity" : "Image",
         "req" : "1",
         "module" : "NM TOMO Acquisition",
         "mod_tables" : [
            "table_C.8-12"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is TOMO, GATED TOMO, RECON TOMO or RECON GATED TOMO"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "entity" : "Image"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "entity" : "Image",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "usage" : "U",
         "req" : "1",
         "module" : "Common Instance Reference"
      },
      "(0018,0026)[<0>](0018,0027)" : {
         "module" : "NM Isotope",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "desc" : "Time of completion of administration of the intervention drug, using the same time base as for Acquisition Time (0008,0032).",
         "name" : "Intervention Drug Stop Time",
         "entity" : "Image"
      },
      "(0008,0012)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "name" : "Instance Creation Date",
         "entity" : "Image"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "module" : "Patient",
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
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     },
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Image",
         "module" : "General Image",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-9"
         ]
      },
      "(0054,0030)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-7"
         ],
         "req" : "1C",
         "module" : "NM Multi-frame",
         "entity" : "Image",
         "name" : "Phase Vector",
         "desc" : [
            "An array that contains the phase number for each frame. Required if the value of Frame Increment Pointer (0028,0009) includes the Tag for Phase Vector (0054,0030). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.8.1.4"
               }
            },
            " for specialization."
         ]
      },
      "(0018,0026)" : {
         "desc" : "Sequence of Items that describes the intervention drugs used. One or more Items are permitted in this Sequence.",
         "name" : "Intervention Drug Information Sequence",
         "entity" : "Image",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "req" : "3",
         "module" : "NM Isotope"
      },
      "(60xx,0050)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.9-2"
         ],
         "module" : "Overlay Plane",
         "req" : "1",
         "entity" : "Image",
         "name" : "Overlay Origin",
         "desc" : [
            "Location of first overlay point with respect to pixels in the image, given as row\\column.",
            "The upper left pixel of the image has the coordinate 1\\1.",
            "Column values greater than 1 indicate the overlay plane origin is to the right of the image origin. Row values greater than 1 indicate the overlay plane origin is below the image origin. Values less than 1 indicate the overlay plane origin is above or to the left of the image origin.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_698fb6e3-4667-46b4-9886-07e33aabd8b4"
                     },
                     "content" : [
                        "Values of 0\\0 indicate that the overlay pixels start 1 row above and one column to the left of the image pixels."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0018,1000)" : {
         "module" : "General Equipment",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "entity" : "Equipment",
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                     },
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
         "name" : "Device Serial Number"
      },
      "(0018,9004)" : {
         "entity" : "Image",
         "name" : "Content Qualification",
         "desc" : [
            "Content Qualification Indicator",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
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
               ]
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
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,9096)[<0>](0040,9211)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "General Image",
            "req" : "1C",
            "desc" : [
               "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
               "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value Last Value Mapped (0040,9213) is absent.",
               {
                  "el" : "note",
                  "content" : [
                     "\n                        ",
                     {
                        "attrs" : {
                           "xml:id" : "para_2a014060-59fc-451c-ad0d-b820960b5ad4"
                        },
                        "content" : [
                           "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                        ],
                        "el" : "para"
                     },
                     "\n                      "
                  ]
               },
               [
                  "See ",
                  {
                     "attrs" : {
                        "linkend" : "sect_C.7.6.16.2.11.1",
                        "xrefstyle" : "select: label"
                     },
                     "el" : "xref"
                  },
                  " for further explanation."
               ]
            ],
            "name" : "Real World Value Last Value Mapped",
            "entity" : "Image"
         },
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b"
            ],
            "module" : "NM Image",
            "req" : "1C",
            "entity" : "Image",
            "desc" : [
               "Specifies the last stored value mapped for the Real Word Value Intercept (0040,9224) and Real World Value Slope (0040,9225) or Real World Value LUT (0040,9212) of this Item.",
               "Required if Pixel Data (7FE0,0010) or Real World Value LUT Data (0040,9212) is present or Double Float Real World Value Last Value Mapped (0040,9213) is absent.",
               {
                  "content" : [
                     "\n                        ",
                     {
                        "el" : "para",
                        "attrs" : {
                           "xml:id" : "para_2a014060-59fc-451c-ad0d-b820960b5ad4"
                        },
                        "content" : [
                           "This Attribute may be used even when Float Pixel Data (7FE0,0008) or Double Float Pixel Data (7FE0,0009) are used instead of Pixel Data (7FE0,0010) if an integer of the size of this Attribute is sufficient to define the range."
                        ]
                     },
                     "\n                      "
                  ],
                  "el" : "note"
               },
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "xrefstyle" : "select: label",
                        "linkend" : "sect_C.7.6.16.2.11.1"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "name" : "Real World Value Last Value Mapped"
         }
      ],
      " (0010,0027) [<0>](0010,0028)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "req" : "3",
         "name" : "Subject Relative Position in Image",
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.4.1.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Patient"
      },
      "(0018,1050)" : {
         "entity" : "Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "req" : "3",
         "module" : "General Equipment",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "name" : "Date"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "entity" : "Image",
         "desc" : "Person's mailing address",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3"
      },
      "(0040,0555)[<0>](0040,a161)" : {
         "entity" : "Image",
         "name" : "Floating Point Value",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "usage" : "U - See ",
         "mod_tables" : [
            "table_C.7.6.14-1"
         ],
         "module" : "Acquisition Context",
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1C"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "General Study"
      },
      "(0054,0022)[<0>](0020,0037)" : {
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M",
         "req" : "2",
         "module" : "NM Detector",
         "name" : "Image Orientation (Patient)",
         "desc" : [
            "The direction cosines of the first row and the first column with respect to the patient. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.6.2.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Image"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      "(0040,9096)[<0>](0040,9220)[<1>](0008,1199)" : [
         {
            "req" : "1C",
            "module" : "General Image",
            "mod_tables" : [
               "table_C.7-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M",
            "entity" : "Image",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "name" : "Referenced SOP Sequence"
         },
         {
            "entity" : "Image",
            "name" : "Referenced SOP Sequence",
            "desc" : [
               "Composite SOP Instance Reference value for this name-value Item.",
               "Only a single Item shall be included in this Sequence.",
               "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
            ],
            "module" : "NM Image",
            "req" : "1C",
            "mod_tables" : [
               "table_C.8-9",
               "table_C.7.6.16-12b",
               "table_10-2"
            ],
            "usage" : "M"
         }
      ],
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "U",
         "entity" : "Image",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0022,0028)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-14"
         ],
         "module" : "Multi-frame",
         "req" : "3",
         "entity" : "Image",
         "desc" : [
            [
               "The multi-frame pixel data consists of left and right stereoscopic pairs. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.6.6.1.3"
                  }
               },
               "for further explanation."
            ],
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
         "name" : "Stereo Pairs Present"
      },
      "(0040,0520)[<0>](0050,0015)" : {
         "entity" : "Image",
         "desc" : "Width in mm of container component.",
         "name" : "Container Component Width",
         "req" : "3",
         "module" : "Specimen",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ]
      },
      "(0008,0030)" : {
         "desc" : "Time the Study started.",
         "name" : "Study Time",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "req" : "2",
         "module" : "General Study"
      },
      "(0054,0032)[<0>](0054,0210)" : {
         "name" : "Trigger Vector",
         "desc" : [
            "An array of trigger times when gating information is acquired simultaneously with the dynamic image data. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.4.14.1.1"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "entity" : "Image",
         "req" : "3",
         "module" : "NM Phase",
         "mod_tables" : [
            "table_C.8-14"
         ],
         "usage" : "C - Required if Image Type (0008,0008) Value 3 is DYNAMIC"
      },
      "(0054,0016)[<0>](0054,0306)[<1>](0054,0308)" : {
         "req" : "1",
         "module" : "NM Isotope",
         "mod_tables" : [
            "table_C.8-10"
         ],
         "usage" : "M",
         "entity" : "Image",
         "desc" : "The Item number in the Energy Window Information Sequence to which the following calibration data relates. The Items are numbered starting from 1.",
         "name" : "Energy Window Number"
      },
      "(0008,0106)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Context Group Version",
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
         ]
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "module" : "Patient",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "name" : "Retrieve AE Title"
      },
      "(0040,0560)[<0>](0040,0562)[<1>](0040,0032)" : {
         "entity" : "Image",
         "name" : "Universal Entity ID",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Specimen",
         "req" : "1C"
      },
      "(0088,0200)[<0>](0028,0101)" : {
         "module" : "General Image",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-9",
            "table_C.7-11b"
         ],
         "usage" : "M",
         "entity" : "Image",
         "name" : "Bits Stored",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.5",
                  "targetptr" : "PS3.5",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            " for further explanation."
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "usage" : "M",
         "req" : "1C",
         "module" : "SOP Common",
         "name" : "Referenced Segment Number",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "entity" : "Image"
      },
      "(0012,0042)" : {
         "module" : "Clinical Trial Subject",
         "req" : "1C",
         "usage" : "U",
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
         "name" : "Clinical Trial Subject Reading ID",
         "entity" : "Patient"
      },
      "(0040,a390)" : {
         "req" : "1C",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
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
         "entity" : "Image"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "entity" : "Series"
      },
      "(0040,0560)[<0>](0040,0610)[<1>](0040,0612)[<2>](0040,a123)" : {
         "entity" : "Image",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "module" : "Specimen",
         "mod_tables" : [
            "table_C.7.6.22-2",
            "table_10-2"
         ],
         "usage" : "U"
      },
      "(0028,1201)" : {
         "desc" : [
            "Red Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "name" : "Red Palette Color Lookup Table Data",
         "entity" : "Image",
         "req" : "1C",
         "module" : "Image Pixel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ]
      },
      "(0028,1203)" : {
         "req" : "1C",
         "module" : "Image Pixel",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-11b"
         ],
         "entity" : "Image",
         "name" : "Blue Palette Color Lookup Table Data",
         "desc" : [
            "Blue Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.6"
               }
            },
            " for further explanation."
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Image",
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_cbf16d70-7dfc-44e9-85f6-9cf9aea9f0eb"
                                 },
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
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 },
                                 "el" : "para"
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
         "name" : "Certificate of Signer",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0054,0022)[<0>](0018,1183)" : {
         "entity" : "Image",
         "name" : "X Focus Center",
         "desc" : [
            "Center of focus along a row. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.4.11.1.2",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            " for further explanation."
         ],
         "req" : "3",
         "module" : "NM Detector",
         "mod_tables" : [
            "table_C.8-11"
         ],
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "entity" : "Image",
         "name" : "Attribute Modification DateTime",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0008,1164)[<0>](0008,1163)" : {
         "module" : "Frame Extraction",
         "req" : "1C",
         "usage" : "C - Required if the SOP Instance was created in response to a Frame-Level retrieve request",
         "mod_tables" : [
            "table_C.12-9"
         ],
         "entity" : "Image",
         "name" : "Time Range",
         "desc" : [
            "The start and end times of the frames that were extracted.",
            "Required if object extraction is based on a Frame Level Retrieve using Time Range (0008,1163).",
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.4",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.4"
                  }
               },
               " \"Instance and Frame Level Retrieve SOP Classes\""
            ]
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "module" : "General Series",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "name" : "Value Type"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series"
      },
      "(0040,0520)[<0>](0050,001c)" : {
         "name" : "Container Component Length",
         "desc" : "Length in mm of container component.",
         "entity" : "Image",
         "mod_tables" : [
            "table_C.7.6.22-2"
         ],
         "usage" : "U",
         "req" : "3",
         "module" : "Specimen"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "entity" : "Image",
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "module" : "SOP Common",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
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
      "Can't handle table_8.8-1 (in table_C.8-5 after (0054,0410))",
      "Can't handle table_8.8-1 (in table_C.8-5 after (0054,0412))",
      "Can't handle table_8.8-1 (in table_C.8-5 after (0054,0414))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0008,9215))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-9:table_C.7.6.16-12b:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.14-1 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7-18 after (0050,0010))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2 after (0040,0518))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2 after (0050,0012))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2 after (0040,059A))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.7.6.22-2:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_10-7 after (0008,2218))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_10-7 after (0008,2220))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_10-7:table_10-8 after (0008,2228))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_10-7:table_10-8 after (0008,2230))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_C.7.6.16-12b after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_C.7.6.16-12b:table_10-2 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_C.7.6.16-12b:table_10-2 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.8-9:table_C.7.6.16-12b:table_10-2 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.8-10 after (0054,0300))",
      "Can't handle table_8.8-1 (in table_C.8-10 after (0054,0302))",
      "Can't handle table_8.8-1 (in table_C.8-10 after (0054,0304))",
      "Can't handle table_8.8-1 (in table_C.8-10 after (0018,0029))",
      "Can't handle table_8.8-1 (in table_C.8-10 after (0054,0302))",
      "Can't handle table_8.8-1 (in table_C.8-11 after (0054,0220))",
      "Can't handle table_8.8-1 (in table_C.8-11 after (0054,0222))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
