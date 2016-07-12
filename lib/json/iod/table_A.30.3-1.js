var data = 
{
   "tags" : {
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "DateTime",
         "module" : "RT Series"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "SOP Common",
         "name" : "Referenced Segment Number",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,0040)" : {
         "req" : "2",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient's Sex",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Floating Point Value",
         "module" : "RT Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
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
         "name" : "Retrieve URI",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0050)" : {
         "usage" : "M",
         "req" : "2",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Accession Number",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0060)[<4>](0008,1072)[<5>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "module" : "RT Brachy Session Record"
      },
      "(300a,0206)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.8-54"
         ],
         "desc" : "Manufacturer's model name of the equipment used for treatment delivery.",
         "name" : "Manufacturer's Model Name",
         "module" : "RT Treatment Machine Record",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300c,000e)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Source Number",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Uniquely identifies the referenced Source within the Recorded Source Sequence (3008,0100) for current Application Setup."
      },
      "(3008,0220)[<0>](3008,0240)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "name" : "Fraction Status Summary Sequence",
         "module" : "RT Treatment Summary Record",
         "desc" : [
            "Sequence describing status of fractions in Fraction Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "name" : "Data Elements Signed",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0008,1110)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-3"
         ]
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
         "module" : "RT Series",
         "name" : "Text Value",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0018,9004)" : {
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Content Qualification",
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
         ]
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "module" : "RT Series",
         "name" : "Reason for Requested Procedure Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0166)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Safe Position Return Date",
         "module" : "RT Brachy Session Record",
         "desc" : "Date on which the source(s) returned to the safe. Required if Recorded Channel Sequence (3008,0130) is sent and Brachy Treatment Type (300A,0202) is not MANUAL or PDR.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(300a,0206)[<0>](0018,1000)" : {
         "mod_tables" : [
            "table_C.8-54"
         ],
         "desc" : "Manufacturer's serial number of the equipment used for treatment delivery.",
         "module" : "RT Treatment Machine Record",
         "name" : "Device Serial Number",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M"
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
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(3008,0070)[<0>](3008,0072)" : {
         "desc" : "Unique identifier of dose reference point within RT Treatment Record IOD. Required only if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "req" : "1C",
         "usage" : "U",
         "entity" : "Treatment Record",
         "name" : "Calculated Dose Reference Number",
         "module" : "Calculated Dose Reference Record"
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
                     "attrs" : {
                        "xml:id" : "para_6a16f809-6605-41ac-8d02-b6104b0bc0ad"
                     },
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ],
                     "el" : "para"
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](300a,0298)" : {
         "desc" : "Manufacturer of Source Applicator.",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Source Applicator Manufacturer"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "name" : "Referenced Segment Number",
         "module" : "RT Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a4)" : {
         "desc" : "User-defined label for Shielding Device.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "U",
         "module" : "RT Patient Setup",
         "name" : "Shielding Device Label"
      },
      "(3008,0110)[<0>](300a,0236)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Application Setup Name",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "User-defined name for Application Setup."
      },
      "(0018,1008)" : {
         "name" : "Gantry ID",
         "module" : "General Equipment",
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Identifier of the gantry or positioner."
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Study Instance UID",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0008,0031)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "name" : "Series Time",
         "module" : "RT Series",
         "desc" : "Time the Series started.",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(0010,0010)" : {
         "module" : "Patient",
         "name" : "Patient's Name",
         "usage" : "M",
         "req" : "2",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Patient's full name."
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](3008,0066)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "User-defined description of reason for override of parameter specified by Override Parameter Pointer (3008,0062).",
         "name" : "Override Reason",
         "module" : "RT Brachy Session Record",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0060)[<4>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "module" : "RT Brachy Session Record",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Identification of the operator who authorized override. Only a single Item is permitted in this sequence."
      },
      "(300a,0206)[<0>](0008,0070)" : {
         "req" : "2",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Machine Record",
         "name" : "Manufacturer",
         "desc" : "Manufacturer of the equipment used for treatment delivery.",
         "mod_tables" : [
            "table_C.8-54"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "module" : "Patient",
         "name" : "HL7 Instance Identifier",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ]
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Context Group Version"
      },
      "(0100,0410)" : {
         "module" : "SOP Common",
         "name" : "SOP Instance Status",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "A flag that indicates the storage status of the SOP Instance.",
            {
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
               ],
               "type" : "variablelist"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     },
                     "el" : "para",
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ]
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0028,0303)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
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
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
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
      "(3008,0110)[<0>](300a,0240)" : {
         "name" : "Template Number",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Identification number of the Template."
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0090)[<2>](3008,0076)" : {
         "name" : "Calculated Dose Reference Dose Value",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Calculated Dose (Gy)."
      },
      "(0400,0500)" : {
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1C",
         "module" : "SOP Common",
         "name" : "Encrypted Attributes Sequence",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,2202)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Patient Species Code Sequence",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,009d)[<0>](0040,1104)" : {
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
         "name" : "Person's Telecom Information",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(3008,0250)" : {
         "name" : "Treatment Date",
         "module" : "RT General Treatment Record",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "desc" : [
            "Date when current fraction was delivered, or Date last fraction was delivered in case of ",
            {
               "attrs" : {
                  "linkend" : "sect_A.31",
                  "xrefstyle" : "select: title"
               },
               "el" : "xref"
            },
            ". See Note."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(3008,0110)[<0>](3008,0080)[<1>](3008,0016)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "name" : "Measured Dose Value",
         "module" : "RT Brachy Session Record",
         "desc" : [
            "Measured Dose in units specified by Dose Units (3004,0002) in sequence referenced by Measured Dose Reference Sequence (3008,0010) or Dose Reference Sequence (300A,0010) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.10",
                  "xrefstyle" : "select: title"
               }
            },
            " of referenced RT Plan as defined above."
         ],
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](0008,1072)[<4>](0008,0080)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "name" : "Institution Name",
         "module" : "RT Brachy Session Record",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ]
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
         "req" : "3",
         "usage" : "U",
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series ID"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](300a,0402)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "module" : "RT Patient Setup",
         "name" : "Setup Image Comment",
         "desc" : "Comment on the Setup Image.",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0008,0110)" : {
         "name" : "Coding Scheme Identification Sequence",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Rational Numerator Value",
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
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](0008,1072)[<4>](0040,1102)" : {
         "name" : "Person's Address",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "name" : "Station Name",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance."
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "name" : "Reason for the Requested Procedure",
         "module" : "RT Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : "Reason for requesting this procedure."
      },
      "(0008,009d)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "name" : "Consulting Physician Identification Sequence",
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0166)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Safe Position Return Date",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Date on which the source(s) returned to the safe."
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Coding Scheme UID",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0010)[<0>](3004,0002)" : {
         "name" : "Dose Units",
         "module" : "Measured Dose Reference Record",
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "desc" : [
            "Units used to describe measured dose.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0010,0027)[<0>](0010,0028)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Subject Relative Position in Image"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Deidentification Action Sequence"
      },
      "(0008,0014)" : {
         "module" : "SOP Common",
         "name" : "Instance Creator UID",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Uniquely identifies device that created the SOP Instance."
      },
      "(300a,0206)" : {
         "mod_tables" : [
            "table_C.8-54"
         ],
         "desc" : [
            "Sequence describing treatment machine used for treatment delivery.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Treatment Machine Sequence",
         "module" : "RT Treatment Machine Record",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
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
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Universal Entity ID Type"
      },
      "(0010,2299)" : {
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "2C",
         "module" : "Patient",
         "name" : "Responsible Organization"
      },
      "(3008,0050)" : {
         "name" : "Treatment Summary Calculated Dose Reference Sequence",
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "desc" : [
            "Sequence of references to Calculated Dose References.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Referenced SOP Class UID",
         "module" : "SOP Common"
      },
      "(3008,0100)[<0>](300a,022c)" : {
         "name" : "Source Strength Reference Date",
         "module" : "RT Brachy Session Record",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Reference date for Reference Air Kerma Rate (300A,022A) or Source Strength (300A,022B) of Isotope."
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "module" : "SOP Common",
         "name" : "Deidentification Action",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Recommended action to be performed during de-identification on elements listed in Identifying Private Elements (0008,0306) within this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d169d5a7-02bb-4199-80d3-99e87cbc8c6d"
                     },
                     "el" : "para",
                     "content" : [
                        "A specific type of action is suggested in order to minimize the impact of\n                    de-identification on the behavior of recipients that use the Private Data\n                    Elements."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
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
                           "el" : "listitem",
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
                           ]
                        },
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_d1ef55e5-ae5a-41bf-a17e-aee8ee6c841f"
                                 },
                                 "el" : "para",
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
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_62b4d252-a377-4a7b-9905-82f5437ccd6c"
                                 }
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
            }
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0172)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Identification Number of this delivered Pulse.",
            "The pulse numbers for a treatment start at 1 and increase monotonically by 1. A given SOP instance might only contain some of the pulses of the given treatment."
         ],
         "name" : "Pulse Number",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0010,1100)[<0>](0040,e024)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "XDS Retrieval Sequence",
         "module" : "Patient"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "MAC Algorithm",
         "module" : "SOP Common",
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
                     "el" : "para",
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
      "(0040,0275)[<0>](0032,1064)" : {
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Requested Procedure Code Sequence",
         "module" : "RT Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     }
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(300a,0200)" : {
         "name" : "Brachy Treatment Technique",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Type of brachytherapy treatment technique.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
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
               ]
            },
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: title",
                     "linkend" : "sect_A.20"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient"
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
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "name" : "Institution Code Sequence",
         "module" : "SOP Common"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300a,0110)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Number of Control Points",
         "desc" : "Number of control points in Channel. For an N-segment Channel there will be 2N (stepwise movement) or N+1 (continuous movement) control points.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
         ]
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "name" : "Series Instance UID",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0060)[<4>](3008,0062)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Data Element Tag of the attribute that was overridden.",
         "name" : "Override Parameter Pointer",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,01b2)" : {
         "module" : "RT Patient Setup",
         "name" : "Setup Technique Description",
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "User-defined description of Setup Technique."
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0132)" : {
         "name" : "Specified Channel Total Time",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Total amount of time in seconds, scaled for the current source delivery strength and other delivery factors, specified to be delivered at the time of treatment between the first Control Point and the final Control Point for the current Channel.",
            "In the case of resuming a partially delivered treatment, the Specified Channel Total time will only include the remainder to be treated.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.22.2"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ]
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "name" : "Issuer of Patient ID"
      },
      "(3008,0110)[<0>](3008,0120)[<1>](3008,0122)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Identification number of the Brachy Accessory Device. The value of Brachy Accessory Device Number (300A,0262) shall be unique within the Application Setup in which it is created.",
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Brachy Accessory Device Number",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "name" : "Contribution Description",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Description of the contribution the equipment made to the composite instance."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Person Name",
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
      "(3008,0110)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Sequence of Application Setups for RT Treatment Record for current RT Plan.",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "RT Brachy Session Record",
         "name" : "Treatment Session Application Setup Sequence",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series"
      },
      "(3008,0010)[<0>](3008,0064)" : {
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "1C",
         "name" : "Measured Dose Reference Number",
         "module" : "Measured Dose Reference Record",
         "desc" : "Unique identifier of measured dose point. Required only if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "mod_tables" : [
            "table_C.8-55"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "module" : "RT Series",
         "name" : "Content Item Modifier Sequence",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
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
      "(0010,0024)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ]
      },
      "(0040,0253)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "name" : "Performed Procedure Step ID",
         "module" : "RT Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial or research. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.2.3.1.1"
               },
               "el" : "xref"
            },
            "."
         ],
         "name" : "Clinical Trial Time Point Description",
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study"
      },
      "(3008,0220)[<0>](3008,0224)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
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
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "2"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Block Identifying Information Status",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetptr" : "sect_E.3.10"
                  }
               },
               "."
            ],
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "module" : "General Study",
         "name" : "Person's Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(0012,0064)" : {
         "name" : "De-identification Method Code Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ]
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "module" : "Patient",
         "name" : "Patient ID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient"
      },
      "(300a,0180)[<0>](300a,01a0)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : [
            "Sequence of Shielding Devices used in Patient Setup.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Shielding Device Sequence",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](300a,0242)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "User-defined type for Template Device.",
         "module" : "RT Brachy Session Record",
         "name" : "Template Type",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1",
         "usage" : "M"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)" : {
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "module" : "RT Brachy Session Record",
         "name" : "Pulse Specific Brachy Control Point Delivered Sequence",
         "desc" : [
            "Brachy Control Point Delivered Sequence for each PDR treatment pulse.",
            "Number of items in the sequence shall be equal to the Delivered Number of Pulses (3008,0138)."
         ],
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0008,1010)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "module" : "General Equipment",
         "name" : "Station Name",
         "entity" : "Equipment",
         "req" : "3",
         "usage" : "M"
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
         "name" : "Referenced Segment Number",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(3008,0010)[<0>](3008,0012)" : {
         "module" : "Measured Dose Reference Record",
         "name" : "Measured Dose Description",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "desc" : "User-defined description of Dose Reference (e.g., \"Exit dose\", \"Point A\")."
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Brachy Control Point Delivered Sequence",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Sequence of machine configurations describing this Channel.",
            "Two or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_A.20",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.8.22.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for description of Brachy Control Point Delivered Sequence."
            ]
         ]
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "name" : "WADO-RS Retrieval Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
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
                     "el" : "para",
                     "content" : [
                        "Retrieval via WADO-URI is addressed in the WADO Retrieval Sequence (0040,E023). Retrieval via  WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_6afb22cc-92e8-4ec8-9a23-820f4c4a769b"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(300a,0202)" : {
         "desc" : [
            "Type of brachytherapy treatment.",
            {
               "title" : "Defined Terms:",
               "type" : "variablelist",
               "list" : [
                  [
                     "MANUAL",
                     "Manually positioned"
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
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Brachy Treatment Type"
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
               ],
               "el" : "note"
            }
         ],
         "name" : "Identifier Type Code",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a8)" : {
         "desc" : "Position/Notch number of Shielding Device.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "name" : "Shielding Device Position"
      },
      "(0010,0030)" : {
         "req" : "2",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient's Birth Date",
         "desc" : "Birth date of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(3008,0050)[<0>](3008,0052)" : {
         "module" : "RT Treatment Summary Record",
         "name" : "Cumulative Dose to Dose Reference",
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "desc" : "Cumulative Dose delivered to Dose Reference (Gy)."
      },
      "(0040,0245)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Time on which the Performed Procedure Step started.",
         "module" : "RT Series",
         "name" : "Performed Procedure Step Start Time",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "module" : "Patient",
         "name" : "DICOM Media Retrieval Sequence",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "RT Series",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series"
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
         "module" : "Patient",
         "name" : "Strain Description",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(300a,0180)[<0>](300a,0410)" : {
         "module" : "RT Patient Setup",
         "name" : "Motion Synchronization Sequence",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : [
            "Sequence of Motion Synchronization.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(3008,0070)[<0>](300c,0051)" : {
         "name" : "Referenced Dose Reference Number",
         "module" : "Calculated Dose Reference Record",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "desc" : [
            "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.10",
                  "xrefstyle" : "select: title"
               }
            },
            " of referenced RT Plan. Required only if Calculated Dose Reference Number (3008,0072) is not sent. It shall not be present otherwise."
         ]
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0194)" : {
         "desc" : "User-defined label identifier for Fixation Device.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "req" : "2",
         "entity" : "Treatment Record",
         "name" : "Fixation Device Label",
         "module" : "RT Patient Setup"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Scheduled Procedure Step Description",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(3008,00e0)[<0>](3008,0052)" : {
         "desc" : "Cumulative Dose delivered to Dose Reference (Gy).",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "name" : "Cumulative Dose to Dose Reference",
         "module" : "RT Treatment Summary Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](300a,02d2)" : {
         "desc" : [
            "Distance in mm between current Control Point Position and the distal-most possible Source position in current Channel.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.15.9"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Control Point Relative Position"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "module" : "RT Series",
         "name" : "Value Type",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
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
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,1201)" : {
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
            "table_C.7-8"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Time of Last Calibration"
      },
      "(0010,2292)" : {
         "entity" : "Patient",
         "req" : "2C",
         "usage" : "M",
         "name" : "Patient Breed Description",
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "module" : "SOP Common",
         "name" : "Institution Name",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Institution where the equipment that contributed to the composite instance is located."
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "name" : "Person's Address",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "module" : "SOP Common",
         "name" : "Coding Scheme Responsible Organization",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,1021)" : {
         "module" : "Patient Study",
         "name" : "Patient's Size Code Sequence",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "name" : "Institution Address",
         "module" : "RT Series",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "name" : "Storage Media File-Set ID",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside."
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,0117)" : {
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Context UID",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced SOP Sequence",
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
      "(0020,9172)" : {
         "module" : "SOP Common",
         "name" : "Conversion Source Attributes Sequence",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ]
      },
      "(3008,0110)[<0>](300c,0040)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-58",
            "table_10-11"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
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
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Value Type"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "module" : "RT Series",
         "name" : "Person Name",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,1002)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Other Patient IDs Sequence",
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,1050)" : {
         "module" : "General Equipment",
         "name" : "Spatial Resolution",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center."
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
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Context Identifier"
      },
      "(0010,2180)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Occupation of the Patient.",
         "name" : "Occupation",
         "module" : "Patient Study",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Date",
         "module" : "RT Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence"
      },
      "(300a,0180)[<0>](300a,01b0)" : {
         "desc" : [
            "Setup Technique used in Patient Setup.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "name" : "Setup Technique"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0162)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Safe Position Exit Date",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Date on which the source(s) exited the safe. Required if Recorded Channel Sequence (3008,0130) is sent and Brachy Treatment Type (300A,0202) is not MANUAL or PDR."
      },
      "(0010,0219)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Strain Code Sequence",
         "module" : "Patient",
         "desc" : [
            [
               "A coded identification of the strain of the patient. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "One or more Items are permitted in this sequence. If more than one item is present, each item represents the same information but encoded using a different coding scheme (rather than post-coordinated modifiers)."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](300a,0291)" : {
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M",
         "name" : "Source Applicator ID",
         "module" : "RT Brachy Session Record",
         "desc" : "User or machine supplied identifier for Source Applicator.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "RT Series",
         "name" : "Rational Denominator Value",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0010,2160)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Ethnic Group",
         "desc" : "Ethnic group or race of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(3008,0110)[<0>](3008,0130)" : {
         "name" : "Recorded Channel Sequence",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Sequence of Channels for current Application Setup.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0060)[<4>](0008,1072)[<5>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Person's Telephone Numbers"
      },
      "(3008,00e0)[<0>](300c,0051)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
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
                  "linkend" : "sect_C.8.8.17",
                  "xrefstyle" : "select: title"
               }
            },
            "."
         ],
         "name" : "Referenced Dose Reference Number",
         "module" : "RT Treatment Summary Record",
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,0182)" : {
         "name" : "Patient Setup Number",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "Identification number of the Patient Setup. The value of Patient Setup Number (300A,0182) shall be unique within the RT Plan in which it is created."
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0060)[<4>](3008,0066)" : {
         "name" : "Override Reason",
         "module" : "RT Brachy Session Record",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "User-defined description of reason for override."
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300a,0284)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Channel Length",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Length of Channel (mm). See ",
            {
               "attrs" : {
                  "linkend" : "sect_A.20",
                  "xrefstyle" : "select: title"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "desc" : "May include Sequence Attributes and their Items.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Any Attribute from the main data set that was modified or removed."
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0010,0027)[<0>](0010,0024)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0060)[<4>](0008,1072)[<5>](0008,0082)" : {
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Date",
         "module" : "RT Series",
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
      "(0010,2294)[<0>](0010,2295)" : {
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1",
         "name" : "Breed Registration Number",
         "module" : "Patient",
         "desc" : "Identification number of an animal within the registry.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0192)" : {
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Type",
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
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
         ]
      },
      "(0020,000d)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Instance UID",
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Numeric Value",
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced SOP Sequence",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300a,0180)[<0>](300a,01d4)" : {
         "name" : "Table Top Longitudinal Setup Displacement",
         "module" : "RT Patient Setup",
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "Longitudinal Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., longitudinal offset between patient positioning performed using setup and treatment position."
      },
      "(0040,0280)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Comments on the Performed Procedure Step",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(3008,0056)" : {
         "req" : "2",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "name" : "Most Recent Treatment Date",
         "desc" : "Date of delivery of the most recent administration.",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0168)" : {
         "name" : "Safe Position Return Time",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Time on which the source(s) returned to the safe. Required if Recorded Channel Sequence (3008,0130) is sent and Brachy Treatment Type (300A,0202) is not MANUAL or PDR."
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0164)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "name" : "Safe Position Exit Time",
         "module" : "RT Brachy Session Record",
         "desc" : "Time on which the source(s) exited the safe. Required if Recorded Channel Sequence (3008,0130) is sent and Brachy Treatment Type (300A,0202) is not MANUAL or PDR.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0008,1072)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Operator Identification Sequence",
         "desc" : "Identification of the operator(s) supporting the Series. One or more items may be present in this sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present.",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "DICOM Retrieval Sequence",
         "module" : "Patient",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,00f9)" : {
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "3",
         "name" : "Accessory Code",
         "module" : "RT Patient Setup"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "name" : "Coding Scheme External ID",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "2C",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(3008,0030)[<0>](0008,1155)" : {
         "module" : "RT General Treatment Record",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0010,4000)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient Comments",
         "desc" : "User-defined additional information about the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "name" : "Manufacturer",
         "module" : "SOP Common"
      },
      "(0010,1010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Age of the Patient.",
         "name" : "Patient's Age",
         "module" : "Patient Study",
         "entity" : "Study",
         "usage" : "U",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "RT Series",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "module" : "General Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "module" : "SOP Common",
         "name" : "Identifying Private Elements",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ]
      },
      "(0008,0122)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "name" : "Mapping Resource Name",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0100)[<0>](3008,0105)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Serial Number of source.",
         "module" : "RT Brachy Session Record",
         "name" : "Source Serial Number",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(0008,0081)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "name" : "Institution Address",
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
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
         "module" : "RT Series",
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C"
      },
      "(0008,0090)" : {
         "usage" : "M",
         "req" : "2",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Referring Physician's Name",
         "desc" : "Name of the patient's referring physician",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "name" : "Date of Last Calibration",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Time"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300a,02a4)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Length of Transfer Tube of current afterloading Channel (mm). Required if value Transfer Tube Number (300A,02A2) is not zero length.",
         "module" : "RT Brachy Session Record",
         "name" : "Transfer Tube Length",
         "req" : "2C",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](300c,0040)[<1>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(3008,0100)[<0>](300a,0214)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Type of Source.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ],
         "name" : "Source Type",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Certified Timestamp Type",
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
                           "el" : "olink",
                           "attrs" : {
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.15",
                              "targetdoc" : "PS3.15"
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0025)" : {
         "name" : "Treatment Control Point Time",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Time when the delivery of radiation at this control point began.",
            "For the final control point, this shall be the Time when the previous control point ended."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
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
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_10.14"
                  }
               },
               " for Defined Terms."
            ]
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300a,02a2)" : {
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "2",
         "name" : "Transfer Tube Number",
         "module" : "RT Brachy Session Record",
         "desc" : "Identification number of the Transfer Tube. The value of Transfer Tube Number (300A,02A2) shall be unique within the Channel in which it is created.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(300a,0180)[<0>](300a,0190)" : {
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Sequence",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : [
            "Sequence of Fixation Devices used in Patient Setup.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0090)" : {
         "name" : "Referenced Calculated Dose Reference Sequence",
         "module" : "RT Brachy Session Record",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Sequence of doses estimated for each treatment delivery.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b6)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : [
            "Type of Setup Device used for Patient alignment.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ],
         "module" : "RT Patient Setup",
         "name" : "Setup Device Type",
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "1"
      },
      "(3008,0110)[<0>](300a,0232)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "name" : "Application Setup Type",
         "module" : "RT Brachy Session Record",
         "desc" : [
            "Type of Application Setup.",
            {
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
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "module" : "RT Series",
         "name" : "Numeric Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(3008,00e0)" : {
         "module" : "RT Treatment Summary Record",
         "name" : "Treatment Summary Measured Dose Reference Sequence",
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "desc" : [
            "Sequence of references to Measured Dose References.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         ],
         "module" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](300a,0296)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Length of Source Applicator (mm), defined as the distance between the connector of the applicator and the distal-most position of the source.",
         "module" : "RT Brachy Session Record",
         "name" : "Source Applicator Length",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(300a,0206)[<0>](0008,1040)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Machine Record",
         "name" : "Institutional Department Name",
         "desc" : "Department in the institution where the equipment is located that was used for treatment delivery.",
         "mod_tables" : [
            "table_C.8-54"
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
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
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "name" : "Time of Last Calibration",
         "module" : "SOP Common"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0080)[<2>](3008,0082)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "References Measured Dose Reference specified by Measured Dose Reference Number (3008,0064) in Measured Dose Reference Sequence (3008,0010). Required if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Measured Dose Reference Number",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "name" : "Type of Instances",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
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
         ]
      },
      "(3008,0110)[<0>](3008,0090)[<1>](3008,0076)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Calculated Dose (Gy).",
         "name" : "Calculated Dose Reference Dose Value",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "module" : "General Study",
         "name" : "Institution Name",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0010,0216)" : {
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Strain Stock Sequence"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Person's Telecom Information"
      },
      "(300a,0180)[<0>](300a,01d2)" : {
         "desc" : "Vertical Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., vertical offset between patient positioning performed using setup and treatment position.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "name" : "Table Top Vertical Setup Displacement",
         "module" : "RT Patient Setup"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Encrypted Content Transfer Syntax UID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
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
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Measurement Units Code Sequence"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Patient",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0010,0216)[<0>](0010,0215)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "name" : "DateTime",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
      "(0008,1062)[<0>](0040,1101)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
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
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,00f9)" : {
         "name" : "Accessory Code",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader."
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Scheduled Protocol Code Sequence"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Instance UID"
      },
      "(3008,0050)[<0>](300c,0051)" : {
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
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.17"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "module" : "RT Treatment Summary Record",
         "name" : "Referenced Dose Reference Number"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0060)[<4>](0008,1072)[<5>](0040,1101)" : {
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "module" : "RT Brachy Session Record",
         "name" : "Person Identification Code Sequence",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Referenced Segment Number",
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
      "(0010,0027)[<0>](0010,0024)[<1>](0040,003a)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient"
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "desc" : "URL specifying the location of the referenced instance(s).",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Retrieve URL",
         "module" : "Patient"
      },
      "(3008,0100)[<0>](300a,022e)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Source Strength Reference Time",
         "module" : "RT Brachy Session Record",
         "desc" : "Reference time for Air Kerma Rate (300A,022A) or Source Strength (300A,022B) of Isotope.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0164)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Safe Position Exit Time",
         "desc" : "Time at which the source(s) exited the safe.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a6)" : {
         "name" : "Shielding Device Description",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "User-defined description of Shielding Device."
      },
      "(3008,0100)" : {
         "name" : "Recorded Source Sequence",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Sequence of Sources to be used within Application Setups.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0010,0032)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth time of the Patient.",
         "module" : "Patient",
         "name" : "Patient's Birth Time",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient"
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1",
         "name" : "Type of Patient ID",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,1001)" : {
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Requested Procedure ID"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "name" : "Value Type",
         "module" : "RT Series",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
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
         ]
      },
      "(0010,1001)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Other names used to identify the patient.",
         "name" : "Other Patient Names",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,1111)" : {
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced Performed Procedure Step Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Protocol Context Sequence"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "module" : "Patient Study"
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0036)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "module" : "Patient"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0150)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Sequence of Channel Shields associated with current Channel.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_A.20",
                     "xrefstyle" : "select: title"
                  }
               },
               " for description of Channel Shields."
            ]
         ],
         "name" : "Recorded Channel Shield Sequence",
         "module" : "RT Brachy Session Record",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0010,0021)" : {
         "module" : "Patient",
         "name" : "Issuer of Patient ID",
         "entity" : "Patient",
         "req" : "3",
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
         ]
      },
      "(0040,0260)" : {
         "module" : "RT Series",
         "name" : "Performed Protocol Code Sequence",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence."
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "desc" : "Person's mailing address",
         "module" : "RT Series",
         "name" : "Person's Address",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0021)" : {
         "name" : "Series Date",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : "Date the Series started."
      },
      "(0012,0030)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial or research data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.4"
               }
            },
            "."
         ],
         "name" : "Clinical Trial Site ID",
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "usage" : "U",
         "entity" : "Patient"
      },
      "(0008,0030)" : {
         "usage" : "M",
         "req" : "2",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Study Time",
         "desc" : "Time the Study started.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0028,0120)" : {
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
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_6f2fdee2-7dad-437a-8654-b37b23363d43"
                                 }
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
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
                                 "content" : [
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
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
            }
         ],
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Pixel Padding Value"
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.3"
               }
            },
            "."
         ],
         "name" : "Clinical Trial Protocol Name",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
         "req" : "2",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "MAC ID Number"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Institution Address"
      },
      "(0008,001b)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0080)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "name" : "Institution Name",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Storage Media File-Set UID"
      },
      "(3008,0110)[<0>](3008,0116)" : {
         "desc" : [
            "Results of check-wire travel through all channels of current Application Setup.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "PASSED",
                     "Passed check"
                  ],
                  [
                     "FAILED",
                     "Failed check"
                  ],
                  [
                     "UNKNOWN",
                     "Unknown status"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.8-58"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "name" : "Application Setup Check",
         "module" : "RT Brachy Session Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "name" : "Floating Point Value",
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0010,2203)" : {
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ],
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     }
                  },
                  "\n                  "
               ]
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "usage" : "U",
         "req" : "2C",
         "name" : "Patient's Sex Neutered",
         "module" : "Patient Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Date",
         "module" : "RT Series"
      },
      "(3008,0100)[<0>](300a,0216)" : {
         "req" : "2",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Source Manufacturer",
         "module" : "RT Brachy Session Record",
         "desc" : "Manufacturer of source.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Institution Name"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,1049)" : {
         "name" : "Physician(s) of Record Identification Sequence",
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ]
      },
      "(300c,0002)" : {
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT General Treatment Record",
         "name" : "Referenced RT Plan Sequence",
         "desc" : [
            "Reference to a RT Plan.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-53"
         ]
      },
      "(3008,0110)[<0>](3008,0120)[<1>](300a,0263)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Brachy Accessory Device ID",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "User or machine supplied identifier for Brachy Accessory Device."
      },
      "(3008,0100)[<0>](300a,0212)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Source Number",
         "module" : "RT Brachy Session Record",
         "desc" : "Identification number of the Source. The value of Source Number (300A,0212) shall be unique within the Recorded Source Sequence (3008,0100) in which it is created.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0024)" : {
         "desc" : "Date when the delivery of radiation at this control point began. For the final control point this shall be the Date when the previous control point ended.",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "RT Brachy Session Record",
         "name" : "Treatment Control Point Date"
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "module" : "RT General Treatment Record"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](300c,00f0)" : {
         "desc" : "Index of current Control Point, starting at 0 for first Control Point.",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Control Point Index"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     },
                     "el" : "para",
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Private Creator Reference"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "entity" : "Study",
         "usage" : "M",
         "req" : "1",
         "module" : "General Study",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0040,0254)" : {
         "name" : "Performed Procedure Step Description",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed."
      },
      "(0012,0031)" : {
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Site Name",
         "entity" : "Patient",
         "usage" : "U",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.5",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
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
         "module" : "Patient",
         "name" : "Referenced Patient Sequence",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0008,0013)" : {
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Instance Creation Time",
         "module" : "SOP Common"
      },
      "(0010,1100)" : {
         "desc" : [
            "A photo to confirm the identity of a patient.",
            "Only a single Item is permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.2.2.1.1",
                     "xrefstyle" : "select: labelnumber"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Patient Photo Sequence",
         "module" : "Patient"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](3008,0142)" : {
         "name" : "Referenced Source Applicator Number",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Identification number of the Source Applicator. The value of Source Applicator Number (300A,0290) shall be unique within the Channel in which it is created."
      },
      "(0012,0063)" : {
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
                                 "attrs" : {
                                    "xml:id" : "para_1b4a5ea4-66da-478b-901c-5f7d6b806d29"
                                 },
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
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
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
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       },
                                       "el" : "olink",
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
                           ],
                           "el" : "listitem"
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
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "De-identification Method"
      },
      "(0008,0012)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Instance Creation Date",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(3008,0010)[<0>](3008,0014)" : {
         "name" : "Measured Dose Type",
         "module" : "Measured Dose Reference Record",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-55"
         ],
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ]
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0223)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record",
         "name" : "Referenced Fraction Number",
         "module" : "RT Treatment Summary Record",
         "desc" : "Identifies fraction.",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Concept Code Sequence",
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
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a2)" : {
         "module" : "RT Patient Setup",
         "name" : "Shielding Device Type",
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
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
         ]
      },
      "(3008,0010)[<0>](300c,0051)" : {
         "module" : "Measured Dose Reference Record",
         "name" : "Referenced Dose Reference Number",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "desc" : [
            "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.10",
                  "xrefstyle" : "select: title"
               }
            },
            " of referenced RT Plan. Required only if Measured Dose Reference Number (3008,0064) is not sent. It shall not be present otherwise."
         ]
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1155)" : {
         "module" : "RT Patient Setup",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
         "desc" : [
            "The place or location identifier where the identifier was first assigned to the patient. This component is not an inherent part of the identifier but rather part of the history of the identifier.",
            "Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "module" : "Patient"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
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
         ]
      },
      "(0010,2297)" : {
         "usage" : "M",
         "req" : "2C",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Responsible Person",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "Series Instance UID",
         "module" : "Patient",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Coding Scheme Designator",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
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
         "name" : "Referenced SOP Sequence",
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](300c,00f0)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Index of current Control Point, starting at 0 for first Control Point in this Sequence.",
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Control Point Index",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0008,0018)" : {
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "name" : "SOP Instance UID",
         "module" : "SOP Common"
      },
      "(3008,0010)" : {
         "module" : "Measured Dose Reference Record",
         "name" : "Measured Dose Reference Sequence",
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "desc" : [
            "Sequence of doses measured during treatment delivery, summed over entire session.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0134)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Delivered Channel Total Time",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Total amount of time in seconds actually delivered between Control Point 0 and final Control Point of the Brachy Control Point Delivered Sequence (3008,0160) for current Channel."
      },
      "(0008,1200)" : {
         "module" : "Common Instance Reference",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in other Studies."
         ]
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0250)" : {
         "req" : "2",
         "usage" : "U",
         "entity" : "Treatment Record",
         "name" : "Treatment Date",
         "module" : "RT Treatment Summary Record",
         "desc" : "Date when fraction was delivered.",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](300a,0294)" : {
         "name" : "Source Applicator Name",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "User-defined name for Source Applicator."
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0021)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "module" : "Patient",
         "desc" : [
            "Identifier of the Assigning Authority (system, organization, agency, or department) that issued the Patient ID.",
            {
               "el" : "note",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(3008,0110)[<0>](300a,0238)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Manufacturer of Application Setup.",
         "module" : "RT Brachy Session Record",
         "name" : "Application Setup Manufacturer",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9186)" : {
         "name" : "Respiratory Signal Source ID",
         "module" : "RT Patient Setup",
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "Identifies the device providing the respiratory signal."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "UID",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(3008,0110)[<0>](3008,002a)" : {
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
         "mod_tables" : [
            "table_C.8-58"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "module" : "RT Brachy Session Record",
         "name" : "Treatment Termination Status"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b8)" : {
         "req" : "2",
         "usage" : "U",
         "entity" : "Treatment Record",
         "name" : "Setup Device Label",
         "module" : "RT Patient Setup",
         "desc" : "User-defined label for Setup Device used for patient alignment.",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,00f9)" : {
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "3",
         "module" : "RT Patient Setup",
         "name" : "Accessory Code"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0008,1080)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "name" : "Admitting Diagnoses Description",
         "module" : "Patient Study",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0010,2201)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Patient Species Description",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
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
         ]
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01d0)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "name" : "Setup Reference Description",
         "desc" : "User-defined description of Setup Reference used for patient alignment.",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
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
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Certificate of Signer",
         "module" : "SOP Common"
      },
      "(0008,0051)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "name" : "Issuer of Accession Number Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
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
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
         "req" : "3",
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
         ]
      },
      "(0010,0027)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
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
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "module" : "RT Series"
      },
      "(0010,0027)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
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
         "module" : "Patient",
         "name" : "Group of Patients Identification Sequence",
         "entity" : "Patient",
         "req" : "\n                  3 ",
         "usage" : "M"
      },
      "(0010,0027)[<0>](0018,5100)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
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
         "name" : "Patient Position",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "name" : "Numeric Value",
         "module" : "RT Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0168)" : {
         "desc" : "Time at which the source(s) returned to the safe.",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Safe Position Return Time"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "entity" : "Study",
         "usage" : "U",
         "req" : "1",
         "module" : "Clinical Trial Study",
         "name" : "Consent for Distribution Flag",
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
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(3008,0050)[<0>](300a,0016)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "desc" : "User-defined description of Dose Reference.",
         "module" : "RT Treatment Summary Record",
         "name" : "Dose Reference Description",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](0008,1070)" : {
         "name" : "Operators' Name",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Name of operator who authorized override."
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
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
         ]
      },
      "(0008,0060)" : {
         "name" : "Modality",
         "module" : "RT Series",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
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
         ]
      },
      "(0008,1062)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "req" : "3"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "name" : "Patient ID",
         "module" : "Patient",
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "desc" : "Primary identifier for the group of subjects."
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9171)" : {
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
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "module" : "RT Patient Setup",
         "name" : "Respiratory Signal Source"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Patient Setup",
         "name" : "Referenced SOP Class UID",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U"
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "module" : "General Study",
         "name" : "Institution Address",
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "Common Instance Reference",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record"
      },
      "(0010,21b0)" : {
         "desc" : "Additional information about the Patient's medical history.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "module" : "Patient Study",
         "name" : "Additional Patient History"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "name" : "Rational Numerator Value",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
      "(0038,0010)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "module" : "Patient Study",
         "name" : "Admission ID",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0251)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Time at which the Performed Procedure Step ended.",
         "name" : "Performed Procedure Step End Time",
         "module" : "RT Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3"
      },
      "(3008,0110)[<0>](300c,000c)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "References application setup specified by Application Setup Number (300A,0234) in Application Setup Sequence (300A,0230) in ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.15",
                  "xrefstyle" : "select: title"
               },
               "el" : "xref"
            },
            " within referenced RT Plan."
         ],
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Brachy Application Setup Number",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,019a)" : {
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Roll Angle",
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "The Fixation Device Roll Angle, i.e., orientation of ROLLED FIXATION DEVICE coordinate system with respect to IEC PITCHED FIXATION DEVICE coordinate system (degrees). Rolling is the rotation around IEC PATIENT SUPPORT Y-axis."
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "name" : "Source of Previous Values",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received."
      },
      "(0032,1034)" : {
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Requesting Service Code Sequence",
         "module" : "General Study"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The stock number of the strain of the patient issued by the organization identified by Strain Source (0010,0217). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Patient",
         "name" : "Strain Stock Number",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Rational Numerator Value",
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
      "(0038,0062)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the type of service episode.",
         "module" : "Patient Study",
         "name" : "Service Episode Description",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "RT Series",
         "name" : "Value Type",
         "req" : "1",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0100,0420)" : {
         "module" : "SOP Common",
         "name" : "SOP Authorization DateTime",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO."
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,013c)" : {
         "name" : "Delivered Pulse Repetition Interval",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Pulse repetition interval (sec) actually delivered for current Channel. Required if Brachy Treatment Type (300A,0202) is PDR. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.22.1"
               }
            },
            "."
         ]
      },
      "(0100,0424)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "SOP Authorization Comment",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "module" : "Patient",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient"
      },
      "(3008,0100)[<0>](300a,0228)" : {
         "desc" : "Half-life of Isotope (days).",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Source Isotope Half Life",
         "module" : "RT Brachy Session Record"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01ba)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "name" : "Setup Device Description",
         "desc" : "User-defined description for Setup Device used for patient alignment.",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "req" : "1C",
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
            "table_C.7.1.4-1",
            "table_10-18"
         ]
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1160)" : {
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "1C",
         "module" : "RT Patient Setup",
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
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ]
      },
      "(0020,000e)" : {
         "module" : "RT Series",
         "name" : "Series Instance UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : "Unique identifier of the series."
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "name" : "Local Namespace Entity ID",
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
         "module" : "Patient",
         "name" : "Referenced Frame Number",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](0008,1072)[<4>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "name" : "Person Identification Code Sequence",
         "module" : "RT Brachy Session Record"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0010,1000)" : {
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Other Patient IDs"
      },
      "(300a,0180)[<0>](300a,0184)" : {
         "name" : "Patient Additional Position",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "User-defined additional description of patient position. Required if Patient Position (0018,5100) is not present."
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "module" : "SOP Common",
         "name" : "Private Group Reference",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Person's Address",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Manufacturer's Model Name",
         "module" : "SOP Common",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1084)" : {
         "module" : "Patient Study",
         "name" : "Admitting Diagnoses Code Sequence",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,1012)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Reason For Performed Procedure Code Sequence",
         "module" : "General Study",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     },
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
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "desc" : [
            "Universal or unique identifier for the Patient ID Assigning Authority. The authority identified by this attribute shall be the same as that of Issuer of Patient ID (0010,0021), if present.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     },
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
         ]
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Rational Numerator Value",
         "module" : "RT Series",
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
      "(0008,0005)" : {
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1C",
         "module" : "SOP Common",
         "name" : "Specific Character Set",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,103f)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "RT Series",
         "name" : "Series Description Code Sequence",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "HL7 Instance Identifier",
         "module" : "SOP Common"
      },
      "(0038,0014)" : {
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Issuer of Admission ID Sequence",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(3008,0100)[<0>](300a,022b)" : {
         "name" : "Source Strength",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
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
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0060)" : {
         "desc" : [
            "Parameters which were overridden during the administration of the treatment immediately prior to the current control point.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-58"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "module" : "RT Brachy Session Record",
         "name" : "Override Sequence"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme full common name",
         "name" : "Coding Scheme Name",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0020,0013)" : [
         {
            "req" : "1",
            "usage" : "M",
            "entity" : "Treatment Record",
            "name" : "Instance Number",
            "module" : "RT General Treatment Record",
            "desc" : "Instance number identifying this particular instance of the object.",
            "mod_tables" : [
               "table_C.8-53"
            ]
         },
         {
            "mod_tables" : [
               "table_C.12-1"
            ],
            "desc" : "A number that identifies this Composite object instance.",
            "name" : "Instance Number",
            "module" : "SOP Common",
            "req" : "3",
            "usage" : "M",
            "entity" : "Treatment Record"
         }
      ],
      "(0010,0200)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               ", which is used to describe an image acquired."
            ]
         ],
         "module" : "Patient",
         "name" : "Quality Control Subject",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Signature",
         "module" : "SOP Common"
      },
      "(0008,0300)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "name" : "Private Data Element Characteristics Sequence",
         "module" : "SOP Common",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0200)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "U",
         "name" : "Current Treatment Status",
         "module" : "RT Treatment Summary Record",
         "desc" : [
            "Status of the Treatment at the time the Treatment Summary was created.",
            {
               "title" : "Enumerated Values:",
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
               ]
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
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "name" : "Strain Source",
         "module" : "Patient",
         "desc" : [
            "Identification of the organization that is the source of the animal, issued by the registry identified by Strain Source Registry Code Sequence (0010,0215). See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(3008,0010)[<0>](3008,0016)" : {
         "mod_tables" : [
            "table_C.8-55"
         ],
         "desc" : "Measured Dose in units specified by Dose Units (3004,0002).",
         "name" : "Measured Dose Value",
         "module" : "Measured Dose Reference Record",
         "req" : "2",
         "usage" : "U",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0060)[<4>](0008,1072)[<5>](0040,1104)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Person's Telecom Information",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58",
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
                     ]
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0040,0250)" : {
         "name" : "Performed Procedure Step End Date",
         "module" : "RT Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Date on which the Performed Procedure Step ended."
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
         "module" : "SOP Common",
         "name" : "Referenced Frame Number",
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
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
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "name" : "Institutional Department Name",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located."
      },
      "(0010,0218)" : {
         "desc" : [
            "Additional information about the strain of the patient that is not encoded in the formal nomenclature used in Strain Description (0010,0212). See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.1.1.4",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Strain Additional Information"
      },
      "(300a,0206)[<0>](0008,0080)" : {
         "desc" : "Institution where the equipment is located that was used for treatment delivery.",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Machine Record",
         "name" : "Institution Name"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0136)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Specified Number of Pulses",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Number of Pulses specified per fraction for current Channel. Required if Brachy Treatment Type (300A,0202) is PDR. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.22.1"
               },
               "el" : "xref"
            },
            "."
         ]
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "name" : "Institution Address"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "module" : "RT Series"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0080)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Sequence of doses measured during treatment delivery, summed over entire session.",
            "One or more Items are permitted in this Sequence."
         ],
         "name" : "Referenced Measured Dose Reference Sequence",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0034)" : {
         "desc" : [
            "Date of death of the named patient in the Alternative Calendar (0010,0035).",
            {
               "el" : "note",
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
               ]
            }
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "module" : "Patient",
         "name" : "Patient's Death Date in Alternative Calendar"
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
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
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "MAC Calculation Transfer Syntax UID"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0090)[<2>](300c,0051)" : {
         "name" : "Referenced Dose Reference Number",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.10"
               },
               "el" : "xref"
            },
            " of referenced RT Plan. Required if Referenced Calculated Dose Reference Number (3008,0092) is not sent. It shall not be present otherwise."
         ]
      },
      "(fffa,fffa)" : {
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Digital Signatures Sequence",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)" : {
         "desc" : [
            "Sequence of parameters that were overridden during the administration of the treatment immediately prior to the current control point.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-58"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "module" : "RT Brachy Session Record",
         "name" : "Override Sequence"
      },
      "(3008,0220)[<0>](3008,005a)" : {
         "req" : "2",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "name" : "Number of Fractions Delivered",
         "desc" : "Number of fractions delivered as of Treatment Summary Report.",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0060)[<4>](0008,1070)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Name of operator who authorized override.",
         "name" : "Operators' Name",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,2298)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Responsible Person Role",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0080)[<2>](3008,0016)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Measured Dose.",
         "module" : "RT Brachy Session Record",
         "name" : "Measured Dose Value",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0090)[<2>](3008,0092)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Calculated Dose Reference Number",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Uniquely identifies Calculated Dose Reference specified by Calculated Dose Reference Number (3008,0072) within Calculated Dose Reference Sequence (3008,0070). Required if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise."
      },
      "(0012,0040)" : {
         "name" : "Clinical Trial Subject ID",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "req" : "1C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
      "(3008,0070)" : {
         "desc" : [
            "Sequence of doses estimated for each treatment delivery.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-56"
         ],
         "usage" : "U",
         "req" : "1",
         "entity" : "Treatment Record",
         "name" : "Calculated Dose Reference Sequence",
         "module" : "Calculated Dose Reference Record"
      },
      "(0008,1115)" : {
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence.",
            "Required if this Instance references Instances in this Study."
         ],
         "name" : "Referenced Series Sequence",
         "module" : "Common Instance Reference",
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "1C"
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
         "name" : "Retrieve URI",
         "module" : "Patient",
         "usage" : "M",
         "req" : "1",
         "entity" : "Patient"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0199)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "name" : "Fixation Device Pitch Angle",
         "module" : "RT Patient Setup",
         "desc" : "The Fixation Device Pitch Angle, i.e., orientation of PITCHED FIXATION DEVICE coordinate system with respect to IEC PATIENT SUPPORT coordinate system (degrees). Pitching is the rotation around IEC PATIENT SUPPORT X-axis.",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "name" : "Device Serial Number",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance."
      },
      "(0008,1062)[<0>](0040,1104)" : {
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
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "module" : "General Study"
      },
      "(0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Primary identifier for the patient.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient",
         "name" : "Patient ID",
         "usage" : "M",
         "req" : "2",
         "entity" : "Patient"
      },
      "(0008,1030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "name" : "Study Description",
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1"
      },
      "(0020,0011)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : "A number that identifies this series.",
         "module" : "RT Series",
         "name" : "Series Number",
         "usage" : "M",
         "req" : "2",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
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
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0020,0010)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "User or equipment generated Study identifier.",
         "module" : "General Study",
         "name" : "Study ID",
         "usage" : "M",
         "req" : "2",
         "entity" : "Study"
      },
      "(3008,0110)[<0>](3008,0080)[<1>](3008,0082)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Measured Dose Reference Number",
         "module" : "RT Brachy Session Record",
         "desc" : "Uniquely references Measured Dose Reference specified by Measured Dose Reference Number (3008,0064) in Measured Dose Reference Sequence (3008,0010). Required if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0008,0015)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Date and time that the SOP Instance was last coerced by a Storage SCP (see ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            ")."
         ],
         "module" : "SOP Common",
         "name" : "Instance Coercion DateTime",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](0008,1072)" : {
         "name" : "Operator Identification Sequence",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Identification of the operator who authorized override. Only a single Item is permitted in this sequence."
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "name" : "Modifying System",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0062,000b)" : {
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "req" : "1C",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "name" : "Referenced Segment Number"
      },
      "(0012,0072)" : {
         "desc" : [
            "A description of the series in the context of a clinical trial or research. See ",
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
         "req" : "3",
         "usage" : "U",
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series Description"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](0008,1072)[<4>](0008,0081)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Institution Address",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0100,0426)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](0008,1072)[<4>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "module" : "RT Brachy Session Record"
      },
      "(0008,0201)" : {
         "module" : "SOP Common",
         "name" : "Timezone Offset From UTC",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
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
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5"
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
                           ]
                        },
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_155b097e-395f-4748-981c-0255b00fe9a8"
                                 },
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
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_1ab95f54-00ed-4128-a3f9-96f3f05669d0"
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
                     "el" : "orderedlist",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "UID",
         "module" : "RT Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0080)[<2>](300c,0051)" : {
         "name" : "Referenced Dose Reference Number",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
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
         ]
      },
      "(3008,0202)" : {
         "desc" : "Comment on current treatment status.",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "name" : "Treatment Status Comment"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
      "(0010,0024)[<0>](0040,0036)" : {
         "mod_tables" : [
            "table_C.7-1",
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
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(3008,0110)[<0>](300a,00ce)" : {
         "req" : "2",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Treatment Delivery Type",
         "module" : "RT Brachy Session Record",
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
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0010,1020)" : {
         "entity" : "Study",
         "usage" : "U",
         "req" : "3",
         "name" : "Patient's Size",
         "module" : "Patient Study",
         "desc" : "Length or size of the Patient, in meters.",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(3008,0110)[<0>](3008,0120)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Recorded Brachy Accessory Device Sequence",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Sequence of Brachy Accessory Devices associated with current Application Setup.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0008,103e)" : {
         "name" : "Series Description",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : "Description of the series."
      },
      "(0008,0118)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Mapping Resource UID",
         "desc" : "The unique identifier of the Mapping Resource",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0012,0050)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Time Point ID",
         "req" : "2",
         "usage" : "U",
         "entity" : "Study"
      },
      "(3008,0100)[<0>](300a,0226)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "RT Brachy Session Record",
         "name" : "Source Isotope Name",
         "desc" : "User-defined name of Isotope.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(3008,0110)[<0>](3008,0120)[<1>](300a,0264)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Brachy Accessory Device Type",
         "module" : "RT Brachy Session Record",
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
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(3008,0110)[<0>](3008,002b)" : {
         "desc" : "Treatment machine termination code. This code is dependent upon the particular application and equipment.",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "name" : "Treatment Termination Code",
         "module" : "RT Brachy Session Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Sequence of recorded Source Applicators.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "RT Brachy Session Record",
         "name" : "Recorded Source Applicator Sequence",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3"
      },
      "(3008,0100)[<0>](300a,0229)" : {
         "desc" : [
            "Measurement unit of Source Strength.",
            "Required if the source is not a gamma-emitting (photon) source. May be present otherwise.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            }
         ],
         "mod_tables" : [
            "table_C.8-58"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Source Strength Units"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Rational Denominator Value",
         "module" : "RT Series",
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
      "(0040,0260)[<0>](0040,0440)" : {
         "name" : "Protocol Context Sequence",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence."
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "module" : "SOP Common",
         "name" : "Attribute Modification DateTime",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "module" : "RT Series",
         "name" : "Person's Telecom Information",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
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
                           "el" : "listitem",
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
         ]
      },
      "(300a,0180)[<0>](300a,0401)" : {
         "module" : "RT Patient Setup",
         "name" : "Referenced Setup Image Sequence",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : [
            "Sequence of setup verification images for this patient setup.",
            "One or more Items are permitted in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.8.12.1.1",
                     "xrefstyle" : "select: label"
                  }
               }
            ]
         ]
      },
      "(0010,0033)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "module" : "RT Series",
         "name" : "Referenced Frame Number",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
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
                     ],
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
      "(0008,1072)[<0>](0008,0082)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0150)[<2>](300a,02b3)" : {
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "2",
         "module" : "RT Brachy Session Record",
         "name" : "Channel Shield ID",
         "desc" : "User or machine supplied identifier for Channel Shield.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0008,0123)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Context Group Identification Sequence",
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Operator Identification Sequence",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Date",
         "module" : "RT Series",
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
      "(0008,009d)[<0>](0008,0082)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Institution Code Sequence",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(3008,0110)[<0>](3008,0120)[<1>](300a,0266)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Brachy Accessory Device Name",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "User-defined name for Brachy Accessory Device."
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "module" : "Patient",
         "name" : "Breed Registry Code Sequence",
         "req" : "1",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(3008,0030)[<0>](0008,1150)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT General Treatment Record",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ]
      },
      "(0008,0105)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Mapping Resource",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Text Value"
      },
      "(3008,0110)[<0>](3008,0022)" : {
         "desc" : "Fraction number for this application setup.",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "2",
         "name" : "Current Fraction Number",
         "module" : "RT Brachy Session Record"
      },
      "(0038,0064)" : {
         "module" : "Patient Study",
         "name" : "Issuer of Service Episode ID Sequence",
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ]
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Person's Telephone Numbers",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ]
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "General Study",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "usage" : "M",
         "req" : "1C"
      },
      "(0012,0082)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Numeric Value",
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
      "(0010,0026)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Source Patient Group Identification Sequence",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ]
      },
      "(0018,1020)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "3",
         "module" : "General Equipment",
         "name" : "Software Versions",
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
            "table_C.7-8"
         ]
      },
      "(0040,a390)" : {
         "module" : "SOP Common",
         "name" : "HL7 Structured Document Reference Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Referenced Segment Number",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0012,0062)" : {
         "module" : "Patient",
         "name" : "Patient Identity Removed",
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
      "(0010,0024)[<0>](0040,0032)" : {
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "RT Series",
         "name" : "Referenced SOP Class UID",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Spatial Resolution",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(300a,0180)" : {
         "desc" : [
            "Sequence of patient setup data for current plan.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "1",
         "name" : "Patient Setup Sequence",
         "module" : "RT Patient Setup"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0025)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Time when the delivery of radiation at this control point began. For the final control point this shall be the Time when the previous control point ended.",
         "module" : "RT Brachy Session Record",
         "name" : "Treatment Control Point Time",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,0020)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Date the Study started.",
         "name" : "Study Date",
         "module" : "General Study",
         "req" : "2",
         "usage" : "M",
         "entity" : "Study"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](300a,0292)" : {
         "desc" : [
            "Type of Source Applicator.",
            {
               "list" : [
                  [
                     "FLEXIBLE",
                     null
                  ],
                  [
                     "RIGID",
                     null
                  ]
               ],
               "type" : "variablelist",
               "title" : "Defined Terms:"
            }
         ],
         "mod_tables" : [
            "table_C.8-58"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "name" : "Source Applicator Type",
         "module" : "RT Brachy Session Record"
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
                  "attrs" : {
                     "linkend" : "sect_C.7.1.3",
                     "xrefstyle" : "select: title"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "module" : "Clinical Trial Study",
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "entity" : "Study",
         "usage" : "U",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,001a)" : {
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "module" : "SOP Common"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Study Instance UID"
      },
      "(3008,0110)[<0>](3008,0090)[<1>](3008,0092)" : {
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record",
         "name" : "Referenced Calculated Dose Reference Number",
         "module" : "RT Brachy Session Record",
         "desc" : "Uniquely identifies Calculated Dose Reference specified by Calculated Dose Reference Number (3008,0072) within Calculated Dose Reference Sequence (3008,0070). Required if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0010,0027)[<0>](0010,0020)" : {
         "desc" : "Primary identifier for an individual subject.",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1",
         "module" : "Patient",
         "name" : "Patient ID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "req" : "1",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ]
      },
      "(0010,2294)" : {
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "usage" : "M",
         "req" : "2C",
         "name" : "Breed Registration Sequence",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
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
      "(3008,0070)[<0>](3008,0074)" : {
         "name" : "Calculated Dose Reference Description",
         "module" : "Calculated Dose Reference Record",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "desc" : "User-defined description of Calculated Dose Reference."
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Requested Procedure Description"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Person Identification Code Sequence",
         "module" : "SOP Common",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "module" : "Patient",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
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
         ]
      },
      "(0040,0244)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Date",
         "module" : "RT Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,013a)" : {
         "desc" : [
            "Pulse repetition interval (sec) specified for current Channel. Required if Brachy Treatment Type (300A,0202) is PDR. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.22.1",
                  "xrefstyle" : "select: label"
               }
            }
         ],
         "mod_tables" : [
            "table_C.8-58"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Specified Pulse Repetition Interval",
         "module" : "RT Brachy Session Record"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Institution Address",
         "module" : "SOP Common"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01bc)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : [
            "Setup Parameter for Setup Device in appropriate IEC 61217 coordinate system.",
            "Units shall be mm for distances and degrees for angles."
         ],
         "name" : "Setup Device Parameter",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "U"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9185)" : {
         "module" : "RT Patient Setup",
         "name" : "Respiratory Motion Compensation Technique Description",
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "Description of respiratory motion compensation technique."
      },
      "(3008,0110)[<0>](3008,002c)" : {
         "name" : "Treatment Verification Status",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-58"
         ],
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
         ]
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient's Alternative Calendar"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M",
         "name" : "Repository Unique ID",
         "module" : "Patient"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9170)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : [
            "Technique applied to reduce respiratory motion artifacts.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ],
         "module" : "RT Patient Setup",
         "name" : "Respiratory Motion Compensation Technique",
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0198)" : {
         "desc" : "Position/Notch number of Fixation Device.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "3",
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Position"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0196)" : {
         "desc" : "User-defined description of Fixation Device.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "3",
         "module" : "RT Patient Setup",
         "name" : "Fixation Device Description"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,002a)" : {
         "desc" : [
            "Conditions under which treatment was terminated.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "U",
         "module" : "RT Treatment Summary Record",
         "name" : "Treatment Termination Status"
      },
      "(3008,0220)" : {
         "desc" : [
            "Sequence describing current state of planned vs. delivered fraction groups.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "3",
         "module" : "RT Treatment Summary Record",
         "name" : "Fraction Group Summary Sequence"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0060)[<4>](0008,1072)[<5>](0008,0080)" : {
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "RT Brachy Session Record",
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(3008,0054)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "desc" : "Date of delivery of the first treatment.",
         "name" : "First Treatment Date",
         "module" : "RT Treatment Summary Record",
         "req" : "2",
         "usage" : "U",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](300a,0250)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Total Reference Air Kerma",
         "module" : "RT Brachy Session Record",
         "desc" : "Total Reference Air Kerma for current Application Setup, i.e., the sum of the products of the Air Kerma Rates of each Source in each Channel with its respective Channel Time (\u00b5Gy at 1 m). Value shall be zero for non-gamma sources.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(300a,0180)[<0>](300a,01b4)" : {
         "desc" : [
            "Sequence of devices used for patient alignment in Patient Setup.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "name" : "Setup Device Sequence",
         "module" : "RT Patient Setup"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "RT Series",
         "name" : "Time",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record",
         "name" : "Referenced SOP Instance UID",
         "module" : "Common Instance Reference",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ]
      },
      "(3008,0110)[<0>](3008,0090)" : {
         "desc" : [
            "Sequence of doses estimated for each treatment delivery.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "name" : "Referenced Calculated Dose Reference Sequence",
         "module" : "RT Brachy Session Record"
      },
      "(0012,0083)" : {
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "req" : "3",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "name" : "Consent for Clinical Trial Use Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "module" : "Common Instance Reference",
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers"
      },
      "(3008,0251)" : {
         "req" : "2",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "RT General Treatment Record",
         "name" : "Treatment Time",
         "desc" : [
            "Time when current fraction was delivered (begun), or Time last fraction was delivered (begun) in case of ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_A.31"
               },
               "el" : "xref"
            },
            ". See Note."
         ],
         "mod_tables" : [
            "table_C.8-53"
         ]
      },
      "(0008,0053)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Query/Retrieve View",
         "module" : "SOP Common",
         "desc" : [
            "The view requested during the C-MOVE operation that resulted in the transfer of this instance.",
            {
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
               ],
               "type" : "variablelist"
            },
            "Required if the instance has ever been converted from its source form as the result of a C-MOVE operation with a specific view."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0060)[<4>](0008,1072)[<5>](0008,0081)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Institution Address",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0012,0060)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         "name" : "Clinical Trial Coordinating Center Name",
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "req" : "2",
         "entity" : "Series"
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
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "U",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type"
      },
      "(300a,0180)[<0>](0018,5100)" : {
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
         "mod_tables" : [
            "table_C.8-48"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "1C",
         "name" : "Patient Position",
         "module" : "RT Patient Setup"
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
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
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Digital Signature DateTime"
      },
      "(300a,0206)[<0>](300a,00b2)" : {
         "mod_tables" : [
            "table_C.8-54"
         ],
         "desc" : "User-defined name identifying treatment machine used for treatment delivery.",
         "name" : "Treatment Machine Name",
         "module" : "RT Treatment Machine Record",
         "req" : "2",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Reason for the Attribute Modification",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID"
      },
      "(0038,0060)" : {
         "entity" : "Study",
         "usage" : "U",
         "req" : "3",
         "name" : "Service Episode ID",
         "module" : "Patient Study",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "1",
         "name" : "Study Instance UID",
         "module" : "Common Instance Reference",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0008,1040)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "name" : "Institutional Department Name",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Person's Telephone Numbers"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(3008,0100)[<0>](300a,022a)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Reference Air Kerma Rate",
         "module" : "RT Brachy Session Record",
         "desc" : [
            "Air Kerma Rate in air of Isotope specified at Source Strength Reference Date (300A,022C) and Source Strength Reference Time (300A,022E) (in \u00b5Gy h",
            {
               "content" : [
                  "-1"
               ],
               "el" : "superscript"
            },
            " at 1 m). Value shall be zero for non-gamma sources."
         ],
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(3008,0220)[<0>](300a,0078)" : {
         "name" : "Number of Fractions Planned",
         "module" : "RT Treatment Summary Record",
         "usage" : "U",
         "req" : "2",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "desc" : "Number of fractions planned for this fraction group."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,1060)" : {
         "desc" : "Names of the physician(s) reading the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "usage" : "M",
         "req" : "3",
         "module" : "General Study",
         "name" : "Name of Physician(s) Reading Study"
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-1"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Institution Name"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Nonidentifying Private Elements",
         "module" : "SOP Common",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
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
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "name" : "Time",
         "module" : "RT Series"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Operators' Name",
         "module" : "SOP Common"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0150)[<2>](300a,02b4)" : {
         "desc" : "User-defined name for Channel Shield.",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "name" : "Channel Shield Name",
         "module" : "RT Brachy Session Record"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0162)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Date on which the source(s) exited the safe.",
         "module" : "RT Brachy Session Record",
         "name" : "Safe Position Exit Date",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](300a,02d2)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Control Point Relative Position",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Distance in mm between current Control Point Position and the distal-most possible Source position in current Channel. See ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_A.20"
               },
               "el" : "xref"
            },
            "."
         ]
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
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,009c)" : {
         "name" : "Consulting Physician's Name",
         "module" : "General Study",
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Consulting physician(s) for this patient visit."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Series"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Institution Address",
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Contributing Equipment Sequence"
      },
      "(0010,0213)" : {
         "module" : "Patient",
         "name" : "Strain Nomenclature",
         "req" : "3",
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.1.1.4"
               }
            },
            "."
         ]
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "name" : "Contribution DateTime",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "RT Series",
         "name" : "Local Namespace Entity ID",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](3008,0062)" : {
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Override Parameter Pointer",
         "desc" : "Contains the Data Element Tag of the attribute that was overridden.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "module" : "General Study",
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
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
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
         "name" : "Certified Timestamp",
         "module" : "SOP Common",
         "req" : "3",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0008,1090)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "module" : "General Equipment",
         "name" : "Manufacturer's Model Name",
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "3"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient Study",
         "name" : "Universal Entity ID",
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U"
      },
      "(3008,0110)[<0>](3008,0090)[<1>](300c,0051)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Dose Reference Number",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.10",
                  "xrefstyle" : "select: title"
               }
            },
            " of referenced RT Plan. Required if Referenced Calculated Dose Reference Number (3008,0092) is not sent. It shall not be present otherwise."
         ]
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "req" : "1",
         "usage" : "U",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol ID"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "name" : "Coding Scheme Version",
         "module" : "SOP Common"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
                           "attrs" : {
                              "targetdoc" : "PS3.15",
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber"
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
         "name" : "Certificate Type",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Concept Name Code Sequence",
         "module" : "RT Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300a,0288)" : {
         "name" : "Source Movement Type",
         "module" : "RT Brachy Session Record",
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Type of Source movement.",
            {
               "type" : "variablelist",
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
               ],
               "title" : "Defined Terms:"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "RT Series",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](0008,1072)[<4>](0008,0082)" : {
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "name" : "Institution Code Sequence",
         "module" : "RT Brachy Session Record",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0008,0096)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "name" : "Referring Physician Identification Sequence",
         "module" : "General Study",
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "usage" : "M",
         "req" : "1",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "module" : "General Study",
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
      "(0008,1049)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study",
         "name" : "Institution Name",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Study"
      },
      "(300a,0206)[<0>](0008,0081)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Machine Record",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution where the equipment is located that was used for treatment delivery.",
         "mod_tables" : [
            "table_C.8-54"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Person Name",
         "module" : "RT Series",
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
      "(0012,0010)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
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
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Sponsor Name",
         "req" : "1",
         "usage" : "U",
         "entity" : "Patient"
      },
      "(0008,1070)" : {
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "req" : "2",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Operators' Name"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0251)" : {
         "desc" : "Time when fraction was delivered.",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "2",
         "name" : "Treatment Time",
         "module" : "RT Treatment Summary Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](300a,02a0)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Distance of path along channel (mm) between adjacent (potential) dwell positions. Required if Source Movement Type (300A,0288) is STEPWISE.",
         "name" : "Source Applicator Step Size",
         "module" : "RT Brachy Session Record",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "DateTime"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0150)[<2>](3008,0152)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Identification number of the Channel Shield. The value of Channel Shield Number (300A,02B2) shall be unique within the Channel in which it is created.",
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Channel Shield Number",
         "usage" : "M",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "req" : "1",
         "usage" : "U",
         "entity" : "Treatment Record",
         "name" : "Referenced Instance Sequence",
         "module" : "Common Instance Reference",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ]
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject Reading ID"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "module" : "SOP Common",
         "name" : "Digital Signature Purpose Code Sequence"
      },
      "(0012,0081)" : {
         "req" : "1C",
         "usage" : "U",
         "entity" : "Patient",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "module" : "Clinical Trial Subject",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
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
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0138)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "Delivered Number of Pulses",
         "module" : "RT Brachy Session Record",
         "desc" : [
            "Number of Pulses actually delivered per fraction for current Channel. Required if Brachy Treatment Type (300A,0202) is PDR. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.8.8.22.1"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(3008,00e0)[<0>](300a,0016)" : {
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "3",
         "name" : "Dose Reference Description",
         "module" : "RT Treatment Summary Record",
         "desc" : "User-defined description of Dose Reference.",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(3008,0030)" : {
         "desc" : [
            "Reference to RT Treatment Records to which the current RT Treatment Record is significantly related.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-53"
         ],
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT General Treatment Record",
         "name" : "Referenced Treatment Record Sequence"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)[<3>](3008,0024)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Date when the delivery of radiation at this control point began.",
            "For the final control point, this shall be the Date when the previous control point ended."
         ],
         "module" : "RT Brachy Session Record",
         "name" : "Treatment Control Point Date",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0008,1048)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "name" : "Physician(s) of Record",
         "module" : "General Study",
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
         ],
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(300a,0180)[<0>](300a,0183)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "The user-defined label for the patient setup.",
         "module" : "RT Patient Setup",
         "name" : "Patient Setup Label",
         "usage" : "U",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0010,2293)" : {
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
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "2C",
         "usage" : "M",
         "module" : "Patient",
         "name" : "Patient Breed Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M",
         "module" : "RT Series",
         "name" : "DateTime"
      },
      "(3008,0220)[<0>](300c,0022)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "U",
         "module" : "RT Treatment Summary Record",
         "name" : "Referenced Fraction Group Number",
         "desc" : "References Fraction Group Number (300A,0071) in Fraction Group Sequence (300A,0070) in the referenced RT Plan.",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "entity" : "Study",
         "usage" : "M",
         "req" : "1C",
         "name" : "Institution Name",
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
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
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "name" : "Retrieve AE Title",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "usage" : "M"
      },
      "(0008,1032)" : {
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "usage" : "M",
         "entity" : "Study",
         "module" : "General Study",
         "name" : "Procedure Code Sequence"
      },
      "(300c,0022)" : {
         "desc" : "Identifier of Fraction Group within referenced RT Plan.",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Fraction Group Number"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "module" : "RT Series",
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
      "(3008,0070)[<0>](3008,0076)" : {
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "2",
         "module" : "Calculated Dose Reference Record",
         "name" : "Calculated Dose Reference Dose Value",
         "desc" : "Calculated Dose (Gy).",
         "mod_tables" : [
            "table_C.8-56"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "name" : "UID",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "name" : "Universal Entity ID Type",
         "module" : "General Study",
         "entity" : "Study",
         "usage" : "M",
         "req" : "1C",
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
         ]
      },
      "(0040,0275)[<0>](0040,0009)" : {
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
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     },
                     "el" : "para",
                     "content" : [
                        "The condition is to allow the contents of this macro to be present (e.g., to convey the reason for the procedure, such as whether a mammogram is for screening or diagnostic purposes) even when the procedure step was not formally scheduled and a value for this identifier is unknown, rather than making up a dummy value."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "name" : "Scheduled Procedure Step ID",
         "module" : "RT Series",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Series"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Treatment Record",
         "usage" : "U",
         "req" : "1",
         "module" : "Common Instance Reference",
         "name" : "Series Instance UID",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "req" : "1",
         "usage" : "M",
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "RT Series",
         "name" : "Text Value",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Referenced SOP Class UID",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ]
      },
      "(0008,0070)" : {
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "2",
         "name" : "Manufacturer",
         "module" : "General Equipment"
      },
      "(3008,0110)[<0>](3008,0080)[<1>](300c,0051)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Uniquely references Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: title",
                  "linkend" : "sect_C.8.8.10"
               },
               "el" : "xref"
            },
            " of referenced RT Plan. Required if Referenced Measured Dose Reference Number (3008,0082) is not sent. It shall not be present otherwise."
         ],
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Dose Reference Number",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](300a,0244)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "User-defined name for Template Device.",
         "name" : "Template Name",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M"
      },
      "(0040,0275)" : {
         "name" : "Request Attributes Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0171)[<2>](3008,0173)" : {
         "desc" : [
            "List of control points for this pulse.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.22.1"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.8-58"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "name" : "Brachy Pulse Control Point Delivered Sequence",
         "module" : "RT Brachy Session Record"
      },
      "(0008,0124)" : {
         "name" : "Mapping Resource Identification Sequence",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Time",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(4ffe,0001)" : {
         "name" : "MAC Parameters Sequence",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(3008,0110)[<0>](3008,0080)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Sequence of doses measured during treatment delivery, summed over entire session.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Measured Dose Reference Sequence",
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers"
      },
      "(0010,0024)" : {
         "req" : "3",
         "usage" : "M",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0018,1000)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : [
            "Manufacturer's serial number of the equipment that produced the composite instances.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This identifier corresponds to the device that actually created the images, such as a CR plate reader or a CT console, and may not be sufficient to identify all of the equipment in the imaging chain, such as the generator or gantry or plate."
                     ],
                     "attrs" : {
                        "xml:id" : "para_14bc1eda-9c90-459e-81ea-acab1d86e33b"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "name" : "Device Serial Number",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "3"
      },
      "(0010,0027)[<0>](0010,0024)[<1>](0040,0033)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID Type"
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "module" : "RT General Treatment Record",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(300a,0180)[<0>](300a,01d6)" : {
         "req" : "3",
         "usage" : "U",
         "entity" : "Treatment Record",
         "name" : "Table Top Lateral Setup Displacement",
         "module" : "RT Patient Setup",
         "desc" : "Lateral Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., lateral offset between patient positioning performed using setup and treatment position.",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "module" : "RT Series",
         "name" : "Accession Number",
         "req" : "3",
         "usage" : "M",
         "entity" : "Series"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](0008,1072)[<4>](0040,1104)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "module" : "RT Brachy Session Record",
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
         "mod_tables" : [
            "table_C.8-58",
            "table_10-1"
         ]
      },
      "(0008,0016)" : {
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ],
         "name" : "SOP Class UID",
         "module" : "SOP Common",
         "usage" : "M",
         "req" : "1",
         "entity" : "Treatment Record"
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence"
      },
      "(0008,1049)[<0>](0040,1104)" : {
         "module" : "General Study",
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(300a,0078)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Total number of treatments (Fractions) planned for current Fraction Group.",
         "module" : "RT Brachy Session Record",
         "name" : "Number of Fractions Planned",
         "entity" : "Treatment Record",
         "req" : "2",
         "usage" : "M"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "req" : "1",
         "usage" : "M",
         "entity" : "Treatment Record",
         "name" : "MAC ID Number",
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(3008,0110)[<0>](300c,0040)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : [
            "Sequence of verification images obtained during delivery of current beam.",
            "One or more Items are permitted in this Sequence.",
            "See Note."
         ],
         "name" : "Referenced Verification Image Sequence",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "3"
      },
      "(3008,0100)[<0>](300a,021b)" : {
         "usage" : "M",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Source Model ID",
         "desc" : [
            "User-supplied identifier for the radioactive source model that was used for the source in the treatment plan of which this session record is based to. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.15.15",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0010,1030)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Weight of the Patient, in kilograms.",
         "module" : "Patient Study",
         "name" : "Patient's Weight",
         "entity" : "Study",
         "usage" : "U",
         "req" : "3"
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
         "entity" : "Equipment",
         "usage" : "M",
         "req" : "3",
         "name" : "Date of Last Calibration",
         "module" : "General Equipment"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "module" : "Patient",
         "name" : "Home Community ID",
         "entity" : "Patient",
         "usage" : "M",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed."
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300a,0282)" : {
         "entity" : "Treatment Record",
         "usage" : "M",
         "req" : "1",
         "name" : "Channel Number",
         "module" : "RT Brachy Session Record",
         "desc" : "Identification number of the Channel. The value of Channel Number (300A,0282) shall be unique within the Application Setup in which it is created.",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "usage" : "M",
         "req" : "1C",
         "module" : "RT Series",
         "name" : "Floating Point Value"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Treatment Record",
         "req" : "1",
         "usage" : "M",
         "name" : "Digital Signature UID",
         "module" : "SOP Common"
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
      "Can't handle table_8.8-1 (in table_C.8-58:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.8-58:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.8-58:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.8-58:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
