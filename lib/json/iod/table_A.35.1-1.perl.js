var data = {
   "tags" : {
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0088,0130)" : {
         "entity" : "Document",
         "req" : "3",
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "module" : "SR Document General",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,1049)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the physician(s) who are responsible for overall patient care at time of Study.",
            "One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Physician(s) of Record (0008,1048), if present."
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Physician(s) of Record Identification Sequence",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,1010)" : {
         "usage" : "M",
         "name" : "Station Name",
         "req" : "3",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "User defined name identifying the machine that produced the composite instances.",
         "module" : "General Equipment"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0032)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ]
      },
      "(0008,1062)[<0>](0040,1103)" : {
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
      "(0008,1080)" : {
         "name" : "Admitting Diagnoses Description",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Description of the admitting diagnosis (diagnoses)",
         "module" : "Patient Study"
      },
      "(0040,a390)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Document",
         "req" : "1"
      },
      "(0040,a07a)[<0>](0040,1101)" : {
         "req" : "2C",
         "entity" : "Document",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Coded identifier of person observer.",
            "Zero or one Item shall be included in this sequence.",
            "Required if Observer Type value is PSN."
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0088,0140)" : {
         "module" : "SR Document General",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "req" : "3",
         "name" : "Storage Media File-Set UID",
         "usage" : "M"
      },
      "(0038,0062)" : {
         "name" : "Service Episode Description",
         "usage" : "U",
         "entity" : "Study",
         "req" : "3",
         "desc" : "Description of the type of service episode.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0040,a730)[<0>](0040,a010)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6"
         ],
         "desc" : [
            "The type of relationship between the (enclosing) Source Content Item and the Target Content Item.",
            "IODs specify additional constraints on Relationships (including lists of Enumerated Values).",
            {
               "list" : [
                  [
                     "CONTAINS",
                     null
                  ],
                  [
                     "HAS PROPERTIES",
                     null
                  ],
                  [
                     "HAS OBS CONTEXT",
                     null
                  ],
                  [
                     "HAS ACQ CONTEXT",
                     null
                  ],
                  [
                     "INFERRED FROM",
                     null
                  ],
                  [
                     "SELECTED FROM",
                     null
                  ],
                  [
                     "HAS CONCEPT MOD",
                     null
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            },
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.17.3.2.4",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "req" : "1",
         "entity" : "Document",
         "name" : "Relationship Type",
         "usage" : "M"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
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
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "name" : "Data Elements Signed",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1"
      },
      "(0040,a730)[<0>](0040,a123)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is PNAME."
         ],
         "module" : "SR Document Content",
         "name" : "Person Name",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Document"
      },
      "(0012,0031)" : {
         "req" : "2",
         "entity" : "Patient",
         "usage" : "U",
         "name" : "Clinical Trial Site Name",
         "module" : "Clinical Trial Subject",
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
      "(0040,a730)[<0>](0040,a130)" : {
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Temporal Range Type",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.18.7.1.1",
                  "xrefstyle" : "select: label"
               }
            },
            " for Enumerated Values."
         ]
      },
      "(0010,0024)[<0>](0040,003a)" : {
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
         ],
         "module" : "Patient",
         "name" : "Assigning Agency or Department Code Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0020,9172)" : {
         "module" : "SOP Common",
         "desc" : [
            "The set of images or other composite SOP Instances that were converted to this instance.",
            "If this instance was converted from a specific frame in the source instance, the reference shall include the Frame Number.",
            "One or more Items shall be included in this sequence.",
            "Required if this instance was created by conversion, and Conversion Source Attributes Sequence (0020,9172) is not present in an Item of Shared Functional Groups Sequence (5200,9229) or Per-Frame Functional Groups Sequence (5200,9230)."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "req" : "1C",
         "name" : "Conversion Source Attributes Sequence",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1050)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center.",
         "module" : "SOP Common",
         "name" : "Spatial Resolution",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "req" : "3",
         "entity" : "Document",
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ]
            }
         ]
      },
      "(0040,a385)" : {
         "req" : "1C",
         "entity" : "Document",
         "name" : "Pertinent Other Evidence Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Other Composite SOP Instances that are considered to be pertinent evidence by the creator of this SR Document. This evidence must have been acquired in order to satisfy Requested Procedures other than the one(s) for which this SR Document is generated.",
            "One or more Items shall be included in this sequence.",
            "Required if pertinent evidence from other Requested Procedures needs to be recorded.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.17.2.3",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0062,000b)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "desc" : "Identifies the segments to which the reference applies identified by Segment Number (0062,0004). Required if the Referenced SOP Instance is a Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present.",
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Referenced Segment Number",
         "req" : "1C",
         "entity" : "Document"
      },
      "(0018,a001)[<0>](0040,a170)" : {
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
         ],
         "module" : "SOP Common",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(0008,114a)[<0>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ],
         "module" : "SR Document General"
      },
      "(0008,0033)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "The time the document content creation started.",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Content Time",
         "req" : "1",
         "entity" : "Document"
      },
      "(0040,a171)" : {
         "mod_tables" : [
            "table_C.17-6"
         ],
         "desc" : "Unique identifier for the observation Content Item (and its subsidiary Content Items, if any). The UID represents the semantic content of the observation; an encoding of the same observation with the same context into another representation (e.g., a CDA Entry) may use the same UID.",
         "module" : "SR Document Content",
         "name" : "Observation UID",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document"
      },
      "(0040,a07a)[<0>](0008,0070)" : {
         "usage" : "M",
         "name" : "Manufacturer",
         "req" : "1C",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Manufacturer of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "module" : "SR Document General"
      },
      "(0040,a073)" : {
         "module" : "SR Document General",
         "desc" : [
            "The person or persons authorized to verify documents of this type and accept responsibility for the content of this document.",
            "One or more Items shall be included in this sequence.",
            "Required if Verification Flag (0040,A493) is VERIFIED.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "In HL7 Structured Documents, the comparable attribute is the \"legalAuthenticator\"."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "req" : "1C",
         "name" : "Verifying Observer Sequence",
         "usage" : "M"
      },
      "(0040,a491)" : {
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Completion Flag",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            [
               "The estimated degree of completeness of this SR Document. See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.2.7"
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
                     "PARTIAL",
                     "Partial content."
                  ],
                  [
                     "COMPLETE",
                     "Complete content."
                  ]
               ]
            }
         ]
      },
      "(0040,a370)[<0>](0008,0050)" : {
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "A departmental IS generated number that identifies the order for the Study.",
         "module" : "SR Document General",
         "name" : "Accession Number",
         "usage" : "M",
         "req" : "2",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a163)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "desc" : [
            "The integer denominator of a rational representation of Numeric Value (0040,A30A). Encoded as a non-zero unsigned integer value. Only a single value shall be present.",
            "Required if Rational Numerator Value (0040,A162) is present."
         ],
         "req" : "1C",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Rational Denominator Value"
      },
      "(0008,1062)[<0>](0008,0080)" : {
         "module" : "General Study",
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Name"
      },
      "(0008,0110)[<0>](0008,0103)" : {
         "req" : "3",
         "entity" : "Document",
         "name" : "Coding Scheme Version",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The coding scheme version associated with the Coding Scheme Designator (0008,0102)."
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "SR Document General"
      },
      "(0018,a001)[<0>](0008,0080)" : {
         "entity" : "Document",
         "req" : "3",
         "name" : "Institution Name",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Institution where the equipment that contributed to the composite instance is located.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0010,2160)" : {
         "desc" : "Ethnic group or race of the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Ethnic Group",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0020,9172)[<0>](0008,1160)" : {
         "req" : "1C",
         "entity" : "Document",
         "name" : "Referenced Frame Number",
         "usage" : "M",
         "module" : "SOP Common",
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
                     ]
                  },
                  "\n              "
               ]
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ]
      },
      "(0012,0051)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Clinical Trial Time Point Description",
         "module" : "Clinical Trial Study",
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
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ]
      },
      "(0040,a370)[<0>](0040,0026)" : {
         "req" : "3",
         "entity" : "Document",
         "name" : "Order Placer Identifier Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Placer Order Number.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance MAC Sequence",
         "req" : "3",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "SR Document General"
      },
      "(0010,0021)" : {
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "entity" : "Patient",
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
         "module" : "Patient"
      },
      "(0040,a370)[<0>](0040,2017)" : {
         "desc" : "The order number assigned to the Imaging Service Request by the party filling the order.",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Filler Order Number/Imaging Service Request",
         "entity" : "Document",
         "req" : "2"
      },
      "(0008,1120)[<0>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Patient",
         "req" : "1"
      },
      "(0012,0072)" : {
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
         "mod_tables" : [
            "table_C.7-5b"
         ],
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "name" : "Clinical Trial Series Description",
         "entity" : "Series",
         "req" : "3"
      },
      "(0012,0050)" : {
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
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "name" : "Clinical Trial Time Point ID",
         "entity" : "Study",
         "req" : "2"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,003a)" : {
         "usage" : "M",
         "name" : "Assigning Agency or Department Code Sequence",
         "entity" : "Patient",
         "req" : "3",
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
         ],
         "module" : "Patient"
      },
      "(0010,1002)[<0>](0010,0021)" : {
         "usage" : "M",
         "name" : "Issuer of Patient ID",
         "req" : "3",
         "entity" : "Patient",
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ],
         "module" : "Patient"
      },
      "(0040,a372)" : {
         "desc" : "A Sequence that conveys the codes of the performed procedures pertaining to this SOP Instance. Zero or more Items shall be included in this sequence.",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Performed Procedure Code Sequence",
         "entity" : "Document",
         "req" : "2"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0002)" : {
         "req" : "1",
         "entity" : "Document",
         "name" : "Samples per Pixel",
         "usage" : "M",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
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
         ]
      },
      "(fffa,fffa)[<0>](0400,0105)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "module" : "SOP Common",
         "name" : "Digital Signature DateTime",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(0040,a370)[<0>](0008,1110)[<1>](0008,1155)" : {
         "entity" : "Document",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "req" : "1",
         "entity" : "Document",
         "name" : "Digital Signature UID",
         "usage" : "M",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance."
      },
      "(0010,1002)[<0>](0010,0024)" : {
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0110)" : {
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Certificate Type",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         ]
      },
      "(0040,a730)[<0>](0040,a504)" : {
         "module" : "SR Document Content",
         "desc" : [
            "Template that describes the content of this Content Item and its subsidiary Content Items.",
            "Only a single Item shall be included in this sequence.",
            [
               "Required if a template was used to define the content of this Item, and the template consists of a single CONTAINER with nested content, and it is the outermost invocation of a set of nested templates that start with the same CONTAINER (see ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.18.8.1.2"
                  },
                  "el" : "xref"
               },
               ")."
            ]
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "entity" : "Document",
         "req" : "1C",
         "name" : "Content Template Sequence",
         "usage" : "M"
      },
      "(0012,0010)" : {
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Sponsor Name",
         "usage" : "U",
         "entity" : "Patient",
         "req" : "1"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0031)" : {
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise."
      },
      "(0012,0083)[<0>](0012,0085)" : {
         "req" : "1",
         "entity" : "Study",
         "usage" : "U",
         "name" : "Consent for Distribution Flag",
         "module" : "Clinical Trial Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0031)" : {
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "module" : "SR Document General"
      },
      "(0010,0024)[<0>](0040,0032)" : {
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient",
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a161)" : {
         "usage" : "M",
         "name" : "Floating Point Value",
         "entity" : "Document",
         "req" : "1C",
         "desc" : [
            "The floating point representation of Numeric Value (0040,A30A). Only a single value shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent the value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "module" : "SR Document Content"
      },
      "(0012,0021)" : {
         "name" : "Clinical Trial Protocol Name",
         "usage" : "U",
         "req" : "2",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "desc" : [
            "The name of the clinical trial protocol. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.1.3.1.3",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0040,a525)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1",
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "module" : "SR Document General"
      },
      "(0038,0014)" : {
         "usage" : "U",
         "name" : "Issuer of Admission ID Sequence",
         "entity" : "Study",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued Admission ID (0038,0010).",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study"
      },
      "(0020,000d)" : {
         "module" : "General Study",
         "desc" : "Unique identifier for the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "1",
         "usage" : "M",
         "name" : "Study Instance UID"
      },
      "(0020,9172)[<0>](0062,000b)" : {
         "desc" : [
            "Identifies the Segment Number to which the reference applies.",
            "Required if the Referenced SOP Instance is a Segmentation or Surface Segmentation and the reference does not apply to all segments and Referenced Frame Number (0008,1160) is not present."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3"
         ],
         "module" : "SOP Common",
         "name" : "Referenced Segment Number",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C"
      },
      "(0040,a07a)" : {
         "name" : "Participant Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Persons or devices related to the clinical content of this document.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "SR Document General"
      },
      "(0040,a730)[<0>](0040,a124)" : {
         "name" : "UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is UIDREF."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "module" : "SR Document Content"
      },
      "(0010,1010)" : {
         "usage" : "U",
         "name" : "Patient's Age",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Age of the Patient.",
         "module" : "Patient Study"
      },
      "(0008,0081)" : {
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Mailing address of the institution where the equipment that produced the composite instances is located.",
         "module" : "General Equipment",
         "name" : "Institution Address",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment"
      },
      "(fffa,fffa)[<0>](0400,0115)" : {
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
         "module" : "SOP Common",
         "name" : "Certificate of Signer",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1"
      },
      "(0008,0110)[<0>](0008,0115)" : {
         "entity" : "Document",
         "req" : "3",
         "usage" : "M",
         "name" : "Coding Scheme Name",
         "module" : "SOP Common",
         "desc" : "The coding scheme full common name",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,1040)" : {
         "req" : "3",
         "entity" : "Equipment",
         "name" : "Institutional Department Name",
         "usage" : "M",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Department in the institution where the equipment that produced the composite instances is located."
      },
      "(0040,a370)[<0>](0040,100a)" : {
         "desc" : [
            "Coded Reason for requesting this procedure.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "name" : "Reason for Requested Procedure Code Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3"
      },
      "(0040,a07a)[<0>](0008,0080)" : {
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "2",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
         "module" : "SR Document General"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0039)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Jurisdiction Code Sequence",
         "usage" : "M"
      },
      "(0100,0420)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The date and time when the SOP Instance Status (0100,0410) was set to AO.",
         "req" : "3",
         "entity" : "Document",
         "name" : "SOP Authorization DateTime",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1020)" : {
         "usage" : "M",
         "name" : "Software Versions",
         "entity" : "Document",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1102)" : {
         "name" : "Person's Address",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1101)" : {
         "module" : "SOP Common",
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "entity" : "Document",
         "req" : "1",
         "name" : "Person Identification Code Sequence",
         "usage" : "M"
      },
      "(0012,0060)" : {
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         "module" : "Clinical Trial Series",
         "usage" : "U",
         "name" : "Clinical Trial Coordinating Center Name",
         "req" : "2",
         "entity" : "Series"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Signature",
         "req" : "1",
         "entity" : "Document"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0088,0140)" : {
         "entity" : "Document",
         "req" : "3",
         "name" : "Storage Media File-Set UID",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a07a)[<0>](0008,1090)" : {
         "usage" : "M",
         "name" : "Manufacturer's Model Name",
         "entity" : "Document",
         "req" : "1C",
         "desc" : [
            "Model Name of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General"
      },
      "(0040,a073)[<0>](0040,a027)" : {
         "usage" : "M",
         "name" : "Verifying Organization",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "Organization to which the Verifying Observer Name (0040,A075) is accountable in the current interpretation procedure.",
         "module" : "SR Document General"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "entity" : "Document",
         "name" : "Retrieve Location UID",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a160)" : {
         "name" : "Text Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is TEXT.",
            "Text data that is unformatted and whose manner of display is implementation dependent.",
            "The text value may contain spaces, as well as multiple lines separated by CR LF, but otherwise no format control characters (such as horizontal or vertical tab and form feed) shall be present, even if permitted by the Value Representation of UT.",
            "The text shall be interpreted as specified by Specific Character Set (0008,0005) if present in the SOP Common Module.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The text may contain single or multi-byte characters and use code extension techniques as described in ",
                        {
                           "attrs" : {
                              "targetdoc" : "PS3.5",
                              "xrefstyle" : "select: labelnumber",
                              "targetptr" : "PS3.5"
                           },
                           "el" : "olink"
                        },
                        " if permitted by the values of Specific Character Set (0008,0005)."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "SR Document Content"
      },
      "(0040,a370)" : {
         "module" : "SR Document General",
         "desc" : [
            "Identifies Requested Procedures that are being fulfilled (completely or partially) by creation of this Document.",
            "One or more Items shall be included in this sequence.",
            "Required if this Document fulfills at least one Requested Procedure. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "req" : "1C",
         "name" : "Referenced Request Sequence",
         "usage" : "M"
      },
      "(0040,a360)[<0>](0008,1115)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "req" : "1",
         "entity" : "Document",
         "name" : "Referenced Series Sequence",
         "usage" : "M"
      },
      "(0038,0064)[<0>](0040,0031)" : {
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "entity" : "Study",
         "req" : "1C",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0031)" : {
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "module" : "SR Document General",
         "name" : "Local Namespace Entity ID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C"
      },
      "(0012,0083)[<0>](0012,0084)" : {
         "usage" : "U",
         "name" : "Distribution Type",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-4b"
         ],
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
                     "linkend" : "sect_C.7.2.3.1.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               "."
            ],
            "Required if Consent for Distribution Flag (0012,0085) equals YES or WITHDRAWN."
         ],
         "module" : "Clinical Trial Study"
      },
      "(0040,a370)[<0>](0040,1001)" : {
         "req" : "2",
         "entity" : "Document",
         "name" : "Requested Procedure ID",
         "usage" : "M",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "Identifier of the related Requested Procedure"
      },
      "(0038,0064)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Service Episode ID (0038,0060).",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Issuer of Service Episode ID Sequence",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,a525)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Duplicates of this document, stored with different SOP Instance UIDs.",
            "One or more Items shall be included in this sequence.",
            "Required if this document is stored with different SOP Instance UIDs in one or more other Studies.",
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.17.2.2",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1C",
         "entity" : "Document",
         "name" : "Identical Documents Sequence",
         "usage" : "M"
      },
      "(0010,2203)" : {
         "module" : "Patient Study",
         "mod_tables" : [
            "table_C.7-4a"
         ],
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
         "name" : "Patient's Sex Neutered",
         "usage" : "U"
      },
      "(0040,a073)[<0>](0040,a030)" : {
         "usage" : "M",
         "name" : "Verification DateTime",
         "entity" : "Document",
         "req" : "1",
         "desc" : "Date and Time of verification by the Verifying Observer Name (0040,A075).",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General"
      },
      "(0008,1084)" : {
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Admitting Diagnoses Code Sequence",
         "module" : "Patient Study",
         "desc" : [
            "A sequence that conveys the admitting diagnosis (diagnoses).",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,a730)[<0>](0040,a168)" : {
         "desc" : [
            "This is the value of the Content Item.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.2-1"
         ],
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Concept Code Sequence",
         "entity" : "Document",
         "req" : "1"
      },
      "(0020,000e)" : {
         "req" : "1",
         "entity" : "Series",
         "name" : "Series Instance UID",
         "usage" : "M",
         "module" : "SR Document Series",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : [
            "Unique identifier of the Series.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "No SR-specific semantics are specified."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ]
      },
      "(0010,0030)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Birth date of the patient.",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient's Birth Date",
         "req" : "2",
         "entity" : "Patient"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Class UID"
      },
      "(0010,0024)[<0>](0040,0033)" : {
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
         "module" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0008,0053)" : {
         "entity" : "Document",
         "req" : "1C",
         "name" : "Query/Retrieve View",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a30a)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "desc" : [
            "Numeric measurement value.",
            "Only a single value shall be present."
         ],
         "module" : "SR Document Content",
         "name" : "Numeric Value",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(0008,0110)[<0>](0008,0116)" : {
         "entity" : "Document",
         "req" : "3",
         "usage" : "M",
         "name" : "Coding Scheme Responsible Organization",
         "module" : "SOP Common",
         "desc" : "Name of the organization responsible for the Coding Scheme. May include organizational contact information.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0008,0096)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identification of the patient's referring physician.",
            "Only a single item is permitted in this sequence."
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Referring Physician Identification Sequence",
         "req" : "3",
         "entity" : "Study"
      },
      "(fffa,fffa)[<0>](0400,0305)" : {
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
                     "el" : "para"
                  },
                  "\n                    "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Certified Timestamp Type",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C"
      },
      "(0010,0032)" : {
         "entity" : "Patient",
         "req" : "3",
         "usage" : "M",
         "name" : "Patient's Birth Time",
         "module" : "Patient",
         "desc" : "Birth time of the Patient.",
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0020,9172)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SOP Common",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Document",
         "name" : "Digital Signature UID",
         "usage" : "M"
      },
      "(0008,0050)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "A RIS generated number that identifies the order for the Study.",
         "req" : "2",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Accession Number"
      },
      "(0040,a073)[<0>](0040,a075)" : {
         "module" : "SR Document General",
         "desc" : "The person authorized by the Verifying Organization (0040,A027) to verify documents of this type and who accepts responsibility for the content of this document.",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "req" : "1",
         "name" : "Verifying Observer Name",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,1070)" : {
         "name" : "Operators' Name",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Name(s) of the operator(s) of the contributing equipment.",
         "module" : "SOP Common"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0020,000e)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "module" : "SR Document General",
         "name" : "Series Instance UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(0008,0110)[<0>](0008,0112)" : {
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
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme Registry",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)[<2>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Document",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "module" : "SR Document Content"
      },
      "(0012,0082)" : {
         "usage" : "U",
         "name" : "Clinical Trial Protocol Ethics Committee Approval Number",
         "entity" : "Patient",
         "req" : "3",
         "desc" : "Approval number issued by committee described in Clinical Trial Protocol Ethics Committee Name (0012,0081).",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject"
      },
      "(0040,a730)[<0>](0040,a138)" : {
         "req" : "1C",
         "entity" : "Document",
         "name" : "Referenced Time Offsets",
         "usage" : "M",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "desc" : [
            "Specifies temporal points for reference by number of seconds after start of data.",
            "Required if Referenced Sample Positions (0040,A132) and Referenced DateTime (0040,A13A) are not present."
         ]
      },
      "(0018,a001)[<0>](0018,1200)" : {
         "req" : "3",
         "entity" : "Document",
         "name" : "Date of Last Calibration",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0031)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Local Namespace Entity ID"
      },
      "(0040,a078)[<0>](0040,a084)" : {
         "entity" : "Document",
         "req" : "1",
         "usage" : "M",
         "name" : "Observer Type",
         "module" : "SR Document General",
         "desc" : {
            "list" : [
               [
                  "PSN",
                  "Person"
               ],
               [
                  "DEV",
                  "Device"
               ]
            ],
            "title" : "Enumerated Values:",
            "type" : "variablelist"
         },
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,0054)" : {
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "entity" : "Document",
         "req" : "3"
      },
      "(0038,0064)[<0>](0040,0033)" : {
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
            "table_C.7-4a",
            "table_10-17"
         ],
         "module" : "Patient Study",
         "usage" : "U",
         "name" : "Universal Entity ID Type",
         "entity" : "Study",
         "req" : "1C"
      },
      "(0040,a360)" : {
         "name" : "Predecessor Documents Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C",
         "desc" : [
            "Shall refer to SR SOP Instances (e.g., prior or preliminary reports) whose content has been wholly or partially included in this document with or without modification.",
            "One or more Items shall be included in this sequence.",
            "Required if this document includes content from other documents.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The amendment process of an existing SR Document may be described using the Purpose of Reference Code Sequence."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General"
      },
      "(0012,0062)" : {
         "name" : "Patient Identity Removed",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "module" : "Patient"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Referenced Digital Signature Sequence",
         "req" : "3",
         "entity" : "Document"
      },
      "(0040,a390)[<0>](0008,1155)" : {
         "entity" : "Document",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-11"
         ]
      },
      "(0400,0561)[<0>](0400,0565)" : {
         "name" : "Reason for the Attribute Modification",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Reason for the attribute modification.",
            {
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
               ],
               "type" : "variablelist"
            }
         ],
         "module" : "SOP Common"
      },
      "(0010,2294)[<0>](0010,2295)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Identification number of an animal within the registry.",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Breed Registration Number",
         "req" : "1",
         "entity" : "Patient"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "SR Document General",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](7fe0,0010)" : {
         "name" : "Pixel Data",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
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
         "module" : "SR Document Content"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                 "el" : "para",
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "el" : "para"
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "MAC Calculation Transfer Syntax UID",
         "req" : "1",
         "entity" : "Document"
      },
      "(0040,a07a)[<0>](0040,a123)" : {
         "desc" : [
            "Name of the person observer for this document Instance.",
            "Required if Observer Type value is PSN."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General",
         "name" : "Person Name",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0040,e011)" : {
         "entity" : "Document",
         "req" : "3",
         "name" : "Retrieve Location UID",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0103)" : {
         "module" : "SR Document Content",
         "desc" : [
            "Data representation of the pixel samples. Each sample shall have the same pixel representation.",
            {
               "type" : "variablelist",
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "0000H",
                     "unsigned integer."
                  ],
                  [
                     "0001H",
                     "2's complement"
                  ]
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "req" : "1",
         "name" : "Pixel Representation",
         "usage" : "M"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "module" : "SR Document General",
         "name" : "Signature",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(0008,0014)" : {
         "entity" : "Document",
         "req" : "3",
         "name" : "Instance Creator UID",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Uniquely identifies device that created the SOP Instance.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0020,0010)" : {
         "desc" : "User or equipment generated Study identifier.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Study ID",
         "entity" : "Study",
         "req" : "2"
      },
      "(0010,0020)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : "Primary hospital identification number or code for the patient.",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient ID",
         "req" : "2",
         "entity" : "Patient"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0033)" : {
         "req" : "1C",
         "entity" : "Document",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Time of Last Calibration",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Document",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,a370)[<0>](0032,1064)" : {
         "req" : "2",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Requested Procedure Code Sequence",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "A sequence that conveys the requested procedure. Zero or one Item shall be included in this sequence."
      },
      "(0018,1200)" : {
         "name" : "Date of Last Calibration",
         "usage" : "M",
         "entity" : "Equipment",
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0010,1000)" : {
         "name" : "Other Patient IDs",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3",
         "desc" : "Other identification numbers or codes used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0028,0120)" : {
         "name" : "Pixel Padding Value",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
                                 "el" : "para"
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "General Equipment"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0011)" : {
         "name" : "Columns",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : "Number of columns in the image",
         "module" : "SR Document Content"
      },
      "(0400,0561)[<0>](0400,0550)[0](gggg,eeee)" : {
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Any Attribute from the main data set that was modified or removed.",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "May include Sequence Attributes and their Items."
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "name" : "MAC Algorithm",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The algorithm used in generating the MAC.",
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
                  "\n                    ",
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
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "SR Document General"
      },
      "(0008,1062)[<0>](0040,1101)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study",
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Study"
      },
      "(0040,a07c)[<0>](0008,0082)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Coded identifier of Custodial Institution or Organization.",
            "Zero or one Item shall be included in this sequence."
         ],
         "req" : "2",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Institution Code Sequence"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "name" : "Digital Signature UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1"
      },
      "(0012,0042)" : {
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Subject Reading ID",
         "usage" : "U",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,a360)[<0>](0020,000d)" : {
         "entity" : "Document",
         "req" : "1",
         "name" : "Study Instance UID",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ]
      },
      "(0008,0018)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "name" : "SOP Instance UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(4ffe,0001)[<0>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
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
         "module" : "SOP Common"
      },
      "(0040,a07a)[<0>](0018,1002)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Unique identifier of device observer.",
            "Required if Observer Type value is DEV."
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Device UID",
         "req" : "1C",
         "entity" : "Document"
      },
      "(0010,1002)[<0>](0010,0022)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "req" : "1",
         "entity" : "Patient",
         "name" : "Type of Patient ID",
         "usage" : "M"
      },
      "(0040,a078)" : {
         "desc" : [
            "The person or device that created the clinical content of this document. This attribute sets the default Observer Context for the root of the content tree.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Author Observer Sequence",
         "entity" : "Document",
         "req" : "3"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
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
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Data Elements Signed",
         "entity" : "Document",
         "req" : "1"
      },
      "(0040,a730)[<0>](0040,a043)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "desc" : [
            "Code describing the concept represented by this Content Item. Also conveys the value of Document Title and section headings in documents.",
            "Only a single Item shall be included in this sequence.",
            "Required if Value Type (0040,A040) is TEXT, NUM, CODE, DATETIME, DATE, TIME, UIDREF or PNAME.",
            "Required if Value Type (0040,A040) is CONTAINER and a heading is present, or this is the Root Content Item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "That is, containers without headings do not require Concept Name Code Sequence"
                     ]
                  },
                  "\n                "
               ]
            },
            "Required if Value Type (0040,A040) is COMPOSITE, IMAGE, WAVEFORM, SCOORD, SCOORD3D or TCOORD, and the Purpose of Reference is conveyed in the Concept Name.",
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.3.2.2"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Concept Name Code Sequence",
         "req" : "1C",
         "entity" : "Document"
      },
      "(0040,a032)" : {
         "mod_tables" : [
            "table_C.17-6"
         ],
         "desc" : [
            "The date and time on which this Content Item was completed. For the purpose of recording measurements or logging events, completion time is defined as the time of data acquisition of the measurement, or the time of occurrence of the event.",
            "Required if the date and time are different from Content Date (0008,0023) and Content Time (0008,0033) or Observation DateTime (0040,A032) defined in higher items. May be present otherwise.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "When Content Items are copied into successor reports, Content Date (0008,0023) and Content Time (0008,0033) of the new report are likely to be different than the date and time of the original observation. Therefore this attribute may need to be included in any copied Content Items to satisfy the condition."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "module" : "SR Document Content",
         "name" : "Observation DateTime",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Document"
      },
      "(0040,a07a)[<0>](0040,a084)" : {
         "usage" : "M",
         "name" : "Observer Type",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : {
            "type" : "variablelist",
            "title" : "Enumerated Values:",
            "list" : [
               [
                  "PSN",
                  "Person"
               ],
               [
                  "DEV",
                  "Device"
               ]
            ]
         },
         "module" : "SR Document General"
      },
      "(0010,2201)" : {
         "usage" : "M",
         "name" : "Patient Species Description",
         "entity" : "Patient",
         "req" : "1C",
         "desc" : [
            "The species of the patient.",
            "Required if the patient is an animal and if Patient Species Code Sequence (0010,2202) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Document",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "SR Document General"
      },
      "(0010,2298)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Responsible Person Role",
         "usage" : "M",
         "module" : "Patient",
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
         "mod_tables" : [
            "table_C.7-1"
         ]
      },
      "(0010,1002)" : {
         "name" : "Other Patient IDs Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "A sequence of identification numbers or codes used to identify the patient, which may or may not be human readable, and may or may not have been obtained from an implanted or attached device such as an RFID or barcode.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "Patient"
      },
      "(0010,2180)" : {
         "module" : "Patient Study",
         "desc" : "Occupation of the Patient.",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "U",
         "name" : "Occupation"
      },
      "(0008,0080)" : {
         "desc" : "Institution where the equipment that produced the composite instances is located.",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment",
         "name" : "Institution Name",
         "usage" : "M",
         "entity" : "Equipment",
         "req" : "3"
      },
      "(0040,a730)[<0>](0070,031a)" : {
         "usage" : "M",
         "name" : "Fiducial UID",
         "entity" : "Document",
         "req" : "3",
         "desc" : [
            "The globally unique identifier for this fiducial item.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "The fiducial UID can be used to associate this set of graphics with other Content Items."
                     ]
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "module" : "SR Document Content"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0020,000e)" : {
         "module" : "SR Document General",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "req" : "1",
         "usage" : "M",
         "name" : "Series Instance UID"
      },
      "(0008,0090)" : {
         "desc" : "Name of the patient's referring physician",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "module" : "General Study",
         "usage" : "M",
         "name" : "Referring Physician's Name",
         "entity" : "Study",
         "req" : "2"
      },
      "(0008,114a)[<0>](0008,1155)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "req" : "1",
         "entity" : "Document"
      },
      "(fffa,fffa)[<0>](0400,0100)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A UID that can be used to uniquely reference this signature.",
         "req" : "1",
         "entity" : "Document",
         "name" : "Digital Signature UID",
         "usage" : "M"
      },
      "(0040,a078)[<0>](0008,1090)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Model Name of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "req" : "1C",
         "entity" : "Document",
         "name" : "Manufacturer's Model Name",
         "usage" : "M"
      },
      "(0008,1090)" : {
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "req" : "3",
         "entity" : "Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Manufacturer's model name of the equipment that produced the composite instances.",
         "module" : "General Equipment"
      },
      "(4ffe,0001)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : [
            "A sequence of items that describe the parameters used to calculate a MAC for use in Digital Signatures.",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "SOP Common",
         "name" : "MAC Parameters Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1203)" : {
         "entity" : "Document",
         "req" : "1C",
         "usage" : "M",
         "name" : "Blue Palette Color Lookup Table Data",
         "module" : "SR Document Content",
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
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ]
      },
      "(0008,114a)" : {
         "name" : "Referenced Instance Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Sequence specifying SOP Instances significantly related to the current SOP Instance. Such referenced Instances may include equivalent documents or renderings of this document.",
            "One or more Items shall be included in this sequence.",
            [
               "Required if the identity of a CDA Document equivalent to the current SOP Instance is known at the time of creation of this SOP Instance (see ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.17.2.6",
                     "xrefstyle" : "select: label"
                  }
               },
               "). May be present otherwise."
            ]
         ],
         "module" : "SR Document General"
      },
      "(fffa,fffa)[<0>](0400,0005)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "desc" : "A number used to identify which MAC Parameters Sequence item was used in the calculation of this Digital Signature.",
         "req" : "1",
         "entity" : "Document",
         "name" : "MAC ID Number",
         "usage" : "M"
      },
      "(0012,0030)" : {
         "module" : "Clinical Trial Subject",
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
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "entity" : "Patient",
         "req" : "2",
         "name" : "Clinical Trial Site ID",
         "usage" : "U"
      },
      "(0040,a730)[<0>](0040,a121)" : {
         "name" : "Date",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is DATE."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "module" : "SR Document Content"
      },
      "(0040,a078)[<0>](0008,0082)" : {
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "entity" : "Document",
         "req" : "2",
         "desc" : [
            "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General"
      },
      "(0008,0110)" : {
         "desc" : [
            "Sequence of items that map values of Coding Scheme Designator (0008,0102) to an external coding system registration, or to a private or local coding scheme.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Coding Scheme Identification Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0035)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "name" : "Identifier Type Code",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0008,0110)[<0>](0008,010c)" : {
         "module" : "SOP Common",
         "desc" : "The coding scheme UID identifier. Required if coding scheme is identified by an ISO 8824 object identifier compatible with the UI VR.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "req" : "1C",
         "name" : "Coding Scheme UID",
         "usage" : "M"
      },
      "(0010,0010)" : {
         "module" : "Patient",
         "desc" : "Patient's full name.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "2",
         "usage" : "M",
         "name" : "Patient's Name"
      },
      "(0040,a073)[<0>](0040,a088)" : {
         "module" : "SR Document General",
         "desc" : [
            "Coded identifier of Verifying Observer.",
            "Zero or one Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "req" : "2",
         "name" : "Verifying Observer Identification Code Sequence",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1103)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
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
         ],
         "req" : "1C",
         "entity" : "Document",
         "name" : "Blue Palette Color Lookup Table Descriptor",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0008,0080)" : {
         "usage" : "M",
         "name" : "Institution Name",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present.",
         "module" : "General Study"
      },
      "(0008,1049)[<0>](0040,1103)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Telephone Numbers",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Person's telephone number(s)",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,0054)" : {
         "usage" : "M",
         "name" : "Retrieve AE Title",
         "entity" : "Document",
         "req" : "3",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0088,0140)" : {
         "req" : "3",
         "entity" : "Document",
         "name" : "Storage Media File-Set UID",
         "usage" : "M",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside."
      },
      "(0040,a078)[<0>](0008,0080)" : {
         "desc" : "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Institution Name",
         "entity" : "Document",
         "req" : "2"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0033)" : {
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
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
      "(0040,a390)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Document",
         "name" : "HL7 Structured Document Reference Sequence",
         "usage" : "M"
      },
      "(0008,0051)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "General Study",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,a370)[<0>](0008,1110)" : {
         "desc" : [
            "Uniquely identifies the Study SOP Instance.",
            "Zero or one Item shall be included in this sequence.",
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
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "name" : "Referenced Study Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "2"
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
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "module" : "SR Document General",
         "desc" : [
            "The algorithm used in generating the MAC.",
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
                  "\n                    ",
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
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "req" : "1",
         "name" : "MAC Algorithm",
         "usage" : "M"
      },
      "(0040,1012)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
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
         "name" : "Reason For Performed Procedure Code Sequence",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0102)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Most significant bit for pixel sample data. Each sample shall have the same high bit. See ",
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
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "High Bit",
         "req" : "1",
         "entity" : "Document"
      },
      "(0008,1032)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Procedure Code Sequence",
         "usage" : "M",
         "module" : "General Study",
         "desc" : [
            "A Sequence that conveys the type of procedure performed.",
            "One or more Items are permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "entity" : "Document",
         "req" : "1"
      },
      "(0040,a385)[<0>](0020,000d)" : {
         "entity" : "Document",
         "req" : "1",
         "name" : "Study Instance UID",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : "Unique identifier for the Study",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ]
      },
      "(0008,0012)" : {
         "module" : "SOP Common",
         "desc" : [
            "Date the SOP Instance was created.",
            "This is the date that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "req" : "3",
         "name" : "Instance Creation Date",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0033)" : {
         "mod_tables" : [
            "table_C.17-2",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Universal Entity ID Type",
         "req" : "1C",
         "entity" : "Document"
      },
      "(0040,a390)[<0>](0040,e010)" : {
         "usage" : "M",
         "name" : "Retrieve URI",
         "entity" : "Document",
         "req" : "3",
         "desc" : "Retrieval access path to HL7 Structured Document. Includes fully specified scheme, authority, path, and query in accordance with RFC 2396",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1102)" : {
         "module" : "SR Document Content",
         "desc" : [
            "Specifies the format of the Green Palette Color Lookup Table Data (0028,1202). Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.5",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "req" : "1C",
         "name" : "Green Palette Color Lookup Table Descriptor",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0562)" : {
         "entity" : "Document",
         "req" : "1",
         "name" : "Attribute Modification DateTime",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Date and time the attributes were removed and/or replaced.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0020,000e)" : {
         "name" : "Series Instance UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General"
      },
      "(0040,a730)[<0>](0048,0301)" : {
         "name" : "Pixel Origin Interpretation",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C",
         "desc" : [
            [
               "For a referenced multi-frame image, specifies whether the Graphic Data (0070,0022) values are to be interpreted relative to the individual frame pixel origins, or relative to the Total Pixel Matrix origin (see ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.8.12.4.1.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               ")."
            ],
            "Required if the value of Referenced SOP Class UID (0008,1150) of the referenced image is 1.2.840.10008.5.1.4.1.1.77.1.6 (VL Whole Slide Microscopy Image). May be present otherwise.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "FRAME",
                     "relative to individual frame"
                  ],
                  [
                     "VOLUME",
                     "relative to Total Image Matrix"
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "If not present, Graphic Data values are defined relative to the frame pixel origin."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.6-1"
         ],
         "module" : "SR Document Content"
      },
      "(0040,a370)[<0>](0020,000d)" : {
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Study Instance UID",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "Unique identifier for the Study."
      },
      "(0018,1000)" : {
         "module" : "General Equipment",
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "entity" : "Equipment",
         "req" : "3",
         "name" : "Device Serial Number",
         "usage" : "M"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "entity" : "Document",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(0008,0096)[<0>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Institution Address",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,a078)[<0>](0018,1002)" : {
         "desc" : [
            "Unique identifier of device observer.",
            "Required if Observer Type value is DEV."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General",
         "name" : "Device UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C"
      },
      "(0008,001b)" : {
         "req" : "3",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Original Specialized SOP Class UID",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "The SOP Class in which the Instance was originally encoded that has been replaced during a fall-back conversion to the current Related General SOP Class. See ",
            {
               "attrs" : {
                  "targetdoc" : "PS3.4",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ]
      },
      "(0040,a370)[<0>](0040,0027)" : {
         "usage" : "M",
         "name" : "Order Filler Identifier Sequence",
         "entity" : "Document",
         "req" : "3",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Filler Order Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General"
      },
      "(0038,0060)" : {
         "desc" : "Identifier of the Service Episode as assigned by the healthcare provider",
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "module" : "Patient Study",
         "name" : "Service Episode ID",
         "usage" : "U",
         "entity" : "Study",
         "req" : "3"
      },
      "(fffa,fffa)[<0>](0400,0310)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         "name" : "Certified Timestamp",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document"
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ],
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "U"
      },
      "(0010,1001)" : {
         "desc" : "Other names used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Other Patient Names",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)" : {
         "desc" : [
            "Reference to a Softcopy Presentation State SOP Class/SOP Instance pair.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "module" : "SR Document Content",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0040,1103)" : {
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Person's telephone number(s)",
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Person's Telephone Numbers",
         "req" : "3",
         "entity" : "Document"
      },
      "(0040,a375)[<0>](0008,1115)" : {
         "entity" : "Document",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced Series Sequence",
         "module" : "SR Document General",
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ]
      },
      "(0008,0051)[<0>](0040,0031)" : {
         "module" : "General Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "entity" : "Study",
         "req" : "1C",
         "name" : "Local Namespace Entity ID",
         "usage" : "M"
      },
      "(0100,0426)" : {
         "entity" : "Document",
         "req" : "3",
         "usage" : "M",
         "name" : "Authorization Equipment Certification Number",
         "module" : "SOP Common",
         "desc" : "The certification number issued to the Application Entity that set the SOP Instance Status (0100,0410) to AO.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0006)" : {
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
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content",
         "name" : "Planar Configuration",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C"
      },
      "(0040,a492)" : {
         "name" : "Completion Flag Description",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "Explanation of the value sent in Completion Flag (0040,A491).",
         "module" : "SR Document General"
      },
      "(fffa,fffa)" : {
         "module" : "SOP Common",
         "desc" : [
            "Sequence holding Digital Signatures.",
            "One or more items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Document",
         "req" : "3",
         "usage" : "M",
         "name" : "Digital Signatures Sequence"
      },
      "(0040,a730)[<0>](0040,a301)" : {
         "name" : "Numeric Value Qualifier Code Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "desc" : [
            "Qualification of Numeric Value in Measured Value Sequence, or reason for absence of Measured Value Sequence Item.",
            "Only a single Item is permitted in this sequence."
         ],
         "module" : "SR Document Content"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1155)" : {
         "req" : "1",
         "entity" : "Document",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance."
      },
      "(0040,a390)[<0>](0040,e001)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Instance Identifier of the referenced HL7 Structured Document, encoded as a UID (OID or UUID), concatenated with a caret (\"^\") and Extension value (if Extension is present in Instance Identifier).",
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "HL7 Instance Identifier"
      },
      "(0040,a078)[<0>](0040,a123)" : {
         "desc" : [
            "Name of the person observer for this document Instance.",
            "Required if Observer Type value is PSN."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General",
         "name" : "Person Name",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C"
      },
      "(0010,1021)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : [
            "Patient's size category code",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "Patient Study",
         "name" : "Patient's Size Code Sequence",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,114b)" : {
         "req" : "3",
         "entity" : "Document",
         "name" : "Referenced Real World Value Mapping Instance Sequence",
         "usage" : "M",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "desc" : [
            "Reference to a Real World Value Mapping SOP Class/SOP Instance pair.",
            "Only a single Item is permitted in this sequence."
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1101)" : {
         "module" : "SR Document Content",
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
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "entity" : "Document",
         "req" : "1C",
         "usage" : "M",
         "name" : "Red Palette Color Lookup Table Descriptor"
      },
      "(0400,0500)" : {
         "req" : "1C",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Encrypted Attributes Sequence",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         ]
      },
      "(0010,0040)" : {
         "mod_tables" : [
            "table_C.7-1"
         ],
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
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient's Sex",
         "req" : "2",
         "entity" : "Patient"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1202)" : {
         "req" : "1C",
         "entity" : "Document",
         "name" : "Green Palette Color Lookup Table Data",
         "usage" : "M",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
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
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,2000)" : {
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
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The profile applies only to Pixel Data (7FE0,0010) at the same level of the Data Set and not to any icons nested within sequences, which may or may not have their own ICC profile specified."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content",
         "name" : "ICC Profile",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3"
      },
      "(0040,a07c)" : {
         "module" : "SR Document General",
         "desc" : [
            "Custodial organization for this SR Document instance. Represents the organization from which the document originates and that is in charge of maintaining the document, i.e., the steward of the original source document.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "This may or may not be identical to the Institution identified in the Equipment Module."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "Only a single item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "req" : "3",
         "usage" : "M",
         "name" : "Custodial Organization Sequence"
      },
      "(0018,1008)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Identifier of the gantry or positioner.",
         "req" : "3",
         "entity" : "Equipment",
         "name" : "Gantry ID",
         "usage" : "M"
      },
      "(0400,0561)[<0>](0400,0563)" : {
         "usage" : "M",
         "name" : "Modifying System",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Identification of the system that removed and/or replaced the attributes.",
         "module" : "SOP Common"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "module" : "SR Document General",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "req" : "3",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0008,0051)[<1>](0040,0031)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "req" : "1C",
         "entity" : "Document",
         "name" : "Local Namespace Entity ID",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0004)" : {
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Photometric Interpretation",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Specifies the intended interpretation of the pixel data. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Sequence"
      },
      "(0008,0023)" : {
         "name" : "Content Date",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "The date the document content creation started.",
         "module" : "SR Document General"
      },
      "(0040,a493)" : {
         "name" : "Verification Flag",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Indicates whether this SR Document is Verified.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "UNVERIFIED",
                     "Not attested to."
                  ],
                  [
                     "VERIFIED",
                     "Attested to by a Verifying Observer Name (0040,A075) who is accountable for its content."
                  ]
               ],
               "title" : "Enumerated Values:"
            },
            "A value of \"VERIFIED\" shall be used only when the value of Completion Flag (0040,A491) is \"COMPLETE\".",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The intent of this specification is that the \"prevailing final version\" of an SR Document is the version having the most recent Verification DateTime (0040,A030), Verification Flag (0040,A493) of VERIFIED and Preliminary Flag (0040,A496) of FINAL."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "SR Document General"
      },
      "(0010,4000)" : {
         "usage" : "M",
         "name" : "Patient Comments",
         "entity" : "Patient",
         "req" : "3",
         "desc" : "User-defined additional information about the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0008,1111)[<0>](0008,1150)" : {
         "mod_tables" : [
            "table_C.17-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SR Document Series",
         "usage" : "M",
         "name" : "Referenced SOP Class UID",
         "req" : "1",
         "entity" : "Series"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "module" : "SR Document General",
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "req" : "1",
         "usage" : "M",
         "name" : "Signature"
      },
      "(4ffe,0001)[<0>](0400,0015)" : {
         "usage" : "M",
         "name" : "MAC Algorithm",
         "entity" : "Document",
         "req" : "1",
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
                              "targetptr" : "PS3.15",
                              "xrefstyle" : "select: labelnumber",
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
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common"
      },
      "(0040,a078)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "2C",
         "desc" : [
            "Coded identifier of person observer.",
            "Zero or one Item shall be included in this sequence.",
            "Required if Observer Type value is PSN."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General"
      },
      "(0100,0410)" : {
         "name" : "SOP Instance Status",
         "usage" : "M",
         "entity" : "Document",
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
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0008,0016)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.4",
                  "targetdoc" : "PS3.4"
               },
               "el" : "olink"
            },
            "."
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "SOP Class UID",
         "req" : "1",
         "entity" : "Document"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "module" : "SR Document General",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,1201)" : {
         "req" : "1C",
         "entity" : "Document",
         "name" : "Red Palette Color Lookup Table Data",
         "usage" : "M",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Red Palette Color Lookup Table Data. Required if Photometric Interpretation (0028,0004) has a value of PALETTE COLOR or Pixel Presentation (0008,9205) at the image level equals COLOR or MIXED. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.7.6.3.1.6",
                  "xrefstyle" : "select: label"
               }
            },
            " for further explanation."
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0020,000e)" : {
         "name" : "Series Instance UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1",
         "desc" : "Unique identifier of a Series that is part of this Study and contains the referenced Composite Object(s).",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General"
      },
      "(0018,a001)[<0>](0008,1040)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Department in the institution where the equipment that contributed to the composite instance is located.",
         "req" : "3",
         "entity" : "Document",
         "name" : "Institutional Department Name",
         "usage" : "M"
      },
      "(0040,a496)" : {
         "desc" : [
            "Indicates whether this SR Document is intended to be regarded as a preliminary or final report.",
            {
               "list" : [
                  [
                     "PRELIMINARY",
                     "This report precedes the final report and may contain limited information; it may be time sensitive, and it is not expected to contain all the reportable findings."
                  ],
                  [
                     "FINAL",
                     "This report is the definitive means of communicating the results of a procedure."
                  ]
               ],
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "The definitions of the Enumerated Values are derived from the ACR Practice Guideline for Communication of Diagnostic Imaging Findings, Revised 2005."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-2"
         ],
         "module" : "SR Document General",
         "name" : "Preliminary Flag",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3"
      },
      "(0008,0021)" : {
         "module" : "SR Document Series",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : "Date the Series started.",
         "req" : "3",
         "entity" : "Series",
         "name" : "Series Date",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a120)" : {
         "entity" : "Document",
         "req" : "1C",
         "usage" : "M",
         "name" : "DateTime",
         "module" : "SR Document Content",
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is DATETIME."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The algorithm used in generating the MAC.",
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
                  "\n                    ",
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
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "MAC Algorithm",
         "req" : "1",
         "entity" : "Document"
      },
      "(0008,1049)[<0>](0008,0080)" : {
         "req" : "1C",
         "entity" : "Study",
         "name" : "Institution Name",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)" : {
         "usage" : "M",
         "name" : "Icon Image Sequence",
         "entity" : "Document",
         "req" : "3",
         "desc" : [
            "This Icon Image is representative of the Image.",
            "Only a single Item is permitted in this Sequence.",
            "The Icon Image may be no greater than 128 rows by 128 columns."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ],
         "module" : "SR Document Content"
      },
      "(0010,0024)[<0>](0040,0036)" : {
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
         "module" : "Patient",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0040,a375)[<0>](0020,000d)" : {
         "name" : "Study Instance UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "desc" : "Unique identifier for the Study",
         "module" : "SR Document General"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "entity" : "Document",
         "req" : "3",
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,0015)" : {
         "module" : "SOP Common",
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
         ],
         "entity" : "Document",
         "req" : "3",
         "usage" : "M",
         "name" : "Instance Coercion DateTime"
      },
      "(0008,0070)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "Manufacturer of the equipment that produced the composite instances.",
         "req" : "2",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Manufacturer"
      },
      "(0012,0083)[<0>](0012,0020)" : {
         "usage" : "U",
         "name" : "Clinical Trial Protocol ID",
         "entity" : "Study",
         "req" : "1C",
         "desc" : [
            "The identifier of the protocol for which consent to distribute has been granted.",
            "Required if Distribution Type (0012,0084) is NAMED_PROTOCOL and the protocol is not that which is specified in Clinical Trial Protocol ID (0012,0020) in the Clinical Trial Subject Module."
         ],
         "mod_tables" : [
            "table_C.7-4b"
         ],
         "module" : "Clinical Trial Study"
      },
      "(0038,0014)[<0>](0040,0032)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "name" : "Universal Entity ID",
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)[<2>](0040,0032)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "module" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "req" : "1C",
         "entity" : "Patient"
      },
      "(0008,0020)" : {
         "req" : "2",
         "entity" : "Study",
         "name" : "Study Date",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Date the Study started."
      },
      "(0040,a385)[<0>](0008,1115)" : {
         "name" : "Referenced Series Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "module" : "SR Document General"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0088,0140)" : {
         "module" : "SR Document General",
         "desc" : "Uniquely identifies the Storage Media on which the Composite Object(s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "req" : "3",
         "name" : "Storage Media File-Set UID",
         "usage" : "M"
      },
      "(0008,0051)[<0>](0040,0033)" : {
         "req" : "1C",
         "entity" : "Study",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "General Study",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            }
         ]
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,a162)" : {
         "usage" : "M",
         "name" : "Rational Numerator Value",
         "entity" : "Document",
         "req" : "1C",
         "desc" : [
            "The integer numerator of a rational representation of Numeric Value (0040,A30A). Encoded as a signed integer value. Only a single value shall be present.",
            "Required if Numeric Value (0040,A30A) has insufficient precision to represent a rational value as a string. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "module" : "SR Document Content"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,0054)" : {
         "entity" : "Document",
         "req" : "3",
         "name" : "Retrieve AE Title",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,1062)[<0>](0008,0081)" : {
         "name" : "Institution Address",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0120)" : {
         "name" : "Signature",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "The Signature Value identified by the Digital Signature UID within the Referenced SOP Instance UID.",
         "module" : "SR Document General"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0015)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The algorithm used in generating the MAC.",
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
               "content" : [
                  "\n                    ",
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
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "SR Document General",
         "name" : "MAC Algorithm",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(0008,1062)[<0>](0040,1102)" : {
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "module" : "General Study",
         "name" : "Person's Address",
         "usage" : "M",
         "entity" : "Study",
         "req" : "3"
      },
      "(0018,a001)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "entity" : "Document",
         "name" : "Contributing Equipment Sequence",
         "usage" : "M"
      },
      "(0008,0096)[<0>](0040,1102)" : {
         "module" : "General Study",
         "desc" : "Person's mailing address",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "3",
         "name" : "Person's Address",
         "usage" : "M"
      },
      "(0040,a525)[<0>](0008,1115)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3"
         ],
         "desc" : [
            "Sequence of Items where each Item includes the Attributes of a Series containing referenced Composite Object(s).",
            "One or more Items shall be included in this sequence"
         ],
         "req" : "1",
         "entity" : "Document",
         "name" : "Referenced Series Sequence",
         "usage" : "M"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "usage" : "M",
         "name" : "Purpose of Reference Code Sequence",
         "entity" : "Document",
         "req" : "3",
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The MAC generated as described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3"
               }
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.2",
                  "xrefstyle" : "select: label"
               }
            },
            "."
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "MAC",
         "req" : "1",
         "entity" : "Document"
      },
      "(0020,0011)" : {
         "module" : "SR Document Series",
         "desc" : [
            "A number that identifies the Series.",
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "No SR-specific semantics are specified."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-1"
         ],
         "entity" : "Series",
         "req" : "1",
         "name" : "Series Number",
         "usage" : "M"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ],
                     "el" : "para"
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "SR Document General"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0088,0130)" : {
         "entity" : "Document",
         "req" : "3",
         "usage" : "M",
         "name" : "Storage Media File-Set ID",
         "module" : "SR Document General",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0010,0024)[<0>](0040,0039)" : {
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
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
         "module" : "Patient",
         "usage" : "M",
         "name" : "Assigning Jurisdiction Code Sequence",
         "req" : "3",
         "entity" : "Patient"
      },
      "(0008,0005)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
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
         "module" : "SOP Common",
         "name" : "Specific Character Set",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Document"
      },
      "(0038,0064)[<0>](0040,0032)" : {
         "module" : "Patient Study",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ],
         "entity" : "Study",
         "req" : "1C",
         "name" : "Universal Entity ID",
         "usage" : "U"
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "el" : "para",
                                 "content" : [
                                    "This may be used to describe the extent or thoroughness of the de-identification, for example whether or not the de-identification is for a \"Limited Data Set\" (as per HIPAA Privacy Rule)."
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
                                    "The characteristics of the de-identifying equipment and/or the responsible operator of that equipment may be recorded as an additional item of the Contributing Equipment Sequence (0018,A001) in the SOP Common Module. De-identifying equipment may use a Purpose of Reference of (109104,DCM,\"De-identifying Equipment\")."
                                 ],
                                 "el" : "para"
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
         "module" : "Patient",
         "name" : "De-identification Method",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0101)" : {
         "usage" : "M",
         "name" : "Bits Stored",
         "entity" : "Document",
         "req" : "1",
         "desc" : [
            "Number of bits stored for each pixel sample. Each sample shall have the same number of bits stored. See ",
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
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content"
      },
      "(fffa,fffa)[<0>](0400,0401)" : {
         "module" : "SOP Common",
         "desc" : [
            "The purpose of this Digital Signature.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "entity" : "Document",
         "req" : "3",
         "name" : "Digital Signature Purpose Code Sequence",
         "usage" : "M"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3"
               },
               "el" : "xref"
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
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
         "entity" : "Document",
         "name" : "MAC",
         "usage" : "M"
      },
      "(0012,0040)" : {
         "module" : "Clinical Trial Subject",
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
         ],
         "entity" : "Patient",
         "req" : "1C",
         "name" : "Clinical Trial Subject ID",
         "usage" : "U"
      },
      "(0010,0024)[<0>](0040,0035)" : {
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
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Identifier Type Code",
         "entity" : "Patient",
         "req" : "3"
      },
      "(0400,0561)[<0>](0400,0550)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Sequence that contains all the Attributes, with their previous values, that were modified or removed from the main data set.",
            "Only a single Item shall be included in this sequence."
         ],
         "module" : "SOP Common",
         "name" : "Modified Attributes Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(0012,0081)" : {
         "desc" : "Name of the Ethics Committee or Institutional Review Board (IRB) responsible for approval of the Clinical Trial. Required if Clinical Trial Protocol Ethics Committee Approval Number (0012,0082) is present.",
         "mod_tables" : [
            "table_C.7-2b"
         ],
         "module" : "Clinical Trial Subject",
         "name" : "Clinical Trial Protocol Ethics Committee Name",
         "usage" : "U",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,a730)[<0>](0040,a504)[<1>](0040,db00)" : {
         "entity" : "Document",
         "req" : "1",
         "name" : "Template Identifier",
         "usage" : "M",
         "module" : "SR Document Content",
         "desc" : "Template identifier.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ]
      },
      "(0010,2294)[<0>](0010,2296)" : {
         "module" : "Patient",
         "desc" : [
            "Identification of the organization with which an animal is registered.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "1",
         "name" : "Breed Registry Code Sequence",
         "usage" : "M"
      },
      "(0008,1120)[<0>](0008,1155)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Patient",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0040,a0b0)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1"
         ],
         "desc" : [
            [
               "List of channels in Waveform to which the reference applies. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.18.5.1.1",
                     "xrefstyle" : "select: label"
                  }
               }
            ],
            "Required if the Referenced SOP Instance is a Waveform that contains multiple Channels and not all Channels in the Waveform are referenced."
         ],
         "req" : "1C",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced Waveform Channels"
      },
      "(0040,a730)[<0>](0008,1199)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "SR Document Content",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(0008,1111)" : {
         "name" : "Referenced Performed Procedure Step Sequence",
         "usage" : "M",
         "req" : "2",
         "entity" : "Series",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : [
            "Uniquely identifies the Performed Procedure Step SOP Instance for which the Series is created.",
            "Zero or one item shall be included in this sequence.",
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
                                 "content" : [
                                    "The Performed Procedure Step referred to by this Attribute is the Step during which this Document is generated."
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
                                    "If this Document is generated during the same Performed Procedure Step as the evidence in the current interpretation procedure, this attribute may contain reference to that Performed Procedure Step."
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
                                    "This Attribute is not used to convey reference to the evidence in the current interpretation procedure. See Current Requested Procedure Evidence Sequence (0040,A375)."
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
                                    "This Sequence may be sent zero length if the Performed Procedure Step is unknown."
                                 ],
                                 "el" : "para"
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
            }
         ],
         "module" : "SR Document Series"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0081)" : {
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "module" : "SOP Common",
         "name" : "Institution Address",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3"
      },
      "(0010,2292)" : {
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
            "Required if the patient is an animal and if Patient Breed Code Sequence (0010,2293) is empty. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "usage" : "M",
         "name" : "Patient Breed Description",
         "entity" : "Patient",
         "req" : "2C"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0088,0130)" : {
         "module" : "SR Document General",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "req" : "3",
         "name" : "Storage Media File-Set ID",
         "usage" : "M"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)" : {
         "desc" : [
            "A MAC Calculation from data in the referenced SOP Instance that can be used as a data integrity check.",
            "Only a single Item is permitted in this Sequence.",
            {
               "el" : "note",
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute may be used in place of Referenced Digital Signature Sequence (0400,0402), particularly if the SOP Instance does not have appropriate Digital Signatures that can be referenced."
                     ]
                  },
                  "\n                  "
               ]
            }
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "name" : "Referenced SOP Instance MAC Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3"
      },
      "(0010,1002)[<0>](0010,0020)" : {
         "desc" : "An identification number or code used to identify the patient.",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient ID",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1"
      },
      "(0020,0013)" : [
         {
            "desc" : "A number that identifies the SR Document.",
            "mod_tables" : [
               "table_C.17-2"
            ],
            "module" : "SR Document General",
            "usage" : "M",
            "name" : "Instance Number",
            "entity" : "Document",
            "req" : "1"
         },
         {
            "req" : "3",
            "entity" : "Document",
            "usage" : "M",
            "name" : "Instance Number",
            "module" : "SOP Common",
            "mod_tables" : [
               "table_C.12-1"
            ],
            "desc" : "A number that identifies this Composite object instance."
         }
      ],
      "(0032,1034)" : {
         "req" : "3",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Requesting Service Code Sequence",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : [
            "Institutional department where the request initiated.",
            "Only a single item is permitted in this sequence."
         ]
      },
      "(0018,1030)" : {
         "module" : "SR Document Series",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : [
            "Description of the conditions under which the Series was performed.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "This may represent the type of analysis used in creation of the SR SOP Instances."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            }
         ],
         "req" : "3",
         "entity" : "Series",
         "name" : "Protocol Name",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0040,1002)" : {
         "entity" : "Document",
         "req" : "3",
         "usage" : "M",
         "name" : "Reason for the Requested Procedure",
         "module" : "SR Document General",
         "desc" : "Reason for requesting this procedure.",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0018,1201)" : {
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
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
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Time of Last Calibration"
      },
      "(0040,a370)[<0>](0008,1110)[<1>](0008,1150)" : {
         "req" : "1",
         "entity" : "Document",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
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
         "usage" : "M",
         "entity" : "Patient",
         "req" : "2C"
      },
      "(0040,a730)[<0>](3006,0024)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "desc" : "Uniquely identifies the Frame of Reference within which the coordinates are defined.",
         "req" : "1",
         "entity" : "Document",
         "name" : "Referenced Frame of Reference UID",
         "usage" : "M"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)" : {
         "name" : "Referenced Digital Signature Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Sequence of references to Digital Signatures in the referenced SOP Instance.",
            "One or more Items are permitted in this sequence.",
            {
               "content" : [
                  "\n                    ",
                  {
                     "el" : "para",
                     "content" : [
                        "The Attributes in this sequence can be used to detect if the referenced SOP Instance has been altered."
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "module" : "SR Document General"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1150)" : {
         "module" : "SR Document Content",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.5-1",
            "table_C.18.3-1",
            "table_10-11"
         ],
         "entity" : "Document",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Class UID"
      },
      "(0040,a07a)[<0>](0040,a082)" : {
         "entity" : "Document",
         "req" : "2",
         "usage" : "M",
         "name" : "Participation DateTime",
         "module" : "SR Document General",
         "desc" : "DateTime of participation with respect to the clinical content of this document.",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0010,0200)" : {
         "usage" : "M",
         "name" : "Quality Control Subject",
         "entity" : "Patient",
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
               "title" : "Enumerated Values:",
               "type" : "variablelist"
            },
            "If this Attribute is absent, then the subject may or may not be a phantom.",
            "This attribute describes a characteristic of the Imaging Subject. It is distinct from Quality Control Image (0028,0300) in the General Image Module, which is used to describe an image acquired."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0080)" : {
         "req" : "1C",
         "entity" : "Document",
         "name" : "Institution Name",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ],
         "desc" : "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Code Sequence (0008,0082) is not present."
      },
      "(0012,0064)" : {
         "module" : "Patient",
         "desc" : [
            "A code describing the mechanism or method use to remove the patient's identity.",
            "One or more Items shall be included in this sequence. Multiple items are used if successive de-identification steps have been performed or to describe options of a defined profile.",
            "Required if Patient Identity Removed (0012,0062) is present and has a value of YES and De-identification Method (0012,0063) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "1C",
         "usage" : "M",
         "name" : "De-identification Method Code Sequence"
      },
      "(0028,0303)" : {
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
                  "el" : "olink",
                  "attrs" : {
                     "targetdoc" : "PS3.15",
                     "xrefstyle" : "select: labelnumber",
                     "targetptr" : "PS3.15"
                  }
               },
               "."
            ]
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "name" : "Longitudinal Temporal Information Modified",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3"
      },
      "(0018,a001)[<0>](0008,1090)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's model name of the equipment that contributed to the composite instance.",
         "module" : "SOP Common",
         "name" : "Manufacturer's Model Name",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document"
      },
      "(0040,a07a)[<0>](0040,a080)" : {
         "usage" : "M",
         "name" : "Participation Type",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            [
               "Participant's role with respect to the clinical content of this document. See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.17.2.5",
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
                     "SOURCE",
                     "Equipment that contributed to the content"
                  ],
                  [
                     "ENT",
                     "Data enterer (e.g., transcriptionist)"
                  ],
                  [
                     "ATTEST",
                     "Attestor"
                  ]
               ],
               "title" : "Defined Terms:"
            },
            {
               "el" : "note",
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "In HL7 Structured Documents, the participation comparable to Attestor is the \"Authenticator\"."
                     ],
                     "el" : "para"
                  },
                  "\n                "
               ]
            }
         ],
         "module" : "SR Document General"
      },
      "(0008,1060)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Name of Physician(s) Reading Study",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Names of the physician(s) reading the Study.",
         "mod_tables" : [
            "table_C.7-3"
         ]
      },
      "(0040,a730)[<0>](0040,a050)" : {
         "name" : "Continuity of Content",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "desc" : [
            "This flag specifies for a CONTAINER whether or not its contained Content Items are logically linked in a continuous textual flow, or are separate items.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SEPARATE",
                     null
                  ],
                  [
                     "CONTINUOUS",
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
                     "linkend" : "sect_C.18.8.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "module" : "SR Document Content"
      },
      "(0018,1020)" : {
         "name" : "Software Versions",
         "usage" : "M",
         "entity" : "Equipment",
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
         "mod_tables" : [
            "table_C.7-8"
         ],
         "module" : "General Equipment"
      },
      "(0008,0110)[<0>](0008,0114)" : {
         "desc" : "The coding scheme identifier as defined in an external registry. Required if coding scheme is registered and Coding Scheme UID (0008,010C) is not present.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common",
         "usage" : "M",
         "name" : "Coding Scheme External ID",
         "entity" : "Document",
         "req" : "2C"
      },
      "(0008,1110)[<0>](0008,1155)" : {
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ],
         "entity" : "Study",
         "req" : "1",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(0010,21b0)" : {
         "mod_tables" : [
            "table_C.7-4a"
         ],
         "desc" : "Additional information about the Patient's medical history.",
         "module" : "Patient Study",
         "name" : "Additional Patient History",
         "usage" : "U",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,1120)" : {
         "module" : "Patient",
         "desc" : [
            "A sequence that provides reference to a Patient SOP Class/Instance pair.",
            "Only a single Item is permitted in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "entity" : "Patient",
         "req" : "3",
         "name" : "Referenced Patient Sequence",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0033)" : {
         "entity" : "Document",
         "req" : "1C",
         "name" : "Universal Entity ID Type",
         "usage" : "M",
         "module" : "SR Document General",
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
            "table_C.17-2",
            "table_10-17"
         ]
      },
      "(0040,a07c)[<0>](0008,0080)" : {
         "entity" : "Document",
         "req" : "2",
         "name" : "Institution Name",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : "Name of Custodial Institution or Organization.",
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0402)[<3>](0400,0100)" : {
         "desc" : "The Unique Identifier of a Digital Signature held in the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General",
         "name" : "Digital Signature UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1"
      },
      "(0010,2294)" : {
         "name" : "Breed Registration Sequence",
         "usage" : "M",
         "req" : "2C",
         "entity" : "Patient",
         "mod_tables" : [
            "table_C.7-1"
         ],
         "desc" : [
            "Information identifying an animal within a breed registry.",
            "Zero or more Items shall be included in this sequence.",
            "Required if the patient is an animal."
         ],
         "module" : "Patient"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
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
         "module" : "SR Document General"
      },
      "(0040,a370)[<0>](0040,0026)[<1>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0008,1049)[<0>](0008,0081)" : {
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Mailing address of the institution or organization to which the identified individual is responsible or accountable.",
         "module" : "General Study",
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Study"
      },
      "(0008,1049)[<0>](0040,1102)" : {
         "req" : "3",
         "entity" : "Study",
         "name" : "Person's Address",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : "Person's mailing address"
      },
      "(0040,a730)" : {
         "entity" : "Document",
         "req" : "1C",
         "name" : "Content Sequence",
         "usage" : "M",
         "module" : "SR Document Content",
         "desc" : [
            "A potentially recursively nested Sequence of Items that conveys content that is the Target of Relationships with the enclosing Source Content Item.",
            "One or more Items shall be included in this sequence.",
            "Required if the enclosing Content Item has relationships.",
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
                                 "el" : "para",
                                 "content" : [
                                    "If this Attribute is not present then the enclosing Item is a leaf."
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
                                    "The order of Items within this Sequence is semantically significant for presentation."
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
            [
               "See ",
               {
                  "attrs" : {
                     "linkend" : "sect_C.17.3.2.4",
                     "xrefstyle" : "select: label"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.17-6"
         ]
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "entity" : "Document",
         "req" : "1",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ]
      },
      "(0020,9172)[<0>](0008,1150)" : {
         "req" : "1",
         "entity" : "Document",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_10-3",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class."
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0040,a170)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "Describes the purpose for which the reference is made.",
            "One or more Items are permitted in this sequence."
         ],
         "module" : "SR Document General",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,0054)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Title of the DICOM Application Entity where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Retrieve AE Title"
      },
      "(0008,0051)[<0>](0040,0032)" : {
         "req" : "1C",
         "entity" : "Study",
         "name" : "Universal Entity ID",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-17"
         ],
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise."
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0034)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Ratio of the vertical size and horizontal size of the pixels in the image specified by a pair of integer values where the first value is the vertical pixel size, and the second value is the horizontal pixel size. Required if the aspect ratio values do not have a ratio of 1:1 and the physical pixel spacing is not specified by Pixel Spacing (0028,0030), or Imager Pixel Spacing (0018,1164) or Nominal Scanned Pixel Spacing (0018,2010), either for the entire Image or per-frame in a Functional Group Macro. See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.7.6.3.1.7"
               }
            },
            "."
         ],
         "req" : "1C",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Pixel Aspect Ratio"
      },
      "(0010,2202)" : {
         "desc" : [
            "The species of the patient.",
            "Only a single Item shall be included in this sequence.",
            "Required if the patient is an animal and if Patient Species Description (0010,2201) is not present. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Patient Species Code Sequence",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "1C"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "MAC",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The MAC generated as described in ",
            {
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3"
               },
               "el" : "xref"
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
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
      "(0018,a001)[<0>](0008,1072)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : [
            "Identification of the operator(s) of the contributing equipment.",
            "One or more items are permitted in this sequence.",
            "The number and order of Items shall correspond to the number and order of values of Operators' Name (0008,1070), if present."
         ],
         "module" : "SOP Common",
         "name" : "Operator Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document"
      },
      "(0010,1020)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Patient's Size",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Length or size of the Patient, in meters.",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "el" : "para"
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
         "req" : "1",
         "entity" : "Document",
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0018,1000)" : {
         "usage" : "M",
         "name" : "Device Serial Number",
         "req" : "3",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer's serial number of the equipment that contributed to the composite instance.",
         "module" : "SOP Common"
      },
      "(0008,0110)[<0>](0008,0102)" : {
         "req" : "1",
         "entity" : "Document",
         "name" : "Coding Scheme Designator",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The value of a Coding Scheme Designator, used in this SOP Instance, which is being mapped."
      },
      "(0018,a001)[<0>](0008,1010)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "User defined name identifying the machine that contributed to the composite instance.",
         "module" : "SOP Common",
         "name" : "Station Name",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document"
      },
      "(4ffe,0001)[<0>](0400,0020)" : {
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Data Elements Signed",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
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
         ]
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
         "module" : "General Study",
         "usage" : "M",
         "name" : "Person Identification Code Sequence",
         "req" : "1",
         "entity" : "Study"
      },
      "(0040,a375)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : [
            "Full set of Composite SOP Instances, of which the creator is aware, which were created to satisfy the current Requested Procedure(s) for which this SR Document is generated or that are referenced in the content tree.",
            "One or more Items shall be included in this sequence.",
            "Required if the creator is aware of Composite Objects acquired in order to satisfy the Requested Procedure(s) for which the SR Document is or if instances are referenced in the content tree. May be present otherwise.",
            [
               "See ",
               {
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_C.17.2.3"
                  },
                  "el" : "xref"
               },
               " for further explanation."
            ]
         ],
         "req" : "1C",
         "entity" : "Document",
         "name" : "Current Requested Procedure Evidence Sequence",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0070,0023)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "desc" : [
            "See ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.18.9.1.2"
               }
            },
            " for Enumerated Values."
         ],
         "module" : "SR Document Content",
         "name" : "Graphic Type",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "SR Document General",
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "req" : "3",
         "name" : "Retrieve Location UID",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a300)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ],
         "desc" : [
            "This is the value of the Content Item.",
            "Shall consist of a Sequence of Items conveying the measured value(s), which represent integers or real numbers and units of measurement.",
            "Zero or one Item shall be included in this sequence."
         ],
         "req" : "2",
         "entity" : "Document",
         "name" : "Measured Value Sequence",
         "usage" : "M"
      },
      "(0040,a078)[<0>](0008,1010)" : {
         "desc" : [
            "Name of the device observer for this document instance.",
            "Required if Observer Type value is DEV."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General",
         "usage" : "M",
         "name" : "Station Name",
         "entity" : "Document",
         "req" : "2C"
      },
      "(0040,a370)[<0>](0032,1060)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "desc" : "Institution-generated administrative description or classification of Requested Procedure.",
         "req" : "2",
         "entity" : "Document",
         "name" : "Requested Procedure Description",
         "usage" : "M"
      },
      "(0008,1110)[<0>](0008,1150)" : {
         "entity" : "Study",
         "req" : "1",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "module" : "General Study",
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-11"
         ]
      },
      "(0018,1050)" : {
         "req" : "3",
         "entity" : "Equipment",
         "usage" : "M",
         "name" : "Spatial Resolution",
         "module" : "General Equipment",
         "mod_tables" : [
            "table_C.7-8"
         ],
         "desc" : "The inherent limiting resolution in mm of the acquisition equipment for high contrast objects for the data gathering and reconstruction technique chosen. If variable across the images of the series, the value at the image center."
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)" : {
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Sequence",
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ]
      },
      "(0040,a730)[<0>](0040,a300)[<1>](0040,08ea)" : {
         "entity" : "Document",
         "req" : "1",
         "usage" : "M",
         "name" : "Measurement Units Code Sequence",
         "module" : "SR Document Content",
         "desc" : [
            "Units of measurement.",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.1-1"
         ]
      },
      "(0038,0014)[<0>](0040,0031)" : {
         "entity" : "Study",
         "req" : "1C",
         "usage" : "U",
         "name" : "Local Namespace Entity ID",
         "module" : "Patient Study",
         "desc" : "Identifies an entity within the local namespace or domain. Required if Universal Entity ID (0040,0032) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.7-4a",
            "table_10-17"
         ]
      },
      "(0040,a370)[<0>](0040,2016)" : {
         "module" : "SR Document General",
         "desc" : "The order number assigned to the Imaging Service Request by the party placing the order.",
         "mod_tables" : [
            "table_C.17-2"
         ],
         "entity" : "Document",
         "req" : "2",
         "usage" : "M",
         "name" : "Placer Order Number/Imaging Service Request"
      },
      "(0040,a730)[<0>](0040,a132)" : {
         "desc" : [
            "List of samples within a multiplex group specifying temporal points of the referenced data. Position of first sample is 1.",
            "Required if the Referenced SOP Instance is a Waveform and Referenced Time Offsets (0040,A138) and Referenced DateTime (0040,A13A) are not present.",
            "May be used only if Referenced Channels (0040,A0B0) refers to channels within a single multiplex group."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "module" : "SR Document Content",
         "usage" : "M",
         "name" : "Referenced Sample Positions",
         "entity" : "Document",
         "req" : "1C"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
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
         "entity" : "Document",
         "name" : "Data Elements Signed",
         "usage" : "M"
      },
      "(0008,1049)[<0>](0008,0082)" : {
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "module" : "General Study"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0010)" : {
         "desc" : "Number of rows in the image.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "module" : "SR Document Content",
         "name" : "Rows",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1"
      },
      "(0008,0013)" : {
         "entity" : "Document",
         "req" : "3",
         "usage" : "M",
         "name" : "Instance Creation Time",
         "module" : "SOP Common",
         "desc" : [
            "Time the SOP Instance was created.",
            "This is the time that the SOP Instance UID was assigned, and does not change during subsequent coercion of the instance."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Referenced SOP Instance UID"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0040,e011)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : "Unique identifier of the system where the Composite Object(s) may be retrieved on the network.",
         "req" : "3",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Retrieve Location UID"
      },
      "(0012,0071)" : {
         "req" : "3",
         "entity" : "Series",
         "usage" : "U",
         "name" : "Clinical Trial Series ID",
         "module" : "Clinical Trial Series",
         "mod_tables" : [
            "table_C.7-5b"
         ],
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
         ]
      },
      "(0008,0201)" : {
         "module" : "SOP Common",
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
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "targetptr" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber"
                                       },
                                       "el" : "olink"
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
                           "el" : "listitem",
                           "content" : [
                              "\n                      ",
                              {
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
               ]
            },
            "Time earlier than UTC is expressed as a negative offset.",
            {
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
         "req" : "3",
         "entity" : "Document",
         "name" : "Timezone Offset From UTC",
         "usage" : "M"
      },
      "(0010,2299)" : {
         "desc" : [
            "Name of organization with medical decision making authority for the patient.",
            "Required if patient is an animal. May be present otherwise."
         ],
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient",
         "name" : "Responsible Organization",
         "usage" : "M",
         "entity" : "Patient",
         "req" : "2C"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0020)" : {
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "desc" : [
            "A list of Data Element Tags in the order they appear at the top level of the referenced SOP Instance that identify the Data Elements used in creating the MAC. See ",
            {
               "attrs" : {
                  "linkend" : "sect_C.12.1.1.3.1.1",
                  "xrefstyle" : "select: label"
               },
               "el" : "xref"
            },
            "."
         ],
         "module" : "SR Document General",
         "name" : "Data Elements Signed",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(fffa,fffa)[<0>](0400,0120)" : {
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
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3.1.2"
               }
            },
            "."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "Signature",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1"
      },
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0010)" : {
         "entity" : "Document",
         "req" : "1",
         "name" : "MAC Calculation Transfer Syntax UID",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : [
            "The Transfer Syntax UID used to encode the values of the Data Elements included in the MAC calculation. When computing the MAC, only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
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
                           "el" : "listitem",
                           "content" : [
                              "\n                        ",
                              {
                                 "content" : [
                                    "Certain Transfer Syntaxes, particularly those that are used with compressed data, allow the fragmentation of the pixel data to change. If such fragmentation changes, Digital Signatures generated with such Transfer Syntaxes could become invalid."
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
                                    "This does not constrain the transfer syntax used to transmit the object."
                                 ],
                                 "el" : "para"
                              },
                              "\n                      "
                           ],
                           "el" : "listitem"
                        },
                        "\n                    "
                     ]
                  },
                  "\n                  "
               ],
               "el" : "note"
            }
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0088,0130)" : {
         "module" : "SR Document General",
         "desc" : "The user or implementation specific human readable identifier that identifies the Storage Media on which the Composite Object (s) reside.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "entity" : "Document",
         "req" : "3",
         "name" : "Storage Media File-Set ID",
         "usage" : "M"
      },
      "(0008,0060)" : {
         "module" : "SR Document Series",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : [
            "Modality type.",
            {
               "title" : "Enumerated Values:",
               "list" : [
                  [
                     "SR",
                     "SR Document"
                  ]
               ],
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "entity" : "Series",
         "name" : "Modality",
         "usage" : "M"
      },
      "(0040,a730)[<0>](0040,a122)" : {
         "req" : "1C",
         "entity" : "Document",
         "name" : "Time",
         "usage" : "M",
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "desc" : [
            "This is the value of the Content Item.",
            "Required if Value Type (0040,A040) is TIME."
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0100)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : [
            "Number of bits allocated for each pixel sample. Each sample shall have the same number of bits allocated. See ",
            {
               "el" : "olink",
               "attrs" : {
                  "targetdoc" : "PS3.5",
                  "xrefstyle" : "select: labelnumber",
                  "targetptr" : "PS3.5"
               }
            },
            " for further explanation."
         ],
         "module" : "SR Document Content",
         "name" : "Bits Allocated",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1160)" : {
         "entity" : "Document",
         "req" : "1C",
         "usage" : "M",
         "name" : "Referenced Frame Number",
         "module" : "SR Document Content",
         "desc" : [
            "Identifies the frame numbers within the Referenced SOP Instance to which the reference applies. The first frame shall be denoted as frame number 1.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "el" : "para",
                     "content" : [
                        "This Attribute may be multi-valued."
                     ]
                  },
                  "\n                "
               ],
               "el" : "note"
            },
            "Required if the Referenced SOP Instance is a multi-frame image and the reference does not apply to all frames, and Referenced Segment Number (0062,000B) is not present."
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1"
         ]
      },
      "(0100,0424)" : {
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Any comments associated with the setting of the SOP Instance Status (0100,0410) to AO.",
         "module" : "SOP Common",
         "name" : "SOP Authorization Comment",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0400,0403)[<3>](0400,0404)" : {
         "name" : "MAC",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1",
         "desc" : [
            "The MAC generated as described in ",
            {
               "el" : "xref",
               "attrs" : {
                  "xrefstyle" : "select: label",
                  "linkend" : "sect_C.12.1.1.3"
               }
            },
            ", but unencrypted and without inclusion of fields from the Digital Signatures Sequence. See ",
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
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ],
         "module" : "SR Document General"
      },
      "(0008,103e)" : {
         "req" : "3",
         "entity" : "Series",
         "usage" : "M",
         "name" : "Series Description",
         "module" : "SR Document Series",
         "mod_tables" : [
            "table_C.17-1"
         ],
         "desc" : "Description of the Series"
      },
      "(0008,103f)" : {
         "module" : "SR Document Series",
         "desc" : [
            "A coded description of the Series.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-1"
         ],
         "entity" : "Series",
         "req" : "3",
         "name" : "Series Description Code Sequence",
         "usage" : "M"
      },
      "(0040,a078)[<0>](0008,0070)" : {
         "name" : "Manufacturer",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Manufacturer of the device observer.",
            "Required if Observer Type value is DEV."
         ],
         "module" : "SR Document General"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0106)" : {
         "usage" : "M",
         "name" : "Smallest Image Pixel Value",
         "req" : "3",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : "The minimum actual pixel value encountered in this image.",
         "module" : "SR Document Content"
      },
      "(0018,a001)[<0>](0008,0081)" : {
         "usage" : "M",
         "name" : "Institution Address",
         "req" : "3",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Address of the institution where the equipment that contributed to the composite instance is located.",
         "module" : "SOP Common"
      },
      "(0040,a730)[<0>](0040,a13a)" : {
         "name" : "Referenced DateTime",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.7-1"
         ],
         "desc" : [
            "Specifies temporal points for reference by absolute time.",
            "Required if Referenced Sample Positions (0040,A132) and Referenced Time Offsets (0040,A138) are not present."
         ],
         "module" : "SR Document Content"
      },
      "(0400,0561)" : {
         "name" : "Original Attributes Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "3",
         "desc" : [
            "Sequence of Items containing all attributes that were removed or replaced by other values in the main data set.",
            "One or more Items are permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.12-1"
         ],
         "module" : "SOP Common"
      },
      "(0040,a07a)[<0>](0008,1010)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "desc" : [
            "Name of the device observer for this document instance.",
            "Required if Observer Type value is DEV."
         ],
         "req" : "2C",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Station Name"
      },
      "(0008,1030)" : {
         "module" : "General Study",
         "desc" : "Institution-generated description or classification of the Study (component) performed.",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "entity" : "Study",
         "req" : "3",
         "usage" : "M",
         "name" : "Study Description"
      },
      "(0012,0083)" : {
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
         ],
         "module" : "Clinical Trial Study",
         "usage" : "U",
         "name" : "Consent for Clinical Trial Use Sequence",
         "entity" : "Study",
         "req" : "3"
      },
      "(0040,a07a)[<0>](0008,0082)" : {
         "desc" : [
            "Institution or organization to which the identified person is responsible or accountable, or that manages the identified device.",
            "Zero or one Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3b"
         ],
         "module" : "SR Document General",
         "name" : "Institution Code Sequence",
         "usage" : "M",
         "entity" : "Document",
         "req" : "2"
      },
      "(0040,a730)[<0>](0040,db73)" : {
         "name" : "Referenced Content Item Identifier",
         "usage" : "M",
         "req" : "1C",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-6"
         ],
         "desc" : [
            "An ordered set of one or more integers that uniquely identifies the Target Content Item of the relationship.",
            "The root Content Item is referenced by a single value of 1.",
            "Each subsequent integer represents an ordinal position of a Content Item in the Content Sequence (0040,A730) in which it belongs. The Referenced Content Item Identifier is the set of these ordinal positions along the by-value relationship path. The number of values in this Multi-Value Attribute is exactly the number of relationships traversed in the SR content tree plus one.",
            {
               "content" : [
                  "\n                  ",
                  {
                     "content" : [
                        "\n                    ",
                        {
                           "content" : [
                              "\n                      ",
                              {
                                 "content" : [
                                    "See ",
                                    {
                                       "attrs" : {
                                          "linkend" : "sect_C.17.3.2.5",
                                          "xrefstyle" : "select: label"
                                       },
                                       "el" : "xref"
                                    },
                                    "."
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
                                    "Content Items are ordered in a Content Sequence starting from 1 as defined in VR of SQ (see ",
                                    {
                                       "el" : "olink",
                                       "attrs" : {
                                          "targetdoc" : "PS3.5",
                                          "xrefstyle" : "select: labelnumber",
                                          "targetptr" : "PS3.5"
                                       }
                                    },
                                    ")."
                                 ]
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
               ],
               "el" : "note"
            },
            "Required if the Target Content Item is denoted by-reference, i.e., the Document Relationship Macro and Document Content Macro are not included."
         ],
         "module" : "SR Document Content"
      },
      "(0008,0031)" : {
         "entity" : "Series",
         "req" : "3",
         "name" : "Series Time",
         "usage" : "M",
         "module" : "SR Document Series",
         "desc" : "Time the Series started.",
         "mod_tables" : [
            "table_C.17-1"
         ]
      },
      "(0018,a001)[<0>](0008,1072)[<1>](0008,0082)" : {
         "entity" : "Document",
         "req" : "1C",
         "usage" : "M",
         "name" : "Institution Code Sequence",
         "module" : "SOP Common",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.12-1",
            "table_10-1"
         ]
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0032)" : {
         "req" : "3",
         "entity" : "Patient",
         "usage" : "M",
         "name" : "Universal Entity ID",
         "module" : "Patient",
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
                     ]
                  },
                  "\n              "
               ],
               "el" : "note"
            }
         ]
      },
      "(0008,1111)[<0>](0008,1155)" : {
         "usage" : "M",
         "name" : "Referenced SOP Instance UID",
         "entity" : "Series",
         "req" : "1",
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-1",
            "table_10-11"
         ],
         "module" : "SR Document Series"
      },
      "(0040,a730)[<0>](0070,0022)" : {
         "desc" : [
            [
               "An ordered set of (x,y,z) triplets (in mm and may be negative) that define a region of interest in the patient-relative Reference Coordinate System defined by Referenced Frame of Reference UID (3006,0024). See ",
               {
                  "attrs" : {
                     "linkend" : "glossentry_RCS"
                  },
                  "el" : "xref"
               },
               "."
            ],
            [
               "See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "linkend" : "sect_C.18.9.1.1",
                     "xrefstyle" : "select: label"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.9-1"
         ],
         "module" : "SR Document Content",
         "name" : "Graphic Data",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1"
      },
      "(0400,0561)[<0>](0400,0564)" : {
         "module" : "SOP Common",
         "desc" : "The source that provided the SOP Instance prior to the removal or replacement of the values. For example, this might be the Institution from which imported SOP Instances were received.",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "entity" : "Document",
         "req" : "2",
         "name" : "Source of Previous Values",
         "usage" : "M"
      },
      "(0040,a370)[<0>](0040,0027)[<1>](0040,0032)" : {
         "name" : "Universal Entity ID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1C",
         "desc" : "Universal or unique identifier for an entity. Required if Local Namespace Entity ID (0040,0031) is not present; may be present otherwise.",
         "mod_tables" : [
            "table_C.17-2",
            "table_10-17"
         ],
         "module" : "SR Document General"
      },
      "(0040,a370)[<0>](0008,0051)" : {
         "entity" : "Document",
         "req" : "3",
         "name" : "Issuer of Accession Number Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : [
            "Identifier of the Assigning Authority that issued the Accession Number.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0040,a730)[<0>](0040,a504)[<1>](0008,0105)" : {
         "module" : "SR Document Content",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.8-1"
         ],
         "desc" : [
            [
               "Mapping Resource that defines the template. See ",
               {
                  "el" : "xref",
                  "attrs" : {
                     "xrefstyle" : "select: label",
                     "linkend" : "sect_8.4"
                  }
               },
               "."
            ],
            {
               "list" : [
                  [
                     "DCMR",
                     "DICOM Content Mapping Resource"
                  ]
               ],
               "title" : "Defined Terms:",
               "type" : "variablelist"
            }
         ],
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Mapping Resource"
      },
      "(0400,0500)[<0>](0400,0520)" : {
         "name" : "Encrypted Content",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
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
         "module" : "SOP Common"
      },
      "(0040,a385)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "module" : "SR Document General",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1"
      },
      "(0008,0030)" : {
         "req" : "2",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Study Time",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Time the Study started."
      },
      "(0400,0500)[<0>](0400,0510)" : {
         "entity" : "Document",
         "req" : "1",
         "name" : "Encrypted Content Transfer Syntax UID",
         "usage" : "M",
         "module" : "SOP Common",
         "desc" : "Transfer Syntax used to encode the encrypted content. Only Transfer Syntaxes that explicitly include the VR and use Little Endian encoding shall be used.",
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0088,0200)[<2>](0028,0107)" : {
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_C.7-11b"
         ],
         "desc" : "The maximum actual pixel value encountered in this image.",
         "module" : "SR Document Content",
         "name" : "Largest Image Pixel Value",
         "usage" : "M",
         "req" : "3",
         "entity" : "Document"
      },
      "(0010,0024)[<0>](0040,0036)[<1>](0040,0033)" : {
         "module" : "Patient",
         "mod_tables" : [
            "table_C.7-1",
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
         ],
         "req" : "1C",
         "entity" : "Patient",
         "name" : "Universal Entity ID Type",
         "usage" : "M"
      },
      "(0008,114a)[<0>](0040,a170)" : {
         "entity" : "Document",
         "req" : "1",
         "name" : "Purpose of Reference Code Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : [
            "Code describing the purpose of the reference to the Instance(s).",
            "Only a single Item shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2"
         ]
      },
      "(0008,001a)" : {
         "entity" : "Document",
         "req" : "3",
         "name" : "Related General SOP Class UID",
         "usage" : "M",
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
         "mod_tables" : [
            "table_C.12-1"
         ]
      },
      "(0040,a730)[<0>](0040,a040)" : {
         "module" : "SR Document Content",
         "desc" : [
            "The type of the value encoded in this Content Item.",
            {
               "type" : "variablelist",
               "list" : [
                  [
                     "TEXT",
                     null
                  ],
                  [
                     "NUM",
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
                     "DATETIME",
                     null
                  ],
                  [
                     "UIDREF",
                     null
                  ],
                  [
                     "PNAME",
                     null
                  ],
                  [
                     "COMPOSITE",
                     null
                  ],
                  [
                     "IMAGE",
                     null
                  ],
                  [
                     "WAVEFORM",
                     null
                  ],
                  [
                     "SCOORD",
                     null
                  ],
                  [
                     "SCOORD3D",
                     null
                  ],
                  [
                     "TCOORD",
                     null
                  ],
                  [
                     "CONTAINER",
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
                     "linkend" : "sect_C.17.3.2.1"
                  }
               },
               " for further explanation."
            ]
         ],
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5"
         ],
         "entity" : "Document",
         "req" : "1",
         "name" : "Value Type",
         "usage" : "M"
      },
      "(0008,1110)" : {
         "name" : "Referenced Study Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
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
         "module" : "General Study"
      },
      "(0008,1062)[<0>](0008,0082)" : {
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "req" : "1C",
         "entity" : "Study",
         "usage" : "M",
         "name" : "Institution Code Sequence"
      },
      "(0040,a730)[<0>](0008,1199)[<1>](0008,1199)[<2>](0008,1150)" : {
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "mod_tables" : [
            "table_C.17-6",
            "table_C.17-5",
            "table_C.18.4-1",
            "table_10-11"
         ],
         "module" : "SR Document Content",
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1"
      },
      "(0012,0020)" : {
         "entity" : "Patient",
         "req" : "1",
         "name" : "Clinical Trial Protocol ID",
         "usage" : "U",
         "module" : "Clinical Trial Subject",
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
         "mod_tables" : [
            "table_C.7-2b"
         ]
      },
      "(0008,1062)" : {
         "mod_tables" : [
            "table_C.7-3"
         ],
         "desc" : "Identification of the physician(s) reading the Study. One or more items are permitted in this sequence. If more than one Item, the number and order shall correspond to the value of Name of Physician(s) Reading Study (0008,1060), if present.",
         "module" : "General Study",
         "name" : "Physician(s) Reading Study Identification Sequence",
         "usage" : "M",
         "req" : "3",
         "entity" : "Study"
      },
      "(0018,a001)[<0>](0018,a002)" : {
         "req" : "3",
         "entity" : "Document",
         "name" : "Contribution DateTime",
         "usage" : "M",
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "The Date & Time when the equipment contributed to the composite instance."
      },
      "(0010,2293)" : {
         "usage" : "M",
         "name" : "Patient Breed Code Sequence",
         "entity" : "Patient",
         "req" : "2C",
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
         "mod_tables" : [
            "table_C.7-1"
         ],
         "module" : "Patient"
      },
      "(4ffe,0001)[<0>](0400,0005)" : {
         "desc" : "A number, unique within this SOP Instance, used to identify this MAC Parameters Sequence (4FFE,0001) item from an Item of the Digital Signatures Sequence (FFFA,FFFA).",
         "mod_tables" : [
            "table_C.12-1",
            "table_C.12-6"
         ],
         "module" : "SOP Common",
         "name" : "MAC ID Number",
         "usage" : "M",
         "entity" : "Document",
         "req" : "1"
      },
      "(0040,a375)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1155)" : {
         "module" : "SR Document General",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Instance.",
         "req" : "1",
         "entity" : "Document",
         "name" : "Referenced SOP Instance UID",
         "usage" : "M"
      },
      "(0018,a001)[<0>](0008,0070)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Manufacturer of the equipment that contributed to the composite instance.",
         "req" : "1",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Manufacturer"
      },
      "(0008,0096)[<0>](0008,0082)" : {
         "module" : "General Study",
         "desc" : [
            "Institution or organization to which the identified individual is responsible or accountable. Required if Institution Name (0008,0080) is not present.",
            "Only a single Item shall be included in this Sequence."
         ],
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "entity" : "Study",
         "req" : "1C",
         "name" : "Institution Code Sequence",
         "usage" : "M"
      },
      "(0040,a525)[<0>](0008,1115)[<1>](0008,1199)" : {
         "entity" : "Document",
         "req" : "1",
         "name" : "Referenced SOP Sequence",
         "usage" : "M",
         "module" : "SR Document General",
         "desc" : [
            "References to Composite Object SOP Class/SOP Instance pairs that are part of the Study defined by Study Instance UID and the Series defined by Series Instance UID (0020,000E).",
            "One or more Items shall be included in this sequence."
         ],
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a"
         ]
      },
      "(0008,0096)[<0>](0040,1101)" : {
         "name" : "Person Identification Code Sequence",
         "usage" : "M",
         "req" : "1",
         "entity" : "Study",
         "mod_tables" : [
            "table_C.7-3",
            "table_10-1"
         ],
         "desc" : [
            "A coded entry that identifies a person.",
            "The Code Meaning attribute, though it will be encoded with a VR of LO, may be encoded according to the rules of the PN VR (e.g., caret '^' delimiters shall separate name components), except that a single component (i.e., the whole name unseparated by caret delimiters) is not permitted. Name component groups for use with multi-byte character sets are permitted, as long as they fit within the 64 characters (the length of the LO VR).",
            "One or more Items shall be included in this Sequence."
         ],
         "module" : "General Study"
      },
      "(0010,1002)[<0>](0010,0024)[<1>](0040,0036)" : {
         "req" : "3",
         "entity" : "Patient",
         "name" : "Assigning Facility Sequence",
         "usage" : "M",
         "module" : "Patient",
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
         ]
      },
      "(0008,1048)" : {
         "req" : "3",
         "entity" : "Study",
         "name" : "Physician(s) of Record",
         "usage" : "M",
         "module" : "General Study",
         "mod_tables" : [
            "table_C.7-3"
         ],
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
         ]
      },
      "(0008,0096)[<0>](0040,1103)" : {
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
      "(0040,a360)[<0>](0008,1115)[<1>](0008,1199)[<2>](0008,1150)" : {
         "name" : "Referenced SOP Class UID",
         "usage" : "M",
         "req" : "1",
         "entity" : "Document",
         "mod_tables" : [
            "table_C.17-2",
            "table_C.17-3",
            "table_C.17-3a",
            "table_10-11"
         ],
         "desc" : "Uniquely identifies the referenced SOP Class.",
         "module" : "SR Document General"
      },
      "(0018,a001)[<0>](0018,a003)" : {
         "module" : "SOP Common",
         "mod_tables" : [
            "table_C.12-1"
         ],
         "desc" : "Description of the contribution the equipment made to the composite instance.",
         "req" : "3",
         "entity" : "Document",
         "usage" : "M",
         "name" : "Contribution Description"
      },
      "(0010,1030)" : {
         "entity" : "Study",
         "req" : "3",
         "name" : "Patient's Weight",
         "usage" : "U",
         "module" : "Patient Study",
         "desc" : "Weight of the Patient, in kilograms.",
         "mod_tables" : [
            "table_C.7-4a"
         ]
      },
      "(0010,0024)" : {
         "entity" : "Patient",
         "req" : "3",
         "name" : "Issuer of Patient ID Qualifiers Sequence",
         "usage" : "M",
         "module" : "Patient",
         "desc" : [
            "Attributes specifying or qualifying the identity of the issuer of the Patient ID, or scoping the Patient ID.",
            "Only a single Item is permitted in this sequence."
         ],
         "mod_tables" : [
            "table_C.7-1",
            "table_10-18"
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
      "Can't handle table_8.8-1 (in table_C.17-1 after (0008,103F))",
      "Can't handle table_8.8-1 (in table_C.17-2 after (0040,A088))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3b after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3b after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3b after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3b after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.17-2 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.17-2 after (0032,1064))",
      "Can't handle table_8.8-1 (in table_C.17-2 after (0040,100A))",
      "Can't handle table_8.8-1 (in table_C.17-2 after (0040,A372))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.17-2:table_C.17-3:table_C.17-3a after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.17-2 after (0040,A170))",
      "Recursive inclusion of table_C.17-6 (in table_C.17-6 after (0040,A010))",
      "Can't handle table_8.8-1 (in table_C.17-6:table_C.17-5 after (0040,A043))",
      "Can't handle table_8.8-1 (in table_C.17-6:table_C.17-5:table_C.18.1-1 after (0040,08EA))",
      "Can't handle table_8.8-1 (in table_C.17-6:table_C.17-5:table_C.18.1-1 after (0040,A301))",
      "Can't handle table_8.8-1 (in table_C.17-6:table_C.17-5:table_C.18.2-1 after (0040,A168))",
      "Can't handle table_8.8-1 (in table_C.12-1 after (0040,A170))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0040,1101))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_10-1 after (0008,0082))",
      "Can't handle table_8.8-1 (in table_C.12-1:table_C.12-6 after (0400,0401))"
   ]
}