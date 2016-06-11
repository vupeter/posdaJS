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
      "(300a,0206)[<0>](0008,1040)" : {
         "req" : "3",
         "desc" : "Department in the institution where the equipment is located that was used for treatment delivery.",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Machine Record",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "usage" : "M",
         "name" : "Institutional Department Name"
      },
      "(3008,0100)[<0>](300a,0216)" : {
         "usage" : "M",
         "name" : "Source Manufacturer",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "2",
         "desc" : "Manufacturer of source."
      },
      "(0008,1080)" : {
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "req" : "3"
      },
      "(0008,103e)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Series Description",
         "usage" : "M",
         "desc" : "Description of the series.",
         "req" : "3",
         "entity" : "Series"
      },
      "(0010,2293)" : {
         "entity" : "Patient",
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
         "name" : "Patient Breed Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0010,0032)" : {
         "module" : "Patient",
         "name" : "Patient's Birth Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
         "desc" : "Birth time of the Patient.",
         "entity" : "Patient"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0150)[<2>](3008,0152)" : {
         "entity" : "Treatment Record",
         "desc" : "Identification number of the Channel Shield. The value of Channel Shield Number (300A,02B2) shall be unique within the Channel in which it is created.",
         "req" : "2",
         "usage" : "M",
         "name" : "Referenced Channel Shield Number",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address"
      },
      "(3008,0200)" : {
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "name" : "Current Treatment Status",
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
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0136)" : {
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "name" : "Specified Number of Pulses",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "req" : "1C",
         "desc" : [
            "Number of Pulses specified per fraction for current Channel. Required if Brachy Treatment Type (300A,0202) is PDR. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.22.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01bc)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Setup Device Parameter",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "2",
         "desc" : [
            "Setup Parameter for Setup Device in appropriate IEC 61217 coordinate system.",
            "Units shall be mm for distances and degrees for angles."
         ]
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0198)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Position/Notch number of Fixation Device.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Fixation Device Position",
         "usage" : "U",
         "module" : "RT Patient Setup"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0150)" : {
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of Channel Shields associated with current Channel.",
            "One or more Items are permitted in this sequence.",
            "See RT Plan IOD for description of Channel Shields."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Recorded Channel Shield Sequence",
         "usage" : "M",
         "module" : "RT Brachy Session Record"
      },
      "(0010,0010)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient's Name",
         "req" : "2",
         "desc" : "Patient's full name.",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "usage" : "M",
         "name" : "Contribution Description",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "usage" : "M",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "Device Serial Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,002a)" : {
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Treatment Termination Status",
         "usage" : "U",
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
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Person Name"
      },
      "(0012,0060)" : {
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
         "req" : "2",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Coordinating Center Name",
         "usage" : "U",
         "module" : "Clinical Trial Series"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "usage" : "M"
      },
      "(0008,0070)" : {
         "entity" : "Equipment",
         "req" : "2",
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Manufacturer",
         "usage" : "M",
         "module" : "General Equipment"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300a,0288)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : [
            "Type of Source movement.",
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
         "name" : "Source Movement Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
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
         ]
      },
      "(0038,0010)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admission ID",
         "usage" : "U",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "req" : "3",
         "entity" : "Study"
      },
      "(3008,0100)[<0>](300a,0229)" : {
         "usage" : "M",
         "name" : "Source Strength Units",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "desc" : [
            "Measurement unit of Source Strength.",
            "Required if the source is not a gamma-emitting (photon) source. May be present otherwise.",
            {
               "title" : "Enumerated Values:",
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
               "type" : "variablelist"
            }
         ],
         "req" : "1C"
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0008,1115)" : {
         "usage" : "U",
         "name" : "Referenced Series Sequence",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "module" : "Common Instance Reference",
         "entity" : "Treatment Record",
         "req" : "1C",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in this Study."
         ]
      },
      "(300a,0206)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment used for treatment delivery.",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Machine Record",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "name" : "Device Serial Number",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Series"
      },
      "(0010,1000)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs",
         "usage" : "M",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0010,0200)" : {
         "module" : "Patient",
         "usage" : "M",
         "name" : "Quality Control Subject",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "3",
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
         "entity" : "Patient"
      },
      "(0008,1115)[<0>](0020,000e)" : {
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Text Value",
         "usage" : "M",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0080)" : {
         "desc" : [
            "Sequence of doses measured during treatment delivery, summed over entire session.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Referenced Measured Dose Reference Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "module" : "Patient",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Patient"
      },
      "(300a,0206)[<0>](0008,1090)" : {
         "module" : "RT Treatment Machine Record",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "req" : "2",
         "desc" : "Manufacturer's model name of the equipment used for treatment delivery.",
         "entity" : "Treatment Record"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "entity" : "Patient"
      },
      "(3008,0030)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT General Treatment Record",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID"
      },
      "(0008,0012)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "usage" : "M",
         "name" : "Instance Creation Date",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "module" : "RT Series",
         "name" : "Time",
         "usage" : "M",
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
         "entity" : "Series"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0150)[<2>](300a,02b4)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Channel Shield Name",
         "usage" : "M",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "User-defined name for Channel Shield."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0090)" : {
         "usage" : "M",
         "name" : "Referenced Calculated Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : [
            "Sequence of doses estimated for each treatment delivery.",
            "One or more Items are permitted in this sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "usage" : "M"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Distribution Type",
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
         "entity" : "Study"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0134)" : {
         "usage" : "M",
         "name" : "Delivered Channel Total Time",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "desc" : "Total amount of time actually delivered between Control Point 0 and final Control Point of the Brachy Control Point Sequence (300A,02D0) for current Channel (sec).",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0162)" : {
         "entity" : "Treatment Record",
         "desc" : "Date on which the source(s) exited the safe. Required if Recorded Channel Sequence (3008,0130) is sent and Brachy Treatment Type (300A,0202) is not MANUAL.",
         "req" : "1C",
         "usage" : "M",
         "name" : "Safe Position Exit Date",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(3008,0110)[<0>](3008,002c)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Treatment Verification Status",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "2",
         "desc" : [
            "Conditions under which treatment was verified by a verification system.",
            {
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
               ],
               "title" : "Enumerated Values:"
            }
         ]
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "module" : "SOP Common",
         "name" : "Station Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "3",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "name" : "DateTime",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ]
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "usage" : "M",
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped.",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0018,1201)" : {
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
         "req" : "3",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Time of Last Calibration",
         "usage" : "M"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Breed Registry Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ]
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
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "entity" : "Study",
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
         "req" : "1C"
      },
      "(3008,0110)[<0>](300a,0236)" : {
         "entity" : "Treatment Record",
         "desc" : "User-defined name for Application Setup.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Application Setup Name",
         "usage" : "M",
         "module" : "RT Brachy Session Record"
      },
      "(300c,0002)[<0>](0008,1155)" : {
         "module" : "RT General Treatment Record",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](300a,0294)" : {
         "name" : "Source Applicator Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "desc" : "User-defined name for Source Applicator.",
         "req" : "3"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study"
      },
      "(300a,0180)[<0>](300a,0190)" : {
         "module" : "RT Patient Setup",
         "usage" : "U",
         "name" : "Fixation Device Sequence",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "3",
         "desc" : [
            "Sequence of Fixation Devices used in Patient Setup.",
            "One or more items are permitted in this sequence."
         ],
         "entity" : "Treatment Record"
      },
      "(0008,0018)" : {
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "req" : "1",
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "entity" : "Treatment Record"
      },
      "(0012,0062)" : {
         "desc" : [
            "The true identity of the patient has been removed from the Attributes and the Pixel Data",
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
            }
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient Identity Removed"
      },
      "(3008,0030)" : {
         "module" : "RT General Treatment Record",
         "usage" : "M",
         "name" : "Referenced Treatment Record Sequence",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "desc" : [
            "Reference to RT Treatment Records to which the current RT Treatment Record is significantly related.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
      },
      "(3008,0110)[<0>](3008,002b)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Treatment machine termination code. This code is dependent upon the particular application and equipment.",
         "name" : "Treatment Termination Code",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "usage" : "M",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
      "(0040,0275)[<0>](0008,1110)" : {
         "entity" : "Series",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Referenced Study Sequence",
         "module" : "RT Series"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)" : {
         "name" : "Brachy Control Point Delivered Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : [
            "Sequence of machine configurations describing this Channel.",
            "Two or more items shall be included in this sequence.",
            [
               "See RT Plan IOD and ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.8.22.1"
                  },
                  "el" : "xref"
               },
               " for description of Brachy Control Point Delivered Sequence."
            ]
         ]
      },
      "(0012,0031)" : {
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
         "name" : "Clinical Trial Site Name",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "SOP Common",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Treatment Record"
      },
      "(0010,0030)" : {
         "entity" : "Patient",
         "req" : "2",
         "desc" : "Birth date of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Patient's Birth Date",
         "module" : "Patient"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Patient"
      },
      "(0008,0015)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Coercion DateTime",
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
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0008,0081)" : {
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3",
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located."
      },
      "(3008,0110)[<0>](3008,0120)[<1>](300a,0264)" : {
         "req" : "1",
         "desc" : [
            "Type of Brachy Accessory Device.",
            {
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
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "name" : "Brachy Accessory Device Type",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "DateTime",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series"
      },
      "(0010,2297)" : {
         "usage" : "M",
         "name" : "Responsible Person",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2C",
         "desc" : [
            "Name of person with medical decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ]
      },
      "(3008,0070)" : {
         "req" : "1",
         "desc" : [
            "Sequence of doses estimated for each treatment delivery.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Treatment Record",
         "module" : "Calculated Dose Reference Record",
         "name" : "Calculated Dose Reference Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-56"
         ]
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1150)" : {
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "U",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "RT Patient Setup"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "entity" : "Treatment Record",
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
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Software Versions",
         "module" : "SOP Common"
      },
      "(4ffe,0001)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Parameters Sequence",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0020,0013)" : [
         {
            "usage" : "M",
            "name" : "Instance Number",
            "mod_tables" : [
               "table_C.8-53"
            ],
            "module" : "RT General Treatment Record",
            "entity" : "Treatment Record",
            "req" : "1",
            "desc" : "Instance number identifying this particular instance of the object."
         },
         {
            "req" : "3",
            "desc" : "A number that identifies this Composite object instance.",
            "entity" : "Treatment Record",
            "module" : "SOP Common",
            "usage" : "M",
            "name" : "Instance Number",
            "mod_tables" : [
               "table_C.12-1"
            ]
         }
      ],
      "(0040,0250)" : {
         "usage" : "M",
         "name" : "Performed Procedure Step End Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "req" : "3"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Date of Last Calibration",
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
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Person's mailing address"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Purpose of Reference Code Sequence",
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
         "entity" : "Treatment Record"
      },
      "(0008,0014)" : {
         "req" : "3",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Instance Creator UID"
      },
      "(0010,0024)[<0>](0040,0033)" : {
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
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
                     "linkend" : "sect_10.14",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for Defined Terms."
            ]
         ],
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,103f)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "usage" : "M",
         "name" : "Series Description Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0008,0031)" : {
         "entity" : "Series",
         "req" : "3",
         "desc" : "Time the Series started.",
         "usage" : "M",
         "name" : "Series Time",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0025)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Time when the delivery of radiation at this control point began. For the final control point this shall be the Time when the previous control point ended.",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Treatment Control Point Time",
         "module" : "RT Brachy Session Record"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "entity" : "Patient",
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
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "name" : "Type of Patient ID",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Reason for Requested Procedure Code Sequence",
         "usage" : "M",
         "req" : "3",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Series"
      },
      "(0100,0420)" : {
         "req" : "3",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "SOP Authorization DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(300c,0002)" : {
         "mod_tables" : [
            "table_C.8-53"
         ],
         "usage" : "M",
         "name" : "Referenced RT Plan Sequence",
         "module" : "RT General Treatment Record",
         "entity" : "Treatment Record",
         "req" : "2",
         "desc" : [
            "Reference to a RT Plan.",
            "Zero or one Item shall be included in this Sequence."
         ]
      },
      "(0010,1021)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "name" : "Patient's Size Code Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(3008,0110)[<0>](3008,0120)[<1>](3008,0122)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Referenced Brachy Accessory Device Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Identification number of the Brachy Accessory Device. The value of Brachy Accessory Device Number (300A,0262) shall be unique within the Application Setup in which it is created.",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0080)[<2>](300c,0051)" : {
         "req" : "1C",
         "desc" : "Uniquely references Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan. Required if Referenced Measured Dose Reference Number (3008,0082) is not sent. It shall not be present otherwise.",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Referenced Dose Reference Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0008,0090)" : {
         "req" : "2",
         "desc" : "Name of the patient's referring physician",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Referring Physician's Name"
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
         "req" : "2",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Name",
         "usage" : "U"
      },
      "(0040,0253)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step ID",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "req" : "3"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "req" : "1C",
         "entity" : "Study",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID"
      },
      "(0040,0260)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Performed Protocol Code Sequence",
         "usage" : "M",
         "req" : "3",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this sequence.",
         "entity" : "Series"
      },
      "(0008,0080)" : {
         "entity" : "Equipment",
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "module" : "General Equipment"
      },
      "(0010,2299)" : {
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Responsible Organization",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0018,a001)[<0>](0018,1201)" : {
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
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Time of Last Calibration",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Manufacturer",
         "req" : "1",
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "entity" : "Series",
         "req" : "1C",
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
         "name" : "Scheduled Procedure Step ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "M",
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
         "entity" : "Series"
      },
      "(300a,0206)" : {
         "module" : "RT Treatment Machine Record",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "name" : "Treatment Machine Sequence",
         "usage" : "M",
         "req" : "1",
         "desc" : [
            "Sequence describing treatment machine used for treatment delivery.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Treatment Record"
      },
      "(3008,0100)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Recorded Source Sequence",
         "usage" : "M",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : [
            "Sequence of Sources to be used within Application Setups.",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
         "req" : "1"
      },
      "(0008,1062)[<0>](0008,0082)" : {
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
         "req" : "1C",
         "entity" : "Study"
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Encrypted Content Transfer Syntax UID",
         "module" : "SOP Common"
      },
      "(0008,1010)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "name" : "Station Name",
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "req" : "3"
      },
      "(3008,0050)" : {
         "req" : "3",
         "desc" : [
            "Sequence of references to Calculated Dose References.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "name" : "Treatment Summary Calculated Dose Reference Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(0040,0244)" : {
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "req" : "3",
         "name" : "Performed Procedure Step Start Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series"
      },
      "(3008,0220)[<0>](300a,0078)" : {
         "entity" : "Treatment Record",
         "req" : "2",
         "desc" : "Number of fractions planned for this fraction group.",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "name" : "Number of Fractions Planned",
         "module" : "RT Treatment Summary Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "module" : "RT Series",
         "name" : "Value Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
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
         "entity" : "Series"
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
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Reason For Performed Procedure Code Sequence",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a4)" : {
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Shielding Device Label",
         "usage" : "U",
         "req" : "2",
         "desc" : "User-defined label for Shielding Device.",
         "entity" : "Treatment Record"
      },
      "(3008,00e0)[<0>](300c,0051)" : {
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "name" : "Referenced Dose Reference Number",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan referenced in Referenced RT Plan Sequence (300C,0002) of RT General Treatment Record Module.",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "entity" : "Patient",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "module" : "Patient"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0166)" : {
         "name" : "Safe Position Return Date",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1C",
         "desc" : "Date on which the source(s) returned to the safe. Required if Recorded Channel Sequence (3008,0130) is sent and Brachy Treatment Type (300A,0202) is not MANUAL."
      },
      "(3008,0010)[<0>](3004,0002)" : {
         "entity" : "Treatment Record",
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
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "name" : "Dose Units",
         "usage" : "U",
         "module" : "Measured Dose Reference Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "module" : "RT Series",
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Name",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0008,1111)" : {
         "entity" : "Series",
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Referenced Performed Procedure Step Sequence",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(0038,0064)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "name" : "Issuer of Service Episode ID Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(3008,0010)" : {
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of doses measured during treatment delivery, summed over entire session.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "name" : "Measured Dose Reference Sequence",
         "usage" : "U",
         "module" : "Measured Dose Reference Record"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,00f9)" : {
         "module" : "RT Patient Setup",
         "usage" : "U",
         "name" : "Accessory Code",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0010)[<0>](3008,0064)" : {
         "name" : "Measured Dose Reference Number",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "module" : "Measured Dose Reference Record",
         "entity" : "Treatment Record",
         "req" : "1C",
         "desc" : "Unique identifier of measured dose point. Required only if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise."
      },
      "(0008,0050)" : {
         "req" : "2",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0008,1090)" : {
         "entity" : "Equipment",
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(3008,0110)[<0>](300a,0242)" : {
         "req" : "3",
         "desc" : "User-defined type for Template Device.",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Template Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](3008,0062)" : {
         "desc" : "Contains the Data Element Tag of the attribute that was overridden.",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Override Parameter Pointer"
      },
      "(3008,0220)[<0>](3008,005a)" : {
         "name" : "Number of Fractions Delivered",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "req" : "2",
         "desc" : "Number of fractions delivered as of Treatment Summary Report."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C"
      },
      "(0038,0060)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "name" : "Service Episode ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0008,1110)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referenced Study Sequence",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
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
         ]
      },
      "(300a,0180)[<0>](300a,0401)[<1>](300a,0402)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Comment on the Setup Image.",
         "usage" : "U",
         "name" : "Setup Image Comment",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup"
      },
      "(0010,2294)" : {
         "req" : "2C",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Breed Registration Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0192)" : {
         "req" : "1",
         "desc" : [
            "Type of Fixation Device used during in Patient Setup.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Fixation Device Type"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series"
      },
      "(0012,0083)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Clinical Trial Use Sequence",
         "usage" : "U",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "req" : "3",
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
         ]
      },
      "(3008,0220)[<0>](3008,0240)" : {
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence describing status of fractions in Fraction Group.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "U",
         "name" : "Fraction Status Summary Sequence",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "module" : "RT Treatment Summary Record"
      },
      "(0038,0014)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Issuer of Admission ID Sequence",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1C",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "name" : "Text Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0010,1010)" : {
         "name" : "Patient's Age",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Age of the Patient.",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0012,0071)" : {
         "module" : "Clinical Trial Series",
         "name" : "Clinical Trial Series ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "req" : "3",
         "desc" : [
            "An identifier of the series in the context of a clinical trial. See ",
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
      "(0012,0072)" : {
         "req" : "3",
         "desc" : [
            "A description of the series in the context of a clinical trial. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.3.2.1.2"
               }
            },
            "."
         ],
         "entity" : "Series",
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "name" : "Clinical Trial Series Description",
         "mod_tables" : [
            "table_C.7-5b"
         ]
      },
      "(3008,0220)[<0>](3008,0224)" : {
         "module" : "RT Treatment Summary Record",
         "usage" : "U",
         "name" : "Fraction Group Type",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "req" : "2",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "req" : "3",
         "entity" : "Series"
      },
      "(3008,0100)[<0>](300a,0228)" : {
         "req" : "1",
         "desc" : "Half-life of Isotope (days).",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Source Isotope Half Life"
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
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "usage" : "M",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located."
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "req" : "3",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](300c,00f0)" : {
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Referenced Control Point Index",
         "req" : "3",
         "desc" : "Index of current Control Point, starting at 0 for first Control Point.",
         "entity" : "Treatment Record"
      },
      "(0100,0424)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization Comment",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(3008,0100)[<0>](300a,022b)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Source Strength",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
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
         "req" : "1C"
      },
      "(0032,1034)" : {
         "usage" : "M",
         "name" : "Requesting Service Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
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
         "module" : "Patient",
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(3008,0070)[<0>](3008,0076)" : {
         "usage" : "U",
         "name" : "Calculated Dose Reference Dose Value",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "module" : "Calculated Dose Reference Record",
         "entity" : "Treatment Record",
         "desc" : "Calculated Dose (Gy).",
         "req" : "2"
      },
      "(0400,0561)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Original Attributes Sequence",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "entity" : "Treatment Record",
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
         "usage" : "M",
         "name" : "Data Elements Signed",
         "module" : "SOP Common"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
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
         "req" : "1C",
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Universal Entity ID Type"
      },
      "(0040,0275)[<0>](0040,1001)" : {
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
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Requested Procedure ID",
         "usage" : "M"
      },
      "(0008,1030)" : {
         "entity" : "Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "req" : "3",
         "usage" : "M",
         "name" : "Study Description",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(3008,0100)[<0>](3008,0105)" : {
         "entity" : "Treatment Record",
         "desc" : "Serial Number of source.",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Source Serial Number",
         "module" : "RT Brachy Session Record"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Reason for the Attribute Modification",
         "usage" : "M",
         "req" : "1",
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
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "req" : "3",
         "desc" : "Reason for requesting this procedure.",
         "entity" : "Series",
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Reason for the Requested Procedure",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Study Instance UID",
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Floating Point Value",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ],
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Series"
      },
      "(0010,0024)[<0>](0040,0039)" : {
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
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "module" : "Patient"
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(3008,0050)[<0>](3008,0052)" : {
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "name" : "Cumulative Dose to Dose Reference",
         "desc" : "Cumulative Dose delivered to Dose Reference (Gy).",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0100)[<0>](300a,022a)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Reference Air Kerma Rate",
         "usage" : "M",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : [
            "Air Kerma Rate in air of Isotope specified at Source Strength Reference Date (300A,022C) and Source Strength Reference Time (300A,022E) (in \u00b5Gy h",
            {
               "el" : "superscript",
               "content" : [
                  "-1"
               ]
            },
            " at 1 m). Value shall be zero for non-gamma sources."
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0168)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Safe Position Return Time",
         "usage" : "M",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "desc" : "Time on which the source(s) returned to the safe. Required if Recorded Channel Sequence (3008,0130) is sent and Brachy Treatment Type (300A,0202) is not MANUAL.",
         "req" : "1C"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,00f9)" : {
         "module" : "RT Patient Setup",
         "name" : "Accessory Code",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "3",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](300a,0232)" : {
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
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "name" : "Application Setup Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9186)" : {
         "entity" : "Treatment Record",
         "desc" : "Identifies the device providing the respiratory signal.",
         "req" : "3",
         "usage" : "U",
         "name" : "Respiratory Signal Source ID",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup"
      },
      "(0010,2160)" : {
         "name" : "Ethnic Group",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "desc" : "Ethnic group or race of the patient."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "usage" : "M",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0196)" : {
         "req" : "3",
         "desc" : "User-defined description of Fixation Device.",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Fixation Device Description"
      },
      "(300a,0078)" : {
         "entity" : "Treatment Record",
         "req" : "2",
         "desc" : "Total number of treatments (Fractions) planned for current Fraction Group.",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Number of Fractions Planned",
         "module" : "RT Brachy Session Record"
      },
      "(0008,1040)" : {
         "req" : "3",
         "desc" : "Department in the institution where the equipment that produced the composite instances is located.",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.7-8"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300a,02a2)" : {
         "desc" : "Identification number of the Transfer Tube. The value of Transfer Tube Number (300A,02A2) shall be unique within the Channel in which it is created.",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Transfer Tube Number"
      },
      "(3008,0110)[<0>](3008,0080)" : {
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of doses measured during treatment delivery, summed over entire session.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "usage" : "M",
         "name" : "Referenced Measured Dose Reference Sequence",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(0010,2201)" : {
         "module" : "Patient",
         "name" : "Patient Species Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "1C",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "entity" : "Patient"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Modified Attributes Sequence"
      },
      "(3008,0110)[<0>](3008,0120)[<1>](300a,0266)" : {
         "req" : "3",
         "desc" : "User-defined name for Brachy Accessory Device.",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "name" : "Brachy Accessory Device Name",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "req" : "1",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "HL7 Instance Identifier",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1001)" : {
         "desc" : "Other names used to identify the patient.",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Other Patient Names",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(300c,0022)" : {
         "name" : "Referenced Fraction Group Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Identifier of Fraction Group within referenced RT Plan."
      },
      "(0008,001b)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Specialized SOP Class UID",
         "usage" : "M",
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
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0132)" : {
         "desc" : "Total amount of time specified between Control Point 0 and final Control Point of the Brachy Control Point Sequence (300A,02D0) for current Channel (sec).",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Specified Channel Total Time"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "entity" : "Treatment Record",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution DateTime",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(3008,0010)[<0>](3008,0014)" : {
         "name" : "Measured Dose Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "module" : "Measured Dose Reference Record",
         "entity" : "Treatment Record",
         "req" : "2",
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
         ]
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9170)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Respiratory Motion Compensation Technique",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : [
            "Technique applied to reduce respiratory motion artifacts.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
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
         ]
      },
      "(0008,0110)[<0>](0008,0112)" : {
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
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Registry",
         "usage" : "M"
      },
      "(0012,0082)" : {
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "MAC ID Number",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](300a,00ce)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Treatment Delivery Type",
         "usage" : "M",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "2",
         "desc" : [
            "Delivery Type of treatment.",
            {
               "type" : "variablelist",
               "title" : "Defined Terms:",
               "list" : [
                  [
                     "TREATMENT",
                     "normal patient treatment"
                  ],
                  [
                     "CONTINUATION",
                     "continuation of interrupted treatment"
                  ]
               ]
            }
         ]
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Study",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0012,0064)" : {
         "entity" : "Patient",
         "req" : "1C",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "De-identification Method Code Sequence",
         "usage" : "M",
         "module" : "Patient"
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
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "U"
      },
      "(3008,0110)[<0>](3008,0116)" : {
         "name" : "Application Setup Check",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "desc" : [
            "Results of check-wire travel through all channels of current Application Setup.",
            {
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
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "3"
      },
      "(300a,0180)[<0>](300a,0184)" : {
         "module" : "RT Patient Setup",
         "name" : "Patient Additional Position",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "User-defined additional description of patient position. Required if Patient Position (0018,5100) is not present.",
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,013a)" : {
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Specified Pulse Repetition Interval",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Pulse repetition interval (sec) specified for current Channel. Required if Brachy Treatment Type (300A,0202) is PDR. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.8.8.22.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            }
         ],
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](300a,0292)" : {
         "entity" : "Treatment Record",
         "desc" : [
            "Type of Source Applicator.",
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "usage" : "M",
         "name" : "Source Applicator Type",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(300a,0180)[<0>](300a,0183)" : {
         "module" : "RT Patient Setup",
         "usage" : "U",
         "name" : "Patient Setup Label",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "desc" : "The user-defined label for the patient setup.",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](300a,02d2)" : {
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Control Point Relative Position",
         "usage" : "M",
         "req" : "1",
         "desc" : "Distance between current Control Point Position and the distal-most possible Source position in current Channel (mm). See RT Plan IOD.",
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
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
         ]
      },
      "(3008,0100)[<0>](300a,0226)" : {
         "desc" : "User-defined name of Isotope.",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Source Isotope Name"
      },
      "(3008,0100)[<0>](300a,022e)" : {
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "name" : "Source Strength Reference Time",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "req" : "1",
         "desc" : "Reference time for Air Kerma Rate (300A,022A) or Source Strength (300A,022B) of Isotope.",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0150)[<2>](300a,02b3)" : {
         "entity" : "Treatment Record",
         "desc" : "User or machine supplied identifier for Channel Shield.",
         "req" : "2",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Channel Shield ID",
         "module" : "RT Brachy Session Record"
      },
      "(0040,0280)" : {
         "module" : "RT Series",
         "name" : "Comments on the Performed Procedure Step",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "req" : "3",
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "entity" : "Series"
      },
      "(0008,0060)" : {
         "req" : "1",
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
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Modality",
         "usage" : "M"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300a,0110)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Number of Control Points",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "req" : "1",
         "desc" : "Number of control points in Channel. For an N-segment Channel there will be 2N (stepwise movement) or N+1 (continuous movement) control points.",
         "entity" : "Treatment Record"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M"
      },
      "(3008,0050)[<0>](300c,0051)" : {
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan referenced in Referenced RT Plan Sequence (300C,0002) of RT General Treatment Record Module.",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "name" : "Referenced Dose Reference Number"
      },
      "(300a,0180)[<0>](300a,01d6)" : {
         "usage" : "U",
         "name" : "Table Top Lateral Setup Displacement",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "desc" : "Lateral Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., lateral offset between patient positioning performed using setup and treatment position.",
         "req" : "3"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0024)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Date when the delivery of radiation at this control point began. For the final control point this shall be the Date when the previous control point ended.",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Treatment Control Point Date",
         "usage" : "M",
         "module" : "RT Brachy Session Record"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Attribute Modification DateTime",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0008,0016)" : {
         "entity" : "Treatment Record",
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
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               },
               "el" : "olink"
            },
            "."
         ],
         "usage" : "M",
         "name" : "SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0100,0426)" : {
         "usage" : "M",
         "name" : "Authorization Equipment Certification Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Time",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "entity" : "Treatment Record",
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
               ]
            }
         ],
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Certificate Type",
         "module" : "SOP Common"
      },
      "(3008,0070)[<0>](3008,0072)" : {
         "entity" : "Treatment Record",
         "desc" : "Unique identifier of dose reference point within RT Treatment Record IOD. Required only if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "req" : "1C",
         "usage" : "U",
         "name" : "Calculated Dose Reference Number",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "module" : "Calculated Dose Reference Record"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "entity" : "Study",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(0010,1020)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Patient's Size",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Length or size of the Patient, in meters."
      },
      "(0028,0303)" : {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "el" : "olink",
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "PS3.15"
                  }
               },
               "."
            ]
         ],
         "req" : "3",
         "name" : "Longitudinal Temporal Information Modified",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0010,0040)" : {
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "req" : "2",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Sex",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "usage" : "M",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0008,0051)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step Description",
         "usage" : "M"
      },
      "(3008,0110)[<0>](300c,0040)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : [
            "Sequence of verification images obtained during delivery of current beam.",
            "One or more Items are permitted in this sequence.",
            "See Note."
         ],
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Referenced Verification Image Sequence",
         "usage" : "M",
         "module" : "RT Brachy Session Record"
      },
      "(300c,0002)[<0>](0008,1150)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "module" : "RT General Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0138)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Delivered Number of Pulses",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1C",
         "desc" : [
            "Number of Pulses actually delivered per fraction for current Channel. Required if Brachy Treatment Type (300A,0202) is PDR. See ",
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
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : [
            [
               "A certificate that holds the identity of the entity producing this Digital Signature, that entity's public key or key identifier, and the algorithm and associated parameters with which that public key is to be used. Algorithms allowed are specified in Digital Signature Security Profiles (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15",
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
                           "content" : [
                              "\n                          ",
                              {
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
                     "el" : "orderedlist"
                  },
                  "\n                    "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate of Signer",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Text Value",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "entity" : "Patient",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "module" : "Patient"
      },
      "(0012,0040)" : {
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
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Subject ID"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b6)" : {
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
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Setup Device Type"
      },
      "(3008,0110)[<0>](300c,0040)[<1>](0008,1150)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-58",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "RT Brachy Session Record"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "name" : "Accession Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "req" : "3"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "entity" : "Study",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "module" : "General Study"
      },
      "(0008,0030)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study Time",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "2",
         "desc" : "Time the Study started."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "UID",
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "entity" : "Patient",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0038,0062)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : "Description of the type of service episode.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode Description",
         "usage" : "U",
         "module" : "Patient Study"
      },
      "(300a,0180)[<0>](300a,01d4)" : {
         "req" : "3",
         "desc" : "Longitudinal Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., longitudinal offset between patient positioning performed using setup and treatment position.",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Table Top Longitudinal Setup Displacement"
      },
      "(3008,0100)[<0>](300a,0214)" : {
         "desc" : [
            "Type of Source.",
            {
               "title" : "Defined Terms:",
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
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Source Type"
      },
      "(3008,0110)[<0>](300a,0240)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Template Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "req" : "3",
         "desc" : "Identification number of the Template.",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300a,0284)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Channel Length",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "req" : "2",
         "desc" : "Length of Channel (mm). See RT Plan IOD.",
         "entity" : "Treatment Record"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
         "req" : "3",
         "entity" : "Patient"
      },
      "(3008,0110)[<0>](300a,0250)" : {
         "req" : "1",
         "desc" : "Total Reference Air Kerma for current Application Setup, i.e., the sum of the products of the Air Kerma Rates of each Source in each Channel with its respective Channel Time (\u00b5Gy at 1 m). Value shall be zero for non-gamma sources.",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Total Reference Air Kerma",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9185)" : {
         "req" : "3",
         "desc" : "Description of respiratory motion compensation technique.",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "name" : "Respiratory Motion Compensation Technique Description",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(300a,0180)[<0>](300a,01b0)" : {
         "module" : "RT Patient Setup",
         "usage" : "U",
         "name" : "Setup Technique",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "req" : "3",
         "desc" : [
            "Setup Technique used in Patient Setup.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](3008,0066)" : {
         "usage" : "M",
         "name" : "Override Reason",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "desc" : "User-defined description of reason for override of parameter specified by Override Parameter Pointer (3008,0062).",
         "req" : "3"
      },
      "(3008,0070)[<0>](300c,0051)" : {
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan. Required only if Calculated Dose Reference Number (3008,0072) is not sent. It shall not be present otherwise.",
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "Calculated Dose Reference Record",
         "usage" : "U",
         "name" : "Referenced Dose Reference Number",
         "mod_tables" : [
            "table_C.8-56"
         ]
      },
      "(300a,0180)[<0>](300a,01d2)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Table Top Vertical Setup Displacement",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Vertical Displacement in IEC TABLE TOP coordinate system (in mm) relative to initial Setup Position, i.e., vertical offset between patient positioning performed using setup and treatment position."
      },
      "(0008,1200)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "desc" : [
            "Sequence of items each identifying a Study other than the Study of which this Instance is a part, which Studies contain Instances that are referenced elsewhere in this Instance.",
            "One or more Items shall be included in this sequence.",
            "Required if this Instance references Instances in other Studies."
         ],
         "mod_tables" : [
            "table_C.12-8"
         ],
         "usage" : "U",
         "name" : "Studies Containing Other Referenced Instances Sequence",
         "module" : "Common Instance Reference"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "name" : "Spatial Resolution",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(3008,0110)[<0>](3008,0090)[<1>](3008,0092)" : {
         "req" : "1C",
         "desc" : "Uniquely identifies Calculated Dose Reference specified by Calculated Dose Reference Number (3008,0072) within Calculated Dose Reference Sequence (3008,0070). Required if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "name" : "Referenced Calculated Dose Reference Number",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(3008,0054)" : {
         "usage" : "U",
         "name" : "First Treatment Date",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "req" : "2",
         "desc" : "Date of delivery of the first treatment."
      },
      "(0100,0410)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "SOP Instance Status",
         "req" : "3",
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
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "entity" : "Treatment Record"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](300a,0291)" : {
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Source Applicator ID",
         "usage" : "M",
         "desc" : "User or machine supplied identifier for Source Applicator.",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0090)[<2>](3008,0076)" : {
         "usage" : "M",
         "name" : "Calculated Dose Reference Dose Value",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "desc" : "Calculated Dose (Gy).",
         "req" : "1"
      },
      "(0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "entity" : "Patient",
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
         "req" : "3"
      },
      "(0020,000d)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Instance UID",
         "usage" : "M",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1",
         "desc" : "Unique identifier for the Study."
      },
      "(3008,0220)" : {
         "name" : "Fraction Group Summary Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence describing current state of planned vs. delivered fraction groups.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3"
      },
      "(300a,0206)[<0>](0008,0080)" : {
         "module" : "RT Treatment Machine Record",
         "name" : "Institution Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "req" : "2",
         "desc" : "Institution where the equipment is located that was used for treatment delivery.",
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "req" : "3",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study"
      },
      "(300a,0180)[<0>](300a,01b4)" : {
         "desc" : [
            "Sequence of devices used for patient alignment in Patient Setup.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Setup Device Sequence"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)" : {
         "desc" : [
            "Sequence of recorded Source Applicators.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "name" : "Recorded Source Applicator Sequence",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "req" : "3",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,0275)" : {
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this sequence."
         ],
         "usage" : "M",
         "name" : "Request Attributes Sequence",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series"
      },
      "(0010,2292)" : {
         "module" : "Patient",
         "name" : "Patient Breed Description",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "req" : "2C",
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
         "entity" : "Patient"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "entity" : "Study",
         "req" : "1",
         "desc" : [
            "Whether or not consent to distribute has been granted for the purpose described in Distribution Type (0012,0084).",
            {
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
               ],
               "title" : "Enumerated Values:"
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
         ],
         "module" : "Clinical Trial Study"
      },
      "(0012,0042)" : {
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Subject Reading ID",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "entity" : "Patient",
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
         "req" : "1C"
      },
      "(0008,1084)" : {
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "module" : "Patient Study"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300c,000e)" : {
         "name" : "Referenced Source Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced Source within the Recorded Source Sequence (3008,0100) for current Application Setup."
      },
      "(0018,1200)" : {
         "name" : "Date of Last Calibration",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "3",
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
         ]
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0251)" : {
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "name" : "Treatment Time",
         "desc" : "Time when fraction was delivered.",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](300a,0296)" : {
         "usage" : "M",
         "name" : "Source Applicator Length",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Length of Source Applicator (mm), defined as the distance between the connector of the applicator and the distal-most position of the source."
      },
      "(0012,0081)" : {
         "entity" : "Patient",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "req" : "1C",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(3008,0110)[<0>](3008,0120)[<1>](300a,0263)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Brachy Accessory Device ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "User or machine supplied identifier for Brachy Accessory Device.",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "usage" : "M",
         "name" : "Date",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Responsible Organization",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information."
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(3008,0110)[<0>](300a,0244)" : {
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "name" : "Template Name",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "User-defined name for Template Device.",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0080)[<1>](300c,0051)" : {
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Referenced Dose Reference Number",
         "usage" : "M",
         "req" : "1C",
         "desc" : "Uniquely references Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan. Required if Referenced Measured Dose Reference Number (3008,0082) is not sent. It shall not be present otherwise.",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0080)[<1>](3008,0082)" : {
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Referenced Measured Dose Reference Number",
         "usage" : "M",
         "req" : "1C",
         "desc" : "Uniquely references Measured Dose Reference specified by Measured Dose Reference Number (3008,0064) in Measured Dose Reference Sequence (3008,0010). Required if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "module" : "RT Series",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Series"
      },
      "(3008,0110)[<0>](3008,0080)[<1>](3008,0016)" : {
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "name" : "Measured Dose Value",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "req" : "1",
         "desc" : "Measured Dose in units specified by Dose Units (3004,0002) in sequence referenced by Measured Dose Reference Sequence (3008,0010) or Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan as defined above.",
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this sequence.",
         "req" : "3",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Protocol Context Sequence"
      },
      "(0012,0063)" : {
         "module" : "Patient",
         "name" : "De-identification Method",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         ],
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Requested Procedure Description",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "req" : "3",
         "entity" : "Series"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01d0)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "User-defined description of Setup Reference used for patient alignment.",
         "name" : "Setup Reference Description",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup"
      },
      "(0018,1000)" : {
         "module" : "General Equipment",
         "usage" : "M",
         "name" : "Device Serial Number",
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
         ],
         "req" : "3",
         "entity" : "Equipment"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "name" : "Person Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Source of Previous Values",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(3008,00e0)[<0>](300a,0016)" : {
         "req" : "3",
         "desc" : "User-defined description of Dose Reference.",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "usage" : "U",
         "name" : "Dose Reference Description",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(0010,2180)" : {
         "req" : "3",
         "desc" : "Occupation of the Patient.",
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Occupation",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ]
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
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Treatment Record"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Patient"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "entity" : "Treatment Record",
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "module" : "SOP Common"
      },
      "(0008,001a)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Related General SOP Class UID",
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
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Time"
      },
      "(3008,0110)[<0>](3008,0090)[<1>](300c,0051)" : {
         "usage" : "M",
         "name" : "Referenced Dose Reference Number",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan. Required if Referenced Calculated Dose Reference Number (3008,0092) is not sent. It shall not be present otherwise."
      },
      "(0400,0500)[<0>](0400,0520)" : {
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
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Encrypted Content",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "entity" : "Treatment Record",
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
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "module" : "SOP Common"
      },
      "(3008,0220)[<0>](300c,0022)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "References Fraction Group Number (300A,0071) in Fraction Group Sequence (300A,0070) in the referenced RT Plan.",
         "name" : "Referenced Fraction Group Number",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "module" : "RT Treatment Summary Record"
      },
      "(0008,1115)[<0>](0008,114a)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,4000)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Comments",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "3",
         "desc" : "User-defined additional information about the patient."
      },
      "(3008,0110)[<0>](3008,0090)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : [
            "Sequence of doses estimated for each treatment delivery.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Referenced Calculated Dose Reference Sequence",
         "usage" : "M",
         "module" : "RT Brachy Session Record"
      },
      "(300a,0180)[<0>](300a,0401)" : {
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Referenced Setup Image Sequence",
         "usage" : "U",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : [
            "Sequence of setup verification images for this patient setup.",
            "One or more items are permitted in this sequence.",
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
      "(0008,0110)[<0>](0008,0103)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102).",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Coding Scheme Version",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "entity" : "Series",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "req" : "1C",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Study"
      },
      "(0400,0500)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Attributes Sequence",
         "usage" : "M",
         "req" : "1C",
         "desc" : [
            "Sequence of Items containing encrypted DICOM data.",
            "One or more Items shall be included in this sequence.",
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
         "entity" : "Treatment Record"
      },
      "(0008,0013)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Time",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0010,0020)" : {
         "usage" : "M",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "2",
         "desc" : "Primary hospital identification number or code for the patient."
      },
      "(3008,00e0)[<0>](3008,0052)" : {
         "req" : "1",
         "desc" : "Cumulative Dose delivered to Dose Reference (Gy).",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "name" : "Cumulative Dose to Dose Reference",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)" : {
         "req" : "1",
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "name" : "Referenced Instance Sequence",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ]
      },
      "(0008,0053)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Query/Retrieve View",
         "usage" : "M",
         "module" : "SOP Common"
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
         "req" : "1C",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Specific Character Set",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(300a,0180)[<0>](300a,01a0)" : {
         "desc" : [
            "Sequence of Shielding Devices used in Patient Setup.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Shielding Device Sequence"
      },
      "(0040,0251)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Time",
         "usage" : "M",
         "req" : "3",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "entity" : "Series"
      },
      "(300a,0202)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Brachy Treatment Type",
         "usage" : "M",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : [
            "Type of brachytherapy treatment.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ]
      },
      "(3008,0110)[<0>](3008,0022)" : {
         "desc" : "Fraction number for this application setup.",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "name" : "Current Fraction Number",
         "mod_tables" : [
            "table_C.8-58"
         ]
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "usage" : "M",
         "name" : "Digital Signature Purpose Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "name" : "Rational Numerator Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0194)" : {
         "desc" : "User-defined label identifier for Fixation Device.",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Fixation Device Label",
         "usage" : "U"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "Treatment Record",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(3008,0010)[<0>](3008,0016)" : {
         "desc" : "Measured Dose in units specified by Dose Units (3004,0002).",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "Measured Dose Reference Record",
         "usage" : "U",
         "name" : "Measured Dose Value",
         "mod_tables" : [
            "table_C.8-55"
         ]
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01ba)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "User-defined description for Setup Device used for patient alignment.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Setup Device Description",
         "module" : "RT Patient Setup"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "entity" : "Patient",
         "req" : "3",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID",
         "usage" : "M",
         "module" : "Patient"
      },
      "(0020,0011)" : {
         "mod_tables" : [
            "table_C.8-37"
         ],
         "name" : "Series Number",
         "usage" : "M",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "2",
         "desc" : "A number that identifies this series."
      },
      "(0010,1002)" : {
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Other Patient IDs Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0012,0010)" : {
         "req" : "1",
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
         "entity" : "Patient",
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "name" : "Clinical Trial Sponsor Name",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0018,1008)" : {
         "req" : "3",
         "desc" : "Identifier of the gantry or positioner.",
         "entity" : "Equipment",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Gantry ID",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Person Name",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0090)[<2>](300c,0051)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan. Required if Referenced Calculated Dose Reference Number (3008,0092) is not sent. It shall not be present otherwise.",
         "name" : "Referenced Dose Reference Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(3008,0110)[<0>](3008,0090)[<1>](3008,0076)" : {
         "req" : "1",
         "desc" : "Calculated Dose (Gy).",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Calculated Dose Reference Dose Value"
      },
      "(0008,1048)" : {
         "module" : "General Study",
         "usage" : "M",
         "name" : "Physician(s) of Record",
         "mod_tables" : [
            "table_C.7-3"
         ],
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
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,0096)" : {
         "module" : "General Study",
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Study"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Identification of the system that removed and/or replaced the attributes."
      },
      "(0010,2298)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Responsible Person Role",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(3008,0110)[<0>](3008,002a)" : {
         "entity" : "Treatment Record",
         "req" : "1",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Treatment Termination Status",
         "usage" : "M",
         "module" : "RT Brachy Session Record"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)"
      },
      "(300a,0180)[<0>](300a,01b4)[<1>](300a,01b8)" : {
         "desc" : "User-defined label for Setup Device used for patient alignment.",
         "req" : "2",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "usage" : "U",
         "name" : "Setup Device Label",
         "mod_tables" : [
            "table_C.8-48"
         ]
      },
      "(0008,1120)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Referenced Patient Sequence",
         "usage" : "M",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Patient"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "name" : "Universal Entity ID",
         "module" : "Patient Study"
      },
      "(0008,0201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Timezone Offset From UTC",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
                     "attrs" : {
                        "numeration" : "arabic"
                     },
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
                                       "attrs" : {
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5",
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
         ]
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
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
         "entity" : "Patient",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "entity" : "Study",
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0040,a390)" : {
         "desc" : [
            "Sequence of items defining mapping between HL7 Instance Identifiers of unencapsulated HL7 Structured Documents referenced from the current SOP Instance as if they were DICOM Composite SOP Class Instances defined by SOP Class and Instance UID pairs. May also define a means of accessing the Documents.",
            "One or more Items shall be included in this sequence.",
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
         "req" : "1C",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "name" : "HL7 Structured Document Reference Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "name" : "Digital Signature UID",
         "req" : "1",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "entity" : "Treatment Record"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0223)" : {
         "module" : "RT Treatment Summary Record",
         "name" : "Referenced Fraction Number",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "desc" : "Identifies fraction.",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0120)" : {
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Recorded Brachy Accessory Device Sequence",
         "req" : "3",
         "desc" : [
            "Sequence of Brachy Accessory Devices associated with current Application Setup.",
            "One or more Items are permitted in this sequence."
         ],
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Series"
      },
      "(0010,21b0)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Additional Patient History",
         "usage" : "U",
         "req" : "3",
         "desc" : "Additional information about the Patient's medical history.",
         "entity" : "Study"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0062,000b)" : {
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3"
         ],
         "usage" : "U",
         "name" : "Referenced Segment Number",
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C"
      },
      "(0010,0024)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
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
         "req" : "3",
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient"
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Coding Scheme Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1155)" : {
         "module" : "Common Instance Reference",
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Segment Number"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "entity" : "Patient",
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,1200)[<0>](0020,000d)" : {
         "req" : "1",
         "desc" : "Unique identifier of the Study containing the referenced Instances.",
         "entity" : "Treatment Record",
         "module" : "Common Instance Reference",
         "usage" : "U",
         "name" : "Study Instance UID",
         "mod_tables" : [
            "table_C.12-8"
         ]
      },
      "(300a,0206)[<0>](300a,00b2)" : {
         "module" : "RT Treatment Machine Record",
         "name" : "Treatment Machine Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "desc" : "User-defined name identifying treatment machine used for treatment delivery.",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "name" : "Numeric Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M"
      },
      "(0018,a001)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Contributing Equipment Sequence",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3",
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
         ]
      },
      "(3008,0010)[<0>](300c,0051)" : {
         "req" : "1C",
         "desc" : "Uniquely identifies Dose Reference specified by Dose Reference Number (300A,0012) in Dose Reference Sequence (300A,0010) in RT Prescription Module of referenced RT Plan. Required only if Measured Dose Reference Number (3008,0064) is not sent. It shall not be present otherwise.",
         "entity" : "Treatment Record",
         "module" : "Measured Dose Reference Record",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "usage" : "U",
         "name" : "Referenced Dose Reference Number"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Value Type",
         "module" : "RT Series",
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
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300a,02a4)" : {
         "req" : "2C",
         "desc" : "Length of Transfer Tube of current afterloading Channel (mm). Required if value Transfer Tube Number (300A,02A2) is not zero length.",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Transfer Tube Length",
         "usage" : "M"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC ID Number",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(300a,0180)[<0>](300a,0401)[<1>](0008,1155)" : {
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "mod_tables" : [
            "table_C.8-48",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "U",
         "name" : "Referenced SOP Instance UID",
         "module" : "RT Patient Setup"
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Series",
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Issuer of Accession Number Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Date",
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ]
      },
      "(3008,0100)[<0>](300a,022c)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Reference date for Reference Air Kerma Rate (300A,022A) or Source Strength (300A,022B) of Isotope.",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Source Strength Reference Date",
         "module" : "RT Brachy Session Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0080)[<2>](3008,0082)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "usage" : "M",
         "name" : "Referenced Measured Dose Reference Number",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1C",
         "desc" : "References Measured Dose Reference specified by Measured Dose Reference Number (3008,0064) in Measured Dose Reference Sequence (3008,0010). Required if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "entity" : "Patient",
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
         "name" : "Identifier Type Code",
         "module" : "Patient"
      },
      "(3008,0050)[<0>](300a,0016)" : {
         "req" : "3",
         "desc" : "User-defined description of Dose Reference.",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "name" : "Dose Reference Description",
         "usage" : "U"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
         "name" : "Certified Timestamp Type",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
               ],
               "el" : "note"
            }
         ],
         "req" : "1C"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Study",
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "U"
      },
      "(3008,0110)[<0>](300a,0238)" : {
         "entity" : "Treatment Record",
         "desc" : "Manufacturer of Application Setup.",
         "req" : "3",
         "usage" : "M",
         "name" : "Application Setup Manufacturer",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(3008,0010)[<0>](3008,0012)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "User-defined description of Dose Reference (e.g., \"Exit dose\", \"Point A\").",
         "mod_tables" : [
            "table_C.8-55"
         ],
         "usage" : "U",
         "name" : "Measured Dose Description",
         "module" : "Measured Dose Reference Record"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0008,114a)[<2>](0008,1150)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "U",
         "module" : "Common Instance Reference"
      },
      "(0008,1060)" : {
         "entity" : "Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "req" : "3",
         "usage" : "M",
         "name" : "Name of Physician(s) Reading Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study"
      },
      "(0018,1020)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Software Versions",
         "usage" : "M",
         "req" : "3",
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
         "entity" : "Equipment"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)[<3>](0008,1070)" : {
         "name" : "Operators' Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "desc" : "Name of operator who authorized override.",
         "req" : "2"
      },
      "(3008,0251)" : {
         "module" : "RT General Treatment Record",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "name" : "Treatment Time",
         "usage" : "M",
         "desc" : "Time when current fraction was delivered (begun), or Time last fraction was delivered (begun) in case of RT Treatment Summary Record IOD. See Note.",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Signature",
         "usage" : "M",
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
         ],
         "entity" : "Treatment Record"
      },
      "(300a,0206)[<0>](0008,0081)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Mailing address of the institution where the equipment is located that was used for treatment delivery.",
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "module" : "RT Treatment Machine Record"
      },
      "(0008,0020)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Study Date",
         "desc" : "Date the Study started.",
         "req" : "2",
         "entity" : "Study"
      },
      "(0008,1200)[<0>](0008,1115)[<1>](0020,000e)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Unique identifier of the Series containing the referenced Instances.",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "name" : "Series Instance UID",
         "usage" : "U",
         "module" : "Common Instance Reference"
      },
      "(0018,1050)" : {
         "name" : "Spatial Resolution",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3"
      },
      "(3008,0070)[<0>](3008,0074)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "User-defined description of Calculated Dose Reference.",
         "mod_tables" : [
            "table_C.8-56"
         ],
         "usage" : "U",
         "name" : "Calculated Dose Reference Description",
         "module" : "Calculated Dose Reference Record"
      },
      "(0028,0120)" : {
         "usage" : "M",
         "name" : "Pixel Padding Value",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "entity" : "Equipment",
         "req" : "1C",
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
         ]
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "U",
         "module" : "Patient Study",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "entity" : "Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C",
         "usage" : "M",
         "name" : "Time",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0010,1030)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "name" : "Patient's Weight",
         "module" : "Patient Study",
         "entity" : "Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "req" : "3"
      },
      "(3008,0110)[<0>](3008,0130)" : {
         "desc" : [
            "Sequence of Channels for current Application Setup.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Recorded Channel Sequence",
         "usage" : "M"
      },
      "(300a,0180)[<0>](300a,0410)[<1>](0018,9171)" : {
         "req" : "1",
         "desc" : [
            "Signal source from which respiratory motion is derived.",
            {
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
               ],
               "title" : "Defined Terms:"
            }
         ],
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Respiratory Signal Source",
         "usage" : "U"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "entity" : "Series",
         "req" : "3",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this sequence.",
         "name" : "Scheduled Protocol Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "module" : "RT Series"
      },
      "(3008,0220)[<0>](3008,0240)[<1>](3008,0250)" : {
         "entity" : "Treatment Record",
         "req" : "2",
         "desc" : "Date when fraction was delivered.",
         "name" : "Treatment Date",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "module" : "RT Treatment Summary Record"
      },
      "(0020,000e)" : {
         "req" : "1",
         "desc" : "Unique identifier of the series.",
         "entity" : "Series",
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.8-37"
         ]
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(3008,0110)[<0>](300c,000c)" : {
         "desc" : "References application setup specified by Application Setup Number (300A,0234) in Application Setup Sequence (300A,0230) in RT Brachy Applications Module within referenced RT Plan.",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Brachy Session Record",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Referenced Brachy Application Setup Number",
         "usage" : "M"
      },
      "(3008,0030)[<0>](0008,1155)" : {
         "module" : "RT General Treatment Record",
         "mod_tables" : [
            "table_C.8-53",
            "table_10-11"
         ],
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "entity" : "Treatment Record"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "The coding scheme full common name",
         "usage" : "M",
         "name" : "Coding Scheme Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](300a,0298)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Manufacturer of Source Applicator.",
         "usage" : "M",
         "name" : "Source Applicator Manufacturer",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "name" : "Coding Scheme UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "1C",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR."
      },
      "(0020,0010)" : {
         "entity" : "Study",
         "desc" : "User or equipment generated Study identifier.",
         "req" : "2",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study ID",
         "usage" : "M",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Referenced Frame Number",
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
         "entity" : "Series"
      },
      "(300a,0206)[<0>](0008,0070)" : {
         "entity" : "Treatment Record",
         "desc" : "Manufacturer of the equipment used for treatment delivery.",
         "req" : "2",
         "usage" : "M",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.8-54"
         ],
         "module" : "RT Treatment Machine Record"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certified Timestamp",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3",
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
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "usage" : "M",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "3",
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
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(0040,0245)" : {
         "usage" : "M",
         "name" : "Performed Procedure Step Start Time",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Time on which the Performed Procedure Step started.",
         "req" : "3"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-11"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a040)" : {
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
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](3008,0142)" : {
         "module" : "RT Brachy Session Record",
         "usage" : "M",
         "name" : "Referenced Source Applicator Number",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "req" : "2",
         "desc" : "Identification number of the Source Applicator. The value of Source Applicator Number (300A,0290) shall be unique within the Channel in which it is created.",
         "entity" : "Treatment Record"
      },
      "(0008,1070)" : {
         "module" : "RT Series",
         "name" : "Operators' Name",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "req" : "2",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "name" : "Numeric Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "usage" : "M",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,0199)" : {
         "entity" : "Treatment Record",
         "desc" : "The Fixation Device Pitch Angle, i.e., orientation of PITCHED FIXATION DEVICE coordinate system with respect to IEC PATIENT SUPPORT coordinate system (degrees). Pitching is the rotation around IEC PATIENT SUPPORT X-axis.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Fixation Device Pitch Angle",
         "module" : "RT Patient Setup"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "module" : "RT Series",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "entity" : "Treatment Record",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Operators' Name",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
         "req" : "3",
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
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "usage" : "M",
         "name" : "Content Item Modifier Sequence"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Institution Code Sequence"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient ID",
         "usage" : "M",
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "desc" : "An identification number or code used to identify the patient."
      },
      "(0008,1062)" : {
         "usage" : "M",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "req" : "3"
      },
      "(3008,0100)[<0>](300a,0212)" : {
         "entity" : "Treatment Record",
         "desc" : "Identification number of the Source. The value of Source Number (300A,0212) shall be unique within the Recorded Source Sequence (3008,0100) in which it is created.",
         "req" : "1",
         "usage" : "M",
         "name" : "Source Number",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(0012,0050)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Time Point ID",
         "module" : "Clinical Trial Study",
         "entity" : "Study",
         "req" : "2",
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
         ]
      },
      "(0012,0030)" : {
         "module" : "Clinical Trial Subject",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site ID",
         "usage" : "U",
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
         "entity" : "Patient"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "usage" : "M",
         "name" : "Retrieve URI",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,00f9)" : {
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Accessory Code",
         "usage" : "U",
         "req" : "3",
         "desc" : "An identifier for the accessory intended to be read by a device such as a bar-code reader.",
         "entity" : "Treatment Record"
      },
      "(300a,0180)[<0>](0018,5100)" : {
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Patient Position",
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
         "req" : "1C",
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Series",
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Floating Point Value"
      },
      "(3008,0056)" : {
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "name" : "Most Recent Treatment Date",
         "module" : "RT Treatment Summary Record",
         "entity" : "Treatment Record",
         "req" : "2",
         "desc" : "Date of delivery of the most recent administration."
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "entity" : "Treatment Record",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "name" : "Institution Address",
         "module" : "SOP Common"
      },
      "(300a,0200)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : [
            "Type of brachytherapy treatment technique.",
            {
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
               ],
               "title" : "Enumerated Values:"
            },
            "See RT Plan IOD."
         ],
         "name" : "Brachy Treatment Technique",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(300a,0180)" : {
         "name" : "Patient Setup Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "module" : "RT Patient Setup",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of patient setup data for current plan.",
            "One or more items shall be included in this sequence."
         ],
         "req" : "1"
      },
      "(0012,0051)" : {
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "usage" : "U",
         "name" : "Clinical Trial Time Point Description",
         "req" : "3",
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
         "entity" : "Study"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0090)[<2>](3008,0092)" : {
         "entity" : "Treatment Record",
         "req" : "1C",
         "desc" : "Uniquely identifies Calculated Dose Reference specified by Calculated Dose Reference Number (3008,0072) within Calculated Dose Reference Sequence (3008,0070). Required if Referenced Dose Reference Number (300C,0051) is not sent. It shall not be present otherwise.",
         "name" : "Referenced Calculated Dose Reference Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9"
         ],
         "name" : "Requested Procedure Code Sequence",
         "usage" : "M",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0160)[<2>](3008,0060)" : {
         "usage" : "M",
         "name" : "Override Sequence",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of parameters that were overridden during the administration of the treatment immediately prior to the current control point.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3"
      },
      "(0008,1049)" : {
         "module" : "General Study",
         "usage" : "M",
         "name" : "Physician(s) of Record Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "entity" : "Study"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0164)" : {
         "mod_tables" : [
            "table_C.8-58"
         ],
         "name" : "Safe Position Exit Time",
         "usage" : "M",
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1C",
         "desc" : "Time on which the source(s) exited the safe. Required if Recorded Channel Sequence (3008,0130) is sent and Brachy Treatment Type (300A,0202) is not MANUAL."
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,013c)" : {
         "name" : "Delivered Pulse Repetition Interval",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "desc" : [
            "Pulse repetition interval (sec) actually delivered for current Channel. Required if Brachy Treatment Type (300A,0202) is PDR. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.8.8.22.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "req" : "1C"
      },
      "(0008,1200)[<0>](0008,1115)" : {
         "module" : "Common Instance Reference",
         "mod_tables" : [
            "table_C.12-8",
            "table_10-4"
         ],
         "usage" : "U",
         "name" : "Referenced Series Sequence",
         "req" : "1",
         "desc" : [
            "Sequence of Items each of which includes the Attributes of one Series.",
            "One or more Items shall be included in this sequence."
         ],
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](300c,0040)[<1>](0008,1155)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58",
            "table_10-11"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "entity" : "Series",
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
         "name" : "Date",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(fffa,fffa)" : {
         "usage" : "M",
         "name" : "Digital Signatures Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ]
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0080)[<2>](3008,0016)" : {
         "module" : "RT Brachy Session Record",
         "name" : "Measured Dose Value",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "desc" : "Measured Dose.",
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(3008,00e0)" : {
         "desc" : [
            "Sequence of references to Measured Dose References.",
            "One or more Items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Treatment Summary Record",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "name" : "Treatment Summary Measured Dose Reference Sequence"
      },
      "(3008,0250)" : {
         "module" : "RT General Treatment Record",
         "usage" : "M",
         "name" : "Treatment Date",
         "mod_tables" : [
            "table_C.8-53"
         ],
         "desc" : "Date when current fraction was delivered, or Date last fraction was delivered in case of RT Treatment Summary Record IOD. See Note.",
         "req" : "2",
         "entity" : "Treatment Record"
      },
      "(0008,0021)" : {
         "entity" : "Series",
         "desc" : "Date the Series started.",
         "req" : "3",
         "usage" : "M",
         "name" : "Series Date",
         "mod_tables" : [
            "table_C.8-37"
         ],
         "module" : "RT Series"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](300a,0282)" : {
         "name" : "Channel Number",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Identification number of the Channel. The value of Channel Number (300A,0282) shall be unique within the Application Setup in which it is created."
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
         "name" : "Digital Signature DateTime",
         "usage" : "M",
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
         ],
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0008,1115)[<0>](0008,114a)" : {
         "module" : "Common Instance Reference",
         "name" : "Referenced Instance Sequence",
         "usage" : "U",
         "mod_tables" : [
            "table_C.12-8"
         ],
         "desc" : [
            "Sequence of Items each providing a reference to an Instance that is part of the Series defined by Series Instance UID (0020,000E) in the enclosing Item.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "module" : "RT Series",
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "name" : "Person's Address"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "entity" : "Treatment Record",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "module" : "SOP Common"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "module" : "General Study",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "UID",
         "module" : "RT Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "usage" : "M",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C"
      },
      "(300a,0180)[<0>](300a,0190)[<1>](300a,019a)" : {
         "desc" : "The Fixation Device Roll Angle, i.e., orientation of ROLLED FIXATION DEVICE coordinate system with respect to IEC PITCHED FIXATION DEVICE coordinate system (degrees). Rolling is the rotation around IEC PATIENT SUPPORT Y-axis.",
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Fixation Device Roll Angle"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "module" : "RT Series",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Series",
         "module" : "RT Series",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-9",
            "table_10-17"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "module" : "RT Series",
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
         "req" : "1C"
      },
      "(3008,0202)" : {
         "entity" : "Treatment Record",
         "desc" : "Comment on current treatment status.",
         "req" : "3",
         "mod_tables" : [
            "table_C.8-59"
         ],
         "usage" : "U",
         "name" : "Treatment Status Comment",
         "module" : "RT Treatment Summary Record"
      },
      "(0040,0254)" : {
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16"
         ],
         "usage" : "M",
         "name" : "Performed Procedure Step Description",
         "module" : "RT Series",
         "entity" : "Series",
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "req" : "3"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "RT Series"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a8)" : {
         "req" : "3",
         "desc" : "Position/Notch number of Shielding Device.",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Shielding Device Position"
      },
      "(0008,1032)" : {
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "name" : "Procedure Code Sequence"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
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
         "entity" : "Study"
      },
      "(0010,2202)" : {
         "module" : "Patient",
         "name" : "Patient Species Code Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0020,9172)" : {
         "entity" : "Treatment Record",
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
         "name" : "Conversion Source Attributes Sequence",
         "usage" : "M",
         "module" : "SOP Common"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "usage" : "M",
         "name" : "Breed Registration Number",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Identification number of an animal within the registry."
      },
      "(0038,0064)[<0>](0040,0033)" : {
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
         "entity" : "Study",
         "module" : "Patient Study",
         "name" : "Universal Entity ID Type",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "M",
         "name" : "MAC Algorithm",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "entity" : "Treatment Record",
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
         ]
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a2)" : {
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Shielding Device Type",
         "desc" : [
            "Type of Shielding Device used in Patient Setup.",
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "entity" : "Treatment Record"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme External ID",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C"
      },
      "(0010,2203)" : {
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
         "entity" : "Study",
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Patient's Sex Neutered",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(300a,0180)[<0>](300a,0410)" : {
         "desc" : [
            "Sequence of Motion Synchronization.",
            "One or more items are permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Motion Synchronization Sequence",
         "usage" : "U"
      },
      "(300a,0180)[<0>](300a,0182)" : {
         "desc" : "Identification number of the Patient Setup. The value of Patient Setup Number (300A,0182) shall be unique within the RT Plan in which it is created.",
         "req" : "1",
         "entity" : "Treatment Record",
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "usage" : "U",
         "name" : "Patient Setup Number"
      },
      "(3008,0110)" : {
         "entity" : "Treatment Record",
         "desc" : [
            "Sequence of Application Setups for RT Treatment Record for current RT Plan.",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "name" : "Treatment Session Application Setup Sequence",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "req" : "1C",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "entity" : "Series",
         "module" : "RT Series",
         "usage" : "M",
         "name" : "UID",
         "mod_tables" : [
            "table_C.8-37",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(300a,0180)[<0>](300a,01b2)" : {
         "entity" : "Treatment Record",
         "req" : "3",
         "desc" : "User-defined description of Setup Technique.",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Setup Technique Description",
         "usage" : "U",
         "module" : "RT Patient Setup"
      },
      "(300a,0180)[<0>](300a,01a0)[<1>](300a,01a6)" : {
         "module" : "RT Patient Setup",
         "mod_tables" : [
            "table_C.8-48"
         ],
         "name" : "Shielding Device Description",
         "usage" : "U",
         "req" : "3",
         "desc" : "User-defined description of Shielding Device.",
         "entity" : "Treatment Record"
      },
      "(3008,0110)[<0>](3008,0130)[<1>](3008,0140)[<2>](300a,02a0)" : {
         "name" : "Source Applicator Step Size",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8-58"
         ],
         "module" : "RT Brachy Session Record",
         "entity" : "Treatment Record",
         "desc" : "Distance of path along channel (mm) between adjacent (potential) dwell positions. Required if Source Movement Type (300A,0288) is STEPWISE.",
         "req" : "1C"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "SOP Common",
         "entity" : "Treatment Record",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "module" : "RT Series",
         "name" : "UID",
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
         "entity" : "Series"
      }
   }
}