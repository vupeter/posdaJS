var data = {
   "tags" : {
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a162)" : {
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Measurements",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Ethnic Group",
         "entity" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a163)" : {
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,1048)" : {
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
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Physician(s) of Record",
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0301)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Private Group Reference",
         "module" : "SOP Common",
         "desc" : "Odd group number within which the Private Data Element block is reserved.",
         "req" : "1"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
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
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Data Elements Signed",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0400,0561)" : {
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Original Attributes Sequence",
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1101)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : [
            [
               "The name of the segment measured. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Measurements Segment Name Code Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0008,1111)[<0>](0008,1150)" : [
         {
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "name" : "Referenced SOP Class UID",
            "usage" : "M",
            "entity" : "Series"
         },
         {
            "module" : "Ophthalmic Axial Measurements Series",
            "desc" : "Uniquely identifies the referenced SOP Class.",
            "req" : "1",
            "entity" : "Series",
            "name" : "Referenced SOP Class UID",
            "mod_tables" : [
               "table_C.8.25.13-1",
               "table_10-11"
            ],
            "usage" : "M"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,1250)[<0>](0020,000e)" : {
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Instance UID",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Instance UID of Related Series",
         "req" : "1",
         "module" : "General Series"
      },
      "(0008,1250)[<0>](0040,a170)" : {
         "req" : "2",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "Zero or more Items shall be included in this Sequence.",
            "When absent, implies that the reason for the reference is unknown."
         ],
         "module" : "General Series",
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "entity" : "Series"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1140)" : {
         "desc" : [
            "Whether or not the clinician intervened to modify the output of the device. For example by forcing it to select a different peak in the display.",
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
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurement Modified",
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "entity" : "Study",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1330)[<3>](0008,1155)" : {
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.16-6"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0008,0030)" : {
         "module" : "General Study",
         "desc" : "Time the Study started.",
         "req" : "2",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Time"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "entity" : "Measurements",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Person's mailing address"
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Distribution Flag",
         "module" : "Clinical Trial Study",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_3a13f81e-d497-421f-aebd-f103e8f2243a"
                     },
                     "content" : [
                        "Under some circumstances, consent may be withdrawn. The purpose of encoding this is to warn receiving systems that further distribution may not be appropriate, but no semantics are defined by the Standard for what action is appropriate under such circumstances, such as what to do with previously received images that had a value of YES."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0275)[<0>](0040,1002)" : {
         "desc" : "Reason for requesting this procedure.",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Reason for the Requested Procedure",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a160)" : {
         "entity" : "Series",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a160)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "entity" : "Series",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0022,1007)[<0>](0022,1066)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "3",
         "desc" : "A free form text description of Vitreous Status (0022,1025).",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Vitreous Status Description",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
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
         "req" : "1C"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1225)[<3>](0022,1150)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "The source of the value in Ophthalmic Axial Length (0022,1019).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "name" : "Ophthalmic Axial Length Data Source Code Sequence"
      },
      "(0008,009d)[<0>](0040,1101)" : {
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Encrypted Content Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "req" : "1"
      },
      "(0008,103f)" : {
         "name" : "Series Description Code Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "General Series"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1330)[<3>](0008,1160)" : {
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.16-6"
         ],
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "Identifies the frame number within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            "Only a single value shall exist.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute is a multi-value field but for this Macro it can only contain one value."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d7eee182-8041-4631-bfff-2290981f6942"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "entity" : "Measurements",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)" : {
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : "Sequence that specifies the context for the Scheduled Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "module" : "General Series"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1C",
         "desc" : [
            "Axial length of a patient's eye, in mm, when it is calculated by summation of multiple segmental axial length measurements.",
            "One or more Items shall be included in this Sequence.",
            "Required if Ophthalmic Axial Length Measurements Type (0022,1010) is LENGTH SUMMATION.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurements Length Summation Sequence",
         "usage" : "M"
      },
      "(0012,0060)" : {
         "module" : "Clinical Trial Series",
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
         "req" : "2",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Coordinating Center Name",
         "usage" : "U"
      },
      "(0010,2201)" : {
         "module" : "Patient",
         "req" : "1C",
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.3"
                  }
               },
               "."
            ],
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient Species Description",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0008,1250)[<0>](0020,000d)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Study Instance UID",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1",
         "desc" : "Instance UID of Study to which the related Series belongs"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a121)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Date",
         "entity" : "Series",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0038,0010)" : {
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admission ID",
         "module" : "Patient Study",
         "desc" : "Identifier of the visit as assigned by the healthcare provider",
         "req" : "3"
      },
      "(0010,0216)[<0>](0010,0217)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Source",
         "entity" : "Patient",
         "req" : "1",
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
         "module" : "Patient"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1220)[<3>](0022,1150)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Data Source Code Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Source of the value recorded in Ophthalmic Axial Length (0022,1019).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Content",
         "module" : "SOP Common",
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
         ]
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "module" : "Patient",
         "req" : "3",
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
         "entity" : "Patient",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0018,1008)" : {
         "usage" : "M",
         "name" : "Gantry ID",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "desc" : "Identifier of the gantry or positioner.",
         "req" : "3",
         "module" : "General Equipment"
      },
      "(0008,1084)" : {
         "req" : "3",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Code Sequence",
         "entity" : "Study"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)" : {
         "req" : "1C",
         "desc" : [
            "The axial length of a patient's eye, in mm.",
            "One or more Items shall be included in this Sequence.",
            "Required if Ophthalmic Axial Length Measurements Type (0022,1010) is TOTAL LENGTH.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Measurements Total Length Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "entity" : "Measurements"
      },
      "(0008,1049)[<0>](0040,1104)" : {
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0010,2294)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registration Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "2C",
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient"
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e030)" : {
         "usage" : "M",
         "name" : "Repository Unique ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies a Repository from which the referenced instances can be retrieved.",
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)" : {
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0018,1020)" : {
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
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Software Versions",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "req" : "3",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
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
         ],
         "name" : "Universal Entity ID",
         "entity" : "Patient"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Version",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a121)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      " (0010,0027) " : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Group of Patients Identification Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "desc" : [
            [
               "A sequence containing the identifiers and locations of the individual subjects whose data was acquired at the same time (as a group) and encoded in this composite instance. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.7.1.4.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "One or more Items are permitted in this sequence."
         ],
         "req" : "\n                  3 "
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1220)[<3>](0022,1159)" : {
         "name" : "Ophthalmic Axial Length Data Source Description",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "desc" : "A free text description of the axial length measurement data source.",
         "req" : "3",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     }
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
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1220)[<3>](0040,a084)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : [
            "Method used to select which acquired axial length measurement values are kept.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PSN",
                     "Person; manually selected"
                  ],
                  [
                     "DEV",
                     "Device; automatically selected"
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
                     "linkend" : "sect_C.8.25.14.1.1.5"
                  }
               },
               " for further explanation."
            ]
         ],
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Observer Type",
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0130)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Storage Media File-Set ID",
         "module" : "Patient",
         "req" : "2",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the referenced instance(s) reside."
      },
      "(0008,1072)[<0>](0008,0080)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "usage" : "M"
      },
      "(0008,0021)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Date",
         "entity" : "Series",
         "desc" : "Date the Series started.",
         "req" : "3",
         "module" : "General Series"
      },
      "(0008,1052)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series"
      },
      "(0010,2293)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient Breed Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
            "Zero or more Items shall be included in this Sequence.",
            "Required if the patient is an animal."
         ]
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1225)" : {
         "name" : "Optical Ophthalmic Axial Length Measurements Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1C",
         "desc" : [
            "Related information about an axial length measurement being performed on an optical device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is OPTICAL."
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0039)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
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
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1140)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Whether or not the clinician intervened to modify the output of the device. For example by forcing it to select a different peak in the display.",
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
         "req" : "1",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurement Modified"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)" : {
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Measurements Length Summation Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "entity" : "Measurements",
         "desc" : [
            "Axial length of a patient's eye, in mm, when it is calculated by summation of multiple segmental axial length measurements.",
            "One or more Items shall be included in this Sequence.",
            "Required if Ophthalmic Axial Length Measurements Type (0022,1010) is LENGTH SUMMATION.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.4"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "1C",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "module" : "SOP Common",
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
         "req" : "1C"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a043)" : {
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "General Series"
      },
      "(0022,1007)[<0>](0022,000e)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Degree of Dilation",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "module" : "Ophthalmic Axial Measurements",
         "req" : "2C",
         "desc" : [
            "The degree of the dilation in mm.",
            "Required if the value of Pupil Dilated (0022,000D) is YES."
         ]
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0306)" : {
         "desc" : [
            "List of Private Data Elements in block that may contain identifying\n                  information (are unsafe from identity leakage)..",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once."
         ],
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Identifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0040,0245)" : {
         "desc" : "Time on which the Performed Procedure Step started.",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Start Time",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1155)" : {
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series"
      },
      "(0012,0081)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) or Institutional Animal Care and Use Committees (IACUC) responsible for approval of the Clinical Trial or research. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "req" : "1C"
      },
      "(0010,0212)" : {
         "module" : "Patient",
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
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Strain Description",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,0032)" : {
         "name" : "Patient's Birth Time",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Birth time of the Patient.",
         "req" : "3",
         "module" : "Patient"
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "module" : "General Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "module" : "SOP Common",
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
         "entity" : "Measurements",
         "name" : "Certified Timestamp",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1225)" : {
         "desc" : [
            "Related information about an axial length measurement being performed on an optical device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is OPTICAL."
         ],
         "req" : "1C",
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "name" : "Optical Ophthalmic Axial Length Measurements Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "entity" : "Measurements"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)" : {
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
         "req" : "3",
         "module" : "General Series",
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,08ea)" : {
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Measurement Units Code Sequence",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,1111)[<0>](0008,1155)" : [
         {
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "module" : "General Series",
            "mod_tables" : [
               "table_C.7-5a",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID",
            "usage" : "M",
            "entity" : "Series"
         },
         {
            "module" : "Ophthalmic Axial Measurements Series",
            "req" : "1",
            "desc" : "Uniquely identifies the referenced SOP Instance.",
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.25.13-1",
               "table_10-11"
            ],
            "name" : "Referenced SOP Instance UID"
         }
      ],
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1220)[<4>](0040,a084)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Observer Type",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : [
            "Method used to select which acquired axial length measurement values are kept.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PSN",
                     "Person; manually selected"
                  ],
                  [
                     "DEV",
                     "Device; automatically selected"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0033)" : {
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "1C",
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
         ],
         "module" : "Patient"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "usage" : "M",
         "name" : "Modified Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0022,1008)[<0>](0022,1066)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Vitreous Status Description",
         "entity" : "Measurements",
         "req" : "3",
         "desc" : "A free form text description of Vitreous Status (0022,1025).",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1225)[<4>](0022,1155)" : {
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Signal to Noise Ratio",
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1C",
         "desc" : [
            [
               "The ratio of signal power to the background noise power (P",
               {
                  "el" : "subscript",
                  "content" : [
                     "signal"
                  ]
               },
               " / P",
               {
                  "content" : [
                     "noise"
                  ],
                  "el" : "subscript"
               },
               ")."
            ],
            "Required if Ophthalmic Axial Length Measurements Type (0022,1010) is TOTAL LENGTH. May be present otherwise."
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0020,9172)" : {
         "req" : "1C",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this Sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "module" : "SOP Common",
         "name" : "Conversion Source Attributes Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1225)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Related information about an axial length measurement being performed on an optical device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is OPTICAL."
         ],
         "req" : "1C",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Optical Ophthalmic Axial Length Measurements Sequence"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1220)[<3>](0022,1150)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Source of the value recorded in Ophthalmic Axial Length (0022,1019).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Ophthalmic Axial Length Data Source Code Sequence",
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
         "req" : "3"
      },
      "(0022,1008)[<0>](0022,0058)[<1>](0022,001c)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : [
            "The actual agent administered to dilate the pupil.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Mydriatic Agent Code Sequence"
      },
      "(0008,0096)[<0>](0040,1104)" : {
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
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
                           ],
                           "el" : "listitem"
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
         "module" : "General Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0062,000b)" : {
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
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
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contributing Equipment Sequence",
         "entity" : "Measurements"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1225)[<4>](0022,1150)" : {
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Data Source Code Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "The source of the value in Ophthalmic Axial Length (0022,1019).",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "entity" : "Study"
      },
      "(0008,0110)[<0>](0008,0112)" : {
         "module" : "SOP Common",
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
         "req" : "1C",
         "entity" : "Measurements",
         "name" : "Coding Scheme Registry",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0008,1111)" : [
         {
            "req" : "3",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item is permitted in this Sequence."
            ],
            "module" : "General Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "name" : "Referenced Performed Procedure Step Sequence",
            "entity" : "Series"
         },
         {
            "entity" : "Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.8.25.13-1"
            ],
            "name" : "Referenced Performed Procedure Step Sequence",
            "module" : "Ophthalmic Axial Measurements Series",
            "desc" : [
               "Uniquely identifies the Performed Procedure Step SOP Instance to which the Series is related.",
               "Only a single Item shall be included in this Sequence.",
               "Required if a Performed Procedure Step SOP Class was involved in the creation of this Series."
            ],
            "req" : "1C"
         }
      ],
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1330)" : {
         "name" : "Referenced Ophthalmic Axial Length Measurement QC Image Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "desc" : [
            "Reference to the quality control image associated with this measurement.",
            "Only a single Item shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.6",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a043)" : {
         "module" : "General Series",
         "req" : "1",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a123)" : {
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "module" : "SOP Common",
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "req" : "1C",
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ]
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1019)" : {
         "req" : "1",
         "desc" : [
            "The axial length measurement, in mm.",
            "The type of measurement is specified in the Ophthalmic Axial Length Measurements Type (0022,1010).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " and ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "Ophthalmic Axial Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3"
         ],
         "name" : "Ophthalmic Axial Length",
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0012,0010)" : {
         "name" : "Clinical Trial Sponsor Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "entity" : "Patient",
         "desc" : [
            "The name of the clinical trial or research sponsor. See ",
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
         "module" : "Clinical Trial Subject"
      },
      "(0028,0303)" : {
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "Indicates whether or not the date and time attributes in the instance have been modified during de-identification.",
            {
               "title" : "Enumerated Values:",
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
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Longitudinal Temporal Information Modified"
      },
      "(0040,0275)[<0>](0008,0050)" : {
         "desc" : "An identifier of the Imaging Service Request for this Requested Procedure.",
         "req" : "3",
         "module" : "General Series",
         "name" : "Accession Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0280)" : {
         "desc" : "User-defined comments on the Performed Procedure Step.",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Comments on the Performed Procedure Step",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C"
      },
      "(0008,0051)" : {
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0040,0275)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Request Attributes Sequence",
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "Sequence that contains attributes from the Imaging Service Request.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Series"
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
                        "xml:id" : "para_cae60b6b-4fad-4c20-981d-247bbf9c6471"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1C",
         "entity" : "Measurements",
         "name" : "Certified Timestamp Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1010)" : {
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurements Type",
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Identifies whether measuring the total axial length of the patient's eye or a segment of the eye for which a discrete measurement was obtained.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "TOTAL LENGTH",
                     "the total axial length was taken with one measurement"
                  ],
                  [
                     "LENGTH SUMMATION",
                     "a summation of segmental lengths that determine the total axial length"
                  ],
                  [
                     "SEGMENTAL LENGTH",
                     "a segmental axial length"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "1"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1101)" : {
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3"
         ],
         "name" : "Ophthalmic Axial Length Measurements Segment Name Code Sequence",
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            [
               "The name of the segment measured. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0035)" : {
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
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
         "module" : "Patient"
      },
      "(0008,1072)[<0>](0040,1103)" : {
         "module" : "General Series",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0008,0090)" : {
         "usage" : "M",
         "name" : "Referring Physician's Name",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "2",
         "desc" : "Name of the patient's referring physician",
         "module" : "General Study"
      },
      "(0008,0300)" : {
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Characteristics of Private Data Elements within the current SOP Instance",
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Private Data Element Characteristics Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,2210)" : {
         "module" : "General Series",
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
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1.1.1",
                     "xrefstyle" : "select: label"
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
                     "attrs" : {
                        "xml:id" : "para_6250224a-3316-415a-9bc4-04999c343dd9"
                     },
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
         "req" : "1C",
         "entity" : "Series",
         "name" : "Anatomical Orientation Type",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "req" : "3",
         "desc" : "Person's mailing address",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a040)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Value Type",
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1",
         "module" : "General Series"
      },
      "(0022,1007)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Ophthalmic Axial Measurements Right Eye Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1"
         ],
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1C",
         "desc" : [
            "Axial measurements of a patient's right eye.",
            "Only a single Item shall be included in this Sequence.",
            "Required if the right eye is measured.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_c85be9ae-7e9f-4b0a-a6a2-45d32baa93e6"
                     },
                     "el" : "para",
                     "content" : [
                        "If Ophthalmic Axial Measurements Right Eye Sequence (0022,1007) is present, Measurement Laterality (0024,0113), if present, will have a value of R or B as appropriate."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a160)" : {
         "entity" : "Series",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "req" : "1C"
      },
      "(0008,0096)[<0>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "module" : "General Study",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Study"
      },
      "(0012,0071)" : {
         "module" : "Clinical Trial Series",
         "desc" : [
            "An identifier of the series in the context of a clinical trial or research. See ",
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
         "entity" : "Series",
         "name" : "Clinical Trial Series ID",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "usage" : "U"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "Patient",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID"
      },
      "(0008,009d)[<0>](0008,0082)" : {
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence"
      },
      "(0008,0018)" : {
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance UID",
         "usage" : "M",
         "module" : "SOP Common",
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
                  "targetdoc" : "PS3.4",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ]
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1225)[<3>](0022,1155)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            [
               "The ratio of signal power to the background noise power (P",
               {
                  "el" : "subscript",
                  "content" : [
                     "signal"
                  ]
               },
               " / P",
               {
                  "content" : [
                     "noise"
                  ],
                  "el" : "subscript"
               },
               ")."
            ],
            "Required if Ophthalmic Axial Length Measurements Type (0022,1010) is TOTAL LENGTH. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Measurements",
         "name" : "Signal to Noise Ratio",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "usage" : "M"
      },
      "(0008,0050)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Accession Number",
         "usage" : "M",
         "entity" : "Study",
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "req" : "2",
         "module" : "General Study"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1225)[<3>](0022,1159)" : {
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Ophthalmic Axial Length Data Source Description",
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "3",
         "desc" : "A free text description of the axial length measurement data source.",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1225)[<3>](0022,1150)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "The source of the value in Ophthalmic Axial Length (0022,1019).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Data Source Code Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ]
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Manufacturer's Model Name"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1220)[<3>](0022,1150)" : {
         "req" : "1",
         "desc" : [
            "Source of the value recorded in Ophthalmic Axial Length (0022,1019).",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Ophthalmic Axial Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "name" : "Ophthalmic Axial Length Data Source Code Sequence",
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0010,0216)" : {
         "usage" : "M",
         "name" : "Strain Stock Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "Information identifying an animal within a strain stock.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient"
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "entity" : "Measurements"
      },
      "(0010,1002)" : {
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Other Patient IDs Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0022,1007)[<0>](0022,0058)" : {
         "usage" : "M",
         "name" : "Mydriatic Agent Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "entity" : "Measurements",
         "req" : "2C",
         "desc" : [
            "Information about the agent administered.",
            "Zero or more Items shall be included in this Sequence.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_92b0f9bc-0d26-4a3f-a1d3-e78d346d7aed"
                     },
                     "content" : [
                        "An empty sequence indicates that an agent was used for dilation, but the name was not entered."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ],
               "el" : "note"
            },
            "Required if the value of Pupil Dilated (0022,000D) is YES."
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0010,1100)[<0>](0040,e021)[<1>](0008,0054)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : "Title of a DICOM Application Entity where the referenced instance(s) may be retrieved on the network.",
         "req" : "1"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "module" : "Patient",
         "req" : "1",
         "desc" : "Identification number of an animal within the registry.",
         "entity" : "Patient",
         "name" : "Breed Registration Number",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a122)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Time",
         "module" : "General Series",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "req" : "1C"
      },
      "(0012,0030)" : {
         "name" : "Clinical Trial Site ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U",
         "entity" : "Patient",
         "desc" : [
            "The identifier of the site responsible for submitting clinical trial or research data. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.4",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "req" : "2",
         "module" : "Clinical Trial Subject"
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1220)" : {
         "desc" : [
            "Related information about an axial length measurement being performed on an ultrasound device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is ULTRASOUND."
         ],
         "req" : "1C",
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "name" : "Ultrasound Ophthalmic Axial Length Measurements Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "entity" : "Measurements"
      },
      "(0010,1100)[<0>](0040,e024)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "XDS Retrieval Sequence",
         "module" : "Patient",
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
         "req" : "1C"
      },
      "(0008,1052)" : {
         "module" : "General Series",
         "req" : "3",
         "desc" : [
            "Identification of the physician(s) administering the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Performing Physician's Name (0008,1050), if present."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Performing Physician Identification Sequence"
      },
      "(0010,0213)" : {
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
         "name" : "Strain Nomenclature",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,0253)" : {
         "usage" : "M",
         "name" : "Performed Procedure Step ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "entity" : "Series",
         "req" : "3",
         "desc" : "User or equipment generated identifier of that part of a Procedure that has been carried out within this step.",
         "module" : "General Series"
      },
      "(0008,1030)" : {
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Description",
         "entity" : "Study"
      },
      "(0008,1010)" : {
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "entity" : "Equipment",
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "req" : "3",
         "module" : "General Equipment"
      },
      "(0100,0420)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Authorization DateTime",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO."
      },
      "(0022,1007)[<0>](0022,1025)" : {
         "name" : "Vitreous Status Code Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            [
               "Status of the vitreous cavity. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Ophthalmic Axial Measurements"
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_cdc31146-8c35-4426-8c4c-509f0256519d"
                     }
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
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0040,e001)" : {
         "module" : "Patient",
         "desc" : [
            "Instance Identifier of the encapsulated HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
            "Required if Type of Instances (0040,E020) is CDA."
         ],
         "req" : "1C",
         "entity" : "Patient",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "usage" : "M"
      },
      "(0040,0244)" : {
         "module" : "General Series",
         "desc" : "Date on which the Performed Procedure Step started.",
         "req" : "3",
         "entity" : "Series",
         "name" : "Performed Procedure Step Start Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M"
      },
      "(0008,1062)[<0>](0040,1103)" : {
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "module" : "General Study"
      },
      " (0010,0027) [<0>](0018,5100)" : {
         "req" : "3",
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
                     "linkend" : "sect_C.7.3.1.1.2",
                     "xrefstyle" : "select: label"
                  }
               },
               " for Defined Terms and further explanation."
            ]
         ],
         "module" : "Patient",
         "name" : "Patient Position",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0022,1008)[<0>](0022,0058)" : {
         "desc" : [
            "Information about the agent administered.",
            "Zero or more Items shall be included in this Sequence.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_92b0f9bc-0d26-4a3f-a1d3-e78d346d7aed"
                     },
                     "el" : "para",
                     "content" : [
                        "An empty sequence indicates that an agent was used for dilation, but the name was not entered."
                     ]
                  },
                  "\n                    "
               ],
               "el" : "note"
            },
            "Required if the value of Pupil Dilated (0022,000D) is YES."
         ],
         "req" : "2C",
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Mydriatic Agent Sequence",
         "entity" : "Measurements"
      },
      "(0010,0030)" : {
         "module" : "Patient",
         "req" : "2",
         "desc" : "Birth date of the patient.",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient's Birth Date",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a121)" : {
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Date",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient",
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
         "module" : "Patient"
      },
      "(0022,1007)[<0>](0022,0058)[<1>](0022,001c)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "The actual agent administered to dilate the pupil.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Mydriatic Agent Code Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ]
      },
      "(0018,1000)" : [
         {
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "name" : "Device Serial Number",
            "entity" : "Equipment",
            "req" : "3",
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
            "module" : "General Equipment"
         },
         {
            "entity" : "Equipment",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "name" : "Device Serial Number",
            "module" : "Enhanced General Equipment",
            "desc" : "Manufacturer's serial number of the equipment that produced the composite instances.",
            "req" : "1"
         }
      ],
      "(0010,0040)" : {
         "req" : "2",
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
         "module" : "Patient",
         "name" : "Patient's Sex",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0010,21b0)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Additional Patient History",
         "usage" : "U",
         "entity" : "Study",
         "desc" : "Additional information about the Patient's medical history.",
         "req" : "3",
         "module" : "Patient Study"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1220)[<4>](0040,a084)" : {
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Observer Type",
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "Method used to select which acquired axial length measurement values are kept.",
            {
               "list" : [
                  [
                     "PSN",
                     "Person; manually selected"
                  ],
                  [
                     "DEV",
                     "Device; automatically selected"
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
                     "linkend" : "sect_C.8.25.14.1.1.5"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Certificate of Signer",
         "module" : "SOP Common",
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
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_2d3ce9c9-555a-4be1-9e6d-e07eb84c4852"
                                 }
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
         "req" : "1"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1220)[<3>](0040,a084)" : {
         "name" : "Observer Type",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "Method used to select which acquired axial length measurement values are kept.",
            {
               "list" : [
                  [
                     "PSN",
                     "Person; manually selected"
                  ],
                  [
                     "DEV",
                     "Device; automatically selected"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1220)[<4>](0022,1159)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : "A free text description of the axial length measurement data source.",
         "req" : "3",
         "entity" : "Measurements",
         "name" : "Ophthalmic Axial Length Data Source Description",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0304)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Nonidentifying Private Elements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "List of Private Data Elements in block that do not contain identifying\n                  information (are safe from identity leakage).",
            "Elements are identified by the lowest 8-bits of the attribute tag (i.e. with a value from 0000H to 00FFH) within the block, stored as an unsigned short integer. Multiple values shall be in increasing order and a given value shall be listed at most once.",
            "Required if Block Identifying Information Status (0008,0303) equals MIXED."
         ],
         "req" : "1C"
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
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Value Type",
         "entity" : "Series"
      },
      "(0010,1021)" : {
         "module" : "Patient Study",
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Size Code Sequence",
         "usage" : "U"
      },
      "(0010,0020)" : {
         "entity" : "Patient",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Primary identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also ",
                        {
                           "attrs" : {
                              "linkend" : "sect_C.7.1.4.1.1",
                              "xrefstyle" : "select: label"
                           },
                           "el" : "xref"
                        },
                        "."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_bd933dd8-c95a-459e-a9cd-8b9c90650099"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "2"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a043)" : {
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Name",
         "entity" : "Measurements"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient",
         "req" : "3",
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 6 (Assigning Facility)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "Patient"
      },
      "(0022,1007)[<0>](0022,1050)" : {
         "desc" : [
            "Measurements of the axial length of a patient's eye.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurements Sequence",
         "entity" : "Measurements"
      },
      "(0010,0024)[<0>](0040,0036)" : {
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
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
         "module" : "Patient"
      },
      "(0008,0300)[<0>](0008,0305)[<1>](0008,0307)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Deidentification Action",
         "module" : "SOP Common",
         "req" : "1",
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
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "orderedlist",
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
                           "el" : "listitem",
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
                                    "Further explanation of these actions can be found in ",
                                    {
                                       "attrs" : {
                                          "xrefstyle" : "template:PS3.15 Section %n %t",
                                          "targetdoc" : "PS3.15",
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
                           ]
                        },
                        "\n                  "
                     ]
                  },
                  "\n                "
               ]
            }
         ]
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1330)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.16-6"
         ],
         "entity" : "Measurements"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1160)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "module" : "General Series",
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
         "req" : "1C"
      },
      "(0022,1007)[<0>](0022,0058)[<1>](0022,004e)" : {
         "req" : "3",
         "desc" : "The concentration of the agent.",
         "module" : "Ophthalmic Axial Measurements",
         "name" : "Mydriatic Agent Concentration",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      " (0010,0027) [<0>](0010,0021)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "module" : "Patient",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_fde39d36-34f5-4459-8bca-12b577233532"
                     }
                  },
                  "\n              "
               ]
            }
         ]
      },
      "(0038,0064)" : {
         "module" : "Patient Study",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "name" : "Issuer of Service Episode ID Sequence",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U"
      },
      "(0022,1008)[<0>](0022,000d)" : {
         "desc" : [
            "Whether or not the patient's pupils were pharmacologically dilated for this acquisition",
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
            "If this tag is empty, no information is available."
         ],
         "req" : "2",
         "module" : "Ophthalmic Axial Measurements",
         "name" : "Pupil Dilated",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0010,0219)" : {
         "desc" : [
            [
               "A coded identification of the strain of the patient. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.1.1.4"
                  }
               },
               "."
            ],
            "One or more Items are permitted in this sequence. If more than one item is present, each item represents the same information but encoded using a different coding scheme (rather than post-coordinated modifiers)."
         ],
         "req" : "3",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Code Sequence",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0010,0034)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient's Death Date in Alternative Calendar",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
         "req" : "3"
      },
      "(0022,1008)[<0>](0022,1050)" : {
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurements Sequence",
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : [
            "Measurements of the axial length of a patient's eye.",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a30a)" : {
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series"
      },
      "(0012,0072)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "name" : "Clinical Trial Series Description",
         "usage" : "U",
         "module" : "Clinical Trial Series",
         "req" : "3",
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
         ]
      },
      " (0010,0027) [<0>](0010,0020)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "desc" : "Primary identifier for an individual subject.",
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "module" : "SOP Common",
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "req" : "3",
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Station Name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "entity" : "Patient",
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
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a040)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Value Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "module" : "General Series",
         "req" : "1",
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
         ]
      },
      "(0018,1050)" : {
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "req" : "3"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1220)[<3>](0040,a084)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Method used to select which acquired axial length measurement values are kept.",
            {
               "list" : [
                  [
                     "PSN",
                     "Person; manually selected"
                  ],
                  [
                     "DEV",
                     "Device; automatically selected"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Observer Type",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a161)" : {
         "module" : "General Series",
         "req" : "1C",
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
         "name" : "Floating Point Value"
      },
      "(0018,1020)" : [
         {
            "module" : "General Equipment",
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
            "entity" : "Equipment",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "name" : "Software Versions",
            "usage" : "M"
         },
         {
            "name" : "Software Versions",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M",
            "entity" : "Equipment",
            "req" : "1",
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
            "module" : "Enhanced General Equipment"
         }
      ],
      "(0008,1080)" : {
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Admitting Diagnoses Description"
      },
      " (0010,0027) [<0>](0010,0028)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Subject Relative Position in Image",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "module" : "Patient",
         "req" : "3",
         "desc" : [
            "The position in the image pixel data of the individual subject identified in this sequence relative to the other subjects. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.4.1.1.1"
               }
            },
            "."
         ]
      },
      "(0008,0015)" : {
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
         "name" : "Instance Coercion DateTime",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1225)[<3>](0022,1150)" : {
         "desc" : [
            "The source of the value in Ophthalmic Axial Length (0022,1019).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Ophthalmic Axial Length Data Source Code Sequence",
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Responsible Organization",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information."
      },
      "(0010,2297)" : {
         "module" : "Patient",
         "desc" : [
            "Name of person with medical or welfare decision making authority for the patient.",
            "Required if the patient is an animal. May be present otherwise."
         ],
         "req" : "2C",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Responsible Person",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0012,0083)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Consent for Clinical Trial Use Sequence",
         "entity" : "Study",
         "desc" : [
            "A Sequence that conveys information about consent for Clinical Trial or research use of the composite instances within this Study.",
            "One or more Items are permitted in this Sequence.",
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
         "req" : "3",
         "module" : "Clinical Trial Study"
      },
      "(0008,1052)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series"
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "module" : "SOP Common",
         "req" : "1",
         "desc" : [
            "The date and time the Digital Signature was created. The time shall include an offset (i.e., time zone indication) from Coordinated Universal Time.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_2c2ebaf6-e26c-4bf5-b5dd-cb4e0ed2cd56"
                     },
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
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature DateTime",
         "usage" : "M"
      },
      "(0008,0033)" : {
         "req" : "1",
         "desc" : "The time the measurements data creation started.",
         "module" : "General Ophthalmic Refractive Measurements",
         "name" : "Content Time",
         "mod_tables" : [
            "table_C.8.25.7-1"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0010,2292)" : {
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Breed Description",
         "entity" : "Patient"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1225)[<3>](0022,1155)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            [
               "The ratio of signal power to the background noise power (P",
               {
                  "el" : "subscript",
                  "content" : [
                     "signal"
                  ]
               },
               " / P",
               {
                  "content" : [
                     "noise"
                  ],
                  "el" : "subscript"
               },
               ")."
            ],
            "Required if Ophthalmic Axial Length Measurements Type (0022,1010) is TOTAL LENGTH. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Signal to Noise Ratio"
      },
      "(0008,1050)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Performing Physician's Name",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : "Name of the physician(s) administering the Series.",
         "req" : "3"
      },
      "(0010,0026)[<0>](0010,0020)" : {
         "desc" : "Primary identifier for the group of subjects.",
         "req" : "1",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Patient ID",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1019)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "The axial length measurement acquired, in mm.",
            "The type of measurement is specified in the Ophthalmic Axial Length Measurements Type (0022,1010).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0008,1120)" : {
         "usage" : "M",
         "name" : "Referenced Patient Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0018,1201)" : {
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
         "module" : "SOP Common",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "entity" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "Patient"
      },
      "(0008,1072)[<0>](0040,1101)" : {
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "entity" : "Series"
      },
      "(0008,0300)[<0>](0008,0303)" : {
         "req" : "1",
         "desc" : [
            [
               "Specifies whether some or all of the Private Data Elements in the block are safe from identity leakage as defined by ",
               {
                  "attrs" : {
                     "xrefstyle" : "template:PS3.15 Section %n %t",
                     "targetdoc" : "PS3.15",
                     "targetptr" : "sect_E.3.10"
                  },
                  "el" : "olink"
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
         "module" : "SOP Common",
         "name" : "Block Identifying Information Status",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1220)" : {
         "req" : "1C",
         "desc" : [
            "Related information about an axial length measurement being performed on an ultrasound device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is ULTRASOUND."
         ],
         "module" : "Ophthalmic Axial Measurements",
         "name" : "Ultrasound Ophthalmic Axial Length Measurements Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0010,1100)[<0>](0040,e022)" : {
         "module" : "Patient",
         "req" : "1C",
         "desc" : [
            "Details for retrieving instances from Media.",
            "Required if DICOM Retrieval Sequence (0040,E021), WADO Retrieval Sequence (0040,E023), and WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify media known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "DICOM Media Retrieval Sequence"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1220)[<4>](0022,1159)" : {
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Data Source Description",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "entity" : "Measurements",
         "desc" : "A free text description of the axial length measurement data source.",
         "req" : "3",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0022,1008)[<0>](0022,0058)[<1>](0022,004e)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "3",
         "desc" : "The concentration of the agent.",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Mydriatic Agent Concentration"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1019)" : {
         "entity" : "Measurements",
         "name" : "Ophthalmic Axial Length",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : [
            "The axial length measurement acquired, in mm.",
            "The type of measurement is specified in the Ophthalmic Axial Length Measurements Type (0022,1010).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.4"
                  }
               },
               " for further explanation."
            ]
         ]
      },
      "(0010,1100)[<0>](0040,e025)[<1>](0008,1190)" : {
         "req" : "1",
         "desc" : "URL specifying the location of the referenced instance(s).",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Retrieve URL",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "req" : "1",
         "entity" : "Measurements",
         "name" : "HL7 Instance Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1225)[<3>](0022,1159)" : {
         "name" : "Ophthalmic Axial Length Data Source Description",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "3",
         "desc" : "A free text description of the axial length measurement data source.",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1220)[<4>](0022,1059)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Velocity",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "module" : "Ophthalmic Axial Measurements",
         "desc" : "The sound velocity used in calculating the Ophthalmic Axial Length Measurement Value (0022,1019), in m/sec.",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a120)" : {
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "DateTime",
         "entity" : "Series"
      },
      "(0022,1007)[<0>](0022,1024)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : [
            [
               "Lens status of the eye. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Lens Status Code Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ]
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a30a)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "entity" : "Series",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1330)" : {
         "req" : "1",
         "desc" : [
            "Reference to the quality control image associated with this measurement.",
            "Only a single Item shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.6"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "Ophthalmic Axial Measurements",
         "name" : "Referenced Ophthalmic Axial Length Measurement QC Image Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0010,1001)" : {
         "desc" : "Other names used to identify the patient.",
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient Names",
         "entity" : "Patient"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1220)[<3>](0022,1159)" : {
         "name" : "Ophthalmic Axial Length Data Source Description",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "desc" : "A free text description of the axial length measurement data source.",
         "req" : "3",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0018,a001)[<0>](0008,1072)" : {
         "module" : "SOP Common",
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more Items are permitted in this Sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Operator Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1155)" : {
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "Patient",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "entity" : "Measurements",
         "name" : "Coding Scheme Designator",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped."
      },
      "(0010,2299)" : {
         "req" : "2C",
         "desc" : [
            "Name of organization with medical or welfare decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Responsible Organization",
         "entity" : "Patient"
      },
      "(0010,0033)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Birth Date in Alternative Calendar",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "Date of birth of the named patient in the Alternative Calendar (0010,0035).",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "No format is specified for alternative calendar dates so none should be assumed."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d088e7b4-910c-4c72-8abf-cfb5a85daa67"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "module" : "SOP Common",
         "desc" : "May include Sequence Attributes and their Items.",
         "req" : "1",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Any Attribute from the main data set that was modified or removed."
      },
      "(0008,0012)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Instance Creation Date",
         "entity" : "Measurements",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0012,0063)" : {
         "usage" : "M",
         "name" : "De-identification Method",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
                                 "attrs" : {
                                    "xml:id" : "para_adf0139e-d0e5-457a-ac4d-5c9e20c50e35"
                                 },
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
                                       "el" : "olink",
                                       "content" : [
                                          "(109104, DCM, \"De-identifying Equipment\")"
                                       ],
                                       "attrs" : {
                                          "targetptr" : "DCM_109104",
                                          "targetdoc" : "PS3.16"
                                       }
                                    },
                                    "."
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
               ],
               "el" : "note"
            },
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method Code Sequence (0012,0064) is not present. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0010,1100)[<0>](0040,e025)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "WADO-RS Retrieval Sequence",
         "module" : "Patient",
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
         "req" : "1C"
      },
      "(0010,1100)[<0>](0008,1199)" : {
         "desc" : [
            "References to object instances.",
            "One or more Items shall be included in this Sequence"
         ],
         "req" : "1",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1225)[<4>](0022,1150)" : {
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Ophthalmic Axial Length Data Source Code Sequence",
         "usage" : "M",
         "entity" : "Measurements",
         "desc" : [
            "The source of the value in Ophthalmic Axial Length (0022,1019).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1330)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Referenced Ophthalmic Axial Length Measurement QC Image Sequence",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Reference to the quality control image associated with this measurement.",
            "Only a single Item shall be included in this Sequence.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.6"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "1"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0035)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
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
         "module" : "Patient"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Study",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a120)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "DateTime"
      },
      "(0040,0275)[<0>](0032,1060)" : {
         "req" : "3",
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "module" : "General Series",
         "name" : "Requested Procedure Description",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "module" : "General Study",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a122)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Time"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0007)" : {
         "req" : "3",
         "desc" : "Institution-generated description or classification of the Scheduled Procedure Step to be performed.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Scheduled Procedure Step Description",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0038,0014)[<0>](0040,0033)" : {
         "module" : "Patient Study",
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
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type",
         "usage" : "U"
      },
      "(0100,0426)" : {
         "name" : "Authorization Equipment Certification Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0018,1030)" : {
         "module" : "General Series",
         "desc" : [
            "User-defined description of the conditions under which the Series was performed.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_0dde755c-c6af-40da-92ed-f526337bb396"
                     },
                     "el" : "para",
                     "content" : [
                        "This attribute conveys series-specific protocol identification and may or may not be identical to the one presented in the Performed Protocol Code Sequence (0040,0260)."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Protocol Name"
      },
      "(0038,0060)" : {
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Service Episode ID",
         "usage" : "U"
      },
      "(0008,0005)" : {
         "usage" : "M",
         "name" : "Specific Character Set",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
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
         "module" : "SOP Common"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1330)" : {
         "desc" : [
            "Reference to the quality control image associated with this measurement.",
            "Only a single Item shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.6",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Referenced Ophthalmic Axial Length Measurement QC Image Sequence",
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1140)" : {
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Measurement Modified",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3"
         ],
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "Whether or not the clinician intervened to modify the output of the device. For example by forcing it to select a different peak in the display.",
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
            }
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0012,0082)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "entity" : "Patient",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "req" : "3",
         "module" : "Clinical Trial Subject"
      },
      "(0040,0260)" : {
         "req" : "3",
         "desc" : "Sequence describing the Protocol performed for this Procedure Step. One or more Items are permitted in this Sequence.",
         "module" : "General Series",
         "name" : "Performed Protocol Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)" : {
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
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0008,103e)" : {
         "entity" : "Series",
         "name" : "Series Description",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Description of the Series",
         "req" : "3"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1140)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Measurement Modified",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3"
         ],
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Whether or not the clinician intervened to modify the output of the device. For example by forcing it to select a different peak in the display.",
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
         "req" : "1"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Operators' Name",
         "entity" : "Measurements",
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "req" : "3",
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
         "req" : "3",
         "module" : "Patient",
         "name" : "Referenced Patient Photo Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1330)[<3>](0008,1150)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : [
            "Uniquely identifies the referenced SOP Class.",
            {
               "list" : [
                  [
                     "1.2.840.10008.5.1.4.1.1.7.2",
                     "Multi-frame Grayscale Byte Secondary Capture Image Storage"
                  ],
                  [
                     "1.2.840.10008.5.1.4.1.1.7.4",
                     "Multi-frame True Color Secondary Capture Image Storage"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.16-6"
         ],
         "name" : "Referenced SOP Class UID"
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "entity" : "Study",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1225)[<3>](0022,1155)" : {
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Signal to Noise Ratio",
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            [
               "The ratio of signal power to the background noise power (P",
               {
                  "content" : [
                     "signal"
                  ],
                  "el" : "subscript"
               },
               " / P",
               {
                  "content" : [
                     "noise"
                  ],
                  "el" : "subscript"
               },
               ")."
            ],
            "Required if Ophthalmic Axial Length Measurements Type (0022,1010) is TOTAL LENGTH. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced SOP Sequence",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ]
      },
      "(0008,0014)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Instance Creator UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Uniquely identifies device that created the SOP Instance."
      },
      "(0008,009d)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study"
      },
      "(0022,1007)[<0>](0022,1065)" : {
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Lens Status Description",
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "req" : "3",
         "desc" : "A free form text description of Lens Status (0022,1024)."
      },
      "(0008,0123)" : {
         "desc" : [
            "Sequence of items that map values of Context Identifier (0008,010F) to an external, private or local Context Group.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Context Group Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements"
      },
      "(0040,0275)[<0>](0040,100a)" : {
         "req" : "3",
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this Sequence."
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Reason for Requested Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series"
      },
      "(0046,0145)[<0>](0008,1150)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8.25.7-1",
            "table_10-11"
         ],
         "module" : "General Ophthalmic Refractive Measurements",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "entity" : "Study",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3"
      },
      "(0008,009d)" : {
         "req" : "3",
         "desc" : [
            "Identification of the consulting physician(s).",
            "One or more Items shall be included in this Sequence. If more than one Item, the number and order shall correspond to the value of Consulting Physician's Name (0008,009C), if present."
         ],
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Consulting Physician Identification Sequence",
         "entity" : "Study"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0012,0062)" : {
         "name" : "Patient Identity Removed",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
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
         "req" : "3",
         "module" : "Patient"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a124)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "UID",
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme UID",
         "usage" : "M",
         "entity" : "Measurements",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "req" : "1C",
         "module" : "SOP Common"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient"
      },
      "(0008,1072)[<0>](0040,1104)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "module" : "General Series",
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,0124)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence of items that map values of Mapping Resource (0008,0105) to an external, private or local Mapping Resource.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Mapping Resource Identification Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1010)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurements Type",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Identifies whether measuring the total axial length of the patient's eye or a segment of the eye for which a discrete measurement was obtained.",
            {
               "list" : [
                  [
                     "TOTAL LENGTH",
                     "the total axial length was taken with one measurement"
                  ],
                  [
                     "LENGTH SUMMATION",
                     "a summation of segmental lengths that determine the total axial length"
                  ],
                  [
                     "SEGMENTAL LENGTH",
                     "a segmental axial length"
                  ]
               ],
               "type" : "variablelist",
               "title" : "Enumerated Values:"
            }
         ],
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a30a)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "entity" : "Series",
         "name" : "Numeric Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Type of Patient ID",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
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
                     "content" : [
                        "The identifier is coded as a string regardless of the type, not as a binary value."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_0c5465f7-fe2f-460e-8394-64ad149bdd60"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1330)[<3>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.16-6"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Measurements"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Modifying System",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "req" : "1"
      },
      "(0010,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Name",
         "entity" : "Patient",
         "desc" : "Patient's full name.",
         "req" : "2",
         "module" : "Patient"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1220)" : {
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Ultrasound Ophthalmic Axial Length Measurements Sequence",
         "usage" : "M",
         "entity" : "Measurements",
         "desc" : [
            "Related information about an axial length measurement being performed on an ultrasound device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is ULTRASOUND."
         ],
         "req" : "1C",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0012,0021)" : {
         "req" : "2",
         "desc" : [
            "The name of the clinical trial or research protocol. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.3",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "Clinical Trial Subject",
         "usage" : "U",
         "name" : "Clinical Trial Protocol Name",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient"
      },
      "(0008,0023)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.7-1"
         ],
         "name" : "Content Date",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : "The date the measurements data creation started.",
         "module" : "General Ophthalmic Refractive Measurements"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "module" : "SOP Common",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature Purpose Code Sequence",
         "usage" : "M"
      },
      "(0022,1008)[<0>](0022,1065)" : {
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Lens Status Description",
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : "A free form text description of Lens Status (0022,1024).",
         "req" : "3"
      },
      "(0008,1060)" : {
         "entity" : "Study",
         "name" : "Name of Physician(s) Reading Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "module" : "General Study",
         "req" : "3",
         "desc" : "Names of the physician(s) reading the Study."
      },
      "(0008,1052)[<0>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Series",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "General Series"
      },
      "(0008,0053)" : {
         "module" : "SOP Common",
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
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Query/Retrieve View",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a163)" : {
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "entity" : "Series"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "entity" : "Measurements",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "entity" : "Measurements"
      },
      "(0010,1100)[<0>](0020,000d)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Study Instance UID",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : [
            "Unique identifier for the Study.",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,003a)" : {
         "name" : "Assigning Agency or Department Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "desc" : [
            "The agency or department that assigned the patient identifier. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d5f050e9-c374-464c-bbc6-c76b57d065fd"
                     },
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
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
      "(0018,1201)" : {
         "usage" : "M",
         "name" : "Time of Last Calibration",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
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
         "req" : "3",
         "module" : "General Equipment"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1225)[<3>](0022,1159)" : {
         "req" : "3",
         "desc" : "A free text description of the axial length measurement data source.",
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "name" : "Ophthalmic Axial Length Data Source Description",
         "entity" : "Measurements"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0008,1062)[<0>](0040,1104)" : {
         "usage" : "M",
         "name" : "Person's Telecom Information",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
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
         "module" : "General Study"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1220)[<3>](0022,1159)" : {
         "desc" : "A free text description of the axial length measurement data source.",
         "req" : "3",
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Data Source Description",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "entity" : "Measurements"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient Study"
      },
      "(0020,0010)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study ID",
         "entity" : "Study",
         "req" : "2",
         "desc" : "User or equipment generated Study identifier.",
         "module" : "General Study"
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
                     "attrs" : {
                        "xml:id" : "para_c0347aea-ecd8-4c0b-8e2f-cedadc2aacd5"
                     },
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
         "req" : "1",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "MAC Algorithm",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "desc" : "Person's telephone number(s)",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Person's Telephone Numbers",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0062,000b)" : {
         "module" : "Patient",
         "desc" : "Identifies the Segment Number to which the reference applies. Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ]
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1330)[<3>](0008,1160)" : {
         "desc" : [
            "Identifies the frame number within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            "Only a single value shall exist.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute is a multi-value field but for this Macro it can only contain one value."
                     ],
                     "attrs" : {
                        "xml:id" : "para_d7eee182-8041-4631-bfff-2290981f6942"
                     }
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.16-6"
         ],
         "entity" : "Measurements"
      },
      "(0008,0013)" : {
         "name" : "Instance Creation Time",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "3",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Institution Address",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located."
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
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
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "entity" : "Patient"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
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
         "req" : "1",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Signature",
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a168)" : {
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)" : {
         "desc" : [
            "Segmental axial length measurement of a patient's eye.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Length Measurements Type (0022,1010) is SEGMENTAL LENGTH.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1C",
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurements Segmental Length Sequence",
         "entity" : "Measurements"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1225)[<4>](0022,1155)" : {
         "desc" : [
            [
               "The ratio of signal power to the background noise power (P",
               {
                  "el" : "subscript",
                  "content" : [
                     "signal"
                  ]
               },
               " / P",
               {
                  "el" : "subscript",
                  "content" : [
                     "noise"
                  ]
               },
               ")."
            ],
            "Required if Ophthalmic Axial Length Measurements Type (0022,1010) is TOTAL LENGTH. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "Ophthalmic Axial Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Signal to Noise Ratio",
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a163)" : {
         "usage" : "M",
         "name" : "Rational Denominator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "req" : "3",
         "module" : "SOP Common",
         "name" : "Device Serial Number",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1140)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Measurement Modified",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3"
         ],
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Whether or not the clinician intervened to modify the output of the device. For example by forcing it to select a different peak in the display.",
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
         "req" : "1"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1225)[<3>](0022,1155)" : {
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "name" : "Signal to Noise Ratio",
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1C",
         "desc" : [
            [
               "The ratio of signal power to the background noise power (P",
               {
                  "content" : [
                     "signal"
                  ],
                  "el" : "subscript"
               },
               " / P",
               {
                  "content" : [
                     "noise"
                  ],
                  "el" : "subscript"
               },
               ")."
            ],
            "Required if Ophthalmic Axial Length Measurements Type (0022,1010) is TOTAL LENGTH. May be present otherwise."
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Segmental axial length measurements of a patient's eye that contribute to an aggregate axial length measurement.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurements Segmental Length Sequence"
      },
      "(0008,1070)" : {
         "req" : "3",
         "desc" : "Name(s) of the operator(s) supporting the Series.",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Operators' Name",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a043)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Name Code Sequence",
         "module" : "General Series",
         "desc" : [
            "Coded concept name of this name-value Item.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
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
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Facility Sequence",
         "entity" : "Patient"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme External ID",
         "entity" : "Measurements",
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "req" : "2C",
         "module" : "SOP Common"
      },
      "(0010,0218)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Additional Information",
         "entity" : "Patient",
         "req" : "3",
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
         "module" : "Patient"
      },
      "(0020,000e)" : {
         "module" : "General Series",
         "desc" : "Unique identifier of the Series.",
         "req" : "1",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Series Instance UID",
         "mod_tables" : [
            "table_C.7-5a"
         ]
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1140)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurement Modified",
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : [
            "Whether or not the clinician intervened to modify the output of the device. For example by forcing it to select a different peak in the display.",
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
            }
         ]
      },
      "(0008,010f)" : {
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
         "req" : "1",
         "module" : "SOP Common",
         "name" : "Context Identifier",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a161)" : {
         "usage" : "M",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "module" : "General Series"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Manufacturer",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements"
      },
      "(0008,1049)[<0>](0040,1101)" : {
         "entity" : "Study",
         "name" : "Person Identification Code Sequence",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "module" : "General Study",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ]
      },
      "(0032,1034)" : {
         "module" : "General Study",
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Requesting Service Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a123)" : {
         "req" : "1C",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a122)" : {
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "module" : "General Series"
      },
      "(0008,0031)" : {
         "desc" : "Time the Series started.",
         "req" : "3",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Series Time",
         "usage" : "M",
         "entity" : "Series"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1220)[<3>](0022,1059)" : {
         "entity" : "Measurements",
         "name" : "Ophthalmic Axial Length Velocity",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : "The sound velocity used in calculating the Ophthalmic Axial Length Measurement Value (0022,1019), in m/sec.",
         "req" : "1"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a121)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Date value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Date"
      },
      "(0008,0118)" : {
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "The unique identifier of the Mapping Resource",
         "entity" : "Measurements",
         "name" : "Mapping Resource UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M"
      },
      "(0010,0035)" : {
         "desc" : [
            "The Alternative Calendar used for Patient's Birth Date in Alternative Calendar (0010,0033) and Patient's Death Date in Alternative Calendar (0010,0034).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.5"
                  }
               },
               " for Defined Terms."
            ],
            "Required if either Patient's Birth Date in Alternative Calendar (0010,0033) or Patient's Alternative Death Date in Calendar (0010,0034) is present."
         ],
         "req" : "1C",
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient's Alternative Calendar",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a168)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C"
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
         "usage" : "M",
         "entity" : "Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)" : {
         "name" : "Content Item Modifier Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "3",
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
         "module" : "General Series"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Code Sequence",
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,08ea)" : {
         "module" : "General Series",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "req" : "1C",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ]
      },
      "(0010,0024)" : {
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e023)" : {
         "usage" : "M",
         "name" : "WADO Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "desc" : [
            "Details for retrieving instances available via WADO-URI.",
            {
               "content" : [
                  "\n                ",
                  {
                     "attrs" : {
                        "xml:id" : "para_87c7f326-107c-4a18-88b9-60712a9f7041"
                     },
                     "el" : "para",
                     "content" : [
                        "This sequence addresses use of the URI-based Web Access to DICOM Objects. Retrieval via the Web Services-based WADO-WS is addressed in the XDS Retrieval Sequence (0040,E024)."
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            },
            "Required if DICOM Retrieval Sequence (0040,E021), DICOM Media Retrieval Sequence (0040,E022), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0020,0011)" : {
         "entity" : "Series",
         "name" : "Series Number",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : "A number that identifies this Series.",
         "req" : "2"
      },
      "(0040,0275)[<0>](0032,1064)" : {
         "module" : "General Series",
         "desc" : [
            "A sequence that conveys the Procedure Type of the requested procedure.",
            "Only a single Item is permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure Code Sequence",
         "usage" : "M"
      },
      "(0008,1062)" : {
         "module" : "General Study",
         "req" : "3",
         "desc" : "Identification of the physician(s) reading the Study. One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "entity" : "Study",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1220)[<3>](0022,1059)" : {
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Velocity",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "entity" : "Measurements",
         "desc" : "The sound velocity used in calculating the Ophthalmic Axial Length Measurement Value (0022,1019), in m/sec.",
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0010,2180)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Occupation",
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Occupation of the Patient."
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a168)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "entity" : "Series",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "usage" : "U",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient Study"
      },
      "(0010,1100)[<0>](0040,e021)" : {
         "usage" : "M",
         "name" : "DICOM Retrieval Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "desc" : [
            "Details for retrieving instances via the DICOM Retrieve Service.",
            "Required if DICOM Media Retrieval Sequence (0040,E022), WADO Retrieval Sequence (0040,E023), WADO-RS Retrieval Sequence (0040,E025) and XDS Retrieval Sequence (0040,E024) are not present. May be present otherwise.",
            "This sequence shall only identify sources known to have instances referenced in Referenced SOP Sequence (0008,1199).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0062,000b)" : {
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1220)[<4>](0022,1150)" : {
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Data Source Code Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "entity" : "Measurements",
         "desc" : [
            "Source of the value recorded in Ophthalmic Axial Length (0022,1019).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0018,a001)[<0>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "Describes the purpose for which the related equipment is being referenced.",
            "Only a single Item shall be included in this Sequence.",
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
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a30a)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Numeric Value",
         "usage" : "M",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Numeric value for this name-value Item. Only a single value shall be present.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ]
      },
      "(0008,1072)[<0>](0008,0082)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ]
      },
      "(0010,2202)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient Species Code Sequence",
         "module" : "Patient",
         "req" : "1C",
         "desc" : [
            [
               "The taxonomic rank value (e.g., genus, subgenus, species or subspecies) of the patient.\n                    See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.1.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               "."
            ],
            "Only a single Item shall be included in this Sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ]
      },
      "(0008,009d)[<0>](0008,0081)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "entity" : "Study",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "req" : "3",
         "module" : "General Study"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,08ea)" : {
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series"
      },
      "(4ffe,0001)" : {
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this Sequence."
         ],
         "req" : "3",
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0010,1100)[<0>](0040,e020)" : {
         "module" : "Patient",
         "req" : "1",
         "desc" : [
            "Type of object instances referenced.",
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Type of Instances",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "module" : "General Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)"
      },
      "(0022,1008)[<0>](0022,0058)[<1>](0022,0042)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Units of measure for the Mydriatic Agent Concentration.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Mydriatic Agent Concentration (0022,004E) is present."
         ],
         "req" : "1C",
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Mydriatic Agent Concentration Units Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ]
      },
      "(0008,0081)" : {
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "module" : "General Equipment",
         "name" : "Institution Address",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a168)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Concept Code Sequence",
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Coded concept value of this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is CODE."
         ]
      },
      "(0018,5100)" : {
         "module" : "General Series",
         "req" : "2C",
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
         "entity" : "Series",
         "name" : "Patient Position",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M"
      },
      "(0010,0021)" : {
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
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
         "module" : "Patient"
      },
      "(0046,0145)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.8.25.7-1",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Ophthalmic Refractive Measurements"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1220)[<4>](0022,1150)" : {
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Ophthalmic Axial Length Data Source Code Sequence",
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : [
            "Source of the value recorded in Ophthalmic Axial Length (0022,1019).",
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0008,009d)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "req" : "3",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person's Address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Spatial Resolution",
         "entity" : "Measurements",
         "req" : "3",
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a162)" : {
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0040,0275)[<0>](0040,1001)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Requested Procedure ID",
         "entity" : "Series",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_5deccc65-f9a8-49d5-8b85-1d58535d1119"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "General Series"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Attribute Modification DateTime",
         "module" : "SOP Common",
         "req" : "1",
         "desc" : "Date and time the attributes were removed and/or replaced."
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Institutional Department Name",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a163)" : {
         "req" : "1C",
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Denominator Value",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0100,0424)" : {
         "usage" : "M",
         "name" : "SOP Authorization Comment",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "General Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "entity" : "Series",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "entity" : "Study",
         "desc" : "Person's mailing address",
         "req" : "3",
         "module" : "General Study"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Measurements",
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0008,0300)[<0>](0008,0302)" : {
         "usage" : "M",
         "name" : "Private Creator Reference",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "The value of the Private Creator Data Element value used to reserve the block\n                  of Private Data Elements whose characteristics are described in this Item.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_7c88d52e-a9e0-4e2b-826b-3ef43e58ae69"
                     },
                     "content" : [
                        "Private blocks are identified by their Private Creator Data Element value,\n                    rather than their numeric block number, since instances may be modified and\n                    numeric block numbers reassigned but the Private Creator Data Element value,\n                    which is required to be unique within a Group of Private Data Elements, will be\n                    preserved."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "SOP Common"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a162)" : {
         "entity" : "Series",
         "name" : "Rational Numerator Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "req" : "1C"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1330)[<3>](0008,1150)" : {
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.16-6"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Uniquely identifies the referenced SOP Class.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "1.2.840.10008.5.1.4.1.1.7.2",
                     "Multi-frame Grayscale Byte Secondary Capture Image Storage"
                  ],
                  [
                     "1.2.840.10008.5.1.4.1.1.7.4",
                     "Multi-frame True Color Secondary Capture Image Storage"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "1"
      },
      "(0008,0080)" : {
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "req" : "3",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Institution Name",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1220)" : {
         "req" : "1C",
         "desc" : [
            "Related information about an axial length measurement being performed on an ultrasound device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is ULTRASOUND."
         ],
         "module" : "Ophthalmic Axial Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Ultrasound Ophthalmic Axial Length Measurements Sequence",
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a120)" : {
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "req" : "1C",
         "module" : "General Series",
         "name" : "DateTime",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a124)" : {
         "name" : "UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(fffa,fffa)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signatures Sequence",
         "usage" : "M"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1330)[<3>](0008,1150)" : {
         "req" : "1",
         "desc" : [
            "Uniquely identifies the referenced SOP Class.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "1.2.840.10008.5.1.4.1.1.7.2",
                     "Multi-frame Grayscale Byte Secondary Capture Image Storage"
                  ],
                  [
                     "1.2.840.10008.5.1.4.1.1.7.4",
                     "Multi-frame True Color Secondary Capture Image Storage"
                  ]
               ],
               "title" : "Enumerated Values:"
            }
         ],
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.16-6"
         ],
         "entity" : "Measurements"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1019)" : {
         "req" : "1",
         "desc" : [
            "The axial length measurement, in mm.",
            "The type of measurement is specified in the Ophthalmic Axial Length Measurements Type (0022,1010).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " and ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "Ophthalmic Axial Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3"
         ],
         "name" : "Ophthalmic Axial Length",
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0010,1100)[<0>](0040,e022)[<1>](0088,0140)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Storage Media File-Set UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "module" : "Patient",
         "desc" : "Uniquely identifies the Storage Media on which the referenced instance(s) reside.",
         "req" : "1"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a124)" : {
         "desc" : [
            "UID value for this name-value Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "req" : "1C",
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "UID",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0022,1008)" : {
         "entity" : "Measurements",
         "name" : "Ophthalmic Axial Measurements Left Eye Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1"
         ],
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Axial measurements of a patient's left eye.",
            "Only a single Item shall be included in this Sequence.",
            "Required if the left eye is measured.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "If Ophthalmic Axial Measurements Left Eye Sequence (0022,1008) is present, Measurement Laterality (0024,0113), if present, will have a value of L or B as appropriate."
                     ],
                     "attrs" : {
                        "xml:id" : "para_18a8e8f1-874e-4bfe-87ce-a122bc48711d"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "req" : "1C"
      },
      "(0008,0106)" : {
         "module" : "SOP Common",
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
         "req" : "1",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Context Group Version"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0062,000b)" : {
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0020,000d)" : {
         "module" : "General Series",
         "req" : "3",
         "desc" : "The unique identifier for the Study provided for this Requested Procedure.",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Study Instance UID",
         "usage" : "M"
      },
      " (0010,0027) [<0>](0010,0024)" : {
         "usage" : "M",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0010,0216)[<0>](0010,0214)" : {
         "module" : "Patient",
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
         "req" : "1",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Strain Stock Number"
      },
      "(0010,1030)" : {
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Weight of the Patient, in kilograms.",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Patient's Weight",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a160)" : {
         "req" : "1C",
         "desc" : [
            "Text value for this name-value Item.",
            "Required if Value Type (0040,A040) is TEXT."
         ],
         "module" : "General Series",
         "name" : "Text Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series"
      },
      "(0012,0040)" : {
         "module" : "Clinical Trial Subject",
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
         ],
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Subject ID",
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0008,1062)[<0>](0008,0082)" : {
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
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0400,0500)" : {
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
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Encrypted Attributes Sequence",
         "entity" : "Measurements"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Study",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "General Study"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)" : {
         "name" : "Ophthalmic Axial Length Measurements Segmental Length Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "Segmental axial length measurements of a patient's eye that contribute to an aggregate axial length measurement.",
            "One or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0022,1044)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1C",
         "desc" : [
            "The method used for obtaining axial measurements of the eye.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is ULTRASOUND."
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1"
         ],
         "name" : "Ophthalmic Ultrasound Method Code Sequence"
      },
      "(0040,0275)[<0>](0040,0009)" : {
         "req" : "1C",
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_36129a24-d644-48ab-914d-1f3fbe916df6"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "module" : "General Series",
         "usage" : "M",
         "name" : "Scheduled Procedure Step ID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,1110)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Referenced Study Sequence",
         "entity" : "Series",
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
         "module" : "General Series"
      },
      "(0008,0201)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Timezone Offset From UTC",
         "usage" : "M",
         "entity" : "Measurements",
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
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5"
                                       },
                                       "el" : "olink"
                                    },
                                    " for the offset component of the DT Value Representation."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_526f07aa-0b79-4c2d-8362-049aceaf5696"
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
                                 "el" : "para",
                                 "content" : [
                                    "The corrected time may cross a 24 hour boundary. For example, if Local Time = 1.00 a.m. and Offset = +0200, then UTC = 11.00 p.m. (23.00) the day before."
                                 ],
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
                                 "attrs" : {
                                    "xml:id" : "para_6500ab52-60e5-4f8a-a3e5-fcedc8ddc8fc"
                                 },
                                 "el" : "para",
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
               ],
               "el" : "note"
            },
            "Time earlier than UTC is expressed as a negative offset.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "attrs" : {
                        "xml:id" : "para_5346ad4e-84cd-47ed-bc69-c2b41005345d"
                     },
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
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_a41cecaa-0d35-48a8-b71a-99ab42511778"
                     }
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
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0010,0026)[<0>](0010,0021)" : {
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
         ],
         "req" : "3",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "entity" : "Patient"
      },
      "(0008,1072)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Operator Identification Sequence",
         "entity" : "Series",
         "desc" : [
            "Identification of the operator(s) supporting the Series.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Operators' Name (0008,1070), if present."
         ],
         "req" : "3",
         "module" : "General Series"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1225)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1C",
         "desc" : [
            "Related information about an axial length measurement being performed on an optical device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is OPTICAL."
         ],
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Optical Ophthalmic Axial Length Measurements Sequence"
      },
      "(0010,1000)" : {
         "module" : "Patient",
         "req" : "3",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Other Patient IDs"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1101)" : {
         "name" : "Ophthalmic Axial Length Measurements Segment Name Code Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            [
               "The name of the segment measured. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ],
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1104)" : {
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
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "entity" : "Measurements"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0033)" : {
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
         "module" : "General Series",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0260)[<0>](0040,0440)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Protocol Context Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "module" : "General Series",
         "desc" : "Sequence that specifies the context for the Performed Protocol Code Sequence Item. One or more Items are permitted in this Sequence.",
         "req" : "3"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1220)" : {
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Ultrasound Ophthalmic Axial Length Measurements Sequence",
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1C",
         "desc" : [
            "Related information about an axial length measurement being performed on an ultrasound device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is ULTRASOUND."
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0022,1007)[<0>](0022,000d)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Whether or not the patient's pupils were pharmacologically dilated for this acquisition",
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
            "If this tag is empty, no information is available."
         ],
         "req" : "2",
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Pupil Dilated",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ]
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1220)[<4>](0022,1059)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Velocity",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : "The sound velocity used in calculating the Ophthalmic Axial Length Measurement Value (0022,1019), in m/sec."
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
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "\n                      ",
                        {
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "The Value Representation of this Attribute is determined by the value of Pixel Representation (0028,0103)."
                                 ],
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
                                 "content" : [
                                    "This Attribute does apply to RT Dose and Segmentation instances, since they include Pixel Data."
                                 ],
                                 "el" : "para",
                                 "attrs" : {
                                    "xml:id" : "para_26f7a207-e6e2-417b-bd79-9085f3fa60cb"
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
                                 "attrs" : {
                                    "xml:id" : "para_77a29ed0-edb8-45c2-a3d1-d07bc572e485"
                                 },
                                 "el" : "para",
                                 "content" : [
                                    "This Attribute does\n                          not apply when Float Pixel Data (7FE0,0008) or Double Float Pixel Data\n                          (7FE0,0009) are used instead of Pixel Data (7FE0,0010); Float Pixel\n                          Padding Value (0028,0122) or Double Float Pixel Padding Value\n                          (0028,0123), respectively, are used instead, and defined at the Image,\n                          not the Equipment, level."
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
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Pixel Padding Value",
         "usage" : "M",
         "entity" : "Equipment"
      },
      "(0008,009c)" : {
         "module" : "General Study",
         "req" : "3",
         "desc" : "Consulting physician(s) for this patient visit.",
         "entity" : "Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Consulting Physician's Name"
      },
      "(0010,1100)[<0>](0020,000e)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Series Instance UID",
         "entity" : "Patient",
         "desc" : [
            "Unique identifier for the Series that is part of the Study identified in Study Instance UID (0020,000D), if present, and contains the referenced object instance(s).",
            "Required if Type of Instances (0040,E020) is DICOM"
         ],
         "req" : "1C",
         "module" : "Patient"
      },
      "(0008,001b)" : {
         "name" : "Original Specialized SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Measurements",
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
         "module" : "SOP Common"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1225)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Related information about an axial length measurement being performed on an optical device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is OPTICAL."
         ],
         "req" : "1C",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "name" : "Optical Ophthalmic Axial Length Measurements Sequence",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1102)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Address",
         "entity" : "Series",
         "req" : "3",
         "desc" : "Person's mailing address",
         "module" : "General Series"
      },
      "(0008,0110)" : {
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Identification Sequence",
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)" : {
         "req" : "3",
         "desc" : "Sequence describing the Scheduled Protocol following a specific coding scheme. One or more Items are permitted in this Sequence.",
         "module" : "General Series",
         "usage" : "M",
         "name" : "Scheduled Protocol Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1150)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1"
      },
      "(0008,009d)[<0>](0040,1103)" : {
         "module" : "General Study",
         "req" : "3",
         "desc" : "Person's telephone number(s)",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telephone Numbers",
         "usage" : "M"
      },
      "(0010,1010)" : {
         "module" : "Patient Study",
         "req" : "3",
         "desc" : "Age of the Patient.",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Patient's Age",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0100,0410)" : {
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
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "Proper use of these flags is specified in Security Profiles. Implementations that do not conform to such Security Profiles may not necessarily handle these flags properly."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_b6227994-ee87-4d4f-9ba4-c3a82f2a705d"
                     }
                  },
                  "\n                "
               ]
            }
         ],
         "req" : "3",
         "module" : "SOP Common",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "SOP Instance Status",
         "entity" : "Measurements"
      },
      "(0012,0051)" : {
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Time Point Description",
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "A description of a set of one or more studies that are grouped together to represent a clinical time point or submission in a clinical trial or research. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.2.3.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Study"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1160)" : {
         "module" : "General Series",
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
         ],
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ]
      },
      "(0008,1032)" : {
         "module" : "General Study",
         "req" : "3",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "entity" : "Study",
         "name" : "Procedure Code Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M"
      },
      "(0010,0026)" : {
         "module" : "Patient",
         "desc" : [
            [
               "A sequence containing the value used for Patient ID (0010,0020) and related Attributes in the source composite instances that contained a group of subjects whose data was acquired at the same time, from which this composite instance was extracted. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.1.4.1.1"
                  }
               },
               "."
            ],
            "Only a single Item is permitted in this sequence."
         ],
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1"
         ],
         "name" : "Source Patient Group Identification Sequence"
      },
      "(0008,1090)" : [
         {
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "req" : "3",
            "module" : "General Equipment",
            "usage" : "M",
            "name" : "Manufacturer's Model Name",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "entity" : "Equipment"
         },
         {
            "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
            "req" : "1",
            "module" : "Enhanced General Equipment",
            "name" : "Manufacturer's Model Name",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "usage" : "M",
            "entity" : "Equipment"
         }
      ],
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a122)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "Time value for this name-value Item.",
            "Required if Value Type (0040,A040) is TIME."
         ],
         "entity" : "Series",
         "name" : "Time",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "module" : "General Study",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,a123)" : {
         "module" : "General Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0040,0250)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Date",
         "usage" : "M",
         "entity" : "Series",
         "desc" : "Date on which the Performed Procedure Step ended.",
         "req" : "3",
         "module" : "General Series"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "The coding scheme full common name",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Coding Scheme Name"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1220)[<3>](0022,1150)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Source of the value recorded in Ophthalmic Axial Length (0022,1019).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "entity" : "Measurements",
         "name" : "Ophthalmic Axial Length Data Source Code Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a162)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Rational Numerator Value",
         "usage" : "M"
      },
      "(0010,0216)[<0>](0010,0215)" : {
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
         "req" : "1",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Strain Source Registry Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1330)[<3>](0008,1160)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.16-6"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Measurements",
         "desc" : [
            "Identifies the frame number within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            "Only a single value shall exist.",
            {
               "el" : "note",
               "content" : [
                  "\n                      ",
                  {
                     "attrs" : {
                        "xml:id" : "para_d7eee182-8041-4631-bfff-2290981f6942"
                     },
                     "content" : [
                        "This Attribute is a multi-value field but for this Macro it can only contain one value."
                     ],
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0046,0145)" : {
         "module" : "General Ophthalmic Refractive Measurements",
         "desc" : [
            "A sequence that specifies Ophthalmic Refractive Measurements SOP Instances that are relevant to the interpretation of this SOP Instance.",
            "Zero or more Items shall be included in this Sequence.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.7.1.1",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Required if Visual Acuity Type Code Sequence (0046,0121) is present. May be present otherwise."
         ],
         "req" : "2C",
         "entity" : "Measurements",
         "name" : "Referenced Refractive Measurements Sequence",
         "mod_tables" : [
            "table_C.8.25.7-1"
         ],
         "usage" : "M"
      },
      "(0022,1008)[<0>](0022,000e)" : {
         "entity" : "Measurements",
         "name" : "Degree of Dilation",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "req" : "2C",
         "desc" : [
            "The degree of the dilation in mm.",
            "Required if the value of Pupil Dilated (0022,000D) is YES."
         ]
      },
      "(0008,0016)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "1",
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
               "el" : "olink",
               "attrs" : {
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber"
               }
            },
            "."
         ]
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1225)" : {
         "entity" : "Measurements",
         "name" : "Optical Ophthalmic Axial Length Measurements Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Related information about an axial length measurement being performed on an optical device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is OPTICAL."
         ],
         "req" : "1C"
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common"
      },
      "(0012,0050)" : {
         "req" : "2",
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
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Time Point ID",
         "usage" : "U",
         "entity" : "Study"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "entity" : "Measurements",
         "name" : "MAC ID Number",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "req" : "1"
      },
      "(0008,1250)" : {
         "entity" : "Series",
         "name" : "Related Series Sequence",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : [
            "Identification of Series significantly related to this Series.",
            "One or more Items are permitted in this Sequence.",
            {
               "el" : "note",
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
                                 "attrs" : {
                                    "xml:id" : "para_41b72cf3-4134-44f1-84cc-a28f024a1c1c"
                                 },
                                 "content" : [
                                    "For example, for a combined CT and PET acquisition, the CT images and PET images would be in separate series that could cross-reference each other with multiple purpose of reference codes meaning same anatomy, simultaneously acquired and same indication."
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
                                 "attrs" : {
                                    "xml:id" : "para_e9e67beb-8432-4dbc-9f6a-df5800189967"
                                 },
                                 "content" : [
                                    "The related series may have different Frames of Reference and hence require some sort of registration before spatial coordinates can be directly compared."
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
                                    "This attribute is not intended for conveying localizer reference information, for which Referenced Image Sequence (0008,1140) should be used."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_7ef219a6-dfda-4b92-a778-37d54ca1cc2c"
                                 }
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
                     "attrs" : {
                        "xml:id" : "para_40579f95-ca05-4631-a8e7-a1923ddde665"
                     },
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
         "module" : "SOP Common",
         "name" : "MAC Calculation Transfer Syntax UID",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Contribution DateTime",
         "entity" : "Measurements",
         "desc" : "The Date & Time when the equipment contributed to the composite instance.",
         "req" : "3",
         "module" : "SOP Common"
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
                     ],
                     "el" : "orderedlist"
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0020,000d)" : {
         "desc" : "Unique identifier for the Study.",
         "req" : "1",
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Study Instance UID",
         "entity" : "Study"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1220)" : {
         "entity" : "Measurements",
         "name" : "Ultrasound Ophthalmic Axial Length Measurements Sequence",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Related information about an axial length measurement being performed on an ultrasound device.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Measurements Device Type (0022,1009) is ULTRASOUND."
         ],
         "req" : "1C"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
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
         "module" : "General Study"
      },
      "(0012,0042)" : {
         "module" : "Clinical Trial Subject",
         "req" : "1C",
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
         "entity" : "Patient",
         "name" : "Clinical Trial Subject Reading ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0008,001a)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Related General SOP Class UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "desc" : [
            "Uniquely identifies a Related General SOP Class for the SOP Class of this Instance. See ",
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
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a123)" : {
         "usage" : "M",
         "name" : "Person Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
         "desc" : [
            "Person name value for this name-value Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0038,0062)" : {
         "entity" : "Study",
         "name" : "Service Episode Description",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Description of the type of service episode.",
         "req" : "3"
      },
      "(0012,0020)" : {
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
         "name" : "Clinical Trial Protocol ID",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "usage" : "U"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(0022,1008)[<0>](0022,1025)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Vitreous Status Code Sequence",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            [
               "Status of the vitreous cavity. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.2"
                  }
               },
               " for further explanation."
            ],
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "name" : "Universal Entity ID",
         "usage" : "U",
         "module" : "Patient Study",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,0275)[<0>](0008,0051)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9"
         ],
         "name" : "Issuer of Accession Number Sequence",
         "entity" : "Series",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "General Series"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1330)[<3>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.16-6"
         ],
         "entity" : "Measurements",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0010,4000)" : {
         "name" : "Patient Comments",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "desc" : "User-defined additional information about the patient.",
         "module" : "Patient"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "module" : "General Study",
         "req" : "1C",
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
         "name" : "Institution Code Sequence"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2",
            "table_10-11"
         ],
         "name" : "Referenced SOP Class UID",
         "entity" : "Series"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1140)" : {
         "desc" : [
            "Whether or not the clinician intervened to modify the output of the device. For example by forcing it to select a different peak in the display.",
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
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements",
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Measurement Modified",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3"
         ],
         "entity" : "Measurements"
      },
      "(0008,0117)" : {
         "usage" : "M",
         "name" : "Context UID",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "desc" : [
            "The unique identifier of the Context Group.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.6"
                  },
                  "el" : "xref"
               },
               "."
            ]
         ],
         "req" : "3",
         "module" : "SOP Common"
      },
      "(0020,0060)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Laterality",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "module" : "General Series",
         "desc" : [
            "Laterality of (paired) body part examined. Required if the body part examined is a paired structure and Image Laterality (0020,0062) or Frame Laterality (0020,9072) or Measurement Laterality (0024,0113) are not sent.",
            {
               "type" : "variablelist",
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
               "title" : "Enumerated Values:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "Some IODs support Image Laterality (0020,0062) at the Image level or Frame Laterality (0020,9072) at the Frame level in the Frame Anatomy functional group macro or Measurement Laterality (0024,0113) at the Measurement level, which can provide a more comprehensive mechanism for specifying the laterality of the body part(s) being examined."
                     ],
                     "attrs" : {
                        "xml:id" : "para_46e9d782-b47b-4339-b6ff-a11691e830db"
                     }
                  },
                  "\n                  "
               ]
            }
         ],
         "req" : "2C"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1225)[<3>](0022,1150)" : {
         "desc" : [
            "The source of the value in Ophthalmic Axial Length (0022,1019).",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "name" : "Ophthalmic Axial Length Data Source Code Sequence",
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurements Total Length Sequence",
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1C",
         "desc" : [
            "The axial length of a patient's eye, in mm.",
            "One or more Items shall be included in this Sequence.",
            "Required if Ophthalmic Axial Length Measurements Type (0022,1010) is TOTAL LENGTH.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
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
                     ],
                     "attrs" : {
                        "xml:id" : "para_8933ed06-5a13-4f47-a4fd-9e2d7cc913a6"
                     }
                  },
                  "\n              "
               ]
            }
         ],
         "entity" : "Patient",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0010,1100)[<0>](0040,e023)[<1>](0040,e010)" : {
         "usage" : "M",
         "name" : "Retrieve URI",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "entity" : "Patient",
         "req" : "1",
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
                     "el" : "para",
                     "content" : [
                        "The VR of this attribute has changed from UT to UR."
                     ]
                  },
                  "\n"
               ]
            }
         ],
         "module" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0040,a120)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : [
            "DateTime value for this name-value Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "DateTime",
         "usage" : "M"
      },
      "(0022,1008)[<0>](0022,1024)" : {
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Lens Status Code Sequence",
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : [
            [
               "Lens status of the eye. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.1"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Only a single Item shall be included in this Sequence."
         ]
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,003a)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Agency or Department Code Sequence",
         "module" : "Patient",
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 10 (Assigning Agency or Department)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3"
      },
      "(0008,1052)[<0>](0008,0080)" : {
         "module" : "General Series",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "entity" : "Series",
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "name" : "Person Identification Code Sequence",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "SOP Common"
      },
      "(0008,0096)" : {
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referring Physician Identification Sequence",
         "usage" : "M",
         "entity" : "Study"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,0441)[<3>](0008,1199)[<4>](0008,1160)" : {
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
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Frame Number",
         "entity" : "Series"
      },
      "(0008,0105)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource",
         "entity" : "Measurements",
         "req" : "1",
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
         "module" : "SOP Common"
      },
      "(0020,0013)" : [
         {
            "entity" : "Measurements",
            "mod_tables" : [
               "table_C.8.25.7-1"
            ],
            "name" : "Instance Number",
            "usage" : "M",
            "module" : "General Ophthalmic Refractive Measurements",
            "desc" : "A number that identifies these measurements.",
            "req" : "1"
         },
         {
            "entity" : "Measurements",
            "usage" : "M",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "name" : "Instance Number",
            "module" : "SOP Common",
            "req" : "3",
            "desc" : "A number that identifies this Composite object instance."
         }
      ],
      "(0040,0251)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step End Time",
         "module" : "General Series",
         "desc" : "Time at which the Performed Procedure Step ended.",
         "req" : "3"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1225)[<3>](0022,1159)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "3",
         "desc" : "A free text description of the axial length measurement data source.",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "name" : "Ophthalmic Axial Length Data Source Description"
      },
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
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
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Universal Entity ID",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1330)[<3>](0008,1160)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Identifies the frame number within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            "Only a single value shall exist.",
            {
               "content" : [
                  "\n                      ",
                  {
                     "content" : [
                        "This Attribute is a multi-value field but for this Macro it can only contain one value."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_d7eee182-8041-4631-bfff-2290981f6942"
                     }
                  },
                  "\n                    "
               ],
               "el" : "note"
            }
         ],
         "req" : "1",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.16-6"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M"
      },
      "(0008,0070)" : [
         {
            "module" : "General Equipment",
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "req" : "2",
            "entity" : "Equipment",
            "name" : "Manufacturer",
            "mod_tables" : [
               "table_C.7-8"
            ],
            "usage" : "M"
         },
         {
            "desc" : "Manufacturer of the equipment that produced the composite instances.",
            "req" : "1",
            "module" : "Enhanced General Equipment",
            "mod_tables" : [
               "table_C.7-8b"
            ],
            "name" : "Manufacturer",
            "usage" : "M",
            "entity" : "Equipment"
         }
      ],
      "(0040,0260)[<0>](0040,0440)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Series",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "module" : "General Series",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "name" : "Contribution Description",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "req" : "3",
         "desc" : "Description of the contribution the equipment made to the composite instance."
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "module" : "SOP Common",
         "req" : "1",
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
         "entity" : "Measurements",
         "name" : "Certificate Type",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "usage" : "M"
      },
      "(0010,0024)[<0>](0040,0035)" : {
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Identifier Type Code",
         "module" : "Patient",
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 5 (Identifier Type Code)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3"
      },
      "(0040,a390)" : {
         "usage" : "M",
         "name" : "HL7 Structured Document Reference Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
         "req" : "1C",
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
         "module" : "SOP Common"
      },
      "(0040,1012)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Reason For Performed Procedure Code Sequence",
         "entity" : "Study",
         "desc" : [
            "Coded reason(s) for performing this procedure.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "May differ from the values in Reason for the Requested Procedure (0040,100A) in Request Attribute Sequence (0040,0275), for example if what was performed differs from what was requested."
                     ],
                     "attrs" : {
                        "xml:id" : "para_dcfce3fc-57ae-49c6-9700-37334726e8eb"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "One or more Items are permitted in this Sequence."
         ],
         "req" : "3",
         "module" : "General Study"
      },
      "(0028,0109)" : {
         "module" : "General Series",
         "desc" : "The maximum value of all images in this Series.",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Largest Pixel Value in Series"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Segmental axial length measurement of a patient's eye.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Ophthalmic Axial Length Measurements Type (0022,1010) is SEGMENTAL LENGTH.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.4"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "1C",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurements Segmental Length Sequence",
         "usage" : "M"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1220)[<3>](0022,1159)" : {
         "usage" : "M",
         "name" : "Ophthalmic Axial Length Data Source Description",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "entity" : "Measurements",
         "req" : "3",
         "desc" : "A free text description of the axial length measurement data source.",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "name" : "Distribution Type",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "entity" : "Study",
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
         "module" : "Clinical Trial Study"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0039)" : {
         "req" : "3",
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
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "entity" : "Patient"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "name" : "Institution Name",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "req" : "1C",
         "module" : "General Study"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1019)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : [
            "The axial length measurement acquired, in mm.",
            "The type of measurement is specified in the Ophthalmic Axial Length Measurements Type (0022,1010).",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.3",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "entity" : "Measurements",
         "name" : "Ophthalmic Axial Length",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "usage" : "M"
      },
      "(0008,1052)[<0>](0040,1104)" : {
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Telecom Information",
         "usage" : "M",
         "entity" : "Series",
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
         "module" : "General Series"
      },
      "(0018,0015)" : {
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a"
         ],
         "name" : "Body Part Examined",
         "module" : "General Series",
         "req" : "3",
         "desc" : [
            [
               "Text description of the part of the body examined. See ",
               {
                  "attrs" : {
                     "targetdoc" : "PS3.16",
                     "targetptr" : "chapter_L",
                     "xrefstyle" : "template:Annex %n \u201c%t\u201d in PS3.16"
                  },
                  "el" : "olink"
               },
               " for Defined Terms"
            ],
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "attrs" : {
                        "xml:id" : "para_c8ff54a1-69e9-4623-abb8-672af78baddf"
                     },
                     "content" : [
                        "Some IODs support the Anatomic Region Sequence (0008,2218), which can provide a more comprehensive mechanism for specifying the body part being examined."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a161)" : {
         "module" : "General Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "entity" : "Series",
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M"
      },
      "(0038,0014)" : {
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Issuer of Admission ID Sequence",
         "entity" : "Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "desc" : [
            "The geo-political body that assigned the patient identifier. Typically a code for a country or a state/province. Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                ",
                  {
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ],
                     "attrs" : {
                        "xml:id" : "para_da6e8d69-e95e-4320-b5c5-be5b4cbb811f"
                     }
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "req" : "3"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1225)[<4>](0022,1159)" : {
         "module" : "Ophthalmic Axial Measurements",
         "req" : "3",
         "desc" : "A free text description of the axial length measurement data source.",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "name" : "Ophthalmic Axial Length Data Source Description",
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0033)" : {
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
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
         "module" : "Patient Study"
      },
      "(0008,0122)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Mapping Resource Name",
         "module" : "SOP Common",
         "req" : "3",
         "desc" : [
            "The name of the Mapping Resource.",
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
         ]
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Local Namespace Entity ID",
         "entity" : "Series"
      },
      "(0012,0031)" : {
         "entity" : "Patient",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "name" : "Clinical Trial Site Name",
         "module" : "Clinical Trial Subject",
         "req" : "2",
         "desc" : [
            "Name of the site responsible for submitting clinical trial or research data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.1.3.1.5"
               }
            }
         ]
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "name" : "Institution Name",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Patient ID",
         "entity" : "Patient",
         "req" : "1",
         "desc" : [
            "An identifier for the patient.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "In the case of imaging a group of small animals simultaneously, the single value of this identifier corresponds to the identification of the entire group. See also ",
                        {
                           "attrs" : {
                              "linkend" : "sect_C.7.1.4.1.1",
                              "xrefstyle" : "select: label"
                           },
                           "el" : "xref"
                        },
                        "."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_f0c2cfdd-2ad9-4f36-9f8d-a8723d825eae"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Source of Previous Values",
         "entity" : "Measurements",
         "req" : "2",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "module" : "SOP Common"
      },
      "(0010,2203)" : {
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Sex Neutered",
         "entity" : "Study",
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
                     "content" : [
                        "If this Attribute is present but has no value then the status is unknown."
                     ],
                     "el" : "para",
                     "attrs" : {
                        "xml:id" : "para_c2f87128-b036-4f01-a73f-cfc3ce71eaeb"
                     }
                  },
                  "\n                  "
               ],
               "el" : "note"
            },
            "Required if patient is an animal. May be present otherwise."
         ],
         "module" : "Patient Study"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "entity" : "Patient",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "Patient"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1225)[<4>](0022,1159)" : {
         "entity" : "Measurements",
         "name" : "Ophthalmic Axial Length Data Source Description",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "req" : "3",
         "desc" : "A free text description of the axial length measurement data source."
      },
      "(0040,0275)[<0>](0008,1110)[<1>](0008,1155)" : {
         "entity" : "Series",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-11"
         ],
         "module" : "General Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0008,1199)[<3>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "module" : "General Series",
         "name" : "Referenced SOP Class UID",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2",
            "table_10-11"
         ],
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Retrieve URI",
         "module" : "SOP Common",
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
               ],
               "el" : "note"
            }
         ],
         "req" : "3"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1101)" : {
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3"
         ],
         "name" : "Ophthalmic Axial Length Measurements Segment Name Code Sequence",
         "usage" : "M",
         "entity" : "Measurements",
         "desc" : [
            [
               "The name of the segment measured. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.4"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ],
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0012,0064)" : {
         "req" : "1C",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this Sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "De-identification Method Code Sequence",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient"
      },
      "(0022,1007)[<0>](0022,0058)[<1>](0022,0042)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Units of measure for the Mydriatic Agent Concentration.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Mydriatic Agent Concentration (0022,004E) is present."
         ],
         "req" : "1C",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Mydriatic Agent Concentration Units Sequence"
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
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1019)" : {
         "name" : "Ophthalmic Axial Length",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "usage" : "M",
         "entity" : "Measurements",
         "desc" : [
            "The axial length measurement acquired, in mm.",
            "The type of measurement is specified in the Ophthalmic Axial Length Measurements Type (0022,1010).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.3"
                  }
               },
               " and ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0040,0275)[<0>](0008,0051)[<1>](0040,0032)" : {
         "module" : "General Series",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-17"
         ],
         "name" : "Universal Entity ID"
      },
      "(0022,1009)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1"
         ],
         "name" : "Ophthalmic Axial Measurements Device Type",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "Describes the type of ophthalmic axial measurement acquisition device.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "ULTRASOUND",
                     null
                  ],
                  [
                     "OPTICAL",
                     null
                  ]
               ],
               "title" : "Defined Terms:"
            }
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0040,a161)" : {
         "name" : "Floating Point Value",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). The same number of values as Numeric Value (0040,A30A) shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "req" : "1C",
         "module" : "General Series"
      },
      "(0010,0026)[<0>](0010,0024)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18"
         ],
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Patient"
      },
      "(0010,2298)" : {
         "req" : "1C",
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
         "name" : "Responsible Person Role",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1220)[<3>](0022,1059)" : {
         "entity" : "Measurements",
         "name" : "Ophthalmic Axial Length Velocity",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3",
            "table_C.8.25.14-4"
         ],
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "req" : "1",
         "desc" : "The sound velocity used in calculating the Ophthalmic Axial Length Measurement Value (0022,1019), in m/sec."
      },
      "(0010,1100)[<0>](0040,e024)[<1>](0040,e031)" : {
         "module" : "Patient",
         "req" : "3",
         "desc" : "Uniquely identifies a Community to which requests for the referenced instances can be directed.",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Home Community ID",
         "usage" : "M"
      },
      "(0008,1052)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "usage" : "M",
         "entity" : "Series",
         "req" : "1C",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Series"
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "name" : "Reason for the Attribute Modification",
         "entity" : "Measurements",
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
         "module" : "SOP Common"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1211)[<2>](0022,1019)" : {
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "The axial length measurement, in mm.",
            "The type of measurement is specified in the Ophthalmic Axial Length Measurements Type (0022,1010).",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.3"
                  },
                  "el" : "xref"
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.8.25.14.1.1.4"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3"
         ],
         "name" : "Ophthalmic Axial Length"
      },
      "(0008,1110)" : {
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
         ],
         "module" : "General Study",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "name" : "Referenced Study Sequence",
         "entity" : "Study"
      },
      "(0040,0254)" : {
         "desc" : "Institution-generated description or classification of the Procedure Step that was performed.",
         "req" : "3",
         "module" : "General Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16"
         ],
         "name" : "Performed Procedure Step Description",
         "entity" : "Series"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "entity" : "Study",
         "usage" : "U",
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "name" : "Clinical Trial Protocol ID",
         "module" : "Clinical Trial Study",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            [
               "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.1.3",
                     "xrefstyle" : "select: title"
                  }
               },
               "."
            ]
         ],
         "req" : "1C"
      },
      "(0008,1072)[<0>](0040,1102)" : {
         "module" : "General Series",
         "req" : "3",
         "desc" : "Person's mailing address",
         "entity" : "Series",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Person's Address"
      },
      "(0008,1072)[<0>](0008,0081)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-1"
         ],
         "name" : "Institution Address",
         "usage" : "M",
         "module" : "General Series",
         "req" : "3",
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable."
      },
      "(0008,0020)" : {
         "usage" : "M",
         "name" : "Study Date",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "desc" : "Date the Study started.",
         "req" : "2",
         "module" : "General Study"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1220)[<3>](0040,a084)" : {
         "entity" : "Measurements",
         "name" : "Observer Type",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "usage" : "M",
         "module" : "Ophthalmic Axial Measurements",
         "desc" : [
            "Method used to select which acquired axial length measurement values are kept.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "PSN",
                     "Person; manually selected"
                  ],
                  [
                     "DEV",
                     "Device; automatically selected"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.5",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1140)" : {
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2"
         ],
         "name" : "Ophthalmic Axial Length Measurement Modified",
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "Whether or not the clinician intervened to modify the output of the device. For example by forcing it to select a different peak in the display.",
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
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0022,1125)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1"
         ],
         "name" : "Anterior Chamber Depth Definition Code Sequence",
         "entity" : "Measurements",
         "req" : "3",
         "desc" : [
            "The definition of anterior chamber depth for this instrument.",
            "Only a single Item is permitted in this Sequence."
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0018,9004)" : {
         "usage" : "M",
         "name" : "Content Qualification",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
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
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.13.2.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "SOP Common"
      },
      "(0020,4000)" : {
         "module" : "General Ophthalmic Refractive Measurements",
         "desc" : "User-defined comments about this SOP Instance.",
         "req" : "3",
         "entity" : "Measurements",
         "mod_tables" : [
            "table_C.8.25.7-1"
         ],
         "name" : "Image Comments",
         "usage" : "M"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,08ea)" : {
         "req" : "1C",
         "desc" : [
            "Units of measurement for a numeric value in this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is NUMERIC."
         ],
         "module" : "General Series",
         "name" : "Measurement Units Code Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0008,1160)" : {
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "entity" : "Series",
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
         "req" : "1C",
         "module" : "General Series"
      },
      "(0022,1007)[<0>](0022,1050)[<1>](0022,1210)[<2>](0022,1220)[<3>](0022,1059)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-4"
         ],
         "name" : "Ophthalmic Axial Length Velocity",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : "The sound velocity used in calculating the Ophthalmic Axial Length Measurement Value (0022,1019), in m/sec.",
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M",
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
                     "el" : "para",
                     "content" : [
                        "Equivalent to HL7 v2 CX component 9 (Assigning Jurisdiction)."
                     ]
                  },
                  "\n              "
               ]
            }
         ],
         "req" : "3",
         "module" : "Patient"
      },
      "(0018,1200)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "name" : "Date of Last Calibration",
         "entity" : "Equipment",
         "req" : "3",
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
         "module" : "General Equipment"
      },
      "(0010,0200)" : {
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Quality Control Subject",
         "entity" : "Patient",
         "req" : "3",
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
            [
               "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.7.6.1",
                     "xrefstyle" : "select: title"
                  }
               },
               ", which is used to describe an image acquired."
            ]
         ],
         "module" : "Patient"
      },
      " (0010,0027) [<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "req" : "1C",
         "module" : "Patient",
         "name" : "Universal Entity ID",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "usage" : "M",
         "name" : "Date of Last Calibration",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Measurements",
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
         "module" : "SOP Common"
      },
      "(0008,1049)" : {
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more Items are permitted in this Sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "req" : "3",
         "module" : "General Study",
         "name" : "Physician(s) of Record Identification Sequence",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "usage" : "M",
         "entity" : "Study"
      },
      "(0008,0300)[<0>](0008,0305)" : {
         "req" : "3",
         "desc" : "Actions to be performed on element within the block that are not safe from identify leakage.",
         "module" : "SOP Common",
         "name" : "Deidentification Action Sequence",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0040,0260)[<0>](0040,0440)[<1>](0040,0441)[<2>](0040,a040)" : {
         "entity" : "Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-16",
            "table_10-2"
         ],
         "name" : "Value Type",
         "usage" : "M",
         "module" : "General Series",
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
         "req" : "1"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "req" : "1",
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "name" : "Digital Signature UID",
         "usage" : "M",
         "entity" : "Measurements"
      },
      "(0010,1020)" : {
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "name" : "Patient's Size",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Length or size of the Patient, in meters.",
         "req" : "3"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)" : {
         "req" : "1C",
         "desc" : [
            "Composite SOP Instance Reference value for this name-value Item.",
            "Only a single Item shall be included in this Sequence.",
            "Required if Value Type (0040,A040) is COMPOSITE or IMAGE."
         ],
         "module" : "General Series",
         "name" : "Referenced SOP Sequence",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "usage" : "M",
         "entity" : "Series"
      },
      "(0024,0113)" : {
         "module" : "General Ophthalmic Refractive Measurements",
         "req" : "3",
         "desc" : [
            "Laterality of refractive measurement performed.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "R",
                     "right"
                  ],
                  [
                     "L",
                     "left"
                  ],
                  [
                     "B",
                     "both left and right together"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
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
                                    "Laterality (0020,0060) is a Series level Attribute and must be the same for all Measurements in the Series, hence it must be absent if multiple instances from different eyes or lenses are encoded."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_6818abd5-fdf7-4976-bd38-44470a57d9be"
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
                                 "content" : [
                                    "Needs to be consistent with any other laterality information contained at the Measurement level."
                                 ],
                                 "attrs" : {
                                    "xml:id" : "para_d96ee59c-b86e-4327-b869-320ff6c3882f"
                                 }
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
         "entity" : "Measurements",
         "usage" : "M",
         "mod_tables" : [
            "table_C.8.25.7-1"
         ],
         "name" : "Measurement Laterality"
      },
      "(0010,1100)[<0>](0008,1199)[<1>](0008,1160)" : {
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
                        "xml:id" : "para_e2359edc-51fe-4f62-abc5-a7447e377de7"
                     }
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-3b"
         ],
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "entity" : "Patient"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1330)[<3>](0008,1150)" : {
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.16-6"
         ],
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "Uniquely identifies the referenced SOP Class.",
            {
               "title" : "Enumerated Values:",
               "type" : "variablelist",
               "list" : [
                  [
                     "1.2.840.10008.5.1.4.1.1.7.2",
                     "Multi-frame Grayscale Byte Secondary Capture Image Storage"
                  ],
                  [
                     "1.2.840.10008.5.1.4.1.1.7.4",
                     "Multi-frame True Color Secondary Capture Image Storage"
                  ]
               ]
            }
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
         "module" : "Patient",
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
         "req" : "3",
         "entity" : "Patient",
         "name" : "Identifier Type Code",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "usage" : "M"
      },
      "(0040,0275)[<0>](0040,0008)[<1>](0040,0440)[<2>](0008,1199)[<3>](0062,000b)" : {
         "req" : "1C",
         "desc" : [
            "Identifies the segments to which the reference applies identified by Segment Number (0062,0004).",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "module" : "General Series",
         "mod_tables" : [
            "table_C.7-5a",
            "table_10-9",
            "table_10-2"
         ],
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "entity" : "Series"
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "req" : "1",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "name" : "Breed Registry Code Sequence",
         "entity" : "Patient"
      },
      "(0008,0060)" : [
         {
            "desc" : [
               "Type of equipment that originally acquired the data used to create the images in this Series. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.7.3.1.1.1"
                  }
               },
               " for Defined Terms."
            ],
            "req" : "1",
            "module" : "General Series",
            "usage" : "M",
            "mod_tables" : [
               "table_C.7-5a"
            ],
            "name" : "Modality",
            "entity" : "Series"
         },
         {
            "entity" : "Series",
            "name" : "Modality",
            "mod_tables" : [
               "table_C.8.25.13-1"
            ],
            "usage" : "M",
            "module" : "Ophthalmic Axial Measurements Series",
            "desc" : [
               "Type of equipment that originally acquired the data used to create the measurements in this Series.",
               {
                  "title" : "Enumerated Values:",
                  "type" : "variablelist",
                  "list" : [
                     [
                        "OAM",
                        null
                     ]
                  ]
               },
               [
                  "See ",
                  {
                     "el" : "xref",
                     "attrs" : {
                        "linkend" : "sect_C.7.3.1.1.1",
                        "xrefstyle" : "select: label"
                     }
                  },
                  " for further explanation."
               ]
            ],
            "req" : "1"
         }
      ],
      "(0010,0026)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "module" : "Patient",
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
         "entity" : "Patient",
         "usage" : "M",
         "mod_tables" : [
            "table_C.7-1",
            "table_C.7.1.4-1",
            "table_10-18",
            "table_10-17"
         ],
         "name" : "Universal Entity ID Type"
      },
      "(0022,1008)[<0>](0022,1050)[<1>](0022,1212)[<2>](0022,1211)[<3>](0022,1019)" : {
         "usage" : "M",
         "name" : "Ophthalmic Axial Length",
         "mod_tables" : [
            "table_C.8.25.14-1",
            "table_C.8.25.14-2",
            "table_C.8.25.14-3"
         ],
         "entity" : "Measurements",
         "req" : "1",
         "desc" : [
            "The axial length measurement, in mm.",
            "The type of measurement is specified in the Ophthalmic Axial Length Measurements Type (0022,1010).",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " and ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.8.25.14.1.1.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "Ophthalmic Axial Measurements"
      },
      "(0028,0108)" : {
         "module" : "General Series",
         "desc" : "The minimum value of all images in this Series.",
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Smallest Pixel Value in Series",
         "mod_tables" : [
            "table_C.7-5a"
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
      "Can't handle table_8.8-1 (in table_C.8.25.14-1 after (0022,1044))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1 after (0022,1125))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2 after (0022,1024))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2 after (0022,1025))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2 after (0022,001C))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2 after (0022,0042))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-4 after (0022,1150))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-4 after (0022,1150))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-3 after (0022,1101))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-3:table_C.8.25.14-4 after (0022,1150))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-3:table_C.8.25.14-4 after (0022,1150))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-3 after (0022,1101))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-3:table_C.8.25.14-4 after (0022,1150))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-3:table_C.8.25.14-4 after (0022,1150))",
      "Can't handle table_C.8.25.14-5 (in table_C.8.25.14-1 after (0022,1007))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2 after (0022,1024))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2 after (0022,1025))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2 after (0022,001C))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2 after (0022,0042))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-4 after (0022,1150))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-4 after (0022,1150))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-3 after (0022,1101))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-3:table_C.8.25.14-4 after (0022,1150))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-3:table_C.8.25.14-4 after (0022,1150))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-3 after (0022,1101))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-3:table_C.8.25.14-4 after (0022,1150))",
      "Can't handle table_8.8-1 (in table_C.8.25.14-1:table_C.8.25.14-2:table_C.8.25.14-3:table_C.8.25.14-4 after (0022,1150))",
      "Can't handle table_C.8.25.14-5 (in table_C.8.25.14-1 after (0022,1008))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}
